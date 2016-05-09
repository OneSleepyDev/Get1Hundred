function preload_movement() {}

function create_movement() {
    this.swipe = new Swipe(this.game);
}

function update_movement() {
    var direction = this.swipe.check();

    // FIXME: Need to stop velocity.x after it touches the ground

    if (direction !== null) {
        // direction= { x: x, y: y, direction: direction }
        // With this setup the user can swipe UPLEFT and LEFT and still jump that way and etc.
        switch (direction.direction) {
            case this.swipe.DIRECTION_LEFT:
                if (redBlock.body.touching.down && game.time.now > jumpTimer) {
                    redBlock.body.velocity.y = -95;
                    redBlock.body.velocity.x = -200;
                    jumpTimer = game.time.now + 150;
                }
                break;
            case this.swipe.DIRECTION_RIGHT:
                if (redBlock.body.touching.down && game.time.now > jumpTimer) {
                    redBlock.body.velocity.y = -95;
                    redBlock.body.velocity.x = 200;
                    jumpTimer = game.time.now + 150;
                }
                break;
            case this.swipe.DIRECTION_UP_LEFT:
                if (redBlock.body.touching.down && game.time.now > jumpTimer) {
                    redBlock.body.velocity.y = -300;
                    redBlock.body.velocity.x = -95;
                    jumpTimer = game.time.now + 150;
                }
                break;
            case this.swipe.DIRECTION_UP_RIGHT:
                if (redBlock.body.touching.down && game.time.now > jumpTimer) {
                    redBlock.body.velocity.y = -300;
                    redBlock.body.velocity.x = 95;
                    jumpTimer = game.time.now + 150;
                }
                break;
            case this.swipe.DIRECTION_UP:
                if (redBlock.body.touching.down && game.time.now > jumpTimer) {
                    redBlock.body.velocity.y = -300;
                    redBlock.body.velocity.x = redBlock.body.velocity.x / 4;
                    jumpTimer = game.time.now + 150;
                }
                break;
        }
    }
}