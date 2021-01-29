



function caseProductChange(product, isIncrease) {

    const productCount = getInputValue(product);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;

    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;

    calculateTotal();
}

function calculateTotal(){
   
   const phoneCount = getInputValue('phone');

   const caseCount = getInputValue('case');

   const totalPrice = phoneCount * 1219 + caseCount * 59;

   document.getElementById('total-price').innerText = '$' + totalPrice;

   // tax 10%
   const tax = Math.round(totalPrice*0.1);

   document.getElementById('tax-amount').innerText = '$' + tax;

   // grant total

   const grandTotal = totalPrice + tax;
   document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-count');
   const productCount = parseInt(productInput.value);
   return productCount;
}


// // 1st part


// function phoneProductChange(isIncrease) {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('iphonePrice').innerText = phoneTotal;
// }

// //  2nd part


// function caseProductChange(isIncrease) {
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = caseTotal;
// }
