const postsContainer = document.querySelector("#container-posts");
const layoverEl = document.querySelector(".layover");
const closeBtnEl = document.querySelector(".btn");



axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then (response => {
        const posts= response.data;
        console.log(posts);

        let cardHtml = "";

        posts.forEach(post => {
            cardHtml += generatePostCard(post);
        });

        postsContainer.innerHTML = cardHtml;

        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.addEventListener ("click", () => {                                   
                const postId = card.getAttribute("data-post-id"); 
                console.log(postId);       
                const postClicked = posts.find(post => post.id == postId);
                console.log(postClicked);
                closeBtnEl.classList.add("d-block");
                layoverEl.classList.add("d-block");
                closeBtnEl.addEventListener("click", () => {
                    layoverEl.classList.remove("d-block");
                    closeBtnEl.classList.remove("d-block"); 
                })
            })
        })
    })


const generatePostCard = (post) => {
    const cardHtml = `
            <div class="col-4">
                <div class="card" data-post-id="${post.id}">
                    <img id="logo"  src="./img/pin.svg">
                    <div class="card-image">
                        <img src="${post.url}" alt="${post.title}">
                    </div>
                    <div class="card-title">
                        <span>${post.date}</span>
                        <h5>${post.title}</h5>
                    </div>
                </div>
            </div>    
    `;
    return cardHtml;
}
        