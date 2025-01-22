from flask import Flask, render_template

app = Flask(__name__)

# Route principale pour afficher le tableau de bord
@app.route('/')
def home():
    return render_template('index.html')

# Démarrer le serveur sur le port 3000
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
