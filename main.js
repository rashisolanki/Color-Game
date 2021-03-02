function randomcolor() {
    var color = [];
    for (var i = 0; i < 3; i++) {
     color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
   }

  var b = document.querySelector('body'); 
  var width = b.offsetWidth, height = b.offsetHeight;
  var coords = function(x = Math.random()*height, y = Math.random()*width)
  {
      var c = document.createElement('section');
      c.classList.add('crc');
      c.style.backgroundColor = randomcolor();
      c.style.width = c.style.height = Math.random()*200 + 'px';
      c.style.position = 'absolute';
      c.style.top= x + 'px'; c.style.left= y + 'px';
      document.body.appendChild(c)
  }

b.onclick = function(event)
{
      coords(event.clientY,event.clientX);
  };

b.onkeypress = function(){
    coords();
};