function getParameterByName(name, url) {
    if (!url) url = window.location.href;            
    name = name.replace(/[\[\]]/g, "\\$&");            
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);            
    if (!results) return null;            
    if (!results[2]) return '';            
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
  
  var topname = getParameterByName('name');
  var topQ = getParameterByName('topQ');
  var middle = getParameterByName('middle');
  var bottom = getParameterByName('bottom');
  var clothes = getParameterByName('clothes');
  var outfits = getParameterByName('outfits');
  var outfitNumber = getParameterByName('outfitNumber');
  var cat = getParameterByName('cat');

  if(topname !== null && topname !== '') {
      $(".container-clothes, .categorize-btn, .outfits-btn").show();   
      $(".select-closet, .outfits").hide();     
      document.getElementById("outfitName").innerHTML = ' - '+topname+'';  
   }else if(outfits !== null && outfits !== ''){
      $(".select-closet, .categorize-btn, .outfits-btn, .left-swipe, .right-swipe,.container-clothes").hide();
      $(".outfits").show();
   }else{
      $(".container-clothes, .categorize-btn, .outfits-btn, .outfits").hide();     
      $(".select-closet").show();           
   }

  // $('.cat-01').click(function(){ 
  //      $('.cat-02').css({ 'bottom':'18%' });
  //      $('.cat-03').css({ 'bottom':'31%' });
  //      $('.cat-04').css({ 'bottom':'45%' });      
  //  }); 

  // document.getElementById("frameOne").src = 'top.html?name='+topname+'';
  // document.getElementById("frameTwo").src = 'middle.html?name='+topname+'';
  // document.getElementById("frameThree").src = 'bottom.html?name='+topname+'';  
  
  $('.reset').click(function(){ document.location.href = "index.html";  });
  $('#jen').click(function(){ document.location.href = "index.html?name=jen";  });
  $('#rach').click(function(){ document.location.href = "index.html?name=rach";  });
  $('#ben').click(function(){ document.location.href = "index.html?name=ben";  });
  $('#carly').click(function(){ document.location.href = "index.html?name=carly";  });
  $('#chris').click(function(){ document.location.href = "index.html?name=chris";  });
  $('#nell').click(function(){ document.location.href = "index.html?name=nell";  });

  if(clothes == "true"){
    var topNum = topQ;
    var middleNum = middle;
    var bottomNum = bottom;
    $('.popup').show();
    setTimeout(function(){  $('.popup').css({'opacity':'0'}); },1000);
    setTimeout(function(){  $('.popup').hide(); },1500);
  }else{
    var topNum = 1;
    var middleNum = 1;
    var bottomNum = 1;
  }

// Start of category btns  

  var setNameone = topname + 'one'; 
  var setNametwo = topname + 'two'; 
  var setNamethree = topname + 'three'; 
  var setNamefour = topname + 'four'; 
  var setNamefive = topname + 'five'; 
  var setNamesix = topname + 'six'; 
  var setNameseven = topname + 'seven'; 
  var setNameeight = topname + 'eight'; 
  var setNamenine = topname + 'nine'; 
  var setNameten = topname + 'ten'; 
  
    if(cat == "one"){
      localStorage.setItem(''+setNameone+'', ''+topQ+ +middleNum+ +bottomNum+'');   var catName = "two";  
    
    }else if(cat == "two"){
      localStorage.setItem(''+setNametwo+'', ''+topQ+ +middleNum+ +bottomNum+'');   var catName = "three";           
    
    }else if(cat == "three"){
      localStorage.setItem(''+setNamethree+'', ''+topQ+ +middleNum+ +bottomNum+'');    var catName = "four";       
    
    }else if(cat == "four"){
      localStorage.setItem(''+setNamefour+'', ''+topQ+ +middleNum+ +bottomNum+'');   var catName = "five";       
    
    }else if(cat == "five"){
      localStorage.setItem(''+setNamefive+'', ''+topQ+ +middleNum+ +bottomNum+'');   var catName = "six";       
    
    }else if(cat == "six"){
      localStorage.setItem(''+setNamesix+'', ''+topQ+ +middleNum+ +bottomNum+'');    var catName = "seven";       
    
    }else if(cat == "seven"){
      localStorage.setItem(''+setNameseven+'', ''+topQ+ +middleNum+ +bottomNum+'');  var catName = "eight";       
    
    }else if(cat == "eight"){
      localStorage.setItem(''+setNameeight+'', ''+topQ+ +middleNum+ +bottomNum+'');  var catName = "nine";        
    
    }else if(cat == "nine"){
      localStorage.setItem(''+setNamenine+'', ''+topQ+ +middleNum+ +bottomNum+'');  var catName = "ten";       
    
    }else if(cat == "ten"){
      localStorage.setItem(''+setNameten+'', ''+topQ+ +middleNum+ +bottomNum+'');   
    
    }else{ 
      var catName = "one"; 
   }

  $('.cat-01').click(function(){ document.location.href = 'index.html?name='+topname+'&clothes=true&topQ='+topNum+'&middle='+middleNum+'&bottom='+bottomNum+'&cat='+catName+'';   });
  $('.outfits-btn').click(function(){ document.location.href = 'index.html?outfits='+topname+'&outfitNumber=localone';  });  


