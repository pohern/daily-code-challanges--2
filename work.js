// let a = .03125
// let b = 0
// let c = 2

// for (let b = 0; a < 12; b++){
//     a = (a + a) * c;
//     console.log(a, b, c)
// }

// function normalize(input_time) {
//   let str_time = new Date(input_time * 1000).toLocaleString("en-US", { hour12: false });
//   let cool = str_time.slice(9);
//   let hour =cool.slice(1,3)
//   while (hour !== 01){
//       input_time -= (60*60)
//       let str_time = new Date(input_time * 1000).toLocaleString("en-US", {
//         hour12: false,
//       });let cool = str_time.slice(9);
//       let hour = cool.slice(1, 3);
//       console.log(hour)
//   }
//   return str_time;
// }

// console.log(normalize(170002));


// You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

function differentRightMostBit(n, m) {
    return (n^m) & -(n^m);
}

console.log(differentRightMostBit(11, 13))
console.log(differentRightMostBit(7, 23));

function solution(T) {
    if (34 <= T && T < 35){
        return "Hypothermia"
    } 
    else if (T === 35){
        return "Normal"
    } 
    else if (T > 35 && T < 41){
        return "Fever"
    } 
    else if (41 <= T  && T < 42){
        return "Hyperpyrexia"
    } 
    else {
        return "Invalid Entry"
    }
}
console.log(solution(35.3))
