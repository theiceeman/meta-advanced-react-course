import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'buy_ingredients':
            return { money: state.money - 10 }
            break;
        case 'sell_a_meal':
            return { money: state.money + 10 }
            break;
        case 'celebrity_visit':
            return { money: state.money + 500 }
            break;
        default:
            return state
            break;
    }
}

const UseReducer = () => {
    const initialState = { money: 100 }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="App">
            <h1>wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({ type: 'buy_ingredients' })} >shopping for veggies!</button>
                <button onClick={() => dispatch({ type: 'sell_a_meal' })} >serve a meal to customer!</button>
                <button onClick={() => dispatch({ type: 'celebrity_visit' })} >celebrity visit!</button>
            </div>
        </div>
    );
}

export default UseReducer;