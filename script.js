const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const contactForm = document.getElementById("contactForm");

const currentYear = document.getElementById("currentYear");


menuToggle.addEventListener("click", function () {

    const menuIsOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", menuIsOpen);

    document.body.classList.toggle("menu-open", menuIsOpen);

});


document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        document.body.classList.remove("menu-open");

    });

});


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const business = document.getElementById("business").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();


    const whatsappMessage =

        `Hola, mi nombre es ${name}.\n\n` +

        `Vi la página web de Acelerador PyME y me gustaría recibir información.\n\n` +

        `Nombre del negocio: ${business || "No especificado"}\n` +

        `Número de teléfono: ${phone}\n\n` +

        `Lo que deseo mejorar:\n${message}`;


    const encodedMessage = encodeURIComponent(whatsappMessage);


    const whatsappURL =

        `https://wa.me/18495700231?text=${encodedMessage}`;


    window.open(whatsappURL, "_blank");

});


currentYear.textContent = new Date().getFullYear();