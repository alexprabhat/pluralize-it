import irregularPlurals from "./irregular-plurals.json" assert { type: "json" };

function isUpperCase(word) {
  if (
    word.charCodeAt(word.length - 1) >= 65 &&
    word.charCodeAt(word.length - 1) <= 90
  ) {
    return true;
  } else {
    return false;
  }
}
export default function pluralize(word) {
  let str = word.trim();
  if (Object.keys(irregularPlurals).includes(str.toLowerCase())) {
    if (isUpperCase(str)) {
      return irregularPlurals[str.toLowerCase()].toUpperCase();
    } else {
      return irregularPlurals[str];
    }
  } else {
    if (
      str.at(-1).toLowerCase() == "s" ||
      str.at(-1).toLowerCase() == "x" ||
      str.at(-1).toLowerCase() == "z" ||
      (str.at(-1).toLowerCase() == "h" &&
        (str.at(-2).toLowerCase() == "c" || str.at(-2).toLowerCase() == "s"))
    ) {
      if (isUpperCase(str)) {
        return str + "ES";
      } else {
        return str + "es";
      }
    } else if (
      str.at(-1).toLowerCase() == "y" &&
      !(
        str.at(-1).toLowerCase() == "a" ||
        str.at(-1).toLowerCase() == "e" ||
        str.at(-1).toLowerCase() == "i" ||
        str.at(-1).toLowerCase() == "o" ||
        str.at(-1).toLowerCase() == "u"
      )
    ) {
      if (isUpperCase(str)) {
        return str.slice(str.length - 1) + "IES";
      } else {
        return str.slice(str.length - 1) + "ies";
      }
    } else {
      if (isUpperCase(str)) {
        return str + "S";
      } else {
        return str + "s";
      }
    }
  }
}
