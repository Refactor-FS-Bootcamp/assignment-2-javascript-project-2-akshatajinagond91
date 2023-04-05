

let arr=JSON.parse(localStorage.getItem("userData"))||[];




function reserve(){
    let obj={
        name:document.querySelector("#primary>input:first-child").value,
        people:document.querySelector("#primary>input:nth-child(2)").value,
        date:document.getElementById("date").value
   };
//    arr.push(obj);
//     console.log(arr);
    localStorage.setItem("userData",JSON.stringify(obj));

    if(obj.name==""||obj.people==""||obj.date==""){
        alert("Enter all the details");
    }else{
        displayData(obj);
    }
    
    }





function displayData(obj){

    let parent=document.getElementById("secondary");
    parent.innerHTML="";

      let div=document.createElement("div");

       let h2=document.createElement("h2");
       h2.innerText="Reservation Details" ;
        h2.style.color="black";
       
       let p1=document.createElement("p");
       p1.innerText=obj.name;

       let p2=document.createElement("p");
       p2.innerText=obj.people;

       let p3=document.createElement("p");
       p3.innerText=obj.date;

        div.append(h2,p1,p2,p3);
       parent.append(div);
       
    }

