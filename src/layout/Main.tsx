import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Currencies from "../pages/Currencies";
import Rates from "../pages/Rates";

import CountriesIso from "../pages/CountriesIso.tsx";
import CountriesName from "../pages/CountriesName";
import CountriesArea from "../pages/CountriesArea";
import CountriesPopulation from "../pages/CountriesPopulation";
import CountryDetails from "../pages/CountryDetails";

export default function Main() {
    return (
        <div className="app-shell">
            <Header />

            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/currencies" element={<Currencies />} />
                    <Route path="/rates" element={<Rates />} />

                    <Route path="/countries" element={<Navigate to="/countries/iso" replace />} />
                    <Route path="/countries/iso" element={<CountriesIso />} />
                    <Route path="/countries/name" element={<CountriesName />} />
                    <Route path="/countries/area" element={<CountriesArea />} />
                    <Route path="/countries/population" element={<CountriesPopulation />} />
                    <Route path="/countries/:iso" element={<CountryDetails />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
