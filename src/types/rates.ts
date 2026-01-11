export type RateMatrix = {
    codes: string[]; // Spalten/Zeilen: z.B. ["CHF","EUR","USD","GBP"]
    values: Record<string, Record<string, number>>; // values[von][nach] = kurs
};
