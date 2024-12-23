# Projet Ionic - Instant Play

## But du projet

* Le but de ce projet était de développer une petite application en utilisant le framework IONIC.
* Cette application, se nommant Instant Play, gère un CRUD sur les jeux-vidéos et fait usage de Firebase en guise de base de données.
* Il est donc possible d'accéder à la liste des jeux disponibles, de modifier un jeu, d'en ajouter un et enfin d'en supprimer.
* La modification, la suppression et l'ajout d'un jeu est réservé aux. En effet l'application contient un système de connexion et d'inscription géré par Firebase.
* Il est possible de retrouver une petite [vidéo YouTube](https://youtube.com/shorts/ReOomGs-k3w) qui présente l'application émulée sur Android Studio.

## Problème lié au `ion-select`

* L'application contient un bug que je n'ai pas su résoudre. Il s'agit de la modal qui s'affiche lorsqu'on souhaite sélectionner les plateformes d'un jeu.
* A la base, les options étaient visibles sur fond blanc. Cependant, j'ai changé le fond de l'application en noir dans le fichier `app.component.scss`.
* J'ai donc voulu styliser le `ion-alert` (la modal) qui apparait lors du choix des plateformes, mais le style ne s'applique pas.
* L'ordre des plateformes est le suivant : PS5, Xbox, Steam, Battle.net.

## Perspectives d'améliorations

* En ce qui concerne les fonctions que j'aurais souhaité implémenter :
  * il y'a tout d'abord un système de panier. Un utilisateur pourrait ajouter un jeu à son panier et modifier les quantités à sa guise.
  * ensuite, il y'a également l'implémentation d'un faux système de paiement qui ajouterait les éléments du panier dans une commande.
  * pour finir, améliorer le style global du site, en intégrant par exemple une page d'accueil qui présente l'application ou des animations fluides qui améliorent l'expérience utilisateur.
