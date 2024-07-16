export const randomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * characters.length);
    result += characters[rand];
  }
  return result;
};
