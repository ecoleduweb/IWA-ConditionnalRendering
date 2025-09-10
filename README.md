# Objectif

Comprendre le fonctionnement du rendu conditionnel et des classes conditionnelles.

## Classe conditionnelle

1. Dans le composant ACaroussel, change la couleur du style pour du bleu en changeant le nom de la variable dans la string.
2. décomente les variables en lien avec `characterSelected`.
3. Affiche le personnage sélectionné à cet endroit dans la balise h2 : 

```
{/* REMPLACE MOI PAR LA CLASSE SELECTIONNÉE!!! */}
  <h2>Mage </h2>
```

4. Ajoute un écouteur sur le bouton Next et quand on clic dessus, on change de caractère en fonction de la liste characterList. Indice, ajoute une variable currentIndex pour garder l'index actuel en mémoire.
   
**Q** : Est-ce que `const characterSelected` est encore une bonne façon de gérer cette variable? Pourquoi? Que dois tu utiliser?

**A** : 

**Q** : As-tu remarqué que le backgroundImage aussi se mettait à jour? Pourtant, style n'utilse pas useState? Pourquoi est-ce que ça fonctionne?

**A** : 

4. Maintenant, fait fonctionner le bouton précédent.

## Rendu conditionnel

1. Va voir le fichier characters.json qui est dans le dossier assets. Quelle sont les classes utilisées?

Avec cette ligne `import { CharacterClass } from '../types/character';` et cette ligne : `const characters: CharacterClass[] = charactersJson;`, on importe le tableau CharacterClass. Nous allons laisser tomber notre tableau de string pour utiliser le tableau d'objets. Essaie de faire la modification. `characterSelected` deviendra un objet. L'attribut avec le nom de la classe sera `name`.

Va lire cet article qui explique comment faire une recherche dans un tableau en javascript :  https://sentry.io/answers/find-object-by-property-in-javascript-array/

2. Va récupérer le personnage dans le tableau et assigne le à la variable `selectedCharacter`. Une fois que c'est fait, remplace les valeurs de la section `Statistiques` par les valeurs contenues dans le personnage avec `{}`.

3. Une fois que c'est fait, affiche l'équipement du personnage sélectionné... Il semble que le mage n'a pas d'équipement. Va lire cet article pour comprendre comment afficher la section équipement si le personnage a un attribut equipment : https://react.dev/learn/conditional-rendering.

4. Finalement, fait fonctionner le bouton cacher les détails pour cacher les détails du personnage.

## Afficher la liste des équipements : 
Prochain cours?