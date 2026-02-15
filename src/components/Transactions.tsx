import React, { useState, useEffect } from 'react';
import type { Transaction } from '../types/transaction';

const Transactions: React.FC = () => {
    const [list, setList] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('/transactions.json')
            .then(res => res.json())
            .then(data => setList(data))
            .catch(err => console.error("Fehler beim Laden der History:", err));
    }, []);

    return (
        <div className="mt-4">
            <h5>Letzte Transaktionen (Simulation REST-GET)</h5>
            <table className="table">
                <thead>
                <tr>
                    <th>Datum</th>
                    <th>User</th>
                    <th>Transaktion</th>
                    <th>Kurs</th>
                </tr>
                </thead>
                <tbody>
                {list.map(t => (
                    <tr key={t.id}>
                        <td>{new Date(t.transactionDate).toLocaleDateString()}</td>
                        <td>{t.userLogin}</td>
                        <td>{t.sourceAmount} {t.sourceCurrency} → {t.targetCurrency}</td>
                        <td>{t.exchangeRate.toFixed(4)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;