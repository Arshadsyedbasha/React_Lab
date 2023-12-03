import React, { useState } from "react";
function Appp() {
    const [error, setError] = useState(null);
    const fetchData = async () => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/songs'
            );
            if (!response.ok) {
                throw new Error("Invalid Endpoint");
            }
        } catch (error) {
            setError(
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                    Invalid endpoint or error occurred.
                </h1>
            );
            console.error(error);
        }
    };
    return (
        <div>
            <button
                onClick={fetchData}
                style={{
                    padding: "10px",
                    margin: "10px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "blue",
                }}
            >
                Fetch Data
            </button>
            {error && <h1>Error: {error}</h1 >}
        </div>
    );
}
export default Appp;