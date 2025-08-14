// i18n.js
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const { join } = require('path');
const { readdirSync, lstatSync } = require('fs');

// Attempt to determine the system's default locale if no specific language is provided.
const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;
// Define the path to the directory containing locale-specific translation folders.
const localesFolder = join(__dirname, './locales'); // Assumes 'locales' folder is sibling to i18n.js

i18next
 .use(Backend) // Integrate the file system backend for loading translations.
 .init({
    initImmediate: false, // Ensures resources are loaded synchronously, important for Node.js CLI.
    fallbackLng: 'en', // Specifies 'en' (English) as the fallback language if a translation is missing.
    // Preload all language directories found within the 'locales' folder.
    preload: readdirSync(localesFolder).filter((fileName) => {
      const joinedPath = join(localesFolder, fileName);
      return lstatSync(joinedPath).isDirectory();
    }),
    backend: {
      // Define the path pattern for i18next to load translation files.
      // {{lng}} will be replaced by the language code (e.g., 'da', 'en'),
      // and {{ns}} by the namespace (e.g., 'translation').
      loadPath: join(localesFolder, '{{lng}}/{{ns}}.json')
    }
  });

// Export a function that provides a fixed translation instance for a given language,
// falling back to the system locale if no language is explicitly provided.
module.exports = (lng) => i18next.getFixedT(lng || systemLocale);
