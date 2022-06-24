window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var BB = canvas.getBoundingClientRect();
  var offsetX = BB.left;
  var offsetY = BB.top;
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;

  var dragok = false;
  var startX;
  var startY;

  var img = new Image();
  img.src = "/images/uni.jpg";
  img.onload = () => {
    draw();
  }

  var rects = [];
  rects.push({
    x: 220 - 10,
    y: 90 - 35,
    width: 30,
    height: 30,
    fill: "#444444",
    isDragging: false
  });
  rects.push({
    x: 140 - 10,
    y: 50 - 35,
    width: 30,
    height: 30,
    fill: "#ff550d",
    isDragging: false
  });
  rects.push({
    x: 60 - 10,
    y: 90 - 35,
    width: 30,
    height: 30,
    fill: "#800080",
    isDragging: false
  });
  rects.push({
    x: 100 - 10,
    y: 150 - 35,
    width: 30,
    height: 30,
    fill: "#0c64e8",
    isDragging: false
  });
  rects.push({
    x: 180 - 10,
    y: 150 - 35,
    width: 30,
    height: 30,
    fill: "#0c64e8",
    isDragging: false
  });
  rects.push({
    x: 140 - 10,
    y: 200 - 35,
    width: 30,
    height: 30,
    fill: "#0c64e8",
    isDragging: false
  });
  rects.push({
    x: 100 - 10,
    y: 250 - 35,
    width: 30,
    height: 30,
    fill: "#0c64e8",
    isDragging: false
  });
  rects.push({
    x: 180 - 10,
    y: 250 - 35,
    width: 30,
    height: 30,
    fill: "#0c64e8",
    isDragging: false
  });
  rects.push({
    x: 30 - 10,
    y: 220 - 35,
    width: 30,
    height: 30,
    fill: "#0c64e8",
    isDragging: false
  });
  rects.push({
    x: 260 - 10,
    y: 220 - 35,
    width: 30,
    height: 30,
    fill: "#0c64e8",
    isDragging: false
  });

  canvas.onmousedown = myDown;
  canvas.onmouseup = myUp;
  canvas.onmousemove = myMove;

  draw();

  function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
  }

  function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  function draw() {
    clear();
    ctx.fillStyle = "#FAF7F8";
    rect(0, 0, WIDTH, HEIGHT);

    for (var i = 0; i < rects.length; i++) {
      var r = rects[i];
      ctx.fillStyle = r.fill;

      //四角の場合
      //rect(r.x, r.y, r.width, r.height);

      //アイコンフォントの場合
      //ctx.font = "900 " + r.width + "px 'Font Awesome 5 Free'";
      //ctx.fillText("\uf553", r.x - 3, r.y + r.height - 2);

      //画像の場合
      ctx.drawImage(img, r.x, r.y, r.width, r.height);
    }
  }

  function myDown(e) {
    e.preventDefault();
    e.stopPropagation();

    var mx = parseInt(e.clientX - offsetX);
    var my = parseInt(e.clientY - offsetY);

    dragok = false;
    for (var i = 0; i < rects.length; i++) {
      var r = rects[i];
      if (mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
        dragok = true;
        r.isDragging = true;
      }
    }
    startX = mx;
    startY = my;
  }

  function myUp(e) {
    e.preventDefault();
    e.stopPropagation();

    dragok = false;
    for (var i = 0; i < rects.length; i++) {
      rects[i].isDragging = false;
    }
  }

  function myMove(e) {
    if (dragok) {
      e.preventDefault();
      e.stopPropagation();

      var mx = parseInt(e.clientX - offsetX);
      var my = parseInt(e.clientY - offsetY);

      var dx = mx - startX;
      var dy = my - startY;

      for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        if (r.isDragging) {
          r.x += dx;
          r.y += dy;
        }
      }

      draw();

      startX = mx;
      startY = my;
    }
}
$('#save-button').click(function(){
    var board = document.getElementById('board');
    url = canvas.toDataURL('image/jpeg');
    alert(url);
    $('#post_image_url').val('');
    $('#post_image_url').val(url);
    $('#new_post').submit();
})

};

