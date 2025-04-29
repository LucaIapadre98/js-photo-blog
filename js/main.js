const postsContainer = document.querySelector("#container-posts");       
const layoverEl = document.querySelector(".layover");                 // chiamo le varie classi per il collegamento //
const closeBtnEl = document.querySelector(".btn");



axios.get("https://lanciweb.github.io/demo/api/pictures/")          // chiamo l'API per il caricamento delle immagini //
    .then (response => {
        const posts= response.data;
        console.log(posts);

        let cardHtml = "";                                          // genero una card vuote //

        posts.forEach(post => {
            cardHtml += generatePostCard(post);                      
        });

        postsContainer.innerHTML = cardHtml;                        // aggiungo le card nell'HTML //

        const cards = document.querySelectorAll(".card");               
        cards.forEach(card => {
            card.addEventListener ("click", () => {                         // aggiungo funzione alle card //
                const postId = card.getAttribute("data-post-id"); 
                console.log(postId);    
                const postClicked = posts.find(post => post.id == postId);      // aggiungo la funzione al post cliccato //
                closeBtnEl.classList.add("d-block");                              // aggiungo le varie classi dopo la funzione //
                layoverEl.classList.add("d-block");
                if(postClicked.id == postId){                                 // condizione che SE l'Id del post cliccato è uguale all'Id del post apro immagine //                                                                                                   
                    layoverEl.innerHTML = `                                        
                    <div class="col-4">
                        <div class="card" data-post-id="${postClicked.id}">
                            <img  src="#">
                            <div class="card-image">
                                <img src="${postClicked.url}" alt="${postClicked.title}">
                            </div>
                            <div class="card-title">
                                <span>${postClicked.date}</span>
                                <h5>${postClicked.title}</h5>
                            </div>
                        </div>
                    </div>`;
                }                                                                // aggiungo l'immagine cliccata //
                closeBtnEl.addEventListener("click", () => {                           // condizione di chiusura del bottone //
                    layoverEl.classList.remove("d-block");                                // rimuovo le classi precedentemente aggiunte //
                    closeBtnEl.classList.remove("d-block"); 
                })
            })
        })
    })


const generatePostCard = (post) => {                                             // genero una card per ogni post //
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
        