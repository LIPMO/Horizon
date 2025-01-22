document.addEventListener("DOMContentLoaded", () => {
    console.log("Horizon Loaded!");

    // Afficher/Masquer le formulaire
    document.getElementById("toggleForm").addEventListener("click", () => {
        document.getElementById("appFormContainer").classList.toggle("hidden");
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
