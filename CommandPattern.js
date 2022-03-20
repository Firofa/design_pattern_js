/* 
    The Idea of Command Pattern is to take different operations that you want something to do
    and Encapsulate them into individual commands that have a perform and then an undo method

    Essentially You can do the operation & You can do the command & You can undo that operation

*/

// ? RATHER THAN USING FUNCTION INSIDE CLASS LIKE THIS...
// class Calculator {
//     constructor() {
//         this.value = 0
//     }
    
    // add(valueToAdd) {
    //     this.value = this.value + valueToAdd
    // }

    // substract(valueToSubstract) {
    //     this.value = this.value - valueToSubstract
    // }

    // multiply(valueToMultiply) {
    //     this.value = this.value * valueToMultiply
    // }

    // divide(valueToDivide) {
    //     this.value = this.value / valueToDivide
    // }
// }

// * COMMAND PATTERN LOOK LIKE THIS...
class Calculator {
    constructor() {
        this.value = 100
        this.history = []
    }

    executeCommand(command) {
        this.value = command.execute(this.value)
        this.history.push(command)
    }

    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }
}

class AddCommand {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd
    }

    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo(currentValue) {
        return currentValue - this.valueToAdd
    }
}

class substractCommand {
    constructor(valueToSubstract) {
        this.valueToSubstract = valueToSubstract
    }

    execute(currentValue) {
        return currentValue - this.valueToSubstract
    }

    undo(currentValue) {
        return currentValue + this.valueToSubstract
    }
}

class multiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply
    }

    execute(currentValue) {
        return currentValue * this.valueToMultiply
    }

    undo(currentValue) {
        return currentValue / this.valueToMultiply
    }
}

class divideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide
    }

    execute(currentValue) {
        return currentValue / this.valueToDivide
    }

    undo(currentValue) {
        return currentValue * this.valueToDivide
    }
}


const calculator = new Calculator();
calculator.executeCommand(new divideCommand(10))
console.log(calculator.value);
calculator.undo()
console.log(calculator.value);