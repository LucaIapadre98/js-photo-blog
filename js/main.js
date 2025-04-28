const postsContainer = document.querySelector("#container-posts");

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        const posts= response.data;
        console.log(posts);


        let cardHtml = "";

        posts.forEach(post => {
            cardHtml += generatePostCard(post);
        });

        postsContainer.innerHTML = cardHtml;
    });

const generatePostCard = (post) => {
    const cardHtml = `
            <div class="col-4">
                <div class="card">
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
        