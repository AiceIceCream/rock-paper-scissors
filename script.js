let player = document.getElementById("imgshow");
let comp = document.getElementById("imgshow2");
let res = document.getElementById("Result");
let playerVal;

function pkPapel(){
    playerVal = 0;
    player.src = "paper.png";
}

function pkGunting(){
    playerVal = 1;
    player.src = "scissor.png";
}

function pkBato(){
    playerVal = 2;
    player.src = "rock.png";
}

function play(){

    let num = Math.random()
    let randomNumber = num * 3;
    let randomDown = Math.floor(randomNumber);

    if(randomDown === 0){
        comp.src = "paper.png";
        console.log(randomDown);

        if(playerVal == 0){
            res.innerHTML = "--Draw--";
        }if(playerVal == 1){
            res.innerHTML = "--You Win--";
        }if(playerVal == 2){
            res.innerHTML = "--You Lose--";
        }
    }

    if(randomDown === 1){
        comp.src = "scissor.png";
        console.log(randomDown);

        if(playerVal == 0){
            res.innerHTML = "--You Lose--";
        }if(playerVal == 1){
            res.innerHTML = "--Draw--";
        }if(playerVal == 2){
            res.innerHTML = "--You Win--";
        }
    }

    if(randomDown === 2){
        comp.src = "rock.png";
        console.log(randomDown);

        if(playerVal == 0){
            res.innerHTML = "--You Win--";
        }if(playerVal == 1){
            res.innerHTML = "--You Lose--";
        }if(playerVal == 2){
            res.innerHTML = "--Draw--";
        }
    }
}