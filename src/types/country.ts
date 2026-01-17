export type Country = {
    name: string;

    geographicalOfficial: string;
    capitalCity: string;
    largestCity: string;

    areaKm2: number;
    areaRank: number;
    population: number;
    populationRank: number;
    callingCode: string;

    iso3166: string;
    topLevelDomains: string[];
    currencyName: string;
    currencyIso4217: string;
};
