async function getData() {
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    console.log(products)
    const productsArr = products.map(elemento => Object.entries(elemento));
    console.log(productsArr)
    const productsSlice = productsArr.slice(0,4);
    products.forEach(element => {
        const randomInt = randonData(1, productsArr.length);
        const randomIndex = randomInt;
        for(i = 0; i < productsSlice.length; i++ ){
            if(element.id == i){
                const card = document.createRange().createContextualFragment(`
                    
                div class="card">
                    <img src="${productsArr[randomIndex][5][1]}" alt="">
                    <div class="card-text">
                        <h2>nombre</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis recusandae dolor. Dolorum dolorem molestias et voluptas quaerat ea ut sit consequatur natus nemo ipsa atque commodi esse excepturi, magni quibusdam laboriosam soluta laudantium alias omnis sapiente quae ab consectetur similique? Cupiditate libero accusamus nobis eum. Corrupti odio labore itaque.</p>
                    </div>
                </div>
                    
                    `)
                    const products_flex = document.querySelector('.products-flex');
                    products_flex.append(card);
            }
        }
        function randonData(min, max) {
            return Math.floor(Math.random() * (min - max + 1) + max)
        }
    });
}

getData()