window.db = { };

export const getRecomendations = (imageSrc) => {
  console.log(imageSrc);
  return new Promise((res) => {
    res({
      "statusCode": 200,
      "body": {
          "id": [
              "3pBv3LfvfPft2TqHleqKHo",
              "2LxdNADWier3MKTei8FbOY",
              "2BqIdDEwf8bHH0JuwS9j4O",
              "4RAR8g8fZNB106ezUurnE0",
              "4peF3yGZAZfeOFDahi6Ig5",
              "4R4gOp9ybG85RqbrY7JELc",
              "3ng7epefERNazaZkkbwLdq",
              "6oYXbji1rn7U6bFuNYekpQ",
              "4KqA0GwEKbc96WyfIZn3SV",
              "7KTcpv7wPJ4r6lR5SLzurh"
          ]
      },
      "RecomendationEmotion": "HAPPY"
  })
  })
}

export const saveRecomendations = ({ id, data }) => {
  return new Promise((res) => {
    if (!window.db[id]) window.db[id] = [...data]
    else window.db[id].push(...data)
    res()
  })
}

export const getHistory = (id) => {
  return new Promise((res) => {
    // res([])
    res([
      "3pBv3LfvfPft2TqHleqKHo",
      "2LxdNADWier3MKTei8FbOY",
      "2BqIdDEwf8bHH0JuwS9j4O",
      "4RAR8g8fZNB106ezUurnE0",
      "4peF3yGZAZfeOFDahi6Ig5",
      "4R4gOp9ybG85RqbrY7JELc",
      "3ng7epefERNazaZkkbwLdq",
      "6oYXbji1rn7U6bFuNYekpQ",
      "4KqA0GwEKbc96WyfIZn3SV",
      "7KTcpv7wPJ4r6lR5SLzurh",
      "3pBv3LfvfPft2TqHleqKHo",
      "2LxdNADWier3MKTei8FbOY",
      "2BqIdDEwf8bHH0JuwS9j4O",
      "4RAR8g8fZNB106ezUurnE0",
      "4peF3yGZAZfeOFDahi6Ig5",
      "4R4gOp9ybG85RqbrY7JELc",
      "3ng7epefERNazaZkkbwLdq",
      "6oYXbji1rn7U6bFuNYekpQ",
      "4KqA0GwEKbc96WyfIZn3SV",
      "7KTcpv7wPJ4r6lR5SLzurh",
      "3pBv3LfvfPft2TqHleqKHo",
      "2LxdNADWier3MKTei8FbOY",
      "2BqIdDEwf8bHH0JuwS9j4O",
      "4RAR8g8fZNB106ezUurnE0",
      "4peF3yGZAZfeOFDahi6Ig5",
      "4R4gOp9ybG85RqbrY7JELc",
      "3ng7epefERNazaZkkbwLdq",
      "6oYXbji1rn7U6bFuNYekpQ",
      "4KqA0GwEKbc96WyfIZn3SV",
      "7KTcpv7wPJ4r6lR5SLzurh",
      "3pBv3LfvfPft2TqHleqKHo",
      "2LxdNADWier3MKTei8FbOY",
      "2BqIdDEwf8bHH0JuwS9j4O",
      "4RAR8g8fZNB106ezUurnE0",
      "4peF3yGZAZfeOFDahi6Ig5",
      "4R4gOp9ybG85RqbrY7JELc",
      "3ng7epefERNazaZkkbwLdq",
      "6oYXbji1rn7U6bFuNYekpQ",
      "4KqA0GwEKbc96WyfIZn3SV",
      "7KTcpv7wPJ4r6lR5SLzurh",
      "3pBv3LfvfPft2TqHleqKHo",
      "2LxdNADWier3MKTei8FbOY",
      "2BqIdDEwf8bHH0JuwS9j4O",
      "4RAR8g8fZNB106ezUurnE0",
      "4peF3yGZAZfeOFDahi6Ig5",
      "4R4gOp9ybG85RqbrY7JELc",
      "3ng7epefERNazaZkkbwLdq",
      "6oYXbji1rn7U6bFuNYekpQ",
      "4KqA0GwEKbc96WyfIZn3SV",
      "7KTcpv7wPJ4r6lR5SLzurh",
      "3pBv3LfvfPft2TqHleqKHo",
      "2LxdNADWier3MKTei8FbOY",
      "2BqIdDEwf8bHH0JuwS9j4O",
      "4RAR8g8fZNB106ezUurnE0",
      "4peF3yGZAZfeOFDahi6Ig5",
      "4R4gOp9ybG85RqbrY7JELc",
      "3ng7epefERNazaZkkbwLdq",
      "6oYXbji1rn7U6bFuNYekpQ",
      "4KqA0GwEKbc96WyfIZn3SV",
      "7KTcpv7wPJ4r6lR5SLzurh",
    ])
  })
}