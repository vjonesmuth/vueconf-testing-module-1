# Testing Workshop Resources - Modules 1
@docs https://www.notion.so/Get-Started-with-Jest-c0fc8856403a444fbb8ab70a62d72b7c

# Exercise 3.1 | 5 minutes

- Download the modules from [http://bit.ly/2uNvBOY](http://bit.ly/2uNvBOY) if you don't already have them
- Unzip the file. Unzip Module 1.
- Create a new project and move all the resources there

# Exercise 3.2 | 10 minutes

- download and copy resources into project from [Gist](https://gist.github.com/rahaug/44430891c8820ddd0ae1f008ed39fec9/archive/deb8f10676bca9f8c49ab9b2e3289f778039aefa.zip)
    - Copy `User.js` into your project
- create a `user.test.js` file and import the `User.js` module
- create a new test: `should return full name`
    - Create a new user and pass in an object with a `firstName` and a `lastName` property.
    - Expect that the user’s `name` property is equal to the `firstName` and `lasName`, with a space between.

### Example User:

    const user = new User({ firstName: 'John', lastName: 'Rambo'})
    user.name === 'John Rambo'

# Exercise 3.3 | 5 minutes

- Create a new test: `should return initials`
    - Create a new user and pass in an object with a `firstName` and a `lastName` property
    - Expect that the user’s `initials` property is equal to the user’s uppercased initials (first character in each name)

### Example User:

    const user = new User({ firstName: 'John', lastName: 'Rambo'})
    user.initials === 'JR'