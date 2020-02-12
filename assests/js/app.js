// create DOM element.

const questions = [
    {
        title: "Which of the following is NOT a javascript data type?",
        choices: ["Array", "Object", "Table", "String"],
        answer: "Table"
    },
    {
        title: "Which parenthesis type is used to invoke functions?",
        choices: ["{}", "[]", "||", "()"],
        answer: "()"
    },
    {
        title: "What will this statement return: console.log('7' == 7)",
        choices: ["true", "false", "maybe", "depends"],
        answer: "true"
    },

    {

        title: "What will this statement return: console.log('7' == 7)",
        choices: ["true", "false", "maybe", "depends"],
        answer: "true"

    }
];

let score = 0;
let timer = 60;
let qIndex = 0;
let questionClicked = 0;

$(document).ready(function () { 
    $('#start-button').on('click', function () {
        $('#start-button').addClass('hidden');
        $('#container').addClass('hidden');
        $('.timer').addClass('hidden');
        $('.wrapper').show('hidden');
        showQuestion();
        
        let timeInterval = setInterval(function () {
            if (timer > 0) {
                timer--
                $('#countdown').html(timer);
            } else {
                clearInterval(timeInterval);
            }
        }, 1000);
    });

    function showQuestion(){
        $('#question').text(questions[qIndex].title);
        $('.option1').text(questions[qIndex].choices[0]);
        $('.option2').text(questions[qIndex].choices[1]);
        $('.option3').text(questions[qIndex].choices[2]);
        $('.option4').text(questions[qIndex].choices[3]);    
    };
    
      
    function questionClicked(){
        //    log answers to the questions.
        for (let i = 0; i < questions.length; i++);
        if(this.value === questions[qIndex](i).answer){
            //increment the score.
            score++;
            showQuestion()
        }
        if(qIndex >= 3){
        $('.end-game').removeClass('hidden');
        $(".wrapper").addClass('hidden');
        $('#score').text(score);
            //show score.
        }else{
            // if qIndex is less then 3 show next question.
            qIndex++;
            showQuestion()    
        }     
    };
      
    //display next question.
    //update score.
    //if the user gets to the end of the quiz or runs out of time  
    //hide timer.tally scores and show scores.
});