//Start of outfits page  
  if(outfits == "rach"){

    var localone = localStorage.getItem("rachone");
    var localtwo = localStorage.getItem("rachtwo");
    var localthree = localStorage.getItem("rachthree");

    var localfour = localStorage.getItem("rachfour");
    var localfive = localStorage.getItem("rachfive");
    var localsix = localStorage.getItem("rachsix");

    var localseven = localStorage.getItem("rachseven");
    var localeight = localStorage.getItem("racheight");
    var localnine = localStorage.getItem("rachnine");    
    var localten = localStorage.getItem("rachten");    

  }else if(outfits == "jen"){

    var localone = localStorage.getItem("jenone");
    var localtwo = localStorage.getItem("jentwo");
    var localthree = localStorage.getItem("jenthree");

    var localfour = localStorage.getItem("jenfour");
    var localfive = localStorage.getItem("jenfive");
    var localsix = localStorage.getItem("jensix");

    var localseven = localStorage.getItem("jenseven");
    var localeight = localStorage.getItem("jeneight");
    var localnine = localStorage.getItem("jennine");    
    var localten = localStorage.getItem("jenten");       
  
  }else if(outfits == "ben"){

    var localone = localStorage.getItem("benone");
    var localtwo = localStorage.getItem("bentwo");
    var localthree = localStorage.getItem("benthree");

    var localfour = localStorage.getItem("benfour");
    var localfive = localStorage.getItem("benfive");
    var localsix = localStorage.getItem("bensix");

    var localseven = localStorage.getItem("benseven");
    var localeight = localStorage.getItem("beneight");
    var localnine = localStorage.getItem("bennine");    
    var localten = localStorage.getItem("benten");       

  }else if(outfits == "carly"){

    var localone = localStorage.getItem("carlyone");
    var localtwo = localStorage.getItem("carlytwo");
    var localthree = localStorage.getItem("carlythree");

    var localfour = localStorage.getItem("carlyfour");
    var localfive = localStorage.getItem("carlyfive");
    var localsix = localStorage.getItem("carlysix");

    var localseven = localStorage.getItem("carlyseven");
    var localeight = localStorage.getItem("carlyeight");
    var localnine = localStorage.getItem("carlynine");    
    var localten = localStorage.getItem("carlyten");       
   
   }else if(outfits == "chris"){

    var localone = localStorage.getItem("chrisone");
    var localtwo = localStorage.getItem("christwo");
    var localthree = localStorage.getItem("christhree");

    var localfour = localStorage.getItem("chrisfour");
    var localfive = localStorage.getItem("chrisfive");
    var localsix = localStorage.getItem("chrissix");

    var localseven = localStorage.getItem("chrisseven");
    var localeight = localStorage.getItem("chriseight");
    var localnine = localStorage.getItem("chrisnine");    
    var localten = localStorage.getItem("christen");       
  
  }else if(outfits == "nell"){

    var localone = localStorage.getItem("nellone");
    var localtwo = localStorage.getItem("nelltwo");
    var localthree = localStorage.getItem("nellthree");

    var localfour = localStorage.getItem("nellfour");
    var localfive = localStorage.getItem("nellfive");
    var localsix = localStorage.getItem("nellsix");

    var localseven = localStorage.getItem("nellseven");
    var localeight = localStorage.getItem("nelleight");
    var localnine = localStorage.getItem("nellnine");    
    var localten = localStorage.getItem("nellten");       
  }   
    
   
if(outfitNumber !== null && outfitNumber !== ''){  
    $(".container-clothes, .outfitArrow").show();      
    
    if(outfitNumber == 'localone'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localten';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localtwo';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 001';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localone.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localone.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localone.charAt(2)+'.jpg';            
    
    }else if(outfitNumber == 'localtwo'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localone';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localthree';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 002';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localtwo.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localtwo.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localtwo.charAt(2)+'.jpg';            
    
    }else if(outfitNumber == 'localthree'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localtwo';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localfour';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 003'; 
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localthree.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localthree.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localthree.charAt(2)+'.jpg';         
    
    }else if(outfitNumber == 'localfour'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localthree';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localfive';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 004';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localfour.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localfour.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localfour.charAt(2)+'.jpg';         
    
    }else if(outfitNumber == 'localfive'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localfour';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localsix';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 005';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localfive.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localfive.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localfive.charAt(2)+'.jpg';         
    
    }else if(outfitNumber == 'localsix'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localfive';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localseven';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 006';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localsix.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localsix.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localsix.charAt(2)+'.jpg';         
   
    }else if(outfitNumber == 'localseven'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localsix';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localeight';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 007';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localseven.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localseven.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localseven.charAt(2)+'.jpg';         
    
    }else if(outfitNumber == 'localeight'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localseven';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localnine';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 008';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localeight.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localeight.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localeight.charAt(2)+'.jpg';         
    
    }else if(outfitNumber == 'localnine'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localeight';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localten';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 009';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localnine.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localnine.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localnine.charAt(2)+'.jpg';         
   
    }else if(outfitNumber == 'localten'){  
      $('#outfitArrowLeft').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localnine';  });      
      $('#outfitArrowRight').click(function(){ document.location.href = 'index.html?outfits='+outfits+'&outfitNumber=localone';  });          
      document.getElementById("outfitName").innerHTML = ' - Outfit 010';  
      document.getElementById("img-top").src = 'imgs/'+outfits+'-top'+localten.charAt(0)+'.jpg';
      document.getElementById("img-middle").src = 'imgs/'+outfits+'-middle'+localten.charAt(1)+'.jpg';
      document.getElementById("img-bottom").src = 'imgs/'+outfits+'-bottom'+localten.charAt(2)+'.jpg';         
    }
  
}   
  
  $('.closetIcon').click(function(){ document.location.href = 'index.html?name='+outfits+''; });  
