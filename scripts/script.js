




document.addEventListener("DOMContentLoaded", function() {

	let UpSkillSet = () => {
        // let SkillCont = document.getElementById('skillset');
        // let SkillContItems = document.getElementById('skillsetitems');
        // let Avatar = document.getElementById('Avatar');
        // let Name = document.getElementById('name');
        let Ramka = document.getElementById('ramka');
      
        

        
        Avatar.style.cssText= ' top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute;  transition-duration: 2s; width: 200px; height: 200px; opacity: 1;  user-select: none;  text-align: center;    ' ;
        Ramka.style.cssText= ' float: left; position: relative; display: inline-block; margin-left: auto; margin-right: auto;  width: 250px; height: 250px; background-color: rgb(247, 247, 247);  border-radius: 250px; transition-duration: 2s; opacity: 1;  user-select: none; margin: 20px; text-align: center;    ' ;  
        //  SkillCont.style.cssText= ' margin-top: 10px; transition-duration: 2s; width: 550px; height: 100px; opacity: 1;  ' ;
        //  Name.style.cssText= ' float: left; font-size: 25px; transition-duration: 2s; font-size: 45px;  display: flex; justify-content:center; user-select: none;  opacity: 1;   ' ;
        
         
         
    }
    
    
    
    UpSkillSet();

});

function fadeIn(element) {
    let op = 0.1;  // начальное значение прозрачности
    element.style.display = 'block';
    let timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;  // увеличиваем прозрачность с каждым шагом
    }, 50); // устанавливаем интервал обновления в 50 миллисекунд
  }
  
  fadeIn(document.getElementById('my-block')); // вызываем функцию для нашего блока


  function slide1 () {
    let k1 = document.getElementById('1');
    let k2 = document.getElementById('2');
    let k3 = document.getElementById('3');
    let k4 = document.getElementById('4');

    k1.style.cssText= '  opacity: 1; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
    k2.style.cssText= ' opacity: 0; transition: 0.6s;  position: absolute; width: 100%; height: 100%;' ;
    k3.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%;  ' ;
    k4.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%;  ' ;
  }
  
  function slide2 () {
    let k1 = document.getElementById('1');
    let k2 = document.getElementById('2');
    let k3 = document.getElementById('3');
    let k4 = document.getElementById('4');

    k1.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute;  width: 100%; height: 100%; ' ;
    k2.style.cssText= ' opacity: 1; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
    k3.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%;  ' ;
    k4.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute;  width: 100%; height: 100%; ' ;
  }


  function slide3 () {
    let k1 = document.getElementById('1');
    let k2 = document.getElementById('2');
    let k3 = document.getElementById('3');
    let k4 = document.getElementById('4');

    k1.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
    k2.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
    k3.style.cssText= '  opacity: 1; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
    k4.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
  }

  function slide4 () {
    let k1 = document.getElementById('1');
    let k2 = document.getElementById('2');
    let k3 = document.getElementById('3');
    let k4 = document.getElementById('4');

    k1.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
    k2.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute;  width: 100%; height: 100%;' ;
    k3.style.cssText= ' opacity: 0; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
    k4.style.cssText= ' opacity: 1; transition: 0.6s; position: absolute; width: 100%; height: 100%; ' ;
  }


  let a = 1;
  

  
  console.log(a);
  const jopa = document.querySelector(".jopa");

  

 


  
  jopa.addEventListener("click", ()=> {
    a++;
    // a = (a < 3) ? "0" + a : a;
    a = Math.min(a, 4);
    console.log(a);
    if (a == 1) {
      
      slide1();
    }
  
    if (a == 2) {
      
      slide2();
    }
  
    if (a == 3 ) {
      
      slide3();
    }
  
    if (a == 4) {
      
      slide4();
    }
    
    // if (a >= 4 ) {
    //   a = 0;
    // }

  } );

  const jopa2 = document.querySelector(".jopa2");

 

  jopa2.addEventListener("click", ()=> {
    
    --a;
    a = Math.max(a, 1);
    console.log(a);
   
    if (a == 1) {
      
      slide1();
    }
  
    if (a == 2) {
      
      slide2();
    }
  
    if (a == 3 ) {
      
      slide3();
    }
  
    if (a == 4) {
      
      slide4();
    }

    // if (a <= 1 ) {
    //   a = 5;
    // }
  } );

  



  
  
