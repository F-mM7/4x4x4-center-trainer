const res = 64;

const H = 12;
const W = 16;

canvas.height = res * H;
canvas.width = res * W;

const ctx = canvas.getContext("2d");

const color_setting = ["green", "blue", "red", "orange", "white", "yellow"];

const face = [
  [1, 1],
  [1, 3],
  [1, 2],
  [1, 0],
  [0, 1],
  [2, 1],
];

let cell = [...Array(H)].map(() => Array(W));
let color = [...Array(H)].map(() => Array(W));

for (let k = 0; k < 6; ++k)
  for (let i = 0; i < 4; ++i)
    for (let j = 0; j < 4; ++j)
      cell[face[k][0] * 4 + i][face[k][1] * 4 + j] = true;

for (let k = 0; k < 6; ++k)
  for (let i = 1; i < 3; ++i)
    for (let j = 1; j < 3; ++j)
      color[face[k][0] * 4 + i][face[k][1] * 4 + j] = color_setting[k];

function draw() {
  load(sticker);
  for (let i = 0; i < H; ++i)
    for (let j = 0; j < W; ++j) {
      if (!color[i][j]) continue;
      ctx.fillStyle = color[i][j];
      ctx.fillRect(j * res, i * res, res, res);
    }
  for (let i = 0; i < H; ++i)
    for (let j = 0; j < W; ++j) {
      if (!cell[i][j]) continue;
      ctx.strokeRect(j * res, i * res, res, res);
    }

  // print_number();
}

function print_number() {
  for (let k = 0; k < 6; ++k) {
    ctx.font = "48px serif";
    ctx.strokeText(
      k * 4 + 0,
      (face[k][1] * 4 + 1) * res,
      (face[k][0] * 4 + 1) * res + res
    );
    ctx.strokeText(
      k * 4 + 1,
      (face[k][1] * 4 + 2) * res,
      (face[k][0] * 4 + 1) * res + res
    );
    ctx.strokeText(
      k * 4 + 2,
      (face[k][1] * 4 + 2) * res,
      (face[k][0] * 4 + 2) * res + res
    );
    ctx.strokeText(
      k * 4 + 3,
      (face[k][1] * 4 + 1) * res,
      (face[k][0] * 4 + 2) * res + res
    );
  }
}
