import CountryTable from "../components/CountryTable";
import type { Country } from "../types/country";

export default function CountriesIso() {
    return (
        <CountryTable
            title="Countries (sorted by ISO 3166)"
            description="Overview list of countries ordered by ISO 3166 code."
            sortFn={(a: Country, b: Country) => a.iso3166.localeCompare(b.iso3166)}
        />
    );
}
