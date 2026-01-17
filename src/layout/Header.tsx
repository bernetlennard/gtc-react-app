import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="app-header">
            <div className="app-header__title">
                <h1>Global Travel Companion</h1>
            </div>

            <nav className="app-header__nav">
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>

                <NavLink to="/countries/iso" className={({ isActive }) => (isActive ? "active" : "")}>
                    Countries
                </NavLink>

                <NavLink to="/currencies" className={({ isActive }) => (isActive ? "active" : "")}>
                    Currencies
                </NavLink>

                <NavLink to="/rates" className={({ isActive }) => (isActive ? "active" : "")}>
                    Rates
                </NavLink>
            </nav>
        </header>
    );
}
