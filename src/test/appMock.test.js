import GameSavingLoader from '../js/GameSavingLoader.js';
import getData from '../js/getData.js';

jest.mock('../js/getData.js');
beforeEach(() => {
  jest.resetAllMocks();
});

test('Проверка GameSavingLoader', async () => {
  const expected = `{
    "id":9,
    "created":1546300800,
    "userInfo":{
      "id":1,
      "name":"Hitman",
      "level":10,
      "points":2000
    }
  }`;
  await getData.mockReturnValue(expected);
  const recived = await GameSavingLoader.load();
  expect(recived).toEqual(JSON.parse(expected));
});

test('Проверка GameSavingLoader = null', async () => {
  const expected = '';
  await getData.mockReturnValue(expected);
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error.message).toEqual('Error');
  }
});
