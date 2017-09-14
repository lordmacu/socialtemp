angular.module("schemaForm").config(["schemaFormDecoratorsProvider", function(a) {
    var b = "scripts/decorators/suriDecorator/templates/";
    a.createDecorator("suriWebClient", {
        textarea: b + "textarea.html",
        fieldset: b + "fieldset.html",
        array: b + "array.html",
        tabarray: b + "tabarray.html",
        tabs: b + "tabs.html",
        section: b + "section.html",
        conditional: b + "section.html",
        actions: b + "actions.html",
        select: b + "select.html",
        checkbox: b + "checkbox.html",
        checkboxes: b + "checkboxes.html",
        number: b + "default.html",
        password: b + "default.html",
        submit: b + "submit.html",
        button: b + "submit.html",
        radios: b + "radios.html",
        "radios-inline": b + "radios-inline.html",
        radiobuttons: b + "radio-buttons.html",
        help: b + "help.html",
        "default": b + "default.html"
    }, []), a.createDirectives({
        textarea: b + "textarea.html",
        select: b + "select.html",
        checkbox: b + "checkbox.html",
        checkboxes: b + "checkboxes.html",
        number: b + "default.html",
        submit: b + "submit.html",
        button: b + "submit.html",
        text: b + "default.html",
        date: b + "default.html",
        password: b + "default.html",
        datepicker: b + "datepicker.html",
        input: b + "default.html",
        radios: b + "radios.html",
        "radios-inline": b + "radios-inline.html",
        radiobuttons: b + "radio-buttons.html"
    })
}]).directive("sfFieldset", function() {
    return {
        transclude: !0,
        scope: !0,
        templateUrl: "directives/decorators/bootstrap/fieldset-trcl.html",
        link: function(a, b, c) {
            a.title = a.$eval(c.title)
        }
    }
});
var app = angular.module("suriWebClientApp", ["ngResource", "ngRoute", "ngSanitize", "ngMaterial", "ngMessages", "ab-base64", "pascalprecht.translate", "lumx", "restangular", "dndLists", "angularGrid", "ngAnimate", "ui.select", "schemaForm", "ui.ace", "ngCookies", "720kb.datepicker", "ngclipboard"]);
app.config(["$routeProvider", function(a) {
    a.when("/", {
        templateUrl: "views/login-public.html",
        controller: "LoginPublicCtrl"
    }).when("/workspace/:user", {
        templateUrl: "views/workspace.html",
        controller: "WorkspaceCtrl"
    }).otherwise({
        redirectTo: "/"
    })
}]), app.config(["uiSelectConfig", function(a) {
    a.theme = "selectize"
}]), app.config(["RestangularProvider", function(a) {
    a.addResponseInterceptor(function(a, b, c, d, e, f) {
        "getList" === b ? !angular.isUndefined(a.items) && angular.isArray(a.items) ? f.resolve(a.items) : f.reject({
            error: "Malformed Response. That is not right!"
        }) : f.resolve(a)
    }), a.configuration.getIdFromElem = function(a) {
        return "uuid"
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("LoginCtrl", ["$scope", "$mdToast", "LoginService", "$translate", "$location", "CONFIG", function(a, b, c, d, e, f) {
    a.project = f.project, a.registerEnabled = f.registerEnabled, a.loginHidden = !1, a.registerHidden = !0, a.toggleLogin = function() {
        a.loginHidden = !a.loginHidden
    }, a.toggleRegister = function() {
        a.registerHidden = !a.registerHidden
    }, a.registerUser = {
        terms: !1
    }, a.changeTermsStatus = function() {
        a.registerUser.terms = !a.registerUser.terms
    }, a.login = function() {
        a.loginForm.$invalid || c.login(a.user.username, a.user.password, function(c) {
            b.show(b.simple().content(d.instant("LOGIN_ACTION")).position("bottom right").hideDelay(5e3)), e.path("/workspace/" + a.user.username)
        }, function(c) {
            console.error(c), b.show(b.simple().content(d.instant("LOGIN_ACTION")).position("bottom right").hideDelay(1e3)), a.user = {}
        })
    }, a.en = function() {
        d.use("en")
    }, a.es = function() {
        d.use("es")
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("WorkspaceCtrl", ["$scope", "$mdSidenav", "Logger", "$translate", "LoginService", "CONFIG", function(a, b, c, d, e, f) {
    var g = d.instant("WORKSPACE"),
        h = new c({
            prefix: g
        });
    h.info("Primer log del workspace"), a.mapon = !0, a.managerOpen = !0, a.inspectorOpen = !1, a.resultGrid = !0, a.toolbar = !1;
    var i = e.getCurrentCredentials();
    i.user && i.pass || e.login(f.userNameDefault, f.userPasswordDefault, function(a) {}, function(a) {
        console.log("error login default")
    }), a.toggleLeft = function() {
        a.managerOpen = !a.managerOpen
    }, a.toggleRight = function() {
        a.inspectorOpen = !a.inspectorOpen
    }, a.showRight = function(b) {
        a.inspectorOpen = b
    }, a.toggleBottom = function() {
        a.resultGrid = !a.resultGrid
    }, a.toggleToolbar = function() {
        a.toolbar = !a.toolbar
    }, a.fullscreen = !1, a.toggleFullScreen = function() {
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT), a.fullscreen = !a.fullscreen
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("ContentManagerCtrl", ["$scope", "$rootScope", "EVENTS", function(a, b, c) {
    a.section = [], a.section.mapa = !1, a.section.catalogo = !1, a.section.procesos = !1, a.section.catalogoDropdown = !1, a.open = function(b) {
        a.section[b] ? a.section[b] = !1 : a.section[b] = !0
    }, a.isOpen = function(b) {
        return a.section[b]
    }, a.manageData = function(a, d) {
        b.$broadcast(c.loadDataRequest, a, d)
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("ResultsGridCtrl", ["$rootScope", "$scope", "CSWService", "EVENTS", "$translate", "fakeCheckbox", "Logger", "CatalogAdapter19139", "MapService", "$mdDialog", "$http", "base64", "CONFIG", function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n(a) {
        return document.createTextNode('{{ "' + a.colDef.headerName + '" | translate }}')
    }

    function o() {
        var c = b.gridOptions.api.getSelectedNodes(),
            e = null;
        c.length > 0 && (e = c[0].data), b.selectedItem = e, a.$broadcast(d.catalogitemdetail, e)
    }
    var p, q = e.instant("RESULTS_GRID");
    new g({
        prefix: q
    });
    b.showInput = !1, a.$on(d.catalogsearch, function(c, e) {
        t(), p = e, b.getData(b.paging.start, b.paging.pageSize, p), u(!1), a.$broadcast(d.catalogsearchdone)
    }), a.$on(d.catalogfeatureselected, function(a, c) {
        b.gridOptions.api.getSelectedNodes().forEach(function(a) {
            b.gridOptions.api.deselectNode(a, !0)
        }), b.selectedItem = null, c && angular.forEach(b.gridOptions.rowData, function(a, d) {
            a.id() === c.id() && (b.gridOptions.api.selectIndex(d, !1, !0), b.selectedItem = c, b.gridOptions.api.ensureIndexVisible(d))
        })
    }), b.deleteRow = function(a) {
        angular.forEach(b.gridOptions.data, function(c, d) {
            return a.id() === c.id() ? (b.gridOptions.data.splice(d, 1), !1) : void 0
        })
    }, b.view = function(c) {
        a.$broadcast(d.catalogitemdetail, c), b.selectedItem = c
    }, b.gridOptions = {
        showLoading: !1,
        enableColResize: !0,
        rowSelection: "single",
        selectionChanged: o,
        rowHeight: 40,
        headerHeight: 24,
        headerCellRenderer: n,
        rowData: [],
        angularCompileHeaders: !0,
        columnDefs: [{
            headerName: "",
            cellRenderer: function(a) {
                var b = document.createElement("div");
                return $(b).addClass("fakeCheckbox black"), b.addEventListener("click", function(b) {
                    f.changeCheck(this), $(this).hasClass("checked") ? a.api.selectIndex(a.rowIndex, !0) : a.api.deselectIndex(a.rowIndex, !0), b.stopPropagation()
                }), a.api.addVirtualRowListener(a.rowIndex, {
                    rowSelected: function(a) {
                        b = f.setState(b, a)
                    },
                    rowRemoved: function() {}
                }), b
            },
            width: 50,
            suppressSizeToFit: !0
        }, {
            headerName: "SERIE",
            width: 200,
            cellRenderer: function(a) {
                return a.data.serie()
            }
        }, {
            headerName: "TITLE",
            width: 250,
            cellRenderer: function(a) {
                return a.data.title()
            }
        }, {
            headerName: "MISSION",
            width: 200,
            cellRenderer: function(a) {
                return a.data.mision()
            }
        }, {
            headerName: "DATE",
            width: 100,
            cellRenderer: function(a) {
                return a.data.date()
            }
        }, {
            headerName: "PRODUCT",
            width: 300,
            cellRenderer: function(a) {
                return a.data.producto()
            }
        }]
    }, b.getData = function(f, g, i) {
        c.getRecords(f, g, i).then(function(c) {
            console.log(c);
            var f, g;
            c["csw:GetRecordsResponse"] ? (c = new h(c), f = c.getRecords(), g = c.recordsMatched()) : (f = [], g = 0, j.show(j.alert().parent(angular.element(document.body)).title(e.instant("ERROR_CATALOG_SEARCH")).content(e.instant("ERROR_CATALOG_SEARCH_CONTENT")).ariaLabel("Alert Dialog").ok("OK"))), b.gridOptions.rowData = f, b.gridOptions.api.onNewRows(), b.paging.totalMatch = g, b.paging.totalPages = Math.ceil(b.paging.totalMatch / b.paging.pageSize), b.paging.currentCount = g, a.$broadcast(d.catalogsearchresult, f)
        })
    }, b.onPaginationNext = function() {
        b.paging.currentPage >= b.paging.totalPages || (b.paging.currentPage++, r())
    }, b.onPaginationPrev = function() {
        b.paging.currentPage <= 1 || (b.paging.currentPage--, r())
    }, b.onPaginationFirst = function() {
        b.paging.currentPage <= 1 || (b.paging.currentPage = 1, r())
    }, b.onPaginationLast = function() {
        b.paging.currentPage >= b.paging.totalPages || (b.paging.currentPage = b.paging.totalPages, r())
    }, b.onPaginationRefresh = function(a) {
        return s() ? (b.paging.currentPage = parseInt(b.inputPage), b.inputPage = null, void r()) : void(b.inputPage = null)
    };
    var r = function() {
            var a = (b.paging.currentPage - 1) * b.paging.pageSize + b.paging.start,
                c = b.paging.pageSize;
            b.getData(a, c, p), b.selectedItem = null
        },
        s = function() {
            return angular.isNumber(parseInt(b.inputPage)) && b.inputPage >= 1 && b.inputPage <= b.paging.totalPages
        };
    b.onInputPageKeyPressed = function(a, b) {
        13 === b.which ? b.target.blur() : 27 === b.which && (a.$rollbackViewValue(), b.target.blur())
    }, b.onPageSizeSelected = function(a) {
        b.paging.pageSize !== a && (t(), b.paging.pageSize = a, r())
    };
    var t = function() {
        var a = b.paging && b.paging.pageSize ? b.paging.pageSize : 10;
        b.paging = {
            totalMatch: 0,
            totalPages: 0,
            start: 1,
            finish: 0,
            currentPage: 1,
            currentCount: 0,
            pageSize: a,
            pageSizes: [10, 25, 50, 100]
        }
    };
    b.toggleMinimize = function() {
        b.minimized = !b.minimized, v()
    }, b.maximized = !1, b.toggleMaximize = function() {
        b.minimized ? b.maximized = !0 : b.maximized = !b.maximized, b.minimized = !1, v()
    };
    var u = function(a) {
            b.minimized = a || !1, v()
        },
        v = function() {
            b.minimized || b.maximized ? b.maximized && !b.minimized ? b.layoutclass = "maximize" : b.minimized && (b.layoutclass = "minimize") : b.layoutclass = ""
        };
    t(), u(!0), b.closeSearch = function() {
        p = "", b.gridOptions.rowData = null, b.gridOptions.api.onNewRows(), u(!0), t(), a.$broadcast(d.catalogsearchclear)
    }, b.addLayer = function(a) {
        var b, c = a.extents();
        if (c && c[0] && c[0].bboxes[0]) {
            var d = c[0].bboxes[0],
                e = [d[0][1], d[0][0], d[1][1], d[1][0]];
            e[0] = Math.max(-180, e[0]), e[1] = Math.max(-85, e[1]), e[2] = Math.min(180, e[2]), e[3] = Math.min(85, e[3]), e = ol.proj.transformExtent(e, "EPSG:4326", "EPSG:3857"), isFinite(e[0]) && isFinite(e[1]) && isFinite(e[2]) && isFinite(e[3]) && (b = e)
        }
        var f = document.createElement("a");
        f.href = a.wms().url;
        var g = new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: f.protocol + "//" + m.userNameDefault + ":" + m.userPasswordDefault + "@" + f.host + f.pathname,
                params: {
                    LAYERS: a.wms().name,
                    TILED: !0,
                    transparent: !0
                },
                wrapX: !1
            }),
            extent: b,
            name: a.title()
        });
        g.set("id", (new Date).getTime());
        var h = i.map.getLayers().a.length - 1;
        i.map.getLayers().insertAt(h, g)
    }, b.copyToPaste = function(a) {
        return console.log(location.protocol + "//" + location.host + a.substr(2)), location.protocol + "//" + location.host + a.substr(2)
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("InspectorCtrl", ["$scope", "EVENTS", "$rootScope", "Logger", "$translate", "CatalogedItemAdapter19139", function(a, b, c, d, e, f) {
    var g = e.instant("INSPECTOR"),
        h = new d({
            prefix: g
        });
    h.info("Primer log del Inspector"), c.$on(b.catalogitemdetail, function(b, c) {
        c ? a.showRight(!0) : a.showRight(!1), a.item = c
    }), c.$on(b.catalogsearchclear, function(b, c) {
        a.showRight(!1), a.item = null
    }), c.$on(b.catalogfeatureselected, function(b, c) {
        c ? a.showRight(!0) : a.showRight(!1), a.item = c
    }), c.$on(b.itemSelected, function(a, b) {})
}]);
var app = angular.module("suriWebClientApp");
app.controller("MapCtrl", ["$scope", "EVENTS", "$rootScope", "MapService", "$translate", "Logger", function(a, b, c, d, e, f) {
    function g(a) {
        return a.extents().map(function(b) {
            return b && Array.isArray(b.bboxes) && b.bboxes.length ? h(b, a) : null
        }).reduce(function(a, b) {
            return a.concat(b)
        })
    }

    function h(a, b) {
        var c, d, e, f, g, h = 0,
            i = a.bboxes;
        if (i.length > 1) {
            var j, k = [];
            for (h; h < i.length; h++) f = i[h], c = f[0].reverse(), d = f[1].reverse(), e = ol.extent.boundingExtent([c, d]), e[0] = Math.max(-180, e[0]), e[1] = Math.max(-85, e[1]), e[2] = Math.min(180, e[2]), e[3] = Math.min(85, e[3]), j = ol.geom.Polygon.fromExtent(e), k.push(j.getCoordinates());
            var l = new ol.geom.MultiPolygon(k);
            g = new ol.Feature({
                geometry: l
            })
        } else f = i[0], c = f[0].reverse(), d = f[1].reverse(), e = ol.extent.boundingExtent([c, d]), e[0] = Math.max(-180, e[0]), e[1] = Math.max(-85, e[1]), e[2] = Math.min(180, e[2]), e[3] = Math.min(85, e[3]), g = new ol.Feature({
            geometry: ol.geom.Polygon.fromExtent(e)
        });
        return g.getGeometry().transform("EPSG:4326", "EPSG:3857"), g.setId(b.id()), g.rawData = b, g
    }

    function i(a) {
        var b = a.get("surStyleIdx");
        b || (b = Math.floor(Math.random() * v.length), a.set("surStyleIdx", b));
        var c = v[b],
            d = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: n(c.fillcolor).concat([.05])
                }),
                stroke: new ol.style.Stroke({
                    color: n(c.strokecolor).concat([.6]),
                    width: 2
                })
            });
        return [d]
    }

    function j(a) {
        var b = a.get("surStyleIdx") || 0,
            c = v[b];
        return c
    }

    function k(a) {
        var b = j(a),
            c = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: n(b.fillcolor).concat([.2])
                }),
                stroke: new ol.style.Stroke({
                    color: n(b.strokecolor).concat([1]),
                    width: 2
                })
            });
        return [c]
    }

    function l(a) {
        var b = j(a),
            c = new ol.style.Style({
                fill: new ol.style.Fill({
                    color: n(b.fillcolor).concat([.05])
                }),
                stroke: new ol.style.Stroke({
                    color: n(b.strokecolor).concat([.6]),
                    width: 2
                })
            });
        return [c]
    }

    function m(a, b) {
        r.getSource().getFeatureById(a.rawData.id()).setStyle(b)
    }

    function n(a) {
        var b = [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
        return b
    }
    var o = e.instant("MAP"),
        p = new f({
            prefix: o
        });
    p.log("Primer log del Mapa");
    var q = d.map,
        r = new ol.layer.Vector({
            source: new ol.source.Vector,
            style: i,
            name: "Catálogo"
        });
    q.addLayer(r), a.selectedFeature = null;
    var s = new ol.interaction.Select({
        condition: ol.events.condition.click,
        layers: [r],
        style: k
    });
    s.on("select", function(d) {
        if (null != a.selectedFeature) {
            var e = a.selectedFeature,
                f = l(e);
            m(e, f), a.selectedFeature = null
        }
        var g = null,
            h = d.selected[0];
        if (h) {
            a.selectedFeature = h, g = h.rawData;
            var f = k(h);
            m(h, f)
        }
        c.$broadcast(b.catalogfeatureselected, g)
    }), q.addInteraction(s), c.$on(b.catalogitemdetail, function(a, b) {
        var c = s.getFeatures();
        if (b && b.id()) var d = r.getSource(),
            e = d.getFeatureById(b.id()),
            f = e != c.item(0);
        c.clear(), e && (s.getFeatures().push(e), u(e, f))
    }), c.$on(b.catalogitemunselected, function(a, b) {
        var c = r.getSource(),
            d = c.getFeatureById(b.id());
        d && s.getFeatures().remove(d)
    }), c.$on(b.catalogsearchresult, function(b, c) {
        var d = c.map(function(a) {
            return a.extents() ? g(a) : void 0
        }).filter(function(a) {
            return a && t(a.getGeometry().getExtent())
        });
        d.sort(function(a, b) {
            return b.getGeometry().getArea() - a.getGeometry().getArea()
        }), s.getFeatures().clear(), r.getSource().clear(), r.getSource().addFeatures(d), a.selectedFeature = null
    }), c.$on(b.catalogsearchclear, function(b, c) {
        s.getFeatures().clear(), r.getSource().clear(), a.selectedFeature = null
    });
    var t = function(a) {
            if (a[0] >= a[2] && a[1] >= a[3]) return !1;
            var b = [-20037508.35, -20037508.35, 20037508.35, 20037508.35];
            return ol.extent.containsExtent(b, a) ? !0 : !1
        },
        u = function(a, b) {
            if (b) {
                var c = 2e3,
                    d = +new Date,
                    e = ol.animation.pan({
                        duration: c,
                        source: q.getView().getCenter(),
                        start: d
                    }),
                    f = ol.animation.bounce({
                        duration: c,
                        resolution: 4 * q.getView().getResolution(),
                        start: d
                    });
                q.beforeRender(e, f)
            }
            q.getView().fitGeometry(a.getGeometry(), q.getSize()), q.getView().setZoom(q.getView().getZoom() - 2)
        },
        v = [{
            fillcolor: "FFCDD2",
            strokecolor: "F44336"
        }, {
            fillcolor: "F8BBD0",
            strokecolor: "E91E63"
        }, {
            fillcolor: "E1BEE7",
            strokecolor: "9C27B0"
        }, {
            fillcolor: "D1C4E9",
            strokecolor: "673AB7"
        }, {
            fillcolor: "BBDEFB",
            strokecolor: "2196F3"
        }, {
            fillcolor: "C8E6C9",
            strokecolor: "4CAF50"
        }, {
            fillcolor: "FFF9C4",
            strokecolor: "FFEB3B"
        }, {
            fillcolor: "FFCCBC",
            strokecolor: "FF5722"
        }, {
            fillcolor: "D7CCC8",
            strokecolor: "795548"
        }, {
            fillcolor: "CFD8DC",
            strokecolor: "607D8B"
        }],
        w = new ol.interaction.DragBox({
            style: new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: [0, 0, 255, 1]
                })
            })
        });
    w.on("boxend", function(a) {
        var d = w.getGeometry().transform("EPSG:3857", "EPSG:4326").getExtent();
        c.$broadcast(b.bboxselected, d), q.removeInteraction(w)
    }), c.$on(b.captureBbox, function() {
        q.removeInteraction(w), q.addInteraction(w)
    })
}]);
var app = angular.module("suriWebClientApp");
app.controller("CatalogSearchCtrl", ["$scope", "EVENTS", "$rootScope", "CSWService", "$translate", "CatalogsService", "Catalog", "CONFIG", function(a, b, c, d, e, f, g, h) {
    function i() {
        f.getList().then(function(b) {
            a.catalogs = b.map(function(a) {
                return new g(a)
            }), a.aCatalogWasSelected = !1, a.catalogs && a.catalogs.length > 0 && a.select(a.catalogs[0])
        }, function(b) {
            console.error(" Error al conectarse con el servidor", b.status), a.selecting = !1
        })
    }
    c.$on(b.catalogUpdated, function() {
        i()
    });
    e.instant("CATALOG_SEARCH");
    a.tabindex = 0, a.aCatalogWasSelected = !1, a.types = [], a.selectedCatalog = {}, a.formErrors = {}, a.selects = {}, a.selecting = !1, i(), a.select = function(b) {
        a.searching = !1, a.selecting = !0, b.inspect(), f.one(b.id).get().then(function(c) {
            b = new g(c), console.debug(c), a.tabindex = 1, a.selectedCatalog = c, console.info("Tomando URL Absoluta, deberia ser relativa"), console.info(c.configParameters.server.url), d.setCatalog("/" + c.configParameters.server.url.replace(/^(?:\/\/|[^\/]+)*\//, "")), a.selecting = !1, a.aCatalogWasSelected = !0
        }, function(b) {
            a.selecting = !1, console.error("Error al conectarse con el servidor", b.status)
        })
    }, a.searching = !1, a.selects.serie = "", a.selects.title = "", a.selects.mission = "", a.selects.creationDateFrom = "", a.selects.creationDateTo = "", a.selects.product = "", a.selects.bbox = [], a.selects.keywords = "", a.selects.dateFormat = "dd/MM/yyyy", a.selects.datePattern = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/([1-9]|0[1-9]|1[0-2])\/((19|20)\d{2})$/, a.finder = function() {
        var d = "",
            e = "";
        if ("" != a.selects.creationDateFrom && (d = moment(a.selects.creationDateFrom, "DD/MM/YYYY").subtract(1, "d").format("YYYY-MM-DD")), "" != a.selects.creationDateTo) var e = moment(a.selects.creationDateTo, "DD/MM/YYYY").add(1, "d").format("YYYY-MM-DD");
        var f = {
            serie: a.selects.serie,
            title: a.selects.title,
            mission: a.selects.mission,
            creationDateFrom: d,
            creationDateTo: e,
            product: a.selects.product,
            bbox: a.selects.bbox,
            keywords: j(a.selects.keywords),
            matchCase: !1
        };
        a.searching = !0, setTimeout(function() {
            c.$broadcast(b.catalogsearch, f)
        }, 75)
    };
    var j = function(a) {
            var b = "";
            return a && (b = a.split(" ").map(k).map(function(a) {
                return "KEYWORD:%" + a + "%:KEYWORD"
            }).join(" ")), b
        },
        k = function(a) {
            var b = ["á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"],
                c = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
            return a.split("").map(function(a) {
                var d = b.indexOf(a);
                return d > -1 ? c[d] : a
            }).join("")
        };
    c.$on(b.bboxselected, function(b, c) {
        if (a.capturing = !1, a.aCatalogWasSelected) {
            var d = c.map(function(a) {
                return a.toFixed(2)
            });
            a.$apply(function() {
                a.selects.bbox = d
            })
        }
    }), a.cancel = function(b) {
        a.selects.serie = "", a.selects.title = "", a.selects.mission = "", a.selects.creationDateFrom = "", a.selects.creationDateTo = "", a.selects.product = "", a.selects.bbox = [], a.selects.keywords = ""
    }, c.$on(b.catalogsearchdone, function() {
        a.searching = !1
    }), a.isCatalogFormValid = function() {
        var b = a.isBboxValid();
        return b
    }, a.isBboxValid = function() {
        for (var b = a.selects.bbox, c = 0, d = 0; 4 > d; d++)
            if (b[d] && "" != b[d]) {
                if (isNaN(b[d])) return a.formErrors.bbox = {
                    type: "error",
                    message: e.instant("ERROR_BBOXFIELD_NAN")
                }, !1;
                c++
            }
        return 4 > c && c > 0 ? (a.formErrors.bbox = {
            type: "error",
            message: e.instant("ERROR_BBOXFIELD_NOT_COMPLETE")
        }, !1) : (0 == c && (a.selects.bbox = []), a.formErrors.bbox = {}, !0)
    }, a.series = h.series, a.products = h.products, a.missions = h.missions, a.capturing = !1, a.CaptureBBOX = function() {
        a.capturing = !0, c.$broadcast(b.captureBbox)
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("LayerManagerCtrl", ["$rootScope", "$scope", "EVENTS", "MapService", "$translate", "Logger", function(a, b, c, d, e, f) {
    function g(a, b, c) {
        a.set("selected", c), d.map.getLayers().insertAt(b, a)
    }

    function h() {
        var a = [];
        return d.map.getLayers().forEach(function(b, c, d) {
            b.get("id") && a.push({
                name: b.get("name"),
                id: b.get("id"),
                getVisible: function() {
                    return b.getVisible()
                },
                setVisible: function(a) {
                    b.setVisible(a)
                },
                selected: b.get("selected"),
                unremovable: b.get("unremovable"),
                disabled: b.get("disabled")
            })
        }), a
    }

    function i(a, c, d) {
        var e = b.removeLayer(a);
        g(e, c, d)
    }

    function j(a, b) {
        var c;
        return b.forEach(function(b, d) {
            b.id == a && (c = d)
        }), c
    }
    b.layers = h().reverse(), b.selected = {}, d.map.getLayers().on("change:length", function(a) {
        console.log("Cambia la cantidad"), b.$evalAsync(function() {
            b.layers = h().reverse()
        })
    }), b.selectLayer = function(a) {
        b.layers[a].selected = !b.layers[a].selected
    }, b.removeLayer = function(a) {
        var b = k(a),
            c = d.map.getLayers().removeAt(b);
        return c
    };
    var k = function(a) {
        var b;
        return d.map.getLayers().forEach(function(c, d, e) {
            c.get("id") === a && (b = d)
        }), b
    };
    b.moveLayer = function(a, c) {
        var d = b.layers,
            e = d[c].selected;
        b.layers.splice(c, 1), d = d.reverse();
        var f = j(a, d);
        i(a, f, e)
    }, a.$broadcast(c.mapaddservice, {})
}]);
var app = angular.module("suriWebClientApp");
app.controller("dataLoader", ["$scope", "$rootScope", "EVENTS", "$translate", "jsonSchemaProvider", "jsonSchemaProcessor", "$q", "formModificationEventHandler", "formsConfig", function(a, b, c, d, e, f, g, h, i) {
    function j(a) {
        return a.join("-")
    }

    function k(b) {
        var c = [],
            d = j([b, "schema", a.currentLang]);
        return c.schema = e.get({
            schema: b,
            file: d
        }), d = j([b, "model"]), c.model = e.get({
            schema: b,
            file: d
        }), c
    }
    a.show = !1, a.currentLang = d.use();
    var l, m = {
        type: "submit",
        title: "Save"
    };
    b.$on(c.loadDataRequest, function(b, c, d) {
        a.formData = k(c, "id"), l = c, g.all([a.formData.schema.$promise, a.formData.model.$promise]).then(function(b) {
            f(b[0].schema).then(function(c) {
                c.form.then(function(d) {
                    a.model = b[1].model, a.schema = c.schema, a.form = [d, m], a.show = !0
                })
            })
        })
    }), a.cancel = function() {
        a.show = !1
    }, a.submit = function(a) {}, b.$on("modelModified", function(b, c) {
        h(l, c, a.model).then(function(b) {
            a.model = b
        })
    })
}]);
var app = angular.module("suriWebClientApp");
app.controller("WorkspaceMenuCtrl", ["$scope", "Logger", "$mdDialog", "$location", "LoginService", "$translate", "$routeParams", function(a, b, c, d, e, f, g) {
    var h = new b({
        prefix: "WorkspaceMenuCtrl"
    });
    h.info("Inicializado"), a.logout = function(a) {
        var b = c.confirm().title(f.instant("LOGOUT_ACTION")).content(f.instant("LOGOUT_CONFIRM")).ariaLabel("Logout Dialog").ok(f.instant("LOGOUT_ACTION")).cancel(f.instant("CANCEL_ACTION")).targetEvent(a);
        c.show(b).then(function() {
            e.logout()
        }, function() {
            h.info("Select stay")
        })
    }, a.en = function() {
        f.use("en")
    }, a.es = function() {
        f.use("es")
    }, a.username = g.user
}]);
var app = angular.module("suriWebClientApp");
app.controller("groupForm", ["$scope", "$rootScope", "CatalogGroupsService", "gisGroupsService", "EVENTS", "$translate", "$q", "$controller", function(a, b, c, d, e, f, g, h) {
    function i(a) {
        return a = a.map(function(a) {
            return {
                name: a.name,
                item: {
                    id: a.id,
                    href: a.href
                }
            }
        })
    }

    function j() {
        var a = [];
        return a.push(getParentsOptions()), g.all(a)
    }
    h("resourceForm", {
        $scope: a
    }), b.$on(e.groupCreate, function(b, c) {
        a.type = c, a.model.type = c, a.title = f.instant("ADD_GROUP"), a.service = k[c], j().then(a.openForm)
    }), b.$on(e.groupEdit, function(b, c) {
        a.type = c.type, a.title = f.instant("EDIT_GROUP"), a.service = k[c.type], a.loadResource(c.id).then(j).then(a.openForm)
    }), a.resourceUpdatedEvent = e.groupUpdated, a.formId = "group", a.defaultModel = {
        meta: {
            version: "1.0",
            descripcion: ""
        },
        parent: null,
        id: null,
        order: null,
        type: a.type,
        published: !0,
        online: !0,
        administrable: !0,
        href: null
    }, a.model = angular.copy(a.defaultModel), a.parentOptions = [], a.requiredFields = [
        [],
        [{
            key: ["description"],
            name: "DESCRIPTION"
        }, {
            key: ["name"],
            name: "NAME"
        }]
    ], getParentsOptions = function() {
        return a.service.getList().then(function(b) {
            a.parentOptions = i(b), b.length > 0 && a.requiredFields[1].push({
                key: ["parent"],
                name: "PARENT_GROUP"
            })
        })
    };
    var k = {
        CATALOG: c,
        LAYERS: d
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("catalogContentOptions", ["$scope", "$rootScope", "EVENTS", "groupTypes", function(a, b, c, d) {
    a.fireCreateGroup = function() {
        b.$broadcast(c.groupCreate, d.catalog)
    }, a.fireCreateCatalog = function() {
        b.$broadcast(c.catalogCreate)
    }, a.fireEditCatalog = function(a) {
        b.$broadcast(c.catalogEdit, a)
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("catalogFormCtrl", ["$scope", "$rootScope", "$q", "$translate", "CatalogsService", "usersService", "EVENTS", "CatalogGroupsService", "$controller", function(a, b, c, d, e, f, g, h, i) {
    function j() {
        var a = [];
        return a.push(m()), a.push(n()), o(), p(), q(), r(), c.all(a)
    }

    function k(a) {
        return a.map(function(a, b) {
            return {
                value: a.id,
                name: a.name
            }
        })
    }

    function l(a) {
        return d.instant(a)
    }

    function m() {
        return h.getList().then(k).then(function(b) {
            a.groupOptions = b
        })
    }

    function n() {
        return f.getList().then(k).then(function(b) {
            a.userOptions = b
        })
    }

    function o() {
        a.profileOptions = [{
            name: "ISO 19139",
            value: "6447a7e1-e552-4df2-8b39-f39bff06488f"
        }]
    }

    function p() {
        a.roleOptions = [{
            name: l("AUTHOR"),
            value: "author"
        }, {
            name: l("PROCESSOR"),
            value: "processor"
        }, {
            name: l("PUBLISHER"),
            value: "publisher"
        }, {
            name: l("CUSTODIAN"),
            value: "custodian"
        }, {
            name: l("POINT_OF_CONTACT"),
            value: "pointOfContact"
        }, {
            name: l("DISTRIBUTOR"),
            value: "distributor"
        }, {
            name: l("USER"),
            value: "user"
        }, {
            name: l("RESOURCE_PROVIDER"),
            value: "resourceProvider"
        }, {
            name: l("ORIGINATOR"),
            value: "originator"
        }, {
            name: l("OWNER"),
            value: "owner"
        }, {
            name: l("PRINCIPAL_INVESTIGATOR"),
            value: "principalInvestigator"
        }]
    }

    function q() {
        a.languageOptions = [{
            name: l("SPANISH"),
            value: "ES"
        }, {
            name: l("ENGLISH"),
            value: "EN"
        }]
    }

    function r() {
        a.identificationKeywordsTypeOptions = [{
            name: l("DISCIPLINE"),
            value: "discipline"
        }, {
            name: l("TEMPORAL"),
            value: "temporal"
        }, {
            name: l("PLACE"),
            value: "place"
        }, {
            name: l("THEME"),
            value: "theme"
        }, {
            name: l("STRATUM"),
            value: "stratum"
        }]
    }

    function s(a) {
        var b = a.configParameters["metadata:main"].identificationKeywords;
        return b && (a.configParameters["metadata:main"].identificationKeywords = b.split(",")), a
    }

    function t() {
        var b = a.model.configParameters["metadata:main"].identificationKeywords;
        Array.isArray(b) && (a.model.configParameters["metadata:main"].identificationKeywords = b.join(","))
    }

    function u(a) {
        return a.profileId = "6447a7e1-e552-4df2-8b39-f39bff06488f", a
    }
    i("resourceForm", {
        $scope: a
    }), b.$on(g.catalogCreate, function() {
        a.title = d.instant("ADD_CATALOG"), j().then(a.openForm)
    }), b.$on(g.catalogEdit, function(b, c) {
        a.title = d.instant("EDIT_CATALOG"), a.loadResource(c.id).then(j).then(a.openForm)
    }), a.formId = "catalog", a.service = e, a.resourceUpdatedEvent = g.catalogUpdated, a.defaultModel = {
        name: "",
        description: "",
        id: null,
        type: "local",
        startDate: null,
        endDate: null,
        externalUrl: null,
        externalUser: null,
        externalUserPassword: null,
        copyright: "copyleft",
        administrable: !0,
        published: !0,
        readOnly: !1,
        online: !0,
        profileId: "6447a7e1-e552-4df2-8b39-f39bff06488f",
        configParameters: {
            server: {
                mimetype: "application/xml",
                language: "ES",
                encoding: "UTF-8",
                maxRecords: 50,
                federatedCatalogues: "",
                prettyPrint: !1,
                domainQueryType: "list",
                domainCounts: !0,
                profiles: "apiso",
                spatialRanking: !0,
                ogcSchemasBase: "http://schemas.opengis.net"
            },
            "metadata:main": {
                identificationKeywords: []
            }
        },
        meta: {
            version: "1.0",
            description: "Catálogo"
        },
        user: {
            href: null
        },
        group: {
            id: null,
            href: null
        },
        href: null
    }, a.afterLoad = function(a) {
        return a = s(a), a = u(a)
    }, a.beforeSubmit = t, a.model = angular.copy(a.defaultModel), a.focusStatus = {
        keywords: !1
    }, a.requiredFields = [
        [],
        [{
            key: ["description"],
            name: "DESCRIPTION"
        }, {
            key: ["name"],
            name: "NAME"
        }],
        [{
            key: ["group", "id"],
            name: "COLLECTION"
        }],
        [{
            key: ["configParameters", "metadata:main", "providerName"],
            name: "PROVIDER_NAME"
        }, {
            key: ["configParameters", "metadata:main", "providerUrl"],
            name: "PROVIDER_URL"
        }],
        [{
            key: ["user", "id"],
            name: "USER"
        }, {
            key: ["configParameters", "metadata:main", "contactAddress"],
            name: "CONTACT_ADDRESS"
        }, {
            key: ["configParameters", "metadata:main", "contactCity"],
            name: "CONTACT_CITY"
        }, {
            key: ["configParameters", "metadata:main", "contactStateOrProvince"],
            name: "CONTACT_STATE_OR_PROVINCE"
        }, {
            key: ["configParameters", "metadata:main", "contactPhone"],
            name: "CONTACT_PHONE"
        }, {
            key: ["configParameters", "metadata:main", "contactFax"],
            name: "CONTACT_FAX"
        }, {
            key: ["configParameters", "metadata:main", "contactPostalCode"],
            name: "CONTACT_POSTAL_CODE"
        }, {
            key: ["configParameters", "metadata:main", "contactUrl"],
            name: "CONTACT_URL"
        }, {
            key: ["configParameters", "metadata:main", "contactHours"],
            name: "CONTACT_HOURS"
        }, {
            key: ["configParameters", "metadata:main", "contactInstructions"],
            name: "CONTACT_INSTRUCTIONS"
        }, {
            key: ["configParameters", "metadata:main", "contactRole"],
            name: "CONTACT_ROLE"
        }],
        []
    ], a.changeContactFields = function() {
        var b = a.model.user.id;
        f.one(b).get().then(function(b) {
            a.model.configParameters["metadata:main"].contactName = b.name, a.model.configParameters["metadata:main"].contactEmail = b.email, a.model.configParameters["metadata:main"].contactPosition = b.position, a.model.user.href = b.href
        })
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("resourceForm", ["$scope", "$translate", "LxDialogService", "$rootScope", function(a, b, c, d) {
    function e(b) {
        var c = a.requiredFields[b],
            d = f(c);
        return 0 == d.length ? !0 : !1
    }

    function f(a) {
        for (var b, c = [], d = 0; d < a.length; d++) b = a[d], g(b) && c.push(b);
        return c
    }

    function g(b) {
        var c = i(b.key, a.model);
        return null == c || "" == c
    }

    function h(a) {
        var b, c = "",
            d = !1,
            e = a.pop();
        if (a.length > 0) {
            d = a.pop();
            for (var f = 0; f < a.length; f++) b = a[f], c += j(b.name) + ", "
        }
        return d && (c += j(d.name) + j("AND")), c += j(e.name)
    }

    function i(a, b) {
        for (var c, d, e = 0; e < a.length;) c = a[e], b && (b = b[c], d = b), e++;
        return d
    }

    function j(a) {
        return b.instant(a)
    }

    function k() {
        return void 0 != a.model.uuid && null != a.model.uuid ? a.model.uuid : void 0 != a.model.id && null != a.model.id ? a.model.id : !1
    }
    a.requiredFields = [
        [],
        []
    ], a.selectedIndex = 1, a.afterLoad = function(a) {
        return a
    }, a.beforeSubmit = function() {}, a.openForm = function() {
        c.open(a.formId), a.success = ""
    }, a.close = function() {
        a.model = angular.copy(a.defaultModel), c.close(a.formId)
    }, a.submit = function(b) {
        var c, e = k();
        a.beforeSubmit(), c = e && null != e ? a.service.one(e).customPUT(a.model, "", "", {
            "Content-Type": "application/json"
        }) : a.service.post(a.model), c.then(function(b) {
            d.$broadcast(a.resourceUpdatedEvent), a.showSuccess(b)
        }, a.showError)
    }, a.showSuccess = function(b) {
        k() ? a.success = "Su recurso se edito exitosamente" : a.success = "Su recurso se creo exitosamente"
    }, a.showError = function(b) {
        k() ? a.success = "Ha habido un error en la edicion del recurso" : a.success = "Ha habido un error en la creacion del recurso"
    }, a.loadResource = function(b) {
        return a.service.one(b).get().then(function(b) {
            b = a.afterLoad(b), a.model = b, console.log("MODEL"), console.log(a.model)
        })
    }, a.isFirst = function() {
        return 1 == a.selectedIndex
    }, a.isLast = function() {
        return a.selectedIndex + 1 == a.requiredFields.length
    }, a.fordwardButtonEnabled = function() {
        return e(a.selectedIndex)
    }, a.tabEnabled = function(a) {
        for (var b = !0, c = 0; a > c; c++) b = b && e(c);
        return b
    }, a.moveForward = function() {
        a.selectedIndex = a.selectedIndex + 1
    }, a.moveBackwards = function() {
        a.selectedIndex--
    }, a.changeFocusStatus = function(b) {
        a.focusStatus[b] = !a.focusStatus[b]
    }, a.warningLegend = function() {
        var b = a.requiredFields[a.selectedIndex],
            c = f(b);
        if (c.length > 0) {
            var d = j("ERROR_LEGEND"),
                e = d.replace("%%%", h(c));
            return e
        }
        return ""
    }
}]);
var app = angular.module("suriWebClientApp");
app.controller("LoginPublicCtrl", ["$scope", "$mdToast", "LoginService", "$translate", "$location", "CONFIG", function(a, b, c, d, e, f) {
    a.project = f.project, c.login(f.userNameDefault, f.userPasswordDefault, function(a) {
        e.path("/workspace/" + f.userNameDefault)
    }, function(a) {
        console.log("error login default")
    }), a.en = function() {
        d.use("en")
    }, a.es = function() {
        d.use("es")
    }
}]);
var app = angular.module("suriWebClientApp");
app.factory("Resource", ["$rootScope", "EVENTS", "$mdDialog", "$translate", function(a, b, c, d) {
    function e() {}

    function f(a) {
        return d.instant(a)
    }
    return e.prototype.inspect = function() {
        a.$broadcast(b.itemSelected, this)
    }, e.prototype.edit = function() {}, e.prototype["delete"] = function() {}, e.showDeleteMessage = function() {
        var a = c.confirm().title(f("DELETE_ACTION")).content(f("DELETE_RESOURCE_CONFIRM")).ariaLabel("Delete resource dialog").ok(f("DELETE_ACTION")).cancel(f("CANCEL_ACTION"));
        return c.show(a)
    }, e
}]);
var app = angular.module("suriWebClientApp");
app.service("LoginService", ["$resource", "CONFIG", "$http", "base64", "$location", "$translate", "$window", "$cookies", function(a, b, c, d, e, f, g, h) {
    var i = a(b.baseLoginUrl, {}, {});
    this.login = function(a, b, e, f) {
        this.user = a, this.pass = b;
        var g = d.encode(a + ":" + b);
        c.defaults.headers.common.Authorization = "Basic " + g;
        var j = {
            meta: {
                apiVersion: "1.0",
                description: "Token"
            },
            href: null,
            id: null,
            user: {
                id: null,
                href: null
            },
            startDate: null,
            endDate: null,
            token: null
        };
        i.save(j, function() {
            h.put("credentials", g), e()
        }, function(a) {
            f(a)
        })
    }, this.getCurrentCredentials = function() {
        return {
            user: this.user,
            pass: this.pass
        }
    }, this.logout = function() {
        c.defaults.headers.common.Authorization = "", h.remove("credentials"), console.debug(e.absUrl().split("/#")[0]), g.location.href = e.absUrl().split("/#")[0] + "/"
    }, this.relogin = function() {
        c.defaults.headers.common.Authorization = "Basic " + h.get("credentials")
    }
}]), app.factory("authHttpResponseInterceptor", ["$q", "$location", "$window", function(a, b, c) {
    return {
        response: function(b) {
            return 401 === b.status && console.log("Response 401"), b || a.when(b)
        },
        responseError: function(d) {
            return 401 === d.status ? (console.log("Response Error 401", d), c.location.href = b.absUrl().split("/#")[0] + "/") : 500 === d.status && (console.log("Response 500!"),
                console.log(d), alert("Error al conectarse con el Servidor!")), a.reject(d)
        }
    }
}]), app.config(["$httpProvider", function(a) {
    a.interceptors.push("authHttpResponseInterceptor"), a.defaults.headers.post["Content-Type"] = "application/json"
}]);
var app = angular.module("suriWebClientApp");
app.service("fakeCheckbox", function() {
    var a = function(a) {
            $(a).hasClass("checked") ? $(a).removeClass("checked") : $(a).addClass("checked")
        },
        b = function(a) {
            $(a).hasClass("checked") ? ($(a).removeClass("checked"), $(a).parents(".fakeRow").removeClass("checked")) : ($(a).addClass("checked"), $(a).parents(".fakeRow").addClass("checked"))
        },
        c = function(a, b) {
            return b ? $(a).addClass("checked") : $(a).removeClass("checked"), a
        };
    return {
        changeCheck: a,
        changeCheckRow: b,
        setState: c
    }
});
var app = angular.module("suriWebClientApp");
app.factory("Logger", function() {
    return Logdown
});
var app = angular.module("suriWebClientApp");
app.constant("EVENTS", {
    catalogsearch: "CATALOG-SEARCH",
    catalogsearchclear: "CATALOG-SEARCH-CLEAR",
    catalogitemdetail: "CATALOG-ITEM-DETAIL",
    catalogsearchresult: "CATALOG-SEARCH-RESULT",
    catalogitemunselected: "CATALOG-ITEM-UNSELECTED",
    catalogfeatureselected: "CATALOG-FEATURE-SELECTED",
    bboxselected: "BBOX-SELECTED",
    catalogsearchdone: "CATALOG-SEARCH-DONE",
    mapaddservice: "MAP-ADD-SERVICE",
    itemSelected: "ITEM-SELECTED",
    loadDataRequest: "LOAD-DATA-REQUEST",
    processCreate: "PROCESS-CREATE",
    processEdit: "PROCESS-EDIT",
    processUpdated: "PROCESS-UPDATED",
    processVersionUpdated: "PROCESS-VERSION-UPDATED",
    processVersionCreate: "PROCESS-VERSION-CREATE",
    processVersionEdit: "PROCESS-VERSION-EDIT",
    processSelected: "PROCESS-SELECTED",
    processUnselected: "PROCESS-UNSELECTED",
    catalogCreate: "CATALOG-CREATE",
    catalogEdit: "CATALOG-EDIT",
    catalogUpdated: "CATALOG-UPDATED",
    groupCreate: "GROUP-CREATE",
    groupEdit: "GROUP-EDIT",
    groupUpdated: "GROUP-UPDATED",
    captureBbox: "CAPTURE-BBOX"
});
var app = angular.module("suriWebClientApp");
app.service("MapService", ["CONFIG", function(a) {
    var b = new ol.layer.Group({
            layers: [new ol.layer.Tile({
                source: new ol.source.OSM
            }), new ol.layer.Image({
                source: new ol.source.ImageStatic({
                    url: "./images/malvinas.png",
                    projection: "EPSG:3857",
                    imageExtent: ol.proj.transformExtent([-63.28125, -53.74871079689899, -56.25, -50.289339253291764], "EPSG:4326", "EPSG:3857")
                })
            })],
            name: "OpenStreetMap",
            id: (new Date).getTime(),
            unremovable: !0,
            visible: !1
        }),
        c = new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: "http://wms.ign.gob.ar/geoserver/wms?",
                params: {
                    LAYERS: "capabaseargenmap",
                    TILED: !0,
                    transparent: !0
                },
                wrapX: !0,
                projection: "EPSG:3857"
            }),
            name: "Capa IGN",
            id: (new Date).getTime(),
            visible: !0,
            unremovable: !0
        }),
        d = 0;
    c.getSource().on("tileloaderror", function g() {
        d++, d > 5 && (c.getSource().un("tileloaderror", g), e(c), layers[0].setVisible(!0), f.getLayers().dispatchEvent("change:length"))
    });
    var e = function(a) {
            a.setVisible(!1), a.set("name", a.get("name") + " (offline)"), a.set("disabled", !0)
        },
        f = new ol.Map({
            target: "map",
            layers: [b, c],
            view: new ol.View({
                center: ol.proj.transform(a.map.center, "EPSG:4326", "EPSG:3857"),
                zoom: a.map.zoom,
                minZoom: 2,
                extent: ol.proj.transformExtent(a.map.extent, "EPSG:4326", "EPSG:3857")
            }),
            controls: ol.control.defaults({
                attribution: !1
            })
        });
    f.on("click", function(a) {
        console.log(ol.proj.transform(a.coordinate, "EPSG:3857", "EPSG:4326"))
    }), this.map = f
}]);
var app = angular.module("suriWebClientApp");
app.factory("Catalog", ["Resource", "CatalogsService", "$rootScope", "EVENTS", function(a, b, c, d) {
    function e(a) {
        this.id = a.id, this.name = a.name, this.type = a.type, this.group = a.group, this.startDate = a.startDate, this.endDate = a.endDate, this.externalUrl = a.externalUrl, this.externalUserPassword = a.externalUserPassword, this.profile = a.profileId, this.copyright = a.copyright, this.administrable = a.adminisrable, this.published = a.published, this.readOnly = a.readonly, this.online = a.online, this.name = a.name, this.description = a.description, this.configParameters = a.configParameters, this.meta = a.meta, this.href = a.href, this.user = a.user
    }

    function f() {
        c.$broadcast(d.catalogUpdated)
    }
    return e.prototype = new a, e.prototype.edit = function() {
        c.$broadcast(d.catalogEdit, this)
    }, e.prototype["delete"] = function() {
        var c = this;
        a.showDeleteMessage().then(function() {
            b.one(c.id).one("data").remove().then(f)
        }, function() {
            logger.info("resource not removed")
        })
    }, e
}]);
var app = angular.module("suriWebClientApp");
app.factory("CatalogAdapter19139", ["CatalogedItemAdapter19139", function(a) {
    function b(a) {
        this.response = a
    }
    return b.prototype.setRawResponse = function(a) {
        this.response = a
    }, b.prototype.getRawObject = function() {
        return this.response
    }, b.prototype.process = function() {
        return {
            version: this.version(),
            recordsMatched: this.recordsMatched(),
            startResults: this.startResults(),
            totalResults: this.totalResults(),
            records: this.getRecords()
        }
    }, b.prototype.version = function() {
        return this.response["csw:GetRecordsResponse"].version
    }, b.prototype.startResults = function() {
        return this.response["csw:GetRecordsResponse"].searchResults.nextRecord
    }, b.prototype.recordsMatched = function() {
        return this.response["csw:GetRecordsResponse"].searchResults.numberOfRecordsMatched
    }, b.prototype.totalResults = function() {
        return this.response["csw:GetRecordsResponse"].searchResults.numberOfRecordsReturned
    }, b.prototype.getRecords = function() {
        var b = this.response["csw:GetRecordsResponse"].searchResults.any;
        return b ? b.map(function(b) {
            return new a(b)
        }) : []
    }, b
}]);
var app = angular.module("suriWebClientApp");
app.factory("CatalogedItemAdapter19139", function() {
    function a(a) {
        this.item = a
    }
    a.prototype.id = function() {
        return this.item["gmd:MD_Metadata"].fileIdentifier.characterString["gco:CharacterString"]
    }, a.prototype.title = function() {
        return b(this.item).citation.ciCitation.title.characterString["gco:CharacterString"]
    }, a.prototype.description = function() {
        return b(this.item)._abstract.characterString["gco:CharacterString"]
    }, a.prototype.date = function() {
        return b(this.item).citation.ciCitation.date[0].ciDate.date.date
    }, a.prototype.serviceType = function() {
        var a = b(this.item);
        return a.serviceType ? a.serviceType.abstractGenericName["gco:LocalName"].value : "-"
    }, a.prototype.mision = function() {
        var a = b(this.item);
        if (a.supplementalInformation) {
            var c = a.supplementalInformation.characterString["gco:CharacterString"];
            return /MISION:(.*):MISION/.exec(c)[1]
        }
        return "-"
    }, a.prototype.serie = function() {
        var a = b(this.item);
        if (a.citation.ciCitation && a.citation.ciCitation.collectiveTitle) {
            var c = a.citation.ciCitation.collectiveTitle.characterString["gco:CharacterString"];
            return /SERIE:(.*):SERIE/.exec(c)[1]
        }
        return "-"
    }, a.prototype.producto = function() {
        var a = b(this.item);
        return a.citation.ciCitation && a.citation.ciCitation.alternateTitle && a.citation.ciCitation.alternateTitle[0] ? a.citation.ciCitation.alternateTitle[0].characterString["gco:CharacterString"] : "-"
    }, a.prototype.extents = function() {
        return b(this.item).extent.map(function(a) {
            return a.exExtent.geographicElement ? {
                bboxes: a.exExtent.geographicElement.map(function(a) {
                    if (a.abstractEXGeographicExtent) {
                        var b = a.abstractEXGeographicExtent["gmd:EX_GeographicBoundingBox"];
                        return [
                            [b.southBoundLatitude.decimal, b.westBoundLongitude.decimal],
                            [b.northBoundLatitude.decimal, b.eastBoundLongitude.decimal]
                        ]
                    }
                    return void 0
                }).filter(function(a) {
                    return a
                })
            } : void 0
        })
    }, a.prototype.download = function() {
        var a = c(this.item);
        if (a) {
            var b = a.mdDistribution.transferOptions[0].mdDigitalTransferOptions.onLine.filter(function(a) {
                return "WWW:DOWNLOAD-1.0-http--download" == a.ciOnlineResource.protocol.characterString["gco:CharacterString"]
            }).map(function(a) {
                return {
                    url: a.ciOnlineResource.linkage.url,
                    protocol: a.ciOnlineResource.protocol.characterString["gco:CharacterString"],
                    name: a.ciOnlineResource.name.characterString["gco:CharacterString"],
                    status: !0
                }
            });
            return b.length ? b[0] : {
                status: !1
            }
        }
        return {
            status: !1
        }
    }, a.prototype.preview = function() {
        var a = b(this.item);
        return a.graphicOverview ? a.graphicOverview[0].mdBrowseGraphic.fileName.characterString["gco:CharacterString"] : ""
    }, a.prototype.wms = function() {
        var a = c(this.item);
        if (a) {
            var b = a.mdDistribution.transferOptions[0].mdDigitalTransferOptions.onLine.filter(function(a) {
                return "OGC:WMS-1.1.1-http-get-map" == a.ciOnlineResource.protocol.characterString["gco:CharacterString"]
            }).map(function(a) {
                return {
                    url: a.ciOnlineResource.linkage.url,
                    protocol: a.ciOnlineResource.protocol.characterString["gco:CharacterString"],
                    name: a.ciOnlineResource.name.characterString["gco:CharacterString"],
                    status: !0
                }
            });
            return b.length ? b[0] : {
                status: !1
            }
        }
        return {
            status: !1
        }
    };
    var b = function(a) {
            var b = a["gmd:MD_Metadata"].identificationInfo[0].abstractMDIdentification,
                c = Object.keys(b);
            return b[c[0]]
        },
        c = function(a) {
            var b = a["gmd:MD_Metadata"].distributionInfo;
            return b
        };
    return a
});
var app = angular.module("suriWebClientApp");
app.config(["$mdThemingProvider", function(a) {
    a.theme("default").primaryPalette("light-blue").accentPalette("grey")
}]), app.constant("CONFIG", {
    baseUrl: "https://2mp.conae.gov.ar/gis/rest/1.0/",
    baseLoginUrl: "https://2mp.conae.gov.ar/gis/rest/1.0/tokens",
    ideBaseUrl: "https://2mp.conae.gov.ar/ide/rest/1.0/",
    factoryBaseUrl: "https://2mp.conae.gov.ar/factory/rest/1.0/",
    formsUrl: "http://suring-i.suremptec.com.ar",
    map: {
        center: [-65, -35],
        zoom: 4,
        extent: [-180, -84, 180, 84]
    },
    CSWProfile: [
        [OWS_1_0_0, DC_1_1, DCT, XLink_1_0, SMIL_2_0, SMIL_2_0_Language, GML_3_1_1, Filter_1_1_0, CSW_2_0_2, GML_3_2_0, ISO19139_GCO_20060504, ISO19139_GMD_20060504, ISO19139_GMX_20060504, ISO19139_GSS_20060504, ISO19139_GTS_20060504, ISO19139_GSR_20060504, ISO19139_SRV_20060504], {
            namespacePrefixes: {
                "http://www.opengis.net/cat/csw/2.0.2": "csw",
                "http://www.opengis.net/ogc": "ogc",
                "http://www.opengis.net/gml": "gml"
            },
            mappingStyle: "simplified"
        }
    ],
    outputSchema: "http://www.isotc211.org/2005/gmd",
    outputSchemaDefault: "http://www.opengis.net/cat/csw/2.0.2",
    serverUrl: "csw",
    schemasFolder: "schemas",
    project: {
        logo: "",
        name: "2Mp",
        description: "",
        shortDescription: ""
    },
    registerEnabled: !0,
    userNameDefault: "2Mp",
    userPasswordDefault: "public",
    series: ["Módulos temáticos", "Sucesos destacados", "Serie Landsat", "Serie MODIS", "Áreas urbanas", "Ciudades a través del tiempo", "Blue Marble", "Imágenes destacadas", "Luces estables", "Las mejores imágenes SAC-C", "Modelos 3D", "Salinidad del mar", "Clorofila en el mar", "Temperatura del mar"],
    products: ["Color natural", "Infrarrojo color", "Falso color real", "Pan", "PAT", "Mapa de concentración superficial de clorofila", "Mapa de temperatura superficial", "Mapa de salinidad superficial", "Mapa de luces permanentes", "MDP (Modelo digital de Profundidad)", "MDE (Modelo digital de elevación)", "SAR"],
    missions: ["SAC-C MMRS", "SAC-D/Aquarius", "Terra MODIS", "Aqua MODIS", "LandSat-1 MSS", "LandSat-2 MSS", "LandSat-4 TM", "LandSat-5 TM", "LandSat-7 ETM+", "LandSat-8 OLI", "CBERS-2B HRC", "SRTM", "Terra ASTER", "OrbView-3 OHRIS", "ALOS AVNIR-2", "EO-1 ALI", "Soumi NPP VIIRS"]
});
var app = angular.module("suriWebClientApp");
app.config(["$translateProvider", function(a) {
    a.translations("en", {
        BROWSE: "Browse",
        FILE: "File",
        ABOUT: "About",
        HELP: "Help",
        TERMS_AND_COND: "Terms & Conditions",
        AGREE_WITH: "I agree with",
        GUEST_LOGIN_TEXT: "If you don't want to register you also can log as",
        GUEST_LOGIN: "invited user",
        PRIVACY: "Privacy",
        COPYRIGHT: "Copyright",
        USER: "User",
        LOGIN: "Login",
        NAME: "Name",
        SURNAME: "Surname",
        EMAIL: "E-mail",
        MAP: "Map",
        CATALOG: "Catalog",
        CATALOGS: "Catalogs",
        INSPECTOR: "Inspector",
        NO_ITEM_SELECTED_INSPECTOR: "You haven't selected any element to inspect yet",
        WORKSPACE: "Workspace",
        RESULTS_GRID: "Results grid",
        SEARCH_RESULTS_TITLE: "Search results",
        LAYER_MANAGER: "Layer manager",
        CATALOG_SEARCH: "Catalog search",
        USERNAME: "Username",
        PASSWORD: "Password",
        FIELD_REQUIRED: "This field is required",
        LOGIN_ACTION: "Login",
        REGISTER_ACTION: "Register",
        DELETE_ACTION: "Delete",
        DELETE_RESOURCE_CONFIRM: "Are you sure you want to delete the resource?",
        LOGIN_TITTLE: "Login",
        LOGOUT_ACTION: "Logout",
        LOGOUT_CONFIRM: "Are you sure to logout?",
        FIND_ACTION: "Search",
        ADD_ACTION: "Add",
        CANCEL_ACTION: "Cancel",
        CLEAN_ACTION: "Clean",
        AVAILABLE_RESULTS: "available results",
        OF: "of",
        TITLE: "Location",
        KEYWORDS: "Keywords",
        SERVICE: "Service",
        DESCRIPTION: "Description",
        DETAILS: "Details",
        SELECT: "Select",
        TOP_LEFT_X: "Top left x",
        TOP_LEFT_Y: "Top left y",
        BOTTOM_RIGHT_X: "Bottom right x",
        BOTTOM_RIGHT_Y: "Bottom right y",
        ITEM_DATE: "Acquisition date",
        ITEM_IDENTIFIER: "Metadata file identifier",
        ITEM_RIGHTS: "Rights",
        ITEM_TITLE: "Location",
        ITEM_TYPE: "Resource type",
        ITEM_ABSTRACT: "Abstract",
        ITEM_DESCRIPTION: "Description",
        ITEM_MODIFIED: "Mofication Date",
        ITEM_REFERENCES: "Linkage",
        ITEM_SUBJECT: "Subject",
        ITEM_GEOGRAPHIC_ELEMENT: "Geographic element",
        ITEM_EXTENT: "Extent",
        ITEM_WEST: "West longitud",
        ITEM_EAST: "East longitud",
        ITEM_NORTH: "North latitud",
        ITEM_SOUTH: "South latitud",
        MY_PREFERENCES: "My preferences",
        CHANGE_PASSWORD: "Change Password",
        ERROR_CATALOG_SEARCH: "Error on searching",
        ERROR_CATALOG_SEARCH_CONTENT: "There was a problem with the server. Try again later.",
        ERROR_BBOXFIELD_NOT_COMPLETE: "Some bounding box fields are empty",
        ERROR_BBOXFIELD_NAN: "These fields must be numbers",
        ERROR_REQUIRED: "This field is required",
        ADD_CATALOG: "Create catalog",
        EDIT_CATALOG: "Edit catalog",
        ADD_GROUP: "Add group",
        EDIT_GROUP: "Edit group",
        PROCESSES: "Processes",
        ADD_PROCESS: "Add Process",
        EDIT_PROCESS: "Edit Process",
        ADD_PROCESS_VERSION: "Add process version",
        EDIT_PROCESS_VERSION: "Edit process version",
        ADD_PROCESS_GROUP: "Add group",
        CONFIGURATION: "Configuration",
        RESPONSIBLE: "Responsible",
        SHARE: "Share",
        GENERAL_INFORMATION: "General Information",
        PARENT_GROUP: "Parent group",
        GROUP: "Group",
        COLECTION: "Collection",
        PROFILE: "Profile",
        CONTACT_NAME: "Name",
        CONTACT_EMAIL: "Email",
        CONTACT_POSITION: "Position",
        CONTACT_ADDRESS: "Direccion",
        CONTACT_CITY: "City",
        CONTACT_STATE_OR_PROVINCE: "State / Province",
        CONTACT_POSTAL_CODE: "Postal code",
        CONTACT_COUNTRY: "Country",
        CONTACT_PHONE: "Phone",
        CONTACT_FAX: "Fax",
        CONTACT_URL: "Url",
        CONTACT_HOURS: "Contact hours",
        CONTACT_INSTRUCTIONS: "Contact instructions",
        CONTACT_ROLE: "Role",
        LANGUAGE: "Language",
        MAX_RECORDS: "Search records",
        SPATIAL_RANKING: "Spatial ranking",
        FEDERATED_CATALOGS: "Federate catalog",
        IDENTIFICATION_KEYWORDS: "Keywords",
        IDENTIFICATION_KEYWORDS_TYPE: "Keywords type",
        IDENTIFICATION_ACCESS_CONSTRAINTS: "Indentification access constraints",
        IDENTIFICATION_CONSTRAINTS: "Indentification constraints",
        IDENTIFICATION_FEES: "Identification fees",
        PROVIDER_NAME: "Provider name",
        PROVIDER_URL: "Provider url",
        DOMAIN_QUERY_TYPE: "Query domain",
        DOMAIN_COUNTS: "Domain counts",
        PUBLISHED: "Published",
        INFO_SEPARATED_BY_COMAS: "Separated by comas words",
        AUTHOR: "Author",
        PROCESSOR: "Processor",
        PUBLISHER: "Publisher",
        CUSTODIAN: "Custodian",
        POINT_OF_CONTACT: "Point of contact",
        DISTRIBUTOR: "Distributor",
        RESOURCE_PROVIDER: "Resource provider",
        ORIGINATOR: "Originator",
        OWNER: "Owner",
        PRINCIPAL_INVESTIGATOR: "Principal investigator",
        ENGLISH: "English",
        SPANISH: "Spanish",
        DISCIPLINE: "Discipline",
        TEMPORAL: "Temporal",
        PLACE: "Place",
        THEME: "Theme",
        STRATUM: "Stratum",
        ADD_KEYWORD: "+ New",
        PRESS_DELETE_TO_REMOVE_KEYWORD: "Press delete button to remove the tag",
        CATALOG_FORM_LEGEND: "Catalogation profile",
        FORM_NORMS_1: "ISO 19139",
        ERROR_LEGEND: "You have to complete %%% yet to continue. Remember that if you need it, you can change the catalogation profile clicking More Profiles",
        SUCCESS_LEGEND: "Congratulations. Fields are complete. Remember that if you wish, you can modify it clicking go backwards button or clicking the section you need.",
        AND: " and ",
        ITEM_MISSION: "Mission",
        ITEM_SERIE: "Serie",
        ITEM_PRODUCT: "Product",
        MISSION: "Mission",
        DATE: "Date",
        PRODUCT: "Product",
        SERIE: "Serie",
        DATE_FROM: "Acquisition date from",
        DATE_TO: "Acquisition date to",
        BOUNDING_BOX: "Bounding Box",
        DATE_YEAR: "Year",
        DATE_MONTH: "Month",
        "2MP_CATALOG": "2Mp CATALOGO"
    }), a.translations("es", {
        BROWSE: "Buscar archivo",
        FILE: "Archivo",
        ABOUT: "About",
        HELP: "Ayuda",
        AGREE_WITH: "Acepto los",
        GUEST_LOGIN_TEXT: "Si no deseas registrarte también puedes acceder como",
        GUEST_LOGIN: "usuario invitado",
        TERMS_AND_COND: "Términos y Condiciones",
        PRIVACY: "Privacidad",
        COPYRIGHT: "Copyright",
        USER: "Usuario",
        LOGIN: "Login",
        NAME: "Nombre",
        SURNAME: "Apellido",
        EMAIL: "Dirección de correo electrónico",
        MAP: "Mapa",
        CATALOG: "Catálogo",
        CATALOGS: "Catálogos",
        INSPECTOR: "Inspector",
        NO_ITEM_SELECTED_INSPECTOR: "No ha seleccionado ningún elemento para visualizar",
        WORKSPACE: "Workspace",
        RESULTS_GRID: "Grilla de resultados",
        SEARCH_RESULTS_TITLE: "Resultados de búsqueda",
        LAYER_MANAGER: "Administrador de capas",
        CATALOG_SEARCH: "Busqueda de catálogo",
        USERNAME: "Nombre de Usuario",
        PASSWORD: "Contraseña",
        FIELD_REQUIRED: "Este campo es requerido",
        LOGIN_ACTION: "Ingresar",
        REGISTER_ACTION: "Registrarse",
        DELETE_ACTION: "Eliminar",
        DELETE_RESOURCE_CONFIRM: "¿Está seguro que desea eliminar el recurso?",
        LOGIN_TITTLE: "Ingreso",
        LOGOUT_ACTION: "Salir",
        LOGOUT_CONFIRM: "¿Está seguro que desea salir?",
        FIND_ACTION: "Buscar",
        ADD_ACTION: "Agregar",
        CANCEL_ACTION: "Cancelar",
        CLEAN_ACTION: "Limpiar",
        AVAILABLE_RESULTS: "resultados disponibles",
        OF: "de",
        TITLE: "Ubicación",
        KEYWORDS: "Palabras claves",
        SERVICE: "Servicio",
        DESCRIPTION: "Descripción",
        DETAILS: "Detalles",
        SELECT: "Seleccione",
        TOP_LEFT_X: "x superior izquierda",
        TOP_LEFT_Y: "y superior izquierda",
        BOTTOM_RIGHT_X: "x inferior derecha",
        BOTTOM_RIGHT_Y: "y inferior derecha",
        ITEM_DATE: "Fecha de adquisición",
        ITEM_IDENTIFIER: "Identificador del fichero",
        ITEM_RIGHTS: "Derechos",
        ITEM_TITLE: "Ubicación",
        ITEM_TYPE: "Tipo de recurso",
        ITEM_ABSTRACT: "Resumen",
        ITEM_DESCRIPTION: "Descripción",
        ITEM_MODIFIED: "Fecha de modificación",
        ITEM_REFERENCES: "Enlace",
        ITEM_SUBJECT: "Tema",
        ITEM_GEOGRAPHIC_ELEMENT: "Elemento geográfico",
        ITEM_EXTENT: "Extensión",
        ITEM_WEST: "Longitud Oeste",
        ITEM_EAST: "Longitud Este",
        ITEM_NORTH: "Latitud Norte",
        ITEM_SOUTH: "Latitud Sur",
        MY_PREFERENCES: "Mis Preferencias",
        CHANGE_PASSWORD: "Cambiar Contraseña",
        ERROR_CATALOG_SEARCH: "Error en la búsqueda",
        ERROR_CATALOG_SEARCH_CONTENT: "Hubo un problema con el servidor. Intente mas tarde.",
        ERROR_BBOXFIELD_NOT_COMPLETE: "Algunos campos de la extensión geográfica están vacíos",
        ERROR_BBOXFIELD_NAN: "Estos campos deben ser números",
        ERROR_REQUIRED: "Este campo es requerido",
        ADD_CATALOG: "Crear catálogo",
        EDIT_CATALOG: "Editar catálogo",
        ADD_GROUP: "Crear grupo",
        EDIT_GROUP: "Editar grupo",
        PROCESSES: "Procesos",
        ADD_PROCESS: "Agregar Proceso",
        EDIT_PROCESS: "Editar Proceso",
        EDIT_PROCESS_VERSION: "Editar version de proceso",
        ADD_PROCESS_VERSION: "Agregar versión de proceso",
        ADD_PROCESS_GROUP: "Agregar grupo",
        CONFIGURATION: "Configuración",
        RESPONSIBLE: "Responsable",
        SHARE: "Compartir",
        GENERAL_INFORMATION: "Información General",
        PARENT_GROUP: "Grupo padre",
        GROUP: "Grupo",
        COLLECTION: "Colección",
        PROFILE: "Perfil",
        CONTACT_NAME: "Nombre",
        CONTACT_EMAIL: "Email",
        CONTACT_POSITION: "Posición",
        CONTACT_ADDRESS: "Dirección",
        CONTACT_CITY: "Ciudad",
        CONTACT_STATE_OR_PROVINCE: "Estado / Provincia",
        CONTACT_POSTAL_CODE: "Código postal",
        CONTACT_COUNTRY: "País",
        CONTACT_PHONE: "Teléfono",
        CONTACT_FAX: "Fax",
        CONTACT_URL: "Url",
        CONTACT_HOURS: "Horario de contacto",
        CONTACT_INSTRUCTIONS: "Instrucciones de contacto",
        CONTACT_ROLE: "Rol",
        LANGUAGE: "Idioma",
        MAX_RECORDS: "Registros por búsqueda",
        SPATIAL_RANKING: "Ranking espacial",
        FEDERATED_CATALOGS: "Federar Catálogo",
        IDENTIFICATION_KEYWORDS: "Palabras clave",
        IDENTIFICATION_KEYWORDS_TYPE: "Tipo de palabras clave",
        IDENTIFICATION_ACCESS_CONSTRAINTS: "Restricciones de acceso a la identificación",
        IDENTIFICATION_CONSTRAINTS: "Restricciones de identificación",
        IDENTIFICATION_FEES: "Precio de identificación",
        PROVIDER_NAME: "Nombre del proveedor",
        PROVIDER_URL: "Url del proveedor",
        DOMAIN_QUERY_TYPE: "Dominio de consulta",
        DOMAIN_COUNTS: "Cuentas del dominio",
        PUBLISHED: "Publicado",
        INFO_SEPARATED_BY_COMAS: "Palabras separadas por comas",
        AUTHOR: "Autor",
        PROCESSOR: "Procesador",
        PUBLISHER: "Publicador",
        CUSTODIAN: "Custodio",
        POINT_OF_CONTACT: "Punto de contacto",
        DISTRIBUTOR: "Distribuidor",
        RESOURCE_PROVIDER: "Proveedor del recurso",
        ORIGINATOR: "Creador",
        OWNER: "Dueño",
        PRINCIPAL_INVESTIGATOR: "Investigador principal",
        ENGLISH: "Inglés",
        SPANISH: "Español",
        DISCIPLINE: "Disciplina",
        TEMPORAL: "Temporal",
        PLACE: "Lugar",
        THEME: "Tema",
        STRATUM: "Estrato",
        ADD_KEYWORD: "+ Nueva",
        PRESS_DELETE_TO_REMOVE_KEYWORD: "Aprete suprimir para borrar la etiqueta",
        CATALOG_FORM_LEGEND: "Perfil de catalogación",
        FORM_NORMS_1: "ISO 19139",
        ERROR_LEGEND: "Todavía te falta añadir %%% para continuar. Recuerda que si lo deseas puedes cambiar el perfil de catalogación haciendo click en más perfiles",
        SUCCESS_LEGEND: "Felicitaciones, todos los datos están completos. Recuerda que si lo deseas puedes modificarlos simplemente haciendo click en el botón atrás o directamente en la sección que necesitas.",
        AND: " y ",
        ITEM_MISSION: "Misión",
        ITEM_SERIE: "Serie",
        ITEM_PRODUCT: "Producto",
        MISSION: "Misión",
        DATE: "Fecha",
        PRODUCT: "Producto",
        SERIE: "Serie",
        DATE_FROM: "Fecha de adquisición desde",
        DATE_TO: "Fecha de adquisición hasta",
        BOUNDING_BOX: "Extensión geográfica",
        DATE_YEAR: "Año",
        DATE_MONTH: "Mes",
        "2MP_CATALOG": "CATÁLOGO 2Mp"
    }), a.preferredLanguage("es")
}]);
var app = angular.module("suriWebClientApp");
app.constant("formsConfig", {
    catalogs: {
        service: "catalogs",
        callback: "catalogs"
    }
});
var app = angular.module("suriWebClientApp");
app.constant("groupTypes", {
    catalog: "CATALOG"
});
var app = angular.module("suriWebClientApp");
app.service("jsonSchemaProcessor", ["$q", "$http", "formFunctions", "$rootScope", function(a, b, c, d) {
    function e(a) {
        var b = [];
        return a && a.items.forEach(function(a) {
            b.push({
                value: a.id,
                name: a.name
            })
        }), b
    }

    function f(b) {
        return a(function(a, c) {
            JsonRefs.resolveRefs(b, {}, function(b, d, e) {
                b && c(b), a(d)
            })
        })
    }

    function g(a) {
        var b = h(a.properties, "", "");
        return {
            form: b,
            schema: a
        }
    }

    function h(b, c, d) {
        var e, f = [];
        if ("" != d) var g = d + ".";
        else {
            var g = "";
            c = "Main"
        }
        return b && Object.keys(b).forEach(function(a) {
            e = g + a, b[a].properties ? f.push(h(b[a].properties, b[a].name, e)) : f.push(l(b[a], e))
        }), a.all(f).then(function(a) {
            return {
                type: "section",
                htmlClass: "form-section",
                items: a,
                name: c
            }
        })
    }

    function i(a) {
        return a = k(a), Object.keys(a).forEach(function(b) {
            a[b] = k(a[b]), a[b].properties && (a[b].properties = j(a[b].properties))
        }), a
    }

    function j(a) {
        return Object.keys(a).forEach(function(b) {
            a[b] = k(a[b])
        }), a
    }

    function k(a) {
        if (a.allOf) {
            var b;
            a.properties || (a.properties = {}), a.required || (a.required = []), a.allOf.forEach(function(c) {
                Object.keys(c.properties).forEach(function(d) {
                    b = Object.getOwnPropertyDescriptor(c.properties, d), Object.defineProperty(a.properties, d, b)
                }), c.required && (a.required = a.required.concat(c.required))
            }), delete a.allOf
        }
        return a
    }

    function l(c, d) {
        var f;
        return f = c.links ? b.get(c.links[0].href).then(function(a) {
            return {
                key: d,
                type: "select",
                titleMap: e(a.data),
                trackBy: "name",
                schema: c,
                changeFunction: n
            }
        }) : a(function(a, b) {
            a({
                key: d,
                schema: c,
                changeFunction: n
            })
        })
    }
    var m = function(a) {
            return f(a).then(i).then(g)
        },
        n = function(a) {
            d.$broadcast("modelModified", a)
        };
    return m
}]);
var app = angular.module("suriWebClientApp");
app.service("formFunctions", ["CONFIG", "$http", function(a, b) {
    var c = function(b, c) {
            return a.formsUrl + b + "/" + c
        },
        d = function(a, c, d) {
            d && (a += "/" + d);
            var e = b.get(a).then(function(a) {
                if (c.length > 1)
                    for (var b = {}, d = 0; d < c.length; d++) objectRequested[c[d]] = a.data[c[d]];
                else var b = a.data[c[0]];
                return b
            });
            return e
        };
    return {
        getFromUrl: d,
        generateHrefToValue: c
    }
}]);
var app = angular.module("suriWebClientApp");
app.service("jsonSchemaProvider", ["$resource", function(a) {
    return a("schemas/:schema/:file.json", {}, {
        query: {
            method: "GET",
            params: {
                schema: "schema",
                file: ""
            },
            isArray: !1,
            withCredentials: !0
        }
    })
}]);
var app = angular.module("suriWebClientApp");
app.service("catalogCallbacks", ["CONFIG", "$http", "formFunctions", function(a, b, c) {
    var d = c,
        e = function(b) {
            var c = [],
                e = [],
                f = a.baseUrl + "/users";
            return c.push(d.generateHrefToValue(f, b)), e.push(["user", "href"]), c.push(d.getFromUrl(f, ["email"], b)), e.push(["configParameters", "metadata:main", "contactEmail"]), c.push(d.getFromUrl(f, ["name"], b)), e.push(["configParameters", "metadata:main", "contactName"]), c.push(d.getFromUrl(f, ["position"], b)), e.push(["configParameters", "metadata:main", "contactPosition"]), [c, e]
        },
        f = {
            user: {
                id: e
            }
        };
    return f
}]);
var app = angular.module("suriWebClientApp");
app.service("formModificationEventHandler", ["$q", "$injector", "formsConfig", "callbacksFactory", function(a, b, c, d) {
    function e(a, b, c, d) {
        if (a++, b.length > a) {
            var f = b[a];
            return c[f] = e(a, b, c[f], d), c
        }
        return d
    }

    function f(b) {
        for (var c = 0; c < b.length; c++) b[c] = a.when(b[c]);
        return b
    }

    function g(a, b) {
        for (var c, d, e = 0; e < a.length;) c = a[e], b && (b = b[c], d = b), e++;
        return d
    }
    var h = function(b, e, f) {
            if (c[b]) {
                var h = d[c[b].callback],
                    j = g(e, h);
                if (j) {
                    var k = g(e, f),
                        l = j(k, f),
                        m = l[0],
                        n = l[1];
                    return i(m, n, f)
                }
                return a.when(f)
            }
            return a.when(f)
        },
        i = function(a, b, c) {
            var d = f(a);
            return j(d, b, c)
        },
        j = function(b, c, d) {
            var f = a.all(b).then(function(a) {
                for (var b, f, g = 0; g < a.length; g++) b = a[g], f = c[g], d = e(-1, f, d, b);
                return d
            });
            return f
        };
    return h
}]);
var app = angular.module("suriWebClientApp");
app.factory("callbacksFactory", ["catalogCallbacks", function(a) {
    return {
        catalogs: a
    }
}]);
var app = angular.module("suriWebClientApp");
app.service("CSWService", ["CONFIG", "LoginService", function(a, b) {
    var c, d = function(d) {
            var e = angular.copy(a.CSWProfile);
            e[2] = b.getCurrentCredentials(), c = new Ows4js.Csw(d, e)
        },
        e = function(b, d, e) {
            var f = {
                    matchCase: e.matchCase
                },
                g = (new Ows4js.Filter).PropertyName("apiso:AnyText").isLike("SERIE:%" + e.serie + "%:SERIE", f).and((new Ows4js.Filter).PropertyName("apiso:Title").isLike("%" + e.title + "%", f)).and((new Ows4js.Filter).PropertyName("apiso:AnyText").isLike("MISION:%" + e.mission + "%:MISION", f)).and((new Ows4js.Filter).PropertyName("apiso:AlternateTitle").isLike("%" + e.product + "%", f)),
                h = null;
            if (e.creationDateFrom && e.creationDateTo && e.creationDateFrom.length > 0 && e.creationDateTo.length > 0 ? h = (new Ows4js.Filter).PropertyName("apiso:CreationDate").isBetween(e.creationDateFrom, e.creationDateTo) : (e.creationDateFrom && e.creationDateFrom.length > 0 && (h = (new Ows4js.Filter).PropertyName("apiso:CreationDate").isGreaterThan(e.creationDateFrom)), e.creationDateTo && e.creationDateTo.length > 0 && (h = (new Ows4js.Filter).PropertyName("apiso:CreationDate").isLessThan(e.creationDateTo))), null != h && (g = g.and(h)), 4 == e.bbox.length && (g = g.and((new Ows4js.Filter).BBOX(e.bbox[1], e.bbox[0], e.bbox[3], e.bbox[2], "urn:x-ogc:def:crs:EPSG:6.11:4326"))), e.keywords && e.keywords.length > 0) {
                for (var i = e.keywords.split(" "), j = i[0], k = (new Ows4js.Filter).PropertyName("apiso:AnyText").isLike("%" + j + "%", f), l = 1; l < i.length; l++) j = i[l], k = k.or((new Ows4js.Filter).PropertyName("apiso:AnyText").isLike("%" + j + "%", f));
                g = g.and(k)
            }
            return c.GetRecords(b, d, g, a.outputSchema)
        },
        f = function(a) {
            return c.GetDomain(a).then(function(a) {
                var b = [];
                return console.log(a["csw:GetDomainResponse"].domainValues[0].listOfValues), a["csw:GetDomainResponse"].domainValues[0].listOfValues.value && a["csw:GetDomainResponse"].domainValues[0].listOfValues.value.map(function(a) {
                    b.push({
                        propertyName: a.content[0]
                    })
                }), b
            })
        };
    return {
        getRecords: e,
        getDomain: f,
        setCatalog: d
    }
}]);
var app = angular.module("suriWebClientApp");
app.factory("CatalogsService", ["Restangular", "CONFIG", function(a, b) {
    return a.service(b.ideBaseUrl + "catalogs/")
}]);
var app = angular.module("suriWebClientApp");
app.service("CatalogGroupsService", ["Restangular", "CONFIG", function(a, b) {
    return a.service(b.ideBaseUrl + "groups/")
}]);
var app = angular.module("suriWebClientApp");
app.service("gisGroupsService", ["Restangular", "CONFIG", function(a, b) {
    return a.service(b.baseUrl + "groups/")
}]);
var app = angular.module("suriWebClientApp");
app.service("usersService", ["Restangular", "CONFIG", function(a, b) {
    return a.service(b.baseUrl + "users/")
}]);
var app = angular.module("suriWebClientApp");
app.filter("cutText", function() {
    var a = function(a, b) {
        return "string" == typeof a && a.length > b + 2 ? a = a.substr(0, b) + "..." : a
    };
    return a
});
var app = angular.module("suriWebClientApp");
app.directive("catalogedItem", function() {
    return {
        scope: {
            item: "="
        },
        templateUrl: "views/inspector-views/cataloged-item.html",
        replace: !1,
        controller: "catalogedItemCtrl",
        controllerAs: "ctrl"
    }
}), app.controller("catalogedItemCtrl", ["$scope", "$controller", "CatalogedItemAdapter19139", function(a, b, c) {
    a.enabled = !1, a.$watch("item", function(b) {
        a.enabled = b instanceof c, a.enabled && (a.extents = a.item.extents())
    })
}]);
var app = angular.module("suriWebClientApp");
app.directive("catalog", function() {
    return {
        scope: {
            item: "="
        },
        templateUrl: "views/inspector-views/catalog.html",
        replace: !1,
        controller: "catalogCtrl",
        controllerAs: "ctrl"
    }
}), app.controller("catalogCtrl", ["$scope", "$controller", "Catalog", function(a, b, c) {
    a.enabled = !1, a.$watch("item", function(b) {
        a.enabled = b instanceof c
    })
}]);