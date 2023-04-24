let LanguageRu =  document.getElementById('RU');
  LanguageRu.onclick = function() { 
    let RuFon = document.getElementById('RU');
    let EngFon = document.getElementById('ENG');
    let UaFon = document.getElementById('UA');  
    RuFon.style.cssText = "background-color: rgb(7, 255, 40); margin: 5px; font-size: 30px; cursor: pointer; border-radius: 5px;";
    UaFon.style.cssText = " margin: 5px; font-size: 30px; cursor: pointer;";
    EngFon.style.cssText = " margin: 5px; font-size: 30px; cursor: pointer;";
    document.getElementById('contentMe').innerHTML = "Русский";
    document.getElementById('name').innerHTML = "Максим Геращенко";
    document.getElementById('diss').innerHTML = "В процессе создания."
  };

  let LanguageEng =  document.getElementById('ENG');
  LanguageEng.onclick = function() { 
    let RuFon = document.getElementById('RU');
    let EngFon = document.getElementById('ENG');
    let UaFon = document.getElementById('UA');
    RuFon.style.cssText = " margin: 5px; font-size: 30px; cursor: pointer;";
    UaFon.style.cssText = " margin: 5px; font-size: 30px; cursor: pointer;";
    EngFon.style.cssText = "background-color: rgb(7, 255, 40); margin: 5px;  font-size: 30px; cursor: pointer; border-radius: 5px; ";
    document.getElementById('contentMe').innerHTML = "English";
    document.getElementById('name').innerHTML = "Maxim Gerashchenko";
    document.getElementById('diss').innerHTML = "In process making."
  };

  let LanguageUa =  document.getElementById('UA');
  LanguageUa.onclick = function() { 
    let RuFon = document.getElementById('RU');
    let EngFon = document.getElementById('ENG');
    let UaFon = document.getElementById('UA');
    RuFon.style.cssText = " margin: 5px; font-size: 30px; cursor: pointer;";
    EngFon.style.cssText = " margin: 5px; font-size: 30px; cursor: pointer;";
    UaFon.style.cssText = "background-color: rgb(7, 255, 40); margin: 5px; font-size: 30px; cursor: pointer; border-radius: 5px;";
    document.getElementById('contentMe').innerHTML = "Українська";
    document.getElementById('name').innerHTML = "Максим Геращенко";
    document.getElementById('diss').innerHTML = "В процесі створення."
  };


  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    
  };
    
    
   
   
  
        
   
   
   
