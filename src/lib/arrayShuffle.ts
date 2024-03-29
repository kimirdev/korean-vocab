export default function shuffle(array: { korean: string; english: string }[]) {
  let currentIndex = array.length;
  let randomIndex = 0;

  const arr = [...array];

  console.log(arr.length, "arr length");
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
