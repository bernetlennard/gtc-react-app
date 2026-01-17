import { Link, useParams } from "react-router-dom";
import { countries } from "../data/countries";

export default function CountryDetails() {
    const params = useParams();
    const iso = (params.iso ?? "").toUpperCase();

    const country = countries.find((c) => c.iso3166 === iso);

    if (!country) {
        return (
            <section>
                <h2>Country not found</h2>
                <p>No country found for ISO code: {iso || "(missing)"}</p>
                <p>
                    <Link to="/countries/iso">Back to countries list</Link>
                </p>
            </section>
        );
    }

    return (
        <section>
            <h2>
                {country.name} ({country.iso3166})
            </h2>

            <p>{country.geographicalOfficial}</p>

            <p>
                <Link to="/countries/iso">Back to list</Link>
            </p>

            <h3>City information</h3>
            <table>
                <tbody>
                <tr>
                    <th style={{ textAlign: "left" }}>Capital City</th>
                    <td>{country.capitalCity}</td>
                </tr>
                <tr>
                    <th style={{ textAlign: "left" }}>Largest City</th>
                    <td>{country.largestCity}</td>
                </tr>
                </tbody>
            </table>

            <h3>Numbers</h3>
            <table>
                <tbody>
                <tr>
                    <th style={{ textAlign: "left" }}>Area (km2)</th>
                    <td>
                        {country.areaKm2.toLocaleString()} (Rank {country.areaRank})
                    </td>
                </tr>
                <tr>
                    <th style={{ textAlign: "left" }}>Population</th>
                    <td>
                        {country.population.toLocaleString()} (Rank {country.populationRank})
                    </td>
                </tr>
                <tr>
                    <th style={{ textAlign: "left" }}>Calling Code</th>
                    <td>{country.callingCode}</td>
                </tr>
                </tbody>
            </table>

            <h3>Codes</h3>
            <table>
                <tbody>
                <tr>
                    <th style={{ textAlign: "left" }}>ISO 3166</th>
                    <td>{country.iso3166}</td>
                </tr>
                <tr>
                    <th style={{ textAlign: "left" }}>Top Level Domains</th>
                    <td>{country.topLevelDomains.join(", ")}</td>
                </tr>
                <tr>
                    <th style={{ textAlign: "left" }}>Currency</th>
                    <td>
                        {country.currencyName} ({country.currencyIso4217})
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}
