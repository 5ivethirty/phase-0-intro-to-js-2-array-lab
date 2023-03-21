// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    return cats;
}

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
    return cats;
}

function destructivelyRemoveLastCat(){
    cats.pop();
    cats;
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    cats;
}

function appendCat(Broom){
    const addBroom = [...cats, Broom];
    return addBroom;
}

function prependCat(Arnold){
    const addArnold = [Arnold, ...cats];
    return addArnold;
}

function removeLastCat(){
    const arnold = cats.slice(0, cats.length - 1);
    return arnold;
}

function removeFirstCat(){
    const milo = cats.slice(1)
    return milo;
}