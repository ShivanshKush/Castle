class Cone{
    constructor(x1,y1,x2,y2,x3,y3){
      var c_option={
       restitution:1   
      }
      this.body = Bodies.triangle(x1,y1,x2,y2,x3,y3,c_option);
      World.add(world,this.body);
    }
    display(){
      var p =this.body.position;  
      rectMode(CENTER);
        fill("silver");
        shape(p.x1, p.y1, p.x2, p.y2, p.x3, p.y3);
    }
}