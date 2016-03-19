var loadState= {

    preload: function() {
        preload_level();
        preload_players();
        preload_movement();
        preload_osd();
    },
    
    create: function() {
        game.state.start('menu');
    }    
};
