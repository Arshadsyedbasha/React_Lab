import React, { useEffect } from 'react';
const LifecycleComponent = () => {
    // Component Mount Phase
    useEffect(() => {
        console.log('Component is mounted');
        // Cleanup function (Unmount Phase)
        return () => {
            console.log('Component will unmount');
        };
    }, []); // Empty dependency array means this effect runs only once on mount
    // Component Update Phase (every render)
    useEffect(() => {
        console.log('Component is updated');
        44
    });
    return <div>Component Lifecycle Example</div>;
};
export default LifecycleComponent;