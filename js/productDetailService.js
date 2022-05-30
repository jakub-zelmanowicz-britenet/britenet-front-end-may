const retrieveCurrentProduct = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');

    alert('Product ID: ' + product);

}

retrieveCurrentProduct();