const axios = require("axios");

async function trackRedirect(url) {
  var init = true;
  const visitedUrl = [];
  async function getLink(url) {
    try {
      const response = await axios.get(url, { maxRedirects: 0 });
      visitedUrl.push({ status: response.status, url });
    } catch (error) {
      if (init) {
        visitedUrl.push({ status: error.response.status, url });
        init = false;
      }
      var interLink = error.response.headers["location"];
      visitedUrl.push({ status: error.response.status, url: interLink });
      await getLink(interLink);
    }
  }
  await getLink(url);
  return visitedUrl;
}

module.exports = {
  trackRedirect,
};
