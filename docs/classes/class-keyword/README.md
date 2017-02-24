# Assignment - Objects with a Class

>  What is a class? Why does it matter? How is it useful?

For this assignment you will be create more robots.  This time we will use classes to accomplish similar things as the object literals


### Requirements

1. Create an Optimus Prime, and a Megatron class that contains the name, faction, power properties
2. Create greet functions for both Optimus Prime and Megatron that return 'Hi, I'm ${name}'
3. Create and export a FACTION constant that looks like this:
```javascript
const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};
```
4. Create a base class called Robot, export the class.
5. Refactor the OptimusPrime and Megatron classes to inherit from the Robot class
6. Move the greet function to the Robot class.  Fix the other objects so they use the greet functions from the Robot class
7. Create a constructor on Robot class that takes: name and faction as parameters.  Be sure the default power property is set to 1000 inside your constructor.
8. Refactor the OptimusPrime class and Megatron class to use the Robot's constructor
9. Refactor OptimusPrime's class and Megatron's class to set the name and faction by default when a new robot is created.
10. Use the `export default` keywords at the bottom of your file to export a set of Robot instances - one for Optimus Prime named 'optimusPrime' and one for Megatron named 'megatron'


### Observations

* What does a class do that an object literal doesn't?
* Why extend a class? Benefits?
* Why didn't we need any parameters in the OptimusPrime and Megatron constructors?
* What is the purpose of the getters/setters?
* How could you make a property be readonly?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
