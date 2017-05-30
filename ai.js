class AI {
    
    constructor(){
        this.toMove = [-1,-1];
        this.coords = ['A','B','C'];
	this.winLines = [[[0,0],[0,1],[0,2]],	//Top Row
		    	[[1,0],[1,1],[1,2]],	//Middle Row
		    	[[2,0],[2,1],[2,2]],	//Bottom Row
		    	[[0,0],[1,0],[2,0]],	//Left Col
		    	[[0,1],[1,1],[2,1]],	//Middle COl
		    	[[0,2],[1,2],[2,2]],	//Right Col
		    	[[0,0],[1,1],[2,2]],	//TL to BR diagonal
		    	[[0,2],[1,1],[2,0]]]	//TR to BL diagonal
    }

    decideMove(){
        if(false){
            //Win if able
            if(!document.getElementById(this.coords[this.toMove[0]].concat(this.coords[this.toMove[1]])).value && this.toMove[0] != -1)
                return this.toMove;
        }
        if(false){
            //Block opponent win if able
            if(!document.getElementById(this.coords[this.toMove[0]].concat(this.coords[this.toMove[1]])).value && this.toMove[0] != -1)
                return this.toMove;
        }
        if(false){
            //Set up zugzwang
            if(!document.getElementById(this.coords[this.toMove[0]].concat(this.coords[this.toMove[1]])).value && this.toMove[0] != -1)
                return this.toMove;
        }
        if(false){
            //Block zugzwang
            if(!document.getElementById(this.coords[this.toMove[0]].concat(this.coords[this.toMove[1]])).value && this.toMove[0] != -1)
                return this.toMove;
        }


        //If no better option, random placement
        var valid = false;
        while(!valid){
            this.toMove[0] = Math.floor(Math.random() * 3);
            this.toMove[1] = Math.floor(Math.random() * 3);
            if(!document.getElementById(this.coords[this.toMove[0]].concat(this.coords[this.toMove[1]])).value){
                valid = true;
            }
        }
        return this.toMove
    }

    aiMove(){
	this.decideMove();
        $("#".concat(this.coords[this.toMove[0]],this.coords[this.toMove[1]])).click();
        aiTurn = false;
    }
}
