# Code

## Cloning

```sh
# cloning
git clone https://github.com/AudioCommons/mediator-v2-demos/
```

## Backend

```sh
cd <path_to_the_mediator-v2-demos_repo>
cd src/backend/apps/search/
yarn
```

### Run and Test

```sh
# backend
cd <path_to_the_mediator-v2-demos_repo>/src/backend/apps/search/
npm start

# then test in other terminal's tab
# you should get search results back, and backend should not crash ;)
curl -v -H "Content-Type: application/json" -X GET http://127.0.0.1:8005/search-sounds/bird
```

## Frontend

### Install

Open third terminal's or continue in the 2nd tab:

```sh
cd <path_to_the_mediator-v2-demos_repo>/src/frontend/apps/search/
yarn
```

### Run

```sh
# compile and provide the frontend available to the broweser
# `-o` will also open the site in the default browser
ng serve -o
```

# Build for production

## Backend

TBD (To Be Done)

## Frontend

If you are building for the production you need to build frontend in a more efficient way:

```
cd <path_to_the_mediator-v2-demos_repo>/src/frontend/apps/search/
ng build --prod
```