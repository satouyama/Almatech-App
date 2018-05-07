webpackJsonp([3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroClientPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__novo_cliente_novo_cliente__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CadastroClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroClientPage = /** @class */ (function () {
    function CadastroClientPage(navCtrl, navParams, database, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.toast = toast;
        this.CadastroCliente = {};
        this.cadastroClienteRefs$ = this.database.list('shopping-list');
    }
    CadastroClientPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroClientPage');
    };
    CadastroClientPage.prototype.save = function (cadastroCliente) {
        var _this = this;
        var toast = this.toast.create({
            message: 'Adicionado com sucesso',
            duration: 3000
        });
        this.cadastroClienteRefs$.push({
            Vendedor: this.CadastroCliente.vendedor,
            NomeFantasia: this.CadastroCliente.NomeFantasia,
            RazaoSocial: this.CadastroCliente.razaoSocial,
            CNPJ: this.CadastroCliente.cpfecnpj,
            cep: this.CadastroCliente.cep,
            endereco: this.CadastroCliente.endereco,
            nr: this.CadastroCliente.nr,
            bairro: this.CadastroCliente.bairro,
            complemento: this.CadastroCliente.complemento,
            telefone: this.CadastroCliente.telefone,
            celular: this.CadastroCliente.celular,
            cidade: this.CadastroCliente.cidade,
            uf: this.CadastroCliente.celular
        }).then(function () {
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__novo_cliente_novo_cliente__["a" /* NovoClientePage */]);
        }, function (e) {
            alert('Erro ao cadastrar');
        });
    };
    CadastroClientPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro-client',template:/*ion-inline-start:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\cadastro-client\cadastro-client.html"*/'<!--\n  Generated template for the CadastroClientPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="p">Cadastro</p></ion-title>\n  </ion-navbar>\n   \n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating><p>Vendedor</p></ion-label>\n        <ion-select [(ngModel)]="CadastroCliente.vendedor">\n          <ion-option value="Alexandre">Alexandre</ion-option>\n          <ion-option value="Augusto">Augusto</ion-option>\n          <ion-option value="Ester">Ester</ion-option>\n          <ion-option value="Henrique">Henrique</ion-option>\n          <ion-option value="Maria Izabel">Maria Izabel</ion-option>\n          <ion-option value="Paula">Paula</ion-option>\n          <ion-option value="Rafael">Rafael</ion-option>\n          <ion-option value="Roseli">Roseli</ion-option>\n        </ion-select>\n      </ion-item>\n <ion-item>\n   <ion-label floating><p>Nome Fantasia</p></ion-label>\n  <ion-input type="text" [(ngModel)]="CadastroCliente.nomeFantasia"></ion-input>\n </ion-item>\n <ion-item>\n    <ion-label floating><p>Razão Social</p></ion-label>\n   <ion-input type="text" [(ngModel)]="CadastroCliente.razaoSocial"></ion-input>\n  </ion-item>\n  <ion-item>\n      <ion-label floating><p>CNPJ/CPF</p></ion-label>\n     <ion-input type="number" [(ngModel)]="CadastroCliente.cpfecnpj"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label floating><p>CEP</p></ion-label>\n       <ion-input type="number" [(ngModel)]="CadastroCliente.cep"></ion-input>\n      </ion-item>\n\n      <ion-grid>\n          <ion-row>\n            <ion-col width-50>\n              <ion-item>\n                <ion-label floating><p>Endereço</p></ion-label>\n                <ion-input type="text" [(ngModel)]="CadastroCliente.endereco"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col width-50>\n              <ion-item>\n                <ion-label floating><p>N</p></ion-label>\n                <ion-input type="number" [(ngModel)]="CadastroCliente.nr"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      \n          <ion-grid>\n              <ion-row>\n                <ion-col width-40>\n                  <ion-item>\n                    <ion-label floating><p>Bairro</p></ion-label>\n                    <ion-input type="text" [(ngModel)]="CadastroCliente.bairro"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col width-40>\n                  <ion-item>\n                    <ion-label floating><p>Complemento</p></ion-label>\n                    <ion-input type="text" [(ngModel)]="CadastroCliente.complemento"></ion-input>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid>\n                <ion-row>\n                  <ion-col width-40>\n                    <ion-item>\n                      <ion-label floating><p>Telefone</p></ion-label>\n                      <ion-input type="tel" [(ngModel)]="CadastroCliente.telefone"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col width-40>\n                    <ion-item>\n                      <ion-label floating><p>Celular</p></ion-label>\n                      <ion-input type="tel" [(ngModel)]="CadastroCliente.celular"></ion-input>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <ion-grid>\n                  <ion-row>\n                    <ion-col width-40>\n                      <ion-item>\n                        <ion-label floating><p>Cidade</p></ion-label>\n                        <ion-input type="text" [(ngModel)]="CadastroCliente.cidade"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col width-40>\n                      <ion-item>\n                        <ion-label floating><p>UF</p></ion-label>\n                        <ion-input type="text" [(ngModel)]="CadastroCliente.uf"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <button ion-button full (click)="save(CadastroCliente)">Cadastrar</button>\n                 \n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\cadastro-client\cadastro-client.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _d || Object])
    ], CadastroClientPage);
    return CadastroClientPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=cadastro-client.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\dashboard\dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n       <ion-icon name="menu">\n       \n       </ion-icon>\n    </button>\n   <ion-title> </ion-title>\n </ion-navbar>\n <div padding>\n    <ion-segment [(ngModel)]="pet">\n      <ion-segment-button value="kittens">\n        Kittens\n      </ion-segment-button>\n      <ion-segment-button value="puppies">\n        Puppies\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content padding>\n    <div [ngSwitch]="pet">\n        <ion-list *ngSwitchCase="\'puppies\'">\n          <ion-item>\n            <ion-thumbnail item-start>\n            \n            </ion-thumbnail>\n            <h2>Ruby</h2>\n          </ion-item>\n          ...\n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'kittens\'">\n            <ion-card>\n\n              \n                <ion-card-content>\n                  Acesse também do seu PC :\n                  www.allmatech.com.br\n                </ion-card-content>\n              \n              </ion-card>\n          \n        </ion-list>\n      </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-client/cadastro-client.module": [
		341,
		2
	],
	"../pages/dashboard/dashboard.module": [
		342,
		1
	],
	"../pages/novo-cliente/novo-cliente.module": [
		343,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.Logar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\home\home.html"*/'<ion-content padding>\n  <div id="conteudo">\n  \n\n<div id="box">\n<ion-label>CPF</ion-label>\n<ion-input  type="number"></ion-input>\n\n\n<ion-label>Senha</ion-label>\n<ion-input  type="password"></ion-input>\n</div>\n\n<div class="center">\n<button ion-button  outline="true" (click)="Logar()" color="black">Logar</button>\n</div>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(245);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_novo_cliente_novo_cliente__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_client_cadastro_client__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var credentials = {
    apiKey: "AIzaSyBw_cdfZqdMGqsi4D8fyl2u9czGw_E9bac",
    authDomain: "chat-e9788.firebaseapp.com",
    databaseURL: "https://chat-e9788.firebaseio.com",
    projectId: "chat-e9788",
    storageBucket: "chat-e9788.appspot.com",
    messagingSenderId: "648182417051"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_novo_cliente_novo_cliente__["a" /* NovoClientePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_client_cadastro_client__["a" /* CadastroClientPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-client/cadastro-client.module#CadastroClientPageModule', name: 'CadastroClientPage', segment: 'cadastro-client', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/novo-cliente/novo-cliente.module#NovoClientePageModule', name: 'NovoClientePage', segment: 'novo-cliente', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(credentials),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_novo_cliente_novo_cliente__["a" /* NovoClientePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cadastro_client_cadastro_client__["a" /* CadastroClientPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_novo_cliente_novo_cliente__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.paginas = [
            { titulo: 'Novo Cliente', componente: __WEBPACK_IMPORTED_MODULE_5__pages_novo_cliente_novo_cliente__["a" /* NovoClientePage */], icon: 'people' },
            { titulo: 'Logout', componente: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'exit' },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.irParaPagina = function (componente) {
        this.Nav.push(componente);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "Nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'myapp',template:/*ion-inline-start:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\app\app.html"*/'<ion-menu [content]="conteudo">\n    <ion-item id="cabecalho-menu" class="cabecalho-menu">\n            <div>\n               \n            </div>\n            <h2>Paula Andrade</h2>\n        </ion-item>\n<ion-list>\n    <br/>\n    <button ion-item menuClose color="black" *ngFor="let pagina of paginas"\n    (click)="irParaPagina(pagina.componente)"\n    >  \n     <br/>\n        <ion-icon [name]="pagina.icon" item-left> </ion-icon>\n          {{pagina.titulo}}\n    </button>\n    </ion-list>\n</ion-menu>\n<ion-nav [root]="rootPage" #conteudo swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_client_cadastro_client__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NovoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NovoClientePage = /** @class */ (function () {
    function NovoClientePage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.CadastroClienteRefs$ = this.database.list('shopping-list').valueChanges();
    }
    NovoClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NovoClientePage');
    };
    NovoClientePage.prototype.selecionarCadastro = function (CadastroClient) {
        var _this = this;
        // 1 . edit the shooping item
        this.actionSheetCtrl.create({
            title: "" + CadastroClient.NomeFantasia,
            buttons: [
                {
                    text: 'Editar',
                    handler: function () {
                    }
                }, {
                    text: 'Excluir',
                    role: 'destructive',
                    handler: function () {
                        _this.CadastroClienteRefs$.remove();
                    },
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('client press cancel button');
                    }
                }
            ]
        }).present();
        //2 delete shopping item
    };
    NovoClientePage.prototype.CadastroClient = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_client_cadastro_client__["a" /* CadastroClientPage */]);
    };
    NovoClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-novo-cliente',template:/*ion-inline-start:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\novo-cliente\novo-cliente.html"*/'<!--\n  Generated template for the NovoClientePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><p class="p">Cliente</p></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-fab  bottom right>\n        <button ion-fab color="blue" (click)="CadastroClient()" full>\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n    <ion-list>\n        <ion-item *ngFor="let item of CadastroClienteRefs$ | async" (click)="selecionarCadastro(item)">\n          <ion-avatar item-start>\n           <ion-icon name="people"></ion-icon>\n          </ion-avatar>\n          <h2>{{item.NomeFantasia}}</h2>\n          <p>{{item.RazaoSocial}}</p>\n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n             <ion-icon name="people"></ion-icon>\n            </ion-avatar>\n            <h2>Teste</h2>\n            <p>Ugh. As if.</p>\n          </ion-item>\n      </ion-list>\n      \n</ion-content>\n'/*ion-inline-end:"C:\Users\Douglas\Desktop\Allmatech-Aplicativo\Allmatech-Aplicativo\src\pages\novo-cliente\novo-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _d || Object])
    ], NovoClientePage);
    return NovoClientePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=novo-cliente.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.js.map