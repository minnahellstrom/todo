todo
====

Forka
---

Har du redan forkat det här repot kan du ta in ändringar jag gjort med följande kommandon:

`git remote add upstream https://github.com/niklasek/todo.git`

`git fetch upstream`

och foga in ändringarna med

`git merge upstream/master`

Installation
---

För att kunna få igång servern krävs att `mongodb` är installerat. Det kan göras via Autoparts menyn på nitrous.io.

Med `npm install` laddar du ner alla moduler som behövs för att starta servern.

`npm start` sätter sen i gång servern.

Mallar
---

Statiska filer såsom javascript, bilder och css ska in i mappen `public`

Mallar för sidor ska in under mappen `views` och ska vara i formatet `EJS` ([Getting Started with EJS](http://embeddedjs.com/getting_started.html))

Hjälp!?
---

En genomgång av hur man kommer i gång finns här: [http://youtu.be/JHHwewCBhEY](http://youtu.be/JHHwewCBhEY)
