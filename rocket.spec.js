import { createRocket } from './rocket';

let rocket;

beforeEach(() => {
  rocket = createRocket();
})

// 5.2
it('can add fuel', () => {
  rocket.addFuel(100);

  expect(rocket.fuel).toEqual(100);
});

// 5.3
it('must have 40 tonnes of rocket fuel to have sufficient', () => {
  rocket.fuel = 39
  expect(rocket.hasSufficientFuel()).toBeFalsy();

  rocket.fuel = 40;
  expect(rocket.hasSufficientFuel()).toBeTruthy();
});

// 5.4
it('cannot start engine without fuel', () => {
  expect(() => rocket.startEngine()).toThrow('Insufficient fuel');
});

// 5.5
it('can start engine with sufficient fuel', () => {
  rocket.addFuel(200);

  expect(() => rocket.startEngine()).not.toThrow();
});

// 6.2
it('matches snapshot', () => {
  expect(rocket).toMatchSnapshot();
})