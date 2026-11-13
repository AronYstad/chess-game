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

const board = [["wr",0,0,0,0,0,0,"wr"],
               ["wp","wp","wp","wp","wp","wp","wp","wp"],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               ["bp","bp","bp","bp","bp","bp","bp","bp"],
               ["br",0,0,0,0,0,0,"br"]];

const enPassant = [[0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0],
                   [0,0,0,0,0,0,0,0],
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
        if(y < 7 && x > 0 && board[y+1][x-1] !== 0 && board[y+1][x-1][0] === "b" ) {
            moves.push([x-1,y+1]);
        }
        if(y < 7 && x > 0 && board[y+1][x-1] === 0 && enPassant[y+1][x-1] === "b") {
            moves.push([x-1,y+1]);
        }
        if(y < 7 && x < 7 && board[y+1][x+1] !== 0 && board[y+1][x+1][0] === "b") {
            moves.push([x+1,y+1]);
        }
        if(y < 7 && x < 7 && board[y+1][x+1] === 0 && enPassant[y+1][x+1] === "b") {
            moves.push([x+1,y+1]);
        }
    }
    else if(piece === "bp") {
        if(y === 6 && board[y-1][x] === 0) {
            moves.push([x,y-1]);
            if(board[y-2][x] === 0) {
                moves.push([x,y-2]);
            }
        }
        else if(y > 0 && board[y-1][x] === 0) {
            moves.push([x,y-1]);
        }
        if(y > 0 && x > 0 && board[y-1][x-1] !== 0 && board[y-1][x-1][0] === "w") {
            moves.push([x-1,y-1]);
        }
        if(y > 0 && x > 0 && board[y-1][x-1] === 0 && enPassant[y-1][x-1] === "w") {
            moves.push([x-1,y-1]);
        }
        if(y > 0 && x < 7 && board[y-1][x+1] !== 0 && board[y-1][x+1][0] === "w") {
            moves.push([x+1,y-1]);
        }
        if(y > 0 && x < 7 && board[y-1][x+1] === 0 && enPassant[y-1][x+1] === "w") {
            moves.push([x+1,y-1]);
        }
    }
    else if(piece === "wr") {
        for(let i = 1; i < 8; i++) {
            if(y+i < 8) {
                if(board[y+i][x] === 0) {
                    moves.push([x,y+i]);
                }
                else if(board[y+i][x][0] === "b") {
                    moves.push([x,y+i]);
                    break;
                }
                else {
                    break;
                }
            }
        }
        for(let i = 1; i < 8; i++) {
            if(y-i >= 0) {
                if(board[y-i][x] === 0) {
                    moves.push([x,y-i]);
                }
                else if(board[y-i][x][0] === "b") {
                    moves.push([x,y-i]);
                    break;
                }
                else {
                    break;
                }
            }
        }
        for(let i = 1; i < 8; i++) {
            if(x+i < 8) {
                if(board[y][x+i] === 0) {
                    moves.push([x+i,y]);
                }
                else if(board[y][x+i][0] === "b") {
                    moves.push([x+i,y]);
                    break;
                }
                else {
                    break;
                }
            }
        }
        for(let i = 1; i < 8; i++) {
            if(x-i >= 0) {
                if(board[y][x-i] === 0) {
                    moves.push([x-i,y]);
                }
                else if(board[y][x-i][0] === "b") {
                    moves.push([x-i,y]);
                    break;
                }
                else {
                    break;
                }
            }
        }
    }
    else if(piece === "br") {
        for(let i = 1; i < 8; i++) {
            if(y+i < 8) {
                if(board[y+i][x] === 0) {
                    moves.push([x,y+i]);
                }
                else if(board[y+i][x][0] === "w") {
                    moves.push([x,y+i]);
                    break;
                }
                else {
                    break;
                }
            }
        }
        for(let i = 1; i < 8; i++) {
            if(y-i >= 0) {
                if(board[y-i][x] === 0) {
                    moves.push([x,y-i]);
                }
                else if(board[y-i][x][0] === "w") {
                    moves.push([x,y-i]);
                    break;
                }
                else {
                    break;
                }
            }
        }
        for(let i = 1; i < 8; i++) {
            if(x+i < 8) {
                if(board[y][x+i] === 0) {
                    moves.push([x+i,y]);
                }
                else if(board[y][x+i][0] === "w") {
                    moves.push([x+i,y]);
                    break;
                }
                else {
                    break;
                }
            }
        }
        for(let i = 1; i < 8; i++) {
            if(x-i >= 0) {
                if(board[y][x-i] === 0) {
                    moves.push([x-i,y]);
                }
                else if(board[y][x-i][0] === "w") {
                    moves.push([x-i,y]);
                    break;
                }
                else {
                    break;
                }
            }
        }
    }
    return moves;
}

function movePiece(fromY, fromX, toY, toX) {
    if(board[fromY][fromX] === "wp" && enPassant[toY][toX] === "b") {
        board[toY-1][toX] = 0;
    }
    if(board[fromY][fromX] === "bp" && enPassant[toY][toX] === "w") {
        board[toY+1][toX] = 0;
    }
    for(let y = 0; y < 8; y++) {
        for(let x = 0; x < 8; x++) {
            enPassant[y][x] = 0;
        }
    }

    board[toY][toX] = board[fromY][fromX];
    board[fromY][fromX] = 0;

    if(board[toY][toX] === "wp" && toY-fromY === 2) {
        enPassant[toY-1][toX] = "w";
    }
    if(board[toY][toX] === "bp" && toY-fromY === -2) {
        enPassant[toY+1][toX] = "b";
    }
}

function renderBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";
    for(let y = 7; y >= 0; y--) {
        for(let x = 0; x < 8; x++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.dataset.x = x;
            square.dataset.y = y;
            if((x + y) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }
            square.addEventListener("click", () => {
                for (const dot of document.querySelectorAll(".dot")) {
                    dot.remove();
                }
            });
            if(board[y][x] !== 0) {
                const piece = document.createElement("img");
                piece.src = `./images/${board[y][x]}.svg`;
                piece.classList.add("piece");
                piece.addEventListener("click", () => {
                    event.stopPropagation();
                    console.log(`Clicked on piece at (${x}, ${y})`);
                    for (const dot of document.querySelectorAll(".dot")) {
                        dot.remove();
                    }
                    const moves = legalMoves(y, x);
                    for (const move of moves) {
                        const [moveX, moveY] = move;
                        const targetSquare = document.querySelector(`.square[data-x='${moveX}'][data-y='${moveY}']`);
                        const dot = document.createElement("img");
                        dot.src = "./images/dot.png";
                        dot.classList.add("dot");
                        dot.addEventListener("click", () => {
                            event.stopPropagation();
                            movePiece(y, x, moveY, moveX);
                            renderBoard();
                        });
                        targetSquare.appendChild(dot);
                    }
                });
                square.appendChild(piece);
            }
            boardDiv.appendChild(square);
        }
    }
}

renderBoard();