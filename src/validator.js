export const MANDATORY_FIELDS = [
  "policyInformation.policyNumber",
  "policyInformation.policyholderName",
  "incidentInformation.date",
  "incidentInformation.location",
  "incidentInformation.description",
  "involvedParties.claimant",
  "assetDetails.assetType",
  "assetDetails.estimatedDamage",
  "other.claimType"
];

function getValue(obj, path) {
  return path.split(".").reduce((curr, key) => curr?.[key], obj);
}

export function findMissingFields(data) {
  return MANDATORY_FIELDS.filter(field => !getValue(data, field));
}
