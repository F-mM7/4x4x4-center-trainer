function move_sticker(alg) {
  for (c of alg.split(" ")) {
    for (key in target[c])
      for (s of target[c][key])
        [st[key][s[0]], st[key][s[1]], st[key][s[2]], st[key][s[3]]] = [
          st[key][s[3]],
          st[key][s[0]],
          st[key][s[1]],
          st[key][s[2]],
        ];
  }
}

//only need to define the 90 degrees clockwise of outer/inner layer (A/a).
const target = {
  F: { center: [[0, 1, 2, 3]] },
  B: { center: [[4, 5, 6, 7]] },
  R: { center: [[8, 9, 10, 11]] },
  L: { center: [[12, 13, 14, 15]] },
  U: { center: [[16, 17, 18, 19]] },
  D: { center: [[20, 21, 22, 23]] },
  f: {
    center: [
      [8, 21, 14, 19],
      [11, 20, 13, 18],
    ],
  },
  b: {
    center: [
      [9, 17, 15, 22],
      [10, 16, 12, 23],
    ],
  },
  r: {
    center: [
      [1, 17, 7, 21],
      [2, 18, 4, 22],
    ],
  },
  l: {
    center: [
      [0, 20, 6, 16],
      [3, 23, 5, 19],
    ],
  },
  u: {
    center: [
      [0, 12, 4, 8],
      [1, 13, 5, 9],
    ],
  },
  d: {
    center: [
      [2, 10, 6, 14],
      [3, 11, 7, 15],
    ],
  },
};

//generate w
for (c of "FBRLUD".split("")) {
  target[c + "w"] = {};
  for (key in target[c])
    target[c + "w"][key] = [...target[c][key], ...target[c.toLowerCase()][key]];
}

//generate xyz
target.x = {};
for (key in target.Rw)
  target.x[key] = [
    ...target.Rw[key],
    ...target.Lw[key].map((k) => [...k].reverse()),
  ];
target.y = {};
for (key in target.Uw)
  target.y[key] = [
    ...target.Uw[key],
    ...target.Dw[key].map((k) => [...k].reverse()),
  ];
target.z = {};
for (key in target.Fw)
  target.z[key] = [
    ...target.Fw[key],
    ...target.Bw[key].map((k) => [...k].reverse()),
  ];

//generate ' and 2
for (c in target) {
  target[c + "'"] = {};
  for (key in target[c])
    target[c + "'"][key] = target[c][key].map((s) => [...s].reverse());
  target[c + 2] = {};
  for (key in target[c])
    target[c + 2][key] = [...target[c][key], ...target[c][key]];
}
