let count = 1;
let startIndex = 0;
let deleteCount = 10;
let recipeArrayList = [];
let latestRecipeArrayList = [];

const selectElement = document.getElementById('categories');
const arrowRight = document.querySelector('#arrowRight');
const arrowLeft = document.querySelector('#arrowLeft');
const startingIndex = document.querySelector('#startingIndex');
const endPageNumber = document.querySelector('#endPageNumber');
const searchButton = document.querySelector('.btn-outline-success');
const searchInput = document.querySelector('#searchInput');
const spinner = document.querySelector('#spinnerTop');
const spinnerLatest = document.querySelector('#spinnerLatest');
const seeMoreButton = document.querySelector('#seeMoreButton');

//api key
const apiKey = process.env.SPOONACULAR_API_KEY;
// top recipes
let topRecipesUrl = `https://api.spoonacular.com/food/search?query=top+recipes&number=40&apiKey=${apiKey}`;
// latest recipes
let latestRecipesUrl = `https://api.spoonacular.com/food/search?query=&number=40&apiKey=${apiKey}`;

selectElement.addEventListener('change', () => {
    spinner.style.display = 'block';
    count = 1;
    startIndex = 0;
    deleteCount = 10;
    arrowLeft.style.color = '#CCCCCC';
    arrowRight.style.color = '#F1632D';
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedText = selectedOption.textContent;
    topRecipesUrl = `https://api.spoonacular.com/food/search?query=top+recipes+${selectedText}&number=40&apiKey=${apiKey}`;
    latestRecipesUrl = `https://api.spoonacular.com/food/search?query=&number=40&apiKey=${apiKey}`;
    console.log(topRecipesUrl);
    console.log(latestRecipesUrl);
    fetchRecipes(topRecipesUrl, latestRecipesUrl);
})

document.addEventListener('DOMContentLoaded', () => {
    spinner.style.display = 'block';
    fetchRecipes(topRecipesUrl, latestRecipesUrl);
});

arrowLeft.addEventListener('click', () => {
    if (startIndex > 0 && deleteCount >= 10) {
        arrowRight.style.color = '#F1632D';
        startIndex -= 10;
        deleteCount -= 10;
        count--;
        spinner.style.display = 'block';
        displayTopRecipe(recipeArrayList);
    } else {
        arrowLeft.style.color = '#CCCCCC';
        console.log('Cannot reduce more.');
        return;
    }
})

arrowRight.addEventListener('click', () => {
    if (deleteCount < recipeArrayList.length) {
        arrowLeft.style.color = '#F1632D';
        startIndex += 10;
        deleteCount += 10;
        count++;
        spinner.style.display = 'block';
        displayTopRecipe(recipeArrayList);
    } else {
        arrowRight.style.color = '#CCCCCC';
        console.log('Reached maximum delete count.');
        return;
    }
})

searchButton.addEventListener('click', () => {
    spinner.style.display = 'block';
    spinnerLatest.style.display = 'block';
    count = 1;
    startIndex = 0;
    deleteCount = 10;
    arrowLeft.style.color = '#CCCCCC';
    arrowRight.style.color = '#F1632D';
    let inputValue = searchInput.value;
    topRecipesUrl = `https://api.spoonacular.com/food/search?query=${inputValue}&number=40&apiKey=${apiKey}`;
    console.log(topRecipesUrl);
    fetchRecipes(topRecipesUrl, latestRecipesUrl);
})

seeMoreButton.addEventListener('click', () => {
    if (latestRecipeArrayList.length > 0) {
        displayLatestRecipe(latestRecipeArrayList);
    } else {
        seeMoreButton.disabled = true;
        seeMoreButton.style.backgroundColor = '#ccc'
    }
})

async function fetchRecipes(topRecipe, latestRecipe) {
    try {
        const response1 = await fetch(topRecipe);
        const response2 = await fetch(latestRecipe);
        const jsonData1 = await response1.json();
        const jsonData2 = await response2.json();
        const tRecipesList = jsonData1.searchResults[0];
        const latestRecipesList = jsonData2.searchResults[0];
        recipeArrayList = tRecipesList.results;
        latestRecipeArrayList = latestRecipesList.results;
        displayTopRecipe(tRecipesList.results);
        displayLatestRecipe(latestRecipeArrayList);
        displayGalleryImages(latestRecipeArrayList);
        spinner.style.display = 'none';
        spinnerLatest.style.display = 'none';
    } catch (error) {
        console.error(error);
    }
}

