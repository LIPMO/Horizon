document.addEventListener("DOMContentLoaded", () => {
    console.log("Horizon Dashboard Loaded!");

    // Charger les applications enregistrées dans le localStorage
    loadApplications();
});

function addApplication() {
    let appName = document.getElementById("appName").value;
    let appUrl = document.getElementById("appUrl").value;

    if (!appName || !appUrl) {
        alert("Veuillez entrer un nom et une URL valide !");
        return;
    }

    let appData = { name: appName, url: appUrl };

    // Récupérer les applications existantes du localStorage
    let apps = JSON.parse(localStorage.getItem("apps")) || [];
    apps.push(appData);

    // Sauvegarder la liste mise à jour
    localStorage.setItem("apps", JSON.stringify(apps));

    // Mettre à jour l'affichage
    displayApplication(appData);

    // Réinitialiser le formulaire
    document.getElementById("appName").value = "";
    document.getElementById("appUrl").value = "";
}

function loadApplications() {
    let apps = JSON.parse(localStorage.getItem("apps")) || [];
    apps.forEach(displayApplication);
}

function displayApplication(app) {
    let appsContainer = document.getElementById("appsContainer");

    let appCard = document.createElement("div");
    appCard.classList.add("card");
    appCard.innerHTML = `<a href="${app.url}" target="_blank">${app.name}</a>`;

    appsContainer.appendChild(appCard);
}
