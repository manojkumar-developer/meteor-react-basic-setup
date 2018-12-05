/* 

API : users

*/
/** ****************************** Import common function *************************** */
import callWithPromise from "/imports/api/common";

const insertUser = userId => {
  async function _insertData() {
    const result = await callWithPromise("insertUser", userId);
    return result;
  }
  return _insertData().then(res => res);
};

const getUserById = userId => {
  async function _getList() {
    const result = await callWithPromise("getUserById", userId);
    return result;
  }
  return _getList().then(res => res);
};

const updateUserById = (userId, userData) => {
  async function _getData() {
    const result = await callWithPromise("updateUserById", userId, userData);
    return result;
  }
  return _getData().then(res => res);
};

const updatePasswordById = (userId, passwordData) => {
  async function _getData() {
    const result = await callWithPromise(
      "updatePasswordById",
      userId,
      passwordData
    );
    return result;
  }
  return _getData().then(res => res);
};

const updateProfileByUserId = (userId, imageData) => {
  async function _getData() {
    const result = await callWithPromise(
      "updateProfileByUserId",
      userId,
      imageData
    );
    return result;
  }
  return _getData().then(res => res);
};

const getDashBoardDatByUser = userId => {
  async function _getList() {
    const result = await callWithPromise("getDashBoardDatByUser", userId);
    return result;
  }
  return _getList().then(res => res);
};

const getTaxReportsByUser = (userId, type, method, fromDate, toDate) => {
  async function _getGrantReportByUser() {
    const result = await callWithPromise(
      "getGrantReportByUser",
      userId,
      method,
      fromDate,
      toDate
    );
    return result;
  }
  async function _getContributionReportByUser() {
    const result = await callWithPromise(
      "getContributionReportByUser",
      userId,
      method,
      fromDate,
      toDate
    );
    return result;
  }
  if (type === "grants") {
    return _getGrantReportByUser().then(res => res);
  }
  return _getContributionReportByUser().then(res => res);
};

const addCreditsByUser = (userId, inputData) => {
  async function _insertData() {
    const result = await callWithPromise("addCreditsByUser", userId, inputData);
    return result;
  }
  return _insertData().then(res => res);
};

export {
  insertUser,
  getUserById,
  updateUserById,
  updatePasswordById,
  updateProfileByUserId,
  getDashBoardDatByUser,
  getTaxReportsByUser,
  addCreditsByUser
};
