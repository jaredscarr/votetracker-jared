//variables
var allPhotos = [];
var randomGenerate;
var displayphoto1 = document.getElementById('photoholder1');
var displayphoto2 = document.getElementById('photoholder2');
var photo1;
var photo2;
var update;
var ctx = document.getElementById("piechart").getContext("2d");
var myNewChart = new Chart(ctx).Pie(pieData);

//photo Object constructor

function Photo(theName, path) {
  this.theName = theName;
  this.path = path;
  this.votes = 0;
  allPhotos.push(this);
}

var london = new Photo('London', 'images/london.jpg');
var boraBora = new Photo('Bora Bora', 'images/borabora.jpg');
var barcelona = new Photo('Barcelona', 'images/barcelona.jpg');
var paris = new Photo ('Paris', 'images/paris.jpg');
var sydney = new Photo('Sydney', 'images/sydney.jpg');
var newYork = new Photo('New York City', 'images/newyork.jpg');
var maui = new Photo('Maui', 'images/maui.jpg');
var rio = new Photo('Rio de Janeiro', 'images/rio-de-janeiro.jpg');
var capeTown = new Photo('Cape Town', 'images/capetown.jpg');
var sanFran = new Photo('San Francisco', 'images/sanfrancisco.jpg');
var maldives = new Photo('Maldives', 'images/maldives.jpg');
var prague = new Photo('Prague', 'images/prague.jpg');
var yellowStone = new Photo('Yellowstone', 'images/yellowstone.jpg');
var zurich = new Photo('Zurich', 'images/zurich.jpg');
var budapest = new Photo('Budapest', 'images/budapest.jpg');
//pieData Array
var pieData = [{
        value: 0,
        // value: 19,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: allPhotos[0].theName
    },
    {
        value: 0,
        // value: 45,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: allPhotos[1].theName
    },
    {
        value: 0,
        // value: 15,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: allPhotos[2].theName
    },
    {
        value: 0,
        // value: 35,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: allPhotos[3].theName
    },
    {
        value: 0,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: allPhotos[4].theName
    },
    {
        value: 0,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: allPhotos[5].theName
    },
    {
        value: 0,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: allPhotos[6].theName
    },
    {
        value: 0,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: allPhotos[7].theName
    },
    {
        value: 0,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: allPhotos[8].theName
    },
    {
        value: 0,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: allPhotos[9].theName
    },
    {
        value: 0,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: allPhotos[10].theName
    },
    {
        value: 0,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: allPhotos[11].theName
    },
    {
        value: 0,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: allPhotos[12].theName
    },
    {
        value: 0,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: allPhotos[13].theName
    },
    {
        value: 0,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: allPhotos[14].theName
    }
];

drawFuckingChart = function () {
  myNewChart;
  console.log(myNewChart);
  }

//Tracker Object constructor
// function VoteTracker() {

// }
//functions to change into methods of the tracker functions

randomPhoto = function () {
  randomGenerate = Math.floor(Math.random() * allPhotos.length);
  return randomGenerate;
}

display = function () {
  photo1 = randomPhoto();
  photo2 = randomPhoto();

  while (photo1 === photo2) {
    photo1 = randomPhoto();
    photo2 = randomPhoto();
  }

  var newImage1 = new Image(300, 300);
  newImage1.src = allPhotos[photo1].path;
  newImage1.id = 'left';
  displayphoto1.appendChild(newImage1);

  var newImage2 = new Image(300, 300);
  newImage2.src = allPhotos[photo2].path;
  newImage2.id = 'right';
  displayphoto2.appendChild(newImage2);
}

refreshPhotos = function () {
  photo1 = randomPhoto();
  photo2 = randomPhoto();

  while (photo1 === photo2) {
    photo1 = randomPhoto();
    photo2 = randomPhoto();
  }
  var getLeft = document.getElementById('left');
  var getRight = document.getElementById('right');
  getLeft.src = allPhotos[photo1].path;
  getRight.src = allPhotos[photo2].path;
}

displayphoto1.addEventListener('click', function () {
  allPhotos[photo1].votes+=1;
  myNewChart.pieData[photo1].value = allPhotos[photo1].votes;
  console.log(pieData);
  myNewChart.update();
  drawFuckingChart();
  refreshPhotos();
});
displayphoto2.addEventListener('click', function () {
  allPhotos[photo2].votes+=1;
  console.log(allPhotos[photo2].votes);
  console.log(pieData);
  myNewChart.addData(allPhotos[photo2].votes); //maybe????
  myNewChart.update();
  drawFuckingChart();
  refreshPhotos();
});

//takes selected photo and highlights it

display();



