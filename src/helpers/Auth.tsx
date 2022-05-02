
export const isAuth = () => {
  // check some condition and return boolean
  const userToken = window.localStorage.getItem('dyboPanel:ACCESS_TOKEN');
  return !!userToken;
  // return true;
};
