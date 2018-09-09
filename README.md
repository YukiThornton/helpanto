# Helpanto

Recipe keeper and cook assistant app with React, Redux and Jest. `Helpanto` means `assistant` in Esperanto.

## Prerequisite

* Install and run [recipe](https://github.com/YukiThornton/recipes) (Server-side app).
* Docker or Node.js 8

## Getting started

1. Clone this repository.
1. Set environment variable.
    ```sh
    # Windows
    set RECIPE_SERVER_URL=<recipe URL>
    # Linux
    export RECIPE_SERVER_URL=<recipe URL>
    ```
1. Run helpanto.
    ```sh
    docker-compose up
    ```
1. Visit http://[Docker host ip address]:3003

## Functions

* List and view recipes
* Create a memo
* Delete a recipe
* Search recipes

## Future implementation

* Support more recipe types such as web link and full recipe
* Enhance UI
* Add multiple recipe view
* Add recipe update
* Add ingredient amount calculation feature

## Inspiration

I have always wanted a single app that covers everything necessary during cooking, such as viewing multipe recipes and calculating ingredients amount.