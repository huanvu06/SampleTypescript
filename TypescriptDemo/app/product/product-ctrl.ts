module SampleTypescript.Controllers {
    export class ProductController extends BaseController {
        public configs: {
            gridOptions: kendo.ui.GridOptions;
            ddlOptions: kendo.ui.DropDownListOptions;
            wndConfirmOptions: kendo.ui.WindowOptions;
        } = <any>{};
        public controls: {
            grid: kendo.ui.Grid;
            ddl: kendo.ui.DropDownList;
            wndConfirm: kendo.ui.Window;
        };

        public Products;
        public Categories;
        public SearchText;
        public Message;
        public Id;
        public callback: Function;

        constructor($scope: IProductScope, private $element: JQuery, private $location: ng.ILocationService
            , private $routeParams, private LogService: Services.LogService
            , private ProductService: Services.ProductService) {
            super($scope, $element);
            
            var $this = this;
            $this.configs.gridOptions = {
                dataSource: new kendo.data.DataSource({
                    transport: {
                        read: function (options) {
                            $this.ProductService.GetProducts().success(function (data) {
                                $this.Products = data;
                                options.success($this.Products);
                            });
                        }
                    },
                    schema: {
                        model: {
                            id: "Id",
                            fields: {
                                id: { type: "number" },
                                name: { type: "string" },
                                unitPrice: { type: "number" }
                            }
                        }
                    },
                }),
            };

            $this.configs.ddlOptions = {
                dataTextField: "Value",
                dataValueField: "Id",
                dataSource: {
                    data: []
                },
                optionLabel: "Select One",
                change: $this.onCategoryChange
            };

            $this.ProductService.GetProducts().success(function (data) {
                $this.Categories = data;
                //$this.controls.ddl.dataSource.data($this.Categories);
                
            });

            $this.configs.wndConfirmOptions = {
                width: "auto",
                height: "auto",
                visible: false,
                modal: true,
                resizable: false
            }
            
        }

        ViewDetail(Id) {
            var $this = this;
            if(Id)
                $this.$location.url('/product/detail?Id=' + Id);
            else
                $this.$location.url('/product/detail');
        };        

        DeleteProduct(Id, $this) {
            $this.ProductService.DeleteProduct(Id).success(function (data) {
                if (data.Success) {
                    var item = $this.controls.grid.dataSource.get(data.Payload.Id);
                    $this.controls.grid.dataSource.remove(item);
                }
            });            
        };

        CloneProduct(Id, $this) {
            $this.ProductService.CloneProduct(Id).success(function (data) {
                if (data.Success) {
                    data.Payload.UpdateDate = new Date(new Date(data.Payload.UpdateDate).toLocaleDateString());
                    $this.controls.grid.dataSource.add(data.Payload);
                }
            });            
        };

        OpenPopup(Id, type) {
            var $this = this;
            $this.Id = Id;
            if (type == 1) //delete
            {
                $this.Message = 'Do you want to delete this record?';
                $this.callback = $this.DeleteProduct;
                $this.controls.wndConfirm.title('Delete');
            }
            else if (type == 2) //clone
            {
                $this.Message = 'Do you want to clone this record?';
                $this.callback = $this.CloneProduct;
                $this.controls.wndConfirm.title('Clone');
            }
            
            $this.controls.wndConfirm.center().open();
        }

        No() {
            var $this = this;
            $this.controls.wndConfirm.center().close();
        }

        Yes() {
            var $this = this;
            $this.callback($this.Id, $this);
            $this.controls.wndConfirm.center().close();
        }

        onCategoryChange(e) {
            var controller = e.sender.$angular_scope.vm;
            if (e.sender.value())
                controller.controls.grid.dataSource.filter({ field: "CategoryId", operator: "eq", value: e.sender.value() });
            else {
                controller.controls.grid.dataSource.filter([]);
            }
        }

        filterGrid() {
            var $this = this;
            var filter = { logic: "or", filters: [] };

            var date = new Date($this.SearchText);
            if ($this.SearchText.length > 0) {
                filter.filters.push({ field: "CategoryName", operator: "contains", value: $this.SearchText });
                filter.filters.push({ field: "ProductName", operator: "contains", value: $this.SearchText });
                filter.filters.push({ field: "TypeName", operator: "contains", value: $this.SearchText });
                filter.filters.push({ field: "Occurrences", operator: "contains", value: $this.SearchText });
                //filter.filters.push({ field: "UpdateDate", operator: "eq", value: date });
            }
            if ($this.SearchText.length > 0) {
                $this.controls.grid.dataSource.filter(filter);
            }
            else {
                $this.controls.grid.dataSource.filter({});
            }
        }
    }
    
    export interface IProductScope extends IAppScope { }

    export interface IProductDetailScope extends IAppScope { }
}