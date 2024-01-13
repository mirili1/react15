import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { addBook, saveEditedBook } from "./bookActions";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const BookEditOrAdd = () => {
    const selectedBook = useSelector(allMyBookState => allMyBookState.selectedBook);
    const bookForEdit = useSelector(allMyBookState => allMyBookState.bookForEdit);
    const action = useDispatch();
    let bookSchema = yup.object().shape({
        id: yup.number().required("שדה חובה").typeError("שדה חובה"),
        name: yup.string().required("שדה חובה").typeError("שדה חובה"),
        price: yup.number().required("שדה חובה").typeError("שדה חובה")
    })

    let {  register, handleSubmit, reset, formState: { dirtyFields, errors, isValid } } = useForm({
        defaultValues: bookForEdit ? bookForEdit : undefined,
        mode: "all",
        resolver: yupResolver(bookSchema)
    });
    
    const save = (newBook) => {
        bookForEdit ? action(saveEditedBook(newBook)) : action(addBook(newBook));
        reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(save)} style={{ display: "flex", flexDirection: "column" }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2.5, width: '40ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style={{ display: "flex", flexDirection: "column", margin: "auto" }}
                >
                    <TextField error={Boolean(errors.id)} id="standard-basic" label="קוד" variant="standard" type="Number" helperText={errors.id && errors.id.message}  {...register("id")} />
                    <TextField error={Boolean(errors.name)} id="standard-basic" label="שם" variant="standard" helperText={errors.name && errors.name.message}  {...register("name")} />
                    <TextField error={Boolean(errors.price)} id="standard-basic" label="מחיר"  variant="standard" type="Number" helperText={errors.price && errors.price.message}  {...register("price")} />
                    <TextField  id="standard-basic" label="כתובת תמונה" variant="standard" {...register("src")} />
                    <TextField  id="standard-basic" label="סופר"variant="standard" {...register("author")} />
                    <TextField  id="standard-basic" label="תקציר" variant="standard"   {...register("summary")} />
                </Box>
                    <Button sx={{ direction: "ltr" }} variant="contained" type="submit" disabled={!isValid}>
                        שלח
                    </Button>

            </form>




        </>);
}

export default BookEditOrAdd;