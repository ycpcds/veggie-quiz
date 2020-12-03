function displayResults() {
    if (already_answered.length != 8) {
        showResult("res_default");
    } else {
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
            showResult("res1");
        } else if (total >= 13 && total <= 24) {
            showResult("res2");
        } else if (total >=25 && total <= 36) {
            showResult("res3");
        } else {
            showResult("res_default");
        }
    }
}


function showResult(res_id) {
    $result = document.getElementById(res_id);
    /* Display result div element with id "res_id" */
    $result.style.display = "block";
}