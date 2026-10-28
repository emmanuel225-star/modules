import { addition } from "./math.js";
import  converter  from "number-to-words";
const resultat = addition (2, 3);
console.log(resultat);
// affiche : 5
console.log(converter.toWords(resultat));


