export class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.#hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    const address = this.#hash(key);
    const bucket = this.data[address];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          return bucket[i][1];
        }
      }
    }

    return undefined;
  }
}
