let round = prompt("จำนวนรอบที่เล่น")
let sum = 0
for(var i = 0 ; i < round ; i++){
    var answer = prompt(" หัว หรือ ก้อย ครั้งที่ " + (i + 1) )
    var random_answer = ""
    if(Math.floor(Math.random() * 10) <= 4){
        random_answer = "หัว"
    }
    else{
        random_answer = "ก้อย"
    }

    if(answer == random_answer){
        alert("ตอบถูก ยินดีด้วย")
        sum = sum + 1
    }
    else{
        alert("ตอบผิด เสียใจด้วย")
    }
    document.getElementById("game-list").innerHTML += "สุ่มครั้งที่ " + (i + 1) + " ได้ " + random_answer + " ตอบ " + answer + "<br>"
}
document.getElementById("result").innerHTML = "คะแนนที่ได้ = " + sum

    
    
        
    