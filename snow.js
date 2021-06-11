class Snow {
    constructor(x,y,width,height){
var options={
    gravity:0.5,
    friction:0.2,
    isStatic:false
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("snow5.webp");

World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
                
        pop();




    }
}