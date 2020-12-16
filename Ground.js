class Ground {
    constructor(x,y,width,height)
     {
      var options = 
      {
          //not moving
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //yellow
      fill(244, 208, 63);

      rect(pos.x, pos.y, this.width, this.height);
    }
  };
