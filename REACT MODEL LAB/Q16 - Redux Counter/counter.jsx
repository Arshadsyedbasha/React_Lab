import { connect } from "react-redux";
import { increment, decrement } from "./action";
function Counter({ count, increment, decrement }) {
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}
function Mapto(state) {
    return {
        count: state.count
    };
}
const dis = { increment, decrement };
export default connect(Mapto, dis)(Counter);