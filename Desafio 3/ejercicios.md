# Ejercicio 1
El comando `git stash` es utilizado para guardar el estado actual del trabajo. Stash guarda los cambios locales y revierte el estado del repositorio de trabajo para igualarlo al último commit.

Por lo que procedería de la siguiente manera:
1. Utilizo el comando `git stash` para dejar en 'pausa' los cambios no comiteados todavía.
2. Luego, cambio al branch *master* ejecutando `git switch master`.
3. En el branch master, ejecuto `git fetch` para sincronizar el repositorio local y el remoto, luego y `git pull` para descargar los nuevos cambios en caso de haberlos.
4. Después, elimino el archivo **status.js**, y comiteo con `git commit -m "Eliminado archivo status.js"`.
5. Se guardan los cambios en el repositorio remoto con `git push`.
6. Vuelvo al espacio de trabajo del principio ejecutando `git switch custom-navbar`.
7. Y para finalizar, utilizo el comando `git stash pop` para recibir el último stash de la lista, obteniendo nuevamente el estado de trabajo tal cual lo habíamos dejado.

# Ejercicio 2
Para subir el desarrollo en la rama *front-react* a la rama *master*, se pueden utilizar dos operaciones:
* `git merge`, o bien,
* `git rebase`.

El método de merge es mucho más utilizado dado que no reescribe el historial de commits como rebase, lo cual es algo arriesgado cuando se trabaja de manera cooperativa. Por lo tanto, merge, por lo general, va a ser la ser la opción preferida para integrar dos branches. 

Merge integra dos ramas: una rama es la rama desde la cual se ejecuta el comando *merge*, y la otra rama debemos indicarla al invocar el comando. Por tanto, como vamos a integrar la rama **front-react** en la rama **master**, vamos a ejecutar `git merge front-react` estando en la rama master. Si no han ocurrido errores, vamos a obtener un nuevo commit en la rama master que contiene la fusión del código de master y el código de front-react. De esta manera, pudimos lograr subir la nueva feature al código de producción.

## Referencias
1. [Git - Stash](https://git-scm.com/docs/git-stash)
2. [Git Branching - Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)
