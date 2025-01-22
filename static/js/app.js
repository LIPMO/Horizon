document.addEventListener("DOMContentLoaded", () => {
    console.log("Horizon Dashboard Loaded!");

    // Gestion de l'affichage des paramètres
    document.getElementById("toggleSettings").addEventListener("click", () => {
        document.getElementById("settingsPanel").classList.toggle("hidden");
    });

    // Charger les applications
    loadApplications();
});

function addApplication(event) {
    event.preventDefault();

    let appName = document.getElementById("appName").value;
    let appUrl = document.getElementById("appUrl").value;
    let appIcon = document.getElementById("appIcon").files[0];

    if (!appName || !appUrl) {
        alert("Veuillez entrer un nom et une URL valide !");
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        let appData = {
            name: appName,
            url: appUrl,
            icon: e.target.result
        };

        let apps = JSON.parse(localStorage.getItem("apps")) || [];
        apps.push(appData);
        localStorage.setItem("apps", JSON.stringify(apps));

        displayApplication(appData);
    };

    if (appIcon) {
        reader.readAsDataURL(appIcon);
    } else {
        let appData = { name: appName, url: appUrl, icon: null };
        let apps = JSON.parse(localStorage.getItem("apps")) || [];
        apps.push(appData);
        localStorage.setItem("apps", JSON.stringify(apps));
        displayApplication(appData);
    }

    document.getElementById("appForm").reset();
}

function loadApplications() {
    let apps = JSON.parse(localStorage.getItem("apps")) || [];
    apps.forEach(displayApplication);
}

function displayApplication(app) {
    let appsContainer = document.getElementById("appsContainer");

    let appCard = document.createElement("div");
    appCard.classList.add("card");

    let appLink = document.createElement("a");
    appLink.href = app.url;
    appLink.target = "_blank";

    if (app.icon) {
        let iconImg = document.createElement("img");
        iconImg.src = app.icon;
        iconImg.alt = "Icône";
        iconImg.classList.add("app-icon");
        appLink.appendChild(iconImg);
    }

    appLink.appendChild(document.createTextNode(app.name));
    appCard.appendChild(appLink);
    appsContainer.appendChild(appCard);
}

document.getElementById("appForm").addEventListener("submit", addApplication);
