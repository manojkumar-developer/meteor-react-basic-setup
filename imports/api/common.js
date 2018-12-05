/* 

API : common

*/
/** ****************************** Import package *************************** */
import { Promise } from "meteor/promise";

const callWithPromise = (
  method,
  parm1 = "",
  parm2 = "",
  parm3 = "",
  parm4 = "",
  parm5 = ""
) =>
  new Promise((resolve, reject) => {
    Meteor.call(method, parm1, parm2, parm3, parm4, parm5, (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });

export default callWithPromise;
