const minrow = 0;
const mincol = 0;
const maxrow = 6;
const maxcol = 7;
let red = { row: 5, col: 0, };

const getElementByPosition = key => {
    return document.getElementsByClassName('cells')[key.row].getElementsByClassName('cell')[key.col];
};

const getNewPositionBykey = event => {
    const loc = {row: red.row, col: red.col};
    switch (event) {
        case 'ArrowUp': loc.row--; break;
        case 'ArrowDown': loc.row++; break;
        case 'ArrowLeft': loc.col--; break;
        case 'ArrowRight': loc.col++; break;
    }
    return loc;
};

const isPositionInRange = key => {
    return (0 <= key.row && 6 >= key.row && 0 <= key.col && 7 >= key.col) ? true : false;
};

const isPositionWall = loc => getElementByPosition(loc).classList.contains('wall');

document.addEventListener('keyup', event => {
    const nextloc = getNewPositionBykey(event.code);
    getElementByPosition(red).classList.remove('current');

    if (isPositionInRange(nextloc) && !isPositionWall(nextloc)) {
        red = nextloc;
    }
    const newElmt = getElementByPosition(red);
    newElmt.classList.add('current');

    if (red.row === 1 && red.col === 7) alert('You Escaped!');
});
