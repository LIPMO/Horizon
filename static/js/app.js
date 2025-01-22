document.addEventListener("DOMContentLoaded", () => {
    console.log("Horizon Loaded!");

    // Sélection des éléments
    const toggleFormButton = document.getElementById("toggleForm");
    const appFormContainer = document.getElementById("appFormContainer");

    // Afficher/Masquer le formulaire
    toggleFormButton.addEventListener("click", () => {
        if (appFormContainer.classList.contains("hidden")) {
            appFormContainer.classList.remove("hidden");
            toggleFormButton.textContent = "✖ Fermer le formulaire";
        } else {
            appFormContainer.classList.add("hidden");
            toggleFormButton.textContent = "+ Ajouter une application";
        }
    });

    // Prévisualisation d’icône
    document.getElementById("appIcon").addEventListener("change", function() {
        let file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById("previewIcon").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
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

        if (response.ok) {
            alert("Application ajoutée !");
            location.reload();
        }
    });
});
