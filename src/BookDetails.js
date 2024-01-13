import { useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const BookDetails = () => {
    const selectedBook = useSelector(allMyBookState => allMyBookState.selectedBook);
    return (
        <>
            <Card sx={{ maxWidth: 345, margin: "auto", direction: "rtl" }}>
                <CardMedia
                    component="img"
                    image={selectedBook.src}
                    title={selectedBook.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {selectedBook.name}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        {selectedBook.price} שח 
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {selectedBook.summary}
                    </Typography>
                </CardContent>
            </Card>
        </>);
}

export default BookDetails;