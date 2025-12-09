import { loadText, extractFields } from "./extractorfields.js";
import { findMissingFields } from "./validator.js";
import { routeClaim } from "./router.js";

const filePath = process.argv[2];

if (!filePath) {
  console.log("Invalid ❌ Please provide the path to the FNOL text file as a command-line argument.");
  process.exit(1);
}


const text = loadText(filePath);

 //Convert FNOL Text → Structured JSON
const extractedFields = extractFields(text);


const missingFields = findMissingFields(extractedFields);


const { route, reasoning } = routeClaim(extractedFields, missingFields);

//  Final Output (As Required by Assignment)
const result = {
  extractedFields,
  missingFields,
  recommendedRoute: route,
  reasoning
};

//  Print JSON Output
console.log(JSON.stringify(result, null, 2));


//“The main.js file acts as the controller. It reads the FNOL document, extracts structured data, validates mandatory fields, applies routing logic, and outputs the final decision in JSON format.”