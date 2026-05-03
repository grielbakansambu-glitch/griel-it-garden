---
title: "Lab 01 : Analyse de surface d’attaque (Nmap)"
---

# 🛡️ Analyse de surface d’attaque avec Nmap

## 🎯 Objectif

Identifier les services exposés sur une cible autorisée afin de comprendre la surface d’attaque réseau.

---

## 🧱 Environnement

- Système : Kali Linux
- Machine : Lenovo ThinkPad i5 / 16GB RAM
- Outil : Nmap v7.x
- Cible : scanme.nmap.org
- Type de test : reconnaissance réseau (scan de ports)

---

## ⚙️ Méthodologie

Scan de reconnaissance active avec détection de services et scripts par défaut.

### Commande utilisée

```bash
nmap -sV -sC -T4 -Pn scanme.nmap.org