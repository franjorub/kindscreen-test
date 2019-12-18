import URLS from "./constants";

const client = {
  login: async (username, email) => {
    try {
      const response = await fetch(URLS.users);
      const data = await response.json();

      const [user] = data.filter(
        user =>
          user.username.toLowerCase() === username &&
          user.email.toLowerCase() === email
      );
      return user;
    } catch (err) {
      throw err;
    }
  },
  getPostsByUserId: async id => {
    try {
      const response = await fetch(`${URLS.users}/${id}/posts`);
      const data = await response.json();

      return data;
    } catch (err) {}
  }
};

export default client;
