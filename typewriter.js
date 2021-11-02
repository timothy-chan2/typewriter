const sentence = "hello there from lighthouse labs";
let delay = 50;

for (const i in sentence) {
  if (i < sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, delay * i);
  } else {
    setTimeout(() => {
      console.log(sentence[i]);
    }, delay * i);
  }
}