const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const randomLowerCase = x => lowercase[Math.floor(Math.random() * x)]
const randomUpperCase = x => lowercase[Math.floor(Math.random() * x)]
const randomNumbers = x => numbers[Math.floor(Math.random() * x)]

const caseCrypto = [lowercase, numbers, uppercase]

function cryptoHash(x) {
    
    let hash = '';

    for(let i = 0; i < x ; i++) {
      
       const y = Math.floor(Math.random() * 3); 

       if(y == 0){
            hash += randomLowerCase(26)
       } else if(y === 1) {
            hash += randomUpperCase(26)
       } else if(y === 2) {
            hash += randomNumbers(11)
       }

       console.log(y)
    }

    return hash;
}

console.log(cryptoHash(20))