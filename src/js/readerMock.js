import getData from './getData.js';

export default function read() {
  return new Promise((resolve, reject) => {
    // эмуляция чтения файла
    setTimeout(() => {
      const data = getData();
      return ((input) => {
        const buffer = new ArrayBuffer(input.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i += 1) {
          bufferView[i] = input.charCodeAt(i);
        }
        if (input.length > 1) {
          resolve(buffer);
        } else {
          reject(new Error('Error'));
        }
      })(data);
    }, 1000);
  });
}
