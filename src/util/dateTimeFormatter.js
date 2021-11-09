const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const dateTimeFormatter = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let hour = date.getHours();
  const min = date.getMinutes();
  let AmPm = "AM";

  if (hour >= 12) {
    AmPm = "PM";
    hour -= 12;
  }

  return (
    day +
    " " +
    Months[month - 1] +
    " " +
    (year % 100) +
    " - " +
    hour +
    ":" +
    min +
    " " +
    AmPm
  );
};
