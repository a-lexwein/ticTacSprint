$(document).ready(function(){
  var game = new Game();
  $('#player').text(game.currentPlayer)
  $('.cell').css({'border-style':'solid', 'width':'100', 'height': '100'})
  // on cell click:
  $('.cell').click(function() {
    // get coords
    var x = Number(this.data.x)
    var y = Number(this.data.y)
    game.placeMarker(x,y)
    $('#player').text(x.currentPlayer)
  })
});
