var loadState = {
    preload: function() {
        preload_level();
        preload_players();
        preload_movement();
        preload_osd();
    },

    create: function() {
        //game.state.start('fullscreen'); TODO: Re-add once fullscreen toggle is implemented
        game.state.start('menu');
    },

};
