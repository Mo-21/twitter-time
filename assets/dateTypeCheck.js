function isISOString(dateString) {
  const isoRegex = /^(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}\.\d{1,3}Z)?$/;
  return isoRegex.test(dateString);
}

function isISOTime(timeString) {
  const isoRegex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d\.\d{1,3}Z$/;
  return isoRegex.test(timeString);
}

module.exports = { isISOString, isISOTime };
