import { rates } from "../data/rates";

export default function Rates() {
    const { codes, values } = rates;

    return (
        <section>
            <h2>Exchange Rates</h2>
            <p>Exchange rates matrix (stand: 01.01.2026).</p>

            <table>
                <thead>
                <tr>
                    <th>von / nach</th>
                    {codes.map((code) => (
                        <th key={code}>{code}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {codes.map((from) => (
                    <tr key={from}>
                        <th style={{ textAlign: "left" }}>{from}</th>
                        {codes.map((to) => (
                            <td key={to}>{values[from][to].toFixed(6)}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
}
