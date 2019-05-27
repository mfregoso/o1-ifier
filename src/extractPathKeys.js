const getPathArr = str => {
  const pathArr = [];
  if (typeof str !== "string") return pathArr;
  if (!str.length) return [""];

  let validPath = true;
  let insideBracket = false;
  let startIndex = 0;

  const updateStartIndex = endIndex => startIndex = ++endIndex;

  const pushPrevStr = (endIndex) => {
    if (startIndex !== endIndex) {
      const key = str.substr(startIndex, endIndex - startIndex);
      pathArr.push(key);
    }
    updateStartIndex(endIndex);
  }

  const hasEndQuotes = (str) => {
    const first = str[0], last = str.slice(-1);
    if (first === "\"" && last === "\"" || first === "\'" && last === "\'") return true;
  }

  const checkBracketNotation = (endIndex) => {
    const key = str.substr(startIndex, endIndex - startIndex);
    
    if (startIndex === endIndex) {
      validPath = false;
    } else if (hasEndQuotes(key)) {
      const noQuotesKey = key.substr(1, key.length - 2);
      pathArr.push(noQuotesKey);
      updateStartIndex(endIndex);
    } else {
      pushPrevStr(endIndex);
    }
  }

  for (let i = 0; validPath && i < str.length; i++) {
    if (str[i] === "[") {
      insideBracket = true;
      pushPrevStr(i);
    } else if (str[i] === "]") {
      insideBracket = false;
      checkBracketNotation(i);
      continue;
    }
    if (!insideBracket && str[i] === "." && str[i + 1] === ".") {
      validPath = false;
      break;
    } 
    if (!insideBracket && str[i] === "." && i !== 0) {
      pushPrevStr(i)
      continue;
    } 
    if (!insideBracket && i === str.length - 1) {
      pushPrevStr(str.length);
    }
  }
  
  return validPath ? pathArr : [];
}

module.exports = getPathArr;
