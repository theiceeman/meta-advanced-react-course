import { useState } from "react";
import "../App.css"

const Form = ({ onSubmit }) => {
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")

    const isDisabled = Number(score) < 5 && comment.length <= 10

    const textAreaPlaceholder = isDisabled
        ? "please provide feedback. 10 character min length."
        : "option feedback"

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ score, comment })
    }


    return (
        <div className="App">
            <form action="">
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div className="Field">
                        <label htmlFor="score">Score: {score}</label>
                        <input
                            type="range"
                            id="score"
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
                    <button disabled={isDisabled} type="submit"> submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;