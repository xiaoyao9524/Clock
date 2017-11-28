let main = document.getElementsByClassName("main")[0];
let lis = main.getElementsByTagName('li');

let oldStr = "";

for (let i = 0; i < lis.length; i++) {
  lis[i].style.transform = "rotateX("+ (parseInt(oldStr.charAt(i)) * 36) +"deg)";
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
        arr.push([i, parseInt(newStr.charAt(i))]);
      };
    };
  };
  return arr;
}

setInterval(() => {
  oldStr = getTime();
  for (let i = 0; i < lis.length; i++) {
    if (i !== 2 && i !== 5){
      lis[i].style.transform="rotateX("+ (parseInt(oldStr.charAt(i)) * 36) +"deg)";
    }
  };
}, 1000)

function move(element, time, fn, deg) {
  element.style.transform="rotateX("+ deg +"deg)";
  setTimeout(function () {
    fn();
  }, time);
}
