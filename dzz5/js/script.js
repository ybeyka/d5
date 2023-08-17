'use strict';

function createNewUser() {
    const newUser = {};

    newUser.firstName = prompt("Введіть ім'я:");
    newUser.lastName = prompt("Введіть прізвище:");

    newUser.getLogin = function() {
        return (this.firstName[0] + this.lastName).toLowerCase();
    };

    return newUser;
}

const user = createNewUser();
console.log(user.getLogin());

