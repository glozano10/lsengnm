//document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.menu li');
  const imageContainers = document.querySelectorAll('.image-container .category');
  const images = document.querySelectorAll('.image-container img');
  const popup = document.querySelector('.popup');
  const popupVideo = document.querySelector('.popup-video');
  const closeBtn = document.querySelector('.close-btn');

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      filterImagesByCategory(category);
    });
  });

  images.forEach(function(image) {
    image.addEventListener('click', function() {
      const videoSrc = this.getAttribute('data-video');
      if (videoSrc) {
        showPopup(videoSrc);
      }
    });
  });

  closeBtn.addEventListener('click', function() {
    hidePopup();
  });

  function filterImagesByCategory(category) {
    imageContainers.forEach(function(container) {
      if (category === 'all' || container.classList.contains(category)) {
        container.classList.add('show');
      } else {
        container.classList.remove('show');
      }
    });
  }

  function showPopup(videoSrc) {
    popupVideo.src = videoSrc;
    popup.style.display = 'block';
  }

  function hidePopup() {
    popupVideo.src = '';
    popup.style.display = 'none';
  }

  // Quiz

  const videos = [
    {"path": "videos/actividades/caminar.mov", "name": "caminar"},
    {"path": "videos/actividades/comer.mov", "name": "comer"},
    {"path": "videos/actividades/correr.mov", "name": "correr"},
    {"path": "videos/actividades/entrar.mov", "name": "entrar"},
    {"path": "videos/actividades/estudiar.mov", "name": "estudiar"},
    {"path": "videos/actividades/hacer.mov", "name": "hacer"},
    {"path": "videos/actividades/jugar.mov", "name": "jugar"},
    {"path": "videos/actividades/mirar.mov", "name": "mirar"},
    {"path": "videos/actividades/respirar.mov", "name": "respirar"},
    {"path": "videos/actividades/trabajar.mov", "name": "trabajar"},
  ];

  var video1 = -1;
  var video2 = -1;
  var video3 = -1;
  var points = 0;

  const popupQuiz = document.querySelector('.popup-quiz');
  const closeQuiz = document.querySelector('.close-quiz');

  // Start quiz
  function startQuiz() {
    popupQuiz.style.display = 'block';

    // Select videos randomly
    
    video1 = Math.floor(Math.random() * videos.length);
    video2 = Math.floor(Math.random() * videos.length);
    video3 = Math.floor(Math.random() * videos.length);

    // Print videos

    let quizContent = document.getElementById("quiz-videos");
    quizContent.innerHTML = "";

    let videoElement1 = document.createElement("video");
    videoElement1.setAttribute("src", videos[video1].path);
    videoElement1.setAttribute("controls", "controls");
    videoElement1.className = "popup-video";
    quizContent.appendChild(videoElement1);

    let videoElement2 = document.createElement("video");
    videoElement2.setAttribute("src", videos[video2].path);
    videoElement2.setAttribute("controls", "controls");
    videoElement2.className = "popup-video";
    quizContent.appendChild(videoElement2);

    let videoElement3 = document.createElement("video");
    videoElement3.setAttribute("src", videos[video3].path);
    videoElement3.setAttribute("controls", "controls");
    videoElement3.className = "popup-video";
    quizContent.appendChild(videoElement3);

    // Print options in form

    let optionDefault = document.createElement("option");
    optionDefault.setAttribute("selected", "selected");
    optionDefault.setAttribute("disabled", "disabled");
    optionDefault.innerHTML = "---";

    let option1 = document.createElement("option");
    option1.setAttribute("value", videos[video1].name);
    option1.innerHTML = videos[video1].name;

    let option2 = document.createElement("option");
    option2.setAttribute("value", videos[video2].name);
    option2.innerHTML = videos[video2].name;

    let option3 = document.createElement("option");
    option3.setAttribute("value", videos[video3].name);
    option3.innerHTML = videos[video3].name;

    document.getElementById("q1").innerHTML = "";
    document.getElementById("q1").appendChild(optionDefault.cloneNode(true));
    document.getElementById("q1").appendChild(option1.cloneNode(true));
    document.getElementById("q1").appendChild(option2.cloneNode(true));
    document.getElementById("q1").appendChild(option3.cloneNode(true));
    
    document.getElementById("q2").innerHTML = "";
    document.getElementById("q2").appendChild(optionDefault.cloneNode(true));
    document.getElementById("q2").appendChild(option1.cloneNode(true));
    document.getElementById("q2").appendChild(option2.cloneNode(true));
    document.getElementById("q2").appendChild(option3.cloneNode(true));
    
    document.getElementById("q3").innerHTML = "";
    document.getElementById("q3").appendChild(optionDefault.cloneNode(true));
    document.getElementById("q3").appendChild(option1.cloneNode(true));
    document.getElementById("q3").appendChild(option2.cloneNode(true));
    document.getElementById("q3").appendChild(option3.cloneNode(true));

  }

  function validateResponses() {
    points = 0;

    let q1 = document.getElementById("q1").value;
    let q2 = document.getElementById("q2").value;
    let q3 = document.getElementById("q3").value;

    if (q1 === "" || q2 === "" || q3 === "") {
      alert("Por favor, responde todas las preguntas.");
    } else {
      if (q1 === videos[video1].name) {
        points++;
      }
      if (q2 === videos[video2].name) {
        points++;
      }
      if (q3 === videos[video3].name) {
        points++;
      }
      alert("Tuviste " + points + " de 3 respuestas correctas!!!");
    }
  }

  // close quiz
  closeQuiz.addEventListener('click', function() {
    popupQuiz.style.display = 'none';
  });

//});
