Verificar algum git remote ativo/iniciado
##git remote -v
heroku https://git.heroku.com/apipostgresleo.git (fetch)
heroku https://git.heroku.com/apipostgresleo.git (push)

Se existir então excluir
##git remote rm heroku

Criar um App no heroku via git
##heroku create apipostgresleo

###Creating ⬢ apipostgresleo... done ###https://apipostgresleo.herokuapp.com/ | https://git.heroku.com/apipostgresleo.git
###PS C:\Users\leonsilva\Desktop\Go_Barber_NodeJs-master>

Subir as alterções via git

##git add .
##git commit -m 'Primeiro commit'
##git push heroku master

Criar banco Postgres no heroku via git
##heroku addons:create heroku-postgresql --version 11
