let main = document.getElementsByClassName("main")[0];
let lis = main.getElementsByTagName('li');
let img1s = [];
let img2s = [];
for (let i = 0; i < lis.length; i++) {
  img1s.push(lis[i].getElementsByTagName("img")[0]);
  img2s.push(lis[i].getElementsByTagName("img")[1]);
}

let oldStr = getTime();
let newStr = null;
setTimeout(() => {
  newStr = getTime();
}, 20)

for (let i = 0; i < img1s.length; i++) {
  img1s[i].src = "./img/" + oldStr.charAt(i) + ".jpg";
};

function getTime () { // 获取时间字符串
  let newDate = new Date();
  let newH = newDate.getHours();
  newH = newH < 10 ? "0" + newH : newH;
  let newM = newDate.getMinutes();
  newM = newM < 10 ? "0" + newM : newM;
  let newS = newDate.getSeconds();
  newS = newS < 10 ? "0" + newS : newS;
  let M1 = newDate.getMilliseconds(); // 获取毫秒
  let newM1 = M1 < 500 ? "c" : "b";
  let newStr = newH + newM1 + newM + newM1 + newS;
  return newStr;
};

function check (oldStr, newStr) { // 用来比较两个字符串不一样的地方
  let arr = [];
  for (let i = 0; i < oldStr.length; i++) {
    if (i != 2 && i != 5) {
      if (oldStr.charAt(i) != newStr.charAt(i)) {
        arr.push([i, newStr.charAt(i)]);
      };
    };
  };
  return arr;
}

setInterval(() => {
  if (!newStr) {return};
  oldStr = newStr;
  newStr = getTime();
  img1s[2].src = "./img/" + oldStr.charAt(2) + ".jpg";
  img1s[5].src = "./img/" + oldStr.charAt(5) + ".jpg";
  let checkArr = check (oldStr, newStr);
  for (let i = 0; i < checkArr.length; i++) {
    let index = checkArr[i][0];
    let num = checkArr[i][1];
    img2s[index].src = "./img/" + num + ".jpg";
    move(lis[index], 500, function () {
      lis[index].getElementsByTagName("img")[0].src = "./img/" + num + ".jpg";
      lis[index].style.transition = "none";
      lis[index].style.top = 0;
    });
  };
}, 16)

function move(element, time, fn) {
  element.style.transition = time + "ms";
  element.style.top = -70 + "px";
  setTimeout(function () {
    fn();
  }, time);
}
