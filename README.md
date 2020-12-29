## Algolia Sync
```
cd algolia
firebase init

firebase functions:config:set algolia.app=
firebase functions:config:set algolia.adminKey=
firebase functions:config:set algolia.index=

firebase deploy --only functions
```