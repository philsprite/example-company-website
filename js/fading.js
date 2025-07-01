document.addEventListener("DOMContentLoaded", function () {
    // Fade-In-Effekt für die gesamte Seite
    document.body.classList.remove("page-hidden");
    document.body.classList.add("page-fade-in");

    // Elemente, die beobachtet werden sollen
    const titleElement = document.getElementById("about-title");
    const imageElement = document.getElementById("image-slide");
    const textElement = document.getElementById("text-slide");
    const imageElement2 = document.getElementById("image-slide-2");
    const textElement2 = document.getElementById("text-slide-2");
    const serviceImageElement = document.getElementById("service-image-slide");
    const serviceTextElement = document.getElementById("service-text-slide");




    const observerOptions = {
        root: null, // Der Viewport ist der root
        rootMargin: "0px 0px -50% 0px", // Triggert, wenn 50% des Elements sichtbar sind
        threshold: 0 // Mindestens ein Pixel sichtbar
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Animation für die Überschrift
                if (entry.target.id === "about-title") {
                    entry.target.classList.add("fadeInDownCustom");
                }

                // Animation für das Bild der ersten Section (von links)
                if (entry.target.id === "image-slide") {
                    entry.target.classList.add("slideInLeft");
                }

                // Animation für den Text der ersten Section (von rechts)
                if (entry.target.id === "text-slide") {
                    entry.target.classList.add("slideInRight");
                }

                // Animation für das Bild der zweiten Section (von rechts)
                if (entry.target.id === "image-slide-2") {
                    entry.target.classList.add("slideInRight");
                }

                // Animation für den Text der zweiten Section (von links)
                if (entry.target.id === "text-slide-2") {
                    entry.target.classList.add("slideInLeft");
                }

                // Animation für das Bild der Service Section (von links)
                if (entry.target.id === "service-image-slide") {
                    entry.target.classList.add("slideInLeft");
                }

                // Animation für den Text der Service Section (von links)
                if (entry.target.id === "service-text-slide") {
                    entry.target.classList.add("slideInRight");
                }

                // Stoppt das Beobachten des Elements nach der ersten Animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (serviceImageElement) {
        observer.observe(serviceImageElement);
    }

    if (serviceTextElement) {
        observer.observe(serviceTextElement);
    }



    // Elemente dem Observer hinzufügen
    observer.observe(titleElement);
    observer.observe(imageElement);
    observer.observe(textElement);
    observer.observe(imageElement2);
    observer.observe(textElement2);

});
