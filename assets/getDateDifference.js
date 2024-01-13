const getDateDifference = (ISO_date) => {
  const currentTime = new Date().toISOString();

  // in milliseconds
  const differenceInMilliseconds = new Date(currentTime) - new Date(ISO_date);

  const seconds = Math.floor(differenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 0 || minutes < 0 || hours < 0 || days < 0)
    throw new Error("Date cannot be in future");

  return { seconds, minutes, hours, days };
};

module.exports = getDateDifference;
