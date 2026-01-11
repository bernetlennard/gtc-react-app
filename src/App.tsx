import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./layout/Main";

export default function App() {
    return (
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    );
}
