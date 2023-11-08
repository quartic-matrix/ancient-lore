
let boardElement = document.getElementById("board");
let piecesEle = document.getElementById("pieces");

let board = [];
let count = 0;

function setupBoard() {
    for (let rowI = 0; rowI < 9; rowI++) {
        let row = document.createElement("div");
        row.classList.add("row");
        board.push([]);

        for (let colI = 0; colI < 9; colI++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            board[rowI].push(cell);

            cell.classList.add("row" + rowI);
            cell.classList.add("col" + colI);
            if ((rowI + colI) % 2) {
                cell.classList.add("darker");
            }
            if ((Math.floor(rowI/3) + Math.floor(colI/3)) % 2) {
                cell.classList.add("group");
            }

            row.appendChild(cell); 
        }
        
        boardElement.appendChild(row);  
    }
}

let dragPieceEle = undefined;
let mouseX = 0;
let mouseY = 0;
var offsetX = 0;
var offsetY = 0;

function dragPiece(dX, dY) {
    if (dragPieceEle !== undefined) {
        dragPieceEle.style.position = "absolute";
        dragPieceEle.style.left = (mouseX + offsetX) + 'px';
        dragPieceEle.style.top = (mouseY + offsetY) + 'px';
    }
}

function onMouseMove(clientX, clientY) {
    dragPiece(clientX - mouseX, clientY - mouseY);

    mouseX = clientX;
    mouseY = clientY;
}
document.addEventListener("mousemove", e => {
    onMouseMove(e.clientX, e.clientY);
});
document.addEventListener("touchmove", e => {
    onMouseMove(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
});


document.addEventListener("keypress", e => {
    if (e.key == "n") {
        while (piecesEle.children.length > 0) {
            piecesEle.children[0].remove();
        }
        addPieces();
    }
});

let n = 4*8;

function generatePieceDef() {
    const basicPieces = [
        [[0,0]],

        // n >= 1*8
        [[0,0],[0,1]],

        // n >= 2*8
        [[0,0],[1,0],[2,0]],
        [[0,0],[1,0],[0,1]],

        // n >= 4*8
        [[0,0],[1,0],[2,0],[3,0]], // Line
        [[0,0],[1,0],[1,1],[0,1]], // Square
        [[0,0],[1,0],[2,0],[2,1]], // L
        [[0,0],[1,0],[1,1],[2,1]], // __--
        [[0,0],[1,0],[1,1],[2,0]], // T

        // n >= 9*8
        [[0,0],[1,0],[2,0],[3,0],[4,0]], // Line
        [[0,0],[0,1],[1,1],[1,2],[2,1]], // 
        [[0,0],[0,1],[0,2],[0,3],[1,3]], // Tall L
        [[0,0],[0,1],[1,0],[1,1],[0,2]], // Square+1
        [[0,0],[0,1],[0,2],[1,2],[1,3]], // ___--
        [[0,0],[0,1],[0,2],[1,1],[2,1]], // T
        [[0,0],[0,1],[0,2],[1,0],[1,2]], // U
        [[0,0],[0,1],[0,2],[1,0],[2,0]], // Square L
        [[0,0],[0,1],[1,1],[1,2],[2,2]], // Zig zag
        [[0,1],[1,0],[1,1],[1,2],[2,1]], // Cross
        [[0,0],[1,0],[2,0],[3,0],[2,1]], // t
        [[0,0],[0,1],[1,1],[2,1],[2,2]], // Z
    ];
    let pieceI = Math.floor(Math.random() * basicPieces.length);
    let mirrorX = Math.random() > 0.5;
    let mirrorY = Math.random() > 0.5;
    let rotate90 = Math.random() > 0.5;

    // let pieceI = Math.floor(n/8) % basicPieces.length;
    // let mirrorX = n % 2;
    // let mirrorY = (n % 4) > 1;
    // let rotate90 = (n % 8) > 3;
    // n++;

    let basicPiece = basicPieces[pieceI];

    let piece = [];
    let shiftX = 9;
    let shiftY = 9;
    for (const cell of basicPiece) {
        let cellX = cell[0];
        let cellY = cell[1];
        if (mirrorX) {
            cellX = -cellX;
        }
        if (mirrorY) {
            cellY = -cellY;
        }
        if (rotate90) {
            let prevCellX = cellX;
            cellX = cellY;
            cellY = prevCellX;
        }
        piece.push([cellX, cellY]);
        shiftX = Math.min(shiftX, cellX);
        shiftY = Math.min(shiftY, cellY);
    }

    let maxX = 0;
    let maxY = 0;
    for (let cell of piece) {
        cell[0] -= shiftX;
        cell[1] -= shiftY;
        
        maxX = Math.max(maxX, cell[0]);
        maxY = Math.max(maxY, cell[1]);
    }

    return [piece, maxX, maxY];
}

function createPiece() {
    let pieceEle = document.createElement("div");
    pieceEle.classList.add("piece");
    let [pieceDef, maxX, maxY] = generatePieceDef();
    pieceEle.pieceDef = pieceDef;
    pieceEle.numCells = 0;

    for (let rowI = 0; rowI <= maxX; rowI++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let colI = 0; colI <= maxY; colI++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add("row" + rowI);
            cell.classList.add("col" + colI);

            if (pieceEle.pieceDef.find(e => e[0] == rowI && e[1] == colI)) {
                cell.classList.add("filled");
                ++pieceEle.numCells;
            }

            row.appendChild(cell); 
        }
        
        pieceEle.appendChild(row);
    }


    // Mouse down a piece to start moving it with the mouse. 
    // Take the difference between the mouse X,Y and the piece's top left X,Y. 
    // Mouse up to drop the piece. If over the board, then use the difference to place in correct cell.
    // 
    // 

    let onMouseDownFn = (event, clientX, clientY) => {
        event.stopPropagation();
        dragPieceEle = pieceEle;
        offsetX = pieceEle.offsetLeft - clientX;
        offsetY = pieceEle.offsetTop - clientY;
    };
    pieceEle.addEventListener("mousedown", e => {
        onMouseDownFn(e, e.clientX, e.clientY);
    });
    pieceEle.addEventListener("touchstart", e => {
        alert("touchstart at " + e.touches[0].clientX.toString() + ", " + e.touches[0].clientY.toString() );
        onMouseDownFn(e, e.touches[0].clientX, e.touches[1].clientY);
    });

    let onMouseUpFn = (event) => {
        event.stopPropagation();
        dragPieceEle = undefined;
        dropPiece(pieceEle);
    };
    pieceEle.addEventListener("mouseup", e => onMouseUpFn(e));
    pieceEle.addEventListener("touchend", e => onMouseUpFn(e));

    return pieceEle;
}

