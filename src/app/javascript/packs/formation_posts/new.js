<script>
  window.onload = function () {
        // canvas要素を取得
        var canvas = document.getElementById("canvas");
  // canvas要素が持つgetContext()メソッドを実行し、
  // グラフィック描画のためのメソッドやプロパティを
  // 持つオブジェクトを取得する。
  // 引数を"2d"とすることで2Dグラフィックの描画に
  // 特化したメソッドやプロパティを持つオブジェクトを取得し、
  // 定数ctxに格納する。
  var ctx = canvas.getContext("2d");
  // 定数ctxに格納したオブジェクトがもつプロパティやメソッドは
  // ctx.プロパティ名、ctx.メソッド名() で呼び出せる


  var BB = canvas.getBoundingClientRect();
  //左辺の座標
  var offsetX = BB.left;
  //四角形の上辺の座標
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
  var coordinates = document.getElementById('coordinates').value;

  var rects = JSON.parse(coordinates);

  draw();

  function rect(x, y, w, h) {
    ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
    }
  //アニメーションの各フレームの開始時に必要
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
  canvas.onmousedown = myDown;
  function myDown(e) {
    e.preventDefault();
  e.stopPropagation();
  //e.clientXはWEB画面全体のx座標（押した箇所のx座標）
  //offsetXはcanvasの左上のx座標
  var mx = parseInt(e.clientX - offsetX);
  var my = parseInt(e.clientY - offsetY);
  //アイコンを押したときのx座標とy座標を記録している
  dragok = false;
  for (var i = 0; i < rects.length; i++) {
        var r = rects[i];
        if (mx > r.x && mx < r.x + r.width && my > r.y && my < r.y + r.height) {
    dragok = true;
  r.isDragging = true;
        }
      }
  //startX,startYに最初アイコンをクリックした時の座標が記録される
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
  document.getElementById('formation_post_coordinates').value = JSON.stringify(rects);

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

</script>