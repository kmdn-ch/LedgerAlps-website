# Politique de Sécurité & Règles du Projet (Secure SDLC) — LedgerAlps

Ce document consigne les directives de sécurité obligatoires régissant le développement et la maintenance du site et de l'écosystème **LedgerAlps**.

---

## 🛡️ Règles de Process & Bonnes Pratiques

### Règle n°1 — Pas de dépendances Backend sur un site Statique
- **Principe :** Ne jamais ajouter de frameworks ou bibliothèques de serveur web (`express`, `fastify`, `koa`, etc.) dans ce dépôt.
- **Raison :** Le site est hébergé sous forme de fichiers statiques (Jamstack / Vite). L'ajout de dépendances d'exécution backend augmente inutilement la surface d'attaque, gonfle l'arbre de dépendances et génère des alertes de failles de sécurité non pertinentes. Toute dépendance ajoutée doit être strictement nécessaire à l'affichage ou au processus de build client.

### Règle n°2 — Vérification systématique des entrées externes
- **Principe :** Même lorsque des données proviennent d'une source ou d'une API réputée de confiance (comme l'API GitHub Releases), il est impératif de valider et filtrer les données avant de les injecter dans le DOM.
- **Mise en œuvre :** Vérifier systématiquement les protocoles (`https:`) et les noms de domaine autorisés (ex. validation stricte `isSafeGitHubUrl` dans `src/services/githubRelease.ts` pour empêcher tout détournement d'URL ou protocole non sécurisé).

### Règle n°3 — Surveillance automatisée des vulnérabilités
- **Principe :** Maintenir **Dependabot** et les scans de sécurité actifs sur le dépôt GitHub.
- **Mise en œuvre :** Traiter et vérifier toute mise à jour de dépendance front-end (`vite`, `react`, `lucide-react`, etc.) afin de garantir l'absence de vulnérabilité connue (`npm audit`).

---

## 🔒 Signalement de Vulnérabilité
Pour signaler une faille de sécurité relative à LedgerAlps, merci de contacter directement l'équipe de sécurité via GitHub Security Advisories ou par email à `contact@kmdn.ch`.
