
# Template Back-End with Auth

A template for backend projects, with a complete authentication system, using Typescript and Prisma ORM

## API Docs

#### Register a new user

```http
  POST /register
```

| Params   | Type       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Required**. The name of your user. |
| `email` | `string` | **Required**. The email of your user. |
| `password` | `string` | **Required**. The password of your user. |

#### Auth User

```http
  POST /auth
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email` | `string` | **Required**. The email of your user. |
| `password` | `string` | **Required**. The password of your user. |

#### Get Signed User

```http
  GET /me
```

**Required**. Pass the Bearer Token in the request header.



## Instalation

Some steps need to be followed to use this template

### Create your repo with my template

```bash
  gh repo create <new-repo-name> --template="<link-to-template-repo>"
  # OR
  gh repo create <new-repo-name> --template="<owner/template-repo>"
```
### Install the dependecies

```bash
  npm Install
  # OR
  yarn
```
### Migrate Database
#### Follow the steps in the environment variables section before executing these commands
```bash
  npx prisma migrate dev
  # OR
  yarn prisma migrate dev
```

### Run Project

```bash
  npm run dev
  # OR
  yarn dev
```
## Environment variables

To run this project, you will need to add the following environment variables to your .env

`DATABASE_URL="file:./dev.db"`

`SECRET_KEY`


## Owners

- [@justAlves](https://www.github.com/justAlves)

