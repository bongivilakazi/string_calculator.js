function Add (str){
    let sum = 0;
    let regularExp = new RegExp(/-?\d+/gi);		//regex looking for moe than one negative
    let arr = str.match(regularExp);
    let negatives = [];	
    //str = str.split(/\/\/|;|,|4\n/gi)		//i cant excape digit 4	(e.g.
    if (str == ""){
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            negatives.push(arr[i]);
        }
        else {
            if(parseInt(arr[i]) > 999){
                continue;
            } else {
                sum += parseInt(arr[i]);
            }
        }
    }
    if(negatives.length > 0){
       		 let negNumbers = " ";
       		 for(var i = 0; i < negatives.length; i++){
      			if(i == negatives.length  - 1){
          			negNumbers += negatives[i];
      			}
            else{
             	   	negNumbers += negatives[i] + ",";
            	}
        	} throw ("negatives not allowed " + negNumbers);
    }
    return sum;
}
 console.log(Add("//;\n1000,1,2"));