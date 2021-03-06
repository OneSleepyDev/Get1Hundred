var winState = {

    create: function() {

        var status;
        if (score >= 100) {
            status = "You win!";
        }
        else {
            status = "Sorry! Maybe next time.";
        }
        var statusText = game.add.text(this.game.width / 2, this.game.height / 16, status, {
            font: '66px Arial',
            fill: '#ffffff'
        });
        statusText.anchor.set(0.5);
        var scoreDisplay = game.add.text(this.game.width / 2, this.game.height / 5, "Your score: " + score, {
            font: '66px Arial',
            fill: '#ffffff'
        });
        scoreDisplay.anchor.set(0.5);

        var playText = game.add.text(this.game.width / 2, this.game.height / 3, 'Play again?', {
            font: '34px Arial',
            fill: '#ffffff'
        });
        playText.anchor.set(0.5);
        var button = game.add.button(game.world.centerX, game.world.centerY, 'player', this.playAgain, this);
        button.anchor.set(0.5);

        var author = game.add.text(this.game.width / 2, this.game.height - this.game.height / 10, 'onesleepydev.org', {
            font: '24px Arial',
            fill: '#ffffff'
        });
        author.anchor.set(0.5);

    },

    playAgain: function() {
        game.world.removeAll();
        music.destroy();
        
        // osd.js
        score = 0;
        scoreText = null;
        allotTime = 5400;

        // players.js
        jumpTimer = 0;
        baddieCnt = 0;
        
        

        game.state.start('play');
    },
}
