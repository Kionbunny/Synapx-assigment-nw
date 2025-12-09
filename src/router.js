export function routeClaim(data, missingFields) {
  const description = (data.incidentInformation.description || "").toLowerCase();
  const claimType = (data.other.claimType || "").toLowerCase();
  const damage = data.assetDetails.estimatedDamage;

 
  if (missingFields.length > 0) {
    return {
      route: "Manual review",
      reasoning: `Missing mandatory fields: ${missingFields.join(", ")}`
    };
  }


  const fraudKeywords = ["fraud", "inconsistent", "staged"];
    const matchedWord = fraudKeywords.find(word => description.includes(word));
  if (matchedWord) {
    return {
      route: "Investigation queue",
       reasoning: `Fraud-related keyword detected: ${matchedWord}`
    };
  }


  if (claimType.includes("injury")) {
    return {
      route: "Specialist queue",
      reasoning: "Claim type is injury"
    };
  }

  if (typeof damage === "number" && damage < 25000) {
    return {
      route: "Fast-track",
      reasoning: "Estimated damage is below 25,000"
    };
  }


  return {
    route: "Standard queue",
    reasoning: "No special routing conditions matched"
  };
}
