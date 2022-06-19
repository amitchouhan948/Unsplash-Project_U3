
var page = 1;
let a=JSON.parse(localStorage.getItem("search"))


function abc(a){

    let text=document.getElementById("search")
    text.value=a;

    onEnter()
}

//  onEnter calls fetching function after getting input from searchbar as we press enter
let onEnter=()=>{

    let value=document.getElementById("orientation").value;

    let query=document.getElementById("search").value;

    if(query===""){

        query=document.getElementById("queryText").innerText
    }
    
    let searchquery=document.getElementById("queryText");
    searchquery.innerText=query;

   let searchResult=document.getElementById('searchResults');
    searchResult.innerHTML=null;
    
    let div1=document.createElement("div1")
    div1.setAttribute("id","div1")

    let div2=document.createElement("div2")
    div2.setAttribute("id","div2")

    let div3=document.createElement("div3")
    div3.setAttribute("id","div3")

    searchResult.append(div1,div2,div3)

    fetching(query,value);
    
}


// on clicking collection on screen will call this collection() function

let collections=()=>{

    let query=document.getElementById("queryText").innerText;
    fetchCollection(query)

}

// suggestion bar fetch data suggesstion(value) function onclick;

function suggestion(query){


    // console.log("clicked",value)

    let searchquery=document.getElementById("queryText");
    searchquery.innerText=query;

    let searchResult=document.getElementById('searchResults');
    searchResult.innerHTML=null;

    let div1=document.createElement("div1")
    div1.setAttribute("id","div1")

    let div2=document.createElement("div2")
    div2.setAttribute("id","div2")

    let div3=document.createElement("div3")
    div3.setAttribute("id","div3")

    searchResult.append(div1,div2,div3)

    fetching(query);
}



// orientation select on clicking function

let orientation=(value)=>{

    let query=document.getElementById("queryText").innerText;

    // console.log(value,query,"clicked")

    if(value!==undefined && value!==""){
        fetching(query,value)
    }
   

}



// rlevent sorting on click called function

let relevent=(orient)=>{

    let query=document.getElementById("queryText").innerText;
    console.log(query,orient)
    if(orient!==undefined && orient!==""){
        fetching(query,orient)
    }
   



}


// for search keyword fetch
async function fetching(query,value) {

    while (page !== 4) {
        let res=null;
        let id="qKu9yIirQXvfnQCRF3xxKaTl8vN5v6p2ns5KPm7WIIo"
        if(value==="landscape"){
            res = await fetch(`https://api.unsplash.com/search/photos/?page=${page}&per_page=10&query=${query}&orientation=landscape&client_id=${id}`);
        }
        else  if(value==="potrait"){
        res = await fetch(`https://api.unsplash.com/search/photos/?page=${page}&per_page=10&query=${query}&orientation=portrait&client_id=${id}`);
        }
        else if(value==="square"){
            
            res = await fetch(`https://api.unsplash.com/search/photos/?page=${page}&per_page=10&query=${query}&orientation=squarish&client_id=${id}`);
        }
        else{
            if(value===undefined || value==="" || value==="relevent"){
            console.log(typeof value,value);
            res = await fetch(`https://api.unsplash.com/search/photos/?page=${page}&per_page=10&query=${query}&order_by=relevent&client_id=${id}`);
            }
            else{
                res = await fetch(`https://api.unsplash.com/search/photos/?page=${page}&per_page=10&query=latest&order_by=relevent&client_id=${id}`);
            }
        }
        // else{
        //     res = await fetch(`https://api.unsplash.com/search/photos/?page=${page}&per_page=10&query=${query}&client_id=${id}`);
        // }
        
        let data = await res.json();

        //   console.log(data);

        appending(data.results)
    }
    if (page === 4) {
        page = 1;
    }

}
let likedPics=JSON.parse(localStorage.getItem("liked"))||[];

function appending(data) {
    // console.log(data[0].user.username)
    let container;
    if (page === 1) {
        container = document.getElementById("div1");
        container.innerHTML=null;
    }

    else if (page === 2) {
        container = document.getElementById("div2");
        container.innerHTML=null;
    }

    else {
        container = document.getElementById("div3");
        container.innerHTML=null;

    }
    data.forEach((el,index) => {
     
        let div = document.createElement("div")
        div.setAttribute("class","imageDiv")
        div.addEventListener("click",(index)=>{
            console.log(el);
        })
        let pic = document.createElement("img")
        pic.setAttribute("class", "picture");
        pic.src = el.urls.regular;
        // console.log(pic)

        let likeBtn=document.createElement("img")
        likeBtn.setAttribute("class","likes")
        likeBtn.src="https://cdn-icons-png.flaticon.com/512/60/60993.png"
        likeBtn.addEventListener("click",function(index){

            let picurl=el.urls.regular;
    
            likedPics.push(picurl);
    
            let data=localStorage.setItem("liked",JSON.stringify(likedPics));
            console.log(likedPics)
    
            })

        let propicDiv=document.createElement("div")
        propicDiv.setAttribute("class","propicDiv")

        let proPic=document.createElement("img")
       proPic.setAttribute("class","proPic")
       proPic.src=el.user.profile_image.large;

        let username=document.createElement("p")
        username.innerText=el.user.username;

        propicDiv.append(proPic,username)

        let addsign=document.createElement("img")
        addsign.setAttribute("class","addsign")
        addsign.src="istockAdvertise/addsign.png"

        div.append(pic,likeBtn,propicDiv,addsign);
        container.append(div);


    })
    page++;

}




// for collections data fetch

async function fetchCollection(query) {


        let res = await fetch(`https://api.unsplash.com/search/collections/?&per_page=40&query=${query}&client_id=zSpPtTi3yGUYCEE9hSOlc2dRJYfpWIHDhz8dT_ErHGY`);
        let data = await res.json();

        //   console.log(data);

        appendCollection(data.results)
    }





let appendCollection=(data)=>{
    // console.log(data)
    let cont = document.getElementById("searchResults");
    cont.innerHTML=null;

    
    let line=0;
    data.forEach((el,index) => {

        console.log(el)

        let collectionsDiv = document.createElement("div")
        collectionsDiv.setAttribute("class","collectionDiv")

        let title=document.createElement("h1")
        title.innerText=el.title;

        let imgCont=document.createElement("div")
        imgCont.setAttribute("id","imgCont")

        let img1=document.createElement("img")
        img1.src=data[line].cover_photo.urls.regular;

        line++;

        let imgs=document.createElement("div")
        imgs.setAttribute("class","imgs")

        let img2=document.createElement("img")
        img2.src=data[line].cover_photo.urls.regular;
        line++;

        let img3=document.createElement("img")
        img3.src=data[line].cover_photo.urls.regular;
        line++;

        imgs.append(img2,img3)
        imgCont.append(img1,imgs)

        let AB=document.createElement("div")
        AB.setAttribute("class","AB")

        let A=document.createElement("p")
        A.innerText=`${el.total_photos} photos`

        let B=document.createElement("p")
        B.innerText=`Curated by ${el.user.name}`

        let p1p2p3=document.createElement("div")
        p1p2p3.setAttribute("class", "ptext")

        let p1=document.createElement("p")
        p1.innerText=el.tags[0].title;

        let p2=document.createElement("p")
        p2.innerText=el.tags[1].title;

        let p3=document.createElement("p")
        p3.innerText=el.tags[2].title;

        AB.append(A,B)
        p1p2p3.append(p1,p2,p3);

        collectionsDiv.append(imgCont,title,AB,p1p2p3)
        // console.log(collectionsDiv)
        cont.append(collectionsDiv)

    });
}


abc(a);