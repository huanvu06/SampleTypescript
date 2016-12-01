module SampleTypescript {
    export class Main {
        static app: ng.IModule;
        static appName = "lcpmanager";
        static templateDir: string;
        static wrapperApp: JQuery;
        static APIs:{
            BASE: string;
        } = <any>{};
    }

    $(() => {
        Main.wrapperApp = $(`${Main.wrapperApp}`);
        AppBuilder.init();
    })

    //https://www.npmjs.com/package/ng-intl-tel-input
    //http://ngmodules.org/modules/ngAutocomplete - http://plnkr.co/edit/il2J8qOI2Dr7Ik1KHRm8?p=preview
    Main.app = angular.module(Main.appName, ['ngAnimate', 'ngRoute', 'kendo.directives']);

    export module Controllers {
        export class BaseController {
            public controls: {};
            constructor($scope: ng.IScope, $element: JQuery) {
                var self = this;
                self.controls = {};
                $element.find("[xcontrol]").each((index, e) => {
                    let ele = $(e);
                    let name = ele.attr("xcontrol");
                    self.controls[name] = ele;
                });
            }
        }
    }

    export module Services {
        export class AppHttpInterceptor {
            constructor(private $httpProvider: ng.IHttpProvider) {
                var interceptor = ($q: ng.IQService, $cacheFactory, $timeout, $rootScope, $log, $injector, $location: ng.ILocationService) => {

                    function showLoading() { $('#loadingWrapper').show(); }

                    function hideLoading() { $('#loadingWrapper').hide(); }

                    return {
                        'request'(config: ng.IRequestConfig) {
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
                        'response'(response: ng.IHttpPromiseCallbackArg<any>) {
                            hideLoading();
                            return response;
                        },
                        'responseError'(rejection: ng.IHttpPromiseCallbackArg<any>) {
                            if (rejection.status !== 0) {
                                if (rejection.status === 401) {
                                    //window.location.href = "/account/login";
                                    $location.path("/login");
                                }
                            } else {
                                rejection.data = null; //{ error: "Duplicated", error_description: ""};
                            }
                            hideLoading();
                            return $q.reject(rejection);
                        }
                    };
                };
                $httpProvider.interceptors.push(interceptor);
            }

            private cursiveFixRequestArray(obj: any, parentObj?: any, parentObjName?: string) {
                if (typeof obj == "object") {
                    if (obj instanceof Array && util.IsNotNull(parentObj) && string.IsEmpty(parentObjName) == false) {
                        for (var i = 0; i < obj.length; i++) {
                            var objName = parentObjName + "[" + i + "]";
                            parentObj[objName] = this.cursiveFixRequestArray(obj[i], obj, objName);
                        }
                    } else {
                        var arr = [], counter = 0;
                        for (var name in obj) {
                            if (name == "$$hashKey")
                                arr.push("obj['$$hashKey']"); // Remove angular binding property
                            else if (typeof obj[name] == "object") {
                                if (regex.ValidProperty.test(name) == false) { // dictionary.
                                    obj[counter] = {
                                        Key: name
                                    };
                                    obj[counter].Value = this.cursiveFixRequestArray(obj[name], obj[counter], "Value");

                                    arr.push(`obj['${name}']`);
                                    if (obj[name] instanceof Array)
                                        arr.push(`obj[${counter}].Value`);

                                    counter++;
                                } else {
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
            }
        }

        export class LogService {
            private logIt: (message, logType) => void;

            constructor($http: ng.IHttpService) {
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
                this.logIt = (message, logType) => {
                    if (!string.IsEmpty(message))
                        return toastr[logType](message);
                };
            }

            public log(message) {
                this.logIt(message, 'info');
            }

            public logWarning(message) {
                this.logIt(message, 'warning');
            }

            public logSuccess(message) {
                this.logIt(message, 'success');
                return true;
            }

            public logError(message: string, includeSave?: boolean) {
                this.logIt(message, 'error');
                return false;
            }
        }
    }

    export interface IRoute {
        route: string;
        templateUrl: any;
    }

    export var util = {
        IsNotNull: (obj: any): boolean => (typeof (obj) !== 'undefined' && obj != null),
        IsNull: (obj: any): boolean => (!util.IsNotNull(obj)),
        IsString: (text: any): boolean => (typeof text === "string"),
        CleanArray: <T>(actual: Array<T>): Array<T> => {
            var newArray = new Array();
            for (var i = 0; i < actual.length; i++) {
                if (actual[i]) {
                    newArray.push(actual[i]);
                }
            }
            return newArray;
        }
    }

    export var string = {
        IsEmpty: (text: any): boolean => {
            if (util.IsNotNull(text) && util.IsString(text))
                return !text || $.trim(text).length == 0;

            return false;
        }
    }

    export var regex = {
        EmailFormat: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ValidProperty: /^[a-zA-Z]+[a-zA-Z0-9\_]*$/,
        RegexIso8601: /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/
    }

    export class AppBuilder {
        static init() {
            this.initDirective();
            this.registerModules();            
            Main.app.config(($httpProvider) => new Services.AppHttpInterceptor($httpProvider))  
            angular.bootstrap(Main.wrapperApp, [Main.appName]);
        }
        private static registerModules() {
            function argumentNames(fun): Array<string> {
                var names = fun.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
                    .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
                    .replace(/\s+/g, '').split(',');
                return names.length == 1 && !names[0] ? [] : names;
            }
            function registerController(name: string, listArgs: string[]) {
                let func = `SampleTypescript.Main.app.controller("${name}",["${listArgs.join('","')}", function(${listArgs.join()}) { return new SampleTypescript.Controllers.${name}(${listArgs.toString()}); } ])`;
                eval(func);
            }
            function registerService(name:string, listArgs: string[]) {
                let func = `SampleTypescript.Main.app.factory("${name}",["${listArgs.join('","')}", function(${listArgs.join()}) { return new SampleTypescript.Services.${name}(${listArgs.toString()}); } ])`;
                eval(func);
            }            

            var name: string, subName: string;
            for (name in Controllers) {
                if (name === "BaseController") continue;
                if (name.indexOf("Controller") === -1) {
                    for (subName in Controllers[name]) {
                        if (subName.indexOf("Controller") === -1) continue;
                        registerController(`${name}.${subName}`, argumentNames(Controllers[name][subName])); 
                    }
                }
                else
                    registerController(name, argumentNames(Controllers[name])); 
            }
            for (name in Services) {
                if (name === "BaseService") continue;
                if (name.indexOf("Service") === -1) {
                    for (subName in Services[name]) {
                        if (subName.indexOf("Service") === -1) continue;
                        registerService(`${name}.${subName}`, argumentNames(Services[name][subName]));
                    }
                }
                else
                    registerService(name, argumentNames(Services[name])); 
            }

            var pages: Array<IRoute> = [];            
            for (name in Routes) {
                if (name.indexOf("Route") === -1) continue;
                if (Routes[name].Pages) {
                    pages = pages.concat(Routes[name].Pages);
                }
            }
            Main.app.config(["$routeProvider", function ($routeProvider: ng.route.IRouteProvider) {
                for (var i = 0; i < pages.length; i++) {
                    $routeProvider.when(pages[i].route, {
                        templateUrl: Main.templateDir + (pages[i].templateUrl.indexOf("/") == 0 ? "" : "/") + pages[i].templateUrl
                    });
                }
            }]);
        }        

        private static initDirective() {
            Main.app.directive('toggle', () => {
                return {
                    restrict: 'A',
                    link(scope, element, attrs) {
                        // prevent directive from attaching itself to everything that defines a toggle attribute
                        if (!element.hasClass('selectpicker')) {
                            return;
                        }

                        var target = element.parent();
                        var toggleFn = () => {
                            target.toggleClass('open');
                        };
                        var hideFn = () => {
                            target.removeClass('open');
                        };

                        element.on('click', toggleFn);
                        element.next().on('click', hideFn);

                        scope.$on('$destroy', () => {
                            element.off('click', toggleFn);
                            element.next().off('click', hideFn);
                        });
                    }
                };
            });
        }
    }

    export module Routes {
        export class DefaultRoute {
            static Pages: Array<IRoute> = [
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
            ]
        }
    }
}