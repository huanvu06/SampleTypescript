module SampleTypescript.Services {
    export class ProductService {
        constructor(private LogService: LogService, private $http: ng.IHttpService) { }

        GetProducts(): ng.IHttpPromise<Product.ProductDto[]> {
            return this.$http.get(Main.APIs.BASE + "api/product");
        }     

        GetProductById(Id: number): ng.IHttpPromise<Product.ProductDto> {
            return this.$http.get(Main.APIs.BASE + "api/product/" + Id);
        }
    }
        
    export module Product {        
        export interface ProductDto {
            Id: number;
            Name: string;
            UnitPrice: number;

            Attributes: ProductAttributeDto[];
        }

        export interface ProductAttributeDto {
            Id: number;
            FK_ProductId: number;
            AttributeName: string;
            AttributeValue: string;

            Product: ProductDto;
        }
    }
}