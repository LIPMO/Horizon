# Horizon 🚀

Horizon est une alternative légère à Heimdall, développée en Python avec Flask.  
Il permet de créer un tableau de bord accessible sur un réseau local (port 3000).

## 📌 Fonctionnalités

- 🖥️ Interface simple et épurée
- 🌐 Accès aux applications via des cartes cliquables
- 🚀 Facile à installer et à configurer

## 📥 Installation

### 1️⃣ Cloner le projet 

```bash
git clone https://github.com/lipmo/horizon.git
cd horizon
```

### 2️⃣ Installer Flask

```bash
pip install flask
```

### 3️⃣ Lancer le serveur

```bash
python app.py
```

### 4️⃣ Accéder au tableau de bord

- Localement : http://localhost:3000
- Sur le réseau : Utiliser l’IP locale de ton PC

### 📌 Personnalisation

- Ajouter des applications dans ```templates/index.html```
- Modifier les styles dans ```static/css/style.css```
- Ajouter des fonctionnalités en modifiant ```app.py```

### 🛠️ Améliorations futures

- ✅ Ajouter une configuration JSON/YAML
- ✅ Intégrer une authentification
- ✅ Ajouter un mode sombre
- ✅ Support des icônes personnalisées
- ✅ Système de catégories

### 👨‍💻 Développeur

-Créé par [Charles Baert]
-Licence MIT
