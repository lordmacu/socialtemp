/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
! function(a) {
    function h(b) {
        return a(b).filter(function() {
            return a(this).is(":appeared")
        })
    }

    function i() {
        d = !1;
        for (var a = 0, c = b.length; a < c; a++) {
            var e = h(b[a]);
            if (e.trigger("appear", [e]), g[a]) {
                var f = g[a].not(e);
                f.trigger("disappear", [f])
            }
            g[a] = e
        }
    }

    function j(a) {
        b.push(a), g.push()
    }
    var b = [],
        c = !1,
        d = !1,
        e = {
            interval: 250,
            force_process: !1
        },
        f = a(window),
        g = [];
    a.expr[":"].appeared = function(b) {
        var c = a(b);
        if (!c.is(":visible")) return !1;
        var d = f.scrollLeft(),
            e = f.scrollTop(),
            g = c.offset(),
            h = g.left,
            i = g.top;
        return i + c.height() >= e && i - (c.data("appear-top-offset") || 0) <= e + f.height() && h + c.width() >= d && h - (c.data("appear-left-offset") || 0) <= d + f.width()
    }, a.fn.extend({
        appear: function(b) {
            var f = a.extend({}, e, b || {}),
                g = this.selector || this;
            if (!c) {
                var h = function() {
                    d || (d = !0, setTimeout(i, f.interval))
                };
                a(window).scroll(h).resize(h), c = !0
            }
            return f.force_process && setTimeout(i, f.interval), j(g), a(g)
        }
    }), a.extend({
        force_appear: function() {
            return !!c && (i(), !0)
        }
    })
}(function() {
    return "undefined" != typeof module ? require("jquery") : jQuery
}());

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});

/* perfect-scrollbar v0.7.0 */
! function t(e, n, r) {
    function o(i, s) {
        if (!n[i]) {
            if (!e[i]) {
                var a = "function" == typeof require && require;
                if (!s && a) return a(i, !0);
                if (l) return l(i, !0);
                var c = new Error("Cannot find module '" + i + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[i] = {
                exports: {}
            };
            e[i][0].call(u.exports, function(t) {
                var n = e[i][1][t];
                return o(n ? n : t)
            }, u, u.exports, t, e, n, r)
        }
        return n[i].exports
    }
    for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
    return o
}({
    1: [function(t, e, n) {
        "use strict";

        function r(t) {
            t.fn.perfectScrollbar = function(t) {
                return this.each(function() {
                    if ("object" == typeof t || "undefined" == typeof t) {
                        var e = t;
                        l.get(this) || o.initialize(this, e)
                    } else {
                        var n = t;
                        "update" === n ? o.update(this) : "destroy" === n && o.destroy(this)
                    }
                })
            }
        }
        var o = t("../main"),
            l = t("../plugin/instances");
        if ("function" == typeof define && define.amd) define(["jquery"], r);
        else {
            var i = window.jQuery ? window.jQuery : window.$;
            "undefined" != typeof i && r(i)
        }
        e.exports = r
    }, {
        "../main": 7,
        "../plugin/instances": 18
    }],
    2: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = t.className.split(" ");
            n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ")
        }

        function o(t, e) {
            var n = t.className.split(" "),
                r = n.indexOf(e);
            r >= 0 && n.splice(r, 1), t.className = n.join(" ")
        }
        n.add = function(t, e) {
            t.classList ? t.classList.add(e) : r(t, e)
        }, n.remove = function(t, e) {
            t.classList ? t.classList.remove(e) : o(t, e)
        }, n.list = function(t) {
            return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ")
        }
    }, {}],
    3: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return window.getComputedStyle(t)[e]
        }

        function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t
        }

        function l(t, e) {
            for (var n in e) {
                var r = e[n];
                "number" == typeof r && (r = r.toString() + "px"), t.style[n] = r
            }
            return t
        }
        var i = {};
        i.e = function(t, e) {
            var n = document.createElement(t);
            return n.className = e, n
        }, i.appendTo = function(t, e) {
            return e.appendChild(t), t
        }, i.css = function(t, e, n) {
            return "object" == typeof e ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n)
        }, i.matches = function(t, e) {
            return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0
        }, i.remove = function(t) {
            "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
        }, i.queryChildren = function(t, e) {
            return Array.prototype.filter.call(t.childNodes, function(t) {
                return i.matches(t, e)
            })
        }, e.exports = i
    }, {}],
    4: [function(t, e, n) {
        "use strict";
        var r = function(t) {
            this.element = t, this.events = {}
        };
        r.prototype.bind = function(t, e) {
            "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
        }, r.prototype.unbind = function(t, e) {
            var n = "undefined" != typeof e;
            this.events[t] = this.events[t].filter(function(r) {
                return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1)
            }, this)
        }, r.prototype.unbindAll = function() {
            for (var t in this.events) this.unbind(t)
        };
        var o = function() {
            this.eventElements = []
        };
        o.prototype.eventElement = function(t) {
            var e = this.eventElements.filter(function(e) {
                return e.element === t
            })[0];
            return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e
        }, o.prototype.bind = function(t, e, n) {
            this.eventElement(t).bind(e, n)
        }, o.prototype.unbind = function(t, e, n) {
            this.eventElement(t).unbind(e, n)
        }, o.prototype.unbindAll = function() {
            for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
        }, o.prototype.once = function(t, e, n) {
            var r = this.eventElement(t),
                o = function(t) {
                    r.unbind(e, o), n(t)
                };
            r.bind(e, o)
        }, e.exports = o
    }, {}],
    5: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
            }
        }()
    }, {}],
    6: [function(t, e, n) {
        "use strict";
        var r = t("./class"),
            o = t("./dom"),
            l = n.toInt = function(t) {
                return parseInt(t, 10) || 0
            },
            i = n.clone = function(t) {
                if (t) {
                    if (Array.isArray(t)) return t.map(i);
                    if ("object" == typeof t) {
                        var e = {};
                        for (var n in t) e[n] = i(t[n]);
                        return e
                    }
                    return t
                }
                return null
            };
        n.extend = function(t, e) {
            var n = i(t);
            for (var r in e) n[r] = i(e[r]);
            return n
        }, n.isEditable = function(t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]")
        }, n.removePsClasses = function(t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
                var o = e[n];
                0 === o.indexOf("ps-") && r.remove(t, o)
            }
        }, n.outerWidth = function(t) {
            return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"))
        }, n.startScrolling = function(t, e) {
            r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"))
        }, n.stopScrolling = function(t, e) {
            r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"))
        }, n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(t, e, n) {
        "use strict";
        var r = t("./plugin/destroy"),
            o = t("./plugin/initialize"),
            l = t("./plugin/update");
        e.exports = {
            initialize: o,
            update: l,
            destroy: r
        }
    }, {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(t, e, n) {
        "use strict";
        e.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            swipeEasing: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }, {}],
    9: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances");
        e.exports = function(t) {
            var e = l.get(t);
            e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(t) {
                return t.getBoundingClientRect()
            }
            var r = function(t) {
                t.stopPropagation()
            };
            e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function(r) {
                var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
                    s = o > e.scrollbarYTop ? 1 : -1;
                i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation()
            }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function(r) {
                var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
                    s = o > e.scrollbarXLeft ? 1 : -1;
                i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation()
            })
        }
        var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n) {
                var o = r + n * e.railXRatio,
                    i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;
                var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                c(t, "left", s)
            }
            var r = null,
                o = null,
                s = function(e) {
                    n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault()
                },
                u = function() {
                    l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s)
                };
            e.event.bind(e.scrollbarX, "mousedown", function(n) {
                o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }

        function o(t, e) {
            function n(n) {
                var o = r + n * e.railYRatio,
                    i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;
                var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                c(t, "top", s)
            }
            var r = null,
                o = null,
                s = function(e) {
                    n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault()
                },
                u = function() {
                    l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s)
                };
            e.event.bind(e.scrollbarY, "mousedown", function(n) {
                o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault()
            })
        }
        var l = t("../../lib/helper"),
            i = t("../../lib/dom"),
            s = t("../instances"),
            a = t("../update-geometry"),
            c = t("../update-scroll");
        e.exports = function(t) {
            var e = s.get(t);
            r(t, e), o(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                }
                var l = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }
            var r = !1;
            e.event.bind(t, "mouseenter", function() {
                r = !0
            }), e.event.bind(t, "mouseleave", function() {
                r = !1
            });
            var i = !1;
            e.event.bind(e.ownerDocument, "keydown", function(c) {
                if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                    var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");
                    if (r || u) {
                        var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                        if (d) {
                            if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;
                            else
                                for (; d.shadowRoot;) d = d.shadowRoot.activeElement;
                            if (o.isEditable(d)) return
                        }
                        var p = 0,
                            f = 0;
                        switch (c.which) {
                            case 37:
                                p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;
                                break;
                            case 38:
                                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;
                                break;
                            case 39:
                                p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;
                                break;
                            case 40:
                                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;
                                break;
                            case 33:
                                f = 90;
                                break;
                            case 32:
                                f = c.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                f = -90;
                                break;
                            case 35:
                                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                break;
                            case 36:
                                f = c.ctrlKey ? t.scrollTop : e.containerHeight;
                                break;
                            default:
                                return
                        }
                        a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault()
                    }
                }
            })
        }
        var o = t("../../lib/helper"),
            l = t("../../lib/dom"),
            i = t("../instances"),
            s = t("../update-geometry"),
            a = t("../update-scroll");
        e.exports = function(t) {
            var e = i.get(t);
            r(t, e)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;
                if (0 === n) {
                    if (!e.scrollbarYActive) return !1;
                    if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation
                }
                var l = t.scrollLeft;
                if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                }
                return !0
            }

            function r(t) {
                var e = t.deltaX,
                    n = -1 * t.deltaY;
                return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
            }

            function o(e, n) {
                var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (r) {
                    var o = window.getComputedStyle(r),
                        l = [o.overflow, o.overflowX, o.overflowY].join("");
                    if (!l.match(/(scroll|auto)/)) return !1;
                    var i = r.scrollHeight - r.clientHeight;
                    if (i > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === i && n < 0)) return !0;
                    var s = r.scrollLeft - r.clientWidth;
                    if (s > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === s && e > 0)) return !0
                }
                return !1
            }

            function s(s) {
                var c = r(s),
                    u = c[0],
                    d = c[1];
                o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()))
            }
            var a = !1;
            "undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s)
        }
        var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            e.event.bind(t, "scroll", function() {
                l(t)
            })
        }
        var o = t("../instances"),
            l = t("../update-geometry");
        e.exports = function(t) {
            var e = o.get(t);
            r(t, e)
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer
            }

            function r() {
                c || (c = setInterval(function() {
                    return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c)
                }, 50))
            }

            function a() {
                c && (clearInterval(c), c = null), o.stopScrolling(t)
            }
            var c = null,
                u = {
                    top: 0,
                    left: 0
                },
                d = !1;
            e.event.bind(e.ownerDocument, "selectionchange", function() {
                t.contains(n()) ? d = !0 : (d = !1, a())
            }), e.event.bind(window, "mouseup", function() {
                d && (d = !1, a())
            }), e.event.bind(window, "keyup", function() {
                d && (d = !1, a())
            }), e.event.bind(window, "mousemove", function(e) {
                if (d) {
                    var n = {
                            x: e.pageX,
                            y: e.pageY
                        },
                        l = {
                            left: t.offsetLeft,
                            right: t.offsetLeft + t.offsetWidth,
                            top: t.offsetTop,
                            bottom: t.offsetTop + t.offsetHeight
                        };
                    n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r()
                }
            })
        }
        var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");
        e.exports = function(t) {
            var e = l.get(t);
            r(t, e)
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            function o(n, r) {
                var o = t.scrollTop,
                    l = t.scrollLeft,
                    i = Math.abs(n),
                    s = Math.abs(r);
                if (s > i) {
                    if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation
                } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;
                return !0
            }

            function a(e, n) {
                s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t)
            }

            function c() {
                w = !0
            }

            function u() {
                w = !1
            }

            function d(t) {
                return t.targetTouches ? t.targetTouches[0] : t
            }

            function p(t) {
                return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE)
            }

            function f(t) {
                if (p(t)) {
                    Y = !0;
                    var e = d(t);
                    g.pageX = e.pageX, g.pageY = e.pageY, v = (new Date).getTime(), null !== y && clearInterval(y), t.stopPropagation()
                }
            }

            function h(t) {
                if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
                    var n = d(t),
                        r = {
                            pageX: n.pageX,
                            pageY: n.pageY
                        },
                        l = r.pageX - g.pageX,
                        i = r.pageY - g.pageY;
                    a(l, i), g = r;
                    var s = (new Date).getTime(),
                        c = s - v;
                    c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault())
                }
            }

            function b() {
                !w && Y && (Y = !1, e.settings.swipeEasing && (clearInterval(y), y = setInterval(function() {
                    return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8)) : void clearInterval(y)
                }, 10)))
            }
            var g = {},
                v = 0,
                m = {},
                y = null,
                w = !1,
                Y = !1;
            n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)) : r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)))
        }
        var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");
        e.exports = function(t) {
            if (o.env.supportsTouch || o.env.supportsIePointer) {
                var e = l.get(t);
                r(t, e, o.env.supportsTouch, o.env.supportsIePointer)
            }
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/class"),
            l = t("./instances"),
            i = t("./update-geometry"),
            s = {
                "click-rail": t("./handler/click-rail"),
                "drag-scrollbar": t("./handler/drag-scrollbar"),
                keyboard: t("./handler/keyboard"),
                wheel: t("./handler/mouse-wheel"),
                touch: t("./handler/touch"),
                selection: t("./handler/selection")
            },
            a = t("./handler/native-scroll");
        e.exports = function(t, e) {
            e = "object" == typeof e ? e : {}, o.add(t, "ps");
            var n = l.add(t);
            n.settings = r.extend(n.settings, e), o.add(t, "ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function(e) {
                s[e](t)
            }), a(t), i(t)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(t, e, n) {
        "use strict";

        function r(t) {
            function e() {
                a.add(t, "ps--focus")
            }

            function n() {
                a.remove(t, "ps--focus")
            }
            var r = this;
            r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function() {
                var e = t.scrollLeft,
                    n = null;
                return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n
            }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d, r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps__scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps__scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps__scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps__scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null
        }

        function o(t) {
            return t.getAttribute("data-ps-id")
        }

        function l(t, e) {
            t.setAttribute("data-ps-id", e)
        }

        function i(t) {
            t.removeAttribute("data-ps-id")
        }
        var s = t("../lib/helper"),
            a = t("../lib/class"),
            c = t("./default-setting"),
            u = t("../lib/dom"),
            d = t("../lib/event-manager"),
            p = t("../lib/guid"),
            f = {};
        n.add = function(t) {
            var e = p();
            return l(t, e), f[e] = new r(t), f[e]
        }, n.remove = function(t) {
            delete f[o(t)], i(t)
        }, n.get = function(t) {
            return f[o(t)]
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
        }

        function o(t, e) {
            var n = {
                width: e.railXWidth
            };
            e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);
            var r = {
                top: t.scrollTop,
                height: e.railYHeight
            };
            e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX, {
                left: e.scrollbarXLeft,
                width: e.scrollbarXWidth - e.railBorderXWidth
            }), s.css(e.scrollbarY, {
                top: e.scrollbarYTop,
                height: e.scrollbarYHeight - e.railBorderYWidth
            })
        }
        var l = t("../lib/helper"),
            i = t("../lib/class"),
            s = t("../lib/dom"),
            a = t("./instances"),
            c = t("./update-scroll");
        e.exports = function(t) {
            var e = a.get(t);
            e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
            var n;
            t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps__scrollbar-x-rail"), n.length > 0 && n.forEach(function(t) {
                s.remove(t)
            }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps__scrollbar-y-rail"), n.length > 0 && n.forEach(function(t) {
                s.remove(t)
            }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps--active-x") : (i.remove(t, "ps--active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps--active-y") : (i.remove(t, "ps--active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0))
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(t, e, n) {
        "use strict";
        var r = t("./instances"),
            o = function(t) {
                var e = document.createEvent("Event");
                return e.initEvent(t, !0, !0), e
            };
        e.exports = function(t, e, n) {
            if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";
            "top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(o("ps-x-reach-start")));
            var l = r.get(t);
            "top" === e && n >= l.contentHeight - l.containerHeight && (n = l.contentHeight - l.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && n >= l.contentWidth - l.containerWidth && (n = l.contentWidth - l.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === l.lastTop && (l.lastTop = t.scrollTop), void 0 === l.lastLeft && (l.lastLeft = t.scrollLeft), "top" === e && n < l.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && n > l.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && n < l.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && n > l.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && n !== l.lastTop && (t.scrollTop = l.lastTop = n, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && n !== l.lastLeft && (t.scrollLeft = l.lastLeft = n, t.dispatchEvent(o("ps-scroll-x")))
        }
    }, {
        "./instances": 18
    }],
    21: [function(t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances"),
            i = t("./update-geometry"),
            s = t("./update-scroll");
        e.exports = function(t) {
            var e = l.get(t);
            e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]);


/*
 * jquery-match-height 0.7.0 by @liabru
 * http://brm.io/jquery-match-height/
 * License MIT
 */
! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e = -1,
        o = -1,
        i = function(t) {
            return parseFloat(t) || 0
        },
        a = function(e) {
            var o = 1,
                a = t(e),
                n = null,
                r = [];
            return a.each(function() {
                var e = t(this),
                    a = e.offset().top - i(e.css("margin-top")),
                    s = r.length > 0 ? r[r.length - 1] : null;
                null === s ? r.push(e) : Math.floor(Math.abs(n - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), n = a
            }), r
        },
        n = function(e) {
            var o = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
        },
        r = t.fn.matchHeight = function(e) {
            var o = n(e);
            if (o.remove) {
                var i = this;
                return this.css(o.property, ""), t.each(r._groups, function(t, e) {
                    e.elements = e.elements.not(i)
                }), this
            }
            return this.length <= 1 && !o.target ? this : (r._groups.push({
                elements: this,
                options: o
            }), r._apply(this, o), this)
        };
    r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
        r._afterUpdate = null, r._rows = a, r._parse = i, r._parseOptions = n, r._apply = function(e, o) {
            var s = n(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t("html").outerHeight(!0),
                d = h.parents().filter(":hidden");
            return d.each(function() {
                    var e = t(this);
                    e.data("style-cache", e.attr("style"))
                }), d.css("display", "block"), s.byRow && !s.target && (h.each(function() {
                    var e = t(this),
                        o = e.css("display");
                    "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                        display: o,
                        "padding-top": "0",
                        "padding-bottom": "0",
                        "margin-top": "0",
                        "margin-bottom": "0",
                        "border-top-width": "0",
                        "border-bottom-width": "0",
                        height: "100px",
                        overflow: "hidden"
                    })
                }), l = a(h), h.each(function() {
                    var e = t(this);
                    e.attr("style", e.data("style-cache") || "")
                })), t.each(l, function(e, o) {
                    var a = t(o),
                        n = 0;
                    if (s.target) n = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                        a.each(function() {
                            var e = t(this),
                                o = e.attr("style"),
                                i = e.css("display");
                            "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                            var a = {
                                display: i
                            };
                            a[s.property] = "", e.css(a), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                        })
                    }
                    a.each(function() {
                        var e = t(this),
                            o = 0;
                        s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, n - o + "px"))
                    })
                }), d.each(function() {
                    var e = t(this);
                    e.attr("style", e.data("style-cache") || null)
                }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
                this
        }, r._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var o = t(this),
                    i = o.attr("data-mh") || o.attr("data-match-height");
                i in e ? e[i] = e[i].add(o) : e[i] = o
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
    var s = function(e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
            r._apply(this.elements, this.options)
        }), r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function(i, a) {
        if (a && "resize" === a.type) {
            var n = t(window).width();
            if (n === e) return;
            e = n;
        }
        i ? -1 === o && (o = setTimeout(function() {
            s(a), o = -1
        }, r._throttle)) : s(a)
    }, t(r._applyDataApi), t(window).bind("load", function(t) {
        r._update(!1, t)
    }), t(window).bind("resize orientationchange", function(t) {
        r._update(!0, t)
    })
});

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.3
 */
