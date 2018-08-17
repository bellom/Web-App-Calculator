function multButton() {
//get input 1 and 2 and multipy them
    let val1 = $("#input1").val();
    let val2 = $("#input2").val();
    let mult = "0";
    mult = val1*val2;
    $('#result').html(mult);
};

function sumButton() {
//get input 1 and 2 and sum them

    let val1 = parseFloat($("#input1").val());
    let val2 = parseFloat($("#input2").val());
    let sum = "0";
    sum = (val1+val2);
    $('#result').html(sum);
};

function divideButton() {
//get input 1 and 2 and divide them
    let val1 = $("#input1").val();
    let val2 = $("#input2").val();
    let division = "0";
    division = val1/val2;
    $('#result').html(division);
};

function subButton() {
//get input 1 and 2 and minus them
    let val1 = $("#input1").val();
    let val2 = $("#input2").val();
    let sub = "0";
    sub = val1-val2;
    $('#result').html(sub);
};