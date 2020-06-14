<p align="center">
  <a href="https://github.com/pcampina/bips-backend">
  <img height="62" align="center" src="https://i.ibb.co/PNGZmDw/Screen-Shot-2020-06-14-at-14-54-28.png" /></a>
  <p align="center">
    Earn credits, consume products and services just searching in our app.
    <br />
    <br />
    Links:
    <a href="https://bips-ccr.herokuapp.com/">DEMO APP</a> |
    <a href="http://apibips.herokuapp.com/">API</a>
  </p>
</p>

## About The Project

This project developed for [HACKATON CCR](http://www.grupoccr.com.br/hackathonccr) organized by Shawee.

## Built with

- [NodeJS](https://nodejs.org)
- [Express](https://expressjs.com)
- [Sequelize](https://sequelize.org)
- [Postgres](https://www.postgresql.org)

## API Endpoints

```
PARTNERS
(GET) https://apibips.herokuapp.com/partners/
(GET) https://apibips.herokuapp.com/partners/:id
(POST) https://apibips.herokuapp.com/partners/
(PATCH) https://apibips.herokuapp.com/partners/:id
(DELETE) https://apibips.herokuapp.com/partners/:id

CATEGORIES
(GET) https://apibips.herokuapp.com/categories/
(GET) https://apibips.herokuapp.com/categories/:id
(POST) https://apibips.herokuapp.com/categories/
(PATCH) https://apibips.herokuapp.com/categories/:id
(DELETE) https://apibips.herokuapp.com/categories/:id

FEEDBACKS
(GET) https://apibips.herokuapp.com/feedbacks/
(GET) https://apibips.herokuapp.com/feedbacks/:id
(POST) https://apibips.herokuapp.com/feedbacks/
(DELETE) https://apibips.herokuapp.com/feedbacks/:id
```

## Getting started

1. `git clone https://github.com/pcampina/bips-backend`
2. `yarn && yarn sequelize db:migrate`
3. `create .env for your environment vars`
4. `yarn dev`

_Tip: use Insomnia for your tests :)_

```
.env
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_DATABASE=your_database
DB_HOSTNAME=your_hostname
```

## License

[MIT license](https://opensource.org/licenses/MIT).
