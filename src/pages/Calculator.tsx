import {currencies} from "../data/currencies.ts";
import {rates} from "../data/rates.ts";
import {useState} from "react";
import * as React from "react";
import {useUser} from '../context/UserContext';
import type {Transaction} from '../types/transaction';
import Transactions from '../components/Transactions';
import Login from '../components/Login';

export default function Calculator() {
    const [amount, setAmount] = useState<number>(0);
    const [fromCurrency, setFromCurrency] = useState<string>("CHF");
    const [toCurrency, setToCurrency] = useState<string>("EUR");
    const [result, setResult] = useState<number | null>(null);

    const {currentUser} = useUser();
    const [shouldPersist, setShouldPersist] = useState(false); // Checkbox [cite: 13]

    const availableCurrencyKeys = rates.codes;
    const filteredCurrencies = currencies.filter(c => availableCurrencyKeys.includes(c.iso4217));

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        const rate = rates.values[fromCurrency][toCurrency];
        saveToHistory(amount, fromCurrency, toCurrency, rate);
        setResult(amount * rate);
    }

    // Diese Funktion dort aufrufen, wo die Berechnung abgeschlossen ist
    const saveToHistory = (amount: number, from: string, to: string, rate: number) => {


        // Wenn nicht eingeloggt, zeige Login (Schutz personenbezogener Daten [cite: 8, 15])
        if (!currentUser) return <Login/>;

        // REQ 0008: Wahlweise persistieren
        if (shouldPersist) {
            const payload: Transaction = {
                id: Date.now(),
                transactionDate: new Date().toISOString(),
                userLogin: currentUser.userLogin, // Hinterlegt den eingeloggten User [cite: 24]
                sourceAmount: amount,
                sourceCurrency: from,
                targetCurrency: to,
                exchangeRate: rate
            };
            console.log("Sende an RESTful Web Service:", payload); // [cite: 21]
            alert("Transaktion für " + currentUser.userLogin + " gespeichert!");
        } else {
            alert("Berechnung durchgeführt (nicht gespeichert).");
        }
    };

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
                    <label className="form-check-label" htmlFor="persist">
                        Transaktion dauerhaft speichern (REQ 0008)
                    </label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="persist"
                        checked={shouldPersist}
                        onChange={e => setShouldPersist(e.target.checked)}
                    />
                </div>
                <div>
                    <button type="submit">Calculate</button>
                </div>
            </form>
            {result != null && (
                <div>Ergebnis: {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}</div>
            )}
            <Transactions/>
        </section>
    )
}