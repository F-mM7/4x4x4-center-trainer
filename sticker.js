const sticker = {};

set_question();
draw();

button.onclick = function () {
  move_sticker(input.value);
  draw();
};

function set_question(shuffle = true) {
  sticker.center = [...Array(6).keys()].map((k) => Array(4).fill(k)).flat();

  if (shuffle)
    for (let i = 0; i < 23; ++i) {
      const j = i + ran(24 - i); //[i,24)
      [sticker.center[i], sticker.center[j]] = [
        sticker.center[j],
        sticker.center[i],
      ];
    }

  draw();
  get_initial_st();
}

function load() {
  for (let k = 0; k < 6; ++k) {
    color[face[k][0] * 4 + 1][face[k][1] * 4 + 1] =
      color_setting[sticker.center[k * 4 + 0]];
    color[face[k][0] * 4 + 1][face[k][1] * 4 + 2] =
      color_setting[sticker.center[k * 4 + 1]];
    color[face[k][0] * 4 + 2][face[k][1] * 4 + 2] =
      color_setting[sticker.center[k * 4 + 2]];
    color[face[k][0] * 4 + 2][face[k][1] * 4 + 1] =
      color_setting[sticker.center[k * 4 + 3]];
  }
}
