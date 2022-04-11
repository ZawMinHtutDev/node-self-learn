let events = require("events");
let util = require("util");

const Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

const Persons = [new Person("John"), new Person("Mary"), new Person("Zaw")];

Persons.forEach(Person => {
    Person.on("speak", msg => {
        console.log(`${Person.name} said: ${msg}`);
    });
});

Persons[0].emit("speak", "hello");
Persons[1].emit("speak", "hey");
Persons[2].emit("speak", "what's up?");