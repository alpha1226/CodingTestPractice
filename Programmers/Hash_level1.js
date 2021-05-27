/**
 * Type: hash
 * Level: 1
 * Title: 완주하지 못한 선수
 * on 2021.05.27
 * @param [] participant 참여 선수
 * @param [] completion  완주 선수
 * @returns [] 완주하지 못한 선수
 * 
 * 결과
 * 정확성 50
 * 효율성 500
 * 총     100
 **/ 

run()

function run() {
    console.log('start run')
    let participantCase1 = ["leo", "kiki", "eden"]
    let completionCase1 = ["eden", "kiki"]
    let answer1 = 'leo'
    let result1 = solution(participantCase1, completionCase1)

    let participantCase2 = ["marina", "josipa", "nikola", "vinko", "filipa"]
    let completionCase2 = ["josipa", "filipa", "marina", "nikola"]
    let answer2 = 'vinko'
    let result2 = solution(participantCase2, completionCase2)

    let participantCase3 = ["mislav", "stanko", "mislav", "ana"]
    let completionCase3 = ["stanko", "ana", "mislav"]
    let answer3 = 'mislav'
    let result3 = solution(participantCase3, completionCase3)

    console.log('result')
    console.log('case1: '+(answer1===result1? 'success': 'failed'))
    console.log('case2: '+(answer2===result2? 'success': 'failed'))
    console.log('case3: '+(answer3===result3? 'success':'failed'))
}

function solution(participant, completion) {
    var answer = '';

    participant.sort()
    completion.sort()
    
    participant.forEach((item,index) => {
        if (completion[index] !== item && !answer) {
            answer = item;
            return answer
        }
    })
    return answer;
}