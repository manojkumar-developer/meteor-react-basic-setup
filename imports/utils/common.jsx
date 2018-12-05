/* 

Component : common

*/
/** ****************************** Import Packages *************************** */
import "moment-timezone";
import moment from "moment";

const DEFAULT_TIMEZONE = "America/Los_Angeles";

const displayDate = (date, format = "MM/DD/YYYY") => {
  const timezone = DEFAULT_TIMEZONE;
  const formatted = moment.utc(date).tz(timezone);
  if (formatted.isValid()) {
    const tzFormat = format.replace(" z", "").replace("z", " ");
    return formatted.format(`${tzFormat}`);
  }
  return formatted;
};

const displayAmountWithComma = amount => {
  if (amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

const displayAmount = amount => {
  if (amount || amount === 0) {
    const result=amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${result}`;
  }
};
export { DEFAULT_TIMEZONE, displayDate, displayAmountWithComma, displayAmount };
