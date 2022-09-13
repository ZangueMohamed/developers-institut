 let table = document.body.firstElementChild;
 console.log(table);

  let row = document.querySelectorAll('tr')
  console.log(row);

  let newTr = document.getElementsByTagName('tr')[1];
  console.log(newTr);
  for (let i = 1; i <= row.length; i++) {
   let column =document.querySelector(`tr:nth-of-type(${i}) td:nth-of-type(${i}`);
   column.style.backgroundColor = "red";

    console.log(column);
  
}


