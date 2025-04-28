const postsContainer = document.querySelector("#container-posts");
const layoverEl = document.querySelector(".layover");

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
            const postId = parseInt( card.getAttribute("data-post-id"));
            console.log(postId);
             const postClicked = posts.find(post => post.id === postId);
            
             console.log(postClicked);
            })

        });
    });

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
        