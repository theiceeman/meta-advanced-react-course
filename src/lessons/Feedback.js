import Form from  "./Form"

const Feedback = () => {
    const handleSubmit = () => {
        console.log("Form submitted")
    }
    return (
        <div className="App">
            <Form onSubmit={handleSubmit} />
        </div>
    );
}

export default Feedback;