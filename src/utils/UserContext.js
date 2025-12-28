import { createContext } from "react";

const UserContext = createContext({
    loggedUser : "userName",
});

export default UserContext;