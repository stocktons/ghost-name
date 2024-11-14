const charKey = {
  a: "t",
  e: "boo",
  n: "oo",
  r: "eee",
  y: "oo",
};

function nameConstructor(name) {
  const capitalIndexes = new Set();
  for (let i = 0; i < name.length; i++) {
    if (name[i] === name[i].toUpperCase()) capitalIndexes.add(i);
  }

  const nameLower = name.toLowerCase();
  let ghostName = "";

  for (let i = 0; i < nameLower.length; i++) {
    const char = nameLower[i];
    if (char === " ") {
      ghostName += " ";
      continue;
    }

    if (!capitalIndexes.has(i)) {
      if (char === "h") ghostName += "s";
      else if (char in charKey) ghostName += char + charKey[char];
      else ghostName += char;
    } else {
      if (char === "h") ghostName += "S";
      else if (char in charKey) ghostName += char.toUpperCase() + charKey[char];
      else ghostName += char.toUpperCase();
    }
  }

  return ghostName;
}


export { nameConstructor };
