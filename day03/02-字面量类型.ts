type Direction = 'up' | 'down' | 'left' | 'right'

function changeDirect(direction :Direction): void {
    console.log(direction);
}

changeDirect('right')