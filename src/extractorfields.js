import fs from "fs";

// text contains the full FNOL document as a string
export function loadText(filePath) {
  return fs.readFileSync(filePath, "utf-8");
}


function parseKeyValueText(text) {
  const lines = text.split("\n");
  const map = {};

  for (let line of lines) {
    if (!line.includes(":")) continue;

    const [key, ...rest] = line.split(":");
    const value = rest.join(":").trim();

    map[key.trim().toLowerCase()] = value;
  }

  return map;
}


export function extractFields(text) {// this converts  text -> JSON 
  const data = parseKeyValueText(text);

  return {
    policyInformation: {
      policyNumber: data["policy number"] || null,
      policyholderName: data["policyholder name"] || null,
      effectiveFrom: data["effective from"] || null,
      effectiveTo: data["effective to"] || null,
    },

    incidentInformation: {
      date: data["incident date"] || null,
      time: data["incident time"] || null,
      location: data["location"] || null,
      description: data["description"] || null,
    },

    involvedParties: {
      claimant: data["claimant"] || null,
      thirdParties: data["third parties"] || null,
      contactDetails: data["contact details"] || null,
    },

    assetDetails: {
      assetType: data["asset type"] || null,
      assetId: data["asset id"] || null,
      estimatedDamage: data["estimated damage"]
        ? Number(data["estimated damage"])
        : null,
    },

    other: {
      claimType: data["claim type"] || null,
      attachments: data["attachments"] || null,
      initialEstimate: data["initial estimate"] || null,
    },
  };
}
//FNOL -> First Notice of Loss