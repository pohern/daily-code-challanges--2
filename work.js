let a = .03125
let b = 0
let c = 2

for (let b = 0; a < 12; b++){
    a = (a + a) * c;
    console.log(a, b, c)
}