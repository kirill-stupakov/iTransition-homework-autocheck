function solution(strings) {
  if (strings.length === 0) {
    return "";
  }

  const a = strings.shift();

  let maxLength = 0;
  let substring = "";

  for (let i = 0; i < a.length; i++) {
    for (let j = i + maxLength + 1; j <= a.length; j++) {
      const str = a.slice(i, j);

      if (strings.every((s) => s.includes(str))) {
        maxLength = str.length;
        substring = str;
      }
    }
  }

  return substring;
}

const strings = process.argv
  .slice(2, process.argv.length)
  .sort((a, b) => a.length - b.length);
console.log(solution(strings));