//End of outfits page

if(topname == "ben"){  
  var topNumUser = 39;
  var middleNumUser = 9;
  var bottomNumUser = 7;

}else if(topname == "carly"){
  var topNumUser = 43;
  var middleNumUser = 13;
  var bottomNumUser = 0;

}else if(topname == "chris"){
  var topNumUser = 12;
  var middleNumUser = 7;
  var bottomNumUser = 0;

}else if(topname == "nell"){
  var topNumUser = 13;
  var middleNumUser = 8;
  var bottomNumUser = 11;

}else if(topname == "zach"){
  var topNumUser = 23;
  var middleNumUser = 7;
  var bottomNumUser = 12;

}else{
  var topNumUser = 6;
  var middleNumUser = 6;
  var bottomNumUser = 6;
}

 var topNumUserMin = Number(topNumUser) - 1;
 var middleNumUserMin = Number(middleNumUser) - 1;
 var bottomNumUserMin = Number(bottomNumUser) - 1;

// Beginning of slide through feature
    

  $('#right-top').click(function(){     
    topNum++; 
    if(topNum == Number(topNumUser)){ topNum = 1; }else if(topNum == 0){ topNum = Number(topNumUserMin)}
    document.getElementById("img-top").src = 'imgs/'+topname+'-top'+topNum+'.jpg';   
  });
  
  $('#left-top').click(function(){ 
    topNum--; 
    if(topNum == Number(topNumUser)){ topNum = 1; }else if(topNum == 0){ topNum = Number(topNumUserMin)}
    document.getElementById("img-top").src = 'imgs/'+topname+'-top'+topNum+'.jpg';   
  });


  $('#right-middle').click(function(){ 
    middleNum++; 
    if(middleNum == Number(middleNumUser)){ middleNum = 1; }else if(middleNum == 0){ middleNum = Number(middleNumUserMin)}
    document.getElementById("img-middle").src = 'imgs/'+topname+'-middle'+middleNum+'.jpg';
  });
  $('#left-middle').click(function(){ 
    middleNum--;
    if(middleNum == Number(middleNumUser)){ middleNum = 1; }else if(middleNum == 0){ middleNum = Number(middleNumUserMin)}
    document.getElementById("img-middle").src = 'imgs/'+topname+'-middle'+middleNum+'.jpg';   
  });


  $('#right-bottom').click(function(){ 
    bottomNum++; 
    if(bottomNum == Number(bottomNumUser)){ bottomNum = 1; }else if(bottomNum == 0){ bottomNum = Number(bottomNumUserMin)}
    document.getElementById("img-bottom").src = 'imgs/'+topname+'-bottom'+bottomNum+'.jpg';   
  });
  
  $('#left-bottom').click(function(){ 
    bottomNum--; 
    if(bottomNum == Number(bottomNumUser)){ bottomNum = 1; }else if(bottomNum == 0){ bottomNum = Number(bottomNumUserMin)}
    document.getElementById("img-bottom").src = 'imgs/'+topname+'-bottom'+bottomNum+'.jpg';   
  });
// End of slide through feature  

  
// Beginning of default view of closet view
   if(topname !== null && topname !== '') {
  
    if(topNum == 6){ topNum = 1; }else if(topNum == 0){ topNum = 5}
    document.getElementById("img-top").src = 'imgs/'+topname+'-top'+topNum+'.jpg'; 
    if(middleNum == 6){ middleNum = 1; }else if(middleNum == 0){ middleNum = 5}
    document.getElementById("img-middle").src = 'imgs/'+topname+'-middle'+middleNum+'.jpg';
    if(bottomNum == 6){ bottomNum = 1; }else if(bottomNum == 0){ bottomNum = 5}
    document.getElementById("img-bottom").src = 'imgs/'+topname+'-bottom'+bottomNum+'.jpg';      
   }else{  }
// End of default view of closet view   

//localStorage.removeItem("rachone");