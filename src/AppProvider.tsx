import * as React from "react"
import { App } from "./app"
import CardProvider from "./context/CardProvider"

const AppProvider = () => {

    return (
        <CardProvider>
            <App></App>
        </CardProvider>
    )
}

export default AppProvider;