import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Main from "./layout/Main";
import {UserProvider} from "./context/UserContext.tsx";

export default function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </UserProvider>
    );
}
