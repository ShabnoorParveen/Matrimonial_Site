function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
    );

    // Find and hide the "Powered by Google Translate" attribution
    var googleAttribution = document.querySelector(".goog-logo-link");
    googleAttribution.style.display = "none";
}
