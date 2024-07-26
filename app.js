
// RANDOM IMAGES
function change(){
    const random = Math.floor(Math.random() * 9 - (0.0001)) + 0;
    if(random == 9){
        random = Math.floor(Math.random() * 9) + 1;
    }
    console.log(random)
    const img = ["assets/01.jpg","assets/02.jpg","assets/03.jpg","assets/04.jpg","assets/05.jpg","assets/06.jpg","assets/07.jpg","assets/08.jpg","assets/09.jpg"];
    image = document.getElementById('image');
    image.src = img[random];
}

// RANDOM FACTS
const factPara = document.querySelector("#fact");
const URl = "https://catfact.ninja/fact";
const req = new XMLHttpRequest();
req.open("GET",URl);
console.log(req.status);
req.send()
req.onload = ()=>{
    if(req.status == 404){
        console.log("Not found");
    }else{
        // console.log(req);
        const data = JSON.parse(req.response)
        // document.getElementById('title').innerHTML=data.fact 
        console.log(data)  
        if(data.fact.length <= 150) {
            factPara.style.top = "50%";
        document.querySelector("#fact").innerHTML = data.fact 
        }else if(data.fact.length >= 200){
            factPara.style.top = "10%";
            factPara.innerHTML = data.fact  
        }else{
            factPara.style.top = "25%";
            factPara.innerHTML = data.fact
        }   
    }    
}
req.onerror = ()=>{
    document.getElementById('fact').innerHTML="Nikal Chipde!";
}
console.log(req);