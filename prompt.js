function myFunction()
            {
                let text;
                var userPreference;
               
                let person = prompt("please Enter your Full name:","");
                if (person ==null||person =="");
              {  {
                    text ="Request cancelled succesfully.";
                }
        
                {
                    text ="\t\tWELCOME\t"+"\n"  + person +"\t" +"! You Have Successfully Reported For work";
                }
                if (confirm("Do you want to save changes?") == true) {
			userPreference = "Data saved successfully!";
		         } 
        else {
			userPreference = "Failed to capture data!";
		     }
             document.getElementById("demo").innerHTML=text;
                document.getElementById("msg").innerHTML = userPreference; 
        
            }
        }