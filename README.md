<h1 align="center">Kenzie movies - Projeto final M3 </h1>
    
 Este é o projeto final - M3 da aplicação **Kenzie movies** - O objetivo dessa aplicação é proporcionar aos amantes de filmes,.......
 
 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. 
    
   [<img src="https://avatars.githubusercontent.com/u/122807663?v=4" height=400 width=1200>](https://idroid.vercel.app/)
  
  ## Endpoints
  
  A API contém um total de X endpoints, sendo possível cadastrar novos usuários, realizar login e favoritar filmes, além de ... 
  
  
 A url base da API é esta: [https://kenzie-movies.onrender.com/](https://kenzie-movies.onrender.com/)
  
  # Cadastro de usuário
  
  `POST /users - FORMATO DA REQUISIÇÃO`
  
  ```markdown
   {
      "email": "fulano@mail.com",
      "password": "123456",
      "name": "fulano",
      "passwordConfirmation": "123456",
      "avatarLink":"https://avatars.githubusercontent.com/u/99143799?v=4"
        
   }
   ```

Caso a requisição seja bem sucedida, a resposta será assim:

`POST/users - FORMATO DA RESPOSTA - STATUS 201`

  ```markdown
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZ2xlc0BtYWlsLmNvbSIsImlhdCI6MTY3Nzg3MjA1MCwiZXhwIjoxNjc3ODc1NjUwLCJzdWIiOiI0In0.PV665AVld2zHU5cNeiurzp0gRpQXm-4-x9s8Yg_OQmw",
	"user": {
		"email": "fulano@mail.com",
		"name": "fulano",
		"passwordConfirmation": "123456",
		"avatarLink": "https://avatars.githubusercontent.com/u/99143799?v=4",
		"id": 3
	}
}
```
## Possíveis erros 

Caso seja enviado algum campo errado, a resposta de erro será assim:

A senha precisa ter pelo menos 6 caracteres.

`POST/users - FORMATO DA RESPOSTA - STATUS 400`

  ```markdown
"Password is too short"
```
Email já cadastrado.

`POST/users - FORMATO DA RESPOSTA - STATUS 400`
  ```markdown
"Email already exists"
```
 # Login
 
`POST/login - FORMATO DA REQUISIÇÃO`
 
 ```markdown
   {
      "email": "fulano@mail.com",
      "password": "123456",
             
   }
   ```
   
 Caso a requisição seja bem sucedida, a resposta será assim:

`POST/login - FORMATO DA RESPOSTA - STATUS 201`


 ```markdown
  {
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsYXJpY2VAbWFpbC5jb20iLCJpYXQiOjE2Nzc4NzMzOTYsImV4cCI6MTY3Nzg3Njk5Niwic3ViIjoiMyJ9.umQpgvEEUkRRBrrViZUzd3_Z6Nj5oUy5FfudDjw6BGk",
	"user": {
		"email": "fulano@mail.com",
		"name": "fulano",
		"passwordConfirmation": "123456",
		"avatarLink": "https://avatars.githubusercontent.com/u/99143799?v=4",
		"id": 3
	}
}
   ```
   
 ## Autores

 [<img src="https://avatars.githubusercontent.com/u/110136069?v=4" width=200><br>Isabel Paiva](https://github.com/isabelpaiva) 

[<img src="https://avatars.githubusercontent.com/u/110182130?v=4" width=200><br>Daniel Mello](https://github.com/DMCFaria)

[<img src="https://ca.slack-edge.com/TQZR39SET-U03TMPVTXNZ-fe056e3cb69f-72" width=200><br>Roger Magalhães](https://github.com/Rogermferr)

[<img src="https://avatars.githubusercontent.com/u/99143799?s=120&v=4" width=200><br>Onésimo brito](https://github.com/briito)
