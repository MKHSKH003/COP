import firebase from 'firebase';

import appsettings from '../../../package.json'

export const uploadAndGetImageUrl = async (organization, onAddOrganization, setInProgress) => {
    setInProgress(true)
    if (!firebase.apps.length) {
      firebase.initializeApp(appsettings.FirebaseConfig);
    }
    
    var ref = firebase.storage().ref().child("images/COP/" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
    const snapshot = await ref.put(b64toBlob(organization.avatar));

    onAddOrganization.execute({
      ...organization,
      avatar: await snapshot.ref.getDownloadURL()
    });
    setInProgress(false);
  }

const b64toBlob = dataURI => {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/jpeg' });
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
