function preload_level() {
    game.load.image('ground', 'res/sprites/green-32x32.png');
}

function create_level() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Floor
    greenBlock = game.add.tileSprite(this.game.width - this.game.width, this.game.height - this.game.height / 10, this.game.width, this.game.height - 50, 'ground');
    game.physics.enable(greenBlock, Phaser.Physics.ARCADE);
    greenBlock.body.immovable = true;

    // Full screen Scale
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

    var button2 = game.add.button(this.game.width - this.game.width / 20, this.game.height / 20, 'player', gofull, this);
    button2.anchor.set(0.5);
    var fullScreenText = game.add.text(this.game.width - this.game.width / 20, this.game.height / 20, 'Fullscreen', {
        font: '12px Arial',
        fill: '#ffffff'
    });
    fullScreenText.anchor.set(0.5);
}

function update_level() {

}