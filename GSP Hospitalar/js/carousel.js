class Carousel {
    constructor(carousel, backClass, nextClass) {
        this.collection = [];
        this.productIndex = -1;
        this.productClass = "carousel__item";
        this.productListClass = "carousel__list";

        if (carousel == undefined) {
            new Error("The carousel element is undefined");
        }

        this.carousel = carousel;
        this.updateSizing();

        window.addEventListener(
            "resize",
            function() {
                this.selectProduct(this.productIndex);
                this.updateSizing();
            }.bind(this)
        );

        if (backClass != null) {
            this.findElement(backClass).addEventListener(
                "click", this.backProduct.bind(this)
            );
        }

        if (nextClass != null) {
            this.findElement(nextClass).addEventListener(
                "click", this.nextProduct.bind(this)
            );
        }
    }

    updateSizing() {
        let productWidth = this.getProductWidth();
        
        for (let i = 0; i < this.collection.length; i++) {
            let height = Math.floor(productWidth / 24) * 24;

            this.collection[i].style.height = `${height}px`;
        }
    }

    getProductWidth() {
        if (this.loadProducts().length > 0) {
            let products = this.collection[0].getElementsByClassName("product");

            if (products.length == 0) {
                throw new Error("Product not found");
            }
            else {
                return products[0].getBoundingClientRect().width;
            }
        }
        else {
            return 0;
        }
    }

    loadProducts() {
        if (this.collection.length == 0) {
            this.collection = this.carousel.getElementsByClassName(this.productClass);

            if (this.productIndex == -1) {
                this.nextProduct();
            }
        }

        return this.collection;
    }

    findElement(className) {
        let elements = this.carousel.parentElement.getElementsByClassName(className);

        if (elements.length > 0) {
            return elements[0];
        }
        else {
            throw new Error(`Element was not found: ${className}`);
        }
    }

    selectProduct(index) {
        if (index < 0) {
            index = 0;
        }
        else {
            let width = window.innerWidth;
            let limit = this.collection.length;

            if (width >= 900) {
                limit -= 3;
            }
            else if (width >= 600) {
                limit -= 2;
            }
            else {
                limit -= 1;
            }

            if (index > limit) {
                index = limit;
            }
        }

        this.productIndex = index;
        this.translateView();
    }

    translateView() {
        let productList = this.findElement(this.productListClass);
        let translation = 100;

        if (window.innerWidth >= 900) {
            translation /= 3;
        }
        else if (window.innerWidth >= 600) {
            translation /= 2;
        }

        productList.style.transform = `translateX(${0 - this.productIndex * translation}%)`;
    }

    backProduct() {
        this.selectProduct(this.productIndex - 1);
    }

    nextProduct() {
        this.selectProduct(this.productIndex + 1);
    }
}