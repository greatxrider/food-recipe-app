const apiKey = process.env.SPOONACULAR_API_KEY;
const RecipesUrl = `https://api.spoonacular.com/food/search?query=&number=10&apiKey=${apiKey}`;
let recipeDataArray = [];

class Carousel {
    constructor(element) {
        this.element = element;
        this.carouselOptions = ['previous', 'next'];
        this.carouselData = recipeDataArray;
        this.carouselInView = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.carouselContainer;
        this.carouselPlayState;
    }

    mounted() {
        this.setupCarousel();
    }

    // Build carousel html
    setupCarousel() {
        console.log(recipeDataArray);
        const container = document.createElement('div');
        const controls = document.createElement('div');

        // Add container for carousel items and controls
        this.element.append(container, controls);
        container.className = 'carousel-custom-container';
        controls.className = 'carousel-custom-controls container';
        console.log(recipeDataArray);
        // Take dataset array and append items to container
        this.carouselData.forEach((item, index) => {
            const carouselItem = item.image ? document.createElement('div') : null;
            const imgItem = document.createElement('img');
            const foodTitle = item.name ? document.createElement('h4') : null;
            carouselItem.append(imgItem, foodTitle);
            container.append(carouselItem);

            // Add item attributes
            foodTitle.className = `foodTitle-item foodTitle-custom-item-${index + 1}`
            foodTitle.textContent = item.name;
            foodTitle.setAttribute('loading', 'lazy');

            imgItem.className = `imageItem imageItem-custom-item-${index + 1}`;
            imgItem.src = item.image;

            carouselItem.className = `carousel-custom-item carousel-custom-item-${index + 1}`;
            carouselItem.setAttribute('loading', 'lazy');
            // Used to keep track of carousel items, infinite items possible in carousel however min 5 items required
            carouselItem.setAttribute('data-index', `${index + 1}`);
            foodTitle.setAttribute('data-index', `${index + 1}`);
        })

        this.carouselOptions.forEach((option) => {
            const btn = document.createElement('button');
            const axSpan = document.createElement('span');

            // Add accessibilty spans to button
            axSpan.innerText = option;
            axSpan.className = 'ax-hidden';
            btn.append(axSpan);

            // Add button attributes
            btn.className = `carousel-custom-control carousel-custom-control-${option}`;
            btn.setAttribute('data-name', option);

            // Add carousel control options
            controls.append(btn);
        });

        // After rendering carousel to our DOM, setup carousel controls' event listeners
        this.setControls([...controls.children]);

        // Set container property
        this.carouselContainer = container;
        container.append(controls);
    }

    setControls(controls) {
        controls.forEach(control => {
            control.onclick = (event) => {
                event.preventDefault();

                // Manage control actions, update our carousel data first then with a callback update our DOM
                this.controlManager(control.dataset.name);
            };
        });
    }

    controlManager(control) {
        if (control === 'previous') return this.previous();
        if (control === 'next') return this.next();
        return;
    }

    previous() {
        // Update order of items in data array to be shown in carousel
        this.carouselData.unshift(this.carouselData.pop());

        // Push the first item to the end of the array so that the previous item is front and center
        this.carouselInView.push(this.carouselInView.shift());

        // Update the css class for each carousel item in view
        this.carouselInView.forEach((item, index) => {
            this.carouselContainer.children[index].className = `carousel-custom-item carousel-custom-item-${item}`;
        });
    }

    next() {
        // Update order of items in data array to be shown in carousel
        this.carouselData.push(this.carouselData.shift());

        // Take the last item and add it to the beginning of the array so that the next item is front and center
        this.carouselInView.unshift(this.carouselInView.pop());

        // Update the css class for each carousel item in view
        this.carouselInView.forEach((item, index) => {
            this.carouselContainer.children[index].className = `carousel-custom-item carousel-custom-item-${item}`;
        });
    }
}

async function fetchFoodData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const dataSearchResults = data.searchResults[0]
        recipeDataArray = dataSearchResults.results;
        const element = document.querySelector('.carousel-custom');
        const exampleCarousel = new Carousel(element);
        exampleCarousel.mounted();
    } catch (error) {
        console.error(error);
    }
}

fetchFoodData(RecipesUrl);
// Refers to the carousel root element you want to target, use specific class selectors if using multiple carousels

// Create a new carousel object

// Setup carousel and methods
