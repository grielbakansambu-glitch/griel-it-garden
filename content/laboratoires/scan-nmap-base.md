---
title: "Lab 02 : Analyse de surface d'attaque (Cible autorisée)"
---

# 🔍 Analyse réseau : Scan de scanme.nmap.org
> **Objectif** : Apprendre à identifier des services distants sur une cible de test officielle.

---

## 🧭 Contexte du Laboratoire
Pour ce test, j'ai choisi de scanner **scanme.nmap.org**. C'est un service fourni par le projet Nmap pour permettre aux utilisateurs de tester leurs configurations sans risquer d'attaquer des systèmes non autorisés.

---

## 🛠️ Outils & Méthodologie
- **Machine** : ThinkPad i5 (Linux)
- **Outil** : Nmap (Network Mapper)
- **Cible** : `scanme.nmap.org`
- **Commande** : `sudo nmap -sV -T4 scanme.nmap.org`

---

## 📸 Preuves Techniques (Captures d'écran)

![Scan de scanme.nmap.org en cours](./images/nmap.png)
> **Preuve 1** : Exécution de la commande ciblant le domaine officiel de test.

---

## 🧠 Analyse des résultats (Interprétation)
D'après les résultats obtenus sur la capture :
- **Port 22/tcp (SSH)** : Ouvert pour l'administration sécurisée.
- **Port 80/tcp (HTTP)** : Serveur web actif.
- **Analyse** : L'utilisation de `-sV` a permis de détecter les versions des services.

---

## ✅ Conclusion
Ce test confirme que mon installation de Nmap est opérationnelle. La prochaine étape sera d'approfondir l'analyse avec des scripts.