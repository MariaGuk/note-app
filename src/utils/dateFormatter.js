const date = new Date().toLocaleDateString();
const array = date.split('.');
const formattedDate = `${array[2]}-${array[1]}-${array[0]}`;

export default formattedDate;