export function createRocket () {

  const engines = 4
  const fuelConsumptionPerEngine = 10

  return {
    started: false,
    fuel: 0,
    startEngine () {

      if( ! this.hasSufficientFuel()) {
        throw Error('Insufficient fuel')
      }

      this.started = true
      console.log('🔥 - Engine started')
    },

    stopEngine () {
      this.started = false
    },

    takeOff() {
      if( ! this.started ) {
        throw Error('Engine must be started before taking off')
      }

      console.log('🚀 Taking off - Bon Voyage!')
    },

    addFuel (rocketFuel) {
      this.fuel += rocketFuel
    },

    hasSufficientFuel() {
      return this.fuel >= engines * fuelConsumptionPerEngine
    }
  }
}