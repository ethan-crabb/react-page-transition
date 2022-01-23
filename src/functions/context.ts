import { createContext } from "react";

export const TransContext = createContext({
    active: false,
    nextPage: "/",
    navigate: null
})