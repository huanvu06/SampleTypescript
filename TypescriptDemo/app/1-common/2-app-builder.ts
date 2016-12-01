module SampleTypescript {
    export module Controllers {
        export class AppController extends BaseController {
            public controls: {
                mytestcontrol: JQuery;
            };
            constructor(private $scope: IAppScope, private $element: JQuery, $location: ng.ILocationService, private $routeParams, private LogService: Services.LogService, private AppService: Services.AppService) {
                super($scope, $element);
            }

            testClick() {
                this.controls.mytestcontrol.html("Changed here.");
            }
        }
    }

    export module Services {
        export class AppService {
            static PREPARE_COMPLETE_EVENT: string = "COMPLETE_EVENT";

            private formSubmit: JQuery;
            shareData: IShareData = {};
            constructor($http: ng.IHttpService, private $rootScope: IRootScope, private $filter: ng.IFilterService, private LogService: LogService) {
                this.formSubmit = $("#appForm");
            }

            dateToMvcString(date: Date) {
                return this.$filter("date")(date, "dd/MM/yyyy HH:mm:ss");
            }

            appendItemFormSubmit(name: string, value: string) {
                let hidden: string = `<input type="hidden" name="${name}" value="${value}" />`;
                this.formSubmit.append(hidden);
            }
            appendFormSubmit(arrayData: Array<JQuerySerializeArrayElement>) {
                for (let i = 0; i < arrayData.length; i++) {
                    this.appendItemFormSubmit(arrayData[i].name, arrayData[i].value);
                }
            }
            clearFormSubmit() { this.formSubmit.empty(); }
            executeFormSubmit() { this.formSubmit.submit(); }
        }

        export interface ResultObject<T> {
            Payload: T;
            Success: boolean;
        }
        export interface PagedList<T> {
            HasNext: boolean;
            HasPrevious: boolean;
            Count: number;
            Entities: Array<T>;
        } 
        export interface SelectListDto {

            Text: string;
            Value: any;
            FK_Id: any;
            Selected: boolean;
        }       
    }

    export interface IAppScope extends IRootScope {
    }

    export interface IRootScope extends ng.IScope { }

    export interface IShareData {
    }
}