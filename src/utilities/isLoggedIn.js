import {AsyncStorage} from 'react-native';

export default function isLoggedIn() {
  return (AsyncStorage.UserID) ? true : false;
}
