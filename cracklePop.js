function cracklePop(){
    for(let i = 1; i <= 100; i++){
        if(i % 15 === 0){
            console.log("CracklePop")
        }
        if(i % 3 === 0){
            console.log("Crackle")
        }
        if(i % 5 === 0){
            console.log("Pop")
        }
        console.log(i)
    }
}

cracklePop();

//this was submitted for recurse center