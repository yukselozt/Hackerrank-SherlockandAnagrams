var str = "mom";
var slices = [];
var counter = 0;
var temp1 = 0;
var temp2 = 0;
var temp11 = 0;
var len = 0;
for (var i = 0; i < str.length + 1; i++) {
  for (var j = 0; j < str.length + 1; j++) {
    if (str.slice(i, j).length != 0) {
      slices.push(str.slice(i, j));
    }
  }
}
for (var i = 0; i < slices.length; i++) {
  for (var j = i + 1; j < slices.length; j++) {
    if (slices[i] === slices[j]) {
      counter++;
    } else {
      if (slices[i].length == slices[j].length) {
        len = 0;
        for (var z = 0; z < slices[i].length; z++) {
          if (slices[j].includes(slices[i][z])) {
            temp11 = new RegExp(slices[i][z], "gi");
            if (
              slices[j].match(temp11) == null ||
              slices[i].match(temp11) == null
            ) {
            } else {
              temp1 = slices[j].match(temp11).length;
              temp2 = slices[i].match(temp11).length;
            }

            if (temp1 == temp2) {
              len++;
            }
          }
          if (slices[i].length - len == 0) {
            counter++;
          }
        }
      }
    }
  }
}

console.log(counter);
