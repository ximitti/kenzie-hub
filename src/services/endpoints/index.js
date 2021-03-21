// authentication
export const bearer = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// endpoints
export const postSignIn = () => "/sessions/";
export const postSignUp = () => "/users/";
export const getUser = () => "/profile/";
export const putUser = () => "/profile/";
export const postCreateTech = () => "/users/techs/";
export const delTech = (id) => `/users/techs/${id}`;
export const putTech = (id) => `/users/techs/${id}`;
export const getAllUsers = (page) => `/users/?page=${page}`;
