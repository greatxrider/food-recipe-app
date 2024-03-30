let e=[];async function t(t){try{let n=await fetch(t);e=(await n.json()).searchResults[0].results}catch(e){console.error(e)}}const n=document.querySelector(".carousel-custom");new class{constructor(t){this.element=t,this.carouselOptions=["previous","next"],this.carouselData=e,this.carouselInView=[1,2,3,4,5],this.carouselContainer,this.carouselPlayState}mounted(){t("https://api.spoonacular.com/food/search?query=&number=10&apiKey=985657607e4f4433b35c17a295387a26sdsd"),this.setupCarousel()}setupCarousel(){let e=document.createElement("div"),t=document.createElement("div");this.element.append(e,t),e.className="carousel-custom-container",t.className="carousel-custom-controls container",this.carouselData.forEach((t,n)=>{let a=t.image?document.createElement("div"):null,o=document.createElement("img"),c=t.name?document.createElement("h4"):null;a.append(o,c),e.append(a),c.className=`foodTitle-item foodTitle-custom-item-${n+1}`,c.textContent=t.name,c.setAttribute("loading","lazy"),o.className=`imageItem imageItem-custom-item-${n+1}`,o.src=t.image,a.className=`carousel-custom-item carousel-custom-item-${n+1}`,a.setAttribute("loading","lazy"),a.setAttribute("data-index",`${n+1}`),c.setAttribute("data-index",`${n+1}`)}),this.carouselOptions.forEach(e=>{let n=document.createElement("button"),a=document.createElement("span");a.innerText=e,a.className="ax-hidden",n.append(a),n.className=`carousel-custom-control carousel-custom-control-${e}`,n.setAttribute("data-name",e),t.append(n)}),this.setControls([...t.children]),this.carouselContainer=e,e.append(t)}setControls(e){e.forEach(e=>{e.onclick=t=>{t.preventDefault(),this.controlManager(e.dataset.name)}})}controlManager(e){return"previous"===e?this.previous():"next"===e?this.next():void 0}previous(){this.carouselData.unshift(this.carouselData.pop()),this.carouselInView.push(this.carouselInView.shift()),this.carouselInView.forEach((e,t)=>{this.carouselContainer.children[t].className=`carousel-custom-item carousel-custom-item-${e}`})}next(){this.carouselData.push(this.carouselData.shift()),this.carouselInView.unshift(this.carouselInView.pop()),this.carouselInView.forEach((e,t)=>{this.carouselContainer.children[t].className=`carousel-custom-item carousel-custom-item-${e}`})}}(n).mounted();let a=1,o=0,c=10,l=[],r=[];const s=document.getElementById("categories"),i=document.querySelector("#arrowRight"),d=document.querySelector("#arrowLeft"),u=document.querySelector("#startingIndex"),m=document.querySelector("#endPageNumber"),p=document.querySelector(".btn-outline-success"),h=document.querySelector("#searchInput"),C=document.querySelector("#spinnerTop"),y=document.querySelector("#spinnerLatest"),g=document.querySelector("#seeMoreButton"),E="985657607e4f4433b35c17a295387a26sdsd";let f=`https://api.spoonacular.com/food/search?query=top+recipes&number=40&apiKey=${E}`,b=`https://api.spoonacular.com/food/search?query=&number=40&apiKey=${E}`;async function v(e,t){try{let n=await fetch(e),a=await fetch(t),o=await n.json(),c=await a.json(),s=o.searchResults[0],i=c.searchResults[0];l=s.results,r=i.results,L(s.results),x(r),function(e){let t=document.querySelector("#galleryImagesContainer"),n=e.splice(0,20);for(let e=0;e<n.length;e++){let a=document.createElement("img");a.src=`${n[e].image}`,a.alt="img",a.draggable="false",a.id=`img-${e}`,t.appendChild(a)}}(r),C.style.display="none",y.style.display="none"}catch(e){console.error(e)}}function L(e){let t=document.querySelector("#topRecipesContainer");if(u.textContent=a,e.length%10==0?m.textContent=e.length/10:m.textContent=Math.floor(e.length/10)+a,document.querySelector("#recipeCardContainer")&&(console.log("Recipe Card Container found! Deleting..."),t.removeChild(document.querySelector("#recipeCardContainer"))),!document.querySelector("#recipeCardContainer")){console.log("Recipe Card Container not found. Creating new container...");let e=document.createElement("div");e.id="recipeCardContainer",t.appendChild(e)}let n=e.slice(o,c);for(let e=0;e<n.length;e++){let t=n[e],a=document.createElement("div");a.className="card",a.id="recipeCard";let o=document.createElement("div");o.className="recipe-container";let c=document.createElement("img");c.src=`${t.image}`,c.className="card-img-top",c.id="recipeImg",c.alt="Recipe Picture";let l=document.createElement("span");l.textContent="DISHES",l.className="tag";let r=document.createElement("div");r.id="dateActionsContainer";let s=document.createElement("span");s.id="recipeDate";let i=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});s.textContent=i;let d=document.createElement("div");d.id="actionButtonsContainer";let u=document.createElement("button");u.id="chatButton";let m=document.createElement("i");m.className="bi bi-chat-right";let p=document.createElement("button");p.id="shareButton";let h=document.createElement("i");h.className="bi bi-share";let C=document.createElement("div");C.className="card-body";let y=document.createElement("h5");y.className="card-title",y.textContent=`${t.name}`;let g=document.createElement("p");g.className="card-text";let E=t.content;g.textContent=`${E.slice(0,120)+"..."}`;let f=document.createElement("a");f.textContent="Read More",f.href=`${t.link}`,recipeCardContainer.appendChild(a),a.append(o,r,C),o.append(c,l),r.append(s,d),d.append(u,p),u.appendChild(m),p.appendChild(h),C.append(y,g,f)}C.style.display="none"}function x(e){let t=document.querySelector("#latestRecipesContainer");if(!document.querySelector("#recipeCardContainerLatest")){console.log("Recipe Card Container not found. Creating new container...");let e=document.createElement("div");e.id="recipeCardContainerLatest",t.appendChild(e)}let n=e.splice(0,4);for(let e=0;e<n.length;e++){let t=n[e],a=document.createElement("div");a.className="card",a.id="recipeCard";let o=document.createElement("div");o.className="recipe-container";let c=document.createElement("img");c.src=`${t.image}`,c.className="card-img-top",c.id="recipeImg",c.alt="Recipe Picture";let l=document.createElement("span");l.textContent="DISHES",l.className="tag";let r=document.createElement("div");r.id="dateActionsContainer";let s=document.createElement("span");s.id="recipeDate";let i=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});s.textContent=i;let d=document.createElement("div");d.id="actionButtonsContainer";let u=document.createElement("button");u.id="chatButton";let m=document.createElement("i");m.className="bi bi-chat-right";let p=document.createElement("button");p.id="shareButton";let h=document.createElement("i");h.className="bi bi-share";let C=document.createElement("div");C.className="card-body";let y=document.createElement("h5");y.className="card-title",y.textContent=`${t.name}`;let g=document.createElement("p");g.className="card-text";let E=t.content;g.textContent=`${E.slice(0,126)+"..."}`;let f=document.createElement("a");f.textContent="Read More",f.href=`${t.link}`,recipeCardContainerLatest.appendChild(a),a.append(o,r,C),o.append(c,l),r.append(s,d),d.append(u,p),u.appendChild(m),p.appendChild(h),C.append(y,g,f)}y.style.display="none"}s.addEventListener("change",()=>{C.style.display="block",a=1,o=0,c=10,d.style.color="#CCCCCC",i.style.color="#F1632D";let e=s.options[s.selectedIndex].textContent;f=`https://api.spoonacular.com/food/search?query=top+recipes+${e}&number=40&apiKey=${E}`,b=`https://api.spoonacular.com/food/search?query=&number=40&apiKey=${E}`,console.log(f),console.log(b),v(f,b)}),document.addEventListener("DOMContentLoaded",()=>{C.style.display="block",v(f,b)}),d.addEventListener("click",()=>{if(o>0&&c>=10)i.style.color="#F1632D",o-=10,c-=10,a--,C.style.display="block",L(l);else{d.style.color="#CCCCCC",console.log("Cannot reduce more.");return}}),i.addEventListener("click",()=>{if(c<l.length)d.style.color="#F1632D",o+=10,c+=10,a++,C.style.display="block",L(l);else{i.style.color="#CCCCCC",console.log("Reached maximum delete count.");return}}),p.addEventListener("click",()=>{C.style.display="block",y.style.display="block",a=1,o=0,c=10,d.style.color="#CCCCCC",i.style.color="#F1632D";let e=h.value;console.log(f=`https://api.spoonacular.com/food/search?query=${e}&number=40&apiKey=${E}`),v(f,b)}),g.addEventListener("click",()=>{r.length>0?x(r):(g.disabled=!0,g.style.backgroundColor="#ccc")});const N=document.querySelector(".carousel"),S=N.querySelectorAll("img")[0],q=document.querySelectorAll(".wrapper i");let $=!1,w=!1,D,I,k;const R=()=>{let e=N.scrollWidth-N.clientWidth;q[0].style.display=0==N.scrollLeft?"none":"block",q[1].style.display=N.scrollLeft==e?"none":"block"};q.forEach(e=>{e.addEventListener("click",()=>{let t=S.clientWidth+14;N.scrollLeft+="left"==e.id?-t:t,setTimeout(()=>R(),60)})});const B=()=>{if(N.scrollLeft-(N.scrollWidth-N.clientWidth)>-1||N.scrollLeft<=0)return;k=Math.abs(k);let e=S.clientWidth+14,t=e-k;if(N.scrollLeft>I)return N.scrollLeft+=k>e/3?t:-k;N.scrollLeft-=k>e/3?t:-k},A=e=>{$=!0,D=e.pageX||e.touches[0].pageX,I=N.scrollLeft},M=e=>{$&&(e.preventDefault(),w=!0,N.classList.add("dragging"),k=(e.pageX||e.touches[0].pageX)-D,N.scrollLeft=I-k,R())},V=()=>{$=!1,N.classList.remove("dragging"),w&&(w=!1,B())};N.addEventListener("mousedown",A),N.addEventListener("touchstart",A),document.addEventListener("mousemove",M),N.addEventListener("touchmove",M),document.addEventListener("mouseup",V),N.addEventListener("touchend",V);
//# sourceMappingURL=index.5ea710c5.js.map
