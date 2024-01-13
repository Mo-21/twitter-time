const isISOString = require("./assets/dateTypeCheck").isISOString;
const isISOTime = require("./assets/dateTypeCheck").isISOTime;
const getDateDifference = require("./assets/getDateDifference");
const getLongDate = require("./assets/getLongDate");

const getTwitterTime = (ISO_date) => {
  if (!isISOString(ISO_date)) throw new Error("Date is not in ISO format");

  const { seconds, minutes, hours, days } = getDateDifference(ISO_date);

  if (!ISO_date.includes("T")) {
    return getLongDate(ISO_date).totalDate;
  } else {
    if (seconds < 60) {
      return seconds + "s";
    } else if (minutes < 60) {
      return minutes + "m";
    } else if (hours < 24) {
      return hours + "h";
    } else {
      if (days > 5) {
        return getLongDate(ISO_date).totalDate;
      } else {
        return days + "d";
      }
    }
  }
};

const getTime = (ISO_time) => {
  if (!isISOTime(ISO_time)) throw new Error("Time is not in ISO format");

  const newTime = ISO_time.split(":");
  return newTime[0] + ":" + newTime[1];
};

module.exports = { getTwitterTime, getTime };
