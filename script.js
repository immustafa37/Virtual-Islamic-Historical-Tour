document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const eventFilter = document.getElementById("event-filter");

    function revealEvents() {
        let scrollPos = window.innerHeight * 0.8;
        events.forEach(event => {
            let eventTop = event.getBoundingClientRect().top;
            if (eventTop < scrollPos) {
                event.classList.add("show");
            }
        });
    }
    window.addEventListener("scroll", revealEvents);
    revealEvents();

    // 🌙 Dark Mode Toggle
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // 🔍 Event Filtering
    eventFilter.addEventListener("change", function() {
        let filterValue = this.value;
        events.forEach(event => {
            if (filterValue === "all" || event.getAttribute("data-category") === filterValue) {
                event.style.display = "block";
            } else {
                event.style.display = "none";
            }
        });
    });

    // 🗺️ Interactive Map (Example)
    document.getElementById("islamic-map").addEventListener("load", function() {
        let svgDoc = this.contentDocument;
        let makkah = svgDoc.getElementById("makkah");
        let madinah = svgDoc.getElementById("madinah");

        makkah.addEventListener("click", () => alert("Makkah - Birthplace of Prophet Muhammad (PBUH)"));
        madinah.addEventListener("click", () => alert("Madinah - Migration & first Islamic state"));
    });
});