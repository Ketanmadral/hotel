function registerClick(){

    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblDate").innerHTML = document.getElementById("txtDate").value;
   document.getElementById("lblPerson").innerHTML = document.getElementById("txtPerson").value;
    
   var rname = " ";
   var rcost;
   var amename = " ";
   var amecost;
   var total;
   var balance;
  
   
   
 
 var days = document.getElementById("txtDay").value;
 var advamt = document.getElementById("advAmt").value;
   
 var delux = document.getElementById("deluxRoom");
  var suite = document.getElementById("suiteRoom");
  
  var ac = document.getElementById("acAmenities");
  var locker = document.getElementById("lockerAmenities");
  
  
  
  
  if(delux.checked){
    rname = delux.value;
    rcost = 2500;
  }
   
 if(suite.checked){
    rname = suite.value;
    rcost = 4000;
  }
    
 if(ac.checked){
    amename += ac.value + "<br>";
    amecost = 1000;
    rcost = rcost + amecost ;
  }
  
if(locker.checked){
    amename += locker.value + "<br>";
    amecost = 300;
    rcost = rcost + amecost ;
  }

 
 
  
  
  total = rcost * days;
  
 
  
  balance = total - advamt;
  
document.getElementById("lblDay").innerHTML = days;
  
  
document.getElementById("lblAdvance").innerHTML = advamt;
  
  document.getElementById("lblRoom").innerHTML = rname;
  
 document.getElementById("lblAmenities").innerHTML = amename;
 
 document.getElementById("lblBalance").innerHTML = balance;
  
  
  
  
}