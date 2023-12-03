import React from 'react'
import { useFont } from './FontContext'
import { Typography } from '@mui/material'
const Footer = () => {
    const { font } = useFont()
    return (
        <footer style={{ backgroundColor: 'purple', color: 'white' }}>
            <Typography variant="body1" style={{ fontFamily: font }}>
                &copy; 2023 My React App. All rights reserved.
            </Typography>
        </footer>
    )
}
export default Footer