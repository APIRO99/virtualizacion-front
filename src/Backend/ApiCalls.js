export const getRecomendations = async (imageSrc) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var body = JSON.stringify({
    name: "reactTest.png",
    content: imageSrc.slice(23)
  })
  
  var requestOptions = {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers, body
  };

  // return new Promise((res) => {
  //   res({
  //     songs: [
  //       "3pBv3LfvfPft2TqHleqKHo",
  //       "2LxdNADWier3MKTei8FbOY",
  //       "2BqIdDEwf8bHH0JuwS9j4O",
  //       "4RAR8g8fZNB106ezUurnE0",
  //       "4peF3yGZAZfeOFDahi6Ig5",
  //       "4R4gOp9ybG85RqbrY7JELc",
  //       "3ng7epefERNazaZkkbwLdq",
  //       "6oYXbji1rn7U6bFuNYekpQ",
  //       "4KqA0GwEKbc96WyfIZn3SV",
  //       "7KTcpv7wPJ4r6lR5SLzurh"
  //     ],
  //     "emotion": "HAPPY"
  //   })
  // })

  return fetch("https://d1xk0jbrvg.execute-api.us-east-1.amazonaws.com/v1/upload", requestOptions)
    .then(res => res.json())
    .then(data => {
      if (data.errorType) {
        // return no faces found
      }
      return { 
        songs: data?.body?.id || [],
        emotion: data.RecomendationEmotion,
      }
    })
    .catch(error => console.log('error', error));
}

export const saveRecomendations = async ({ id, data }) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var body = JSON.stringify({
    UserId: id,
    Method: "Update",
    SongList: data
  })
  
  var requestOptions = {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers, body
  };

  console.log(requestOptions)
  return fetch("https://3ewnpbip4f.execute-api.us-east-1.amazonaws.com/Dev/transaction", requestOptions)
    .then(res => res.text())
    .then(data => {
      console.log(data);
      return true;
    })
    .catch(error => console.log('error', error));
}

export const getHistory = async (id) => {
  console.log("GETUUSER", id)
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var body = JSON.stringify({
    UserId: id,
    Method: "GetUser",
    SongList: [ ]
  })
  
  var requestOptions = {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers, body
  };

  return fetch("https://3ewnpbip4f.execute-api.us-east-1.amazonaws.com/Dev/transaction", requestOptions)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.SongList;
    })
    .catch(error => console.log('error', error));
}

// export const saveRecomendations = ({ id, data }) => {
//   return new Promise((res) => {
//     if (!window.db[id]) window.db[id] = [...data]
//     else window.db[id].push(...data)
//     res()
//   })
// }

// export const getHistory = (id) => {
//   return new Promise((res) => {
//     res(window.db[id])
//   })
// }
