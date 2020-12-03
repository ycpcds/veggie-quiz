let clicked = {
    a : false,
    b : false,
    c : false,
    d : false, 
}

let answers = {
    q1 : null,
    q2 : null,
    q3 : null,
    q4 : null,
    q5 : null,
    q6 : null,
    q7 : null,
    q8 : null
}; 

let already_answered = Object.keys(answers).filter(function(key) {return answers[key] != null});

function finalAns(opt) {
    let ans = opt.slice(-1);
    let q = opt.slice(0,-1);
    /* length of already_clicked = 1 if another answer is already selected */
    /* length of already_clicked = 0 if no other answers are selected */    
    let already_clicked = Object.keys(clicked).filter(function(key) {return clicked[key] === true;})
    if (answers[q] === null) {
        if (already_clicked.length) {
            deselectAns(q, already_clicked[0]);
            finalAns(opt);
        } else {
            if (!(clicked[ans])){
                selectAns(q, ans);
            } else {
                deselectAns(q, ans);
            }
        }    
    } else { 
        deselectAns(q, answers[q]);
        finalAns(opt);
    }  
    
}

function selectAns(q, ans) {
    $opt = document.getElementById(q.concat(ans));
    $opt.style.border = "thick solid lightgrey";
    clicked[ans] = true;
    answers[q] = ans;
}

function deselectAns(q, ans) {
    $opt = document.getElementById(q.concat(ans));
    $opt.style.border = "hidden";
    clicked[ans] = false;
    answers[q] = null; 
}


function submitAllAnswers() {
    /* First check that all questions have been answered */
    let already_answered = Object.keys(answers).filter(function(key) {return answers[key] != null});
    if (already_answered.length != 8) {
        alert("Please answer all of the questions!")
    } /* If all questions have been answered, redirect to the results page */
    else {
        let total = 0;
        for (x in answers) {
            if (answers[x]=='a') {
                total = total+1;
            } else if (answers[x]=='b') {
                total = total+2;
            } else if (answers[x]=='c') {
                total = total+3;
            } else if (answers[x]=='d') {
                total = total+4;
            }
        }
        if (total >= 0 && total <= 12) {
            window.location.href="result1.html";
        } else if (total >= 13 && total <= 24) {
            window.location.href="result2.html";
        } else if (total >=25 && total <= 36) {
            window.location.href="result3.html";
        } else {
            window.location.href="result_default.html";
        }
    }
}

