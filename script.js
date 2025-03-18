document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");

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
});