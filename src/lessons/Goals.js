import { useState } from "react";

const GoalForm = (props) => {
    const [formData, setFormData] = useState({ goal: "", by: "" })

    function changeHandler(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    function submitHandler(e) {
        e.preventDefault()

        props.onAdd(formData)
        setFormData({ goal: "", by: "" })
    }

    return (
        <>
            <h1>
                my little lemon goals
            </h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler} />
                <input type="text" name="by" placeholder="By.." value={formData.by} onChange={changeHandler} />
                <button>Submit goal</button>
            </form>
        </>
    );
}

const ListOfGoals = (props) => {
    return (
        <ul>
            {props.allGoals.map((g, index) => (
                <li key={index}>
                    <span>My Goal is to {g.goal}, by {g.by}</span>
                </li>
            ))}
        </ul>
    );
}




const Goals = () => {
    const [allGoals, updateAllGoals] = useState([])
    function addGoal(goal) {
        updateAllGoals([...allGoals, goal])
    }

    return (
        <div className="App">
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
        </div>
    );
}

export default Goals;