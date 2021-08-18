class Snow{
    constructor(x,y,r ){
        var options = {
            restitution:0.4
        }
        this.snow1 = loadImage('snow4.webp');
        this.snow2 = loadImage('snow5.webp');
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var rand =Math.round(random(1,2))
       
        if (rand===1){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.snow1, 0, 0, this.r*2,this.r*2);
            pop();
        }
        if (rand===2){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.snow2, 0, 0, this.r*2,this.r*2);
            pop();
        }
        
      }
}
