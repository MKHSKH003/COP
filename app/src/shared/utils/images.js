import firebase from 'firebase';

import appsettings from '../../../package.json'

export const uploadImage = async (blob) => {
    if (!firebase.apps.length) {
      firebase.initializeApp(appsettings.FirebaseConfig);
    }
    var ref = firebase.storage().ref().child("images/" + 'COP' + "/MarketUpdates/" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const snapshot = await ref.put(blob);

    return await snapshot.ref.getDownloadURL();
  }

export const  readImageURL = (input, object, setObjectImage) => {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = () => setObjectImage({
          ...object,
          avatar: reader.result
        })
        reader.readAsDataURL(input.files[0]);
    }
  }
