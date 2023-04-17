const riddle={
    question:"Висит груша нельзя скушать",
    correctAnswer:"лампа",
    hints:['это сьедобное', 'это фрукт'],
    tries:3,
    checkAnswer(answer){
        if(this.tries>0){
            if(answer == this.correctAnswer){
                alert('Вы угадали!');
            }else{
                alert('Вы не угадали');
                document.getElementById('tries').innerText = --this.tries;
            }
        }
        else{
            alert('Попытки закончились');
        }
    },
}
window.onload= function(){
    document.getElementById('riddle').innerText = riddle.question;
}

function check(){
    const input = document.getElementsByTagName('input')[0];
    const guessedAnswer = input.value;
    if(guessedAnswer){
        riddle.checkAnswer(guessedAnswer.toLowerCase());
    }
    else{
        alert('Пишите правильно');
    }
}

function hint(){
    document.getElementById('firsthint').innerText = riddle.hints[0];
    document.getElementById('secondHintt').innerText = 'Еще одну подсказку';
}
function Secondhint(){
    document.getElementById('secondhint').innerText = riddle.hints[1];
}