# 🏦 E-Banking Frontend

Une interface utilisateur interactive construite avec **Angular 19** pour gérer les clients et leurs comptes bancaires, avec une authentification JWT et une interface responsive utilisant **Bootstrap 5**.

---

## 🔧 Fonctionnalités

- 🔐 **Authentification** : Connexion sécurisée avec JWT, déconnexion, et gestion des accès non autorisés
- 👥 **Gestion des clients** : Liste, recherche, ajout (Admin), suppression (Admin) avec validation
- 💰 **Gestion des comptes** : Recherche par ID, affichage du solde, historique paginé, opérations (débit, crédit, virement pour Admin)
- 🌐 **UI Components** : Navbar responsive, template admin, Bootstrap 5 avec icônes
- 🚦 **Sécurité** : Intercepteurs HTTP pour JWT, gardes de routes pour accès protégés

---

## 🛠️ Technologies

- **Angular 19** : Framework SPA
- **TypeScript** : JavaScript typé
- **Bootstrap 5** : Design responsive
- **RxJS** : Gestion des opérations asynchrones
- **Angular Reactive Forms** : Validation des formulaires
- **Node.js 18+ & npm** : Gestion des dépendances

---

## 🚀 Lancement

### Prérequis
- **Node.js 18+ & npm** : Pour le développement frontend
- **Git** : Pour cloner le dépôt
- **IDE** : VS Code, ou similaire

### Installation
1. Cloner le dépôt :
   ```bash
   git clone https://github.com/HananeIouiri/Digital-Banking-App-Frontend.git
  
   ```
2. Installer les dépendances :
   ```bash
   npm install
   ```
3. Configurer `src/environments/environment.ts` :
   ```typescript
   export const environment = {
     production: false,
     backendHost: 'http://localhost:8085'
   };
   ```
4. Lancer l'application :
   ```bash
   ng serve
   ```
   L'interface est disponible sur `http://localhost:4200`.

---

## 🌐 Pages principales

## Login

![Login Page](https://github.com/HananeIouiri/Digital-banking-App-frontend/blob/frontend/captures/captures/img_1.png)

**Description** : Formulaire centré avec champs pour identifiant et mot de passe, stylisé avec un fond dégradé moderne et une icône de sécurité. Inclut validation et messages d'erreur.  
**But** : Point d'entrée sécurisé pour les rôles Admin et User, garantissant un accès authentifié au tableau de bord.

## Accueil

![Home Page](https://github.com/HananeIouiri/Digital-banking-App-frontend/blob/frontend/captures/captures/img_3.png))

**Description** : Section héroïque plein écran avec un titre audacieux, un slogan motivant et un bouton d'appel à l'action, utilisant un fond dégradé et une carte semi-transparente.  
**But** : Accueille les utilisateurs après connexion, servant de hub central pour naviguer vers la gestion des clients ou comptes.

## Comptes

![Accounts Page](https://github.com/HananeIouiri/Digital-banking-App-frontend/blob/frontend/captures/captures/img_3.png)
![Accounts Page](https://github.com/HananeIouiri/Digital-banking-App-frontend/blob/frontend/captures/captures/img_6.png)



**Description** : Formulaire de recherche par ID de compte, affichant le solde et l'historique paginé dans un tableau responsive. Les Admins ont des contrôles pour débit, crédit, et virement ; les Users ont un accès en lecture seule.  
**But** : Permet une surveillance et gestion efficaces des comptes, avec transparence pour les Users et contrôle pour les Admins.



## Détails client

![Customer Account Details](https://github.com/HananeIouiri/Digital-banking-App-frontend/blob/frontend/captures/captures/img_4.png)

**Description** : Affiche le profil d’un client (ID, nom, email) et une table de ses comptes avec soldes et historiques, utilisant un layout de carte centré. Les Admins peuvent gérer ; les Users consultent.  
**But** : Offre une vue détaillée de l’activité financière d’un client pour suivi et gestion.

## Nouveau client

![New Customer Page](https://github.com/HananeIouiri/Digital-banking-App-frontend/blob/frontend/captures/captures/img_2.png))

**Description** : Formulaire exclusif aux Admins pour ajouter un client avec champs pour nom et email, avec validation, stylisé avec une carte centrée.  
**But** : Permet aux Admins d’élargir la base de clients avec intégrité des données via validation.

---

## 📂 Structure

```
Digital-banking-App-frontend/
├── src/
│   ├── app/
│   │   ├── accounts/                    # Gestion des comptes
│   │   ├── admin-template/              # Template admin
│   │   ├── customer-accounts/           # Détails comptes clients
│   │   ├── customers/                   # Gestion des clients
│   │   ├── guards/                      # Gardes d'authentification
│   │   ├── interceptors/                # Intercepteurs HTTP
│   │   ├── login/                       # Composant de connexion
│   │   ├── models/                      # Modèles de données
│   │   ├── navbar/                      # Barre de navigation
│   │   ├── new-customer/                # Formulaire nouveau client
│   │   ├── not-authorized/              # Accès non autorisé
│   │   ├── services/                    # Services API
│   │   ├── app.component.*              # Composant racine
│   │   ├── app.config.ts                # Configuration
│   │   └── app.routes.ts                # Routes
│   ├── environments/                    # Configuration d'environnement
│   ├── index.html                       # HTML principal
│   ├── main.ts                          # Fichier bootstrap
│   └── styles.css                       # Styles globaux
├── angular.json                         # Configuration Angular CLI
├── package.json                         # Dépendances Node.js
└── tsconfig.json                        # Configuration TypeScript
```

---

## 🔮 Améliorations Futures

- Ajout de la modification des clients
- Création de comptes via l’interface
- Tableau de bord avec ChartJS pour statistiques
- Notifications (toasts) pour feedback utilisateur
- Restrictions UI basées sur les rôles
- Déploiement cloud (AWS, Heroku)

---

## 🤝 Contribuer

1. Forker le dépôt.
2. Créer une branche : `git checkout -b feature/VotreFonctionnalite`.
3. Committer : `git commit -m 'feat: ajouter VotreFonctionnalite'`.
4. Pousser : `git push origin feature/VotreFonctionnalite`.
5. Ouvrir une pull request.
