# Synapx-assigment-nw

# Autonomous Insurance Claims Processing Agent (Lite)

This project is a lightweight rule-based system that processes FNOL (First Notice of Loss) documents, extracts key insurance-related fields, validates missing or inconsistent data, and routes claims to appropriate workflows such as fast-track, manual review, investigation, or specialist queues.

This project was built as part of the Synapx Junior Software Engineer assessment.

---

## 🚀 Features

- ✅ Extracts structured fields from FNOL text documents
- ✅ Identifies missing mandatory fields
- ✅ Classifies claim type and incident details
- ✅ Applies rule-based workflow routing
- ✅ Generates a short explanation for routing decisions
- ✅ Outputs clean structured JSON


---

## 🧠 Routing Rules Implemented

| Condition | Route |
|----------|--------|
| Any mandatory field missing | Manual Review |
| Description contains `fraud`, `inconsistent`, `staged` | Investigation Queue |
| Claim type = `injury` | Specialist Queue |
| Estimated damage < 25,000 | Fast-Track |
| Otherwise | Standard Queue |

---

## 🏗️ Tech Stack

- **Language:** JavaScript (Node.js)
- **Runtime:** Node.js v18+
- **Parsing:** Regex-based text extraction
- **Architecture:** Modular (Extractor, Validator, Router, Orchestrator)



---
## ▶️ How to Run the Project

### 1️⃣ Install Node.js  
Ensure Node.js is installed:

node -v


### 2️⃣ Install Dependencies

npm install

3️⃣ Run the Project
node src/main.js samples/fnol1.txt





