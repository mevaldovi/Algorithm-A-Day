// tournament winner challenge from algoexpert.com



















// ---------------------- WARNING ANSWER DOWN BELOW --------------------------------  









// const competitions = [
//     ["jacob", "marie"],
//     ["saya", "jacob"],
//     ["marie", "saya"]
// ]

// const results = [0, 1, 0]

// function tournamentWinner(competitions, results) {
//     const map = new Map();

//     for (let i = 0; i < competitions.length; i++) {
//         let [homeTeam, awayTeam] = competitions[i];
//         let result = results[i];
//         if (result === 1) {
//             let homeScore = map.get(homeTeam) || 0
//             map.set(homeTeam, homeScore + 3)
//             console.log('home team score is ' + homeScore)
//         } else {
//             let awayScore = map.get(awayTeam) || 0
//             map.set(awayTeam, awayScore + 3)
//             console.log('away team score is ' + awayScore)
//         }
//     }
//     let currentHighScore = 0;
//     let currentWinner = '';
//     map.forEach((score, team) => {
//         if (currentHighScore < score) {
//             currentHighScore = score;
//             currentWinner = team;
//         }
//     })
//     console.log('and the current winner is.... ' + currentWinner)
//     return currentWinner;

// }

// console.log(tournamentWinner(competitions, results))