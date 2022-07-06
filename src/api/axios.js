var axios = require("axios");

export const get_api = async (url) => {
  var config = {
    method: "get",
    url: url,
    headers: {},
  };
  try {
    const { data } = await axios(config);
    if (data) {
      return data;
    }
    throw new Error("Something went wrong please try again");
  } catch (err) {
    return { success: false, error: err };
  }
};
