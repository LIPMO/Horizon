from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)
DATA_FILE = "data/apps.json"
ICONS_DIR = "static/icons/"

# Vérifier si le fichier JSON et le dossier d'icônes existent
if not os.path.exists("data"):
    os.makedirs("data")

if not os.path.exists(ICONS_DIR):
    os.makedirs(ICONS_DIR)

if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w") as f:
        json.dump([], f)
else:
    with open(DATA_FILE, "r") as f:
        try:
            json.load(f)  # Vérifier si le fichier JSON est valide
        except json.JSONDecodeError:
            with open(DATA_FILE, "w") as f:
                json.dump([], f)  # Réinitialiser si corrompu

# Route principale
@app.route('/')
def home():
    with open(DATA_FILE, "r") as f:
        apps = json.load(f)
    return render_template('index.html', apps=apps)

# Ajouter une application
@app.route('/add_app', methods=['POST'])
def add_app():
    name = request.form.get('name')
    url = request.form.get('url')
    icon = request.files.get('icon')

    if not name or not url:
        return jsonify({"error": "Nom et URL requis"}), 400

    icon_path = "static/icons/default.png"
    if icon:
        icon_filename = f"{ICONS_DIR}{icon.filename}"
        icon.save(icon_filename)
        icon_path = icon_filename

    new_app = {"name": name, "url": url, "icon": icon_path}

    with open(DATA_FILE, "r+") as f:
        apps = json.load(f)
        apps.append(new_app)
        f.seek(0)
        json.dump(apps, f, indent=4)

    return jsonify({"message": "Application ajoutée avec succès"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
