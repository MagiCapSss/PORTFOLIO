# Cahier des charges - Portfolio d'Ingénieur Informatique

## 1. Contexte
Le portfolio d'ingénieur informatique a pour objectif de mettre en avant les compétences techniques et projets réalisés par l'ingénieur. Il servira de vitrine professionnelle pour attirer des recruteurs, des clients ou des collaborateurs potentiels.

## 2. Public cible
- Recruteurs et entreprises du secteur IT
- Clients potentiels pour des missions freelances
- Partenaires et collaborateurs

## 3. Exigences fonctionnelles
### User stories et cas d'acceptation

#### **User Story 1** - Consultation du portfolio
> En tant que visiteur, je veux pouvoir consulter les projets réalisés afin d’évaluer les compétences du propriétaire du portfolio.

**Cas d’acceptation** :
- Le visiteur peut voir une liste des projets avec une image, un titre et une description courte.
- Le visiteur peut cliquer sur un projet pour voir plus de détails.

#### **User Story 2** - Téléchargement du CV
> En tant que recruteur, je veux pouvoir télécharger le CV de l’ingénieur afin d’avoir un aperçu de son parcours professionnel.

**Cas d’acceptation** :
- Un bouton permet de télécharger le CV au format PDF.

#### **User Story 3** - Consultation des compétences
> En tant que visiteur, je veux pouvoir consulter les compétences de l’ingénieur afin de connaître ses technologies maîtrisées et ses certifications éventuelles.

**Cas d’acceptation** :
- Une section affiche les technologies maîtrisées.
- Une section liste les certifications obtenues (le cas échéant).

#### **User Story 4** - Contact avec l’ingénieur
> En tant que visiteur, je veux pouvoir contacter l’ingénieur via un formulaire afin de poser des questions ou proposer une collaboration.

**Cas d’acceptation** :
- Un formulaire de contact est disponible avec les champs : Nom, Email, Message.
- Une confirmation de l’envoi s'affiche après soumission.

#### **User Story 5** - Partage du portfolio
> En tant que visiteur, je veux pouvoir partager le portfolio sur des réseaux sociaux afin de le diffuser à d’autres personnes intéressées.

**Cas d’acceptation** :
- Un bouton permet de partager le portfolio sur LinkedIn, Twitter, etc.

### **Use Case** - Diagramme UML usecase
![Diagramme UML usecase](./assets/img/Use_Case_Diagram.png)

## 4. Exigences techniques
### Technologies utilisées
- HTML, CSS, JavaScript pour le développement front-end.
- Responsive Design pour une compatibilité mobile et tablette.

## 5. Charte graphique
### Description des couleurs et typographies
**Logo** :
![Logo](./assets/img/Logo.png)
**Palette de couleurs** : 
  - Orage : HEX -> #4f6673 et RGBA -> 79,102,115,45
  - Terre : HEX -> #b56320 et RGBA -> 181,99,32,71
  - Crème : HEX -> #fffaf1 et RGBA -> 255,250,240,100
**Typographies** :
  - Titre : Bebas Neue, sans-serif.
  - Texte : Open Sans, sans-serif.

## 6. Contraintes
### Réglementation
- **Mentions légales** :
  - Nom du propriétaire du site.
  - Hébergement et contact.
  
- **RGPD** :
  - Ajout d’une politique de confidentialité détaillant l’utilisation des données collectées (formulaire de contact, cookies, analytics).
  - Consentement explicite pour l’utilisation des cookies.

- **SEO** :
  - Structure sémantique respectant les bonnes pratiques (balises Hn, meta descriptions, balises alt sur les images).
  - Temps de chargement optimisé (lazy loading, minification des ressources).
  - Sitemap XML pour faciliter l’indexation par les moteurs de recherche.