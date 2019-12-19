import read from './readerMock.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read();
          const value = await json(data);
          return resolve(JSON.parse(value));
        } catch (error) {
          return reject(error);
        }
      })();
    });
  }
}
