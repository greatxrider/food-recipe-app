const e=document.querySelector(".carousel-custom");new class{constructor(e){this.element=e,this.carouselOptions=["previous","next"],this.carouselData=[{id:"1",src:"https://randommer.io/images/foods/Caprese%20Salad.webp",title:"Italiano Strawberry Smoothies Pancake"},{id:"2",src:"https://randommer.io/images/foods/Huevos%20Rancheros.webp",title:"Steak Beef With Padang Sauce"},{id:"3",src:"https://randommer.io/images/foods/Chicken%20Tenders.webp",title:"Jollibee With Tinola Sauce"},{id:"4",src:"https://randommer.io/images/foods/Bento%20Box.webp",title:"Inasal With Tinola Sauce"},{id:"5",src:"https://randommer.io/images/foods/Veggie%20Sandwich.webp",title:"McDo With Tinola Sauce"}],this.carouselInView=[1,2,3,4,5],this.carouselContainer,this.carouselPlayState}mounted(){this.setupCarousel()}setupCarousel(){let e=document.createElement("div"),t=document.createElement("div");this.element.append(e,t),e.className="carousel-custom-container",t.className="carousel-custom-controls container",this.carouselData.forEach((t,a)=>{let s=t.src?document.createElement("div"):null,o=document.createElement("img"),n=t.title?document.createElement("h4"):null;s.append(o,n),e.append(s),n.className=`foodTitle-item foodTitle-custom-item-${a+1}`,n.textContent=t.title,n.setAttribute("loading","lazy"),o.className=`imageItem imageItem-custom-item-${a+1}`,o.src=t.src,s.className=`carousel-custom-item carousel-custom-item-${a+1}`,s.setAttribute("loading","lazy"),s.setAttribute("data-index",`${a+1}`),n.setAttribute("data-index",`${a+1}`)}),this.carouselOptions.forEach(e=>{let a=document.createElement("button"),s=document.createElement("span");s.innerText=e,s.className="ax-hidden",a.append(s),a.className=`carousel-custom-control carousel-custom-control-${e}`,a.setAttribute("data-name",e),t.append(a)}),this.setControls([...t.children]),this.carouselContainer=e,e.append(t)}setControls(e){e.forEach(e=>{e.onclick=t=>{t.preventDefault(),this.controlManager(e.dataset.name)}})}controlManager(e){return"previous"===e?this.previous():"next"===e?this.next():void 0}previous(){this.carouselData.unshift(this.carouselData.pop()),this.carouselInView.push(this.carouselInView.shift()),this.carouselInView.forEach((e,t)=>{this.carouselContainer.children[t].className=`carousel-custom-item carousel-custom-item-${e}`})}next(){this.carouselData.push(this.carouselData.shift()),this.carouselInView.unshift(this.carouselInView.pop()),this.carouselInView.forEach((e,t)=>{this.carouselContainer.children[t].className=`carousel-custom-item carousel-custom-item-${e}`})}add(){let e={id:"",src:""},t=this.carouselData.length,a=this.carouselData.findIndex(e=>e.id==t);Object.assign(e,{id:`${t+1}`,src:`http://fakeimg.pl/300/?text=${t+1}`}),this.carouselData.splice(a+1,0,e),this.next()}play(){let e=document.querySelector(".carousel-custom-control-play");e.classList.contains("playing")?(e.classList.remove("playing"),clearInterval(this.carouselPlayState),this.carouselPlayState=null):(e.classList.add("playing"),this.next(),this.carouselPlayState=setInterval(()=>this.next(),1500))}}(e).mounted(),document.getElementById("categories");const t="7cda474b20f147df88911df91cc05de4";console.log(t);let a=`https://api.spoonacular.com/food/search?query=top+recipes&apiKey=${t}`;async function s(e){let t=await fetch(e),a=(await t.json()).searchResults[0];console.log(a.results),function(e){let t=document.querySelector("#recipeCardContainer"),a=e.splice(0,e.length);console.log(a);for(let e=0;e<a.length;e++){let s=a[e];console.log(s);let o=document.createElement("div");o.className="card",o.id="recipeCard";let n=document.createElement("div");n.className="recipe-container";let c=document.createElement("img");c.src=`${s.image}`,c.className="card-img-top",c.id="recipeImg",c.alt="Recipe Picture";let l=document.createElement("span");l.className="tag";let i=document.createElement("div");i.id="dateActionsContainer";let r=document.createElement("span");r.id="recipeDate";let m=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});r.textContent=m;let u=document.createElement("div");u.id="actionButtonsContainer";let d=document.createElement("button");d.id="chatButton";let h=document.createElement("i");h.className="bi bi-chat-right";let p=document.createElement("button");p.id="shareButton";let g=document.createElement("i");g.className="bi bi-share";let f=document.createElement("div");f.className="card-body";let E=document.createElement("h5");E.className="card-title",E.textContent=`${s.name}`;let C=document.createElement("p");C.className="card-text";let b=s.content;C.textContent=`${b.slice(0,136)+"..."}`;let y=document.createElement("a");y.href=`${s.link}`,t.appendChild(o),o.append(n,i,f),n.append(c,l),i.append(r,u),u.append(d,p),d.appendChild(h),p.appendChild(g),f.append(E,C,y)}}(a.results)}console.log(a),document.addEventListener("DOMContentLoaded",()=>{s(a)});
//# sourceMappingURL=index.c08db852.js.map
