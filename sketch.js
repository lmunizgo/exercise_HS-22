let table;


let values;
let labels;
let t = 0;

const tempUp = 100
let temperature = tempUp / 2
let mode = 0

const canvasWidth = window.innerWidth;
const canvasHeight = 6000; // ⚠️ size limit if too long
const xPosAxis1 = 20; // px
const xPosAxis2 = 500; // px

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('assets/future_cities_data.csv', 'csv', 'header');
  //the file can be remote
  //table = loadTable("http://p5js.org/reference/assets/future_cities_data.csv",
  //                  "csv", "header");

  
}
const data = [1.3, 3.0, 4.0];



function setup() {
  // put setup code here
  createCanvas(5000, windowHeight);
  background(255);

  //getRow(1);
  print(table.get(0,0));  
  // count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));

  values = table.getColumn('Annual_Mean_Temperature');
  labels = table.getColumn('current_city');


}


function drawTemperature(x, y) {
  fill('black');
  circle(x, y, 10);
}
x

function draw() {
  background(20);


  textSize(42);
  noStroke();
  fill(255);
  text('Average temperature in cities', 35, 55);

  textSize(22);
  noStroke();
  fill(255);
  text('scroll horizontally to see all cities', 35, 95);



  strokeWeight(4);
    stroke(255);
    fill(200, 0 ,20);
      circle(18,52,12);
    rect(14,15,8,30,5);

  // put drawing code here
  let values = table.getColumn('Annual_Mean_Temperature')

  for (let i = 0; i < values.length; i++) {
    table.get(i,'Annual_Mean_Temperature');
   
    strokeWeight(10);
    stroke(255);
    fill(200, 0, 20);
    
    rect(i * 100 +10, height - 45, 20, -values[i] * t, 10);
    circle( i * 100 +20, height - 30, 20);
   
   
    
    textSize(12);
    push();
    translate(i * 100 + 40, height - 1 - values[i] * t - 25);

    fill(200, 0, 20);
    noStroke();
    var w = textWidth(labels[i], 0, 0);
    rect(0, -10, w, 15);
    fill(255);
    noStroke();
    text(labels[i], 0, 0);
    pop();

    

    push();
    translate(i * 100 + 40, height - 1 - values[i] * t - 10);

    fill(200, 0, 20);
    noStroke();
    
    text(values[i], 0, 0);

    pop();
    // text (labels [i], i * 40 + 20, height-1-values [i] * t-10);
    
  }
  if (t < 20) {
    t = t + 1;
  } else if (t = 20){
    
  }

  
}
