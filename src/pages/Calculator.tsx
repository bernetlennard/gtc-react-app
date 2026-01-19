import {currencies} from "../data/currencies.ts";
import {rates} from "../data/rates.ts";
import {useState} from "react";
import * as React from "react";

export default function Calculator() {
    const [amount, setAmount] = useState<number>(0);
    const [fromCurrency, setFromCurrency] = useState<string>("CHF");
    const [toCurrency, setToCurrency] = useState<string>("EUR");
    const [result, setResult] = useState<number | null>(null);

    const availableCurrencyKeys = rates.codes;
    const filteredCurrencies = currencies.filter(c => availableCurrencyKeys.includes(c.iso4217));

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const rate = rates.values[fromCurrency][toCurrency];
        setResult(amount * rate);
    }

    return (
        <section>
            <h1>Calculator</h1>
            <form onSubmit={handleCalculate}>
                <div>
                    <label htmlFor="amount">Betrag: </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="fromCurrency">Ausgangswährung: </label>
                    <select id="fromCurrency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {filteredCurrencies.map((c) => (
                            <option key={c.iso4217} value={c.iso4217}>{c.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="toCurrency">Zielwährung: </label>
                    <select id="toCurrency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {filteredCurrencies.map((c) => (
                            <option key={c.iso4217} value={c.iso4217}>{c.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button type="submit">Calculate</button>
                </div>
            </form>
            {result != null && (
                <div>Ergebnis: {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}</div>
            )}
        </section>
    )
}