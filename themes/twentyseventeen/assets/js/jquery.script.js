/*
 * The Typekit service used to deliver this font or fonts for use on websites
 * is provided by Adobe and is subject to these Terms of Use
 * http://www.adobe.com/products/eulas/tou_typekit. For font license
 * information, see the list below.
 *
 * clavo:
 *   - http://typekit.com/eulas/000000000000000000014711
 *   - http://typekit.com/eulas/000000000000000000014712
 * proxima-nova:
 *   - http://typekit.com/eulas/00000000000000003b9b0932
 *   - http://typekit.com/eulas/00000000000000003b9b0933
 *
 * © 2009-2018 Adobe Systems Incorporated. All Rights Reserved.
 */
if (!window.Typekit) window.Typekit = {};
window.Typekit.config = {
    "a": "402893",
    "c": [".tk-proxima-nova", "\"proxima-nova\",sans-serif", ".tk-clavo", "\"clavo\",sans-serif"],
    "dl": "AAAAZQAAAApx04DZ25kBMR0-P1gAAAAD",
    "fi": [5474, 5475, 22153, 22154],
    "fc": [{
        "id": 5474,
        "family": "proxima-nova",
        "src": "https://use.typekit.net/af/12260d/00000000000000003b9b0932/27/{format}{?primer,subset_id,fvd,v}",
        "descriptors": {
            "weight": "300",
            "style": "normal",
            "primer": "fac139901e895861a7a2f15f683e42a34feac8e6cf6c36994207434a2de7e913"
        }
    }, {
        "id": 5475,
        "family": "proxima-nova",
        "src": "https://use.typekit.net/af/22a23d/00000000000000003b9b0933/27/{format}{?primer,subset_id,fvd,v}",
        "descriptors": {
            "weight": "300",
            "style": "italic",
            "primer": "fac139901e895861a7a2f15f683e42a34feac8e6cf6c36994207434a2de7e913"
        }
    }, {
        "id": 22153,
        "family": "clavo",
        "src": "https://use.typekit.net/af/490019/000000000000000000014711/27/{format}{?primer,subset_id,fvd,v}",
        "descriptors": {
            "weight": "400",
            "style": "normal",
            "primer": "fac139901e895861a7a2f15f683e42a34feac8e6cf6c36994207434a2de7e913"
        }
    }, {
        "id": 22154,
        "family": "clavo",
        "src": "https://use.typekit.net/af/8222d8/000000000000000000014712/27/{format}{?primer,subset_id,fvd,v}",
        "descriptors": {
            "weight": "400",
            "style": "italic",
            "primer": "fac139901e895861a7a2f15f683e42a34feac8e6cf6c36994207434a2de7e913"
        }
    }],
    "fn": ["clavo", ["i4", "n4"], "proxima-nova", ["i3", "n3"]],
    "hn": "use.typekit.net",
    "ht": "tk",
    "js": "1.19.0",
    "kt": "swa5ely",
    "l": "typekit",
    "ps": 1,
    "ping": "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",
    "pm": true,
    "type": "configurable",
    "vft": false
};
/*{"k":"1.19.0","auto_updating":true,"last_published":"2017-12-18 17:25:07 UTC"}*/
;
(function(window, document, undefined) {
    if (!document.querySelector) {
        document.documentElement.className += " wf-inactive";
        return;
    }

    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function h(a, b, c) {
        h = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return h.apply(null, arguments)
    }
    var m = Date.now || function() {
        return +new Date
    };

    function ca(a) {
        this.g = a || "-"
    }
    ca.prototype.b = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.g)
    };

    function ea() {
        var a = [{
            name: "font-family",
            value: n.c[p + 1]
        }];
        this.g = [n.c[p]];
        this.b = a
    }

    function fa(a) {
        for (var b = a.g.join(","), c = [], d = 0; d < a.b.length; d++) {
            var e = a.b[d];
            c.push(e.name + ":" + e.value + ";")
        }
        return b + "{" + c.join("") + "}"
    };

    function q(a, b) {
        return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16)
    };

    function r(a, b) {
        this.b = b || Array(Math.ceil(a / 32));
        if (!b)
            for (var c = 0; c < this.b.length; c++) this.b[c] = 0
    }
    r.prototype.set = function(a) {
        if (Math.floor(a / 32 + 1) > this.b.length) throw Error("Index is out of bounds.");
        var b = Math.floor(a / 32);
        this.b[b] |= 1 << a - 32 * b
    };
    r.prototype.has = function(a) {
        if (Math.floor(a / 32 + 1) > this.b.length) throw Error("Index is out of bounds.");
        var b = Math.floor(a / 32);
        return !!(this.b[b] & 1 << a - 32 * b)
    };

    function ga(a, b, c) {
        this.b = a;
        this.i = b;
        this.g = new r(a, c)
    }
    var ha = [2449897292, 4218179547, 2675077685, 1031960064, 1478620578, 1386343184, 3194259988, 2656050674, 3012733295, 2193273665];
    ga.prototype.has = function(a) {
        if ("string" !== typeof a && "number" !== typeof a) throw Error("Value should be a string or number.");
        for (var b = "number" === typeof a, c = 0; c < this.i; c++) {
            var d;
            if (b) d = q(a & 4294967295, 3432918353), d = d << 15 | d >>> 17, d = q(d, 461845907), d ^= ha[c] || 0, d = d << 13 | d >>> 19, d = q(d, 5) + 3864292196, d ^= 4, d ^= d >>> 16, d = q(d, 2246822507), d ^= d >>> 13, d = q(d, 3266489909), d ^= d >>> 16, d = (d >>> 0) % this.b;
            else {
                d = ha[c] || 0;
                var e, f, g = a.length % 4,
                    k = a.length - g;
                for (f = 0; f < k; f += 4) e = (a.charCodeAt(f + 0) & 4294967295) << 0 | (a.charCodeAt(f + 1) &
                    4294967295) << 8 | (a.charCodeAt(f + 2) & 4294967295) << 16 | (a.charCodeAt(f + 3) & 4294967295) << 24, e = q(e, 3432918353), e = e << 15 | e >>> 17, e = q(e, 461845907), d ^= e, d = d << 13 | d >>> 19, d = q(d, 5) + 3864292196;
                e = 0;
                switch (g) {
                    case 3:
                        e ^= (a.charCodeAt(f + 2) & 4294967295) << 16;
                    case 2:
                        e ^= (a.charCodeAt(f + 1) & 4294967295) << 8;
                    case 1:
                        e ^= (a.charCodeAt(f + 0) & 4294967295) << 0, e = q(e, 3432918353), e = e << 15 | e >>> 17, e = q(e, 461845907), d ^= e
                }
                d ^= a.length;
                d = q(d ^ d >>> 16, 2246822507);
                d = q(d ^ d >>> 13, 3266489909);
                d = ((d ^ d >>> 16) >>> 0) % this.b
            }
            if (!this.g.has(d)) return !1
        }
        return !0
    };

    function ia(a) {
        a.length % 4 && (a += Array(5 - a.length % 4).join("="));
        a = a.replace(/\-/g, "+").replace(/\_/g, "/");
        if (window.atob) a = window.atob(a);
        else {
            a = a.replace(/=+$/, "");
            if (1 == a.length % 4) throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var b = 0, c, d, e = 0, f = ""; d = a.charAt(e++); ~d && (c = b % 4 ? 64 * c + d : d, b++ % 4) ? f += String.fromCharCode(255 & c >> (-2 * b & 6)) : 0) d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(d);
            a = f
        }
        c = [];
        for (b = 0; b < a.length; b += 4) c.push(a.charCodeAt(b) <<
            24 | a.charCodeAt(b + 1) << 16 | a.charCodeAt(b + 2) << 8 | a.charCodeAt(b + 3) << 0);
        a = c.shift();
        b = c.shift();
        this.b = new ga(a, b, c)
    }
    ia.prototype.has = function(a) {
        if ("" === a) return !0;
        for (a = a.split("."); a.length;) {
            var b = a.join("."),
                c = "*." + b;
            if (this.b.has(b) || this.b.has(c) || this.b.has(encodeURIComponent(b)) || this.b.has(encodeURIComponent(c))) return !0;
            a.shift()
        }
        return !1
    };

    function t(a, b, c, d) {
        b = a.b.createElement(b);
        if (c)
            for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.b.createTextNode(d));
        return b
    }

    function u(a, b, c) {
        a = a.b.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild)
    }

    function ja(a, b) {
        a.b.body ? b() : a.b.addEventListener ? a.b.addEventListener("DOMContentLoaded", b) : a.b.attachEvent("onreadystatechange", function() {
            "interactive" != a.b.readyState && "complete" != a.b.readyState || b()
        })
    }

    function v(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function w(a, b, c) {
        var d = b || [];
        c = c || [];
        b = a.className.split(/\s+/);
        for (var e, f = 0; f < d.length; f += 1) {
            e = !1;
            for (var g = 0; g < b.length; g += 1)
                if (d[f] === b[g]) {
                    e = !0;
                    break
                }
            e || b.push(d[f])
        }
        d = [];
        for (f = 0; f < b.length; f += 1) {
            e = !1;
            for (g = 0; g < c.length; g += 1)
                if (b[f] === c[g]) {
                    e = !0;
                    break
                }
            e || d.push(b[f])
        }
        a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function ka(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return !0;
        return !1
    }

    function z(a, b) {
        var c = t(a, "style");
        c.setAttribute("type", "text/css");
        c.styleSheet ? (u(a, "head", c), c.styleSheet.cssText = b) : (c.appendChild(document.createTextNode(b)), u(a, "head", c))
    }

    function la(a, b, c) {
        var d = a.b.getElementsByTagName("head")[0];
        if (d) {
            var e = t(a, "script", {
                    src: b
                }),
                f = !1;
            e.onload = e.onreadystatechange = function() {
                f || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (f = !0, c && c(null), e.onload = e.onreadystatechange = null, "HEAD" == e.parentNode.tagName && d.removeChild(e))
            };
            d.appendChild(e);
            setTimeout(function() {
                f || (f = !0, c && c(Error("Script load timeout")))
            }, 5E3)
        }
    };

    function A(a, b, c) {
        this.g = a.g.document.documentElement;
        this.j = b;
        this.m = c;
        this.b = new ca("-");
        this.o = !1 !== b.events;
        this.i = !1 !== b.classes
    }

    function B(a) {
        if (a.i) {
            var b = ka(a.g, a.b.b("wf", "active")),
                c = [],
                d = [a.b.b("wf", "loading")];
            b || c.push(a.b.b("wf", "inactive"));
            w(a.g, c, d)
        }
        C(a, "inactive")
    }

    function C(a, b, c) {
        if (a.o && a.j[b]) try {
            if (c) a.j[b](c.b, D(c));
            else a.j[b]()
        } catch (d) {
            console.error('Typekit: Error in "' + b + '" callback', d)
        }
        if (a.m[b])
            if (c) a.m[b](c.b, D(c));
            else a.m[b]()
    };

    function ma(a, b, c) {
        c = c || {};
        this.b = a;
        this.g = b;
        this.weight = c.weight || "400";
        this.style = c.style || "normal";
        this.B = c.primer || void 0;
        this.C = c.subset_id || void 0
    }

    function E(a) {
        return ("tk-" + a.b).slice(0, 26) + "-" + D(a)
    }

    function F(a, b) {
        return new ma(b, a.g, {
            weight: a.weight,
            style: a.style,
            B: a.B,
            C: a.C
        })
    }

    function D(a) {
        return a.style.charAt(0) + a.weight.charAt(0)
    }

    function oa(a) {
        var b = a.charAt(0);
        a = a.charAt(1);
        /[1-9]/.test(a) || (a = 4);
        return {
            style: "i" === b ? "italic" : "o" === b ? "oblique" : "normal",
            weight: a + "00"
        }
    };

    function pa() {
        var a = document,
            b = navigator.userAgent;
        if (/MSIE|Trident/.test(b) && (a.documentMode ? 9 > a.documentMode : 1)) b = "i";
        else {
            a: {
                if (/AppleWebKit/.test(b) && /Android/.test(b) && !/OPR|Chrome|CrMo|CriOS/.test(b) && (a = /Android ([^;)]+)/.exec(b)) && a[1]) {
                    a = parseFloat(a[1]);
                    a = 3.1 <= a && 4.1 > a;
                    break a
                }
                a = !1
            }
            if (!a) a: {
                if (/Silk/.test(b) && /Linux|Ubuntu|Android/.test(b) && (b = /Silk\/([\d\._]+)/.exec(b)) && b[1]) {
                    a = 2 <= parseFloat(b[1]);
                    break a
                }
                a = !1
            }
            b = a ? "j" : "k"
        }
        return b
    };

    function G(a) {
        this.b = a
    }

    function H(a, b) {
        return a.b.replace(/\{([^\{\}]+)\}/g, function(a, d) {
            if ("?" == d.charAt(0)) {
                for (var e = d.slice(1).split(","), f = [], g = 0; g < e.length; g++) b[e[g]] && f.push(e[g] + "=" + encodeURIComponent(b[e[g]]));
                return f.length ? "?" + f.join("&") : ""
            }
            return encodeURIComponent(b[d] || "")
        })
    };

    function I() {
        this.b = []
    }

    function qa(a, b) {
        for (var c = 0; c < b.length; c++) a.b.push(b[c])
    }

    function J(a, b) {
        for (var c = 0; c < a.b.length; c++) b(a.b[c], c, a)
    }

    function ra(a, b) {
        if ("i" === b) {
            var c = {},
                d = new I;
            J(a, function(a) {
                c[a.b] || (c[a.b] = {});
                c[a.b][a.weight] || (c[a.b][a.weight] = []);
                c[a.b][a.weight].push(a)
            });
            for (var e in c) {
                for (var f = [400, 300, 200, 100, 500, 600, 700, 800, 900], g = 400, k = 0; k < f.length; k++)
                    if (g = f[k], c[e][g]) {
                        qa(d, c[e][g]);
                        break
                    }
                f = [700, 800, 900, 600, 500, 400, 300, 200, 100];
                for (k = 0; k < f.length; k++) {
                    var l = f[k];
                    if (c[e][l] && g !== l) {
                        qa(d, c[e][l]);
                        break
                    }
                }
            }
            J(a, function(a) {
                a = F(a, a.b.replace(/(-1|-2)$/, "").slice(0, 28) + "-" + D(a));
                d.b.push(a)
            });
            return d
        }
        return "x" === b ?
            new I : a
    }

    function sa(a, b, c) {
        for (var d = [], e = 0; e < b.length; e++) {
            var f = b[e],
                g = H(new G(a.g), {
                    format: f,
                    primer: a.B,
                    subset_id: a.C,
                    fvd: D(a),
                    extension: ta(f),
                    token: c,
                    v: "3"
                });
            "i" === f ? d.push("url(" + g + ")") : d.push("url(" + g + ') format("' + ua(f) + '")')
        }
        return d.join(",")
    }

    function wa(a, b, c, d) {
        if ("x" === b) return "";
        var e = [];
        e.push("font-family:" + (d ? E(a) : a.b));
        b = "k" === b ? sa(a, ["l", "d", "a"], c) : sa(a, [b], c);
        e.push("src:" + b);
        e.push("font-weight:" + a.weight);
        e.push("font-style:" + a.style);
        return "@font-face{" + e.join(";") + ";}"
    }

    function ua(a) {
        switch (a) {
            case "d":
                return "woff";
            case "i":
                return "eot";
            case "l":
                return "woff2";
            default:
                return "opentype"
        }
    }

    function ta(a) {
        switch (a) {
            case "d":
                return "woff";
            case "i":
                return "eot";
            case "l":
                return "woff2";
            default:
                return "otf"
        }
    }

    function K(a, b, c, d) {
        var e = [];
        J(a, function(a) {
            e.push(wa(a, b, c, d))
        });
        return e.join("")
    };

    function L(a, b) {
        this.g = a;
        this.i = b;
        this.b = t(this.g, "span", {
            "aria-hidden": "true"
        }, this.i)
    }

    function M(a) {
        u(a.g, "body", a.b)
    }

    function N(a) {
        return "display:block !important;position:absolute !important;top:-9999px !important;left:-9999px !important;font-size:300px !important;width:auto !important;height:auto !important;line-height:normal !important;margin:0 !important;padding:0 !important;font-variant:normal !important;white-space:nowrap !important;font-family:" + a.b + " !important;font-weight:" + a.weight + " !important;font-style:" + a.style + " !important;"
    };

    function xa(a, b, c, d, e, f, g, k) {
        this.D = a;
        this.H = b;
        this.u = c;
        this.b = d;
        this.w = g || "BESbswy";
        this.g = {};
        this.I = e || 3E3;
        this.G = k;
        this.A = f || null;
        this.i = new L(this.u, this.w);
        this.j = new L(this.u, this.w);
        this.m = new L(this.u, this.w);
        this.o = new L(this.u, this.w);
        a = this.G ? E(this.b) : this.b.b;
        this.i.b.style.cssText = N(F(this.b, a + ",serif"));
        this.j.b.style.cssText = N(F(this.b, a + ",sans-serif"));
        this.m.b.style.cssText = N(F(this.b, "serif"));
        this.o.b.style.cssText = N(F(this.b, "sans-serif"));
        M(this.i);
        M(this.j);
        M(this.m);
        M(this.o)
    }
    var O = {
            K: "serif",
            J: "sans-serif"
        },
        P = null;

    function ya() {
        if (null === P) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            P = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return P
    }
    xa.prototype.start = function() {
        this.g.serif = this.m.b.offsetWidth;
        this.g["sans-serif"] = this.o.b.offsetWidth;
        this.F = m();
        za(this)
    };

    function Aa(a, b, c) {
        for (var d in O)
            if (O.hasOwnProperty(d) && b === a.g[O[d]] && c === a.g[O[d]]) return !0;
        return !1
    }

    function za(a) {
        var b = a.i.b.offsetWidth,
            c = a.j.b.offsetWidth,
            d;
        (d = b === a.g.serif && c === a.g["sans-serif"]) || (d = ya() && Aa(a, b, c));
        d ? m() - a.F >= a.I ? ya() && Aa(a, b, c) && (!a.A || a.A.hasOwnProperty(a.b.b)) ? Q(a, a.D) : Q(a, a.H) : Ba(a) : Q(a, a.D)
    }

    function Ba(a) {
        setTimeout(h(function() {
            za(this)
        }, a), 50)
    }

    function Q(a, b) {
        setTimeout(h(function() {
            v(this.i.b);
            v(this.j.b);
            v(this.m.b);
            v(this.o.b);
            b(this.b)
        }, a), 0)
    };

    function Ca(a, b, c, d, e, f, g) {
        this.i = a;
        this.u = b;
        this.b = d;
        this.m = c;
        this.g = e || 3E3;
        this.o = f || void 0;
        this.j = g
    }
    Ca.prototype.start = function() {
        var a = this.m.g.document,
            b = this,
            c = m(),
            d = new Promise(function(d, e) {
                function k() {
                    m() - c >= b.g ? e() : a.fonts.load(b.b.style + " " + b.b.weight + " 300px " + (b.j ? E(b.b) : b.b.b), b.o).then(function(a) {
                        1 <= a.length ? d() : setTimeout(k, 25)
                    }, function() {
                        e()
                    })
                }
                k()
            }),
            e = new Promise(function(a, c) {
                setTimeout(c, b.g)
            });
        Promise.race([e, d]).then(function() {
            b.i(b.b)
        }, function() {
            b.u(b.b)
        })
    };

    function Da(a, b, c, d) {
        this.w = a;
        this.b = b;
        this.g = 0;
        this.o = this.m = !1;
        this.A = c;
        this.u = d
    }
    var R = null;

    function Ea(a, b, c) {
        var d = {},
            e = b.b.length;
        if (!e && c) B(a.b);
        else {
            a.g += e;
            c && (a.m = c);
            var f = [];
            J(b, function(b) {
                var c = a.b;
                c.i && w(c.g, [c.b.b("wf", b.b, D(b), "loading")]);
                C(c, "fontloading", b);
                c = null;
                if (null === R)
                    if (window.FontFace) {
                        var e = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                            na = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        R = e ? 42 < parseInt(e[1], 10) : na && /Apple/.exec(window.navigator.vendor) ? 603 <= parseInt(na[1], 10) : !0
                    } else R = !1;
                R ? c = new Ca(h(a.i, a), h(a.j,
                    a), a.w, b, a.A, "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006", a.u) : c = new xa(h(a.i, a), h(a.j, a), a.w, b, a.A, d, "BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006", a.u);
                f.push(c)
            });
            for (b = 0; b < f.length; b++) f[b].start()
        }
    }
    Da.prototype.i = function(a) {
        var b = this.b;
        b.i && w(b.g, [b.b.b("wf", a.b, D(a), "active")], [b.b.b("wf", a.b, D(a), "loading"), b.b.b("wf", a.b, D(a), "inactive")]);
        C(b, "fontactive", a);
        this.o = !0;
        Fa(this)
    };
    Da.prototype.j = function(a) {
        var b = this.b;
        if (b.i) {
            var c = ka(b.g, b.b.b("wf", a.b, D(a), "active")),
                d = [],
                e = [b.b.b("wf", a.b, D(a), "loading")];
            c || d.push(b.b.b("wf", a.b, D(a), "inactive"));
            w(b.g, d, e)
        }
        C(b, "fontinactive", a);
        Fa(this)
    };

    function Fa(a) {
        !--a.g && a.m && (a.o ? (a = a.b, a.i && w(a.g, [a.b.b("wf", "active")], [a.b.b("wf", "loading"), a.b.b("wf", "inactive")]), C(a, "active")) : B(a.b))
    };

    function S(a) {
        this.b = a;
        this.m = null;
        this.g = [];
        this.j = this.w = null;
        this.u = new I;
        this.o = this.i = null
    }
    var Ga = null,
        T = "00000000000000003b9b12ea 00000000000000003b9b12ed 00000000000000003b9b12ef 00000000000000003b9b12f0 00000000000000003b9b12f2 00000000000000003b9b12f3".split(" ");

    function Ha() {
        null === Ga && (Ga = window.CSS && window.CSS.supports && CSS.supports("font-variation-settings", '"wght" 400'));
        return Ga
    }
    S.prototype.supportsConfiguredBrowser = function() {
        return !0
    };
    S.prototype.init = function() {
        if (0 < this.g.length) {
            for (var a = [], b = 0; b < this.g.length; b++) a.push(fa(this.g[b]));
            z(this.b, a.join(""))
        }
    };
    S.prototype.load = function(a, b, c) {
        var d = this;
        c = c || {};
        if (this.j && (a = location.hostname, !this.j.has(a))) {
            console.error('Typekit: the domain "' + a + '" isn\'t in the list of published domains for kit "' + this.w + '".');
            B(new A(this.b, c, {}));
            return
        }
        a = c.timeout;
        var e = !!c.async,
            f = pa(),
            g = ra(this.u, f);
        c = new A(this.b, c, {
            active: function() {
                if (e) {
                    var a = K(g, f, d.i, !1);
                    z(d.b, a)
                }
                if (d.m) {
                    var a = d.m,
                        b = d.b,
                        c = a.m,
                        k = (window.__adobewebfontsappname__ || a.app || "").toString().substr(0, 20),
                        b = b.g.location.hostname || b.i.location.hostname,
                        l = [],
                        x = [];
                    window.Typekit ? (window.Typekit.fonts || (window.Typekit.fonts = []), x = window.Typekit.fonts) : window.TypekitPreview && (window.TypekitPreview.fonts || (window.TypekitPreview.fonts = []), x = window.TypekitPreview.fonts);
                    for (var y = 0; y < a.b.length; y++) {
                        for (var va = !1, da = 0; da < x.length; da++)
                            if (a.b[y] === x[da]) {
                                va = !0;
                                break
                            }
                        va || (l.push(a.b[y]), x.push(a.b[y]))
                    }
                    l.length && Ia(H(c, {
                        s: a.j,
                        k: a.o,
                        app: k,
                        ht: a.i,
                        h: b,
                        f: l.join("."),
                        a: a.g,
                        js: a.version,
                        e: "js",
                        _: (+new Date).toString()
                    }))
                }
            },
            inactive: function() {
                if (e) {
                    var a = K(g,
                        f, d.i, !1);
                    z(d.b, a)
                }
            }
        });
        if (g.b.length) {
            var k = K(g, f, this.i, e);
            z(this.b, k);
            var l = new Da(this.b, c, a, e);
            ja(d.b, function() {
                Ea(l, g, b)
            })
        } else B(c)
    };

    function Ja(a, b) {
        this.j = a;
        this.g = b;
        this.b = []
    }
    Ja.prototype.i = function(a) {
        this.b.push(a)
    };
    Ja.prototype.load = function(a, b) {
        var c = a,
            d = b || {};
        "string" == typeof c ? c = [c] : c && c.length || (d = c || {}, c = []);
        if (c.length)
            for (var e = this, f = c.length, g = 0; g < c.length; g++) Ka(this, c[g], function() {
                --f || La(e, d)
            });
        else La(this, d)
    };

    function Ka(a, b, c) {
        b = H(a.j, {
            id: b
        });
        la(a.g, b, c)
    }

    function La(a, b) {
        if (a.b.length) {
            for (var c = new A(a.g, b, {}), d = 0; d < a.b.length; d++) a.b[d].init();
            c.i && w(c.g, [c.b.b("wf", "loading")]);
            C(c, "loading");
            for (c = 0; c < a.b.length; c++) a.b[c].load(null, c == a.b.length - 1, b);
            a.b = []
        }
    };

    function Ma() {
        var a = n.ps,
            b = n.ht,
            c = n.fi,
            d = n.a,
            e = n.kt,
            f = n.js,
            g = n.l;
        this.m = new G(n.ping);
        this.j = a;
        this.i = b;
        this.b = c || [];
        this.g = d || null;
        this.o = e || null;
        this.version = f || null;
        this.app = g || null
    }

    function Ia(a) {
        var b = new Image(1, 1),
            c = !1;
        b.src = a;
        b.onload = function() {
            c = !0;
            b.onload = null
        };
        setTimeout(function() {
            c || (b.src = "about:blank", b.onload = null)
        }, 3E3)
    };
    var Na = new function() {
        var a = window;
        this.g = this.i = a;
        this.b = this.g.document
    };
    window.Typekit || (window.Typekit = {});
    if (!window.Typekit.load) {
        var U = new Ja(new G("//" + (window.Typekit.config || {}).hn + "/{id}.js"), Na);
        window.Typekit.load = function() {
            U.load.apply(U, arguments)
        };
        window.Typekit.addKit = function() {
            U.i.apply(U, arguments)
        }
    }
    var V, n = window.Typekit.config || {};
    V = new S(Na);
    n.ping && (V.m = new Ma);
    n.vft && (V.o = n.vft);
    if (n.fc)
        for (var W = n.fc, X = 0; X < W.length; X++) {
            var Y = W[X].src,
                Oa = W[X].descriptors || {};
            if (V.o && Ha() && 1 === Oa.subset_id)
                for (var Z = 0; Z < T.length; Z++)
                    if (-1 !== Y.indexOf(T[Z])) {
                        Y = Y.replace(T[Z], "00000000000000003b9b12ef");
                        break
                    }
            V.u.b.push(new ma(W[X].family, Y, W[X].descriptors))
        }
    if (n.dl) {
        var Pa = n.dl;
        try {
            V.j = new ia(Pa)
        } catch (a) {}
    }
    n.kt && (V.w = n.kt);
    n.token && (V.i = n.token);
    if (n.c)
        for (var p = 0; p < n.c.length; p += 2) V.g.push(new ea);
    window.Typekit.addKit(V);

    function Qa() {
        if (!Ha()) return !1;
        for (var a = n.fc, b = 0; b < a.length; b++)
            if (1 === a[b].descriptors.subset_id)
                for (var c = 0; c < T.length; c++)
                    if (-1 !== a[b].src.indexOf(T[c])) return !0;
        return !1
    }

    function Ra(a, b) {
        var c = n.fc,
            d = oa(b);
        if (!Ha() || !n.vft) return !1;
        for (var e = 0; e < c.length; e++)
            if (c[e].family === a && c[e].descriptors.weight === d.weight && c[e].descriptors.style === d.style && 1 === c[e].descriptors.subset_id)
                for (var f = 0; f < T.length; f++)
                    if (-1 !== c[e].src.indexOf(T[f])) return !0;
        return !1
    }
    if (n.pm && 1 === Math.round(30 * Math.random())) {
        var Sa = window.Typekit.load,
            Ta = [];
        window.Typekit.load = function(a) {
            a = a || {};
            var b = a.active || function() {},
                c = a.fontactive || function() {},
                d = (new Date).getTime();
            a.active = function() {
                b();
                if (!window.XDomainRequest) {
                    var a = new Image,
                        c = function(a) {
                            a = {
                                fonts: Ta,
                                augmentations: [],
                                font_loading: window.FontFace ? "native" : "non-native",
                                active_duration: (new Date).getTime() - d,
                                javascript_version: n.js,
                                kit_type: "configurable",
                                ad_blocker: a,
                                test_group: Qa()
                            };
                            a = JSON.stringify(a);
                            if (!window.XDomainRequest) {
                                var b =
                                    new XMLHttpRequest;
                                b.open("POST", "https://performance.typekit.net/");
                                b.send(a)
                            }
                        };
                    a.src = "https://p.typekit.net/p.gif?";
                    a.onload = function() {
                        for (var a = !1, b = 0; b < document.styleSheets.length; b++)
                            if (null === document.styleSheets[b].href && /ghostery-purple-box/.test(document.styleSheets[b].ownerNode.textContent)) {
                                a = !0;
                                break
                            }
                        c(a)
                    };
                    a.onerror = function() {
                        c(!0)
                    }
                }
            };
            a.fontactive = function(a, b) {
                c(a, b);
                var g;
                a: {
                    g = oa(b);
                    for (var k = n.fc, l = 0; l < k.length; l++)
                        if (k[l].family === a && k[l].descriptors.weight === g.weight && k[l].descriptors.style ===
                            g.style) {
                            g = k[l].id;
                            break a
                        }
                    g = 0
                }
                Ta.push({
                    id: g,
                    duration: (new Date).getTime() - d,
                    dynamic: !1,
                    weight: b.charAt(1) + "00",
                    variable: Ra(a, b)
                })
            };
            Sa(a)
        }
    }
    if (window.WebFont) try {
        window.Typekit.load()
    } catch (a) {};
}(this, document));


/**
 * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 */
! function(a, b) {
    function c(a, b) {
        var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
    }

    function d() {
        var a = t.elements;
        return "string" == typeof a ? a.split(" ") : a
    }

    function e(a, b) {
        var c = t.elements;
        "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b)
    }

    function f(a) {
        var b = s[a[q]];
        return b || (b = {}, r++, a[q] = r, s[r] = b), b
    }

    function g(a, c, d) {
        if (c || (c = b), l) return c.createElement(a);
        d || (d = f(c));
        var e;
        return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e)
    }

    function h(a, c) {
        if (a || (a = b), l) return a.createDocumentFragment();
        c = c || f(a);
        for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) e.createElement(h[g]);
        return e
    }

    function i(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return t.shivMethods ? g(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(t, b.frag)
    }

    function j(a) {
        a || (a = b);
        var d = f(a);
        return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a
    }
    var k, l, m = "3.7.3",
        n = a.html5 || {},
        o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        q = "_html5shiv",
        r = 0,
        s = {};
    ! function() {
        try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function() {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
        } catch (c) {
            k = !0, l = !0
        }
    }();
    var t = {
        elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: m,
        shivCSS: n.shivCSS !== !1,
        supportsUnknownElements: l,
        shivMethods: n.shivMethods !== !1,
        type: "default",
        shivDocument: j,
        createElement: g,
        createDocumentFragment: h,
        addElements: e
    };
    a.html5 = t, j(b), "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : this, document);

/*!
 * @preserve Crumbl - A lightweight javascript framework
 * Version 1.0.2
 * http://crumbljs.com/
 * copyright Glenn Naessens 2013
 * MIT License
 */
! function(e, n, t) {
    "use strict";

    function r(e, n) {
        for (var t = 0, r = e.length; r > t; t++) n(e[t])
    }

    function i(e) {
        for (var n = [], t = 0, r = e.length; r > t; ++t) u(e[t]) ? n = n.concat(e[t]) : n[n.length] = e[t];
        return n
    }

    function o(e) {
        for (var n = 0, t = e.length, r = []; t > n; n++) r[n] = e[n];
        return r
    }

    function s(e) {
        for (;
            (e = e.previousSibling) && 1 != e[nodeType];);
        return e
    }

    function u(e) {
        return "object" == typeof e && isFinite(e.length)
    }

    function c() {
        var e;
        for (y = !0, e = 0; e < v.length; e += 1) v[e]();
        v = []
    }

    function a() {
        var e;
        for (b = !0, y || c(), e = 0; e < w.length; e += 1) w[e]();
        w = []
    }

    function f(e) {
        return 1 === e.length && (e = e[0]), e
    }

    function h(e, t, i, o) {
        r(o, function(r) {
            n.addEventListener ? i ? r.removeEventListener(e, r[e], !1) : r.addEventListener(e, t, !1) : n.attachEvent && (i ? r.detachEvent("on" + e, r[e]) : r.attachEvent("on" + e, t)), r[e] = i ? null : t
        })
    }

    function l(e, n, t) {
        var i, o, s, u, c, a, h, l = [];
        return e && (i = e.split(/\s+/), o = i.length, r(t, function(t) {
            if (s = t.className, "add" === n) t.className = s + " " + e;
            else {
                for (c = !0, a = 0; o > a; a += 1) h = i[a], u = new RegExp("\\b" + h + "\\b", "g"), "has" === n ? s.match(u) || (c = !1) : t.className = "toggle" === n ? t.className.match(u) ? t.className.replace(u, "") : t.className + " " + h : t.className.replace(u, "");
                "has" === n && l.push(c)
            }
            t.className = t.className.replace(/^\s+|\s+$/g, "")
        }), l.length > 0) ? f(l) : void 0
    }

    function d(e, n, t, i) {
        var o = [];
        return r(i, function(r) {
            e && (e = e.toLowerCase(), t ? r.removeAttribute(e) : n ? r.setAttribute(e, n) : o.push(r.getAttribute(e) ? r.getAttribute(e) : null))
        }), o.length > 0 ? f(o) : void 0
    }

    function p(e, n, t) {
        var i, o = [];
        n.nodes && 0 !== n.nodes ? o = n.nodes : n.nodeType && 1 === n.nodeType && o.push(n), i = o.length, "append" === e ? r(t, function(e) {
            for (var n = 0; i > n; n++) e.appendChild(o[n])
        }) : r(t, function(e) {
            for (var n = 0; i > n; n++) e.insertBefore(o[n], e.firstChild)
        })
    }

    function g(e, n) {
        if (e) {
            var t, r = [],
                i = n.length;
            switch (e) {
                case "children":
                case "siblings":
                    for (t = 0; i > t; t++) {
                        var o = "siblings" === e ? n[t].parentNode.firstChild : n[t].firstChild,
                            s = n[t];
                        do o && 1 === o.nodeType && o !== s && r.push(o), o = o.nextSibling; while (o)
                    }
                    break;
                case "parent":
                    for (t = 0; i > t; t++) r.push(n[t].parentNode);
                    break;
                case "next":
                    for (t = 0; i > t; t++) {
                        var u = n[t];
                        do u = u.nextSibling; while (u && 1 !== u.nodeType);
                        r.push(u)
                    }
                    break;
                case "previous":
                    for (t = 0; i > t; t++) {
                        var c = n[t];
                        do c = c.previousSibling; while (c && 1 !== c.nodeType);
                        r.push(c)
                    }
            }
            n = r
        }
        return n
    }

    function m(e, n) {
        return new m.methods.init(e, n)
    }
    window.qwery = function() {
        function e() {
            this.c = {}
        }

        function n(e) {
            return V.g(e) || V.s(e, "(^|\\s+)" + e + "(\\s+|$)", 1)
        }

        function c(e) {
            return e.match(K)
        }

        function a(e, t, r, i, o, s, u, c, a, f, h) {
            var d, p, g, m, v;
            if (1 !== this[S]) return !1;
            if (t && "*" !== t && this[L] && this[L].toLowerCase() !== t) return !1;
            if (r && (p = r.match(q)) && p[1] !== this.id) return !1;
            if (r && (v = r.match(D)))
                for (d = v.length; d--;)
                    if (!n(v[d].slice(1)).test(this.className)) return !1;
            if (a && y.pseudos[a] && !y.pseudos[a](this, h)) return !1;
            if (i && !u) {
                m = this.attributes;
                for (g in m)
                    if (Object.prototype.hasOwnProperty.call(m, g) && (m[g].name || g) == o) return this
            }
            return i && !l(s, en(this, o) || "", u) ? !1 : this
        }

        function f(e, n) {
            return e && "object" == typeof e && (n = e[S]) && (1 == n || 9 == n)
        }

        function h(e) {
            return W.g(e) || W.s(e, e.replace(z, "\\$1"))
        }

        function l(e, n, t) {
            switch (e) {
                case "=":
                    return n == t;
                case "^=":
                    return n.match(X.g("^=" + t) || X.s("^=" + t, "^" + h(t), 1));
                case "$=":
                    return n.match(X.g("$=" + t) || X.s("$=" + t, h(t) + "$", 1));
                case "*=":
                    return n.match(X.g(t) || X.s(t, h(t), 1));
                case "~=":
                    return n.match(X.g("~=" + t) || X.s("~=" + t, "(?:^|\\s+)" + h(t) + "(?:\\s+|$)", 1));
                case "|=":
                    return n.match(X.g("|=" + t) || X.s("|=" + t, "^" + h(t) + "(-|$)", 1))
            }
            return 0
        }

        function d(e, n) {
            var t, i, o, s, u, f, h, l = [],
                d = [],
                p = n,
                m = Y.g(e) || Y.s(e, e.split(J)),
                v = e.match(G);
            if (!m.length) return l;
            if (s = (m = m.slice(0)).pop(), m.length && (o = m[m.length - 1].match(R)) && (p = w(n, o[1])), !p) return l;
            for (f = c(s), u = p !== n && 9 !== p[S] && v && /^[+~]$/.test(v[v.length - 1]) ? function(e) {
                    for (; p = p.nextSibling;) 1 == p[S] && (f[1] ? f[1] == p[L].toLowerCase() : 1) && (e[e.length] = p);
                    return e
                }([]) : p[A](f[1] || "*"), t = 0, i = u.length; i > t; t++)(h = a.apply(u[t], f)) && (l[l.length] = h);
            return m.length ? (r(l, function(e) {
                g(e, m, v) && (d[d.length] = e)
            }), d) : l
        }

        function p(e, n, t) {
            if (f(n)) return e == n;
            if (u(n)) return !!~i(n).indexOf(e);
            for (var r, o, s = n.split(","); n = s.pop();)
                if (r = Y.g(n) || Y.s(n, n.split(J)), o = n.match(G), r = r.slice(0), a.apply(e, c(r.pop())) && (!r.length || g(e, r, o, t))) return !0;
            return !1
        }

        function g(e, n, t, r) {
            function i(e, r, s) {
                for (; s = U[t[r]](s, e);)
                    if (f(s) && a.apply(s, c(n[r]))) {
                        if (!r) return s;
                        if (o = i(s, r - 1, s)) return o
                    }
            }
            var o;
            return (o = i(e, n.length - 1, e)) && (!r || Z(o, r))
        }

        function m(e) {
            var n, t, r = [];
            e: for (n = 0; n < e.length; ++n) {
                for (t = 0; t < r.length; ++t)
                    if (r[t] == e[n]) continue e;
                r[r.length] = e[n]
            }
            return r
        }

        function v(e) {
            return e ? "string" == typeof e ? y(e)[0] : !e[S] && u(e) ? e[0] : e : E
        }

        function w(e, n, t) {
            return 9 === e[S] ? e.getElementById(n) : e.ownerDocument && ((t = e.ownerDocument.getElementById(n)) && Z(t, e) && t || !Z(e, e.ownerDocument) && N('[id="' + n + '"]', e)[0])
        }

        function y(e, n) {
            var t, r, s = v(n);
            if (!s || !e) return [];
            if (e === window || f(e)) return !n || e !== window && f(s) && Z(e, s) ? [e] : [];
            if (e && u(e)) return i(e);
            if (t = e.match(F)) {
                if (t[1]) return (r = w(s, t[1])) ? [r] : [];
                if (t[2]) return o(s[A](t[2]));
                if (nn && t[3]) return o(s[C](t[3]))
            }
            return N(e, s)
        }

        function b(e, n) {
            return function(t) {
                var r, i;
                return O.test(t) ? void(9 !== e[S] && ((i = r = e.getAttribute("id")) || e.setAttribute("id", i = "__qwerymeupscotty"), t = '[id="' + i + '"]' + t, n(e.parentNode || e, t, !0), r || e.removeAttribute("id"))) : void(t.length && n(e, t, !1))
            }
        }
        var N, E = document,
            $ = E.documentElement,
            C = "getElementsByClassName",
            A = "getElementsByTagName",
            T = "querySelectorAll",
            x = "useNativeQSA",
            L = "tagName",
            S = "nodeType",
            q = /#([\w\-]+)/,
            D = /\.[\w\-]+/g,
            R = /^#([\w\-]+)$/,
            B = /^\.([\w\-]+)$/,
            M = /^([\w\-]+)$/,
            H = /^([\w]+)?\.([\w\-]+)$/,
            O = /(^|,)\s*[>~+]/,
            j = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
            k = /[\s\>\+\~]/,
            P = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
            z = /([.*+?\^=!:${}()|\[\]\/\\])/g,
            I = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
            Q = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
            _ = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
            F = new RegExp(R.source + "|" + M.source + "|" + B.source),
            G = new RegExp("(" + k.source + ")" + P.source, "g"),
            J = new RegExp(k.source + P.source),
            K = new RegExp(I.source + "(" + Q.source + ")?(" + _.source + ")?"),
            U = {
                " ": function(e) {
                    return e && e !== $ && e.parentNode
                },
                ">": function(e, n) {
                    return e && e.parentNode == n.parentNode && e.parentNode
                },
                "~": function(e) {
                    return e && e.previousSibling
                },
                "+": function(e, n, t, r) {
                    return e ? (t = s(e)) && (r = s(n)) && t == r && t : !1
                }
            };
        e.prototype = {
            g: function(e) {
                return this.c[e] || t
            },
            s: function(e, n, t) {
                return n = t ? new RegExp(n) : n, this.c[e] = n
            }
        };
        var V = new e,
            W = new e,
            X = new e,
            Y = new e,
            Z = "compareDocumentPosition" in $ ? function(e, n) {
                return 16 == (16 & n.compareDocumentPosition(e))
            } : "contains" in $ ? function(e, n) {
                return n = 9 === n[S] || n == window ? $ : n, n !== e && n.contains(e)
            } : function(e, n) {
                for (; e = e.parentNode;)
                    if (e === n) return 1;
                return 0
            },
            en = function() {
                var e = E.createElement("p");
                return (e.innerHTML = '<a href="#x">x</a>') && "#x" != e.firstChild.getAttribute("href") ? function(e, n) {
                    return "class" === n ? e.className : "href" === n || "src" === n ? e.getAttribute(n, 2) : e.getAttribute(n)
                } : function(e, n) {
                    return e.getAttribute(n)
                }
            }(),
            nn = !!E[C],
            tn = E.querySelector && E[T],
            rn = function(e, n) {
                var t, i, s = [];
                try {
                    return 9 !== n[S] && O.test(e) ? (r(t = e.split(","), b(n, function(e, n) {
                        i = e[T](n), 1 == i.length ? s[s.length] = i.item(0) : i.length && (s = s.concat(o(i)))
                    })), t.length > 1 && s.length > 1 ? m(s) : s) : o(n[T](e))
                } catch (u) {}
                return on(e, n)
            },
            on = function(e, t) {
                var i, o, s, u, c, a, f = [];
                if (e = e.replace(j, "$1"), o = e.match(H)) {
                    for (c = n(o[2]), i = t[A](o[1] || "*"), s = 0, u = i.length; u > s; s++) c.test(i[s].className) && (f[f.length] = i[s]);
                    return f
                }
                return r(a = e.split(","), b(t, function(e, n, r) {
                    for (c = d(n, e), s = 0, u = c.length; u > s; s++)(9 === e[S] || r || Z(c[s], t)) && (f[f.length] = c[s])
                })), a.length > 1 && f.length > 1 ? m(f) : f
            },
            sn = function(e) {
                e[x] !== t && (N = e[x] ? tn ? rn : on : on)
            };
        return sn({
            useNativeQSA: !0
        }), y.configure = sn, y.uniq = m, y.is = p, y.pseudos = {}, y
    }();
    var v = [],
        w = [],
        y = !1,
        b = !1;
    n.addEventListener ? (n.addEventListener("DOMContentLoaded", c, !1), e.addEventListener("load", a, !1)) : n.attachEvent ? (n.attachEvent("onreadystatechange", c), e.attachEvent("onload", a)) : e.onload = a, m.methods = m.prototype = {
        init: function(t, r) {
            var i, o = [],
                r = r || n,
                s = null,
                u = 0,
                c = !1;
            if (t)
                if (t.nodeType && 1 === t.nodeType) o = [t], u = 1;
                else {
                    if (t.constructor && t.call && t.apply) return v.push(t), u = !1, null;
                    if (t === e) o = [e], u = 1;
                    else if (t instanceof Array) o = t, u = o.length;
                    else if ("string" == typeof t)
                        if (t.match(/<\/*[a-z][^>]+?>/gi)) {
                            var a = document.createElement("div");
                            a.innerHTML = t, o.push(a.firstChild), u = 1
                        } else {
                            if (r === n) s = qwery(t), u = s.length, c = !0;
                            else if ("string" == typeof r) s = qwery(t), u = s.length, c = !0;
                            else if (r.nodeType && 1 === r.nodeType || r instanceof Array && 1 === r.length) s = qwery(t, r[0] || r), u = s.length, c = !0;
                            else if (r instanceof Array) {
                                var f, h = r.length,
                                    l = 0;
                                for (f = 0; h > f; f++) {
                                    for (s = qwery(t, r[f]), u = s.length, l += u, i = 0; u > i; i++) o.push(s[i]);
                                    u = l
                                }
                            }
                            if (c)
                                for (i = 0; u > i; i++) o.push(s[i])
                        }
                }
            return this.nodes = o, this.count = u, this
        },
        ready: function(e) {
            e && (y ? e() : v.push(e))
        },
        loaded: function(e) {
            e && (b ? e() : w.push(e))
        },
        each: function(e) {
            return "function" == typeof e && r(this.nodes, function(n) {
                return e.apply(n, arguments)
            }), this
        },
        find: function(e) {
            return new m.methods.init(e, this.nodes)
        },
        children: function() {
            return new m.methods.init(g("children", this.nodes))
        },
        siblings: function() {
            return new m.methods.init(g("siblings", this.nodes))
        },
        parent: function() {
            return new m.methods.init(g("parent", this.nodes))
        },
        next: function() {
            return new m.methods.init(g("next", this.nodes))
        },
        prev: function() {
            return new m.methods.init(g("previous", this.nodes))
        },
        only: function() {
            var e = this.nodes[0];
            return e ? e : void 0
        },
        append: function(e) {
            p("append", e, this.nodes)
        },
        prepend: function(e) {
            p("prepend", e, this.nodes)
        },
        empty: function() {
            return r(this.nodes, function(e) {
                for (; e.hasChildNodes();) e.removeChild(e.lastChild)
            }), this
        },
        remove: function() {
            return r(this.nodes, function(e) {
                try {
                    e.parentNode.removeChild(e)
                } catch (n) {}
            }), this.nodes = [], this
        },
        clone: function(e) {
            e = e === !0 || e === t ? !0 : !1;
            var n = [];
            return r(this.nodes, function(t) {
                (t.nodeType || 1 === t.nodeType) && n.push(t.cloneNode(e))
            }), new m.methods.init(n)
        },
        hasClass: function(e) {
            return l(e, "has", this.nodes)
        },
        addClass: function(e) {
            return l(e, "add", this.nodes), this
        },
        removeClass: function(e) {
            return l(e, "remove", this.nodes), this
        },
        toggleClass: function(e) {
            return l(e, "toggle", this.nodes), this
        },
        html: function(e) {
            var n = [];
            return r(this.nodes, function(t) {
                e ? t.innerHTML = e : n.push(t.innerHTML)
            }), n.length > 0 ? f(n) : this
        },
        attr: function(e, n) {
            return e ? n ? (d(e, n, !1, this.nodes), this) : d(e, !1, !1, this.nodes) : void 0
        },
        removeAttr: function(e) {
            return d(e, !1, !0, this.nodes), this
        },
        on: function(e, n) {
            return h(e, n, !1, this.nodes), this
        },
        off: function(e) {
            return h(e, null, !0, this.nodes), this
        }
    }, m.methods.init.prototype = m.methods, e.$ = m
}(window, document);

// Ajax Crumbl
$.ajax = function(e, t, n, o, a) {
    var c, i, s = -1 === e.indexOf("?") ? "?" : "&",
        d = new RegExp("http[s]?://(.*?)/", "gi"),
        w = d.exec(e),
        l = document.getElementsByTagName("head")[0],
        p = "jsonp_callback_" + (new Date).getTime(),
        r = "";
    a = a ? "&" + a : "", o || (r = "nocache=" + (new Date).getTime()), w && window.location.host !== w[1] ? (e += s + r + a, t && (e += "&callback=" + p, console.log(e), window[p] = function(e) {
        try {
            t(e, 200)
        } catch (n) {}
        window[p] = void 0
    }), i = document.createElement("script"), i.async = !0, i.src = e, i.onload = function() {
        l.removeChild(i)
    }, l.appendChild(i)) : (n = (n || "GET").toUpperCase(), window.XMLHttpRequest ? c = new XMLHttpRequest : window.ActiveXObject && (c = new ActiveXObject("Microsoft.XMLHTTP")), c && ("GET" === n && (e += s + r + a, a = null), c.open(n, e, !0), c.onreadystatechange = function() {
        4 === c.readyState && t && t(c.responseText, c.status)
    }, "POST" === n && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c.send(a)))
};


Object.keys || (Object.keys = function() {
    "use strict";
    var e = Object.prototype.hasOwnProperty,
        t = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        o = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        n = o.length;
    return function(a) {
        if ("object" != typeof a && ("function" != typeof a || null === a)) throw new TypeError("Object.keys called on non-object");
        var r, i, l = [];
        for (r in a) e.call(a, r) && l.push(r);
        if (t)
            for (i = 0; n > i; i++) e.call(a, o[i]) && l.push(o[i]);
        return l
    }
}()), Array.prototype.map || (Array.prototype.map = function(e, t) {
    var o, n, a;
    if (null === this) throw new TypeError(" this is null or not defined");
    var r = Object(this),
        i = r.length >>> 0;
    if ("function" != typeof e) throw new TypeError(e + " is not a function");
    for (arguments.length > 1 && (o = t), n = new Array(i), a = 0; i > a;) {
        var l, s;
        a in r && (l = r[a], s = e.call(o, l, a, r), n[a] = s), a++
    }
    return n
});
var SVG = {
    store: {
        canvas: [],
        elements: []
    },
    xmlns: "http://www.w3.org/2000/svg",
    supported: document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
};
SVG.attr = function(e, t, o) {
    SVG.supported && Object.keys(t).map(function(n) {
        var a = t[n];
        o ? e.setAttribute(n, a) : e.setAttributeNS(null, n, a)
    })
}, SVG.canvas = function(e) {
    if (SVG.supported && document.createElementNS) {
        var t = document.createElementNS(SVG.xmlns, "svg");
        return e = e || {}, e.height = e.height || 100, e.width = e.width || 100, SVG.attr(t, {
            xmlns: SVG.xmlns,
            width: e.width,
            height: e.height,
            viewBox: "0 0 " + e.width + " " + e.height,
            preserveAspectRatio: "none"
        }, !0), SVG.store.canvas.push(t), t.attr = function(e) {
            return SVG.attr(t, e, !0), t
        }, t
    }
}, SVG.create = function(e, t, o) {
    if (SVG.supported) {
        var n = "";
        n = "string" == typeof e ? e : e.name;
        var a = document.createElementNS(SVG.xmlns, n);
        return o = o || e.canvas || SVG.store.canvas[0] || SVG.canvas(), o.appendChild(a), t && SVG.attr(a, t), a.attr = function(e) {
            return SVG.attr(a, e), a
        }, a
    }
};
var APP = function() {
    function e() {
        return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
    }

    function t() {
        return "function" == typeof window.matchMedia
    }

    function o() {
        return "ontouchstart" in window || "onmsgesturechange" in window
    }

    function n() {
        var e = document.createElement("audio");
        return !(!e.canPlayType || !e.canPlayType("audio/mpeg;").replace(/no/, ""))
    }

    function a() {
        var e = ["mobile", "tablet", "desktop", "luxury"],
            t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
            o = document.body.className,
            n = 3;
        return 480 > t ? n = 0 : 768 > t ? n = 1 : 1024 >= t && (n = 2), -1 !== o.indexOf(e[n]) && (document.body.className += " " + e[n]), n
    }
    var r = {},
        i = {},
        l = $("body > header");
    if (r.window_height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight, r.scroll_top = 0, SVG.supported) var s = function() {
        var e = {};
        return e.container = $('<div class="svg-container" />'), e.svg = SVG.canvas({
            width: 25,
            height: 18
        }), e.top = e.svg.cloneNode(), e.top.setAttribute("class", "top"), e.topLine = SVG.create("line", {
            x1: 1,
            y1: 2,
            x2: 25,
            y2: 2
        }, e.top), e.top.appendChild(e.topLine), e.middle = e.svg.cloneNode(), e.middle.setAttribute("class", "middle"), e.middleLine = SVG.create("line", {
            x1: 1,
            y1: 9,
            x2: 25,
            y2: 9
        }, e.middle), e.middle.appendChild(e.middleLine), e.bottom = e.svg.cloneNode(), e.bottom.setAttribute("class", "bottom"), e.bottomLine = SVG.create("line", {
            x1: 1,
            y1: 16,
            x2: 25,
            y2: 16
        }, e.bottom), e.bottom.appendChild(e.bottomLine), e.container.append(e.top), e.container.append(e.middle), e.container.append(e.bottom), e.container
    }();
    return r.warpNavigation = function() {
        var e = $('<a href="#navigation" class="trigger"><em>Show navigation</em></a>');
        SVG.supported && e.append(s), e.on("click", function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, l.toggleClass("collapsed")
        }), l.addClass("collapsable collapsed hidden"), l.prepend(e), setTimeout(function() {
            l.removeClass("hidden")
        }, 300), $(window).on("keyup", function(e) {
            27 != e.keyCode || l.hasClass("collapsed") || l.addClass("collapsed")
        }), l.find('nav[role="navigation"] a').on("click", function() {
            l.toggleClass("collapsed")
        })
    }, r.triggerAnimation = function(e, t, o) {
        if(e != null) {
            var n = e.offsetParent.offsetTop + e.offsetTop + t;
            r.scroll_top + r.window_height > n && n + e.offsetHeight > r.scroll_top && o()
        }
        
    }, r.updateWindowTarget = function(e) {
        var t = window.location.href,
            o = t.indexOf("#"); - 1 !== o && (t = t.replace(t.substring(o), "")), t += e, window.location.href = t
    }, r.onScroll = function(e) {
        $(function() {
            e()
        }), $(window).on("scroll", function() {
            e()
        })
    }, r.scrollTo = function(e, t) {
        try {
            var o = (new Date).getTime(),
                n = document.body.scrollTop || document.documentElement.scrollTop,
                a = e.offsetTop;
            t || (t = Math.abs(a - n) / 2);
            var r = setInterval(function() {
                var e = Math.min(1, ((new Date).getTime() - o) / t);
                e = (1 - Math.cos(e * Math.PI)) / 2;
                var i = n + e * (a - n);
                document.body.scrollTop = i, document.documentElement.scrollTop = i, 1 === e && clearInterval(r)
            }, 24)
        } catch (i) {}
    }, r.randomizeCoordinate = function(e, t) {
        if (!e.hasClass("randomized")) {
            var o = 25,
                n = 300,
                a = "0123456789".split(""),
                r = e.html(),
                i = r.split(""),
                l = function(o) {
                    for (var s = t.split(""), c = s.length; c--;) s[c] !== i[c] && "." !== s[c] && (s[c] = a[Math.floor(Math.random() * a.length)]);
                    return e.html(s.join("")), 0 > o ? void e.html(r) : void setTimeout(function() {
                        l(--o)
                    }, n / (o / 2))
                };
            l(--o), e.addClass("randomized")
        }
    }, i.supportsSVG = e(), i.supportsMQ = t(), i.viewportSize = a(), i.isTouch = o(), i.supportsAudio = n(), $(window).on("resize", function() {
        APP.window_height = isNaN(window.innerHeight) ? window.clientHeight : window.innerHeight, i.viewportSize = a()
    }), r.onScroll(function() {
        r.scroll_top = document.body.scrollTop || document.documentElement.scrollTop
    }), r.browser = i, r
}();
$(function() {
    var e = {
        bottom: !1,
        winecard: !1,
        quoteplay: !1,
        quoteread: !1,
        quoteend: !1
    };
    $("html").removeClass("no-js");
    var t = "",
        o = $(".full-logo"),
        n = !!$(".home").count;
    if (n && $.ajax("http://kivavo.bike/wp-content/themes/twentyseventeen/assets/images/logo-explode.svg", function(e, n) {
            200 === n ? (t = $("<div></div>").html(e).find("svg"), t.children().each(function(e) {
                o.append($(e))
            })) : $(o).addClass("bg")
        }, "GET", !1), !APP.browser.supportsSVG) {
        if ($("html").addClass("no-svg"), n) {
            var a = $('<img src="http://kivavo.bike/wp-content/themes/twentyseventeen/assets/images/logo-explode.svg" alt="Elements in our logo">'),
                r = $(".logo-breakdown");
            APP.browser.viewportSize < 3 ? a = $('<img src="/img/logo-explode-mobile.png" alt="Elements in our logo">') : r.find("ul").addClass("hidden"), r.find("svg").remove(), r.prepend(a)
        }
        $("img").each(function(e) {
            e.src = e.src.replace(".svg", ".png")
        })
    }
    if (APP.browser.isTouch && $("body").addClass("touch"), APP.warpNavigation(), n) {
        var i = APP.browser.viewportSize < 1 ? 500 : 700,
            l = APP.window_height > i ? APP.window_height : i,
            s = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth;
        s > 1024 && $(".parallax").each(function(e) {
            var t = 3 === APP.browser.viewportSize ? "cover" : "auto " + (l + 50) + "px";
            e.style["-webkit-background-size"] = t, e.style["-moz-background-size"] = t, e.style["-o-background-size"] = t, e.style["background-size"] = t, APP.onScroll(function() {
                APP.triggerAnimation(e, 0, function() {
                    if ($(e).hasClass("parallax")) {
                        var t = -((APP.scroll_top - e.offsetTop) / 7.5),
                            o = "50% " + t + "px";
                        e.style.backgroundPosition = o
                    }
                })
            })
        });
        var c = function() {
            var e = window.location.href,
                t = e.indexOf("#");
            e = -1 !== t ? e.substring(t) : "#welcome", setTimeout(function() {
                if(typeof($(e).only()) != 'undefined')
                    Math.abs($(e).only().offsetTop - APP.scroll_top) < 100 && $(e + " .scroll-tip").addClass("activated")
            }, 2e3)
        };
        c(), $(".yield").each(function(e) {
            if (APP.window_height >= 850 && 3 === APP.browser.viewportSize) {
                var t = $(e),
                    o = $(e).find(".intro"),
                    n = 0,
                    a = !0;
                APP.onScroll(function() {
                    a = APP.scroll_top > n ? !0 : !1, n = APP.scroll_top, a && APP.scroll_top >= e.offsetTop && APP.scroll_top <= e.offsetTop + APP.window_height && (e.style.paddingTop = l + "px", t.removeClass("parallax"), o.hasClass("yield") || o.addClass("yield"), e.offsetTop + e.scrollHeight <= APP.scroll_top + APP.window_height && (o.hasClass("snapped") || o.addClass("snapped"))), !a && APP.scroll_top + APP.window_height <= e.offsetTop + e.scrollHeight && (o.removeClass("snapped"), APP.scroll_top <= e.offsetTop && (e.style.paddingTop = 0, o.removeClass("yield"), t.hasClass("parallax") || t.addClass("parallax")))
                })
            }
        });
        var d = $("#the-land"),
            u = d.only(),
            p = d.find(".longitude"),
            f = d.find(".latitude");
        APP.onScroll(function() {
            APP.triggerAnimation(u, 0, function() {
                APP.randomizeCoordinate(p, "25.5412"), APP.randomizeCoordinate(f, "24.3443")
            })
        });
        var g = function() {
                APP.browser.viewportSize > 1 && !APP.browser.isTouch && $(".fade").each(function(e) {
                    APP.onScroll(function() {
                        var t = (e.offsetHeight - APP.scroll_top) / e.offsetHeight * 3;
                        e.style.opacity = .1 > t ? 0 : t
                    })
                })
            },
            h = function() {
                if (APP.browser.viewportSize >= 2) {
                    var e = $("#the-name .logo-breakdown");
                    APP.onScroll(function() {
                        APP.triggerAnimation(e.only(), 200, function() {
                            e.hasClass("activated") || e.addClass("activated")
                        })
                    })
                }
            },
            m = function() {
                if (typeof($("#welcome").only()) != 'undefined') {
                    APP.browser.viewportSize > 1 && !APP.browser.isTouch && ($("#welcome").only().style.paddingTop = l + "px"), $(".fullscreen").each(function(e) {
                        var t = $(e).find(".intro").only();
                        t.style.minHeight = l + "px"
                    })
                }
            },
            w = function() {
                APP.window_height < 600 && ($("#welcome .intro h1").only().style.margin = "0 auto")
            };
        $(window).on("resize", function() {
            l = APP.window_height > i ? APP.window_height : i, g(), m(), h(), w()
        }), g(), m(), h(), w();
        var v = $("footer"),
            P = $(".notice");
        // APP.onScroll(function() {
        //     APP.triggerAnimation(v.only(), 200, function() {
        //         $("header .trigger").addClass("hidden")
        //     })
        // }), APP.onScroll(function() {
        //     APP.triggerAnimation(P.only(), -APP.window_height, function() {
        //         $("header .trigger").removeClass("hidden")
        //     })
        // });
        var y = $(".quote"),
            b = y.find(".quote-player"),
            A = b.find("audio").only(),
            S = b.find("button"),
            C = S.find("span").only(),
            T = !1;
        APP.browser.supportsAudio || y.addClass("no-audio");
        var V = function() {
            var t = $(A);
            t.hasClass("sources-set") || (t.addClass("sources-set"), t.children().each(function(e) {
                e.src = e.getAttribute("data-source")
            }), A.load()), e.quoteplay || (e.quoteplay = !0, ga("send", "event", "Quote", "Play")), T = !T, S.toggleClass("playing"), A.paused === !0 ? A.play() : A.pause()
        };
        y.find(".listen-trigger").on("click", function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1, T || V(), y.hasClass("read") && y.removeClass("read")
        }), y.find(".read-trigger").on("click", function(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1, y.addClass("read"), e.quoteread || (e.quoteread = !0, ga("send", "event", "Quote", "Read"))
        }), S.on("click", function() {
            V()
        }), $(A).on("timeupdate", function() {
            var t = 100 / A.duration * A.currentTime / 100;
            C.style.transform = "scale(" + t + ")", C.style["-o-transform"] = "scale(" + t + ")", C.style["-webkit-transform"] = "scale(" + t + ")", C.style["-moz-transform"] = "scale(" + t + ")", t >= 1 && ($(C).addClass("fade"), C.style.transform = "scale(0)", C.style["-o-transform"] = "scale(0)", C.style["-webkit-transform"] = "scale(0)", C.style["-moz-transform"] = "scale(0)", S.toggleClass("playing"), setTimeout(function() {
                $(C).removeClass("fade")
            }, 500), e.quoteend || (e.quoteend = !0, ga("send", "event", "Quote", "Play End")))
        }), $(".info figure button").on("click", function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var t = $(e.target).parent().parent();
            t.hasClass("toggled") ? t.removeClass("toggled") : ($(".info .toggled").removeClass("toggled"), t.addClass("toggled"))
        });
        var x = $("#the-vines");
        x.find(".zoom button").on("click", function(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.winecard || (e.winecard = !0, ga("send", "event", "Page", "Wine Card Opened"));
            var o = $(t.target),
                n = o.parent().parent();
            n.toggleClass("zoomed"), n.hasClass("zoomed") && $(window).on("keyup", function(e) {
                27 == e.keyCode && n.removeClass("zoomed")
            })
        })
    }
    var k = $(".subscribe").addClass("off-canvas");
    if (APP.onScroll(function() {
            k && k.only && APP.triggerAnimation(k.only(), 100, function() {
                k.removeClass("off-canvas"), e.bottom || (e.bottom = !0, ga("send", "event", "Page", "Reached bottom"))
            })
        }), -1 === document.getElementsByTagName("html")[0].className.indexOf("ie") && $(".jump-to a").on("click", function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var t, o = this.href;
            o ? (t = $(o.substring(1)), -1 !== o.indexOf("#") && n ? (APP.scrollTo(t.only(), 1e3), APP.updateWindowTarget(o.substring(1)), c()) : window.location = o) : window.location = this.href
        }), $("body > header .social a").on("click", function(e) {
            var t = $(e.target).parent().only().className;
            "newsletter" !== t && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, ga("send", "event", "Social", t, "header"), setTimeout(function() {
                window.location = e.target.getAttribute("href")
            }, 100))
        }), $(".notice .social a").on("click", function(e) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            var t = $(e.target).parent().only().className;
            ga("send", "event", "Social", t, "footer"), setTimeout(function() {
                window.location = e.target.getAttribute("href")
            }, 100)
        }), $(".press-page .track-download").on("click", function(e) {
            ga("send", "event", "Press page", "Download asset", $(e.target).attr("data-asset"))
        }), -1 === document.getElementsByTagName("html")[0].className.indexOf("ie")) {
        var G = $('[href="#navigation"] svg, body > header');
        $('[href="#navigation"]').on("mouseenter", function() {
            G.attr("style", "will-change: transform;")
        }).on("mouseleave", function() {
            G.attr("style", "will-change: auto;")
        })
    }
}());