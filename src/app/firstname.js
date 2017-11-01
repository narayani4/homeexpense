function mouseLeave() 
            {
               var fname=document.getElementById('fname').value;
               var regexp =  /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
            
            if(fname.match(regexp))
            document.getElementById("errfn").innerHTML = "";
            
            else if(fname === '')
               document.getElementById("errfn").innerHTML = "Name should be entered";
            else
             document.getElementById("errfn").innerHTML = "This is invalid name";
            }
    