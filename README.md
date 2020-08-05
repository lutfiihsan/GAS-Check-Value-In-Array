# GAS---Check-Value-In-Array
Check Value In Array with array map

function myFunction() {
  const arr_data = ["AA.XXXX", "BB.XXXX", "CC.XXXX", "AA.YYYY"];
  
  const result = arr_data.map(even=>{
    if (even.split('.')[0] === "IT"){
      return 'Internal'
    }else{
      return 'External'
    }
  })
  
  console.log(result);
}

Result :
[20-08-05 09:15:00:226 ICT] [ 'External', 'External', 'External', 'External' ]

