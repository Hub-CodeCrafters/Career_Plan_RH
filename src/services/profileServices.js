// const deleteProfile = (id) => {
//   return fetch(`https://geoapps.esri.co/PDCJsonServer/profiles/${id}`, {
//     mode: "cors",
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Error deleting profile');
//     }
//   })
//   .catch(error => {
//     console.error('Error deleting profile:', error);
//     throw error;
//   });
// };
  


  const updateProfilesColumn = (column, data,token) => {

    return fetch(`http://localhost:3000/profiles/${column}`, {
      mode: "cors",
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        id: column,
        data: data
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error updating profiles');
      }
      return response.json();
    })
    .catch(error => {
      console.error('  ', error);
      throw error;
    });
  };
  
  const updateAllProfiles = (profiles, token) => {
    return fetch(`http://localhost:3000/profiles`, {
      mode: "cors",
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(profiles) 
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error updating all profiles');
      }
      return response.json();
    })
    .catch(error => {
      console.error('  ', error);
      throw error;
    });
  };
  
  

  const getAllProfiles = () => { 
    return fetch('http://localhost:3000/profiles', {
        mode: "cors",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
          throw new Error(response.status + ' ' + response.statusText);
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
};


  const addProfile = (data) => {

    fetch('http://localhost:3000/profiles', {
      mode: "cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:valores.nivel,
        data: data
      })
    })

  }

  export {updateProfilesColumn,addProfile, getAllProfiles,updateAllProfiles};