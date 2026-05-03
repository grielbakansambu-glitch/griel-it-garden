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

![Scan de scanme.nmap.org en cours](./images/nmap-scanme.nmap.org.jng)
> **Preuve 1** : Exécution de la commande ciblant le domaine officiel de test. On voit le processus de découverte des ports.

---

## 🧠 Analyse des résultats (Interprétation)
D'après les résultats obtenus sur la capture :
- **Port 22/tcp (SSH)** : Généralement ouvert pour permettre l'administration sécurisée.
- **Port 80/tcp (HTTP)** : Le serveur web est actif pour afficher la page de bienvenue.
- **Analyse** : Ce scan me permet de voir quels services sont exposés au public sur ce serveur de test. Utiliser l'option `-sV` m'a permis de détecter les versions des services, ce qui est crucial pour la recherche de vulnérabilités spécifiques.

---

## ⚠️ Pourquoi cette cible ?
J'ai choisi de ne pas scanner mon réseau local immédiatement pour éviter les interférences avec le pare-feu de mon routeur et pour pratiquer sur une cible réelle disponible sur Internet. Cela démontre une compréhension de l'éthique en cybersécurité.

---

## ✅ Conclusion
Ce test confirme que mon installation de Nmap est opérationnelle. La prochaine étape sera d'approfondir l'analyse avec des scripts (`--script`) pour détecter des vulnérabilités plus précises sur ces ports ouverts.