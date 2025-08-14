📞 Genesys Cloud Node.js Testværktøj
Dette projekt er et automatiseret testværktøj designet til proaktivt at overvåge ydeevnen af Genesys Cloud-kontaktcentre. Værktøjet simulerer opkald, navigerer IVR-flows og måler nøglemetrikker som svartid og IVR-tid.
🚀 Installation
Før du kan køre værktøjet, skal du have Node.js og npm installeret.
Klon repository'et:
git clone https://github.com/din-bruger/genesys-cloud-test-tool.git
cd genesys-cloud-test-tool


Installer afhængigheder:
npm install


⚙️ Opsætning
Opsætningen kræver konfiguration af miljøvariabler i en .env-fil, samt oprettelse af OAuth-klienter i dine Genesys Cloud-organisationer.
1. .env-fil
Opret en fil kaldet .env i roden af projektet. Denne fil vil indeholde dine Genesys Cloud-legitimationsoplysninger og testkonfigurationer. Du skal erstatte pladsholderne ([...]) med dine egne oplysninger.
# Genesys Cloud OAuth-legitimationsoplysninger for Org 1 (Produktion)
GENESYS_CLOUD_ORG1_CLIENT_ID="[DIN_ORG1_CLIENT_ID]"
GENESYS_CLOUD_ORG1_CLIENT_SECRET="[DIN_ORG1_CLIENT_SECRET]"
GENESYS_CLOUD_ORG1_REGION="us_east_1"

# Genesys Cloud OAuth-legitimationsoplysninger for Org 2 (Test)
GENESYS_CLOUD_ORG2_CLIENT_ID="[DIN_ORG2_CLIENT_ID]"
GENESYS_CLOUD_ORG2_CLIENT_SECRET="[DIN_ORG2_CLIENT_SECRET]"
GENESYS_CLOUD_ORG2_REGION="eu_central_1"

# Konfiguration for testkald
TEST_PHONE_NUMBER_ORG1="+4512345678"
TEST_PHONE_NUMBER_ORG2="+4587654321"
TEST_CALL_INTERVAL_SECONDS=300
IVR_DTMF_SEQUENCE="123#"


2. Genesys Cloud OAuth-klienter
For hver af dine Genesys Cloud-organisationer skal du oprette en OAuth-klient med Client Credentials Grant. Sørg for at tildele de nødvendige roller og scopes:
conversations:call:add
conversations:call:disconnect
analytics:conversationDetail:view
notifications:all:subscribe
🕹️ Brug
Start applikationen
Start applikationen med følgende kommando:
npm start


Dette vil starte den simulerede Node.js-server og åbne brugergrænsefladen i din browser.
Interager med appen
Vælg faneblad: Brug navigationen til at skifte mellem Testværktøj og Kildekode.
Start/Stop test: Klik på Start Test for at begynde de simulerede testcyklusser. Klik igen for at stoppe.
Juster interval: Brug skyderen til at ændre intervallet mellem hvert testkald.
Vælg organisation: Brug knappen til at skifte mellem Org 1 (Prod) og Org 2 (Test).
Live-loggen vil vise status for hvert opkald, og testresultaterne vil blive vist, når en testcyklus er fuldført.
