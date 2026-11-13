// 0 = empty

// wp = white pawn
// wr = white rook
// wn = white knight
// wb = white bishop
// wq = white queen
// wk = white king

// bp = black pawn
// br = black rook
// bn = black knight
// bb = black bishop
// bq = black queen
// bk = black king

const board = [[0,0,0,0,0,0,0,0],
               [0,0,0,"wp",0,0,0,0],
               [0,0,0,0,"bp",0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0]];

function legalMoves(y,x) {
    let piece = board[y][x];
    let moves = [];
    if(piece === "wp") {
        if(y === 1 && board[y+1][x] === 0) {
            moves.push([x,y+1]);
            if(board[y+2][x] === 0) {
                moves.push([x,y+2]);
            }
        }
        else if(y < 7 && board[y+1][x] === 0) {
            moves.push([x,y+1]);
        }
        if(y < 7 && x > 0 && board[y+1][x-1] !== 0 && board[y+1][x-1][0] === "b") {
            moves.push([x-1,y+1]);
        }
        if(y < 7 && x < 7 && board[y+1][x+1] !== 0 && board[y+1][x+1][0] === "b") {
            moves.push([x+1,y+1]);
        }
    }
    return moves;
}

function renderBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";
    for(let y = 7; y >= 0; y--) {
        for(let x = 0; x < 8; x++) {
            const square = document.createElement("div");
            square.classList.add("square");
            if((x + y) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }
            if(board[y][x] !== 0) {
                const piece = document.createElement("img");
                piece.src = `./images/${board[y][x]}.svg`;
                piece.classList.add("piece");
                square.appendChild(piece);
            }
            boardDiv.appendChild(square);
        }
    }
}

renderBoard();