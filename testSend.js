const axios = require("axios");

async function testSendMessage() {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/send-message-bulk",
      {}
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}

testSendMessage();
