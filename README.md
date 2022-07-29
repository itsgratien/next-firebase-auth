# Next Firebase Auth
Authenticate users using firebase auth in next js

## Providers
- Google

## How to use it
- clone repo ``https://github.com/itsgratien/next-firebase-auth.git``
- cd ``web`` directory & run ``yarn install``
- inside ``web/utils`` directory, create a file ``FirebaseConfig.ts`` file
- FilebaseConfig.ts should look like this: 
``` 
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
```
``N.B:`` Remember to create project on [firebase](https://firebase.com)

- Start a dev server run ``yarn dev`` in your terminal inside web directory

## Author
[gratien](https://github.com/itsgratien)