var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SampleTypescript;
(function (SampleTypescript) {
    var Controllers;
    (function (Controllers) {
        var ProductController = (function (_super) {
            __extends(ProductController, _super);
            function ProductController($scope, $element, $location, $routeParams, LogService, ProductService) {
                _super.call(this, $scope, $element);
                this.$element = $element;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.LogService = LogService;
                this.ProductService = ProductService;
                this.configs = {};
                var $this = this;
                $this.configs.gridOptions = {
                    dataSource: new kendo.data.DataSource({
                        transport: {
                            read: function (options) {
                                $this.ProductService.GetProducts().success(function (data) {
                                    $this.Products = data.Payload;
                                    options.success($this.Products);
                                });
                            }
                        },
                        schema: {
                            model: {
                                id: "Id",
                                fields: {
                                    Id: { type: "number" },
                                    Name: { type: "string" },
                                    UnitPrice: { type: "number" }
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
                    $this.Categories = data.Payload;
                    //$this.controls.ddl.dataSource.data($this.Categories);
                });
                $this.configs.wndConfirmOptions = {
                    width: "auto",
                    height: "auto",
                    visible: false,
                    modal: true,
                    resizable: false
                };
            }
            ProductController.prototype.ViewDetail = function (Id) {
                var $this = this;
                if (Id)
                    $this.$location.url('/product/detail?Id=' + Id);
                else
                    $this.$location.url('/product/detail');
            };
            ;
            ProductController.prototype.DeleteProduct = function (Id, $this) {
                $this.ProductService.DeleteProduct(Id).success(function (data) {
                    if (data.Success) {
                        var item = $this.controls.grid.dataSource.get(data.Payload.Id);
                        $this.controls.grid.dataSource.remove(item);
                    }
                });
            };
            ;
            ProductController.prototype.CloneProduct = function (Id, $this) {
                $this.ProductService.CloneProduct(Id).success(function (data) {
                    if (data.Success) {
                        data.Payload.UpdateDate = new Date(new Date(data.Payload.UpdateDate).toLocaleDateString());
                        $this.controls.grid.dataSource.add(data.Payload);
                    }
                });
            };
            ;
            ProductController.prototype.OpenPopup = function (Id, type) {
                var $this = this;
                $this.Id = Id;
                if (type == 1) {
                    $this.Message = 'Do you want to delete this record?';
                    $this.callback = $this.DeleteProduct;
                    $this.controls.wndConfirm.title('Delete');
                }
                else if (type == 2) {
                    $this.Message = 'Do you want to clone this record?';
                    $this.callback = $this.CloneProduct;
                    $this.controls.wndConfirm.title('Clone');
                }
                $this.controls.wndConfirm.center().open();
            };
            ProductController.prototype.No = function () {
                var $this = this;
                $this.controls.wndConfirm.center().close();
            };
            ProductController.prototype.Yes = function () {
                var $this = this;
                $this.callback($this.Id, $this);
                $this.controls.wndConfirm.center().close();
            };
            ProductController.prototype.onCategoryChange = function (e) {
                var controller = e.sender.$angular_scope.vm;
                if (e.sender.value())
                    controller.controls.grid.dataSource.filter({ field: "CategoryId", operator: "eq", value: e.sender.value() });
                else {
                    controller.controls.grid.dataSource.filter([]);
                }
            };
            ProductController.prototype.filterGrid = function () {
                var $this = this;
                var filter = { logic: "or", filters: [] };
                var date = new Date($this.SearchText);
                if ($this.SearchText.length > 0) {
                    filter.filters.push({ field: "CategoryName", operator: "contains", value: $this.SearchText });
                    filter.filters.push({ field: "ProductName", operator: "contains", value: $this.SearchText });
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
            return ProductController;
        }(Controllers.BaseController));
        Controllers.ProductController = ProductController;
    })(Controllers = SampleTypescript.Controllers || (SampleTypescript.Controllers = {}));
})(SampleTypescript || (SampleTypescript = {}));
var SampleTypescript;
(function (SampleTypescript) {
    var Services;
    (function (Services) {
        var ProductService = (function () {
            function ProductService(LogService, $http) {
                this.LogService = LogService;
                this.$http = $http;
            }
            ProductService.prototype.GetProducts = function () {
                return this.$http.get(SampleTypescript.Main.APIs.BASE + "api/product");
            };
            ProductService.prototype.GetProductById = function (Id) {
                return this.$http.get(SampleTypescript.Main.APIs.BASE + "api/product/" + Id);
            };
            return ProductService;
        }());
        Services.ProductService = ProductService;
    })(Services = SampleTypescript.Services || (SampleTypescript.Services = {}));
})(SampleTypescript || (SampleTypescript = {}));
var SampleTypescript;
(function (SampleTypescript) {
    var Routes;
    (function (Routes) {
        var FormulaRoute = (function () {
            function FormulaRoute() {
            }
            FormulaRoute.Pages = [
                {
                    route: "/product",
                    templateUrl: "product/views/product.html"
                }
            ];
            return FormulaRoute;
        }());
        Routes.FormulaRoute = FormulaRoute;
    })(Routes = SampleTypescript.Routes || (SampleTypescript.Routes = {}));
})(SampleTypescript || (SampleTypescript = {}));
var SampleTypescript;
(function (SampleTypescript) {
    var Routes;
    (function (Routes) {
        var HomeRoute = (function () {
            function HomeRoute() {
            }
            HomeRoute.Pages = [
                {
                    route: "/",
                    templateUrl: "home/views/home.html"
                }
            ];
            return HomeRoute;
        }());
        Routes.HomeRoute = HomeRoute;
    })(Routes = SampleTypescript.Routes || (SampleTypescript.Routes = {}));
})(SampleTypescript || (SampleTypescript = {}));
var SampleTypescript;
(function (SampleTypescript) {
    var Main = (function () {
        function Main() {
        }
        Main.appName = "lcpmanager";
        Main.APIs = {};
        return Main;
    }());
    SampleTypescript.Main = Main;
    $(function () {
        Main.wrapperApp = $("" + Main.wrapperApp);
        AppBuilder.init();
    });
    //https://www.npmjs.com/package/ng-intl-tel-input
    //http://ngmodules.org/modules/ngAutocomplete - http://plnkr.co/edit/il2J8qOI2Dr7Ik1KHRm8?p=preview
    Main.app = angular.module(Main.appName, ['ngAnimate', 'ngRoute', 'kendo.directives']);
    var Controllers;
    (function (Controllers) {
        var BaseController = (function () {
            function BaseController($scope, $element) {
                var self = this;
                self.controls = {};
                $element.find("[xcontrol]").each(function (index, e) {
                    var ele = $(e);
                    var name = ele.attr("xcontrol");
                    self.controls[name] = ele;
                });
            }
            return BaseController;
        }());
        Controllers.BaseController = BaseController;
    })(Controllers = SampleTypescript.Controllers || (SampleTypescript.Controllers = {}));
    var Services;
    (function (Services) {
        var AppHttpInterceptor = (function () {
            function AppHttpInterceptor($httpProvider) {
                this.$httpProvider = $httpProvider;
                var interceptor = function ($q, $cacheFactory, $timeout, $rootScope, $log, $injector, $location) {
                    function showLoading() { $('#loadingWrapper').show(); }
                    function hideLoading() { $('#loadingWrapper').hide(); }
                    return {
                        'request': function (config) {
                            //if (config.data) {
                            //    config.data = this.cursiveFixRequestArray(config.data);
                            //}                            
                            showLoading();
                            var xhr = {
                                setRequestHeader: function (name, value) {
                                    config.headers[name] = value;
                                }
                            };
                            return config;
                        },
                        'response': function (response) {
                            hideLoading();
                            return response;
                        },
                        'responseError': function (rejection) {
                            if (rejection.status !== 0) {
                                if (rejection.status === 401) {
                                    //window.location.href = "/account/login";
                                    $location.path("/login");
                                }
                            }
                            else {
                                rejection.data = null; //{ error: "Duplicated", error_description: ""};
                            }
                            hideLoading();
                            return $q.reject(rejection);
                        }
                    };
                };
                $httpProvider.interceptors.push(interceptor);
            }
            AppHttpInterceptor.prototype.cursiveFixRequestArray = function (obj, parentObj, parentObjName) {
                if (typeof obj == "object") {
                    if (obj instanceof Array && SampleTypescript.util.IsNotNull(parentObj) && SampleTypescript.string.IsEmpty(parentObjName) == false) {
                        for (var i = 0; i < obj.length; i++) {
                            var objName = parentObjName + "[" + i + "]";
                            parentObj[objName] = this.cursiveFixRequestArray(obj[i], obj, objName);
                        }
                    }
                    else {
                        var arr = [], counter = 0;
                        for (var name in obj) {
                            if (name == "$$hashKey")
                                arr.push("obj['$$hashKey']"); // Remove angular binding property
                            else if (typeof obj[name] == "object") {
                                if (SampleTypescript.regex.ValidProperty.test(name) == false) {
                                    obj[counter] = {
                                        Key: name
                                    };
                                    obj[counter].Value = this.cursiveFixRequestArray(obj[name], obj[counter], "Value");
                                    arr.push("obj['" + name + "']");
                                    if (obj[name] instanceof Array)
                                        arr.push("obj[" + counter + "].Value");
                                    counter++;
                                }
                                else {
                                    obj[name] = this.cursiveFixRequestArray(obj[name], obj, name);
                                    if (obj[name] instanceof Array)
                                        arr.push("obj['" + name + "']");
                                }
                            }
                        }
                        for (var i = 0; i < arr.length; i++) {
                            eval("delete " + arr[i]);
                        }
                    }
                }
                return obj;
            };
            return AppHttpInterceptor;
        }());
        Services.AppHttpInterceptor = AppHttpInterceptor;
        var LogService = (function () {
            function LogService($http) {
                //$http(<ng.IRequestConfig>{
                //    method: 'post',
                //    url: '',
                //    data: {id: 1}
                //});
                toastr.options = {
                    closeButton: true,
                    positionClass: "toast-bottom-right",
                    timeOut: 3000
                };
                this.logIt = function (message, logType) {
                    if (!SampleTypescript.string.IsEmpty(message))
                        return toastr[logType](message);
                };
            }
            LogService.prototype.log = function (message) {
                this.logIt(message, 'info');
            };
            LogService.prototype.logWarning = function (message) {
                this.logIt(message, 'warning');
            };
            LogService.prototype.logSuccess = function (message) {
                this.logIt(message, 'success');
                return true;
            };
            LogService.prototype.logError = function (message, includeSave) {
                this.logIt(message, 'error');
                return false;
            };
            return LogService;
        }());
        Services.LogService = LogService;
    })(Services = SampleTypescript.Services || (SampleTypescript.Services = {}));
    SampleTypescript.util = {
        IsNotNull: function (obj) { return (typeof (obj) !== 'undefined' && obj != null); },
        IsNull: function (obj) { return (!SampleTypescript.util.IsNotNull(obj)); },
        IsString: function (text) { return (typeof text === "string"); },
        CleanArray: function (actual) {
            var newArray = new Array();
            for (var i = 0; i < actual.length; i++) {
                if (actual[i]) {
                    newArray.push(actual[i]);
                }
            }
            return newArray;
        }
    };
    SampleTypescript.string = {
        IsEmpty: function (text) {
            if (SampleTypescript.util.IsNotNull(text) && SampleTypescript.util.IsString(text))
                return !text || $.trim(text).length == 0;
            return false;
        }
    };
    SampleTypescript.regex = {
        EmailFormat: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ValidProperty: /^[a-zA-Z]+[a-zA-Z0-9\_]*$/,
        RegexIso8601: /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/
    };
    var AppBuilder = (function () {
        function AppBuilder() {
        }
        AppBuilder.init = function () {
            this.initDirective();
            this.registerModules();
            Main.app.config(function ($httpProvider) { return new Services.AppHttpInterceptor($httpProvider); });
            angular.bootstrap(Main.wrapperApp, [Main.appName]);
        };
        AppBuilder.registerModules = function () {
            function argumentNames(fun) {
                var names = fun.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
                    .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
                    .replace(/\s+/g, '').split(',');
                return names.length == 1 && !names[0] ? [] : names;
            }
            function registerController(name, listArgs) {
                var func = "SampleTypescript.Main.app.controller(\"" + name + "\",[\"" + listArgs.join('","') + "\", function(" + listArgs.join() + ") { return new SampleTypescript.Controllers." + name + "(" + listArgs.toString() + "); } ])";
                eval(func);
            }
            function registerService(name, listArgs) {
                var func = "SampleTypescript.Main.app.factory(\"" + name + "\",[\"" + listArgs.join('","') + "\", function(" + listArgs.join() + ") { return new SampleTypescript.Services." + name + "(" + listArgs.toString() + "); } ])";
                eval(func);
            }
            var name, subName;
            for (name in Controllers) {
                if (name === "BaseController")
                    continue;
                if (name.indexOf("Controller") === -1) {
                    for (subName in Controllers[name]) {
                        if (subName.indexOf("Controller") === -1)
                            continue;
                        registerController(name + "." + subName, argumentNames(Controllers[name][subName]));
                    }
                }
                else
                    registerController(name, argumentNames(Controllers[name]));
            }
            for (name in Services) {
                if (name === "BaseService")
                    continue;
                if (name.indexOf("Service") === -1) {
                    for (subName in Services[name]) {
                        if (subName.indexOf("Service") === -1)
                            continue;
                        registerService(name + "." + subName, argumentNames(Services[name][subName]));
                    }
                }
                else
                    registerService(name, argumentNames(Services[name]));
            }
            var pages = [];
            for (name in Routes) {
                if (name.indexOf("Route") === -1)
                    continue;
                if (Routes[name].Pages) {
                    pages = pages.concat(Routes[name].Pages);
                }
            }
            Main.app.config(["$routeProvider", function ($routeProvider) {
                    for (var i = 0; i < pages.length; i++) {
                        $routeProvider.when(pages[i].route, {
                            templateUrl: Main.templateDir + (pages[i].templateUrl.indexOf("/") == 0 ? "" : "/") + pages[i].templateUrl
                        });
                    }
                }]);
        };
        AppBuilder.initDirective = function () {
            Main.app.directive('toggle', function () {
                return {
                    restrict: 'A',
                    link: function (scope, element, attrs) {
                        // prevent directive from attaching itself to everything that defines a toggle attribute
                        if (!element.hasClass('selectpicker')) {
                            return;
                        }
                        var target = element.parent();
                        var toggleFn = function () {
                            target.toggleClass('open');
                        };
                        var hideFn = function () {
                            target.removeClass('open');
                        };
                        element.on('click', toggleFn);
                        element.next().on('click', hideFn);
                        scope.$on('$destroy', function () {
                            element.off('click', toggleFn);
                            element.next().off('click', hideFn);
                        });
                    }
                };
            });
        };
        return AppBuilder;
    }());
    SampleTypescript.AppBuilder = AppBuilder;
    var Routes;
    (function (Routes) {
        var DefaultRoute = (function () {
            function DefaultRoute() {
            }
            DefaultRoute.Pages = [
                {
                    route: "/",
                    templateUrl: "home/index"
                },
                {
                    route: "/404",
                    templateUrl: "home/404"
                },
                {
                    route: "/500",
                    templateUrl: "home/500"
                }
            ];
            return DefaultRoute;
        }());
        Routes.DefaultRoute = DefaultRoute;
    })(Routes = SampleTypescript.Routes || (SampleTypescript.Routes = {}));
})(SampleTypescript || (SampleTypescript = {}));
var SampleTypescript;
(function (SampleTypescript) {
    var Controllers;
    (function (Controllers) {
        var AppController = (function (_super) {
            __extends(AppController, _super);
            function AppController($scope, $element, $location, $routeParams, LogService, AppService) {
                _super.call(this, $scope, $element);
                this.$scope = $scope;
                this.$element = $element;
                this.$routeParams = $routeParams;
                this.LogService = LogService;
                this.AppService = AppService;
            }
            AppController.prototype.testClick = function () {
                this.controls.mytestcontrol.html("Changed here.");
            };
            return AppController;
        }(Controllers.BaseController));
        Controllers.AppController = AppController;
    })(Controllers = SampleTypescript.Controllers || (SampleTypescript.Controllers = {}));
    var Services;
    (function (Services) {
        var AppService = (function () {
            function AppService($http, $rootScope, $filter, LogService) {
                this.$rootScope = $rootScope;
                this.$filter = $filter;
                this.LogService = LogService;
                this.shareData = {};
                this.formSubmit = $("#appForm");
            }
            AppService.prototype.dateToMvcString = function (date) {
                return this.$filter("date")(date, "dd/MM/yyyy HH:mm:ss");
            };
            AppService.prototype.appendItemFormSubmit = function (name, value) {
                var hidden = "<input type=\"hidden\" name=\"" + name + "\" value=\"" + value + "\" />";
                this.formSubmit.append(hidden);
            };
            AppService.prototype.appendFormSubmit = function (arrayData) {
                for (var i = 0; i < arrayData.length; i++) {
                    this.appendItemFormSubmit(arrayData[i].name, arrayData[i].value);
                }
            };
            AppService.prototype.clearFormSubmit = function () { this.formSubmit.empty(); };
            AppService.prototype.executeFormSubmit = function () { this.formSubmit.submit(); };
            AppService.PREPARE_COMPLETE_EVENT = "COMPLETE_EVENT";
            return AppService;
        }());
        Services.AppService = AppService;
    })(Services = SampleTypescript.Services || (SampleTypescript.Services = {}));
})(SampleTypescript || (SampleTypescript = {}));
//# sourceMappingURL=scripts.js.map