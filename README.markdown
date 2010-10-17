#Le Web Temps Réel 

##Présentation

* [Mon site](http://jblanche.fr/)

* [Mon twitter](http://twitter.com/jblanchefr)

* [Le collectif dont je fais parti](http://lab212.fr/)

##Le Temps réel qu'est ce que c'est : 


[Comet sur Wikipedia](http://fr.wikipedia.org/wiki/Comet_\(informatique\))

###Les anciennes solutions : 

* Ajax Polling
	
	Exemple : [JQuery-PeriodicalUpdater](http://github.com/RobertFischer/JQuery-PeriodicalUpdater)
	
	[Client](http://github.com/jblanche/parisWeb2010/blob/master/clients/ajaxPolling/ajaxPolling.html)
	
	[Serveur](http://github.com/jblanche/parisWeb2010/blob/master/servers/ajaxpolling.js) 

* Long Polling

	[Client](http://github.com/jblanche/parisWeb2010/blob/master/clients/longPolling/longpolling.html)

	[Serveur](http://github.com/jblanche/parisWeb2010/blob/master/servers/longpolling.js)
	
* Forever Iframe

	[A la Gmail](http://cometdaily.com/2007/11/05/the-forever-frame-technique/)


### Les Websockets : La nouvelles solution

* [La spec](http://dev.w3.org/html5/websockets/)
* [Article sur Mozilla Hacks](http://hacks.mozilla.org/2010/04/websockets-in-firefox/)

* Démo Simple
	* [Client](http://github.com/jblanche/parisWeb2010/blob/master/servers/websockets1.html)
	
	* [Serveur](http://github.com/jblanche/parisWeb2010/blob/master/servers/websockets1.js)

* Démo Chat
	* [Client](http://github.com/jblanche/parisWeb2010/blob/master/servers/websockets2.html)
	
	* [Serveur](http://github.com/jblanche/parisWeb2010/blob/master/servers/websockets2.js)

###Les outils existants côté serveur :

* [Liste assez complète de CometDaily](http://cometdaily.com/maturity.html)

* [APE, Autre solution développée par une entreprise française](http://www.ape-project.org/)


### Comment les autres langages font de l'évenementiel : 

* [Python](http://twistedmatrix.com/trac/wiki)

* [Ruby](http://github.com/eventmachine/eventmachine/wiki)

### NodeJS : L'autre solution

* [Le site officiel](http://nodejs.org/)

* [Page Modules du wiki](http://github.com/ry/node/wiki/modules)

* [exemples MySQL](http://github.com/masuidrive/node-mysql)


### Socket.IO : la librairie pour faciliter la communication client/server

* [Le site officiel](http://socket.io/)

* [Le code côté serveur](http://github.com/LearnBoost/Socket.IO-node)

* [Le code côté client](http://github.com/LearnBoost/Socket.IO)

* Autres implementations côté serveur : 
	* [Go](http://github.com/madari/go-socket.io)
	* [Rack/Ruby](http://github.com/markjeee/Socket.IO-rack)

* La démo de l'atelier
	* [Client](http://github.com/jblanche/parisWeb2010/blob/master/game/public/game.html)
	* [Serveur](http://github.com/jblanche/parisWeb2010/blob/master/game/game.js)	

### Hébergement : 

* [Heroku](http://heroku.com/)

###FAQ

* Ou se place NodeJS côté serveur (par rapport à Apache...) ? 

	NodeJs n'est ni un langage (utilise Javascript), ni un Framework Web concurrent de Symfony, Ruby On Rails... NodeJS est un nouveau type de solution, plus complète, visant à remplacer à la fois le serveur Web (Apache, Nginx...) et le Framework Web (voir [connect](http://github.com/senchalabs/Connect) ou [expressjs](http://expressjs.com/))
	
* Pourquoi Javascript plutôt qu'un autre langage ? 
	
	NodeJS est un framework construit sur un modèle événementiel, aucune instruction n'est bloquante et tout repose sur un système de callbacks. 
	C'est pourquoi un langage événementiel (tel que Javascript) se prête mieux à ce type  de développements qu'un langage comme PHP, Ruby, Python où les librairies existantes n'ont pas été conçues pour être non-bloquantes.
	
* Quid de la sécurité ? 

	Comme toute jeune techno, il est nécessaire de suivre de près les mailings lists de NodeJs afin de se tenir à jour sur les failles de sécurité découvertes.
	Pour le reste je laisse la parole aux vrais experts sécurité...