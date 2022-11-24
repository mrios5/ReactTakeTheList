import AR from './aruco'
import students from '../assets'
import LaLista from './tryToSave';
var video, canvas, context, imageData, detector;

//funcion para que inicie justo cuando carga la pantalla
const  onLoad = () => {
  //toma los elemtos del dom, tanto el video como el cambas mediante id
  video = document.getElementById("video");
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d", { willReadFrequently: true });

  canvas.width = parseInt(canvas.style.width);
  canvas.height = parseInt(canvas.style.height);
  
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }
  
  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }
  
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function(stream) {
      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {
        video.src = window.URL.createObjectURL(stream);
      }
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
    }
  );
    
  detector = new AR.Detector();

  requestAnimationFrame(tick);
}

const tick = () => {
  requestAnimationFrame(tick);
  
  if (video.readyState === video.HAVE_ENOUGH_DATA){
    snapshot();

    //Esta variable es la que cuenta con un objeto Ar.marker el cual tiene id y corners (4 como array)
    var markers = detector.detect(imageData);
    drawCorners(markers);
    drawId(markers);
    getId(markers)
    //console.log(markers)
    //send_data(markers)
  }
}

const snapshot = () => {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  imageData = context.getImageData(0, 0, canvas.width, canvas.height);
}
      
const  drawCorners = (markers) => {
  var corners, corner, i, j;

  context.lineWidth = 3;

  for (i = 0; i !== markers.length; ++ i){
    corners = markers[i].corners;
    
    context.strokeStyle = "red";
    context.beginPath();
    
    for (j = 0; j !== corners.length; ++ j){
      corner = corners[j];
      context.moveTo(corner.x, corner.y);
      corner = corners[(j + 1) % corners.length];
      context.lineTo(corner.x, corner.y);
    }

    context.stroke();
    context.closePath();
    
    context.strokeStyle = "green";
    context.strokeRect(corners[0].x - 2, corners[0].y - 2, 4, 4);
  }
}


//Esta funcion en este caso imprime el nommbre del usuario con su id asi como tambien con coordenadas ubica el nombre de una esquina
const  drawId = (markers) =>  {
  var corners, corner, x, y, i, j;
  
  context.strokeStyle = "black";
  context.font = '25px Arial';
  context.lineWidth = 2;
  
  for (i = 0; i !== markers.length; ++ i){
    corners = markers[i].corners;
    
    x = Infinity;
    y = Infinity;
    
    for (j = 0; j !== corners.length; ++ j){
      corner = corners[j];
      
      x = Math.min(x, corner.x);
      y = Math.min(y, corner.y);
    }

    context.strokeText(`${students[markers[i].id].name}`, x, y)
    
    //LaLista(students[markers[i].id].name)
  }
}

// Asi es como se consigue el id de un marker
const getId = (markers) => {
  for (let i = 0; i !== markers.length; ++ i){
    console.log(LaLista(students[markers[i].id].name))
    //console.log(markers[i].id)
  }
}


window.onload = onLoad;

/*
const send_data = (markers) => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://admin:admin@cluster0.tzrgkus.mongodb.net/TakeTheList');

    const listData = mongoose.model('people', 
        { 
            name: String, 
            assist: String
        });
    
    const get_data = (name) => {
        const Data = {"name": `${name}`, "assist": "Yes"}
        return Data
    }

    const save_Data = () => {
        var GoodData = new listData(get_data())
        GoodData.save()
        console.log("maybe its done")
    }
}
*/
