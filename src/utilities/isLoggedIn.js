import {AsyncStorage} from 'react-native';

export default function isLoggedIn() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('userID').then(response => {
      return response !== null
        ? resolve(true)
        : resolve(false);
    }).catch(error => {
      return reject(error);
    });
  });
};
