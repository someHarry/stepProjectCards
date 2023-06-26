import { visitCardContainer } from "./constants.js";

function renderPlaceholder() {
  visitCardContainer.innerHTML = `<section class="images pt-3" id="placeholder">
                                            <div class="images-container mx-auto " style="width: 25rem;">
<!--                                                <img src="https://www.englishdom.com/dynamicus/blog-post/000/002/383/1637751298_content_700x455.jpg" class="card-img-top mb-4" alt="">-->
                                                <img src="/img/placeholder_meme.jpg" class="card-img-top mb-4" alt="meme">
                                                <p class="images-text text-center fs-3 text-light"> No items have been added</p>
                                            </div>
                                        </section>`;
}

export { renderPlaceholder };
