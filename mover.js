class Mover
{
  constructor()
  {
    this.position = createVector(width / 2, 30);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.r = 20
    
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
    if (this.position.x > width - this.r)
      {
        this.position.x = width - this.r;
        this.velocity.x *= -1;
      }
    if (this.position.x < this.r)
      {
        this.position.x = this.r;
        this.velocity.x *= -1;
      }
    if (this.position.y > height - this.r)
      {
        this.position.y = height - this.r;
        this.velocity.y *= -1;
      }
  }
}
