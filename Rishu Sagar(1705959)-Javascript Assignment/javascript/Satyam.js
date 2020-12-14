window.onload = function() {
    alert("JS Loaded.")
    var startButton = document.getElementsByClassName("start");
    var stopButton = document.getElementsById("stop");
    stopButton.onclick = stop;     
  }
  
  
  var timer;

  function start() {
    alert("Start Clicked");
    var text = document.getElementById("txtarea").value;
    // alert(text);
    var list = text.split(/[ \t\n]+/);
    // alert(list);
    runDisplay(list, "display")
  }
  
  function runDisplay(data, classs) {
    alert(data[0] +" class called "+classs);
    alert("aagebadha");
    var reader = document.getElementById("display");
    alert(reader);
    var index = 0;
    alert(data,length);
    if (timer) {
      clearInterval(timer);
    }
    if (data.length>0) {
      alert(data.length);
      timer = setInterval(function() {
        reader.innerHTML = data[index++];
        index = index % data.length;
      }, 400);
    }
    alert("Click event finished");
  }

  function stop() {
    clearInterval(timer);
    timer = null;
  }

  function fontSizeChange() {
    var display = document.getElementById("display");
    
    var fontChecked = [document.getElementById("36pt"),
      ,
      document.getElementById("78pt")
    ];
    for (var i = 0; i < fontChecked.length; i++) {
      if (fontChecked[i].checked == true) {
        display.style.fontSize = fontChecked[i].id;
      }
    }
    display.innerHTML = "String";
  }