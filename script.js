




document.addEventListener("DOMContentLoaded", function() {

	let UpSkillSet = () => {
        let SkillCont = document.getElementById('skillset');
        let SkillContItems = document.getElementById('skillsetitems');
        let Avatar = document.getElementById('Avatar');
        let Name = document.getElementById('name');

        
        Avatar.style.cssText= ' transition-duration: 2s; width: 300px; height: 300px; opacity: 1;  user-select: none;  margin-top: 90px;    ' ;  
         SkillCont.style.cssText= ' transition-duration: 2s; width: 550px; height: 100px; opacity: 1;  ' ;
         Name.style.cssText= ' transition-duration: 2s; font-size: 45px;  display: flex; justify-content:center; user-select: none;  opacity: 1;   ' ;
         

         
    }
    
    
    
    UpSkillSet();

});