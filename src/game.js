export default class Game{
    score = 0;
    lines = 0;
    level = 0;

    playfied = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],  
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];
    activePiece = { //Фигура
        x: 0,
        y: 0,
        get blocks(){
            return this.rotations[this.rotationsIndex];
        },
        blocks:[
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
        /*rotationsIndex: 0,
        rotations: [
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 0, 0]
            ],
            [
                [0, 1, 0],
                [0, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 0, 0],
                [1, 1, 1],
                [0, 1, 0]
            ],
            [
                [0, 1, 0],
                [1, 1, 0],
                [0, 1, 0]
            ]*/
        
    };
    //Движение фигуры
    movePieceLeft(){
         this.activePiece.x-= 1;

         if(this.hasCollision()){
            this.activePiece.x-= 1;
         }

    }
    movePieceRight(){
        this.activePiece.x-= +1;
        
        if(this.hasCollision()){
            this.activePiece.x-= +1;
        }
    }
    movePieceDown(){
        this.activePiece.y+=1;

        if(this.hasCollision()){
            this.activePiece.y+=1;
            this.lockPiece();  
        }

    }
     // Поворот фигуры srs
     rotatePiece(){
        
        /*
            // поворот фигуры по часовой стрелке
        const temp = [];
        for (let i = 0; i < length; i++) {
            temp[i] = new array(length).fill(0);
            
        }   
        for (let y = 0; y < length; x++) {
            temp[x][y] = blocls[length-1-y][x];
            
        }
        this.activePiece.blocks = temp;

            // поворот против часовой стрелки
        if (this.hasCollision()) {
            this.activePiece.blocks = blocks;
        }
        // Первый метод поворота
        this.activePiece.rotationsIndex = this.rotatePiece.rotationsIndex < 3 ? this.activePiece.rotationsIndex + 1 : 0;        
        if(this.hasCollision()){
            this.activePiece.rotationsIndex = this.rotatePiece.rotationsIndex > 0 ? this.activePiece.rotationsIndex -1 : 3;
        }
        return this.activePiece; */
     
      // поворот против часовой стрелки
      this.rotateBlocks();

      if(this.hasCollision()){
            this.rotateBlocks(false);
      }
     }
    rotateBlocks(clockwise = true){
        const blocks = this.activePiece.blocks;
        const length =blocks.length;

        const x = Math.floor(length/2);
        const y = length -1;
             // поворот фигуры по часовой стрелке
        for (let i = 0; i < x; i++) {
            for (let j = i ; j < y-i; j++) {
                
                    const temp = blocks[i][j];

                    if (clockwise){                    
                    blocks[i][j] = blocks[y-j][i];
                    blocks[y-j][i] = blocks[y-i][y-j];
                    blocks[y-i][y-j] = blocks[j][y-i];
                    blocks[j][y-i] = temp;
                    } else {
                        blocks[i][j] = blocks[j][y-i];
                        blocks[j][y-i] = blocks[y-i][y-j];
                        blocks[y-i][y-j] = blocks[y-j][i];
                        blocks[y-j][i] = temp;
                    }
        }
    }
}

    // Положение фигуры
    hasCollision(){ 
        const {y: pieceY, x: pieceX , blocks}  = this.activePiece;

         for( y = 0; y < blocks.length; y++){
            for(let x =0; x<blocks[y].length; x++){
               if (
                   blocks[y][x] && 
                ((this.playfied[pieceY +Y] === undefined || this.playfield[pieceY + y][pieceX + x ] === underfined) ||
                this.playfied[pieceY + y][pieceX + x ]))
                {
                    return true;
               }
            }
        }
        return false;
    }
    lockPiece(){
        const {y: pieceY, x: pieceX , blocks}  = this.activePiece;

        for( y = 0; y < blocks.length; y++){
            for(let x =0; x<blocks[y].length; x++){
                if (blocks[y][x]) {
                    this.playfied[pieceY + y][pieceX + x]=blocks[y][x];
                }
            }
        }
    }  
    // Поворот фигуры srs

    



}