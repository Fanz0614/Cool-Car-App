import { v1 as uuid } from 'uuid';
import { createStore } from './store';
import { addCard, deleteCard } from './appSlice';

const testData = {
  id: uuid(),
  vehicle: '2020 SKODA Superb',
  purchasePrice: '50000',
  originPrice: '60000',
  type: 'Automatic',
  engine: '4cyl 2.0L Turbo Petrol',
  colour: 'Magic Black',
  body: '5 doors 5 seat Wagon',
  describe: 'My first secondhand car in Melbourne',
  comment:
    'NEW DEMO SUPERB SCOUT 4X4 WAGON INCLUDES SUNROOF AND 19 INCH MANASLU ALLOY WHEELS.',
  checked: false,
}

test('addCard and deleteCard', () => {
  const testStore = createStore();
  expect(testStore.getState().details).toEqual([]);

  // addCard
  testStore.dispatch(addCard(testData));
  expect(testStore.getState().details).toEqual([testData]);

  // deleteCard
  testStore.dispatch(deleteCard(testData.id));
  expect(testStore.getState().details).toEqual([]);
});
