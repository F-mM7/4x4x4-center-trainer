let d;
let dp_st = [];
let set_st = new Set();

const goal = "61440,3840";

function get_initial_st() {
  let white = 0;
  let yellow = 0;
  for (let i = 0; i < 24; ++i) {
    if (sticker.center[i] == 4) white |= 1 << i;
    if (sticker.center[i] == 5) yellow |= 1 << i;
  }
  const st0 = String(white) + "," + String(yellow);

  d = 0;
  dp_st = [{}];
  set_st.clear();

  for (s of turn) {
    if (!dp_st[0][alg_st(st0, s)]) dp_st[0][alg_st(st0, s)] = [];
    dp_st[0][alg_st(st0, s)].push(s);
  }

  for (st in dp_st[d]) set_st.add(st);

  console.log(set_st);
}

function search() {
  if (set_st.has(goal)) {
    console.log(dp_st[d][goal]);
    return;
  }

  dp_st[d + 1] = {};
  for (st in dp_st[d]) {
    for (let i = 0; i < 27; ++i) {
      const nst = alg_st(st, move_name(i));
      if (set_st.has(nst)) continue;
      if (!dp_st[d + 1][nst]) dp_st[d + 1][nst] = [];
      dp_st[d + 1][nst].push(i);
    }
  }

  ++d;
  for (st in dp_st[d]) set_st.add(st);

  console.log(dp_st);
}
