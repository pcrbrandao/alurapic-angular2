"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var TitleCaseUrlSerializer = (function (_super) {
    __extends(TitleCaseUrlSerializer, _super);
    function TitleCaseUrlSerializer() {
        _super.apply(this, arguments);
    }
    TitleCaseUrlSerializer.prototype.parse = function (url) {
        function toTitleCase(url) {
            return url.split('/')
                .map(function (segment) { return segment ?
                segment[0].toUpperCase() + segment.substr(1) :
                segment; })
                .join('/');
        }
        return _super.prototype.parse.call(this, toTitleCase(url));
    };
    TitleCaseUrlSerializer = __decorate([
        core_1.NgModule({
            providers: [{ provide: router_1.UrlSerializer, useClass: TitleCaseUrlSerializer }]
        }), 
        __metadata('design:paramtypes', [])
    ], TitleCaseUrlSerializer);
    return TitleCaseUrlSerializer;
}(router_1.DefaultUrlSerializer));
exports.TitleCaseUrlSerializer = TitleCaseUrlSerializer;
//# sourceMappingURL=tileCaseUrlSerializer.module.js.map