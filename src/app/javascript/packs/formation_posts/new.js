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

    draw();

    function rect(x, y, w, h) {
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      console.log(x, y, w, h);
      ctx.closePath();
      ctx.fill();
      ctx.save();
    }

    function clear() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.save();
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
        ctx.save();
      }

    }
    canvas.onmousedown = myDown;
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

    canvas.onmouseup = myUp;
    function myUp(e) {
      e.preventDefault();
      e.stopPropagation();

      dragok = false;
      for (var i = 0; i < rects.length; i++) {
        rects[i].isDragging = false;
      }
    }

    canvas.onmousemove = myMove;
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
  };

  $('save-button').submit(function( event ) {
      event.preventDefault();

      //post()の処理をここに記述する
      let f = document.createElement('form');
      f.method = 'post';               //通信方法はPOST
      f.action = '/sample/cart/add';   //情報の送り先URL

        //innerHTMLメソッドは要素の内容を変更するプログラム。値を代入したり内容を空にすることができる。
        //ここではそれぞれのvalueにさきほど定義した変数を指定
      f.innerHTML = '<input name="itemCount" value='+  itemCount + '>' +
                    '<input name="itemId" value=' + itemId + '>';

        //せっかく作ったform部品もhtmlのBodyに反映させなきゃ意味がないので
        //appendでBody内に挿入
      document.body.append(form);

  })