var update = function(name, age, tShirtSize) {
    this.name = name;
    this.age = age;
    this.tShirtSize = tShirtSize;
};

var person = { name: 'Kishor', age: 28, tShirtSize: 'L' };

var caller = function (person,
                        update,
                        name,         //'Sharma'
                        age,          // 29
                        tShirtSize) { // 'XL'
    // your code here
    update.call(person, name , age, tShirtSize)
};

module.exports = caller;