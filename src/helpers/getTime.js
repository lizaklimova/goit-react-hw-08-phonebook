export const getTime = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  console.log(`${hours} : ${minutes}`);
};