(function() {
    if ("undefined" != typeof window && window.addEventListener) {
        var e = Object.create(null),
            m, t, d = function() {
                clearTimeout(t);
                t = setTimeout(m, 100)
            },
            q = function() {},
            u = function() {
                var f;
                window.addEventListener("resize", d, !1);
                window.addEventListener("orientationchange", d, !1);
                window.MutationObserver ? (f = new MutationObserver(d), f.observe(document.documentElement, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }), q = function() {
                    try {
                        f.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d, !1)
                    } catch (n) {}
                }) : (document.documentElement.addEventListener("DOMSubtreeModified", d, !1), q = function() {
                    document.documentElement.removeEventListener("DOMSubtreeModified", d, !1);
                    window.removeEventListener("resize", d, !1);
                    window.removeEventListener("orientationchange", d, !1)
                })
            },
            v = function(f) {
                function e(a) {
                    var c;
                    void 0 !== a.protocol ? c = a : (c = document.createElement("a"), c.href = a);
                    return c.protocol.replace(/:/g, "") + c.host
                }
                var d, p;
                window.XMLHttpRequest && (d = new XMLHttpRequest, p = e(location), f = e(f), d = void 0 === d.withCredentials &&
                    "" !== f && f !== p ? XDomainRequest || void 0 : XMLHttpRequest);
                return d
            };
        m = function() {
            function d() {
                --r;
                0 === r && (q(), u())
            }

            function n(a) {
                return function() {
                    !0 !== e[a.base] && (a.isXlink ? a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash) : a.useEl.setAttribute("href", "#" + a.hash))
                }
            }

            function m(a) {
                return function() {
                    var c = document.body,
                        b = document.createElement("x");
                    a.onload = null;
                    b.innerHTML = a.responseText;
                    if (b = b.getElementsByTagName("svg")[0]) b.setAttribute("aria-hidden", "true"), b.style.position =
                        "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild);
                    d()
                }
            }

            function p(a) {
                return function() {
                    a.onerror = null;
                    a.ontimeout = null;
                    d()
                }
            }
            var a, c, l, g, r = 0,
                b, k = !1,
                h;
            q();
            h = document.getElementsByTagName("use");
            for (g = 0; g < h.length; g += 1) {
                try {
                    c = h[g].getBoundingClientRect()
                } catch (w) {
                    c = !1
                }(a = h[g].getAttribute("href")) ? k = !1: (a = h[g].getAttributeNS("http://www.w3.org/1999/xlink", "href"), k = !0);
                l = a && a.split ? a.split("#") : ["", ""];
                a = l[0];
                l = l[1];
                b = c && 0 === c.left && 0 === c.right && 0 ===
                    c.top && 0 === c.bottom;
                c && 0 === c.width && 0 === c.height && !b ? a.length && (b = e[a], !0 !== b && setTimeout(n({
                    useEl: h[g],
                    base: a,
                    hash: l,
                    isXlink: k
                }), 0), void 0 === b && (k = v(a), void 0 !== k && (b = new k, e[a] = b, b.onload = m(b), b.onerror = p(b), b.ontimeout = p(b), b.open("GET", a), b.send(), r += 1))) : b ? a.length && e[a] && setTimeout(n({
                    useEl: h[g],
                    base: a,
                    hash: l,
                    isXlink: k
                }), 0) : void 0 === e[a] ? e[a] = !0 : e[a].onload && (e[a].abort(), delete e[a].onload, e[a] = !0)
            }
            h = "";
            r += 1;
            d()
        };
        window.addEventListener("load", function n() {
            window.removeEventListener("load",
                n, !1);
            t = setTimeout(m, 0)
        }, !1)
    }
})();


/**
 * --------------------------------------------------------------------------
 * Bootstrap Scripts
 * --------------------------------------------------------------------------
 */
