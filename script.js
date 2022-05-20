const lettersArray = ['','A','B','C','D','E','F','G','H'];

function drawChessBoard() {
    // Create main div
    let chessBoardContainer = document.createElement("div");

    chessBoardContainer.setAttribute("id","chess-board-container");
    chessBoardContainer.setAttribute("class","grid-container");
    document.body.appendChild(chessBoardContainer);

    let chessBox;
    let letters;

    // Chess board
    for(let i = 8;i > 0; i--) {
        // Number before the each row
        letters = document.createElement("p");
        letters.setAttribute("class","letter-mark");
        letters.innerText = `${i}`;
        chessBoardContainer.appendChild(letters);

        for(let j = 0;j < 8;j++) {            
            chessBox = document.createElement("div");
            if((j+i)%2)
                chessBox.setAttribute("class","box black");
            else
                chessBox.setAttribute("class","box white");
            chessBoardContainer.appendChild(chessBox);
        }
        // Number after the each row
        letters = document.createElement("p");
        letters.setAttribute("class","letter-mark");
        letters.innerText = `${i}`;
        chessBoardContainer.appendChild(letters);
    }

    // Letters under chess board
    for(let i = 0;i <= 8;i++) {
        letters = document.createElement("p");
        letters.setAttribute("class","letter-mark");
        letters.innerText = `${lettersArray[i]}`;
        chessBoardContainer.appendChild(letters);
    }
}

drawChessBoard();