# [Get Started with Jest](https://www.notion.so/Get-Started-with-Jest-c0fc8856403a444fbb8ab70a62d72b7c)

### Exercise 3.1 | 5 minutes

- Download the modules from [http://bit.ly/2uNvBOY](http://bit.ly/2uNvBOY) if you don't already have them
- Unzip the file. Unzip Module 1.
- Create a new project and move all the resources there

### Exercise 3.2 | 10 minutes

- download and copy resources into project from [Gist](https://gist.github.com/rahaug/44430891c8820ddd0ae1f008ed39fec9/archive/deb8f10676bca9f8c49ab9b2e3289f778039aefa.zip)
    - Copy `User.js` into your project
- create a `user.test.js` file and import the `User.js` module
- create a new test: `should return full name`
    - Create a new user and pass in an object with a `firstName` and a `lastName` property.
    - Expect that the user’s `name` property is equal to the `firstName` and `lasName`, with a space between.

### Example User:

    const user = new User({ firstName: 'John', lastName: 'Rambo'})
    user.name === 'John Rambo'

### Exercise 3.3 | 5 minutes

- Create a new test: `should return initials`
    - Create a new user and pass in an object with a `firstName` and a `lastName` property
    - Expect that the user’s `initials` property is equal to the user’s uppercased initials (first character in each name)

#### Example User:

    const user = new User({ firstName: 'John', lastName: 'Rambo'})
    user.initials === 'JR'


# [Jest Expectations / Matchers (rocket)](https://www.notion.so/Jest-Expectations-Matchers-rocket-c8de20e9851f45f8bde38e04aafe6961)

## Rocket API overview
In these exercises, we’re going to use common matches to test that our rocket factory works as expected.

- `started` boolean
- `fuel` Number
- `startEngine()`
- `stopEngine()`
- `takeOff()`
- `addFuel(50)`
- `hasSufficientFuel()`

Feel free to inspect it further during the exercises.

### 5.1 | 5 minutes

- Download `rocket.js` from this [Gist](https://gist.github.com/rahaug/d3606b563b46b3c80e6fe92d47b5a183/archive/368b0d9e31aa34a0acb13631e0ff4d37414a780f.zip) and move it to your project directory
- Create a `rocket.test.js` and import `createRocket` from `rocket.js`

    import { createRocket } from './rocket'

### 5.2 | 5 minutes

- create test: `can add fuel`
    - create a new rocket and use `addFuel()` to add `100` tons of rocket fuel
    - expect that `fuel` is equal to `100`

### 5.3 | 5 minutes

- create test: `must have 40 tonnes of rocket fuel to have sufficient`
    - Create a new rocket
    - Expect `hasSufficientFuel()` to be `false` with 39 tonnes of fuel
    - Expect `hasSufficientFuel()` to be `true` with 40 tonnes of fuel

### 5.4 | 5 minutes

- create test: `cannot start engine without fuel`
    - create a new rocket
    - expect `startEngine` to throw error (since no fuel is added)

> Tip: When testing exceptions, we must (!) wrap the expected code in a function

### 5.5 | 5 minutes

- create test: `can start engine with sufficient fuel`
    - create a new rocket with 200 tonnes of rocket fuel
    - expect `startEngine()` to not throw an exception


# [Hooks & Snapshot Testing](https://www.notion.so/Hooks-Snapshot-Testing-4eda64d49bde463fab8cb9633bb14428)
In the next exercises, we’ll use Jest hooks to DRY up our code, we’ll also create and explore snapshot testing.

### 6.1 | 5 minutes

- DRY up your code by creating a new rocket in the `beforeEach` hook

### 6.2 | 5 minutes

- Create test: `matches snapshot`
    - expect that the rocket matces the snapshot
- Run the test and inspect the snapshot that was created in `__snapshots__` directory

### 6.3 | 5 minutes

- Introduce a change in `rocket.js` (set started: true)
- re-run tests
- update snapshot