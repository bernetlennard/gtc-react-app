import CountryTable from "../components/CountryTable";
import type { Country } from "../types/country";

export default function CountriesArea() {
    return (
        <CountryTable
            title="Countries (sorted by area)"
            description="Overview list of countries ordered by area (largest to smallest)."
            sortFn={(a: Country, b: Country) => b.areaKm2 - a.areaKm2}
        />
    );
}
