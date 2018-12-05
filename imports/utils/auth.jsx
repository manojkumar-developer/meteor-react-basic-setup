/* 

Component : auth

*/
/** ****************************** Import Packages *************************** */
import {
  storageSetItem,
  storageGetItem,
  storageRemoveItem
} from "./localStorage";

const KARMA_USER = "KARMA_USER";

export const saveLocalUser = user => storageSetItem(KARMA_USER, user);

export const getLocalUser = () => storageGetItem(KARMA_USER);

export const deleteLocalUser = () => storageRemoveItem(KARMA_USER);
