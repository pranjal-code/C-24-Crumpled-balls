class Dustbin {
    constructor(x, y, width, height) 
    {
        var options = 
        {
            isStatic: true,
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //changing color to green but not chnaging name
        fill(69, 179, 157);//231, 76, 60
        rect(0, 0, this.width, this.height);
        pop();
    }
}
