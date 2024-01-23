document.getElementById('myforms').addEventListener('submit',(event)=>{
    event.preventDefault();

    var Fname= document.getElementById("exampleInputFname").value;
    var Lname= document.getElementById("exampleInputLname").value;
    var email= document.getElementById("exampleInputEmail1").value;
    var phone= document.getElementById("exampleInputPhone").value;
    
    const v1=document.getElementById("my1");
    v1.innerHTML=Fname;
    const v2 =document.getElementById("my2");
    v2.innerHTML=Lname;
    const v3 =document.getElementById("my3");
    v3.innerHTML=email;
    const v4 =document.getElementById("my4");
    v4.innerHTML=phone;

   console.log(Fname,Lname,email,phone);
})