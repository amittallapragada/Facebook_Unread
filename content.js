var cardblur;
document.onreadystatechange = function () {
  if(document.readyState === "complete"){
    	cardblur = document.getElementsByClassName("_1htf");  
		for(x = 0; x < cardblur.length; x++)
		{
			console.log(cardblur[x].innerHTML);
		}
  }
}










