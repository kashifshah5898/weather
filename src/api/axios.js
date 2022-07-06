var axios = require("axios");

export const get_api = (url) => {
  var config = {
    method: "get",
    url: url,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
