class Carousel {
    constructor(element){
        this.element = element;
        this.carouselOptions = [
            "previous",
            "next"
        ];
        this.carouselData = [
            {
                "id": "1",
                "src": "https://randommer.io/images/foods/Caprese%20Salad.webp",
                "title": "Italiano Strawberry Smoothies Pancake"
            },
            {
                "id": "2",
                "src": "https://randommer.io/images/foods/Huevos%20Rancheros.webp",
                "title": "Steak Beef With Padang Sauce"
            },
            {
                "id": "3",
                "src": "https://randommer.io/images/foods/Chicken%20Tenders.webp",
                "title": "Jollibee With Tinola Sauce"
            },
            {
                "id": "4",
                "src": "https://randommer.io/images/foods/Bento%20Box.webp",
                "title": "Inasal With Tinola Sauce"
            },
            {
                "id": "5",
                "src": "https://randommer.io/images/foods/Veggie%20Sandwich.webp",
                "title": "McDo With Tinola Sauce"
            }
        ];
        this.carouselInView = [
            1,
            2,
            3,
            4,
            5
        ];
        this.carouselContainer;
        this.carouselPlayState;
    }
    mounted() {
        this.setupCarousel();
    }
    // Build carousel html
    setupCarousel() {
        const container = document.createElement("div");
        const controls = document.createElement("div");
        // Add container for carousel items and controls
        this.element.append(container, controls);
        container.className = "carousel-custom-container";
        controls.className = "carousel-custom-controls container";
        // Take dataset array and append items to container
        this.carouselData.forEach((item, index)=>{
            const carouselItem = item.src ? document.createElement("div") : null;
            const imgItem = document.createElement("img");
            const foodTitle = item.title ? document.createElement("h4") : null;
            carouselItem.append(imgItem, foodTitle);
            container.append(carouselItem);
            // Add item attributes
            // imgDiv.className = `imgDiv`;
            foodTitle.className = `foodTitle-item foodTitle-custom-item-${index + 1}`;
            foodTitle.textContent = item.title;
            foodTitle.setAttribute("loading", "lazy");
            imgItem.className = `imageItem imageItem-custom-item-${index + 1}`;
            imgItem.src = item.src;
            carouselItem.className = `carousel-custom-item carousel-custom-item-${index + 1}`;
            // carouselItem.style.backgroundImage = `url(${item.src})`;
            // carouselItem.style.backgroundSize = 'cover';
            // carouselItem.style.backgroundPosition = 'center';
            carouselItem.setAttribute("loading", "lazy");
            // Used to keep track of carousel items, infinite items possible in carousel however min 5 items required
            carouselItem.setAttribute("data-index", `${index + 1}`);
            foodTitle.setAttribute("data-index", `${index + 1}`);
        });
        this.carouselOptions.forEach((option)=>{
            const btn = document.createElement("button");
            const axSpan = document.createElement("span");
            // Add accessibilty spans to button
            axSpan.innerText = option;
            axSpan.className = "ax-hidden";
            btn.append(axSpan);
            // Add button attributes
            btn.className = `carousel-custom-control carousel-custom-control-${option}`;
            btn.setAttribute("data-name", option);
            // Add carousel control options
            controls.append(btn);
        });
        // After rendering carousel to our DOM, setup carousel controls' event listeners
        this.setControls([
            ...controls.children
        ]);
        // Set container property
        this.carouselContainer = container;
        container.append(controls);
    }
    setControls(controls) {
        controls.forEach((control)=>{
            control.onclick = (event)=>{
                event.preventDefault();
                // Manage control actions, update our carousel data first then with a callback update our DOM
                this.controlManager(control.dataset.name);
            };
        });
    }
    controlManager(control) {
        if (control === "previous") return this.previous();
        if (control === "next") return this.next();
        return;
    }
    previous() {
        // Update order of items in data array to be shown in carousel
        this.carouselData.unshift(this.carouselData.pop());
        // Push the first item to the end of the array so that the previous item is front and center
        this.carouselInView.push(this.carouselInView.shift());
        // Update the css class for each carousel item in view
        this.carouselInView.forEach((item, index)=>{
            this.carouselContainer.children[index].className = `carousel-custom-item carousel-custom-item-${item}`;
        });
    // // Using the first 5 items in data array update content of carousel items in view
    // this.carouselData.slice(0, 5).forEach((data, index) => {
    //     document.querySelector(`.carousel-custom-item-${index + 1}`).src = data.src;
    // });
    }
    next() {
        // Update order of items in data array to be shown in carousel
        this.carouselData.push(this.carouselData.shift());
        // Take the last item and add it to the beginning of the array so that the next item is front and center
        this.carouselInView.unshift(this.carouselInView.pop());
        // Update the css class for each carousel item in view
        this.carouselInView.forEach((item, index)=>{
            this.carouselContainer.children[index].className = `carousel-custom-item carousel-custom-item-${item}`;
        });
    // Using the first 5 items in data array update content of carousel items in view
    // this.carouselData.slice(0, 5).forEach((data, index) => {
    //     document.querySelector(`.carousel-custom-item-${index + 1}`).style.backgroundImage = `url(${data.src})`;
    // });
    }
    add() {
        const newItem = {
            "id": "",
            "src": ""
        };
        const lastItem = this.carouselData.length;
        const lastIndex = this.carouselData.findIndex((item)=>item.id == lastItem);
        // Assign properties for new carousel item
        Object.assign(newItem, {
            id: `${lastItem + 1}`,
            src: `http://fakeimg.pl/300/?text=${lastItem + 1}`
        });
        // Then add it to the "last" item in our carouselData
        this.carouselData.splice(lastIndex + 1, 0, newItem);
        // Shift carousel to display new item
        this.next();
    }
    play() {
        const playBtn = document.querySelector(".carousel-custom-control-play");
        const startPlaying = ()=>this.next();
        if (playBtn.classList.contains("playing")) {
            // Remove class to return to play button state/appearance
            playBtn.classList.remove("playing");
            // Remove setInterval
            clearInterval(this.carouselPlayState);
            this.carouselPlayState = null;
        } else {
            // Add class to change to pause button state/appearance
            playBtn.classList.add("playing");
            // First run initial next method
            this.next();
            // Use play state prop to store interval ID and run next method on a 1.5 second interval
            this.carouselPlayState = setInterval(startPlaying, 1500);
        }
    }
}
// Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels
const element = document.querySelector(".carousel-custom");
// Create a new carousel object
const exampleCarousel = new Carousel(element);
// Setup carousel and methods
exampleCarousel.mounted();

//# sourceMappingURL=index.b4e3f4fa.js.map
