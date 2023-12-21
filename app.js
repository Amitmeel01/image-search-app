const accsesKey="-Kb8SfJg2OR19bk_HgFhw18mN046Lv3CWERihFv_PJ8";

const inputBtn=document.getElementById("input-btn");
const input=document.getElementById("input");
const searchResult=document.getElementById("search-result");
const btn=document.getElementById("show-more");
const butn=document.getElementById("btn");


let keyword="";
let page=1;


async function searchImage(){
    keyword=input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accsesKey}&per_page=9`;

   const response=await fetch(url);
   const data=await response.json();
   if(page===1){
    searchResult.innerHTML="";
   }

    const results=data.results;

    console.log(results);

    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    btn.style.display="block";
}

butn.addEventListener("click",(e)=>{

     page=1;
     searchImage();

});
btn.addEventListener("click",()=>{
    
    page++;
    searchImage();
})