function displayTopRecipe(recipes) {
    const topRecipesContainer = document.querySelector('#topRecipesContainer');
    startingIndex.textContent = count;
    if (recipes.length % 10 === 0) {
        endPageNumber.textContent = (recipes.length / 10);
    } else {
        endPageNumber.textContent = Math.floor(recipes.length / 10) + count;
    }

    if (document.querySelector('#recipeCardContainer')) {
        console.log('Recipe Card Container found! Deleting...');
        topRecipesContainer.removeChild(document.querySelector('#recipeCardContainer'));
    }

    if (!document.querySelector('#recipeCardContainer')) {
        console.log('Recipe Card Container not found. Creating new container...')
        const recipeCardContainer = document.createElement('div');
        recipeCardContainer.id = 'recipeCardContainer';
        topRecipesContainer.appendChild(recipeCardContainer);
    }
    const topRecipesArray = recipes.slice(startIndex, deleteCount);
    for (let i = 0; i < topRecipesArray.length; i++) {
        // collecting recipes to an array
        let topRecipes = topRecipesArray[i];
        // recipe card div
        const recipeCard = document.createElement('div');
        recipeCard.className = 'card';
        recipeCard.id = 'recipeCard';

        // recipe container div
        const recipeContainer = document.createElement('div');
        recipeContainer.className = 'recipe-container';

        // recipe image
        const recipeImg = document.createElement('img');
        recipeImg.src = `${topRecipes.image}`;
        recipeImg.className = 'card-img-top';
        recipeImg.id = 'recipeImg';
        recipeImg.alt = 'Recipe Picture';

        // tag span
        const tag = document.createElement('span');
        tag.textContent = 'DISHES';
        tag.className = 'tag';

        // date actions container
        const dateActionsContainer = document.createElement('div');
        dateActionsContainer.id = 'dateActionsContainer';

        // recipe date span
        const recipeDate = document.createElement('span');
        recipeDate.id = 'recipeDate';
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        recipeDate.textContent = formattedDate;

        // action buttons container
        const actionButtonsContainer = document.createElement('div');
        actionButtonsContainer.id = 'actionButtonsContainer';

        // chat button
        const chatButton = document.createElement('button');
        chatButton.id = 'chatButton';

        // chat icon
        const chatRight = document.createElement('i');
        chatRight.className = 'bi bi-chat-right';

        // share button
        const shareButton = document.createElement('button');
        shareButton.id = 'shareButton';

        // share icon
        const shareIcon = document.createElement('i');
        shareIcon.className = 'bi bi-share';

        // card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // card-title
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `${topRecipes.name}`;

        // card-text
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        let recipeContent = topRecipes.content;
        cardText.innerHTML = `${recipeContent.slice(0, 200) + '...'}`

        // read more
        const readMore = document.createElement('a');
        readMore.textContent = 'Read More';
        readMore.href = `${topRecipes.link}`;

        //Appending Children
        recipeCardContainer.appendChild(recipeCard);
        recipeCard.append(recipeContainer, dateActionsContainer, cardBody);

        recipeContainer.append(recipeImg, tag);

        dateActionsContainer.append(recipeDate, actionButtonsContainer);
        actionButtonsContainer.append(chatButton, shareButton);

        chatButton.appendChild(chatRight);
        shareButton.appendChild(shareIcon);

        cardBody.append(cardTitle, cardText, readMore);
    }
    spinner.style.display = 'none';
}

function displayLatestRecipe(recipes) {
    const latestRecipesContainer = document.querySelector('#latestRecipesContainer');

    if (!document.querySelector('#recipeCardContainerLatest')) {
        console.log('Recipe Card Container not found. Creating new container...')
        const recipeCardContainerLatest = document.createElement('div');
        recipeCardContainerLatest.id = 'recipeCardContainerLatest';
        latestRecipesContainer.appendChild(recipeCardContainerLatest);
    }

    const latestRecipeArrayList = recipes.splice(0, 4);

    for (let i = 0; i < latestRecipeArrayList.length; i++) {
        // collecting recipes to an array
        let latestRecipes = latestRecipeArrayList[i];
        // recipe card div
        const recipeCard = document.createElement('div');
        recipeCard.className = 'card';
        recipeCard.id = 'recipeCard';

        // recipe container div
        const recipeContainer = document.createElement('div');
        recipeContainer.className = 'recipe-container';

        // recipe image
        const recipeImg = document.createElement('img');
        recipeImg.src = `${latestRecipes.image}`;
        recipeImg.className = 'card-img-top';
        recipeImg.id = 'recipeImg';
        recipeImg.alt = 'Recipe Picture';

        // tag span
        const tag = document.createElement('span');
        tag.textContent = 'DISHES';
        tag.className = 'tag';

        // date actions container
        const dateActionsContainer = document.createElement('div');
        dateActionsContainer.id = 'dateActionsContainer';

        // recipe date span
        const recipeDate = document.createElement('span');
        recipeDate.id = 'recipeDate';
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        recipeDate.textContent = formattedDate;

        // action buttons container
        const actionButtonsContainer = document.createElement('div');
        actionButtonsContainer.id = 'actionButtonsContainer';

        // chat button
        const chatButton = document.createElement('button');
        chatButton.id = 'chatButton';

        // chat icon
        const chatRight = document.createElement('i');
        chatRight.className = 'bi bi-chat-right';

        // share button
        const shareButton = document.createElement('button');
        shareButton.id = 'shareButton';

        // share icon
        const shareIcon = document.createElement('i');
        shareIcon.className = 'bi bi-share';

        // card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // card-title
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `${latestRecipes.name}`;

        // card-text
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        let recipeContent = latestRecipes.content;
        cardText.innerHTML = `${recipeContent.slice(0, 200) + '...'}`

        // read more
        const readMore = document.createElement('a');
        readMore.textContent = 'Read More';
        readMore.href = `${latestRecipes.link}`;

        //Appending Children
        recipeCardContainerLatest.appendChild(recipeCard);
        recipeCard.append(recipeContainer, dateActionsContainer, cardBody);

        recipeContainer.append(recipeImg, tag);

        dateActionsContainer.append(recipeDate, actionButtonsContainer);
        actionButtonsContainer.append(chatButton, shareButton);

        chatButton.appendChild(chatRight);
        shareButton.appendChild(shareIcon);

        cardBody.append(cardTitle, cardText, readMore);
    }
    spinnerLatest.style.display = 'none';
}

function displayGalleryImages(recipeImages) {
    const galleryImagesContainer = document.querySelector('#galleryImagesContainer');
    const galleryImagesList = recipeImages.splice(0, 20);
    for (let i = 0; i < galleryImagesList.length; i++) {
        const imgEl = document.createElement('img');
        imgEl.src = `${galleryImagesList[i].image}`;
        imgEl.alt = 'img';
        imgEl.draggable = 'false';
        imgEl.id = `img-${i}`;
        galleryImagesContainer.appendChild(imgEl);
    }
}
