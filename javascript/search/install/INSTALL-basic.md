# Code

***NOTE***: The current version of the demo is set up to work completely ***without backend***, and it accesses the AC mediator directly. Therefore, you do not need to do a backend part of isntallation.

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
curl -v -H "Content-Type: application/json" -X GET http://127.0.0.1:9005/search-sounds/bird
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

```sh
cd <path_to_the_mediator-v2-demos_repo>/src/frontend/apps/search/
ng build --prod
# or with base-ref
ng build --prod --base-href '/demos/search/'
```

then in the nginx file you need to setup:

(`sudo joe /etc/nginx/sites-available/ac-mediator`)

```yaml

  # root ...;

  location / {
    try_files $uri $uri/ /index.html;
    root ...;
    default_type 'text/plain';
    allow all;
    index index.html;
    autoindex on;
  }

  location /demos/ {
    try_files $uri $uri/ /index.html;
    root /var/www/demos/;
    default_type 'text/plain';
    allow all;
    index index.html;
    autoindex on;
  }
```

```sh
sudo nginx -t
sudo systemctl restart nginx
```