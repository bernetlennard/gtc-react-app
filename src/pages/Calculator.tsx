import { currencies } from "../data/currencies.ts";
import { rates } from "../data/rates.ts";
import { useState } from "react";
import * as React from "react";
import { useUser } from '../context/UserContext';
import type { Transaction } from '../types/transaction';
import Transactions from '../components/Transactions';
import Login from '../components/Login';

export default function Calculator() {
    const { currentUser } = useUser();
    const [amount, setAmount] = useState<number>(0);
    const [fromCurrency, setFromCurrency] = useState<string>("CHF");
    const [toCurrency, setToCurrency] = useState<string>("EUR");
    const [result, setResult] = useState<number | null>(null);
    const [shouldPersist, setShouldPersist] = useState(false);

    if (!currentUser) {
        return <Login />;
    }

    const availableCurrencyKeys = rates.codes;
    const filteredCurrencies = currencies.filter(c => availableCurrencyKeys.includes(c.iso4217));

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const rate = rates.values[fromCurrency][toCurrency];

        if (shouldPersist) {
            const payload: Transaction = {
                id: Date.now(),
                transactionDate: new Date().toISOString(),
                userLogin: currentUser.userLogin,
                sourceAmount: amount,
                sourceCurrency: fromCurrency,
                targetCurrency: toCurrency,
                exchangeRate: rate
            };
            console.log("REST-POST an Service vorbereitet:", payload);
            alert("Transaktion gespeichert!");
        }

        setResult(amount * rate);
    }

    return (
        <section>
            <h1>Calculator</h1>
            <p>Eingeloggt als: <strong>{currentUser.firstName} {currentUser.lastName}</strong></p>

            <form onSubmit={handleCalculate}>
                <div>
                    <label>Betrag: </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
                </div>
                <div>
                    <label>Von: </label>
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {filteredCurrencies.map((c) => (
                            <option key={c.iso4217} value={c.iso4217}>{c.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Nach: </label>
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {filteredCurrencies.map((c) => (
                            <option key={c.iso4217} value={c.iso4217}>{c.name}</option>
                        ))}
                    </select>
                </div>
                <div style={{ margin: "10px 0" }}>
                    <input
                        type="checkbox"
                        id="persist"
                        checked={shouldPersist}
                        onChange={e => setShouldPersist(e.target.checked)}
                    />
                    <label htmlFor="persist" style={{ marginLeft: "8px" }}>
                        Transaktion dauerhaft speichern
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Berechnen</button>
            </form>

            {result != null && (
                <div style={{ marginTop: "20px", fontWeight: "bold" }}>
                    Ergebnis: {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
                </div>
            )}

            <hr />
            <Transactions />
        </section>
    );
}