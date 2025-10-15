class Mover
{
  constructor()
  {
    this.position = createVector(width / 2, 30);
    this.velocity = createVector();
    this.acceleration = createVector();
    
    this.mass = 1;
  }
  
  applyForce(force)
  {
    let f = force.copy();
    f.div(this.mass);
    
    // let f = p5.Vector.div(force, this.mass)
    
    this.acceleration.add(f);
  }
  
  update()
  {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
  
  show()
  {
    fill(100);
    strokeWeight(2);
    circle(this.position.x, this.position.y, 40);
  }
  
  checkEdges()
  {
    if (this.position.x > width)
      {
        this.position.x = width;
        this.velocity.x *= -1;
      }
    if (this.position.x < 0)
      {
        this.position.x = 0;
        this.velocity.x *= -1;
      }
    if (this.position.y > height)
      {
        this.position.y = height;
        this.velocity.y *= -1;
      }
  }
}
