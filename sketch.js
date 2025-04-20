let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#ffe5d9'); // 設定背景顏色

  // 產生 40 個圓的初始資料
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width), // 隨機 x 座標
      y: random(height), // 隨機 y 座標
      size: random(30, 100), // 隨機大小
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background('#ffe5d9'); // 每次重繪背景

  // 顯示自我介紹文字
  textAlign(CENTER, CENTER); // 文字置中
  textSize(50); // 字體大小
  fill(0); // 文字顏色為黑色
  text('教科Ａ413730192黃詩婷', width / 2, height / 2); // 顯示於畫布中央

  // 計算滑鼠影響的大小變化
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製所有圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset); // 圓的大小隨滑鼠移動變化
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}

function loadIframe(url) {
  const iframeContainer = document.getElementById('iframe-container');
  const iframe = document.getElementById('content-frame');
  iframe.src = url;
  iframeContainer.style.display = 'block'; // 顯示 iframe
}
