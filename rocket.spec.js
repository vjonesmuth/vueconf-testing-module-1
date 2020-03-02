import { createRocket } from './rocket';

it('can add fuel', () => {
  const rocket = createRocket();
  rocket.addFuel(100);

  expect(rocket.fuel).toEqual(100);
});

it('must have 40 tonnes of rocket fuel to have sufficient', () => {
  const rocketA = createRocket();
  rocketA.addFuel(39);

  expect(rocketA.hasSufficientFuel()).toBeFalsy();

  const rocketB = createRocket();
  rocketB.addFuel(40);

  expect(rocketB.hasSufficientFuel()).toBeTruthy();
});

it('cannot start engine without fuel', () => {
  const rocket = createRocket();

  expect(() => rocket.startEngine()).toThrow();
});

it('can start engine with sufficient fuel', () => {
  const rocket = createRocket();
  rocket.addFuel(200);

  expect(() => rocket.startEngine()).not.toThrow();
});
