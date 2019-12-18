import URLS from "./constants";

const getData = async url => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const client = {
  login: async (username, email) => {
    try {
      const data = await getData(URLS.users);

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
      const url = `${URLS.users}/${id}/posts`;
      const data = await getData(url);

      const normalizedData = {
        entities: data.reduce(
          (acc, current) => ({ ...acc, [current.id]: { ...current } }),
          {}
        ),
        keys: data.map(post => post.id)
      };

      return normalizedData;
    } catch (err) {
      throw err;
    }
  },
  getCommentsByPostId: async id => {
    try {
      const url = `${URLS.posts}/${id}/comments`;
      const data = await getData(url);

      return data;
    } catch (err) {
      throw err;
    }
  }
};

export default client;
