import { useRef } from "react";

const UseRef = () => {
    const formInputRef = useRef(null)
    const focusInput = () => {
        formInputRef.current.focus()

    }
    return (
        <>
            <h1>
                <input ref={formInputRef} type="text" />
                <button onClick={focusInput}> Focus Input</button>
            </h1>

        </>

    );
}

export default UseRef;