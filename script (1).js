(function() {
    "use strict";

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
      let dot, eventDoc, doc, body, pageX, pageY;
      
      event = event || window.event; // IE-ism
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Add a dot to follow the cursor
      dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = event.pageX + "px";
      dot.style.top = event.pageY + "px";
      document.body.appendChild(dot);
      let dots = document.querySelectorAll('.dot');
      console.log(dots,dots.length)
      if (dots.length>3){
        dots[0].remove()
      }
    }
  })();


document.addEventListener("click",() => {
  document.body.innerHTML = `<div class="hide">
    <h1>Поздравляю!</h1>
    <img src="https://kartinki-life.ru/articles/2019/02/28/otkrytki-mercaushhie-animacionnye-blestyashhie-gif-s-8-marta-mezhdunarodnym-zhenskim-dnem-chast-11-aya-7.gif" width=450>
    <marquee><h1>С 8 марта, Вера!</h1></marquee>
  </div>`
})