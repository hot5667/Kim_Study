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

  async function handleGetData(url) {
    try {
      const response = await getData(url);
      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  
  handleGetData(API_URL);
  
  handleGetData(WRONG_URL);