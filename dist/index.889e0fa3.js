const e=document.querySelector(".carousel");new class{constructor(e){this.el=e,this.carouselOptions=["previous","add","play","next"],this.carouselData=[{id:"1",src:"http://fakeimg.pl/300/?text=1"},{id:"2",src:"http://fakeimg.pl/300/?text=2"},{id:"3",src:"http://fakeimg.pl/300/?text=3"},{id:"4",src:"http://fakeimg.pl/300/?text=4"},{id:"5",src:"http://fakeimg.pl/300/?text=5"}],this.carouselInView=[1,2,3,4,5],this.carouselContainer,this.carouselPlayState}mounted(){this.setupCarousel()}setupCarousel(){let e=document.createElement("div"),t=document.createElement("div");this.el.append(e,t),e.className="carousel-container",t.className="carousel-controls",this.carouselData.forEach((t,s)=>{let a=t.src?document.createElement("img"):document.createElement("div");e.append(a),a.className=`carousel-item carousel-item-${s+1}`,a.src=t.src,a.setAttribute("loading","lazy"),a.setAttribute("data-index",`${s+1}`)}),this.carouselOptions.forEach(e=>{let s=document.createElement("button"),a=document.createElement("span");a.innerText=e,a.className="ax-hidden",s.append(a),s.className=`carousel-control carousel-control-${e}`,s.setAttribute("data-name",e),t.append(s)}),this.setControls([...t.children]),this.carouselContainer=e}setControls(e){e.forEach(e=>{e.onclick=t=>{t.preventDefault(),this.controlManager(e.dataset.name)}})}controlManager(e){return"previous"===e?this.previous():"next"===e?this.next():"add"===e?this.add():"play"===e?this.play():void 0}previous(){this.carouselData.unshift(this.carouselData.pop()),this.carouselInView.push(this.carouselInView.shift()),this.carouselInView.forEach((e,t)=>{this.carouselContainer.children[t].className=`carousel-item carousel-item-${e}`}),this.carouselData.slice(0,5).forEach((e,t)=>{document.querySelector(`.carousel-item-${t+1}`).src=e.src})}next(){this.carouselData.push(this.carouselData.shift()),this.carouselInView.unshift(this.carouselInView.pop()),this.carouselInView.forEach((e,t)=>{this.carouselContainer.children[t].className=`carousel-item carousel-item-${e}`}),this.carouselData.slice(0,5).forEach((e,t)=>{document.querySelector(`.carousel-item-${t+1}`).src=e.src})}add(){let e={id:"",src:""},t=this.carouselData.length,s=this.carouselData.findIndex(e=>e.id==t);Object.assign(e,{id:`${t+1}`,src:`http://fakeimg.pl/300/?text=${t+1}`}),this.carouselData.splice(s+1,0,e),this.next()}play(){let e=document.querySelector(".carousel-control-play");e.classList.contains("playing")?(e.classList.remove("playing"),clearInterval(this.carouselPlayState),this.carouselPlayState=null):(e.classList.add("playing"),this.next(),this.carouselPlayState=setInterval(()=>this.next(),1500))}}(e).mounted();
//# sourceMappingURL=index.889e0fa3.js.map
