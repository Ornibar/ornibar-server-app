# Ornibar

## Contexte 

Jeu mobile entres joueurs, sous forme de QCM. Avec des questions imagées et des réponses prêt définies. Démarquez vous en choississant une réponse sortant du lot afin de gagner de points.

## Description 

Ornibar api with Node + Express + Axios

## API : 

### Methods : 

GET, POST, PUT, DELETE

### Routes :

Base url '/api/' : 

'auth' : 
  - /login (POST)
      - Params : 
        - username: String
        - email: Email
  - /register (POST)
      - Params :
        - firstname: String,
        - lastname: String,
        - username: String
        - email: Email,
        - password: String,
        - password_confirmation: String
  - /reset-password (POST)

'user' : 

  - /profile (GET)
  - /update-profile/{user:id} (PUT)
      - Params: 
        - username: String
        - email: Email
  - /update-score/{user:id} (PUT)
      - Params: 
        - score: Integer
  - /update-profile-image/{user:id} (PUT)
      - Params: 
        - file: File
  - /destroy/{user:id} (DELETE)

'question' : 

  - /question/questions (POST)
      - Params: 
          numberQuestions: Integer


## COMMANDS


Install the node modules 

```console
    npm install
```

Then run the project with it

```console
    npm run dev
```


  
  
  
  
  
