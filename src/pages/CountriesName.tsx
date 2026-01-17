import CountryTable from "../components/CountryTable";
import type { Country } from "../types/country";

export default function CountriesName() {
    return (
        <CountryTable
            title="Countries (sorted by name)"
            description="Overview list of countries ordered alphabetically by name."
            sortFn={(a: Country, b: Country) => a.name.localeCompare(b.name)}
        />
    );
}
