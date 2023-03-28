
import {  UserProvider, useUser } from "../context/UserContext";

const LoggedInUser = () => {
    const user = useUser()

    return (
        <p>
            hello <span className="Username">{user?.name}</span>
        </p>
    );
}



const Header = () => {
    return (
        <header>
            <h2>Blog App</h2>

                <LoggedInUser />

        </header>
    );
}

const Page = () => {
    const user = useUser()
    return (
        <div>
            <h2>lorem ipsum dolor?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit reiciendis, quisquam saepe fuga neque quidem culpa nisi autem necessitatibus voluptates incidunt, in nobis tenetur provident aperiam eligendi ipsa. Voluptatum reiciendis ex repellat. Tempora nemo deserunt sit ratione nobis! Soluta magnam quaerat earum necessitatibus! Quos odio, vero adipisci hic deserunt quae! Nisi iste eum ex libero repellat quam sint. Ratione!
            </p>
            <p>written by {user?.name}</p>
        </div>
    );
}


const App = () => {
    return (
        <div className="App">
            <Header />
            <Page />
        </div>
    )
}

const Context = () => {
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
}

export default Context;