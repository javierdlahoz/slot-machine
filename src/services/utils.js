export default {
  chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  },
  chunkForReels(outcome, reelAmount, rows) {
    let reels = [];

    for (let i = 0; i < reelAmount; i++) {
      let indexes = [];
      for (let j = 0; j < rows; j++) {
        indexes.push((j * reelAmount) + i);
      }
      reels[i] = outcome.filter((symbol, index) => indexes.includes(index)).reverse()
    }

    return reels;
  }
};
