/**
 * START: Follow the instructions below.
 */

interface Country extends CountryWithPopulation {
    name: string;
    code: string;
}

// Complete the `CountryWithPopulation` interface:
//
// - Extend the `Country` interface
// - Add a `population` property with an appropriate type

interface CountryWithPopulation {
      name:string;
      code:string;
      population:number;
}

const countryA: CountryWithPopulation = {
    name: "India",
    code: "IN",
    population: 1_352_642_280,
};
 
const countryB: Country  = {
    name: "Italy",
    code: "IT",
    population: 1_340_345,
   
};

const countryC: CountryWithPopulation = {
    name: "Spain",
    code: "ES",
    population: 47_450_795,
};

// ----

export {};
