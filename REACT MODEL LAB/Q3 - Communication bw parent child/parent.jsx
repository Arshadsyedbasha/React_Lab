import React from 'react';
import Child from './child';
class Parent extends React.Component {
    state = {
        name: "",
    }
    handleCallback = (childData) => {
        this.setState({ name: childData })
    }
    render() {
        const { name } = this.state; return (
            <div style={{ textAlign: 'center' }}>
                <h1>Child and Parent Components</h1>
                <Child parentCallback={this.handleCallback} />
                {name}
            </div>
        )
    }
}
export default Parent;