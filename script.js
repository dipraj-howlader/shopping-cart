
//  2nd part

const CaseMinus = document.getElementById('CaseMinus');
CaseMinus.addEventListener('click', function(){
    handleProductChange(false);
})
const casePlus = document.getElementById('CasePlus');
casePlus.addEventListener('click', function(){
    handleProductChange(true);
})

function handleProductChange(isIncrease){
    const caseInput = document.getElementById('changeOfValue');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(isIncrease == true ){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = caseTotal;
}

// 1st part

const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener('click', function(){
    firstProductChange(false);
})
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener('click', function(){
    firstProductChange(true);
})

function firstProductChange(isIncrease){
    const caseInput = document.getElementById('minusValue');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if(isIncrease == true ){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount > 0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 1219;
    document.getElementById('iphonePrice').innerText = caseTotal;
}