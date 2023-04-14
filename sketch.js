const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;
function setup() {
  createCanvas(450, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  alignSlider.position(10,370)
  cohesionSlider = createSlider(0,5,1,0.1);
  cohesionSlider.position(155,370)
  separationSlider = createSlider(0,5,1,0.1);
  separationSlider.position(300,370)
  
  s = createInput("100")
  s.position(10,30)
  population = s.value
  s.changed(inisiasiPerubahan)
  inisiasiPerubahan()
}

function inisiasiPerubahan(){
  for (let i=0; i<s.value();i++){
    flock.push(new Boid());
  }
}

function draw() {
  background('red');
  
  text("Populasi",15,25)
  text("Alignment",50,369)
  text("Cohesion",193,369)
  text("Separation",340,369)
  
  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }
}
