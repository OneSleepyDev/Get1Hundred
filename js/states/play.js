var playState = {
    
    create: function() {				
    	create_level();
    	create_players();
    	create_movement();
    	create_osd();

    },
    
    update: function() {
    	update_level();
    	update_players();
    	update_movement();
    	update_osd();
    	if(allotTime == 0){
    	    this.Win();
    	}
	},
	
	Win: function() {
		game.state.start('win');
	}

}
