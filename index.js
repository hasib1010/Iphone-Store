let total = 0;
function clickEventHandle(target) {
    const productName = target.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    
    const newLiContainer = document.getElementById('product-names-container');
    if (newLiContainer.childNodes.length > 5) {
        alert('You can add Heighest 5 product once');
        return;
       }
      
    newLiContainer.appendChild(li);
   
    const price = target.parentNode.parentNode.childNodes[5].innerText.split(' ')[2];

    total = parseInt(total) + parseInt(price);
    const newtotal =  document.getElementById('total').innerText = total;
    document.getElementById('grand-total').innerText = total;
    if (newLiContainer.childNodes.length >= 5 ){
       const discount =  document.getElementById('discount').innerText = ' 500';
       const grandTotal = parseInt(newtotal) - parseInt(discount);
       console.log(grandTotal);
        document.getElementById('grand-total').innerText= grandTotal;
    } 
  
    
}