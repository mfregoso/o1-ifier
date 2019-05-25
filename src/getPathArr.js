const getPathArr = str => {
  const pathArr = [];
  if (!str || typeof str !== "string") return pathArr;
  if (str[0] === "'" || str[0] === '"') {
    pathArr.push(str); return pathArr;
  }

  const isOnlyNum = /[0-9]/;
  let validPath = true;
  let insideBracket = false;
  let startIndex = 0;

  const pushPrevStr = (endIndex) => {
    if (startIndex === endIndex) {
      startIndex = endIndex + 1;
      return;
    }
    const key = str.substr(startIndex, endIndex - startIndex);
    pathArr.push(key);
    startIndex = endIndex + 1;
  }

  const hasEndQuotes = (str) => {
    if (str[0] === "\"" && str[str.length - 1] === "\"") return true;
    if (str[0] === "\'" && str[str.length - 1] === "\'") return true;
  }

  const pushBracketNotation = (end) => {
    const key = str.substr(startIndex, end - startIndex);
    if (isOnlyNum.test(key)) {
      pushPrevStr(end);
    } else if (hasEndQuotes(key)) {
      const noQuotesKey = key.substr(1, key.length - 2);
      pathArr.push(noQuotesKey);
      startIndex = end + 1;
    } else {
      validPath = false; //pushPrevStr(end);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      insideBracket = true;
      pushPrevStr(i);
    } else if (str[i] === "]") {
      insideBracket = false;
      pushBracketNotation(i);
      continue;
    }
    if (!insideBracket && str[i] === "." && str[i+1] === ".") {
      validPath = false; break;
    } 
    if (!insideBracket && str[i] === "." && i !== 0) {
      pushPrevStr(i)
      continue;
    } 
    if (!insideBracket && i === str.length - 1) { // reached end
      pushPrevStr(str.length);
    }
  }
  
  return validPath ? pathArr : [];
}

module.exports = getPathArr;
