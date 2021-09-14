
    $(document).ready(function(){
            $('#modal1').modal();
            let cookiecheckaccept = localStorage.getItem("CookieCheck");
        if (cookiecheckaccept == undefined || cookiecheckaccept !=="yes") {
            $('#modal1').modal('open'); 
        } else {
            $('#modal1').modal('close'); 
        } 
    }); 
   function cookiecheckaccept(){
     localStorage.setItem("CookieCheck", "yes"); //Set Cookie Accept to yes
   }
   
   function cookiecheckclose(){
     localStorage.setItem("CookieCheck", "no"); //Set Cookie Check close to no
   }