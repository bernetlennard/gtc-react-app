import CountryTable from "../components/CountryTable";
import type { Country } from "../types/country";

export default function CountriesPopulation() {
    return (
        <CountryTable
            title="Countries (sorted by population)"
            description="Overview list of countries ordered by population (highest to lowest)."
            sortFn={(a: Country, b: Country) => b.population - a.population}
        />
    );
}
