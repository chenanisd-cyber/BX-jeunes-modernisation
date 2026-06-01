# Bx-Jeunes Impact — Site Web

Site web officiel de **Bx-Jeunes Impact**, une initiative jeunesse basée à Bruxelles visant à connecter, inspirer et impacter positivement la société.

## Contexte

Ce projet a été modernisé dans le cadre d'une mission de stage (Stagiaire 1 — Développeur web front-end).
**Branche de travail :** `feature/site-modernisation`

---

## Structure des fichiers

```
BX-main/
├── index.html              # Page d'accueil principale
├── a-propos.html           # Page À propos (mission, valeurs, équipe, chiffres clés)
├── groupe-creatif.html     # Page Groupe Créatif
├── groupe-solidaire.html   # Page Groupe Solidaire
├── groupe-innovation.html  # Page Groupe Innovation
├── groupe-communication.html # Page Groupe Communication
├── mentions-legales.html   # Mentions légales
├── confidentialite.html    # Politique de confidentialité
├── 404.html                # Page d'erreur 404
├── style.css               # Feuille de styles principale (reorganisée)
├── script.js               # JavaScript principal (modernisé)
├── robots.txt              # Configuration robots SEO
├── sitemap.xml             # Plan du site
└── images/
    ├── Logo_BX_Jeunes.png  # Logo principal
    ├── Sen1.jpg             # Photo d'illustration
    └── Design sans titre-2.png # Image actualités
```

---

## Fonctionnalités implémentées

### Issues réalisées (Phase Design / Optimisation)

| Issue | Description | Statut |
|-------|-------------|--------|
| #4 | Correction liens et erreurs du site | ✅ |
| #5 | Réorganisation structure du projet | ✅ |
| #6 | Nettoyage et amélioration HTML | ✅ |
| #7 | Nettoyage et organisation CSS | ✅ |
| #8 | Refonte visuelle + intégration agenda d'événements | ✅ |
| #9 | Amélioration affichage mobile | ✅ |
| #10 | Optimisation images (lazy loading) | ✅ |
| #11 | Intégration newsletter + correction contenu | ✅ |
| #13 | Mise à jour README | ✅ |

### Nouvelles fonctionnalités

- **Agenda d'événements** : section avec cartes d'événements (type, date, lieu), filtres par catégorie (Formation / Rencontre / Solidaire / En ligne)
- **Fiches activités** : grille avec filtres par catégorie, âge et recherche textuelle
- **Témoignages** : retours d'expérience de participants
- **Espace partenaires** : présentation des organisations collaboratrices + ressources téléchargeables
- **Newsletter** : formulaire d'abonnement visible en page d'accueil (Formspree)
- **Page À propos** enrichie : mission, valeurs, chiffres clés, équipe
- **Design modernisé** : variables CSS, palette cohérente, typographie améliorée
- **Mobile responsive** : menu hamburger amélioré, grilles adaptatives

---

## Lancement local

Aucune dépendance requise. Ouvrir `index.html` dans un navigateur, ou lancer un serveur local :

```bash
# Python 3
python3 -m http.server 8080
# → ouvrir http://localhost:8080
```

---

## Technologies

- HTML5 sémantique
- CSS3 (variables CSS, Grid, Flexbox, responsive)
- JavaScript vanilla (ES6+)
- Google Fonts (Poppins + Montserrat)
- Formspree (formulaires de contact et newsletter)

---

© 2026 Bx-Jeunes Impact
