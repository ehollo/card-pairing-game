import * as React from "react";
import * as ReactDOMClient from 'react-dom/client';
import AppProvider from "./AppProvider";

const domContainer = document.querySelector("#root");
const root = ReactDOMClient.createRoot(domContainer);
root.render(<AppProvider></AppProvider>);