function katet()
{
    var kat = parseFloat(document.getElementById("a").value);
    var hyp = parseFloat(document.getElementById("b").value);
    if( hyp>0 && kat>0 && hyp>kat )
    {
        alert( ( Math.sqrt( hyp * hyp - kat * kat ) ) );
    }
    else if( hyp>0 && kat>0 && hyp>kat)
    {
        alert( ( Math.sqrt( hyp * hyp - kat * kat) ) );
    }
    else if(kat>hyp){ 
        alert("Катет не може бути більшим за гіпотенузу");
    }
    else {
        alert("Помилка");
    }
}