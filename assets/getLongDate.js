const yearMonths = require("./months").months;

const getLongDate = (ISO_date) => {
  let date;

  ISO_date.includes("T")
    ? (date = ISO_date.split("T")[0].split("-"))
    : (date = ISO_date.split("-"));

  const day = date[2];
  const year = date[0];
  const month =
    yearMonths[date[1].charAt(0) === 0 ? date[1].charAt(1) : date[1] - 1];

  const totalDate = day + " " + month + " " + year;
  return { totalDate };
};

module.exports = getLongDate;
