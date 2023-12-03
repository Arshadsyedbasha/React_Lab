import React from 'react'
import { useFont } from './FontContext'
const Home = () => {
    const { font } = useFont()
    return (
        <div style={{ fontFamily: font, textAlign: 'center' }}>
            <h2>Home Component</h2>
            <p>This is the home content with dynamic font.</p>
        </div>
    )
}
export default Home