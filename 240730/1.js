const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === API_URL) {
          resolve({ data: "Success!" });
        } else {
          reject(new Error("Failed!"));
        }
      }, 3000);
    });
  }

getData(API_URL)
 .then((response) => {
    console.log("Success:". response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

getData(WRONG_URL)
 .then((response) => {
    console.log("Success:". response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });