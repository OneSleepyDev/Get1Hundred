var menuState = {
  
    create: function () {
        var greeting = game.add.text(this.game.width/2, this.game.height / 16, 'Get 1 Hundred!',
                                    { font: '66px Arial', fill: '#ffffff' });
        greeting.anchor.set(0.5);
        var playText = game.add.text(this.game.width/2, this.game.height / 3, 'Click to play',
                                    { font: '34px Arial', fill: '#ffffff' });
        playText.anchor.set(0.5);
        var button = game.add.button(game.world.centerX, this.game.height / 2, 'player', this.start, this);
        button.anchor.set(0.5);
        
        var button2 = game.add.button(this.game.width - this.game.width / 4, this.game.height - this.game.height / 2 , 'player', gofull, this);
        button2.anchor.set(0.5);
        var fullScreenText = game.add.text(this.game.width - this.game.width / 4, this.game.height / 2, 'Fullscreen',
                                    { font: '12px Arial', fill: '#ffffff' });
        fullScreenText.anchor.set(0.5);
        
        
        
        var author = game.add.text(this.game.width/2, this.game.height - this.game.height / 10, 'onesleepydev.org',
                                    { font: '24px Arial', fill: '#ffffff' });
        author.anchor.set(0.5);

    },
    
    // The start function calls the play state    
    start: function () {
        game.state.start('play');    
    },    
};
