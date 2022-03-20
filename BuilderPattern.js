// * Option 1 :
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }
    
    setAddress(address) {
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

let builder = new UserBuilder('bob').setAge(10).build();
console.log(builder)

// * Option 2 :

// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, {age, phone, address} = {}) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     } 
// }

// let user = new User('Larry', {phone: 083872899914, address: new Address(41281, 'Mont Blanc')})
// console.log(user);

