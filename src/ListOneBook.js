import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useDispatch } from "react-redux";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as allActions from "./bookActions"
import { Typography } from '@mui/material';
const ListOneBook = ({ book }) => {
    const action = useDispatch();
    return (
        <>
            <Box sx={{ padding: "10px", textAlign:"center"}}>
                <Paper sx={{padding: "10px",width:"50%",margin:"auto"}}>
                    <Typography gutterBottom variant="h5">{book.name}</Typography>
                    <Stack sx={{ justifyContent:"center"}} spacing={2} direction="row">
                        <Button variant="text" onClick={() => { action(allActions.selectedBook(book.id)) }}>הצג פרטים</Button>
                        <Button variant="text" onClick={() => { action(allActions.removeBook(book.id)) }}>מחק</Button>
                        <Button variant="text" onClick={() => { action(allActions.selectBookForEdit(book.id)) }}>ערוך</Button>
                    </Stack>
                </Paper>
            </Box>
        </>);
}

export default ListOneBook;