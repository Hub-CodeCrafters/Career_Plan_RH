

const getAllColumns = () => {

    return fetch('http://localhost:3000/columns', {
      mode: "cors",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
  }
  

  export default getAllColumns;