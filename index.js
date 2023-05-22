var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
 var inputtypeValue,resulttypeValue;
//  add  listener
  input.addEventListener("keyup",myResult);
  inputtype.addEventListener("change",myResult);
  resulttype.addEventListener("change",myResult);
    

  //taking initial value
  inputtypeValue = inputtype.value;
  resulttypeValue = resulttype.value;
  
  function myResult(){
                                
    inputtypeValue = inputtype.value;
    resulttypeValue = resulttype.value;


      if(inputtypeValue === "meter" &&   resulttypeValue === "kilometer"){
             result.value = Number(input.value)*0.001;
      }else if(inputtypeValue === "meter" &&   resulttypeValue === "centimeter"){
        result.value = Number(input.value)*100;
 }else if(inputtypeValue === "meter" &&   resulttypeValue === "meter"){
              result.value = input.value;
       }else if(inputtypeValue === "meter" &&   resulttypeValue === "millimeter"){
        result.value = Number(input.value)*1000;
 }else if(inputtypeValue === "meter" &&   resulttypeValue === "micrometer"){
  result.value = Number(input.value)*1000000;
}else if(inputtypeValue === "meter" &&   resulttypeValue === "nanometer"){
  result.value = Number(input.value)*1000000000;

}else if(inputtypeValue === "kilometer" &&   resulttypeValue === "kilometer"){
  result.value = input.value;
}else if(inputtypeValue === "kilometer" &&   resulttypeValue === "meter"){
  result.value = Number(input.value)*1000;
}else if(inputtypeValue === "kilometer" &&   resulttypeValue === "centimeter"){
  result.value = Number(input.value)*100000;
}else if(inputtypeValue === "kilometer" &&   resulttypeValue === "micrometer"){
  result.value = Number(input.value)*1000000000;
}else if(inputtypeValue === "kilometer" &&   resulttypeValue === "nanometer"){
  result.value = Number(input.value)*1000000000000;
}else if(inputtypeValue === "kilometer" &&   resulttypeValue === "millimeter"){
  result.value = Number(input.value)*1000000;
}    
else if(inputtypeValue === "centimeter" &&   resulttypeValue === "kilometer"){
  result.value = Number(input.value)*0.00001;
}else if(inputtypeValue === "centimeter" &&   resulttypeValue === "meter"){
  result.value = Number(input.value)*0.01;
}else if(inputtypeValue === "centimeter" &&   resulttypeValue === "centimeter"){
  result.value = input.value;
}else if(inputtypeValue === "centimeter" &&   resulttypeValue === "micrometer"){
  result.value = Number(input.value)*10000;
}else if(inputtypeValue === "centimeter" &&   resulttypeValue === "nanometer"){
  result.value = Number(input.value)*10000000;
}else if(inputtypeValue === "centimeter" &&   resulttypeValue === "millimeter"){
  result.value = Number(input.value)*10;
}

else if(inputtypeValue === "micrometer" &&   resulttypeValue === "kilometer"){
  result.value = Number(input.value)*0.00001;
}else if(inputtypeValue === "micrometer" &&   resulttypeValue === "meter"){
  result.value = Number(input.value)*0.000001;
}else if(inputtypeValue === "micromete" &&   resulttypeValue === "centimeter"){
  result.value = Number(input.value)*0.0001;
}else if(inputtypeValue === "micrometer" &&   resulttypeValue === "micrometer"){
  result.value = input.value;
}else if(inputtypeValue === "micrometer" &&   resulttypeValue === "nanometer"){
  result.value = Number(input.value)*1000;
}else if(inputtypeValue === "micrometer" &&   resulttypeValue === "millimeter"){
  result.value = Number(input.value)*0.001;
}

else if(inputtypeValue === "nanometer" &&   resulttypeValue === "kilometer"){
  result.value = Number(input.value)*0.000000000001;
}else if(inputtypeValue === "nanometer" &&   resulttypeValue === "meter"){
  result.value = Number(input.value)*0.000000001;
}else if(inputtypeValue === "nanometer" &&   resulttypeValue === "centimeter"){
  result.value = Number(input.value)*0.00000001;
}else if(inputtypeValue === "nanometerr" &&   resulttypeValue === "micrometer"){
 result.value = Number(input.value)*0.001;
}else if(inputtypeValue === "nanometer" &&   resulttypeValue === "nanometer"){
  result.value = input.value;
}else if(inputtypeValue === "nanometer" &&   resulttypeValue === "millimeter"){
  result.value = Number(input.value)*0.001;
}

else if(inputtypeValue === "millimeter" &&   resulttypeValue === "kilometer"){
  result.value = Number(input.value)*0.000001;
}else if(inputtypeValue === "millimeter" &&   resulttypeValue === "meter"){
  result.value = Number(input.value)*0.001;
}else if(inputtypeValue === "millimeter" &&   resulttypeValue === "centimeter"){
  result.value = Number(input.value)* 0.1;
}else if(inputtypeValue === "millimeter" &&   resulttypeValue === "micrometer"){
  result.value = Number(input.value)*1000
}else if(inputtypeValue === "millimeter" &&   resulttypeValue === "nanometer"){
  result.value = Number(input.value)*1,000,000;
}else if(inputtypeValue === "millimeter" &&   resulttypeValue === "millimeter"){
  result.value = input.value;
}





  }
 

