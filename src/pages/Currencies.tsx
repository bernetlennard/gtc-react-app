import { currencies } from "../data/currencies";

export default function Currencies() {
    return (
        <section>
            <h2>Currencies</h2>
            <p>List of currencies based on ISO 4217.</p>

            <table>
                <thead>
                <tr>
                    <th>ISO 4217</th>
                    <th>Name</th>
                    <th>Countries</th>
                </tr>
                </thead>
                <tbody>
                {currencies.map((c) => (
                    <tr key={c.iso4217}>
                        <td>{c.iso4217}</td>
                        <td>{c.name}</td>
                        <td>
                            <ul style={{ margin: 0, paddingLeft: 18 }}>
                                {c.countries.map((country) => (
                                    <li key={country}>{country}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}
