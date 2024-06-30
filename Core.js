onst downloadedModels = await client.system.listDownloadedModels();
const downloadedLLMs = downloadedModels.filter((model) => model.type === "llm");

147018: function(t, n, r) {
        var e = r(161581)
          , o = r(347722).f
          , i = r(251069)
          , u = r(859209)
          , c = r(492424)
          , f = r(381740)
          , a = r(474182);
        t.exports = function(t, n) {
            var r, p, s, l, v, y = t.target, b = t.global, h = t.stat;
            if (r = b ? e : h ? e[y] || c(y, {}) : (e[y] || {}).prototype)
                for (p in n) {
                    if (l = n[p],
                    s = t.dontCallGetSet ? (v = o(r, p)) && v.value : r[p],
                    !a(b ? p : y + (h ? "." : "#") + p, t.forced) && void 0 !== s) {
                        if (typeof l == typeof s)
                            continue;
                        f(l, s)
                    }
                    (t.sham || s && s.sham) && i(l, "sham", !0),
                    u(r, p, l, t)
                   470592: function(t, n, r) {
        var e = r(581031)
          , o = r(936940)
          , i = r(332916)
          , u = Object
          , c = e("".split);
                     if (u(t),
            n = c(n),
            u(r),
            o)
                try {
                    return a(t, n, r)
                } catch (t) {}
                      var n = e(526988)
          , o = e(339718)
          , i = e(470592)
          , a = e(49693)
          , c = TypeError
          , u = function(t) {
            return function(r, e, u, s) {
                n(e);
                var f = o(r)
                  , h = i(f)
                  , l = a(f)
                  , p = t ? l - 1 : 0
                  , y = t ? -1 : 1;
                if (u < 2)
                    for (; ; ) {
                        if (p in h) {
                            s = h[p],
                            p += y;
                            break
                        }
                        if (p += y,
                        t ? p < 0 : l <= p)
                             , y = (0,
            D.Z)(n, d)
              , X = (0,
            E.l)(n)
              , k = (0,
            E.P)(n)
              , q = (0,
            G.Z)(n)
              , Y = (0,
            O.Z)(n)
              , B = (0,
            v.Z)(n)
              , w = (0,
            I.Z)(n, i, d)
              , F = (0,
            H.Z)(n, i)
              , W = (0,
            U.Z)(n, i)
              , J = (0,
            b.Z)(n, i.id)

                var t = i(735250);
        i(470079);
        var l = i(442837)
          , s = i(481060)
          , a = i(5036)
          , u = i(58468)
          , o = i(689938);
        function r(e) {
            let n = (0,
            l.e7)([u.Z], ()=>u.Z.isCollapsed(e.id), [e.id]);
            869768: function(e, n, i) {
        i.d(n, {
            W: function() {
                return a
            }
        });
        var t = i(442837)
          , l = i(314897)
          , s = i(979651);
        function a(e) {
            return function(e) {
                return (0,
                        var n = r(801282)
          , o = r(900013)
          , i = r(730179)
          , s = Math.ceil
          , a = Math.max;
        e.exports = function(e, t, r) {
            t = (r ? o(e, t, r) : void 0 === t) ? 1 : a(i(t), 0);
            var c = null == e ? 0 : e.length;
            if (!c || t < 1)
                return [];
            for (var u = 0, d = 0, l = Array(s(c / t)); u < c; )
                l[d++] = n(e, u, u += t);
            return l
            n(47120),
        n(411104),
        n(653041),
        n(390547),
        n(724458),
        n(733860);
        var i, s, l = n(512722), r = n.n(l), a = n(392711), d = n.n(a), o = n(317381), h = n(812206), u = n(12498), c = n(430198), C = n(931261), g = n(924301), p = n(160404), f = n(57132), v = n(798423), I = n(18036), E = n(798379), y = n(398758), S = n(22082), _ = n(601070), m = n(569471), w = n(131704), b = n(680089), N = n(592125), L = n(58468), Z = n(430824), A = n(496675), P = n(306680), R = n(944486), O = n(9156), T = n(979651), D = n(938475), G = n(823379), M = n(709054), V = n(968358), U = n(203818), F = n(443063), B = n(981631), H = n(176505), x = n(231338);
        function z(e, t, n) {
          953326: function(t, n, r) {
        var e = r(299623)
          , o = r(980855)
          , i = r(49693)
          , u = function(t) {
            return function(n, r, u) {
                var c, f = e(n), a = i(f), p = o(u, a);
                if (t && r != r) {
                    for (; a > p; )
                        if ((c = f[p++]) != c)
                            return !0
                } else
                    for (; a > p; p++)
                        if ((t || p in f) && f[p] === r)
                            return t || p || 0;
                return !t && -1
               691558: function(t, n, r) {
        var e = r(926515)
          , o = r(622281)
          , i = r(323979)
          , u = r(995739)
          , c = r(337856)
          , f = r(641236)
          , a = TypeError
          , p = f("toPrimitive");
        t.exports = function(t, n) {
            if (!o(t) || i(t))
                return t;
            var r, f = u(t, p);
