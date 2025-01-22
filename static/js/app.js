document.addEventListener("DOMContentLoaded", () => {
    console.log("Horizon Loaded!");

    // Afficher/Masquer le formulaire
    document.getElementById("toggleForm").addEventListener("click", () => {
        document.getElementById("appFormContainer").classList.toggle("hidden");
    });

    // Ajouter une application
    document.getElementById("appForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("name", document.getElementById("appName").value);
        formData.append("url", document.getElementById("appUrl").value);
        formData.append("icon", document.getElementById("appIcon").files[0]);

        let response = await fetch("/add_app", {
            method: "POST",
            body: formData
        });

        let result = await response.json();
        if (response.ok) {
            alert("Application ajoutée !");
            location.reload();
        } else {
            alert("Erreur : " + result.error);
        }
    });
});
