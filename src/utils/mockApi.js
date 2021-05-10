export const userLogin = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'bhakti@gmail.com' && password === 'bhakti123') {
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });
  };