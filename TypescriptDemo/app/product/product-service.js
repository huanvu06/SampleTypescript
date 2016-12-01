var SampleTypescript;
(function (SampleTypescript) {
    var Services;
    (function (Services) {
        var FormulaService = (function () {
            function FormulaService(LogService, $http) {
                this.LogService = LogService;
                this.$http = $http;
            }
            FormulaService.prototype.GetCategories = function () {
                return this.$http.get(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/GetCategories");
            };
            FormulaService.prototype.GetFormulas = function () {
                return this.$http.get(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/GetFormulas");
            };
            FormulaService.prototype.DeleteFormula = function (Id) {
                return this.$http.get(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/DeleteFormula/" + Id);
            };
            FormulaService.prototype.CloneFormula = function (Id) {
                return this.$http.get(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/CloneFormula/" + Id);
            };
            return FormulaService;
        }());
        Services.FormulaService = FormulaService;
        var FormulaDetailService = (function () {
            function FormulaDetailService(LogService, $http) {
                this.LogService = LogService;
                this.$http = $http;
            }
            //GetCategories(): ng.IHttpPromise<ResultObject<PagedList<Formula.DataListDto>>> {
            //    return this.$http.get(Main.APIs.ESTIMATE + "api/Estimate/GetCategories");
            //}
            FormulaDetailService.prototype.GetFormula = function (Id) {
                return this.$http.get(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/GetFormula/" + Id);
            };
            FormulaDetailService.prototype.GetTypes = function () {
                return this.$http.get(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/GetTypes");
            };
            FormulaDetailService.prototype.InsertFormula = function (model) {
                return this.$http.post(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/InsertFormula", model);
            };
            FormulaDetailService.prototype.UpdateFormula = function (model) {
                return this.$http.post(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/UpdateFormula", model);
            };
            FormulaDetailService.prototype.CalcFormula = function (model) {
                return this.$http.post(SampleTypescript.Main.APIs.ESTIMATE + "api/Estimate/CalculateFormula", model);
            };
            ;
            return FormulaDetailService;
        }());
        Services.FormulaDetailService = FormulaDetailService;
    })(Services = SampleTypescript.Services || (SampleTypescript.Services = {}));
})(SampleTypescript || (SampleTypescript = {}));
