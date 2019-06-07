## Verificar algum git remote ativo/iniciado

git remote -v

## Se existir então excluir

git remote rm heroku

## Criar um App no heroku via git

heroku create apipostgresleo

## Subir as alterções via git

git add .

git commit -m 'Primeiro commit'

git push heroku master

## Criar banco Postgres no heroku via git

heroku addons:create heroku-postgresql --version 11
