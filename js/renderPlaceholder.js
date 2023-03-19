import {visitCardContainer} from "./constants.js";

function renderPlaceholder(){
    visitCardContainer.innerHTML = `<section class="images pt-3" id="placeholder">
                                            <div class="images-container mx-auto" style="width: 25rem;">
<!--                                                <img src="https://www.englishdom.com/dynamicus/blog-post/000/002/383/1637751298_content_700x455.jpg" class="card-img-top mb-4" alt="">-->
                                                <img src="https://www.meme-arsenal.com/memes/3e517df66f475a773da6dbb29e812d2e.jpg" class="card-img-top mb-4" alt="">
                                                <p class="images-text text-center fs-3 text-light"> No items have been added</p>
                                            </div>
                                        </section>`;
}

export {renderPlaceholder}