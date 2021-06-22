export const getToken = () => {
  let token = window.localStorage.getItem('token');
  if (token !== null || token !== undefined) {
    token = token.replace(/"/gi, '');
    console.log('TJFH', token);
  }
  return token;
};
