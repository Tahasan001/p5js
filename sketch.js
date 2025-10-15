let mover;
function setup() {
  createCanvas(500, 250);
  mover = new Mover();
}

function draw() {
  background(220);
  
  let wind = createVector(0.1, 0);
  let gravity = createVector(0, 0.1);
  
  
  if (mouseIsPressed)
    {
      mover.applyForce(wind);
    } 
  
  mover.applyForce(gravity);
  
  
  mover.update();
  mover.checkEdges();
  mover.show();
}