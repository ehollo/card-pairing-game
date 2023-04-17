import * as React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { App } from "./app";

const domContainer = document.querySelector("#root");
const root = ReactDOMClient.createRoot(domContainer);
root.render(<App></App>);