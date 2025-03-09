const EventEmitter = require('events');
const chalk = require('chalk');
class TrafficLight extends EventEmitter {
  constructor() {
    super();
  }
}
const trafficLight = new TrafficLight();
trafficLight.on('red', () => {
  console.log(chalk.bgRed('RED'));
  setTimeout(() => {
    trafficLight.emit('yellow');
  }, 3000);
});
trafficLight.on('yellow', () => {
  console.log(chalk.bgYellow('YELLOW'));
  setTimeout(() => {
    trafficLight.emit('green');
  }, 3000);
});
trafficLight.on('green', () => {
  console.log(chalk.bgGreen('GREEN'));
  setTimeout(() => {
    trafficLight.emit('red');
  }, 3000); 
});
trafficLight.emit('red');