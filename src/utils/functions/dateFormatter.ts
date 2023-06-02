export const dateFormatter = (date: string) => {
  const newDate = new Date(date);

  const formattedDate = `${newDate.getDate().toString().padStart(2, '0')}-${(
    newDate.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${newDate.getFullYear()} ${newDate
    .getHours()
    .toString()
    .padStart(2, '0')}-${newDate.getMinutes().toString().padStart(2, '0')}`;

  return formattedDate;
};