function isOnBoard(rowI, colI) {
    return 0 <= rowI && rowI < board.length && 0 <= colI && colI < board[rowI].length;
}

function isFilled(cell) {
    return cell.classList.contains("filled");
}

function willItFit(pieceEle, dropRowI, dropColI) {
    let cells = [];
    for (const location of pieceEle.pieceDef) {
        let locationRowI = dropRowI + location[0];
        let locationColI = dropColI + + location[1];

        if (!isOnBoard(locationRowI, locationColI)) return [];
        
        let cell = board[locationRowI][locationColI];
        
        if (isFilled(cell)) return [];

        cells.push(cell);
    }
    return cells;
}

function dropPiece(pieceEle) {
    let cellDX = board[0][1].offsetLeft - board[0][0].offsetLeft;
    let cellDY = board[1][0].offsetTop - board[0][0].offsetTop;

    dropRowI = Math.round((pieceEle.offsetTop - board[0][0].offsetTop)/cellDY);
    dropColI = Math.round((pieceEle.offsetLeft - board[0][0].offsetLeft)/cellDX);

    let cells = willItFit(pieceEle, dropRowI, dropColI);
    if (cells.length == 0) return;

    for (let cell of cells) {
        cell.classList.add("filled");
    }

    count += pieceEle.numCells;
    let countEle = document.getElementById("count");
    countEle.innerHTML = "<span><b>" + count.toString() + "</b></span>";

    pieceEle.remove();
    addPieces();

    checkAndClearBoard();
    checkPieces();
}

function addPieces() {
    if (piecesEle.children.length > 0) return;
    
    for (let pieceI = 0; pieceI < 8; pieceI++) {
        piecesEle.appendChild(createPiece());
    }
}

function clearCell(rowI, colI) {
    board[rowI][colI].classList.remove("filled");
}

function isRowFilled(rowI) {
    for (let colI = 0; colI < 9; colI++) {
        if (!isFilled(board[rowI][colI])) return false;
    }
    return true;
}

function clearRow(rowI) {
    for (let colI = 0; colI < 9; colI++) {
        clearCell(rowI, colI);
    }
}

function isColFilled(colI) {
    for (let rowI = 0; rowI < 9; rowI++) {
        if (!isFilled(board[rowI][colI])) return false;
    }
    return true;
}

function clearCol(colI) {
    for (let rowI = 0; rowI < 9; rowI++) {
        clearCell(rowI, colI);
    }
}

function isSquareFilled(rowI, colI) {
    for (let rowDI = 0; rowDI < 3; rowDI++) {
        for (let colDI = 0; colDI < 3; colDI++) {
            if (!isFilled(board[rowI + rowDI][colI + colDI])) return false;
        }
    }
    return true;
}

function clearSquare(rowI, colI) {
    for (let rowDI = 0; rowDI < 3; rowDI++) {
        for (let colDI = 0; colDI < 3; colDI++) {
            clearCell(rowI + rowDI, colI + colDI);
        }
    }
}

function checkAndClearBoard() {
    // Check rows, check columns, check squares.
    let rowsToClear = [];
    for (let rowI = 0; rowI < 9; rowI++) {
        if (isRowFilled(rowI)) {
            rowsToClear.push(rowI);
        }
    }
    
    let colsToClear = [];
    for (let colI = 0; colI < 9; colI++) {
        if (isColFilled(colI)) {
            colsToClear.push(colI);
        }
    }

    let squaresToClear = [];
    for (let rowI = 0; rowI < 9; rowI+=3) {
        for (let colI = 0; colI < 9; colI+=3) {
            if (isSquareFilled(rowI, colI)) {
                squaresToClear.push([rowI, colI]);
            }
        }
    }

    for (let rowI of rowsToClear) {
        clearRow(rowI);
    }

    for (let colI of colsToClear) {
        clearCol(colI);
    }

    for (let square of squaresToClear) {
        clearSquare(square[0], square[1]);
    }
}

function checkPieces() {
    for (const pieceEle of piecesEle.children) {
        if (willItFitAnywhere(pieceEle)) {
            pieceEle.classList.remove("no-fit");
        } else {
            pieceEle.classList.add("no-fit");
        }
    }
}

function willItFitAnywhere(pieceEle) {
    for (let rowI = 0; rowI < 9; rowI++) {
        for (let colI = 0; colI < 9; colI++) {
            if (willItFit(pieceEle, rowI, colI).length > 0) {
                return true;
            }
        }
    }
    return false;
}
