Verificar algum git remote ativo/iniciado

## git remote -v

heroku https://git.heroku.com/apipostgresleo.git (fetch)
heroku https://git.heroku.com/apipostgresleo.git (push)

Se existir então excluir

## git remote rm heroku

Criar um App no heroku via git

## heroku create apipostgresleo

### Creating ⬢ apipostgresleo... done

### https://apipostgresleo.herokuapp.com/ | https://git.heroku.com/apipostgresleo.git

### PS C:\Users\leonsilva\Desktop\Go_Barber_NodeJs-master>

Subir as alterções via git

## git add .

## git commit -m 'Primeiro commit'

## git push heroku master

### To https://git.heroku.com/apipostgresleo.git

### \* [new branch] master -> master

### PS C:\Users\leonsilva\Desktop\Go_Barber_NodeJs-master>

Criar banco Postgres no heroku via git

## heroku addons:create heroku-postgresql --version 11

#### Creating heroku-postgresql on ⬢ apipostgresleo... free

### Database has been created and is available

### ! This database is empty. If upgrading, you can transfer

### ! data from another database with pg:copy

### Created postgresql-slippery-35995 as DATABASE_URL

### Use heroku addons:docs heroku-postgresql to view documentation

### PS C:\Users\leonsilva\Desktop\Go_Barber_NodeJs-master>
