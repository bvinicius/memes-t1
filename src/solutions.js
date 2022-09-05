module.exports = {
  // problema 1238
  combiner(str1, str2) {
    let str = "";
    const lastIndex = Math.max(str1.length, str2.length);
    for (let i = 0; i < lastIndex; i++) {
      str += str1.charAt(i) || "";
      str += str2.charAt(i) || "";
    }

    return str;
  },
};
