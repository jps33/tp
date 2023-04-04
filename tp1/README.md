# TP1: Une SPA "à la main"

Dans ce TP nous allons développer une SPA sans outils particuliers.

## Sujet

Voici le squelette depuis lequel vous allez partir:

~~~ html
<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Application météo</title>
		<script type="text/javascript" src="weather.js" defer></script>
	</head>
	<body>
		<div id="menu">
			<input type="text">
			<button type="button">afficher</button>
		</div>
		<div id="data">
		</div>
	</body>
</html>
~~~

Vous aller placer ce code dans un répertoire vide, et vous allez rajouter dans ce répertoire un fichier vide `weather.js` dans lequel vous devrez écrire le code JavaScript. Pour tester votre code, vous utiliserez un navigateur classique (Chrome ou Firefox avec le module Firebug).

Votre objectif va être de réagir aux clics sur les boutons pour aller chercher sur le site de [prevision-meteo.ch](https://www.prevision-meteo.ch/services) le flux de données JSON qui correspond au texte saisi par l'utilisateur, et afficher dans l'élément `div` les données météos récupérées depuis l'API. Une fois que vous avez réussi, essayer d'améliorer l'ergonomie autant que possible (images, auto-complétion, ...).

## Correction

Il suffit d'ouvrir le fichier `index.html` à l'aide d'un navigateur récent.