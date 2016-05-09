var menuState = {

    create: function() {
        var greeting = game.add.text(this.game.width / 2, this.game.height / 8, 'Get 1 Hundred!', // window.innerWidth/window.innerHeight;
            {
                font: '66px Arial',
                fill: '#ffffff'
            });
        greeting.anchor.set(0.5);
        var playText = game.add.text(this.game.width / 2, this.game.height / 3, 'Click to play', {
            font: '34px Arial',
            fill: '#ffffff'
        });
        playText.anchor.set(0.5);
        var button = game.add.button(this.game.width / 2, this.game.height / 1.5, 'player', this.start, this); //old game.world.centerX
        button.anchor.set(0.5);

        var author = game.add.text(this.game.width / 2, this.game.height - this.game.height / 10, 'onesleepydev.org', {
            font: '24px Arial',
            fill: '#ffffff'
        });
        author.anchor.set(0.5);

    },

    // The start function calls the play state    
    start: function() {
        game.state.start('play');
    },
};
