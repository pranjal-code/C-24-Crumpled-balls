class Paper{
	constructor(x,y,radius)
	{
        var options=
        {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:3.3,
        }
        
		this.x = x;
		this.y = y;
        this.radius = radius;
        
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
		World.add(world, this.body);

	}
	display()
	{
			
			var pos = this.body.position;		

			push()
			translate(pos.x, pos.y);
            rectMode(CENTER);
           
            //look
            strokeWeight(1);
            fill(231, 76, 60);
            
			ellipse(0,0,this.radius, this.radius);
			pop();
			
	}
}
