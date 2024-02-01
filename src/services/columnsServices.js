

const getAllColumns = () => {

    return fetch('https://geoapps.esri.co/PDCJsonServer/columns', {
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