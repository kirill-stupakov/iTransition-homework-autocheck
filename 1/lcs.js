console.log(
  ((s) => {
    return s.length
      ? ((s) => {
          let a = s[0],
            maxLength = 0,
            substring = "",
            n = a.length;

          for (let i = -1; ++i < n; ) {
            for (let j = i + maxLength; ++j <= n; ) {
              let str = a.slice(i, j);

              if (s.every((s) => s.includes(str))) {
                maxLength = j - i;
                substring = str;
              }
            }
          }

          return substring;
        })(s)
      : "";
  })(process.argv.slice(2))
);
