import React, { useState, useEffect } from 'react';
const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    const [errorInfo, setErrorInfo] = useState(null);
    useEffect(() => {
        const handleError = (error, errorInfo) => {
            setHasError(true);
            setError(error);
            setErrorInfo(errorInfo);
        };
        if (hasError) {
            setHasError(false);
            setError(null);
            setErrorInfo(null);
            55
        }
        window.addEventListener('error', handleError);
        return () => {
            window.removeEventListener('error', handleError);
        };
    }, [hasError]);
    if (hasError) {
        return (
            <div>
                <h2>Something went wrong!</h2>
                <p>{error.toString()}</p>
                <div>{errorInfo.componentStack}</div>
            </div>
        );
    }
    return <>{children}</>;
};
const ExampleComponent = () => {
    const throwError = () => {
        throw new Error('This is a deliberate error for demonstration purposes');
    };
    return (
        <div>
            <h1>Example Component</h1>
            <button onClick={throwError}>Click me to throw an error</button>
        </div>
    );
};
const App = () => (
    <ErrorBoundary>
        <ExampleComponent />
    </ErrorBoundary>
);
export default App;