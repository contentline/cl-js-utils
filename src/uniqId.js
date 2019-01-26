const byteToHex = byte => `0${byte.toString(16)}`.slice(-2);

const generateHashId = len => {
  const arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return [].map.call(arr, byteToHex).join("");
};

export default generateHashId;
