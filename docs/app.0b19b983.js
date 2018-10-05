parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"ZRoM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),window.header={visibleNav:!1,displayNav:function(){window.header.visibleNav=!window.header.visibleNav,window.update()}},exports.default=function(){return'<div class="header">\n                <h3 class="header__logo"></h3>\n                <div class="header__menu" onclick="header.displayNav()"></div>\n                <nav class="header__nav '+(header.visibleNav?"header__nav_visible":"")+'">\n                    <a class="header__nav-item header__nav-item_selected" href="#" target="_self" onclick="header.displayNav()">Сводка</a>\n                    <a class="header__nav-item" href="#" target="_self" onclick="header.displayNav()">Устройства</a>\n                    <a class="header__nav-item" href="#" target="_self" onclick="header.displayNav()">Сценарии</a>\n                </nav>\n            </div>'};
},{}],"LElM":[function(require,module,exports) {
module.exports={events:[{type:"info",title:"Еженедельный отчет по расходам ресурсов",source:"Сенсоры потребления",time:"19:00, Сегодня",description:"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.",icon:"stats",data:{type:"graph",values:[{electricity:[["1536883200",115],["1536969600",117],["1537056000",117.2],["1537142400",118],["1537228800",120],["1537315200",123],["1537401600",129]]},{water:[["1536883200",40],["1536969600",40.2],["1537056000",40.5],["1537142400",41],["1537228800",41.4],["1537315200",41.9],["1537401600",42.6]]},{gas:[["1536883200",13],["1536969600",13.2],["1537056000",13.5],["1537142400",13.7],["1537228800",14],["1537315200",14.2],["1537401600",14.5]]}]},size:"l"},{type:"info",title:"Дверь открыта",source:"Сенсор входной двери",time:"18:50, Сегодня",description:null,icon:"key",size:"s"},{type:"info",title:"Уборка закончена",source:"Пылесос",time:"18:45, Сегодня",description:null,icon:"robot-cleaner",size:"s"},{type:"info",title:"Новый пользователь",source:"Роутер",time:"18:45, Сегодня",description:null,icon:"router",size:"s"},{type:"info",title:"Изменен климатический режим",source:"Сенсор микроклимата",time:"18:30, Сегодня",description:"Установлен климатический режим «Фиджи»",icon:"thermal",size:"m",data:{temperature:24,humidity:80}},{type:"critical",title:"Невозможно включить кондиционер",source:"Кондиционер",time:"18:21, Сегодня",description:"В комнате открыто окно, закройте его и повторите попытку",icon:"ac",size:"m"},{type:"info",title:"Музыка включена",source:"Яндекс.Станция",time:"18:16, Сегодня",description:"Сейчас проигрывается:",icon:"music",size:"m",data:{albumcover:"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000",artist:"Florence & The Machine",track:{name:"Big God",length:"4:31"},volume:80}},{type:"info",title:"Заканчивается молоко",source:"Холодильник",time:"17:23, Сегодня",description:"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?",icon:"fridge",size:"m",data:{buttons:["Да","Нет"]}},{type:"info",title:"Зарядка завершена",source:"Оконный сенсор",time:"16:22, Сегодня",description:"Ура! Устройство «Оконный сенсор» снова в строю!",icon:"battery",size:"s"},{type:"critical",title:"Пылесос застрял",source:"Сенсор движения",time:"16:20, Сегодня",description:"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",icon:"cam",data:{image:"get_it_from_mocks_:3.jpg"},size:"l"},{type:"info",title:"Вода вскипела",source:"Чайник",time:"16:20, Сегодня",description:null,icon:"kettle",size:"s"}]};
},{}],"6a8H":[function(require,module,exports) {
module.exports="/very-smart-house/icons.bdaa6af4.svg";
},{}],"pKgG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i=require("../assets/icons.svg"),s=d(i);function d(i){return i&&i.__esModule?i:{default:i}}exports.default=function(i){return'<div class="card">\n                <div>\n                    <div class="card__main-content">\n                        <svg viewBox="0 0 24 24" class="card__icon">\n                            <use xlink:href="'+s.default+"#"+i.icon+'"></use>\n                        </svg>\n                        <div class="card__title">'+i.title+'</div>\n                        <div class="card__source">'+i.source+'</div>\n                        <div class="card__time">'+i.time+'</div>\n                    </div>\n                    <div class="card__additional-content">\n                        <div class="card__description">'+i.description+"</div>\n                    </div>\n                </div>\n            </div>"};
},{"../assets/icons.svg":"6a8H"}],"1hbE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../mock/events"),t=s(e),n=require("./Card"),r=s(n);function s(e){return e&&e.__esModule?e:{default:e}}exports.default=function(){return console.log("events",t.default),'<div class="cards">\n                <div class="cards__title">Лента событий </div>\n                <div class="cards__container">\n                    '+t.default.events.map(r.default).join("")+"\n                </div>\n            </div>"};
},{"../../mock/events":"LElM","./Card":"pKgG"}],"WCpH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){return'<div class="footer">\n                <div class="footer__nav">\n                    <a class="footer__nav-item" href="#" target="_self">Помощь</a>\n                    <a class="footer__nav-item" href="#" target="_self">Обратная связь</a>\n                    <a class="footer__nav-item" href="#" target="_self">Разработчикам</a>\n                    <a class="footer__nav-item" href="#" target="_self">Условия использования</a>\n                </div>\n                <div class="footer__logo">© 2001–2017  ООО «Яндекс»</div>\n            </div>'};
},{}],"5baa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./Header"),r=n(e),t=require("./Cards"),u=n(t),d=require("./Footer"),a=n(d);function n(e){return e&&e.__esModule?e:{default:e}}exports.default=function(){return(0,r.default)()+"\n            "+(0,u.default)()+"\n            "+(0,a.default)()};
},{"./Header":"ZRoM","./Cards":"1hbE","./Footer":"WCpH"}],"a5zF":[function(require,module,exports) {

},{"./../assets/logo.svg":[["logo.5fb88b6f.svg","GLLc"],"GLLc"],"./../assets/icon_menu.svg":[["icon_menu.2b9cf2c9.svg","YMIA"],"YMIA"]}],"Lent":[function(require,module,exports) {
"use strict";var e=require("./components/App"),t=n(e);function n(e){return e&&e.__esModule?e:{default:e}}require("./styles/main.less");var u=document.getElementById("root");window.update=function(){u.innerHTML=(0,t.default)()},window.update();
},{"./components/App":"5baa","./styles/main.less":"a5zF"}]},{},["Lent"], null)
//# sourceMappingURL=/very-smart-house/app.a383e033.map