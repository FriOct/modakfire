export const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/users/12345')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => {
          console.error('Error fetching user data:', error);
          reject(error);
        });
    });
  };
  
  export const updateUser = (userId, userData) => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.example.com/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update user');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => {
          console.error('Error updating user:', error);
          reject(error);
        });
    });
  };
  