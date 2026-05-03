---
title: "Lab 02 : Analyse de surface d'attaque (Cible autorisée)"
---

# 🔍 Analyse réseau : Scan de scanme.nmap.org
> **Objectif** : Apprendre à identifier des services distants sur une cible de test officielle.

---

## 🧭 Contexte du Laboratoire
Pour ce test, j'ai choisi de scanner **scanme.nmap.org**. C'est un service fourni par le projet Nmap pour permettre aux utilisateurs de tester leurs configurations sans risquer d'attaquer des systèmes non autorisés. C'est une étape clé pour maîtriser la reconnaissance réseau de manière éthique.

---

## 🛠️ Outils & Méthodologie
- **Machine** : ThinkPad i5 (Linux)
- **Outil** : Nmap (Network Mapper)
- **Cible** : `scanme.nmap.org`
- **Commande** : `sudo nmap -sV -T4 scanme.nmap.org`

---

## 📸 Preuves Techniques (Captures d'écran)

![Scan de scanme.nmap.org en cours](./images/nmap.png)
> **Preuve 1** : Exécution de la commande ciblant le domaine officiel de test. On voit le processus de découverte des ports.

---

## 🧠 Analyse des résultats (Interprétation)
D'après les résultats obtenus sur la capture :
- **Port 22/tcp (SSH)** : Généralement ouvert pour permettre l'administration sécurisée.
- **Port 80/tcp (HTTP)** : Le serveur web est actif pour afficher la page de bienvenue.
- **Analyse** : Ce scan me permet de voir quels services sont exposés au public sur ce serveur de test. L'option `-sV` est cruciale pour la recherche de vulnérabilités spécifiques.

---

## ⚠️ Pourquoi cette cible ?
J'ai choisi de pratiquer sur une cible réelle disponible sur Internet pour démontrer une compréhension de l'éthique en cybersécurité, tout en évitant les interférences locales.

---

## ✅ Conclusion
Ce test confirme que mon installation de Nmap est opérationnelle. La prochaine étape sera d'approfondir l'analyse avec des scripts (`--script`).