import type { RateMatrix } from "../types/rates";

export const rates: RateMatrix = {
    codes: ["CHF", "EUR", "USD", "GBP"],
    values: {
        CHF: { CHF: 1.0, EUR: 1.07386, USD: 1.26114, GBP: 0.937044 },
        EUR: { CHF: 0.931216, EUR: 1.0, USD: 1.1744, GBP: 0.872591 },
        USD: { CHF: 0.792932, EUR: 0.851502, USD: 1.0, GBP: 0.743013 },
        GBP: { CHF: 1.06719, EUR: 1.14601, USD: 1.34587, GBP: 1.0 },
    },
};
