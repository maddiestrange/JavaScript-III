/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding- without using any of the other binding methods, this defaults to the window object
* 2. Implicit Binding- pulling from whatever is left of the dot at call time
* 3. New binding - creates a new object for this
* 4. Explicit binding- using call, apply, or bind to pass in objects as arguments for this
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
var windowworld = function(){
    console.log(this)
};
windowworld();

// Principle 2
// code example for Implicit Binding
var me = {
    name: 'Maddie',
    sayname: function(){
        console.log(this.name);
    }
};
me.sayname();


// Principle 3
// code example for New Binding
var Favorites = function(color, food){
    this.color = color;
    this.food = food;
};
var Maddie = new Favorites('Rainbow', 'Dumplings');
console.log(Maddie);


// Principle 4
// code example for Explicit Binding
var speak = function(){
    console.log('My name is '+this.name);
};
speak.call(me);