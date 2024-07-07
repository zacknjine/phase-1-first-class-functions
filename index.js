const spy = chai.spy();

function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        return "hello";
    }
}

receivesAFunction(spy);
returnsANamedFunction()

function Monday() {
    runFiveMiles();
    liftWeights();
}

function Tuesday() {
    runFiveMiles();
    swimFortyLaps();
}

function Wednesday() {
    runFiveMiles();
    liftWeights();
    swimFortyLaps();
}

function Thursday() {
    liftWeights();
    swimFortyLaps();
}

function Friday() {
    liftWeights();
}

function Saturday() {
    swimFortyLaps();
}

function Sunday() {
    swimFortyLaps();
}

Monday();
Tuesday();
Wednesday();
Thursday();
Friday();
Saturday();
Sunday()

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim forty laps");
}

function exerciseRoutine(exercise) {
    exercise();
}

exerciseRoutine(liftWeights)    

function returnsAnAnonymousFunction () {
    return function () {
        return "hello";
    }
}