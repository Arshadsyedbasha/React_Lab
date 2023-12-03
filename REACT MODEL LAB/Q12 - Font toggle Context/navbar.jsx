import React from 'react'
import { useFont } from './FontContext'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const Navbar = () => {
    const { font, toggleFont } = useFont()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h6"
                    sx={{ fontFamily: font }}
                >
                    App
                </Typography>
                <Button color="inherit" onClick={toggleFont} sx={{ fontFamily: font }}>
                    Toggle Font
                </Button>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar