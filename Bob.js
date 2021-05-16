class Bob{
constructor(x,y,radius){
    var options ={
        isStatic:false,
        'restitution':1,
        'friction':0.5,
        'density':1.2,
    }
    this.body=Bodies.circle(x, y, radius, options) ;
    this.radius=radius;
   // this.image=loadImage("paper.png")
    World.add(world,this.body);
}
display(){
    push ();
    //translate(this.body.position.x,this.body.position.y,)
    ellipseMode(RADIUS);
   fill("pink");
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    pop ();
}
}