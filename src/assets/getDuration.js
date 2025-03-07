const getDuration = (dateString) => {
  const dateObj = new Date(dateString);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDay();

  return month > 12
    ? `${year} year ago`
    : day > 30
    ? `${month} month ago`
    : `${day} day ago`;
};

export default getDuration;
