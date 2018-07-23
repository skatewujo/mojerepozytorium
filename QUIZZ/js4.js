

function submitAnswers(){
	var total = 22;
	var score = 0;
	
	//qet user outputs
	var q1 = document.forms["billingtest"]["q1"].value;
	var q2 = document.forms["billingtest"]["q2"].value;
	var q3 = document.forms["billingtest"]["q3"].value;
	var q4 = document.forms["billingtest"]["q4"].value;
	var q5 = document.forms["billingtest"]["q5"].value;
	var q6 = document.forms["billingtest"]["q6"].value;
	var q7 = document.forms["billingtest"]["q7"].value;
	var q8 = document.forms["billingtest"]["q8"].value;
	var q9 = document.forms["billingtest"]["q9"].value;
	var q9 = document.forms["billingtest"]["q9"].value;
	var q10 = document.forms["billingtest"]["q10"].value;
	var q11 = document.forms["billingtest"]["q11"].value;
	var q12 = document.forms["billingtest"]["q12"].value;
	var q13 = document.forms["billingtest"]["q13"].value;
	var q14 = document.forms["billingtest"]["q14"].value;
	var q15 = document.forms["billingtest"]["q15"].value;
	var q15 = document.forms["billingtest"]["q15"].value;
	var q16 = document.forms["billingtest"]["q16"].value;
	var q17 = document.forms["billingtest"]["q17"].value;
	var q18 = document.forms["billingtest"]["q18"].value;
	var q19 = document.forms["billingtest"]["q19"].value;
	var q20 = document.forms["billingtest"]["q20"].value;
	var q21 = document.forms["billingtest"]["q21"].value;
	var q22 = document.forms["billingtest"]["q22"].value;
	
	//validation


	
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	
		
		else if(q20 == null || q20 == ''){
		alert('You missed question 20 a');
		return false;}
			
		else if(q21 == null || q21 == ''){
		alert('You missed question 20 b');
		return false;}
			
		else if(q22 == null || q22 == ''){
			alert('You missed question 21');
			return false;
		}
	
		
	}
	
	
	// set correct answer
            // 1   2    3     4    5    6    7   8    9    10   11   12   13   14   15  16    17   18   19  20   21
var answers =["b", "a", "b", "a", "b", "c", "c", "c", "c","d", "c", "a", "c", "a", "a", "a", "a", "a", "d", "b", "b" ];

	//check answers	
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
		score++;
		}
	}
	if (q22.toLowerCase() == "kulut"){
		score++;
	}
	
	
	//display results
	var finalScore = document.getElementById("results").innerHTML = ((100/total) * score);
	var results = document.getElementById('results');
	results.innerHTML = '<h2><span>'+age+'</span> scored <span>'+score+'</span> out of <span>'+total+'</span> that is <span>'+finalScore.toFixed(2)+'</span>%</span></h2>';
	alert(+age+' You scored '+score+' out of ' +total+ ' that is '+finalScore.toFixed(2)+'%');
	
	return false;

}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
   
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 
     $('html, body').animate({scrollTop:0}, 'veryslow');
}