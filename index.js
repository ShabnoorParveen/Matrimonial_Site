function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
    );

    // Find and hide the "Powered by Google Translate" attribution
    var googleAttribution = document.querySelector(".goog-logo-link");
    googleAttribution.style.display = "none";
}


// sec-5-yourStory dynamic gradeint 

document.addEventListener('DOMContentLoaded', function() {
    const changeGradientButton = document.getElementById('changeGradient');
    const root = document.documentElement;

    changeGradientButton.addEventListener('click', () => {
        const startColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Random color
        const endColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Random color

        root.style.setProperty('--gradient-start', startColor);
        root.style.setProperty('--gradient-end', endColor);
    });
});
