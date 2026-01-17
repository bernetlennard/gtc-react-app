import { Link } from "react-router-dom";
import type { Country } from "../types/country";
import { countries } from "../data/countries";

type Props = {
    title: string;
    description?: string;
    sortFn: (a: Country, b: Country) => number;
};

export default function CountryTable({ title, description, sortFn }: Props) {
    const countriesSorted = [...countries].sort(sortFn);

    return (
        <section>
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}

            <table>
                <thead>
                <tr>
                    <th>ISO 3166</th>
                    <th>Name</th>
                    <th>Capital</th>
                    <th>Largest City</th>
                    <th style={{ textAlign: "right" }}>Area (km2)</th>
                    <th style={{ textAlign: "right" }}>Population</th>
                    <th>Currency</th>
                </tr>
                </thead>

                <tbody>
                {countriesSorted.map((c) => (
                    <tr key={c.iso3166}>
                        <td>
                            <Link to={`/countries/${c.iso3166}`}>{c.iso3166}</Link>
                        </td>
                        <td>
                            <Link to={`/countries/${c.iso3166}`}>{c.name}</Link>
                        </td>
                        <td>{c.capitalCity}</td>
                        <td>{c.largestCity}</td>
                        <td style={{ textAlign: "right" }}>{c.areaKm2.toLocaleString()}</td>
                        <td style={{ textAlign: "right" }}>{c.population.toLocaleString()}</td>
                        <td>
                            {c.currencyName} ({c.currencyIso4217})
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}
