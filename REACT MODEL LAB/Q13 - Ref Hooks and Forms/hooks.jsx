import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {TextField,Button,Container,Typography,CssBaseline,Paper,}from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
const InputForm = () => {
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            input1: inputRef1.current.value,
            input2: inputRef2.current.value,
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Input 1"
                inputRef={inputRef1}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Input 2"
                inputRef={inputRef2}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container
                sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
                maxWidth="xs">
                <Paper
                    sx={{ px: 4, py: 5, my: "auto" }}
                    elevation={4}
                    component={Paper}>
                    <Typography align="center" component="h1" variant="h4">
                        Input Form Example
                    </Typography>
                    <InputForm />
                </Paper>
            </Container>
        </ThemeProvider>
    );
};
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);