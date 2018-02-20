var game  = new Game();

game.placeMarker(0,0) //X
game.placeMarker(1,0)
game.placeMarker(0,1) // X
game.placeMarker(1,1)
expect(game.winner).to.be('')
game.placeMarker(0,2)
expect(game.winner).to.be('X')
