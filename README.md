# nytreact
A full-stack news scrapper application utilizing the MERN stack.

https://nyt-extra.herokuapp.com/

## About This Boilerplate MERN Stack

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn install
cd client
yarn install
cd ..
```

After both installations complete, run the following command in a separate terminal to start the MongoDB server:

```
mongod
```

Then run the following command in your project terminal to start the Application:

```
yarn start
```

Note: You will need to start your MongoDB server to have DB & API functionality in the Application.

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```

2. Add and commit all changes to git

3. Push to Heroku

If all previous steps were followed correctly, your application should be deployed to Heroku!
