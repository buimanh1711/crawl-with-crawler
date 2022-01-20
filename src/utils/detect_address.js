function detectAddress(text) {
  if (!text || typeof text !== "string") return [""];

  return (addresses = text.match(/\b0x[a-fA-F0-9]{40}/gi));
}

module.exports = detectAddress;
