function parseUrl(url) {
  return `https://bscscan.com${(url[0] == "/" && url) || "/" + url}`;
}

module.exports = parseUrl;
