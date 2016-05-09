var jumpTimer = 0;
var baddieCnt = 0;

function preload_players() {
    game.load.image('baddie', 'res/sprites/offwhite-16x16.png');
    game.load.image('player', 'res/sprites/red-32x32.png');
}

function create_players() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Player
    redBlock = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
    game.physics.enable(redBlock, Phaser.Physics.ARCADE);
    redBlock.body.gravity.set(0, 180);
    redBlock.body.bounce.x = 1;
    redBlock.body.collideWorldBounds = true;
    redBlock.anchor.set(0.5);

    // Baddies
    baddies = game.add.group();
    baddies.enableBody = true;
    game.physics.enable(baddies, Phaser.Physics.ARCADE);
}

function update_players() {
    // Spawning baddies and checking count
    createBaddies();

    game.physics.arcade.collide(redBlock, greenBlock);
    game.physics.arcade.collide(baddies, greenBlock);
    // Overlap checks won't affect the player, just check to see if it touched
    game.physics.arcade.overlap(redBlock, baddies, hitBaddie, null, this);
}

// Aftermarket functions :D
function spawnBaddies(amt) {
    for (var i = 0; i < amt; i++) {
        var c = baddies.create(game.world.randomX, this.game.height / 10 + game.rnd.integerInRange(10, 300), 'baddie');
        c.body.velocity.x = game.rnd.integerInRange(10, 120);
        c.body.velocity.y = game.rnd.integerInRange(120, 320); // sped up to 320 from 220
        c.body.collideWorldBounds = true;
        c.body.bounce.x = 1;
        c.body.bounce.y = 1;
        baddieCnt += 1;
    }
}

function createBaddies() {
    switch (baddieCnt) {
        case 0:
        case 1:
        case 2:
        case 3:
            spawnBaddies(3);
            break;
    }
    switch (score) {
        case 3:
            spawnBaddies(50);
            // BONUS POINT!
            score++;
            break;
        case 30:
            spawnBaddies(20);
            // BONUS POINT!
            score++;
            break;
        case 50:
            spawnBaddies(20);
            // BONUS POINT!
            score++;
            break;
        case 105:
            spawnBaddies(50);
            // BONUS POINT!
            score++;
            break;
        case 150:
            spawnBaddies(50);
            // BONUS POINT!
            score++;
            break;
        default:
            break;
    }
}

// This will destroy every baddie the player touches
function hitBaddie(redBlock, baddie) {
    baddie.kill();
    baddie.destroy();
    baddieCnt -= 1;
    score++;
    scoreText.setText("Score: " + score);
}