document.addEventListener("DOMContentLoaded", function(){
    fetchUsers();
})
let users=[];

async function fetchUsers(){
    try{
    const response=await fetch("https://lucifer-quotes.vercel.app/api/quotes/20")
    users=await response.json();
    renderUsers();
}
catch(error){
    console.log("Error Occured:",error);
}
}

function renderUsers(){
    const userList=document.getElementById("userList");
    userList.innerHTML="";
    users.forEach((user,index)=>{
        const row=document.createElement("tr");
        row.innerHTML=`
        <td>${index + 1}</td>
        <td>${user.quote}</td>
        <td>${user.author}</td>`
        userList.appendChild(row);
    });
}
