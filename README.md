# Bot Starter (Node.js / Express)

Projet de démarrage pour un bot web minimal en Node.js + Express.

Fonctionnalités :
- Endpoint POST /webhook qui reçoit des messages JSON et renvoie une réponse (echo).
- Endpoint GET /health pour vérifier l'état.
- Prêt pour Docker et CI GitHub Actions.

Installation (local) :
1. Copier `.env.example` en `.env` et mettre les variables nécessaires.
2. npm install
3. npm start
4. Envoyer un POST JSON sur `/webhook` pour tester.

Exemple:
curl -X POST http://localhost:3000/webhook -H "Content-Type: application/json" -d '{"user":"Alice","text":"Bonjour"}'

Déploiement Docker :
1. docker build -t bot-starter .
2. docker run -p 3000:3000 --env-file .env bot-starter

CI:
Un workflow GitHub Actions est inclus pour installer, tester et lint le projet.

Personnalisation :
- Remplace `src/bot.js` par la logique de ton bot (connecteurs Discord / Slack / Telegram, etc.)
- Mets à jour `.env` pour stocker tokens et secrets.