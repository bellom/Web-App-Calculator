function operations(elem){
    let val1 = parseFloat($("#input1").val());        
    let val2 = parseFloat($("#input2").val());
    let result = "0";
    console.log("testing");
//switch btn using id
    switch(elem.id) {
        case 'mult-btn':
            result = val1*val2;
            break;
        case 'sum-btn':
            result = val1+val2;
            break;
        case 'divide-btn':
            result = val1/val2;
            break;
        case 'sub-btn':
            result = val1-val2;
            break;
    }                
    $('#result').html(result)
}
