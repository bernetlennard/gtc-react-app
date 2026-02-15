import React, { useState, useEffect } from 'react';
import type {Transaction} from '../types/transaction';

const Transactions: React.FC = () => {
    const [list, setList] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('/transactions.json')
            .then(res => res.json())
            .then(data => setList(data))
            .catch(err => console.error("Fehler beim Laden", err));
    }, []);

    return (
        <div className="mt-4">
            <h5>Transaktionshistorie</h5>
            <table className="table table-sm table-striped">
                <thead>
                <tr>
                    <th>Datum</th>
                    <th>User</th>
                    <th>Betrag</th>
                    <th>Kurs</th>
                </tr>
                </thead>
                <tbody>
                {list.map(t => (
                    <tr key={t.id}>
                        <td>{new Date(t.transactionDate).toLocaleDateString()}</td>
                        <td>{t.userLogin}</td>
                        <td>{t.sourceAmount} {t.sourceCurrency} → {t.targetCurrency}</td>
                        <td>{t.exchangeRate}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;