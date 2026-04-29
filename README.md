# Shopping Cart DOM Project

## Description

Ce projet consiste à rendre un panier d’achat entièrement fonctionnel en utilisant JavaScript DOM Events, tout en gardant le HTML et le CSS fournis.

L’utilisateur peut :

- augmenter la quantité des articles avec le bouton "+"
- diminuer la quantité avec le bouton "-"
- supprimer un article du panier
- liker un article avec un bouton cœur 
- voir le prix total mis à jour automatiquement

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (DOM)

---

## Structure du projet

project/

├── index.html

├── style/

│ └── style.css

├── js/

│ └── script.js

└── assets/

---

## Fonctionnalités

### 1. Gestion des quantités

Chaque produit possède :

- un bouton "+" pour augmenter la quantité
- un bouton "-" pour diminuer la quantité

Le minimum autorisé est 0.

---

### 2. Suppression des produits

L’icône poubelle permet de supprimer complètement un produit du panier.

Le prix total est recalculé automatiquement après suppression.

---

### 3. Like des produits

Le bouton cœur permet de liker un produit.

Au clic :

- noir → rouge
- rouge → noir

---

### 4. Calcul automatique du total

Le total affiché en haut du panier se met à jour automatiquement après :

- augmentation de quantité
- diminution de quantité
- suppression d’un article

---

## Lancer le projet

### Étape 1

Ouvrir le fichier :

index.html

dans le navigateur

---

### Étape 2

Tester les différentes fonctionnalités :

- boutons + / -
- suppression
- like
- total dynamique

---

## Auteur

Projet réalisé dans le cadre du Workshop DOM Shopping Cart.
