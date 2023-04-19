// if only one object required, use modules
const gameBoard = (()=>{
    let board = [];
    return {board}
})();

const displayController = () =>{

};

// if >1 object required, use factories
const Player = (name, marker) {
    const sayName = () => console.log(`my name is ${name}`);
    const marker = () => {};
    return {sayName};
    const play = playMarker()=>{

    };
};

