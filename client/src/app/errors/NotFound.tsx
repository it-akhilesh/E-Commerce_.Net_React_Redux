import { Button, Container, Divider, Link, Paper, Typography } from "@mui/material";


export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 400}}>
            <Typography gutterBottom variant='h3'> Oops - we could noty find what you are looking for</Typography>
            <Divider />
            <Button fullWidth component={Link}>Go back to shop</Button>
        </Container>
    )
}