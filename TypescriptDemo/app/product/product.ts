module SampleTypescript {
    export module Routes {
        export class FormulaRoute {
            static Pages: Array<IRoute> = [
                {
                    route: "/product",
                    templateUrl: "product/views/product.html"
                }
            ]
        }
    }
}