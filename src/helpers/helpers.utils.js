export const getToken = () => {
  const token = window.localStorage.getItem('token');
  return JSON.stringify(token);
};
