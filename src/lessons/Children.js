import '../App.css'

const Button = ({ children, backgroundColor }) => {
    return <button style={{ backgroundColor }}>{children}</button>
}

const Alert = ({ children }) => {
    return (
        <>
            <div className="Overlay"></div>
            <div className="Alert">{children}</div>
        </>
    )
}

const DeleteButton = () => {
    return <Button backgroundColor="red"> Delete </Button>
}


const Children = () => {
    return (
        <div className="App">
            <header>little lemon eatery</header>
            <Alert>
                <h4>delete account</h4>
                <p>
                    are you sure you want to delete?
                </p>
                <DeleteButton />
            </Alert>
        </div>
    );
}

export default Children;