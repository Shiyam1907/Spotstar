    
    //Login Validation
    function signin(){
        var db={'User':'User@123','Admin':'Admin@123','Shiyam':'Shiyam@123'}
        var username=document.getElementById("email").value 
        var password=document.getElementById("pass").value 
        var Names=Object.keys(db)
        var flag=false
        for(var i=0;i<Names.length;i++){
            if(Names[i]==username){
                if(db[Names[i]]==password){
                    flag=true
                }
            }
        }
        if(flag==true){
            window.location.href='/HTML/homepage.html'
        }else{
            alert("Invalid Username or Incorrect Password")
            document.getElementById("email").style.border="2px red solid"
            document.getElementById("pass").style.border="2px red solid"
        }
    
    }


    //Signup Validation
    function SignUp() 
    {

        // Email Validation
        var email = document.getElementById("email").value;
        var EM_flag = false;
    
        var rate = email.indexOf('@') > 0; // Check for '@' not at the start.
        var dot = email.lastIndexOf('.') > email.indexOf('@') + 1; // Ensure there's a dot after the '@'.
        var n_dot = email.lastIndexOf('.') < email.length - 1; // Ensure the email doesn't end with a dot.
    
        if (rate && dot && n_dot) {
            EM_flag = true;
        }
    
        // Phone Number Validation
        var PH = document.getElementById("phone-num").value;
        var PH_flag = false;
        if ((PH >= 6000000000) && (PH <= 9999999999)) { // multiple condition given using "&&"
            PH_flag = true;
        }
    
        // Password Validation and Verification
        var Pass = document.getElementById("pwd").value;
        var C_Pass = document.getElementById("conf-pwd").value;
        var Pass_flag = false;
        var P_Length = 0;
        var P_Upper = 0;
        var P_Lower = 0;
        var P_Number = 0;
        var P_Special = 0;
    
        for (var i = 0; i < Pass.length; i++) {
            P_Length++;
            if ((Pass[i] >= 'A') && (Pass[i] <= 'Z')) {
                P_Upper++;
            } else if ((Pass[i] >= 'a') && (Pass[i] <= 'z')) {
                P_Lower++;
            } else if ((Pass[i] >= '0') && (Pass[i] <= '9')) {
                P_Number++;
            } else {
                P_Special++;
            }
        }
    
            if ((P_Length >= 8) && (P_Length <= 16) && (P_Upper >= 1) && (P_Lower >= 1) && (P_Number >= 1) && (P_Special >= 1)) {
                if (Pass == C_Pass) {
                    Pass_flag = true;
                }
            }
        
        //Final Validation
        if((EM_flag==true)&&(PH_flag==true)&&(Pass_flag==true)) {
            window.location.href = "/index.html";
        } else {
            alert("Check the given Phone Number is valid\nCheck the given Email Id is Valid\nPassword Must be :\n8 character length\nAtleast one Uppercase and one Lowercase\nMust contain one Numeric value and Special symbols.");
        }

}

    // Number Validation
    function Phone(){
        var PH= document.getElementById("phonenum").value
        if((PH>=6000000000)&&(PH<=9999999999)){                                   //multiple condition given using "&&"
            window.location.href = "/HTML/otpverificat.html";
        }
        else{
            alert("Invalid Number")
        }
    }

    //New Password -- Confirm Password
    function Pass(){
    var Pass = document.getElementById("password").value;
    var C_Pass = document.getElementById("conformpassword").value;
    var P_Length = 0;
    var P_Upper = 0;
    var P_Lower = 0;
    var P_Number = 0;
    var P_Special = 0;

    for (var i = 0; i < Pass.length; i++) {
        P_Length++;
        if ((Pass[i] >= 'A') && (Pass[i] <= 'Z')) {
            P_Upper++;
        } else if ((Pass[i] >= 'a') && (Pass[i] <= 'z')) {
            P_Lower++;
        } else if ((Pass[i] >= '0') && (Pass[i] <= '9')) {
            P_Number++;
        } else {
            P_Special++;
        }
    }
        if ((Pass.length === 0)&&(C_Pass.length === 0)){
            alert("This Field Can't be Empty")
            document.getElementById("password").style.border="2px red solid"
            document.getElementById("conformpassword").style.border="2px red solid"
            return; // Exit the function if no input is given.
        }

        if ((P_Length >= 8) && (P_Length <= 16) && (P_Upper >= 1) && (P_Lower >= 1) && (P_Number >= 1) && (P_Special >= 1)) {
            if (Pass == C_Pass) {
                alert("Password Updated Succefully")
                window.location.href = "/index.html";
            }
        }
}
