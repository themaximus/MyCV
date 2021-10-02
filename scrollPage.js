
        let offset =0;
        let boba = document.getElementById('slider_items');
        
        let Men = document.getElementById('Next').addEventListener('click', function () {
            
            offset= offset + 1534;   
            if ( offset > 3068 ) {
              offset = 0;
            } 
              boba.style.left = -offset + 'px';
              
        });

        let Men2 = document.getElementById('Prev').addEventListener('click', function () {
            
            offset= offset - 1534;   
            if ( offset < 0 ) {
              offset = 3068;
            } 
              boba.style.left = -offset + 'px';
              
        });

        let xyz = 0;
  
      //   let Fon =  document.getElementById('Fon').addEventListener('scroll', function () {
            
            
      //       xyz = xyz + 50;
      //       this.style.bottom = xyz + 'px';
            
      // });


      let Body =  window.addEventListener('wheel', function (event) {
            
        let Fon =  document.getElementById('Fon');
        
        if (event.deltaY < 0) {

        xyz = xyz - 40;
        Fon.style.bottom = xyz + 'px';
        } else if (event.deltaY > 0) {
          xyz = xyz + 40;
        Fon.style.bottom = xyz + 'px';
        } 
        
        if (xyz < 40) {
          xyz = 40;
        }

        if ( xyz > 400) {
          xyz = 400;
        }

        
  });
    
    
    
   
   
  
        
   
   
   
