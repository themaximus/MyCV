




document.addEventListener("DOMContentLoaded", function() {

	let UpSkillSet = () => {
        let SkillCont = document.getElementById('skillset');
        let SkillContItems = document.getElementById('skillsetitems');
        // let Avatar = document.getElementById('Avatar');
        let Name = document.getElementById('name');
        let Ramka = document.getElementById('ramka');
        

        
        Avatar.style.cssText= ' top: 50%; left: 50%; transform: translate(-50%, -50%); position: absolute;  transition-duration: 2s; width: 200px; height: 200px; opacity: 1;  user-select: none;  text-align: center;    ' ;
        Ramka.style.cssText= ' float: left; position: relative; display: inline-block; margin-left: auto; margin-right: auto;  width: 250px; height: 250px; background-color: rgb(247, 247, 247);  border-radius: 250px; transition-duration: 2s; opacity: 1;  user-select: none; margin: 20px; text-align: center;    ' ;  
        
         Name.style.cssText= ' float: left; font-size: 25px; transition-duration: 2s; font-size: 45px;  display: flex; justify-content:center; user-select: none;  opacity: 1;   ' ;
        
         
         
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
  
