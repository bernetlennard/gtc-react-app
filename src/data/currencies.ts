import type { Currency } from "../types/currency";

export const currencies: Currency[] = [
    { iso4217: "CHF", name: "Swiss Franc", countries: ["Liechtenstein", "Switzerland"] },
    { iso4217: "CZK", name: "Czech Koruna", countries: ["Czechia"] },
    {
        iso4217: "EUR",
        name: "Euro",
        countries: ["Austria", "Belgium", "France", "Germany", "Italy", "Spain", "Vatican City"],
    },
    { iso4217: "GBP", name: "Pound Sterling", countries: ["United Kingdom"] },
    { iso4217: "SEK", name: "Swedish Krona", countries: ["Sweden"] },
    { iso4217: "TRY", name: "Turkish Lira", countries: ["Turkey"] },
    { iso4217: "USD", name: "United States Dollar", countries: ["United States"] },
];
