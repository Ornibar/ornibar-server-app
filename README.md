# Description 

Ornibar api with Node + Express + Axios

# Methods : 

GET, POST, PUT, DELETE

# Routes : 

Base url '/api/' : 

'auth' : 
  - /login (POST)
      Params : 
        - username: String
        - email: Email
  - /register (POST)
      Params :
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
      Params: 
        - username: String
        - email: Email
  - /update-score/{user:id} (PUT)
      Params: 
        - score: Integer
  - /update-profile-image/{user:id} (PUT)
      Params: 
        - file: File
  - /destroy/{user:id} (DELETE)

'question' : 

  - /question/questions (POST)
      Params: 
          numberQuestions: Integer


# COMMANDS


Install the node modules 

```console
    npm install
```

Then run the project with it

```console
    npm run dev
```


  
  
  
  
  
