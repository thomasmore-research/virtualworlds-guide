/* eslint-disable import/no-commonjs */
const functions = require('firebase-functions');

const algoliasearch = require('algoliasearch');

const indexName = functions.config().algolia.index;

const client = algoliasearch(
  functions.config().algolia.app,
  functions.config().algolia.adminkey
);
const index = client.initIndex(indexName);

exports.algoliaSync = functions.firestore
  .document(`${indexName}/{doc}`)
  .onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if (!oldData.exists && newData.exists) {
      // create
      return index.addObject(
        Object.assign(
          {},
          {
            objectID,
          },
          data
        )
      );
    } else if (!newData.exists && oldData.exists) {
      // deleting
      return index.deleteObject(objectID);
    } else {
      // updating
      return index.saveObject(
        Object.assign(
          {},
          {
            objectID,
          },
          data
        )
      );
    }
  });
