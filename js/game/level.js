

function preload_level(){
    game.load.image('ground', 'res/sprites/green-32x32.png');
}


function create_level(){
    var screen = [];
    screen[0] = screen.width; // Width
    screen[1] = screen.height; // Height
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    // Floor
    greenBlock = game.add.tileSprite(this.game.width - this.game.width, this.game.height - this.game.height / 10, this.game.width, this.game.height -50, 'ground');
    game.physics.enable(greenBlock, Phaser.Physics.ARCADE);
    greenBlock.body.immovable = true;
    
    // Full screen Scale
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;


}

function update_level(){

}