/*  Not in use currently. Will need to have this as a toggable option that can be
    accessed at anytime
*/

// TODO: Toggle option for fullscreen

var fullscreenState = {
    create: function () {
        
        var greeting = game.add.text(this.game.width / 2, this.game.height / 8, 'Get 1 Hundred!',
                                    { font: '66px Arial', fill: '#ffffff' });
        greeting.anchor.set(0.5);
        var playText = game.add.text(this.game.width / 2, this.game.height / 3, 'Click to start fullscreen',
                                    { font: '34px Arial', fill: '#ffffff' });
        playText.anchor.set(0.5);
        var button = game.add.button(this.game.width / 2, this.game.height / 1.5, 'player', this.begin, this);
        button.anchor.set(0.5);
    },  

    begin : function () {
        gofull();
        game.state.start('menu')
    },
};
