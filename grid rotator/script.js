btn5.onclick = () => {  
    const middleNum=btn1.innerHTML; 
    btn1.innerHTML=btn4.innerHTML; 
    btn4.innerHTML=btn7.innerHTML; 
    btn7.innerHTML=btn8.innerHTML; 
    btn8.innerHTML=btn9.innerHTML; 
    btn9.innerHTML=btn6.innerHTML; 
    btn6.innerHTML=btn3.innerHTML; 
    btn3.innerHTML=btn2.innerHTML; 
    btn2.innerHTML=middleNum;  
};

const rotateLeft = [1, 2, 3, 6, 9, 8, 7, 4];
const fixedArr = [...rotateLeft];
const antiClockWiseRotator = () => {
    const digitOne = rotateLeft.shift();
    rotateLeft.push(digitOne);
    for (let i = 0; i < rotateLeft.length; i++) 
    {
      const buttonId = document.querySelector(`#btn${fixedArr[i]}`);
      buttonId.innerText = rotateLeft[i];
    }
  };
  for (let i = 0; i < rotateLeft.length; i++) 
  {
    document
      .querySelector(`#btn${fixedArr[i]}`)
      .addEventListener("click", antiClockWiseRotator);
  };
  