//restart function
function restartGame(){
  level = 1;
  score = 100;
  updateScore(0);
  resetBodies() ;
}

//reset button function
document.getElementById('resetButton').addEventListener('click', function () {
    Composite.clear(engine.world, true);
     resetBodies() 

});

//typing effect

const titleElement = document.getElementById("title");
const subtitleElement = document.getElementById("subtitle");

const titleText = "Deconstruct";
const subtitleText = "a physics based puzzle game";

function typeText(element, text, callback) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    } else if (callback) {
      callback();
    }
  }

  type();
}

typeText(titleElement, titleText, () => {
  setTimeout(() => {
    typeText(subtitleElement, subtitleText);
  }, 1000);
});

//scorekeeper
function updateScore(x) {
  if(score > 0){
  score += x
  document.getElementById("score").textContent = score;    
  }
  if(score <= 0){
    gameOver();
  }
}

//matter.js stuff

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;
  (Mouse = Matter.Mouse), (MouseConstraint = Matter.MouseConstraint);

var engine = Engine.create();


//!!IMPORTANT!! MAKES THE PHYSICS ACTUALLY GOOD
engine.positionIterations = 1000;
engine.velocityIterations = 1000;

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth,
    height: window.innerHeight,
    wireframes: false,
    background: "#14151f"
  }
});

//global vars
var circleA;
var ground;
const screenHeight = window.innerHeight;
let score = 100;

//func for making the structure for level 1
function createBodiesLevel1() {
  //first layer stuctures
  var boxA = Bodies.rectangle(
    window.innerWidth / 2 - 68,
    screenHeight - 90,
    135,
    20,
    {
      isStatic: false,
      //mass: 150,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );
  var boxB = Bodies.rectangle(
    window.innerWidth / 2 + 68,
    screenHeight - 90,
    135,
    20,
    {
      isStatic: false,
      // mass: 150,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );

  //second layer
  var boxC = Bodies.rectangle(
    window.innerWidth / 2 - 60,
    screenHeight - 130,
    100,
    50,
    {
      restitution: 0,
      //friction: 200,
      //frictionStatic: 100,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );
  var boxD = Bodies.rectangle(
    window.innerWidth / 2 + 60,
    screenHeight - 130,
    100,
    50,
    {
      restitution: 0,
      //friction: 100,
      //frictionStatic: 100,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );

  //third layer
  var boxE = Bodies.rectangle(
    window.innerWidth / 2 - 75,
    screenHeight - 220,
    45,
    90,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );

  var boxF = Bodies.rectangle(
    window.innerWidth / 2 + 75,
    screenHeight - 220,
    45,
    90,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );
  var boxG = Bodies.rectangle(
    window.innerWidth / 2 - 25,
    screenHeight - 150,
    43,
    45,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }
    }
  );
  var boxH = Bodies.rectangle(
    window.innerWidth / 2 + 25,
    screenHeight - 150,
    43,
    45,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }
    }
  );

  // fourth layer
  var boxI = Bodies.rectangle(
    window.innerWidth / 2 - 25,
    screenHeight - 200,
    45,
    90,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );
  var boxJ = Bodies.rectangle(
    window.innerWidth / 2 + 25,
    screenHeight - 200,
    45,
    90,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );
  var boxK = Bodies.rectangle(
    window.innerWidth / 2 - 75,
    screenHeight - 280,
    45,
    45,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }
    }
  );
  var boxL = Bodies.rectangle(
    window.innerWidth / 2 + 75,
    screenHeight - 280,
    45,
    45,
    {
      restitution: 0,
      //frictionStatic: 4,
      render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }
    }
  );

  // fifth layer
  var boxM = Bodies.rectangle(
    window.innerWidth / 2,
    screenHeight - 300,
    250,
    20,
    {
      restitution: 0,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );

  // sixth layer

  var boxN = Bodies.rectangle(
    window.innerWidth / 2 - 100,
    screenHeight - 350,
    45,
    100,
    {
      restitution: 0,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );

  var boxO = Bodies.rectangle(
    window.innerWidth / 2 + 100,
    screenHeight - 350,
    45,
    100,
    {
      restitution: 0,
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );

  var trapA = Bodies.trapezoid(
    window.innerWidth / 2,
    screenHeight - 340,
    100,
    75,
    0.5,
    {
      render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }
    }
  );

  // seventh layer

  var boxP = Bodies.rectangle(
    window.innerWidth / 2,
    screenHeight - 400,
    250,
    20,
    {
      restitution: 0,
      render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }
    }
  );

  //ball
  circleA = Bodies.circle(window.innerWidth / 2 - 30, screenHeight - 800, 10, {
    label: "ground",
    render: { fillStyle: "transparent", strokeStyle: "#68ed7a", lineWidth: 1 }
  });

  var groundHeight = 60;
  var groundWidth = 270;

  ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - 50,
    groundWidth,
    groundHeight,
    {
      isStatic: true,
      friction: 1000,
      label: "ground",
      render: {
        fillStyle: "transparent",
        strokeStyle: "gray",
        lineWidth: 1
      }
    }
  );

  // add all of the bodies to the world
  Composite.add(engine.world, [
    boxA,
    boxB,
    boxC,
    boxD,
    boxE,
    boxF,
    boxG,
    boxH,
    boxI,
    boxJ,
    boxK,
    boxL,
    boxM,
    boxN,
    boxO,
    trapA,
    boxP,
    ground
  ]);
  wait(10).then(() => {
    Composite.add(engine.world, [circleA]);
  });
}

//func for making the structure for level 2
function createBodiesLevel2(){
  
//layer1
var boxA = Bodies.rectangle(window.innerWidth / 2 - 100, screenHeight - 80, 70, 50, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});
var boxB = Bodies.rectangle(window.innerWidth / 2 - 37, screenHeight - 80, 50, 50, {render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }});
var boxC = Bodies.rectangle(window.innerWidth / 2 + 25, screenHeight - 160, 70, 200, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});

