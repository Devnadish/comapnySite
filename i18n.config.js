export const i18n = {
  defaultLocale: "ar", // Set Arabic as the default locale
  locales: ["ar", "en"], // Supported locales
};

// Export the actual locales array
export const Locale = i18n.locales; // This will give you the array of locales

// export const i18n = {
//   defaultLocale: "ar",
//   locales: ["ar", "en"],
// };

// export const Locale = typeof i18n["locales"];
