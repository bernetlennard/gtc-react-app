import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Currencies from "../pages/Currencies";
import Rates from "../pages/Rates";

export default function Main() {
    return (
        <div className="app-shell">
            <Header />

            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/currencies" element={<Currencies />} />
                    <Route path="/rates" element={<Rates />} />

                    {/* Fallback: unbekannte URLs */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
