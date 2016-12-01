var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTypescript;
(function (SampleTypescript) {
    var Controllers;
    (function (Controllers) {
        var FormulaController = (function (_super) {
            __extends(FormulaController, _super);
            function FormulaController($scope, $element, $location, $routeParams, LogService, FormulaService) {
                _super.call(this, $scope, $element);
                this.$element = $element;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.LogService = LogService;
                this.FormulaService = FormulaService;
                this.configs = {};
                var $this = this;
                $this.configs.gridOptions = {
                    dataSource: new kendo.data.DataSource({
                        transport: {
                            read: function (options) {
                                $this.FormulaService.GetFormulas().success(function (data) {
                                    $this.Formulas = data.Payload.Entities;
                                    options.success($this.Formulas);
                                });
                            }
                        },
                        schema: {
                            model: {
                                id: "Id",
                                fields: {
                                    Id: { type: "number" },
                                    CategoryName: { type: "string" },
                                    CategoryId: { type: "number" },
                                    FormulaName: { type: "string" },
                                    TypeName: { type: "string" },
                                    Occurrences: { type: "string" },
                                    UpdateDate: { type: "date" }
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
                $this.FormulaService.GetCategories().success(function (data) {
                    $this.Categories = data.Payload.Entities;
                    $this.controls.ddl.dataSource.data($this.Categories);
                });
                $this.configs.wndConfirmOptions = {
                    width: "auto",
                    height: "auto",
                    visible: false,
                    modal: true,
                    resizable: false
                };
            }
            FormulaController.prototype.ViewDetail = function (Id) {
                var $this = this;
                if (Id)
                    $this.$location.url('/estimate/formula/detail?Id=' + Id);
                else
                    $this.$location.url('/estimate/formula/detail');
            };
            ;
            FormulaController.prototype.DeleteFormula = function (Id, $this) {
                $this.FormulaService.DeleteFormula(Id).success(function (data) {
                    if (data.Success) {
                        var item = $this.controls.grid.dataSource.get(data.Payload.Id);
                        $this.controls.grid.dataSource.remove(item);
                    }
                });
            };
            ;
            FormulaController.prototype.CloneFormula = function (Id, $this) {
                $this.FormulaService.CloneFormula(Id).success(function (data) {
                    if (data.Success) {
                        data.Payload.UpdateDate = new Date(new Date(data.Payload.UpdateDate).toLocaleDateString());
                        $this.controls.grid.dataSource.add(data.Payload);
                    }
                });
            };
            ;
            FormulaController.prototype.OpenPopup = function (Id, type) {
                var $this = this;
                $this.Id = Id;
                if (type == 1) {
                    $this.Message = 'Do you want to delete this record?';
                    $this.callback = $this.DeleteFormula;
                    $this.controls.wndConfirm.title('Delete');
                }
                else if (type == 2) {
                    $this.Message = 'Do you want to clone this record?';
                    $this.callback = $this.CloneFormula;
                    $this.controls.wndConfirm.title('Clone');
                }
                $this.controls.wndConfirm.center().open();
            };
            FormulaController.prototype.No = function () {
                var $this = this;
                $this.controls.wndConfirm.center().close();
            };
            FormulaController.prototype.Yes = function () {
                var $this = this;
                $this.callback($this.Id, $this);
                $this.controls.wndConfirm.center().close();
            };
            FormulaController.prototype.onCategoryChange = function (e) {
                var controller = e.sender.$angular_scope.vm;
                if (e.sender.value())
                    controller.controls.grid.dataSource.filter({ field: "CategoryId", operator: "eq", value: e.sender.value() });
                else {
                    controller.controls.grid.dataSource.filter([]);
                }
            };
            FormulaController.prototype.filterGrid = function () {
                var $this = this;
                var filter = { logic: "or", filters: [] };
                var date = new Date($this.SearchText);
                if ($this.SearchText.length > 0) {
                    filter.filters.push({ field: "CategoryName", operator: "contains", value: $this.SearchText });
                    filter.filters.push({ field: "FormulaName", operator: "contains", value: $this.SearchText });
                    filter.filters.push({ field: "TypeName", operator: "contains", value: $this.SearchText });
                    filter.filters.push({ field: "Occurrences", operator: "contains", value: $this.SearchText });
                }
                if ($this.SearchText.length > 0) {
                    $this.controls.grid.dataSource.filter(filter);
                }
                else {
                    $this.controls.grid.dataSource.filter({});
                }
            };
            return FormulaController;
        }(Controllers.BaseController));
        Controllers.FormulaController = FormulaController;
    })(Controllers = SampleTypescript.Controllers || (SampleTypescript.Controllers = {}));
})(SampleTypescript || (SampleTypescript = {}));
