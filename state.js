//turn : inspection
const turn = [];
const _x = [null, "x", "x'", "z", "z'", "x2"];
const _y = [null, "y", "y2", "y'"];
for (let i = 0; i < 6; ++i)
  for (let j = 0; j < 4; ++j) {
    let t = "";
    if (_x[i]) t += _x[i];
    if (_x[i] && _y[j]) t += " ";
    if (_y[j]) t += _y[j];
    turn.push(t);
  }

//legal
const _f = [
  ["F", "B", "Fw"],
  ["R", "L", "Rw"],
  ["U", "D", "Uw"],
];
const _2 = ["", "'", "2"];

function cat(x) {
  return Math.floor(x / 9);
}
function layer(x) {
  return Math.floor(x / 3) % 3;
}
function angle(x) {
  return x % 3;
}
function inv(x) {
  if (x % 3 == 0) return x + 1;
  if (x % 3 == 1) return x - 1;
  return x;
}
function move_name(x) {
  return _f[cat(x)][layer(x)] + _2[angle(x)];
}
function is_correct_order(x, y) {
  return cat(x) != cat(y) || layer(x) < layer(y);
}

const map_center = {};
for (key in target) {
  map_center[key] = [...Array(24).keys()];
  for (s of target[key].center) {
    const a = [...map_center[key]];
    for (let i = 0; i < 4; ++i) a[s[i]] = map_center[key][s[(i + 1) % 4]];
    map_center[key] = a;
  }
}

function move_center_bit(x, c) {
  if (!map_center[c]) return x;
  let y = 0;
  for (let i = 0; i < 24; ++i) if (x & (1 << i)) y |= 1 << map_center[c][i];
  return y;
}

function alg_center_bit(x, s) {
  for (c of s.split(" ")) x = move_center_bit(x, c);
  return x;
}

function alg_st(st, s) {
  const [white, yellow] = st.split(",").map((e) => Number(e));
  return (
    String(alg_center_bit(white, s)) + "," + String(alg_center_bit(yellow, s))
  );
}
