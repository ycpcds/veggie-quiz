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
        return false
    } /* If all questions have been answered, redirect to the results page */
    else {
        window.location.href="result.html"
    }
}