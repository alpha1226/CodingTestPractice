function solution(w, h) {
  var answer = 1;

  console.log(w, h)

  let ratioX = w / h
  let ratioY = h / w

  console.log(ratioX, ratioY)

  let realX = 0, realY = 0;
  let i = 0;

  while(true){
    if(realX === w && realY === h) break;

    realX += ((w*i)/h);
    realY += ((h*i)/w);
    console.log(realX, realY)
    i++;
  }
  
  return answer;
}


console.log(solution(8, 12))