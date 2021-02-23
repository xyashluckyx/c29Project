class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.0,
          'friction':0.4,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y,width, height, options);
      this.width = width;
      this.height=height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("black");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };