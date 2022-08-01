! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ThreeSixty = t() : e.ThreeSixty = t()
}(window, (function () {
    return function (e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var o = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (n.r(i), Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) n.d(i, o, function (t) {
                    return e[t]
                }.bind(null, o));
            return i
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 2)
    }([function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        "use strict";
        (function (e) {
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function i(e, t) {
                var n = t.get(e);
                if (!n) throw new TypeError("attempted to get private field on non-instance");
                return n.get ? n.get.call(e) : n.value
            }

            function o(e, t, n) {
                var i = t.get(e);
                if (!i) throw new TypeError("attempted to set private field on non-instance");
                if (i.set) i.set.call(e, n);
                else {
                    if (!i.writable) throw new TypeError("attempted to set read only private field");
                    i.value = n
                }
                return n
            }
            var s = function () {
                    function t(e, n) {
                        var s = this;
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), r.set(this, {
                            writable: !0,
                            value: null
                        }), a.set(this, {
                            writable: !0,
                            value: null
                        }), u.set(this, {
                            writable: !0,
                            value: null
                        }), o(this, a, n), o(this, u, {
                            container: {
                                mousedown: function (e) {
                                    return o(s, r, e.pageX)
                                },
                                touchstart: function (e) {
                                    return o(s, r, e.touches[0].clientX)
                                },
                                touchend: function () {
                                    return o(s, r, null)
                                }
                            },
                            prev: {
                                mousedown: function (t) {
                                    t.preventDefault(), e.play(!0)
                                },
                                mouseup: function (t) {
                                    t.preventDefault(), e.stop()
                                },
                                touchstart: function (t) {
                                    t.preventDefault(), e.prev()
                                }
                            },
                            next: {
                                mousedown: function (t) {
                                    t.preventDefault(), e.play()
                                },
                                mouseup: function (t) {
                                    t.preventDefault(), e.stop()
                                },
                                touchstart: function (t) {
                                    t.preventDefault(), e.next()
                                }
                            },
                            global: {
                                mouseup: function () {
                                    return o(s, r, null)
                                },
                                mousemove: function (t) {
                                    i(s, r) && Math.abs(i(s, r) - t.pageX) > i(s, a).dragTolerance && (e.stop(), i(s, r) > t.pageX ? e.prev() : e.next(), o(s, r, t.pageX))
                                },
                                touchmove: function (t) {
                                    i(s, r) && Math.abs(i(s, r) - t.touches[0].clientX) > i(s, a).swipeTolerance && (e.stop(), i(s, r) > t.touches[0].clientX ? e.prev() : e.next(), o(s, r, t.touches[0].clientX))
                                },
                                keydown: function (t) {
                                    [37, 39].includes(t.keyCode) && e.play(37 === t.keyCode)
                                },
                                keyup: function (t) {
                                    [37, 39].includes(t.keyCode) && e.stop()
                                }
                            }
                        }), this._initEvents()
                    }
                    var s, h, c;
                    return s = t, (h = [{
                        key: "destroy",
                        value: function () {
                            i(this, a).swipeTarget.removeEventListener("mousedown", i(this, u).container.mousedown), i(this, a).swipeTarget.removeEventListener("touchstart", i(this, u).container.touchstart), i(this, a).swipeTarget.removeEventListener("touchend", i(this, u).container.touchend), e.removeEventListener("mouseup", i(this, u).global.mouseup), e.removeEventListener("mousemove", i(this, u).global.mousemove), e.removeEventListener("touchmove", i(this, u).global.touchmove), e.removeEventListener("keydown", i(this, u).global.keydown), e.removeEventListener("keyup", i(this, u).global.keyup), i(this, a).prev && (i(this, a).prev.removeEventListener("mousedown", i(this, u).prev.mousedown), i(this, a).prev.removeEventListener("mouseup", i(this, u).prev.mouseup), i(this, a).prev.removeEventListener("touchstart", i(this, u).prev.touchstart)), i(this, a).next && (i(this, a).next.removeEventListener("mousedown", i(this, u).next.mousedown), i(this, a).next.removeEventListener("mouseup", i(this, u).next.mouseup), i(this, a).next.removeEventListener("touchstart", i(this, u).next.touchstart))
                        }
                    }, {
                        key: "_initEvents",
                        value: function () {
                            i(this, a).draggable && (i(this, a).swipeTarget.addEventListener("mousedown", i(this, u).container.mousedown), e.addEventListener("mouseup", i(this, u).global.mouseup), e.addEventListener("mousemove", i(this, u).global.mousemove)), i(this, a).swipeable && (i(this, a).swipeTarget.addEventListener("touchstart", i(this, u).container.touchstart), i(this, a).swipeTarget.addEventListener("touchend", i(this, u).container.touchend), e.addEventListener("touchmove", i(this, u).global.touchmove)), i(this, a).keys && (e.addEventListener("keydown", i(this, u).global.keydown), e.addEventListener("keyup", i(this, u).global.keyup)), i(this, a).prev && (i(this, a).prev.addEventListener("mousedown", i(this, u).prev.mousedown), i(this, a).prev.addEventListener("mouseup", i(this, u).prev.mouseup), i(this, a).prev.addEventListener("touchstart", i(this, u).prev.touchstart)), i(this, a).next && (i(this, a).next.addEventListener("mousedown", i(this, u).next.mousedown), i(this, a).next.addEventListener("mouseup", i(this, u).next.mouseup), i(this, a).next.addEventListener("touchstart", i(this, u).next.touchstart))
                        }
                    }]) && n(s.prototype, h), c && n(s, c), t
                }(),
                r = new WeakMap,
                a = new WeakMap,
                u = new WeakMap;
            t.a = s
        }).call(this, n(0))
    }, function (e, t, n) {
        "use strict";
        n.r(t),
            function (e) {
                var i = n(1);

                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function s(e, t) {
                    var n = t.get(e);
                    if (!n) throw new TypeError("attempted to get private field on non-instance");
                    return n.get ? n.get.call(e) : n.value
                }

                function r(e, t, n) {
                    var i = t.get(e);
                    if (!i) throw new TypeError("attempted to set private field on non-instance");
                    if (i.set) i.set.call(e, n);
                    else {
                        if (!i.writable) throw new TypeError("attempted to set read only private field");
                        i.value = n
                    }
                    return n
                }
                var a = function () {
                        function t(e, n) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), u.set(this, {
                                writable: !0,
                                value: null
                            }), h.set(this, {
                                writable: !0,
                                value: 0
                            }), c.set(this, {
                                writable: !0,
                                value: null
                            }), l.set(this, {
                                writable: !0,
                                value: !1
                            }), p.set(this, {
                                writable: !0,
                                value: null
                            }), v.set(this, {
                                writable: !0,
                                value: !1
                            }), this.container = e, r(this, u, Object.assign({
                                width: 300,
                                height: 300,
                                aspectRatio: 0,
                                count: 0,
                                perRow: 0,
                                speed: 100,
                                dragTolerance: 10,
                                swipeTolerance: 10,
                                draggable: !0,
                                swipeable: !0,
                                keys: !0,
                                inverted: !1
                            }, n)), s(this, u).swipeTarget = s(this, u).swipeTarget || this.container, r(this, v, !Array.isArray(s(this, u).image)), this.sprite || (s(this, u).count = s(this, u).image.length), Object.freeze(s(this, u)), r(this, p, new i.a(this, s(this, u))), this._windowResizeListener = this._windowResizeListener.bind(this), this._initContainer()
                        }
                        var n, a, d;
                        return n = t, (a = [{
                            key: "next",
                            value: function () {
                                this.goto(s(this, u).inverted ? s(this, h) - 1 : s(this, h) + 1)
                            }
                        }, {
                            key: "prev",
                            value: function () {
                                this.goto(s(this, u).inverted ? s(this, h) + 1 : s(this, h) - 1)
                            }
                        }, {
                            key: "goto",
                            value: function (e) {
                                r(this, h, (s(this, u).count + e) % s(this, u).count), this._update()
                            }
                        }, {
                            key: "play",
                            value: function (e) {
                                this.looping || (this._loop(e), r(this, l, !0))
                            }
                        }, {
                            key: "stop",
                            value: function () {
                                this.looping && (e.clearTimeout(s(this, c)), r(this, l, !1))
                            }
                        }, {
                            key: "toggle",
                            value: function (e) {
                                this.looping ? this.stop() : this.play(e)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.stop(), s(this, p).destroy(), this.container.style.width = "", this.container.style.height = "", this.container.style.backgroundImage = "", this.container.style.backgroundPositionX = "", this.container.style.backgroundPositionY = "", this.container.style.backgroundSize = "", this.isResponsive && window.removeEventListener("resize", this._windowResizeListener)
                            }
                        }, {
                            key: "_loop",
                            value: function (t) {
                                var n = this;
                                t ? this.prev() : this.next(), r(this, c, e.setTimeout((function () {
                                    n._loop(t)
                                }), s(this, u).speed))
                            }
                        }, {
                            key: "_update",
                            value: function () {
                                this.sprite ? (this.container.style.backgroundPositionX = -s(this, h) % s(this, u).perRow * this.containerWidth + "px", this.container.style.backgroundPositionY = -Math.floor(s(this, h) / s(this, u).perRow) * this.containerHeight + "px") : this.container.style.backgroundImage = 'url("'.concat(s(this, u).image[s(this, h)], '")')
                            }
                        }, {
                            key: "_windowResizeListener",
                            value: function () {
                                this.container.style.height = this.containerHeight + "px", this._update()
                            }
                        }, {
                            key: "_initContainer",
                            value: function () {
                                if (this.isResponsive || (this.container.style.width = this.containerWidth + "px"), this.container.style.height = this.containerHeight + "px", this.sprite) {
                                    this.container.style.backgroundImage = 'url("'.concat(s(this, u).image, '")');
                                    var e = s(this, u).perRow,
                                        t = Math.ceil(s(this, u).count / s(this, u).perRow);
                                    this.container.style.backgroundSize = 100 * e + "% " + 100 * t + "%"
                                }
                                this.isResponsive && window.addEventListener("resize", this._windowResizeListener), this._update()
                            }
                        }, {
                            key: "isResponsive",
                            get: function () {
                                return s(this, u).aspectRatio > 0
                            }
                        }, {
                            key: "containerWidth",
                            get: function () {
                                return this.isResponsive ? this.container.clientWidth : s(this, u).width
                            }
                        }, {
                            key: "containerHeight",
                            get: function () {
                                return this.isResponsive ? this.container.clientWidth * s(this, u).aspectRatio : s(this, u).height
                            }
                        }, {
                            key: "index",
                            get: function () {
                                return s(this, h)
                            }
                        }, {
                            key: "looping",
                            get: function () {
                                return s(this, l)
                            }
                        }, {
                            key: "sprite",
                            get: function () {
                                return s(this, v)
                            }
                        }]) && o(n.prototype, a), d && o(n, d), t
                    }(),
                    u = new WeakMap,
                    h = new WeakMap,
                    c = new WeakMap,
                    l = new WeakMap,
                    p = new WeakMap,
                    v = new WeakMap;
                t.default = a
            }.call(this, n(0))
    }]).default
}));