/*! tether 1.4.0 */
! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t) {
        var e = t.getBoundingClientRect(),
            o = {};
        for (var i in e) o[i] = e[i];
        if (t.ownerDocument !== document) {
            var r = t.ownerDocument.defaultView.frameElement;
            if (r) {
                var s = n(r);
                o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
            }
        }
        return o
    }

    function r(t) {
        var e = getComputedStyle(t) || {},
            o = e.position,
            i = [];
        if ("fixed" === o) return [t];
        for (var n = t;
            (n = n.parentNode) && n && 1 === n.nodeType;) {
            var r = void 0;
            try {
                r = getComputedStyle(n)
            } catch (s) {}
            if ("undefined" == typeof r || null === r) return i.push(n), i;
            var a = r,
                f = a.overflow,
                l = a.overflowX,
                h = a.overflowY;
            /(auto|scroll|overlay)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n)
        }
        return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
    }

    function s() {
        A && document.body.removeChild(A), A = null
    }

    function a(t) {
        var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement,
            i = n(t),
            r = P();
        return i.top -= r.top, i.left -= r.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
    }

    function f(t) {
        return t.offsetParent || document.documentElement
    }

    function l() {
        if (M) return M;
        var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        h(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }), e.appendChild(t), document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var i = t.offsetWidth;
        o === i && (i = e.clientWidth), document.body.removeChild(e);
        var n = o - i;
        return M = {
            width: n,
            height: n
        }
    }

    function h() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = [];
        return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
            if (e)
                for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }), t
    }

    function d(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.remove(e)
        });
        else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                i = c(t).replace(o, " ");
            g(t, i)
        }
    }

    function p(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.add(e)
        });
        else {
            d(t, e);
            var o = c(t) + (" " + e);
            g(t, o)
        }
    }

    function u(t, e) {
        if ("undefined" != typeof t.classList) return t.classList.contains(e);
        var o = c(t);
        return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
    }

    function c(t) {
        return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function g(t, e) {
        t.setAttribute("class", e)
    }

    function m(t, e, o) {
        o.forEach(function(o) {
            e.indexOf(o) === -1 && u(t, o) && d(t, o)
        }), e.forEach(function(e) {
            u(t, e) || p(t, e)
        })
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function y(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }

    function b() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }

    function w() {
        for (var t = {
                top: 0,
                left: 0
            }, e = arguments.length, o = Array(e), i = 0; i < e; i++) o[i] = arguments[i];
        return o.forEach(function(e) {
            var o = e.top,
                i = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i
        }), t
    }

    function C(t, e) {
        return "string" == typeof t.left && t.left.indexOf("%") !== -1 && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && t.top.indexOf("%") !== -1 && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function O(t, e) {
        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function() {
            var t = e,
                o = a(e),
                i = o,
                n = getComputedStyle(e);
            if (e = [i.left, i.top, o.width + i.left, o.height + i.top], t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView;
                e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
            }
            G.forEach(function(t, o) {
                t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(n["border" + t + "Width"]) : e[o] -= parseFloat(n["border" + t + "Width"])
            })
        }(), e
    }
    var E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        x = void 0;
    "undefined" == typeof x && (x = {
        modules: []
    });
    var A = null,
        T = function() {
            var t = 0;
            return function() {
                return ++t
            }
        }(),
        S = {},
        P = function() {
            var t = A;
            t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), document.body.appendChild(t), A = t);
            var e = t.getAttribute("data-tether-id");
            return "undefined" == typeof S[e] && (S[e] = n(t), k(function() {
                delete S[e]
            })), S[e]
        },
        M = null,
        W = [],
        k = function(t) {
            W.push(t)
        },
        _ = function() {
            for (var t = void 0; t = W.pop();) t()
        },
        B = function() {
            function t() {
                i(this, t)
            }
            return E(t, [{
                key: "on",
                value: function(t, e, o) {
                    var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: o,
                        once: i
                    })
                }
            }, {
                key: "once",
                value: function(t, e, o) {
                    this.on(t, e, o, !0)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
                        if ("undefined" == typeof e) delete this.bindings[t];
                        else
                            for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if ("undefined" != typeof this.bindings && this.bindings[t]) {
                        for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++) i[n - 1] = arguments[n];
                        for (; e < this.bindings[t].length;) {
                            var r = this.bindings[t][e],
                                s = r.handler,
                                a = r.ctx,
                                f = r.once,
                                l = a;
                            "undefined" == typeof l && (l = this), s.apply(l, i), f ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]), t
        }();
    x.Utils = {
        getActualBoundingClientRect: n,
        getScrollParents: r,
        getBounds: a,
        getOffsetParent: f,
        extend: h,
        addClass: p,
        removeClass: d,
        hasClass: u,
        updateClasses: m,
        defer: k,
        flush: _,
        uniqueId: T,
        Evented: B,
        getScrollBarSize: l,
        removeUtilElements: s
    };
    var z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        j = function(t, e, o) {
            for (var i = !0; i;) {
                var n = t,
                    r = e,
                    s = o;
                i = !1, null === n && (n = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(n, r);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var f = a.get;
                    if (void 0 === f) return;
                    return f.call(s)
                }
                var l = Object.getPrototypeOf(n);
                if (null === l) return;
                t = l, e = r, o = s, i = !0, a = l = void 0
            }
        };
    if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
    var Y = x.Utils,
        r = Y.getScrollParents,
        a = Y.getBounds,
        f = Y.getOffsetParent,
        h = Y.extend,
        p = Y.addClass,
        d = Y.removeClass,
        m = Y.updateClasses,
        k = Y.defer,
        _ = Y.flush,
        l = Y.getScrollBarSize,
        s = Y.removeUtilElements,
        L = function() {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
                var i = e[o];
                if (void 0 !== t.style[i]) return i
            }
        }(),
        D = [],
        X = function() {
            D.forEach(function(t) {
                t.position(!1)
            }), _()
        };
    ! function() {
        var t = null,
            e = null,
            o = null,
            i = function n() {
                return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(n, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), X(), e = b() - t))
            };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
            window.addEventListener(t, i)
        })
    }();
    var F = {
            center: "center",
            left: "right",
            right: "left"
        },
        H = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        },
        N = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        },
        U = function(t, e) {
            var o = t.left,
                i = t.top;
            return "auto" === o && (o = F[e.left]), "auto" === i && (i = H[e.top]), {
                left: o,
                top: i
            }
        },
        V = function(t) {
            var e = t.left,
                o = t.top;
            return "undefined" != typeof N[t.left] && (e = N[t.left]), "undefined" != typeof N[t.top] && (o = N[t.top]), {
                left: e,
                top: o
            }
        },
        R = function(t) {
            var e = t.split(" "),
                o = z(e, 2),
                i = o[0],
                n = o[1];
            return {
                top: i,
                left: n
            }
        },
        q = R,
        I = function(t) {
            function e(t) {
                var o = this;
                i(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), D.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function(t) {
                    "undefined" != typeof t.initialize && t.initialize.call(o)
                }), this.position()
            }
            return v(e, t), E(e, [{
                key: "getClass",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        e = this.options.classes;
                    return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this,
                        o = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                        i = {
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        };
                    this.options = h(i, t);
                    var n = this.options,
                        s = n.element,
                        a = n.target,
                        f = n.targetModifier;
                    if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                            if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                            "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), p(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && p(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = q(this.options.targetAttachment), this.attachment = q(this.options.attachment), this.offset = R(this.options.offset), this.targetOffset = R(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
                }
            }, {
                key: "getTargetBounds",
                value: function() {
                    if ("undefined" == typeof this.targetModifier) return a(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = a(this.target),
                            e = {
                                height: t.height,
                                width: t.width,
                                top: t.top,
                                left: t.left
                            };
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0,
                            o = this.target;
                        o === document.body ? (o = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(o);
                        var i = getComputedStyle(o),
                            n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                            r = 0;
                        n && (r = 15);
                        var s = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - r,
                            e = {
                                width: 15,
                                height: .975 * s * (s / o.scrollHeight),
                                left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                            },
                            f = 0;
                        s < 408 && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var l = this.target.scrollTop / (o.scrollHeight - s);
                        return e.top = l * (s - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                    }
                }
            }, {
                key: "clearCache",
                value: function() {
                    this._cache = {}
                }
            }, {
                key: "cache",
                value: function(t, e) {
                    return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    this.options.addTargetClasses !== !1 && p(this.target, this.getClass("enabled")), p(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }), e && this.position()
                }
            }, {
                key: "disable",
                value: function() {
                    var t = this;
                    d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.disable(), D.forEach(function(e, o) {
                        e === t && D.splice(o, 1)
                    }), 0 === D.length && s()
                }
            }, {
                key: "updateAttachClasses",
                value: function(t, e) {
                    var o = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var i = ["left", "top", "bottom", "right", "middle", "center"];
                    "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                    var n = this._addAttachClasses;
                    t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    i.forEach(function(t) {
                        r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                    }), k(function() {
                        "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                    })
                }
            }, {
                key: "position",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var o = U(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, o);
                        var i = this.cache("element-bounds", function() {
                                return a(t.element)
                            }),
                            n = i.width,
                            r = i.height;
                        if (0 === n && 0 === r && "undefined" != typeof this.lastSize) {
                            var s = this.lastSize;
                            n = s.width, r = s.height
                        } else this.lastSize = {
                            width: n,
                            height: r
                        };
                        var h = this.cache("target-bounds", function() {
                                return t.getTargetBounds()
                            }),
                            d = h,
                            p = C(V(this.attachment), {
                                width: n,
                                height: r
                            }),
                            u = C(V(o), d),
                            c = C(this.offset, {
                                width: n,
                                height: r
                            }),
                            g = C(this.targetOffset, d);
                        p = w(p, c), u = w(u, g);
                        for (var m = h.left + u.left - p.left, v = h.top + u.top - p.top, y = 0; y < x.modules.length; ++y) {
                            var b = x.modules[y],
                                O = b.position.call(this, {
                                    left: m,
                                    top: v,
                                    targetAttachment: o,
                                    targetPos: h,
                                    elementPos: i,
                                    offset: p,
                                    targetOffset: u,
                                    manualOffset: c,
                                    manualTargetOffset: g,
                                    scrollbarSize: S,
                                    attachment: this.attachment
                                });
                            if (O === !1) return !1;
                            "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
                        }
                        var E = {
                                page: {
                                    top: v,
                                    left: m
                                },
                                viewport: {
                                    top: v - pageYOffset,
                                    bottom: pageYOffset - v - r + innerHeight,
                                    left: m - pageXOffset,
                                    right: pageXOffset - m - n + innerWidth
                                }
                            },
                            A = this.target.ownerDocument,
                            T = A.defaultView,
                            S = void 0;
                        return T.innerHeight > A.documentElement.clientHeight && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), T.innerWidth > A.documentElement.clientWidth && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), ["", "static"].indexOf(A.body.style.position) !== -1 && ["", "static"].indexOf(A.body.parentElement.style.position) !== -1 || (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                            var e = t.cache("target-offsetparent", function() {
                                    return f(t.target)
                                }),
                                o = t.cache("target-offsetparent-bounds", function() {
                                    return a(e)
                                }),
                                i = getComputedStyle(e),
                                n = o,
                                r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                    r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                }), o.right = A.body.scrollWidth - o.left - n.width + r.right, o.bottom = A.body.scrollHeight - o.top - n.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                                var s = e.scrollTop,
                                    l = e.scrollLeft;
                                E.offset = {
                                    top: E.page.top - o.top + s - r.top,
                                    left: E.page.left - o.left + l - r.left
                                }
                            }
                        }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
                    }
                }
            }, {
                key: "move",
                value: function(t) {
                    var e = this;
                    if ("undefined" != typeof this.element.parentNode) {
                        var o = {};
                        for (var i in t) {
                            o[i] = {};
                            for (var n in t[i]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var a = this.history[s];
                                    if ("undefined" != typeof a[i] && !y(a[i][n], t[i][n])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (o[i][n] = !0)
                            }
                        }
                        var l = {
                                top: "",
                                left: "",
                                right: "",
                                bottom: ""
                            },
                            d = function(t, o) {
                                var i = "undefined" != typeof e.options.optimizations,
                                    n = i ? e.options.optimizations.gpu : null;
                                if (n !== !1) {
                                    var r = void 0,
                                        s = void 0;
                                    if (t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), window.matchMedia) {
                                        var a = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                        a || (s = Math.round(s), r = Math.round(r))
                                    }
                                    l[L] = "translateX(" + s + "px) translateY(" + r + "px)", "msTransform" !== L && (l[L] += " translateZ(0)")
                                } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                            },
                            p = !1;
                        if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function() {
                                l.position = "absolute";
                                var i = e.cache("target-offsetparent", function() {
                                    return f(e.target)
                                });
                                f(e.element) !== i && k(function() {
                                    e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                }), d(o.offset, t.offset), p = !0
                            }() : (l.position = "absolute", d({
                                top: !0,
                                left: !0
                            }, t.page)), !p)
                            if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                            else {
                                for (var u = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                                    if ("static" !== getComputedStyle(c).position) {
                                        u = !1;
                                        break
                                    }
                                    c = c.parentNode
                                }
                                u || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                            }
                        var g = {},
                            m = !1;
                        for (var n in l) {
                            var v = l[n],
                                b = this.element.style[n];
                            b !== v && (m = !0, g[n] = v)
                        }
                        m && k(function() {
                            h(e.element.style, g), e.trigger("repositioned")
                        })
                    }
                }
            }]), e
        }(B);
    I.modules = [], x.position = X;
    var $ = h(I, x),
        z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        Y = x.Utils,
        a = Y.getBounds,
        h = Y.extend,
        m = Y.updateClasses,
        k = Y.defer,
        G = ["left", "top", "right", "bottom"];
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = t.targetAttachment;
            if (!this.options.constraints) return !0;
            var r = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                s = r.height,
                f = r.width;
            if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                f = l.width, s = l.height
            }
            var d = this.cache("target-bounds", function() {
                    return e.getTargetBounds()
                }),
                p = d.height,
                u = d.width,
                c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(t) {
                var e = t.outOfBoundsClass,
                    o = t.pinnedClass;
                e && c.push(e), o && c.push(o)
            }), c.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    c.push(t + "-" + e)
                })
            });
            var g = [],
                v = h({}, n),
                y = h({}, this.attachment);
            return this.options.constraints.forEach(function(t) {
                var r = t.to,
                    a = t.attachment,
                    l = t.pin;
                "undefined" == typeof a && (a = "");
                var h = void 0,
                    d = void 0;
                if (a.indexOf(" ") >= 0) {
                    var c = a.split(" "),
                        m = z(c, 2);
                    d = m[0], h = m[1]
                } else h = d = a;
                var b = O(e, r);
                "target" !== d && "both" !== d || (o < b[1] && "top" === v.top && (o += p, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= p, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += p, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - p) >= b[1] && (o -= s - p, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= p, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - p) <= b[3] && (o += s - p, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), "target" !== h && "both" !== h || (i < b[0] && "left" === v.left && (i += u, v.left = "right"), i + f > b[2] && "right" === v.left && (i -= u, v.left = "left")), "together" === h && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += u, v.left = "right", i += f, y.left = "left") : "left" === y.left && (i += u, v.left = "right", i -= f, y.left = "right") : i + f > b[2] && "right" === v.left ? "left" === y.left ? (i -= u, v.left = "left", i -= f, y.left = "right") : "right" === y.left && (i -= u, v.left = "left", i += f, y.left = "left") : "center" === v.left && (i + f > b[2] && "left" === y.left ? (i -= f, y.left = "right") : i < b[0] && "right" === y.left && (i += f, y.left = "left"))), "element" !== d && "both" !== d || (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), "element" !== h && "both" !== h || (i < b[0] && ("right" === y.left ? (i += f, y.left = "left") : "center" === y.left && (i += f / 2, y.left = "left")), i + f > b[2] && ("left" === y.left ? (i -= f, y.left = "right") : "center" === y.left && (i -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function(t) {
                    return t.trim()
                }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                var w = [],
                    C = [];
                o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), i < b[0] && (l.indexOf("left") >= 0 ? (i = b[0], w.push("left")) : C.push("left")), i + f > b[2] && (l.indexOf("right") >= 0 ? (i = b[2] - f, w.push("right")) : C.push("right")), w.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), C.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === n.top && v.left === n.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
            }), {
                top: o,
                left: i
            }
        }
    });
    var Y = x.Utils,
        a = Y.getBounds,
        m = Y.updateClasses,
        k = Y.defer;
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                r = n.height,
                s = n.width,
                f = this.getTargetBounds(),
                l = o + r,
                h = i + s,
                d = [];
            o <= f.bottom && l >= f.top && ["left", "right"].forEach(function(t) {
                var e = f[t];
                e !== i && e !== h || d.push(t)
            }), i <= f.right && h >= f.left && ["top", "bottom"].forEach(function(t) {
                var e = f[t];
                e !== o && e !== l || d.push(t)
            });
            var p = [],
                u = [],
                c = ["left", "top", "right", "bottom"];
            return p.push(this.getClass("abutted")), c.forEach(function(t) {
                p.push(e.getClass("abutted") + "-" + t)
            }), d.length && u.push(this.getClass("abutted")), d.forEach(function(t) {
                u.push(e.getClass("abutted") + "-" + t)
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, u, p), m(e.element, u, p)
            }), !0
        }
    });
    var z = function() {
        function t(t, e) {
            var o = [],
                i = !0,
                n = !1,
                r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
            } catch (f) {
                n = !0, r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n) throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return x.modules.push({
        position: function(t) {
            var e = t.top,
                o = t.left;
            if (this.options.shift) {
                var i = this.options.shift;
                "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                    top: e,
                    left: o
                }));
                var n = void 0,
                    r = void 0;
                if ("string" == typeof i) {
                    i = i.split(" "), i[1] = i[1] || i[0];
                    var s = i,
                        a = z(s, 2);
                    n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10)
                } else n = i.top, r = i.left;
                return e += n, o += r, {
                    top: e,
                    left: o
                }
            }
        }
    }), $
});



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function(a) {
    var b = "collapse",
        c = "4.0.0-alpha.6",
        d = "bs.collapse",
        e = "." + d,
        f = ".data-api",
        g = a.fn[b],
        h = 600,
        i = {
            toggle: !0,
            parent: ""
        },
        j = {
            toggle: "boolean",
            parent: "string"
        },
        k = {
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            CLICK_DATA_API: "click" + e + f
        },
        l = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        },
        m = {
            WIDTH: "width",
            HEIGHT: "height"
        },
        n = {
            ACTIVES: ".card > .show, .card > .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]',
            DATA_CHILDREN: "data-children"
        },
        o = function() {
            function e(b, c) {
                if (_classCallCheck(this, e), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(c), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._selectorActives = n.ACTIVES, this._parent) {
                    var d = this._parent.hasAttribute(n.DATA_CHILDREN) ? this._parent.getAttribute(n.DATA_CHILDREN) : null;
                    null !== d && (this._selectorActives = d + " > .show, " + d + " > .collapsing")
                }
                this._config.toggle && this.toggle()
            }
            return e.prototype.toggle = function() {
                a(this._element).hasClass(l.SHOW) ? this.hide() : this.show()
            }, e.prototype.show = function() {
                var c = this;
                if (!this._isTransitioning && !a(this._element).hasClass(l.SHOW)) {
                    var f = void 0,
                        g = void 0;
                    if (this._parent && (f = a.makeArray(a(this._parent).find(this._selectorActives)), f.length || (f = null)), !(f && (g = a(f).data(d)) && g._isTransitioning)) {
                        var i = a.Event(k.SHOW);
                        if (a(this._element).trigger(i), !i.isDefaultPrevented()) {
                            f && (e._jQueryInterface.call(a(f), "hide"), g || a(f).data(d, null));
                            var j = this._getDimension();
                            a(this._element).removeClass(l.COLLAPSE).addClass(l.COLLAPSING), this._element.style[j] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(l.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var m = function() {
                                a(c._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).addClass(l.SHOW), c._element.style[j] = "", c.setTransitioning(!1), a(c._element).trigger(k.SHOWN)
                            };
                            if (!Util.supportsTransitionEnd()) return void m();
                            var n = j[0].toUpperCase() + j.slice(1),
                                o = "scroll" + n;
                            a(this._element).one(Util.TRANSITION_END, m).emulateTransitionEnd(h), this._element.style[j] = this._element[o] + "px"
                        }
                    }
                }
            }, e.prototype.hide = function() {
                var c = this;
                if (!this._isTransitioning && a(this._element).hasClass(l.SHOW)) {
                    var d = a.Event(k.HIDE);
                    if (a(this._element).trigger(d), !d.isDefaultPrevented()) {
                        var e = this._getDimension();
                        this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", Util.reflow(this._element), a(this._element).addClass(l.COLLAPSING).removeClass(l.COLLAPSE).removeClass(l.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(l.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                        var f = function() {
                            c.setTransitioning(!1), a(c._element).removeClass(l.COLLAPSING).addClass(l.COLLAPSE).trigger(k.HIDDEN)
                        };
                        if (this._element.style[e] = "", !Util.supportsTransitionEnd()) return void f();
                        a(this._element).one(Util.TRANSITION_END, f).emulateTransitionEnd(h)
                    }
                }
            }, e.prototype.setTransitioning = function(b) {
                this._isTransitioning = b
            }, e.prototype.dispose = function() {
                a.removeData(this._element, d), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e.prototype._getConfig = function(d) {
                return d = a.extend({}, i, d), d.toggle = Boolean(d.toggle), Util.typeCheckConfig(b, d, j), d
            }, e.prototype._getDimension = function() {
                return a(this._element).hasClass(m.WIDTH) ? m.WIDTH : m.HEIGHT
            }, e.prototype._getParent = function() {
                var c = this,
                    d = a(this._config.parent)[0],
                    f = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return a(d).find(f).each(function(a, b) {
                    c._addAriaAndCollapsedClass(e._getTargetFromElement(b), [b])
                }), d
            }, e.prototype._addAriaAndCollapsedClass = function(c, d) {
                if (c) {
                    var e = a(c).hasClass(l.SHOW);
                    c.setAttribute("aria-expanded", e), d.length && a(d).toggleClass(l.COLLAPSED, !e).attr("aria-expanded", e)
                }
            }, e._getTargetFromElement = function(c) {
                var d = Util.getSelectorFromElement(c);
                return d ? a(d)[0] : null
            }, e._jQueryInterface = function(c) {
                return this.each(function() {
                    var b = a(this),
                        f = b.data(d),
                        g = a.extend({}, i, b.data(), "object" === (void 0 === c ? "undefined" : _typeof(c)) && c);
                    if (!f && g.toggle && /show|hide/.test(c) && (g.toggle = !1), f || (f = new e(this, g), b.data(d, f)), "string" == typeof c) {
                        if (void 0 === f[c]) throw new Error('No method named "' + c + '"');
                        f[c]()
                    }
                })
            }, _createClass(e, null, [{
                key: "VERSION",
                get: function() {
                    return c
                }
            }, {
                key: "Default",
                get: function() {
                    return i
                }
            }]), e
        }();
    return a(document).on(k.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
        /input|textarea/i.test(b.target.tagName) || b.preventDefault();
        var c = o._getTargetFromElement(this),
            e = a(c).data(d),
            f = e ? "toggle" : a(this).data();
        o._jQueryInterface.call(a(c), f)
    }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
        return a.fn[b] = g, o._jQueryInterface
    }, o
}(jQuery);


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function(a) {
    var b = "tab",
        c = "4.0.0-alpha.6",
        d = "bs.tab",
        e = "." + d,
        f = ".data-api",
        g = a.fn[b],
        h = 150,
        i = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            CLICK_DATA_API: "click" + e + f
        },
        j = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
        },
        k = {
            A: "a",
            LI: "li",
            DROPDOWN: ".dropdown",
            LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu), .list-group:not(.dropdown-menu)",
            FADE_CHILD: "> .nav-item .fade, > .list-group-item .fade, > .fade",
            ACTIVE: ".active",
            ACTIVE_CHILD: "> .nav-item > .active, > .list-group-item > .active, > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        },
        l = function() {
            function b(a) {
                _classCallCheck(this, b), this._element = a
            }
            return b.prototype.show = function() {
                var c = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && a(this._element).hasClass(j.ACTIVE) || a(this._element).hasClass(j.DISABLED))) {
                    var d = void 0,
                        e = void 0,
                        f = a(this._element).closest(k.LIST)[0],
                        g = Util.getSelectorFromElement(this._element);
                    f && (e = a.makeArray(a(f).find(k.ACTIVE)), e = e[e.length - 1]);
                    var h = a.Event(i.HIDE, {
                            relatedTarget: this._element
                        }),
                        l = a.Event(i.SHOW, {
                            relatedTarget: e
                        });
                    if (e && a(e).trigger(h), a(this._element).trigger(l), !l.isDefaultPrevented() && !h.isDefaultPrevented()) {
                        g && (d = a(g)[0]), this._activate(this._element, f);
                        var m = function() {
                            var d = a.Event(i.HIDDEN, {
                                    relatedTarget: c._element
                                }),
                                f = a.Event(i.SHOWN, {
                                    relatedTarget: e
                                });
                            a(e).trigger(d), a(c._element).trigger(f)
                        };
                        d ? this._activate(d, d.parentNode, m) : m()
                    }
                }
            }, b.prototype.dispose = function() {
                a.removeClass(this._element, d), this._element = null
            }, b.prototype._activate = function(c, d, e) {
                var f = this,
                    g = a(d).find(k.ACTIVE_CHILD)[0],
                    i = e && Util.supportsTransitionEnd() && (g && a(g).hasClass(j.FADE) || Boolean(a(d).find(k.FADE_CHILD)[0])),
                    l = function() {
                        return f._transitionComplete(c, g, i, e)
                    };
                g && i ? a(g).one(Util.TRANSITION_END, l).emulateTransitionEnd(h) : l(), g && a(g).removeClass(j.SHOW)
            }, b.prototype._transitionComplete = function(c, d, e, f) {
                if (d) {
                    a(d).removeClass(j.ACTIVE), a(d).hasClass("list-group-item") && a(d).find("a.nav-link").removeClass(j.ACTIVE);
                    var g = a(d.parentNode).find(k.DROPDOWN_ACTIVE_CHILD)[0];
                    g && a(g).removeClass(j.ACTIVE), d.setAttribute("aria-expanded", !1)
                }
                if (a(c).addClass(j.ACTIVE), a(c.parentNode).hasClass("list-group-item") && a(c.parentNode).addClass(j.ACTIVE), c.setAttribute("aria-expanded", !0), e ? (Util.reflow(c), a(c).addClass(j.SHOW)) : a(c).removeClass(j.FADE), c.parentNode && a(c.parentNode).hasClass(j.DROPDOWN_MENU)) {
                    var h = a(c).closest(k.DROPDOWN)[0];
                    h && a(h).find(k.DROPDOWN_TOGGLE).addClass(j.ACTIVE), c.setAttribute("aria-expanded", !0)
                }
                f && f()
            }, b._jQueryInterface = function(e) {
                return this.each(function() {
                    var c = a(this),
                        f = c.data(d);
                    if (f || (f = new b(this), c.data(d, f)), "string" == typeof e) {
                        if (void 0 === f[e]) throw new Error('No method named "' + e + '"');
                        f[e]()
                    }
                })
            }, _createClass(b, null, [{
                key: "VERSION",
                get: function() {
                    return c
                }
            }]), b
        }();
    return a(document).on(i.CLICK_DATA_API, k.DATA_TOGGLE, function(b) {
        b.preventDefault(), l._jQueryInterface.call(a(this), "show")
    }), a.fn[b] = l._jQueryInterface, a.fn[b].Constructor = l, a.fn[b].noConflict = function() {
        return a.fn[b] = g, l._jQueryInterface
    }, l
}(jQuery);


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function(a) {
    if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
    var b = "tooltip",
        c = "4.0.0-alpha.6",
        d = "bs.tooltip",
        e = "." + d,
        f = a.fn[b],
        g = 150,
        h = "bs-tether",
        i = new RegExp("(^|\\s)" + h + "\\S+", "g"),
        j = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: [],
            container: !1
        },
        k = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array",
            container: "(string|element|boolean)"
        },
        l = {
            TOP: "bottom center",
            RIGHT: "middle left",
            BOTTOM: "top center",
            LEFT: "middle right"
        },
        m = {
            SHOW: "show",
            OUT: "out"
        },
        n = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            INSERTED: "inserted" + e,
            CLICK: "click" + e,
            FOCUSIN: "focusin" + e,
            FOCUSOUT: "focusout" + e,
            MOUSEENTER: "mouseenter" + e,
            MOUSELEAVE: "mouseleave" + e
        },
        o = {
            FADE: "fade",
            SHOW: "show"
        },
        p = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner"
        },
        q = {
            element: !1,
            enabled: !1
        },
        r = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        },
        s = function() {
            function f(a, b) {
                _classCallCheck(this, f), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners()
            }
            return f.prototype.enable = function() {
                this._isEnabled = !0
            }, f.prototype.disable = function() {
                this._isEnabled = !1
            }, f.prototype.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, f.prototype.toggle = function(c) {
                if (c) {
                    var d = this.constructor.DATA_KEY,
                        e = a(c.currentTarget).data(d);
                    e || (e = new this.constructor(c.currentTarget, this._getDelegateConfig()), a(c.currentTarget).data(d, e)), e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (a(this.getTipElement()).hasClass(o.SHOW)) return void this._leave(null, this);
                    this._enter(null, this)
                }
            }, f.prototype.dispose = function() {
                clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), a(this.element).closest(".modal").off("hide.bs.modal"), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
            }, f.prototype.show = function() {
                var c = this;
                if ("none" === a(this.element).css("display")) throw new Error("Please use show on visible elements");
                var d = a.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    a(this.element).trigger(d);
                    var e = a.contains(this.element.ownerDocument.documentElement, this.element);
                    if (d.isDefaultPrevented() || !e) return;
                    var g = this.getTipElement(),
                        i = Util.getUID(this.constructor.NAME);
                    g.setAttribute("id", i), this.element.setAttribute("aria-describedby", i), this.setContent(), this.config.animation && a(g).addClass(o.FADE);
                    var j = "function" == typeof this.config.placement ? this.config.placement.call(this, g, this.element) : this.config.placement,
                        k = this._getAttachment(j),
                        l = !1 === this.config.container ? document.body : a(this.config.container);
                    a(g).data(this.constructor.DATA_KEY, this), a.contains(this.element.ownerDocument.documentElement, this.tip) || a(g).appendTo(l), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                        attachment: k,
                        element: g,
                        target: this.element,
                        classes: q,
                        classPrefix: h,
                        offset: this.config.offset,
                        constraints: this.config.constraints,
                        addTargetClasses: !1
                    }), Util.reflow(g), this._tether.position(), a(g).addClass(o.SHOW);
                    var n = function() {
                        var d = c._hoverState;
                        c._hoverState = null, a(c.element).trigger(c.constructor.Event.SHOWN), d === m.OUT && c._leave(null, c)
                    };
                    if (Util.supportsTransitionEnd() && a(this.tip).hasClass(o.FADE)) return void a(this.tip).one(Util.TRANSITION_END, n).emulateTransitionEnd(f._TRANSITION_DURATION);
                    n()
                }
            }, f.prototype.hide = function(c) {
                var d = this,
                    e = this.getTipElement(),
                    f = a.Event(this.constructor.Event.HIDE),
                    h = function() {
                        d._hoverState !== m.SHOW && e.parentNode && e.parentNode.removeChild(e), d._cleanTipClass(), d.element.removeAttribute("aria-describedby"), a(d.element).trigger(d.constructor.Event.HIDDEN), d.cleanupTether(), c && c()
                    };
                a(this.element).trigger(f), f.isDefaultPrevented() || (a(e).removeClass(o.SHOW), this._activeTrigger[r.CLICK] = !1, this._activeTrigger[r.FOCUS] = !1, this._activeTrigger[r.HOVER] = !1, Util.supportsTransitionEnd() && a(this.tip).hasClass(o.FADE) ? a(e).one(Util.TRANSITION_END, h).emulateTransitionEnd(g) : h(), this._hoverState = "")
            }, f.prototype.isWithContent = function() {
                return Boolean(this.getTitle())
            }, f.prototype.getTipElement = function() {
                return this.tip = this.tip || a(this.config.template)[0]
            }, f.prototype.setContent = function() {
                var c = a(this.getTipElement());
                this.setElementContent(c.find(p.TOOLTIP_INNER), this.getTitle()), c.removeClass(o.FADE + " " + o.SHOW), this.cleanupTether()
            }, f.prototype.setElementContent = function(c, d) {
                var e = this.config.html;
                "object" === (void 0 === d ? "undefined" : _typeof(d)) && (d.nodeType || d.jquery) ? e ? a(d).parent().is(c) || c.empty().append(d) : c.text(a(d).text()): c[e ? "html" : "text"](d)
            }, f.prototype.getTitle = function() {
                var b = this.element.getAttribute("data-original-title");
                return b || (b = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), b
            }, f.prototype.cleanupTether = function() {
                this._tether && this._tether.destroy()
            }, f.prototype._getAttachment = function(b) {
                return l[b.toUpperCase()]
            }, f.prototype._cleanTipClass = function() {
                var c = a(this.getTipElement()),
                    d = c.attr("class").match(i);
                null !== d && d.length > 0 && c.removeClass(d.join(""))
            }, f.prototype._setListeners = function() {
                var c = this;
                this.config.trigger.split(" ").forEach(function(b) {
                    if ("click" === b) a(c.element).on(c.constructor.Event.CLICK, c.config.selector, function(a) {
                        return c.toggle(a)
                    });
                    else if (b !== r.MANUAL) {
                        var d = b === r.HOVER ? c.constructor.Event.MOUSEENTER : c.constructor.Event.FOCUSIN,
                            e = b === r.HOVER ? c.constructor.Event.MOUSELEAVE : c.constructor.Event.FOCUSOUT;
                        a(c.element).on(d, c.config.selector, function(a) {
                            return c._enter(a)
                        }).on(e, c.config.selector, function(a) {
                            return c._leave(a)
                        })
                    }
                    a(c.element).closest(".modal").on("hide.bs.modal", function() {
                        return c.hide()
                    })
                }), this.config.selector ? this.config = a.extend({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, f.prototype._fixTitle = function() {
                var b = _typeof(this.element.getAttribute("data-original-title"));
                (this.element.getAttribute("title") || "string" !== b) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, f.prototype._enter = function(c, d) {
                var e = this.constructor.DATA_KEY;
                return d = d || a(c.currentTarget).data(e), d || (d = new this.constructor(c.currentTarget, this._getDelegateConfig()), a(c.currentTarget).data(e, d)), c && (d._activeTrigger["focusin" === c.type ? r.FOCUS : r.HOVER] = !0), a(d.getTipElement()).hasClass(o.SHOW) || d._hoverState === m.SHOW ? void(d._hoverState = m.SHOW) : (clearTimeout(d._timeout), d._hoverState = m.SHOW, d.config.delay && d.config.delay.show ? void(d._timeout = setTimeout(function() {
                    d._hoverState === m.SHOW && d.show()
                }, d.config.delay.show)) : void d.show())
            }, f.prototype._leave = function(c, d) {
                var e = this.constructor.DATA_KEY;
                if (d = d || a(c.currentTarget).data(e), d || (d = new this.constructor(c.currentTarget, this._getDelegateConfig()), a(c.currentTarget).data(e, d)), c && (d._activeTrigger["focusout" === c.type ? r.FOCUS : r.HOVER] = !1), !d._isWithActiveTrigger()) {
                    if (clearTimeout(d._timeout), d._hoverState = m.OUT, !d.config.delay || !d.config.delay.hide) return void d.hide();
                    d._timeout = setTimeout(function() {
                        d._hoverState === m.OUT && d.hide()
                    }, d.config.delay.hide)
                }
            }, f.prototype._isWithActiveTrigger = function() {
                for (var b in this._activeTrigger)
                    if (this._activeTrigger[b]) return !0;
                return !1
            }, f.prototype._getConfig = function(d) {
                return d = a.extend({}, this.constructor.Default, a(this.element).data(), d), d.delay && "number" == typeof d.delay && (d.delay = {
                    show: d.delay,
                    hide: d.delay
                }), d.title && "number" == typeof d.title && (d.title = d.title.toString()), d.content && "number" == typeof d.content && (d.content = d.content.toString()), Util.typeCheckConfig(b, d, this.constructor.DefaultType), d
            }, f.prototype._getDelegateConfig = function() {
                var b = {};
                if (this.config)
                    for (var c in this.config) this.constructor.Default[c] !== this.config[c] && (b[c] = this.config[c]);
                return b
            }, f._jQueryInterface = function(c) {
                return this.each(function() {
                    var b = a(this).data(d),
                        e = "object" === (void 0 === c ? "undefined" : _typeof(c)) && c;
                    if ((b || !/dispose|hide/.test(c)) && (b || (b = new f(this, e), a(this).data(d, b)), "string" == typeof c)) {
                        if (void 0 === b[c]) throw new Error('No method named "' + c + '"');
                        b[c]()
                    }
                })
            }, _createClass(f, null, [{
                key: "VERSION",
                get: function() {
                    return c
                }
            }, {
                key: "Default",
                get: function() {
                    return j
                }
            }, {
                key: "NAME",
                get: function() {
                    return b
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return d
                }
            }, {
                key: "Event",
                get: function() {
                    return n
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return e
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return k
                }
            }]), f
        }();
    return a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function() {
        return a.fn[b] = f, s._jQueryInterface
    }, s
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Popover = function(a) {
    var b = "popover",
        c = "4.0.0-alpha.6",
        d = "bs.popover",
        e = "." + d,
        f = a.fn[b],
        g = a.extend({}, Tooltip.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }),
        h = a.extend({}, Tooltip.DefaultType, {
            content: "(string|element|function)"
        }),
        i = {
            FADE: "fade",
            SHOW: "show"
        },
        j = {
            TITLE: ".popover-title",
            CONTENT: ".popover-content"
        },
        k = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            INSERTED: "inserted" + e,
            CLICK: "click" + e,
            FOCUSIN: "focusin" + e,
            FOCUSOUT: "focusout" + e,
            MOUSEENTER: "mouseenter" + e,
            MOUSELEAVE: "mouseleave" + e
        },
        l = function(f) {
            function l() {
                return _classCallCheck(this, l), _possibleConstructorReturn(this, f.apply(this, arguments))
            }
            return _inherits(l, f), l.prototype.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, l.prototype.getTipElement = function() {
                return this.tip = this.tip || a(this.config.template)[0]
            }, l.prototype.setContent = function() {
                var c = a(this.getTipElement());
                this.setElementContent(c.find(j.TITLE), this.getTitle()), this.setElementContent(c.find(j.CONTENT), this._getContent()), c.removeClass(i.FADE + " " + i.SHOW), this.cleanupTether()
            }, l.prototype._getContent = function() {
                return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
            }, l._jQueryInterface = function(c) {
                return this.each(function() {
                    var b = a(this).data(d),
                        e = "object" === (void 0 === c ? "undefined" : _typeof(c)) ? c : null;
                    if ((b || !/destroy|hide/.test(c)) && (b || (b = new l(this, e), a(this).data(d, b)), "string" == typeof c)) {
                        if (void 0 === b[c]) throw new Error('No method named "' + c + '"');
                        b[c]()
                    }
                })
            }, _createClass(l, null, [{
                key: "VERSION",
                get: function() {
                    return c
                }
            }, {
                key: "Default",
                get: function() {
                    return g
                }
            }, {
                key: "NAME",
                get: function() {
                    return b
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return d
                }
            }, {
                key: "Event",
                get: function() {
                    return k
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return e
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return h
                }
            }]), l
        }(Tooltip);
    return a.fn[b] = l._jQueryInterface, a.fn[b].Constructor = l, a.fn[b].noConflict = function() {
        return a.fn[b] = f, l._jQueryInterface
    }, l
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function(a) {
    var b = "dropdown",
        c = "4.0.0-alpha.6",
        d = "bs.dropdown",
        e = "." + d,
        f = ".data-api",
        g = a.fn[b],
        h = 27,
        i = 32,
        j = 38,
        k = 40,
        l = 3,
        m = new RegExp(j + "|" + k + "|" + h + "|" + i),
        n = {
            HIDE: "hide" + e,
            HIDDEN: "hidden" + e,
            SHOW: "show" + e,
            SHOWN: "shown" + e,
            CLICK: "click" + e,
            CLICK_DATA_API: "click" + e + f,
            FOCUSIN_DATA_API: "focusin" + e + f,
            KEYDOWN_DATA_API: "keydown" + e + f
        },
        o = {
            BACKDROP: "dropdown-backdrop",
            DISABLED: "disabled",
            SHOW: "show"
        },
        p = {
            BACKDROP: ".dropdown-backdrop",
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            ROLE_MENU: '[role="menu"]',
            ROLE_LISTBOX: '[role="listbox"]',
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        },
        q = function() {
            function b(a) {
                _classCallCheck(this, b), this._element = a, this._addEventListeners()
            }
            return b.prototype.toggle = function() {
                if (this.disabled || a(this).hasClass(o.DISABLED)) return !1;
                var d = b._getParentFromElement(this),
                    e = a(d).hasClass(o.SHOW);
                if (b._clearMenus(), e) return !1;
                var f = {
                        relatedTarget: this
                    },
                    g = a.Event(n.SHOW, f);
                if (a(d).trigger(g), g.isDefaultPrevented()) return !1;
                if ("ontouchstart" in document.documentElement && !a(d).closest(p.NAVBAR_NAV).length) {
                    var h = document.createElement("div");
                    h.className = o.BACKDROP, a(h).insertBefore(this), a(h).on("click", b._clearMenus)
                }
                return this.focus(), this.setAttribute("aria-expanded", !0), a(d).toggleClass(o.SHOW), a(d).trigger(a.Event(n.SHOWN, f)), !1
            }, b.prototype.dispose = function() {
                a.removeData(this._element, d), a(this._element).off(e), this._element = null
            }, b.prototype._addEventListeners = function() {
                a(this._element).on(n.CLICK, this.toggle)
            }, b._jQueryInterface = function(e) {
                return this.each(function() {
                    var c = a(this).data(d);
                    if (c || (c = new b(this), a(this).data(d, c)), "string" == typeof e) {
                        if (void 0 === c[e]) throw new Error('No method named "' + e + '"');
                        c[e].call(this)
                    }
                })
            }, b._clearMenus = function(d) {
                if (!d || d.which !== l)
                    for (var e = a.makeArray(a(p.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                        var g = b._getParentFromElement(e[f]),
                            h = {
                                relatedTarget: e[f]
                            };
                        if (a(g).hasClass(o.SHOW) && !(d && ("click" === d.type && /input|textarea/i.test(d.target.tagName) || "focusin" === d.type) && a.contains(g, d.target))) {
                            var i = a.Event(n.HIDE, h);
                            if (a(g).trigger(i), !i.isDefaultPrevented()) {
                                var j = a(g).find(p.BACKDROP)[0];
                                j && j.parentNode.removeChild(j), e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(o.SHOW).trigger(a.Event(n.HIDDEN, h))
                            }
                        }
                    }
            }, b._getParentFromElement = function(c) {
                var d = void 0,
                    e = Util.getSelectorFromElement(c);
                return e && (d = a(e)[0]), d || c.parentNode
            }, b._dataApiKeydownHandler = function(d) {
                if (m.test(d.which) && !/input|textarea/i.test(d.target.tagName) && (d.preventDefault(), d.stopPropagation(), !this.disabled && !a(this).hasClass(o.DISABLED))) {
                    var e = b._getParentFromElement(this),
                        f = a(e).hasClass(o.SHOW);
                    if (!f && d.which !== h || f && d.which === h) {
                        if (d.which === h) {
                            var g = a(e).find(p.DATA_TOGGLE)[0];
                            a(g).trigger("focus")
                        }
                        return void a(this).trigger("click")
                    }
                    var i = a(e).find(p.VISIBLE_ITEMS).get();
                    if (i.length) {
                        var l = i.indexOf(d.target);
                        d.which === j && l > 0 && l--, d.which === k && l < i.length - 1 && l++, l < 0 && (l = 0), i[l].focus()
                    }
                }
            }, _createClass(b, null, [{
                key: "VERSION",
                get: function() {
                    return c
                }
            }]), b
        }();
    return a(document).on(n.KEYDOWN_DATA_API, p.DATA_TOGGLE, q._dataApiKeydownHandler).on(n.KEYDOWN_DATA_API, p.ROLE_MENU, q._dataApiKeydownHandler).on(n.KEYDOWN_DATA_API, p.ROLE_LISTBOX, q._dataApiKeydownHandler).on(n.CLICK_DATA_API + " " + n.FOCUSIN_DATA_API, q._clearMenus).on(n.CLICK_DATA_API, p.DATA_TOGGLE, q.prototype.toggle).on(n.CLICK_DATA_API, p.FORM_CHILD, function(a) {
        a.stopPropagation()
    }), a.fn[b] = q._jQueryInterface, a.fn[b].Constructor = q, a.fn[b].noConflict = function() {
        return a.fn[b] = g, q._jQueryInterface
    }, q
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function(t) {
    var e = "modal",
        i = "4.0.0-alpha.6",
        n = "bs.modal",
        o = "." + n,
        s = ".data-api",
        r = t.fn[e],
        a = 300,
        d = 150,
        h = 27,
        l = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        c = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        _ = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            FOCUSIN: "focusin" + o,
            RESIZE: "resize" + o,
            CLICK_DISMISS: "click.dismiss" + o,
            KEYDOWN_DISMISS: "keydown.dismiss" + o,
            MOUSEUP_DISMISS: "mouseup.dismiss" + o,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + o,
            CLICK_DATA_API: "click" + o + s
        },
        u = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
        },
        p = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        },
        f = function() {
            function s(e, i) {
                _classCallCheck(this, s), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(p.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }
            return s.prototype.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, s.prototype.show = function(e) {
                var i = this;
                if (!this._isTransitioning) {
                    Util.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) && (this._isTransitioning = !0);
                    var n = t.Event(_.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(u.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(_.CLICK_DISMISS, p.DATA_DISMISS, function(t) {
                        return i.hide(t)
                    }), t(this._dialog).on(_.MOUSEDOWN_DISMISS, function() {
                        t(i._element).one(_.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return i._showElement(e)
                    }))
                }
            }, s.prototype.hide = function(e) {
                var i = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = Util.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);
                    n && (this._isTransitioning = !0);
                    var o = t.Event(_.HIDE);
                    t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(_.FOCUSIN), t(this._element).removeClass(u.SHOW), t(this._element).off(_.CLICK_DISMISS), t(this._dialog).off(_.MOUSEDOWN_DISMISS), n ? t(this._element).one(Util.TRANSITION_END, function(t) {
                        return i._hideModal(t)
                    }).emulateTransitionEnd(a) : this._hideModal())
                }
            }, s.prototype.dispose = function() {
                t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(o), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, s.prototype.handleUpdate = function() {
                this._adjustDialog()
            }, s.prototype._getConfig = function(i) {
                return i = t.extend({}, l, i), Util.typeCheckConfig(e, i, c), i
            }, s.prototype._showElement = function(e) {
                var i = this,
                    n = Util.supportsTransitionEnd() && t(this._element).hasClass(u.FADE);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Util.reflow(this._element), t(this._element).addClass(u.SHOW), this._config.focus && this._enforceFocus();
                var o = t.Event(_.SHOWN, {
                        relatedTarget: e
                    }),
                    s = function() {
                        i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(o)
                    };
                n ? t(this._dialog).one(Util.TRANSITION_END, s).emulateTransitionEnd(a) : s()
            }, s.prototype._enforceFocus = function() {
                var e = this;
                t(document).off(_.FOCUSIN).on(_.FOCUSIN, function(i) {
                    document === i.target || e._element === i.target || t(e._element).has(i.target).length || e._element.focus()
                })
            }, s.prototype._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(_.KEYDOWN_DISMISS, function(t) {
                    t.which === h && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(_.KEYDOWN_DISMISS)
            }, s.prototype._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(_.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(_.RESIZE)
            }, s.prototype._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(u.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(_.HIDDEN)
                })
            }, s.prototype._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, s.prototype._showBackdrop = function(e) {
                var i = this,
                    n = t(this._element).hasClass(u.FADE) ? u.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    var o = Util.supportsTransitionEnd() && n;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = u.BACKDROP, n && t(this._backdrop).addClass(n), t(this._backdrop).appendTo(document.body), t(this._element).on(_.CLICK_DISMISS, function(t) {
                            return i._ignoreBackdropClick ? void(i._ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
                        }), o && Util.reflow(this._backdrop), t(this._backdrop).addClass(u.SHOW), !e) return;
                    if (!o) return void e();
                    t(this._backdrop).one(Util.TRANSITION_END, e).emulateTransitionEnd(d)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(u.SHOW);
                    var s = function() {
                        i._removeBackdrop(), e && e()
                    };
                    Util.supportsTransitionEnd() && t(this._element).hasClass(u.FADE) ? t(this._backdrop).one(Util.TRANSITION_END, s).emulateTransitionEnd(d) : s()
                } else e && e()
            }, s.prototype._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, s.prototype._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, s.prototype._checkScrollbar = function() {
                this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, s.prototype._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    t(p.FIXED_CONTENT).each(function(i, n) {
                        var o = t(n)[0].style.paddingRight,
                            s = t(n).css("padding-right");
                        t(n).data("padding-right", o).css("padding-right", parseFloat(s) + e._scrollbarWidth + "px")
                    }), t(p.NAVBAR_TOGGLER).each(function(i, n) {
                        var o = t(n)[0].style.marginRight,
                            s = t(n).css("margin-right");
                        t(n).data("margin-right", o).css("margin-right", parseFloat(s) + e._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight,
                        n = t("body").css("padding-right");
                    t("body").data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                }
            }, s.prototype._resetScrollbar = function() {
                t(p.FIXED_CONTENT).each(function(e, i) {
                    var n = t(i).data("padding-right");
                    "undefined" != typeof n && t(i).css("padding-right", n).removeData("padding-right")
                }), t(p.NAVBAR_TOGGLER).each(function(e, i) {
                    var n = t(i).data("margin-right");
                    "undefined" != typeof n && t(i).css("margin-right", n).removeData("margin-right")
                });
                var e = t("body").data("padding-right");
                "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
            }, s.prototype._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = u.SCROLLBAR_MEASURER, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, s._jQueryInterface = function(e, i) {
                return this.each(function() {
                    var o = t(this).data(n),
                        r = t.extend({}, s.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && e);
                    if (o || (o = new s(this, r), t(this).data(n, o)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                        o[e](i)
                    } else r.show && o.show(i)
                })
            }, _createClass(s, null, [{
                key: "VERSION",
                get: function() {
                    return i
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }]), s
        }();
    return t(document).on(_.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
        var i = this,
            o = void 0,
            s = Util.getSelectorFromElement(this);
        s && (o = t(s)[0]);
        var r = t(o).data(n) ? "toggle" : t.extend({}, t(o).data(), t(this).data());
        ("A" === this.tagName || "AREA" === this.tagName) && e.preventDefault();
        var a = t(o).one(_.SHOW, function(e) {
            e.isDefaultPrevented() || a.one(_.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        f._jQueryInterface.call(t(o), r, this)
    }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function() {
        return t.fn[e] = r, f._jQueryInterface
    }, f
}(jQuery);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function($) {

    /**
     * ------------------------------------------------------------------------
     * Private TransitionEnd Helpers
     * ------------------------------------------------------------------------
     */

    var transition = false;

    var MAX_UID = 1000000;

    var TransitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
    };

    // shoutout AngusCroll (https://goo.gl/pxwQGp)
    function toType(obj) {
        return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    function isElement(obj) {
        return (obj[0] || obj).nodeType;
    }

    function getSpecialTransitionEndEvent() {
        return {
            bindType: transition.end,
            delegateType: transition.end,
            handle: function handle(event) {
                if ($(event.target).is(this)) {
                    return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
                }
                return undefined;
            }
        };
    }

    function transitionEndTest() {
        if (window.QUnit) {
            return false;
        }

        var el = document.createElement('bootstrap');

        for (var name in TransitionEndEvent) {
            if (el.style[name] !== undefined) {
                return {
                    end: TransitionEndEvent[name]
                };
            }
        }

        return false;
    }

    function transitionEndEmulator(duration) {
        var _this = this;

        var called = false;

        $(this).one(Util.TRANSITION_END, function() {
            called = true;
        });

        setTimeout(function() {
            if (!called) {
                Util.triggerTransitionEnd(_this);
            }
        }, duration);

        return this;
    }

    function setTransitionEndSupport() {
        transition = transitionEndTest();

        $.fn.emulateTransitionEnd = transitionEndEmulator;

        if (Util.supportsTransitionEnd()) {
            $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
        }
    }

    /**
     * --------------------------------------------------------------------------
     * Public Util Api
     * --------------------------------------------------------------------------
     */

    var Util = {

        TRANSITION_END: 'bsTransitionEnd',

        getUID: function getUID(prefix) {
            do {
                // eslint-disable-next-line no-bitwise
                prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
            } while (document.getElementById(prefix));
            return prefix;
        },
        getSelectorFromElement: function getSelectorFromElement(element) {
            var selector = element.getAttribute('data-target');
            if (!selector || selector === '#') {
                selector = element.getAttribute('href') || '';
            }

            try {
                var $selector = $(selector);
                return $selector.length > 0 ? selector : null;
            } catch (error) {
                return null;
            }
        },
        reflow: function reflow(element) {
            return element.offsetHeight;
        },
        triggerTransitionEnd: function triggerTransitionEnd(element) {
            $(element).trigger(transition.end);
        },
        supportsTransitionEnd: function supportsTransitionEnd() {
            return Boolean(transition);
        },
        typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
            for (var property in configTypes) {
                if (configTypes.hasOwnProperty(property)) {
                    var expectedTypes = configTypes[property];
                    var value = config[property];
                    var valueType = value && isElement(value) ? 'element' : toType(value);

                    if (!new RegExp(expectedTypes).test(valueType)) {
                        throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
                    }
                }
            }
        }
    };

    setTransitionEndSupport();

    return Util;
}(jQuery);



/*!
 * Bootstrap-select v1.12.2 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2017 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    ! function(a) {
        "use strict";

        function b(b) {
            var c = [{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }];
            return a.each(c, function() {
                b = b.replace(this.re, this.ch)
            }), b
        }

        function c(a) {
            var b = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                c = "(?:" + Object.keys(b).join("|") + ")",
                d = new RegExp(c),
                e = new RegExp(c, "g"),
                f = null == a ? "" : "" + a;
            return d.test(f) ? f.replace(e, function(a) {
                return b[a]
            }) : f
        }

        function d(b, c) {
            var d = arguments,
                e = b,
                f = c;
            [].shift.apply(d);
            var h, i = this.each(function() {
                var b = a(this);
                if (b.is("select")) {
                    var c = b.data("selectpicker"),
                        i = "object" == typeof e && e;
                    if (c) {
                        if (i)
                            for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j])
                    } else {
                        var k = a.extend({}, g.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                        k.template = a.extend({}, g.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), b.data("selectpicker", c = new g(this, k, f))
                    }
                    "string" == typeof e && (h = c[e] instanceof Function ? c[e].apply(c, d) : c.options[e])
                }
            });
            return "undefined" != typeof h ? h : i
        }
        String.prototype.includes || ! function() {
            var a = {}.toString,
                b = function() {
                    try {
                        var a = {},
                            b = Object.defineProperty,
                            c = b(a, a, a) && b
                    } catch (a) {}
                    return c
                }(),
                c = "".indexOf,
                d = function(b) {
                    if (null == this) throw new TypeError;
                    var d = String(this);
                    if (b && "[object RegExp]" == a.call(b)) throw new TypeError;
                    var e = d.length,
                        f = String(b),
                        g = f.length,
                        h = arguments.length > 1 ? arguments[1] : void 0,
                        i = h ? Number(h) : 0;
                    i != i && (i = 0);
                    var j = Math.min(Math.max(i, 0), e);
                    return !(g + j > e) && c.call(d, f, i) != -1
                };
            b ? b(String.prototype, "includes", {
                value: d,
                configurable: !0,
                writable: !0
            }) : String.prototype.includes = d
        }(), String.prototype.startsWith || ! function() {
            var a = function() {
                    try {
                        var a = {},
                            b = Object.defineProperty,
                            c = b(a, a, a) && b
                    } catch (a) {}
                    return c
                }(),
                b = {}.toString,
                c = function(a) {
                    if (null == this) throw new TypeError;
                    var c = String(this);
                    if (a && "[object RegExp]" == b.call(a)) throw new TypeError;
                    var d = c.length,
                        e = String(a),
                        f = e.length,
                        g = arguments.length > 1 ? arguments[1] : void 0,
                        h = g ? Number(g) : 0;
                    h != h && (h = 0);
                    var i = Math.min(Math.max(h, 0), d);
                    if (f + i > d) return !1;
                    for (var j = -1; ++j < f;)
                        if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                    return !0
                };
            a ? a(String.prototype, "startsWith", {
                value: c,
                configurable: !0,
                writable: !0
            }) : String.prototype.startsWith = c
        }(), Object.keys || (Object.keys = function(a, b, c) {
            c = [];
            for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
            return c
        });
        var e = {
            useDefault: !1,
            _set: a.valHooks.select.set
        };
        a.valHooks.select.set = function(b, c) {
            return c && !e.useDefault && a(b).data("selected", !0), e._set.apply(this, arguments)
        };
        var f = null;
        a.fn.triggerNative = function(a) {
            var b, c = this[0];
            c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, {
                bubbles: !0
            }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)) : this.trigger(a)
        }, a.expr.pseudos.icontains = function(b, c, d) {
            var e = a(b),
                f = (e.data("tokens") || e.text()).toString().toUpperCase();
            return f.includes(d[3].toUpperCase())
        }, a.expr.pseudos.ibegins = function(b, c, d) {
            var e = a(b),
                f = (e.data("tokens") || e.text()).toString().toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        }, a.expr.pseudos.aicontains = function(b, c, d) {
            var e = a(b),
                f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();
            return f.includes(d[3].toUpperCase())
        }, a.expr.pseudos.aibegins = function(b, c, d) {
            var e = a(b),
                f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase();
            return f.startsWith(d[3].toUpperCase())
        };
        var g = function(b, c, d) {
            e.useDefault || (a.valHooks.select.set = e._set, e.useDefault = !0), d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = g.prototype.val, this.render = g.prototype.render, this.refresh = g.prototype.refresh, this.setStyle = g.prototype.setStyle, this.selectAll = g.prototype.selectAll, this.deselectAll = g.prototype.deselectAll, this.destroy = g.prototype.destroy, this.remove = g.prototype.remove, this.show = g.prototype.show, this.hide = g.prototype.hide, this.init()
        };
        g.VERSION = "1.11.0", g.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(a, b) {
                return 1 == a ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(a, b) {
                return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: "btn-secondary",
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1
        }, g.prototype = {
            constructor: g,
            init: function() {
                var b = this,
                    c = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) {
                    a.preventDefault(), b.$button.focus()
                })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(a) {
                        b.$menuInner.attr("aria-expanded", !1), b.$element.trigger("hide.bs.select", a)
                    },
                    "hidden.bs.dropdown": function(a) {
                        b.$element.trigger("hidden.bs.select", a)
                    },
                    "show.bs.dropdown": function(a) {
                        b.$menuInner.attr("aria-expanded", !0), b.$element.trigger("show.bs.select", a)
                    },
                    "shown.bs.dropdown": function(a) {
                        b.$element.trigger("shown.bs.select", a)
                    }
                }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    b.$button.addClass("bs-invalid").focus(), b.$element.on({
                        "focus.bs.select": function() {
                            b.$button.focus(), b.$element.off("focus.bs.select")
                        },
                        "shown.bs.select": function() {
                            b.$element.val(b.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select")
                        }
                    })
                }), setTimeout(function() {
                    b.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var b = this.multiple || this.options.showTick ? " show-tick" : "",
                    d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    e = this.autofocus ? " autofocus" : "",
                    f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
                    h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + f + g + h + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + i + "</div></div>";
                return a(j)
            },
            createView: function() {
                var a = this.createDropdown(),
                    b = this.createLi();
                return a.find("ul")[0].innerHTML = b, a
            },
            reloadLi: function() {
                this.destroyLi();
                var a = this.createLi();
                this.$menuInner[0].innerHTML = a
            },
            destroyLi: function() {
                this.$menu.find("li").remove()
            },
            createLi: function() {
                var d = this,
                    e = [],
                    f = 0,
                    g = document.createElement("option"),
                    h = -1,
                    i = function(a, b, c, d) {
                        return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>"
                    },
                    j = function(a, e, f, g) {
                        return e += " dropdown-item", '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>'
                    };
                if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
                    var k = this.$element[0];
                    g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild);
                    var l = a(k.options[k.selectedIndex]);
                    void 0 === l.attr("selected") && void 0 === this.$element.data("selected") && (g.selected = !0)
                }
                return this.$element.find("option").each(function(b) {
                    var c = a(this);
                    if (h++, !c.hasClass("bs-title-option")) {
                        var g = this.className || "",
                            k = this.style.cssText,
                            l = c.data("content") ? c.data("content") : c.html(),
                            m = c.data("tokens") ? c.data("tokens") : null,
                            n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
                            o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                            p = c.parent(),
                            q = "OPTGROUP" === p[0].tagName,
                            r = q && p[0].disabled,
                            s = this.disabled || r;
                        if ("" !== o && s && (o = "<span>" + o + "</span>"), d.options.hideDisabled && (s && !q || r)) return void h--;
                        if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), q && c.data("divider") !== !0) {
                            if (d.options.hideDisabled && s) {
                                if (void 0 === p.data("allOptionsDisabled")) {
                                    var t = p.children();
                                    p.data("allOptionsDisabled", t.filter(":disabled").length === t.length)
                                }
                                if (p.data("allOptionsDisabled")) return void h--
                            }
                            var u = " " + p[0].className || "";
                            if (0 === c.index()) {
                                f += 1;
                                var v = p[0].label,
                                    w = "undefined" != typeof p.data("subtext") ? '<small class="text-muted">' + p.data("subtext") + "</small>" : "",
                                    x = p.data("icon") ? '<span class="' + d.options.iconBase + " " + p.data("icon") + '"></span> ' : "";
                                v = x + '<span class="text">' + v + w + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(v, null, "dropdown-header" + u, f))
                            }
                            if (d.options.hideDisabled && s) return void h--;
                            e.push(i(j(l, "opt " + g + u, k, m), b, "", f))
                        } else if (c.data("divider") === !0) e.push(i("", b, "divider"));
                        else if (c.data("hidden") === !0) e.push(i(j(l, g, k, m), b, "hidden is-hidden"));
                        else {
                            var y = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                            if (!y && d.options.hideDisabled)
                                for (var z = a(this).prevAll(), A = 0; A < z.length; A++)
                                    if ("OPTGROUP" === z[A].tagName) {
                                        for (var B = 0, C = 0; C < A; C++) {
                                            var D = z[C];
                                            (D.disabled || a(D).data("hidden") === !0) && B++
                                        }
                                        B === A && (y = !0);
                                        break
                                    }
                            y && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b))
                        }
                        d.liObj[b] = h
                    }
                }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("")
            },
            findLis: function() {
                return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
            },
            render: function(b) {
                var c, d = this;
                b !== !1 && this.$element.find("option").each(function(a) {
                    var b = d.findLis().eq(d.liObj[a]);
                    d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b)
                }), this.togglePlaceholder(), this.tabIndex();
                var e = this.$element.find("option").map(function() {
                        if (this.selected) {
                            if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                            var b, c = a(this),
                                e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                            return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b
                        }
                    }).toArray(),
                    f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
                if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                    var g = this.options.selectedTextFormat.split(">");
                    if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
                        c = this.options.hideDisabled ? ", [disabled]" : "";
                        var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length,
                            i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                        f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString())
                    }
                }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(a, b) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var c = a ? a : this.options.style;
                "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
            },
            liHeight: function(b) {
                if (b || this.options.size !== !1 && !this.sizeInfo) {
                    var c = document.createElement("div"),
                        d = document.createElement("div"),
                        e = document.createElement("ul"),
                        f = document.createElement("li"),
                        g = document.createElement("li"),
                        h = document.createElement("a"),
                        i = document.createElement("span"),
                        j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        k = this.options.liveSearch ? document.createElement("div") : null,
                        l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                        var n = document.createElement("span");
                        k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
                    }
                    l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
                    var o = h.offsetHeight,
                        p = j ? j.offsetHeight : 0,
                        q = k ? k.offsetHeight : 0,
                        r = l ? l.offsetHeight : 0,
                        s = m ? m.offsetHeight : 0,
                        t = a(f).outerHeight(!0),
                        u = "function" == typeof getComputedStyle && getComputedStyle(d),
                        v = u ? null : a(d),
                        w = {
                            vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                            horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth"))
                        },
                        x = {
                            vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2,
                            horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2
                        };
                    document.body.removeChild(c), this.sizeInfo = {
                        liHeight: o,
                        headerHeight: p,
                        searchHeight: q,
                        actionsHeight: r,
                        doneButtonHeight: s,
                        dividerHeight: t,
                        menuPadding: w,
                        menuExtras: x
                    }
                }
            },
            setSize: function() {
                if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) {
                    var b, c, d, e, f, g, h, i, j = this,
                        k = this.$menu,
                        l = this.$menuInner,
                        m = a(window),
                        n = this.$newElement[0].offsetHeight,
                        o = this.$newElement[0].offsetWidth,
                        p = this.sizeInfo.liHeight,
                        q = this.sizeInfo.headerHeight,
                        r = this.sizeInfo.searchHeight,
                        s = this.sizeInfo.actionsHeight,
                        t = this.sizeInfo.doneButtonHeight,
                        u = this.sizeInfo.dividerHeight,
                        v = this.sizeInfo.menuPadding,
                        w = this.sizeInfo.menuExtras,
                        x = this.options.hideDisabled ? ".disabled" : "",
                        y = function() {
                            var b, c = j.$newElement.offset(),
                                d = a(j.options.container);
                            j.options.container && !d.is("body") ? (b = d.offset(), b.top += parseInt(d.css("borderTopWidth")), b.left += parseInt(d.css("borderLeftWidth"))) : b = {
                                top: 0,
                                left: 0
                            }, f = c.top - b.top - m.scrollTop(), g = m.height() - f - n - b.top, h = c.left - b.left - m.scrollLeft(), i = m.width() - h - o - b.left
                        };
                    if (y(), "auto" === this.options.size) {
                        var z = function() {
                            var m, n = function(b, c) {
                                    return function(d) {
                                        return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                                    }
                                },
                                u = j.$menuInner[0].getElementsByTagName("li"),
                                x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"),
                                z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header");
                            y(), b = g - w.vert, c = i - w.horiz, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height"), k.data("width") || k.data("width", k.width()), e = k.data("width")) : (d = k.height(), e = k.width()), j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d), j.$newElement.hasClass("dropup") && (b = f - w.vert), "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o), m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0, k.css({
                                "max-height": b + "px",
                                overflow: "hidden",
                                "min-height": m + q + r + s + t + "px"
                            });
                            var A = b - q - r - s - t;
                            A -= 16, l.css({
                                "max-height": A - v.vert + "px",
                                "overflow-y": "auto",
                                "min-height": Math.max(m - v.vert, 0) + "px"
                            })
                        };
                        z(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z), m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z)
                    } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) {
                        var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index(),
                            B = this.$lis.slice(0, A + 1).filter(".divider").length;
                        b = p * this.options.size + B * u + v.vert, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height")) : d = k.height(), j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d), k.css({
                            "max-height": b + q + r + s + t + "px",
                            overflow: "hidden",
                            "min-height": ""
                        }), l.css({
                            "max-height": b - v.vert + "px",
                            "overflow-y": "auto",
                            "min-height": ""
                        })
                    }
                }
            },
            setWidth: function() {
                if ("auto" === this.options.width) {
                    this.$menu.css("min-width", "0");
                    var a = this.$menu.parent().clone().appendTo("body"),
                        b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                        c = a.children(".dropdown-menu").outerWidth(),
                        d = b.css("width", "auto").children("button").outerWidth();
                    a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
                } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = a('<div class="bs-container" />');
                var b, c, d, e = this,
                    f = a(this.options.container),
                    g = function(a) {
                        e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), f.is("body") ? c = {
                            top: 0,
                            left: 0
                        } : (c = f.offset(), c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(), c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()), d = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.$bsContainer.css({
                            top: b.top - c.top + d,
                            left: b.left - c.left,
                            width: a[0].offsetWidth
                        })
                    };
                this.$button.on("click", function() {
                    var b = a(this);
                    e.isDisabled() || (g(e.$newElement), e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu))
                }), a(window).on("resize scroll", function() {
                    g(e.$newElement)
                }), this.$element.on("hide.bs.select", function() {
                    e.$menu.data("height", e.$menu.height()), e.$bsContainer.detach()
                })
            },
            setSelected: function(a, b, c) {
                c || (this.togglePlaceholder(), c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b).find("a").attr("aria-selected", b)
            },
            setDisabled: function(a, b, c) {
                c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var a = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), this.$button.attr("tabindex") != -1 || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                    return !a.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var a = this.$element.val();
                this.$button.toggleClass("bs-placeholder", null === a || "" === a)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && this.$element.attr("tabindex") !== -98 && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var b = this,
                    c = a(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) {
                    a.stopPropagation()
                }), c.data("spaceSelect", !1), this.$button.on("keyup", function(a) {
                    /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1))
                }), this.$button.on("click", function() {
                    b.setSize()
                }), this.$element.on("shown.bs.select", function() {
                    if (b.options.liveSearch || b.multiple) {
                        if (!b.multiple) {
                            var a = b.liObj[b.$element[0].selectedIndex];
                            if ("number" != typeof a || b.options.size === !1) return;
                            var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
                        }
                    } else b.$menuInner.find(".selected a").focus()
                }), this.$menuInner.on("click", "li a", function(c) {
                    var d = a(this),
                        e = d.parent().data("originalIndex"),
                        g = b.$element.val(),
                        h = b.$element.prop("selectedIndex"),
                        i = !0;
                    if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                        var j = b.$element.find("option"),
                            k = j.eq(e),
                            l = k.prop("selected"),
                            m = k.parent("optgroup"),
                            n = b.options.maxOptions,
                            o = m.data("maxOptions") || !1;
                        if (b.multiple) {
                            if (k.prop("selected", !l), b.setSelected(e, !l), d.blur(), n !== !1 || o !== !1) {
                                var p = n < j.filter(":selected").length,
                                    q = o < m.find("option:selected").length;
                                if (n && p || o && q)
                                    if (n && 1 == n) j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                                    else if (o && 1 == o) {
                                    m.find("option:selected").prop("selected", !1), k.prop("selected", !0);
                                    var r = d.parent().data("optgroup");
                                    b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"), b.setSelected(e, !0)
                                } else {
                                    var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText,
                                        t = "function" == typeof s ? s(n, o) : s,
                                        u = t[0].replace("{n}", n),
                                        v = t[1].replace("{n}", o),
                                        w = a('<div class="notify"></div>');
                                    t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]), v = v.replace("{var}", t[2][o > 1 ? 0 : 1])), k.prop("selected", !1), b.$menu.append(w), n && p && (w.append(a("<div>" + u + "</div>")), i = !1, b.$element.trigger("maxReached.bs.select")), o && q && (w.append(a("<div>" + v + "</div>")), i = !1, b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                        b.setSelected(e, !1)
                                    }, 10), w.delay(750).fadeOut(300, function() {
                                        a(this).remove()
                                    })
                                }
                            }
                        } else j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), b.setSelected(e, !0);
                        !b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(), i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (f = [e, k.prop("selected"), l], b.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(c) {
                    c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(a) {
                    a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
                }), this.$menu.on("click", ".popover-title .close", function() {
                    b.$button.click()
                }), this.$searchbox.on("click", function(a) {
                    a.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(c) {
                    b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
                }), this.$element.change(function() {
                    b.render(!1), b.$element.trigger("changed.bs.select", f), f = null
                })
            },
            liveSearchListener: function() {
                var d = this,
                    e = a('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                    d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                        d.$searchbox.focus()
                    }, 10)
                }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(a) {
                    a.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    if (d.$searchbox.val()) {
                        var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function() {
                            var b = a(this),
                                c = b.data("optgroup");
                            0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"))
                        });
                        var g = d.$lis.not(".hidden");
                        g.each(function(b) {
                            var c = a(this);
                            c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden")
                        }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e))
                    } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                    d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus()
                })
            },
            _searchStyle: function() {
                var a = {
                    begins: "ibegins",
                    startsWith: "ibegins"
                };
                return a[this.options.liveSearchStyle] || "icontains"
            },
            val: function(a) {
                return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
            },
            changeAll: function(b) {
                if (this.multiple) {
                    "undefined" == typeof b && (b = !0), this.findLis();
                    var c = this.$element.find("option"),
                        d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
                        e = d.length,
                        f = [];
                    if (b) {
                        if (d.filter(".selected").length === d.length) return
                    } else if (0 === d.filter(".selected").length) return;
                    d.toggleClass("selected", b);
                    for (var g = 0; g < e; g++) {
                        var h = d[g].getAttribute("data-original-index");
                        f[f.length] = c.eq(h)[0]
                    }
                    a(f).prop("selected", b), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(a) {
                a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click")
            },
            keydown: function(c) {
                var d, e, f, g, h, i, j, k, l, m = a(this),
                    n = m.is("input") ? m.parent().parent() : m.parent(),
                    o = n.data("this"),
                    p = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    q = {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9"
                    };
                if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a('[role="listbox"] li', n), l = o.$newElement.hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90)) return o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), void o.$searchbox.focus();
                if (o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (c.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()), d = a('[role="listbox"] li' + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), d.length) {
                    if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function(b) {
                        a(this).hasClass("disabled") || a(this).data("index", b)
                    }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, e != j && e > i && (e = i), e < g && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, e == -1 && (e = 0), e != j && e < f && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).children("a").focus();
                    else if (!m.is("input")) {
                        var r, s, t = [];
                        d.each(function() {
                            a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index())
                        }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0),
                            r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus()
                    }
                    if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
                        if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), m.focus());
                        else {
                            var u = a(":focus");
                            u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0)
                        }
                        a(document).data("keycount", 0)
                    }(/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus())
                }
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var h = a.fn.selectpicker;
        a.fn.selectpicker = d, a.fn.selectpicker.Constructor = g, a.fn.selectpicker.noConflict = function() {
            return a.fn.selectpicker = h, this
        }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', g.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(a) {
            a.stopPropagation()
        }), a(window).on("load.bs.select.data-api", function() {
            a(".selectpicker").each(function() {
                var b = a(this);
                d.call(b, b.data())
            })
        })
    }(a)
});



/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || [];
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }

    function o(t, e, r) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(t, e, r)
    }

    function r(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var h = t.jQuery,
        a = t.console;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});