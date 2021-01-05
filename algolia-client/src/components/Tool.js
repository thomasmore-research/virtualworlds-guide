import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/firestore';

export default () => {
  const { docId } = useParams();
  const [doc, setDoc] = useState(0);
  useEffect(() => {
    (async function g() {
      const ref = db.collection('tools');
      const docRef = await ref.doc(docId).get();
      if (docRef.exists) setDoc(docRef.data());
    })();
  }, []);

  const { description, features, logo, maxDeelnemers, name, suitableFor } = doc;

  return <div>{name}</div>;
};
