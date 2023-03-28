import { useState } from "react";
import "../App.css"

const Form = () => {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")


    return (
        <div className="App">
            <form action="">
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="Field">
                        <label htmlFor="">Score: {score}</label>
                        <input
                            type="range"
                            min="0"
                            max="10"
                            value={score}
                            onChange={e => setScore(e.target.value)}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="">Comment:</label>
                        <textarea
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                            cols="30"
                            rows="10" />
                    </div>
                    <button type="submit"> submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;