const t=document.querySelector(".carousel-custom");new class{constructor(t){this.el=t,this.carouselOptions=["previous","add","play","next"],this.carouselData=[{id:"1",src:"http://fakeimg.pl/300/?text=1"},{id:"2",src:"http://fakeimg.pl/300/?text=2"},{id:"3",src:"http://fakeimg.pl/300/?text=3"},{id:"4",src:"http://fakeimg.pl/300/?text=4"},{id:"5",src:"http://fakeimg.pl/300/?text=5"}],this.carouselInView=[1,2,3,4,5],this.carouselContainer,this.carouselPlayState}mounted(){this.setupCarousel()}setupCarousel(){let t=document.createElement("div"),e=document.createElement("div");this.el.append(t,e),t.className="carousel-container-custom",e.className="carousel-controls-custom",this.carouselData.forEach((e,s)=>{let a=e.src?document.createElement("img"):document.createElement("div");t.append(a),a.className=`carousel-item-custom carousel-item-custom-${s+1}`,a.src=e.src,a.setAttribute("loading","lazy"),a.setAttribute("data-index",`${s+1}`)}),this.carouselOptions.forEach(t=>{let s=document.createElement("button"),a=document.createElement("span");a.innerText=t,a.className="ax-hidden",s.append(a),s.className=`carousel-control-custom carousel-control-custom-${t}`,s.setAttribute("data-name",t),e.append(s)}),this.setControls([...e.children]),this.carouselContainer=t}setControls(t){t.forEach(t=>{t.onclick=e=>{e.preventDefault(),this.controlManager(t.dataset.name)}})}controlManager(t){return"previous"===t?this.previous():"next"===t?this.next():"add"===t?this.add():"play"===t?this.play():void 0}previous(){this.carouselData.unshift(this.carouselData.pop()),this.carouselInView.push(this.carouselInView.shift()),this.carouselInView.forEach((t,e)=>{this.carouselContainer.children[e].className=`carousel-item-custom carousel-item-custom-${t}`}),this.carouselData.slice(0,5).forEach((t,e)=>{document.querySelector(`.carousel-item-custom-${e+1}`).src=t.src})}next(){this.carouselData.push(this.carouselData.shift()),this.carouselInView.unshift(this.carouselInView.pop()),this.carouselInView.forEach((t,e)=>{this.carouselContainer.children[e].className=`carousel-item-custom carousel-item-custom-${t}`}),this.carouselData.slice(0,5).forEach((t,e)=>{document.querySelector(`.carousel-item-custom-${e+1}`).src=t.src})}add(){let t={id:"",src:""},e=this.carouselData.length,s=this.carouselData.findIndex(t=>t.id==e);Object.assign(t,{id:`${e+1}`,src:`http://fakeimg.pl/300/?text=${e+1}`}),this.carouselData.splice(s+1,0,t),this.next()}play(){let t=document.querySelector(".carousel-control-play-custom");t.classList.contains("playing")?(t.classList.remove("playing"),clearInterval(this.carouselPlayState),this.carouselPlayState=null):(t.classList.add("playing"),this.next(),this.carouselPlayState=setInterval(()=>this.next(),1500))}}(t).mounted();
//# sourceMappingURL=index.2dbe4a8f.js.map