let ex = document.querySelector(".ex")
let sum = 0
for (let i = 0; i < 5; i++) {
    const element = i;
    sum += element
}
console.log(sum)
ex.append(sum)
