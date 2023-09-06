# React Todo App.
---
## Project Description

This is a Complete Todo Application with all features with CRUD operations. We are using `React.js` and to manage our states, we are using `Redux`. 
## Getting Started

You need to go the file directory using terminal and run

```shell
cd react-todo-app
npm install
```

and after that start the dev server.

```shell
npm start
```
and open `http://localhost:3000` in your broweser to view the app.

<br>
##### Common issues while instaling packages:
You may face below error:
```
npm ERR! code ERR_SOCKET_TIMEOUT
npm ERR! network Socket timeout
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config
```

Sometimes npm fails to fetch some module due to internet connection problems. You can try using different internet connection or increasing npm fetch timeouts using below commands:
```
npm config set fetch-retry-mintimeout 20000
npm config set fetch-retry-maxtimeout 120000
```


# Cypress test
---
npx cypress run