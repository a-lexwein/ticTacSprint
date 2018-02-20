class Game {
  constructor() {
    this.players = ['X', 'O']
    this.currentMove = 0;
    this.winner = undefined;
    this.board = [ ['', '', ''], ['', '', ''], ['', '', ''] ]
    this.currentPlayer = this.players[this.currentMove];
  }

  changePlayer() {
    this.currentPlayer = this.players[++this.currentMove % 2];
  }

  placeMarker(x,y) {
    if (!this.board[x][y] === '') return

    this.board[x][y] = this.currentPlayer;


    // Check if it's a winner
    if (this.checkWinner(x,y)) this.winner = this.players[this.currentMove]

    // If a winner: deliver winner:

    // If not winner, toggle player

    this.changePlayer()
  }

  checkRowWinner(i) {
    if (JSON.stringify(this.board[i]) === JSON.stringify([0,0,0].fill(this.currentPlayer))) {
      return true;
    }
    return false;
  }

  checkColWinner(i) {
    var col = [this.board[0][i], this.board[2][i], this.board[2][i]]
    if (JSON.stringify(col) === JSON.stringify([0,0,0].fill(this.currentPlayer))) {
      return true;
    }
    return false;
  }

  checkDiagWinner(x,y) {
    var row = [0,0,0]
    if (x === 0 && y === 0) row = [this.board[0][0], this.board[1][1], this.board[2][2]]
    if (x === 2 && y === 0) row = [this.board[2][0], this.board[1][1], this.board[0][2]]
    if (x === 0 && y === 2) row = [this.board[2][0], this.board[1][1], this.board[0][2]]
    if (x === 2 && y === 2) row = [this.board[0][0], this.board[1][1], this.board[2][2]]
    if (JSON.stringify(row) === JSON.stringify([0,0,0].fill(this.currentPlayer))) {
      return true;
    }

    if (x === 1 && y === 1) {
      row = [this.board[0][0], this.board[1][1], this.board[2][2]]
      var row2 = [this.board[2][0], this.board[1][1], this.board[0][2]]
      if (JSON.stringify(row) === JSON.stringify([0,0,0].fill(this.currentPlayer))) {
        return true;
      }
      if (JSON.stringify(row2) === JSON.stringify([0,0,0].fill(this.currentPlayer))) {
        return true;
      }

    }
    return false;
  }

  checkWinner(x,y) {
    return this.checkRowWinner(x)
    || this.checkColWinner(y)
    || this.checkDiagWinner(x,y)
  }

  render() {

  }


}
