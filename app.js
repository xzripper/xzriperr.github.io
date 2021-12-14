class SiteFront {
    constructor(Products) {
        this.Products = Products
    }

    SearchProduct() {
        let ElementName = "ProductName"
        let ProductsPage = "products.html#"
        let Product = document.getElementById(ElementName).value
        let Page = ProductsPage + Product
    
        window.open(Page)
    }

    VisitProducts() {
        let ProductsPage = "products.html"

        window.open(ProductsPage)
    }

    DownloadProduct(Product) {
        window.open(this.Products[Product])
    }

    OpenMainPage() {
        let MainPage = "index.html"

        window.open(MainPage)
    }
}

let Products = {
    "MathLang": "https://github.com/xzripper/MathLang/",
    "TestsLanguage": "https://github.com/xzripper/TestsLanguage/",
    "LanguageCreator": "https://github.com/xzripper/LanguageCreator/",
    "LuaUI": "https://github.com/xzripper/LuaUI/"
}

let Site = new SiteFront(Products)
