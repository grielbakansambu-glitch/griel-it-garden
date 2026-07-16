---
title: "📂 Portfolio des Projets"
description: "Registre d’ingénierie logicielle, systèmes applicatifs et architectures développées par Gabriel Bakansambu Basikila."
lastmod: 2026-05-22
tags:
  - projets
  - architecture-logicielle
  - systemes
  - g-shop
  - g-lisolo
  - offline-first
---

# 📂 Registre des Projets (Engineering Portfolio)

> [!info]
> Cette section constitue le registre central de mes projets logiciels.  
> Chaque projet est documenté selon une logique d’ingénierie : **architecture, stack technique, objectif, statut et évolution réelle**.

---

# 🧭 Classification des Systèmes

Les projets sont classés en 3 niveaux d’architecture :

- 🟢 **Produits applicatifs** (systèmes fonctionnels)
- 🟡 **Expérimentations / R&D**
- 🔵 **Infrastructure & documentation**

---

## 🗂️ Vue globale des projets

| ID | Projet | Type | Stack Technique | Architecture | Statut |
|---|---|---|---|---|---|
| P-001 | [[G-Shop]] | Produit applicatif | Flutter • PHP • SQLite | Offline-First | 🛠️ En développement |
| P-002 | [[G-Lisolo]] | Expérimental (R&D) | Flutter | Prototype communication | ⏸️ En pause |
| P-003 | [[G-RIEL IT Garden]] | Infrastructure | Quartz • Obsidian • Git | Documentation System | 🟢 Stable |

---

# 🛒 P-001 — G-Shop (Système Principal)

## 🎯 Objectif du projet
G-Shop est un système de gestion commerciale conçu pour fonctionner dans des environnements à connectivité instable ou inexistante.

---

## 🏗️ Architecture technique

Le système repose sur une architecture **Offline-First en 3 couches** :

### 1. Interface utilisateur (Client)
- Framework : [[Flutter]]
- Responsabilité : interaction utilisateur, affichage, logique UI

### 2. Couche de stockage local
- Base de données : [[SQLite]]
- Rôle : persistance immédiate des transactions
- Fonctionnement : zéro dépendance réseau

### 3. Couche de synchronisation
- Backend : PHP API
- Rôle : synchronisation différée vers serveur central
- Déclenchement : lorsque connexion disponible

---

## 🗄️ Schéma de base de données locale

```sql
CREATE TABLE IF NOT EXISTS produits (
    id_produit INTEGER PRIMARY KEY AUTOINCREMENT,
    code_barre TEXT UNIQUE,
    nom_produit TEXT NOT NULL,
    prix_unitaire REAL NOT NULL,
    quantite_stock INTEGER DEFAULT 0,
    derniere_synchro TEXT
);