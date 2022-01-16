function loader(start_val , current_val){


    return (current_val * 100) / start_val;
    
    
    
 };

//  result


/**
 * result 
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */


 function resultcal(name , roll , clas , Gender , bnagla , eng , math , computer){
  


    return `
    
    name  : ${name}
  
    roll  : ${roll}                 
  
  
   class  : ${clas}                 
  
   Gender : ${Gender}                
  
    <table  id="result" border="1px" width= "500px">
                <tr>
                
                  <th>Subject Name</th>
                  <th>Subject Marks</th>
                
                </tr>
                <tr>
                  <td>BANGLA</td>
                  <td>${bnagla}</td>
                  
               
                </tr>
                <tr>
                  <td>ENGLISH</td>
                  <td>${eng}</td>
                 
                </tr>
                <tr>
                  <td>MATH</td>
                  <td>${math}</td>
                
                </tr>
                <tr>
                  <td>COMPUTER</td>
                  <td>${computer}</td>
                  
                </tr>
              </table> `;
  
  };
  
  
  
  
  
  
  