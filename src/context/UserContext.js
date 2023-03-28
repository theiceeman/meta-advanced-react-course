import { createContext, useContext, useState } from "react";

// set default state of the context state
const UserContext = createContext(undefined)

// The UserProvider component that wraps its children components in a UserContext Provider, 
// allowing descendant components to subscribe to updates from the user object
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "john",
        email: "john@example.com",
        dob: "12/10/2201"
    })
    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>;
};


// this hook provides an easy way for descendant components to access the user data stored in the UserContext
export const useUser = () => useContext(UserContext)
