var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    // transform takes an input and changes it to output something based on what we implement.
    SearchPipe.prototype.transform = function (value) {
        return value.filter(function (item) { return item.title.startsWith('s'); });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: "mySearch"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
})();
exports.SearchPipe = SearchPipe;
