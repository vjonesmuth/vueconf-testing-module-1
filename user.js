export default class User {
  constructor (details){
    const {firstName, lastName} = details
    this.firstName = firstName
    this.lastName = lastName
  }
  get name () {
    return `${this.firstName} ${this.lastName}`
  }
  get initials() {
    return this.firstName[0].toUpperCase() + this.lastName[0].toUpperCase()
  }
}