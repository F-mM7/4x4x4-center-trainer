const N = 24;
const a = [];
for (let x = 0; x < 1 << N; ++x) {
  let k = 0;
  for (let i = 0; i < N; ++i) if (x & (1 << i)) ++k;
  if (k == 4) a.push(x);
}

let cnt = 0;
const st = [];

for (x of a) {
  const y = alg_center_bit(x, turn[0]);
  console.log(x, y);
}

for (x of a)
  for (y of a) {
    if (x & y) continue;
    // console.log(x + "," + y);
    // st.push(x + "," + y);
    ++cnt;
  }
console.log(cnt);
// console.log(st);