// layer 2
var boxD = Bodies.rectangle(window.innerWidth / 2 - 110, screenHeight - 160, 50, 50, {render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }});
var boxE = Bodies.rectangle(window.innerWidth / 2 - 47, screenHeight - 160, 70, 50, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});

//layer 3
var boxF = Bodies.rectangle(window.innerWidth / 2 - 100, screenHeight - 240, 70, 50, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});
var boxG = Bodies.rectangle(window.innerWidth / 2 - 37, screenHeight - 210, 50, 50, {render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }});

//layer 4
var boxH = Bodies.rectangle(window.innerWidth / 2 - 110, screenHeight - 360, 50, 150, {render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }});
var boxI = Bodies.rectangle(window.innerWidth / 2 - 48, screenHeight - 320, 70, 75, {render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }});
var boxJ = Bodies.rectangle(window.innerWidth / 2 + 41, screenHeight - 320, 100, 100, {render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }});

//layer 5
var boxK = Bodies.rectangle(window.innerWidth / 2 - 48, screenHeight - 380, 70, 75, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});

//layer 6
var boxL = Bodies.rectangle(window.innerWidth / 2, screenHeight - 400, 300, 20, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});

//layer 7
var boxM = Bodies.rectangle(window.innerWidth / 2 + 25, screenHeight - 525, 20, 80, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});
var boxN = Bodies.rectangle(window.innerWidth / 2 + 125, screenHeight - 525, 20, 80, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});
var boxO = Bodies.rectangle(window.innerWidth / 2 - 100, screenHeight - 550, 20, 200, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});

//layer 8
var boxP = Bodies.rectangle(window.innerWidth / 2 + 80, screenHeight - 550, 150, 20, {render: { fillStyle: "transparent", strokeStyle: "#689bed", lineWidth: 1 }});
var boxQ = Bodies.rectangle(window.innerWidth / 2 - 105, screenHeight - 670, 50, 50, {render: { fillStyle: "transparent", strokeStyle: "#f27e99", lineWidth: 1 }});

    
  //ball
  circleA = Bodies.circle(window.innerWidth / 2 + 110, screenHeight - 800, 10, {
    label: "ground",
    render: { fillStyle: "transparent", strokeStyle: "#68ed7a", lineWidth: 1 }
  });

  var groundHeight = 60;
  var groundWidth = 270;

  ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - 50,
    groundWidth,
    groundHeight,
    {
      isStatic: true,
      friction: 1000,
      label: "ground",
      render: {
        fillStyle: "transparent",
        strokeStyle: "gray",
        lineWidth: 1
      }
    }
  );
  

  // add all of the bodies to the world
  Composite.add(engine.world, [
    boxA,
    boxB,
    boxC,
    boxD,
    boxE,
    boxF,
    boxG,
    boxH,
    boxI,
    boxJ,
    boxK,
    boxL,
    boxM,
    boxN,
    boxO,
    boxP,
    boxQ,
    ground
  ]);
  wait(10).then(() => {
    Composite.add(engine.world, [circleA]);
  }); 
}

