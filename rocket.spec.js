import { createRocket } from './rocket';

// 5.2
it('can add fuel', () => {
  const rocket = createRocket();
  rocket.addFuel(100);

  expect(rocket.fuel).toEqual(100);
});

// 5.3
it('must have 40 tonnes of rocket fuel to have sufficient', () => {
  const rocketA = createRocket();
  rocketA.addFuel(39);

  expect(rocketA.hasSufficientFuel()).toBeFalsy();

  const rocketB = createRocket();
  rocketB.addFuel(40);

  expect(rocketB.hasSufficientFuel()).toBeTruthy();
});

// 5.4
it('cannot start engine without fuel', () => {
  const rocket = createRocket();

  expect(() => rocket.startEngine()).toThrow('Insufficient fuel');
});

// 5.5
it('can start engine with sufficient fuel', () => {
  const rocket = createRocket();
  rocket.addFuel(200);

  expect(() => rocket.startEngine()).not.toThrow();
});
