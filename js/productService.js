const retrieveProducts = () => {
    return new Promise( (resolve, reject) => {
        fetch('http://localhost:8080/api/product')
            .then( async result => {

                const data = await result.json();
                resolve(data);

            } )
            .catch( err => {
                reject(err);
            } );
    } );
}

retrieveProducts()
    .then( products => {
        const wrapper = document.querySelector('#products__wrapper');
        products.forEach( product => {
            wrapper.innerHTML += `
                <div class="product">
                    <div class="product__img"
                         style="background-image: url('img/${product.id}.jpg')">
                    </div>

                    <div class="product__content">
                        <h4> ${product.name} </h4>
                        <p> ${product.description} </p>

                        <div class="product__bottom">

                            <p class="product__price"> $10000 </p>
                            <p class="product__buy" role="button"> KUP </p>

                        </div>
                    </div>
                </div>
            `
        } );
    } );