createBodiesLevel1();

// Create mouse constraint
var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: { visible: false }
  }
});

//add mouse constraint
Composite.add(engine.world, mouseConstraint);

function handleInput(event) {
  const mousePosition = mouse.position;

  const bodiesUnderMouse = Matter.Query.point(
    Composite.allBodies(engine.world),
    mousePosition
  );

  if (bodiesUnderMouse.length > 0) {
    const bodyToRemove = bodiesUnderMouse[0];
    if (bodyToRemove.label !== "ground") {
      Composite.remove(engine.world, bodyToRemove);

      //if you click a red block remove 10 points
      if (bodyToRemove.render.strokeStyle === "#f27e99") {
        updateScore(-10);
        console.log("red block clicked");
      }
      countBodiesOfColor("#689bed");
    }
  }
}



mouseConstraint.mouse.element.addEventListener("mousedown", function (event) {
  handleInput(event);
});

mouseConstraint.mouse.element.addEventListener("touchstart", function (event) {
  event.preventDefault();  
  handleInput(event);
});

//deduct points if a red block falls off screen

Matter.Events.on(engine, "beforeUpdate", function () {
  const allBodies = Composite.allBodies(engine.world);

  allBodies.forEach(function (body) {
    if (body.position.y > window.innerHeight + 199) {
      if (body.render.strokeStyle === "#f27e99") {
        updateScore(-10); 
        console.log("Red block fell ");
      }

      Composite.remove(engine.world, body);
    }
  });
});

//reset function
function resetBodies() {
  Matter.Composite.clear(engine.world);
  if (level == 1) {
    createBodiesLevel1();
  }
   if (level == 2) {
    createBodiesLevel2();
  }
}

Matter.Events.on(engine, "afterUpdate", function () {
  if (circleA.position.y > window.innerHeight + 199) {
      resetBodies();
      updateScore(-10);
  }
});

let countOfColor = 0;
let level = 1;

//blue block counter
function countBodiesOfColor(color) {
    countOfColor = 0; 

    const allBodies = Composite.allBodies(engine.world);

    allBodies.forEach(function (body) {
        if (body.render && body.render.strokeStyle === color) {
            if (body.position.y - 100 > screenHeight) {
                Composite.remove(engine.world, body);
            } 
             else {
                countOfColor++; 
            }
        }
    });


    console.log(`There are ${countOfColor} bodies with the color ${color}.`);
     // level increase
     if (countOfColor === 0) {
        level++;
        console.log("Level " + level);
        nextLevel();
    }
}

function nextLevel() {
  const checkBodiesAtRest = () => {
    const bodies = Composite.allBodies(engine.world);
    const allAtRest = bodies.every(body => body.speed < 0.1 && body.angularSpeed < 0.1);

    if (allAtRest) {
      setTimeout(() => {
    resetBodies();
  }, 1000); 
    } else {
      setTimeout(checkBodiesAtRest, 100); // Check again in 100ms
    }
  };

  checkBodiesAtRest();
}

// run the renderer
Render.run(render);

// create a runner
var runner = Runner.create();
Runner.run(runner, engine);
//runner.isFixed = true;

// ensures the stuff is always on the ground regardless of window size
window.addEventListener("resize", function () {
  render.options.width = window.innerWidth;
  render.options.height = window.innerHeight;
  render.canvas.width = window.innerWidth;
  render.canvas.height = window.innerHeight;

  Matter.Body.setPosition(ground, {
    x: window.innerWidth / 2,
    y: window.innerHeight - 50
  });
});


// ensure game over screen is hidden (idk why i had to fix this)
document.getElementById("game-over-screen").style.display = "none";

//game over function
function gameOver() {
  const gameOverScreen = document.getElementById("game-over-screen");
  gameOverScreen.style.display = "flex"; // Show the Game Over screen
}

document.getElementById("restart-button").addEventListener("click", () => {
  const gameOverScreen = document.getElementById("game-over-screen");
  gameOverScreen.style.display = "none"; 
  restartGame();
});