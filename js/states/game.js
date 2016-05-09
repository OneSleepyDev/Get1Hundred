/* Main Game js
    Includes default screen size, and modular screen size
    But.. if someone has a lower res, they have a better chance of winning :P
*/

var screenSize = [];

screenSize[0] = window.innerWidth * window.devicePixelRatio;
screenSize[1] = window.innerHeight * window.devicePixelRatio;

if (screenSize[0] <= 1280) {
    screenSize[0] = window.innerWidth * window.devicePixelRatio;
}
else if (screenSize[0] >= 1280) {
    screenSize[0] = 1280;
}
else {
    screenSize[0] = 1280;
}

if (screenSize[1] <= 720) {
    screenSize[1] = window.innerHeight * window.devicePixelRatio;
}
else if (screenSize[1] >= 720) {
    screenSize[1] = 720;
}
else {
    screenSize[1] = 720;
}

var game = new Phaser.Game(screenSize[0], screenSize[1], Phaser.AUTO, 'game');

game.state.add('boot', bootState);
game.state.add('load', loadState);
//game.state.add('fullscreen', fullscreenState); TODO: Re-add once fullscreen toggle is implemented
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);


game.state.start('boot');