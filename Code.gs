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
