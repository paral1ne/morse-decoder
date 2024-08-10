const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10));
  }
  arr.forEach((el) => {
    let code = "";
    if (el == "**********") {
      result += " ";
    } else {
      for (let j = 0; j < 10; j += 2) {
        if (el.slice(j, j + 2) == 10) {
          code += ".";
        } else if (el.slice(j, j + 2) == 11) {
          code += "-";
        }
      }
      result += MORSE_TABLE[code];
    }
  });
  return result;
}
module.exports = {
  decode,
};
