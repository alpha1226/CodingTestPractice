function run () {
  let genres = [ 'classic', 'pop', 'classic', 'classic', 'pop' ]
  let plays = [500, 600, 150, 800, 2500]
  let result = solution(genres, plays)
  console.log(result)

  console.log('------------------------------')
  let genres2 = [ 'classic', 'pop', 'test', 'classic', 'classic', 'pop', 'test', 'test', 'test', 'test' ]
  let plays2 = [500, 600, 130, 150, 800, 2500, 100, 100, 100, 130]
  let result2 = solution(genres2, plays2)
  console.log(result2)
}

function solution(genres, plays) {
  var answer = [];
  let genresMap = new Map()
  let songArray = []
  genres.forEach((item, index) => {
    !genresMap.get(item)? genresMap.set(item, plays[index]): genresMap.set(item, genresMap.get(item)+plays[index])
    songArray.push([genres[index], plays[index], index])
  })
  let genresMapSort = new Map([...genresMap.entries()].sort((a,b) => b[1] - a[1]))
  console.log(genresMapSort)

  console.log(songArray)
  songArray.sort((a, b) => {
    if(a[1] < b[1]) return 1
    else if(a[1] === b[1]) {
      if(a[2]<b[2]) return -1
      else return 1 
    }
    else return -1
  })
  // console.log(songArray)

  genresMapSort.forEach((value, key) => {
    // console.log(key, value)
    let flag = false 
    for(let i=0; i<songArray.length;i++){
      // console.log(songArray[i])
      if(key === songArray[i][0]) {
        answer.push(songArray[i][2])
        if(flag) break; else flag =  flag = true
      }
     
    }
  })
  return answer;
}

run()