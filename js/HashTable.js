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
    if (!this.data.length) {
      return undefined;
    }

    const address = this.#hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    for (let i = 0; i < this.data[address].length; i++) {
      if (this.data[address][i][0] === key) {
        throw new Error(`Key: '${key}' already exists`);
      }
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

  keys() {
    if (!this.data.length) {
      return undefined;
    }

    const keys = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keys.push(this.data[i][j][0]);
        }
      }
    }

    return keys;
  }

  values() {
    if (!this.data.length) {
      return undefined;
    }

    const values = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          values.push(this.data[i][j][1]);
        }
      }
    }

    return values;
  }

  entries() {
    if (!this.data.length) {
      return undefined;
    }

    const entries = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          entries.push([this.data[i][j][0], this.data[i][j][1]]);
        }
      }
    }

    return entries;
  }
}
