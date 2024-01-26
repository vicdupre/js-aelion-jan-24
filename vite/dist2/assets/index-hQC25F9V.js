(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
const je =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",
  He = "/vite.svg";
function Me(e) {
  let t = 0;
  const n = (r) => {
    (t = r), (e.innerHTML = `count is ${t}`);
  };
  e.addEventListener("click", () => n(t + 1)), n(0);
}
function me(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: qe } = Object.prototype,
  { getPrototypeOf: Z } = Object,
  H = ((e) => (t) => {
    const n = qe.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  g = (e) => ((e = e.toLowerCase()), (t) => H(t) === e),
  M = (e) => (t) => typeof t === e,
  { isArray: C } = Array,
  _ = M("undefined");
function Ie(e) {
  return (
    e !== null &&
    !_(e) &&
    e.constructor !== null &&
    !_(e.constructor) &&
    O(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const ye = g("ArrayBuffer");
function ze(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && ye(e.buffer)),
    t
  );
}
const Je = M("string"),
  O = M("function"),
  we = M("number"),
  q = (e) => e !== null && typeof e == "object",
  ve = (e) => e === !0 || e === !1,
  D = (e) => {
    if (H(e) !== "object") return !1;
    const t = Z(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  $e = g("Date"),
  Ve = g("File"),
  We = g("Blob"),
  Ke = g("FileList"),
  Ge = (e) => q(e) && O(e.pipe),
  Xe = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (O(e.append) &&
          ((t = H(e)) === "formdata" ||
            (t === "object" &&
              O(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Qe = g("URLSearchParams"),
  Ze = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function L(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), C(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function Ee(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const be =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Se = (e) => !_(e) && e !== be;
function W() {
  const { caseless: e } = (Se(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Ee(t, s)) || s;
      D(t[o]) && D(r)
        ? (t[o] = W(t[o], r))
        : D(r)
        ? (t[o] = W({}, r))
        : C(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && L(arguments[r], n);
  return t;
}
const Ye = (e, t, n, { allOwnKeys: r } = {}) => (
    L(
      t,
      (s, o) => {
        n && O(s) ? (e[o] = me(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  et = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  tt = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  nt = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && Z(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  rt = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  st = (e) => {
    if (!e) return null;
    if (C(e)) return e;
    let t = e.length;
    if (!we(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  ot = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Z(Uint8Array)),
  it = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  at = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  ct = g("HTMLFormElement"),
  lt = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  se = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  ut = g("RegExp"),
  Oe = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    L(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  ft = (e) => {
    Oe(e, (t, n) => {
      if (O(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (O(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  dt = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return C(e) ? r(e) : r(String(e).split(t)), n;
  },
  pt = () => {},
  ht = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  J = "abcdefghijklmnopqrstuvwxyz",
  oe = "0123456789",
  Re = { DIGIT: oe, ALPHA: J, ALPHA_DIGIT: J + J.toUpperCase() + oe },
  mt = (e = 16, t = Re.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function yt(e) {
  return !!(
    e &&
    O(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const wt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (q(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = C(r) ? [] : {};
            return (
              L(r, (i, c) => {
                const p = n(i, s + 1);
                !_(p) && (o[c] = p);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Et = g("AsyncFunction"),
  bt = (e) => e && (q(e) || O(e)) && O(e.then) && O(e.catch),
  a = {
    isArray: C,
    isArrayBuffer: ye,
    isBuffer: Ie,
    isFormData: Xe,
    isArrayBufferView: ze,
    isString: Je,
    isNumber: we,
    isBoolean: ve,
    isObject: q,
    isPlainObject: D,
    isUndefined: _,
    isDate: $e,
    isFile: Ve,
    isBlob: We,
    isRegExp: ut,
    isFunction: O,
    isStream: Ge,
    isURLSearchParams: Qe,
    isTypedArray: ot,
    isFileList: Ke,
    forEach: L,
    merge: W,
    extend: Ye,
    trim: Ze,
    stripBOM: et,
    inherits: tt,
    toFlatObject: nt,
    kindOf: H,
    kindOfTest: g,
    endsWith: rt,
    toArray: st,
    forEachEntry: it,
    matchAll: at,
    isHTMLForm: ct,
    hasOwnProperty: se,
    hasOwnProp: se,
    reduceDescriptors: Oe,
    freezeMethods: ft,
    toObjectSet: dt,
    toCamelCase: lt,
    noop: pt,
    toFiniteNumber: ht,
    findKey: Ee,
    global: be,
    isContextDefined: Se,
    ALPHABET: Re,
    generateString: mt,
    isSpecCompliantForm: yt,
    toJSONObject: wt,
    isAsyncFn: Et,
    isThenable: bt,
  };
function m(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const ge = m.prototype,
  Ae = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Ae[e] = { value: e };
});
Object.defineProperties(m, Ae);
Object.defineProperty(ge, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(ge);
  return (
    a.toFlatObject(
      e,
      i,
      function (p) {
        return p !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    m.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const St = null;
function K(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Te(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ie(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Te(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function Ot(e) {
  return a.isArray(e) && !e.some(K);
}
const Rt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function I(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (d, E) {
        return !a.isUndefined(E[d]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || u,
    o = n.dots,
    i = n.indexes,
    p = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function h(f) {
    if (f === null) return "";
    if (a.isDate(f)) return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f)
      ? p && typeof Blob == "function"
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function u(f, d, E) {
    let b = f;
    if (f && !E && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        (d = r ? d : d.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (a.isArray(f) && Ot(f)) ||
        ((a.isFileList(f) || a.endsWith(d, "[]")) && (b = a.toArray(f)))
      )
        return (
          (d = Te(d)),
          b.forEach(function (x, ke) {
            !(a.isUndefined(x) || x === null) &&
              t.append(
                i === !0 ? ie([d], ke, o) : i === null ? d : d + "[]",
                h(x)
              );
          }),
          !1
        );
    }
    return K(f) ? !0 : (t.append(ie(E, d, o), h(f)), !1);
  }
  const l = [],
    w = Object.assign(Rt, {
      defaultVisitor: u,
      convertValue: h,
      isVisitable: K,
    });
  function S(f, d) {
    if (!a.isUndefined(f)) {
      if (l.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      l.push(f),
        a.forEach(f, function (b, T) {
          (!(a.isUndefined(b) || b === null) &&
            s.call(t, b, a.isString(T) ? T.trim() : T, d, w)) === !0 &&
            S(b, d ? d.concat(T) : [T]);
        }),
        l.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return S(e), t;
}
function ae(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Y(e, t) {
  (this._pairs = []), e && I(e, this, t);
}
const xe = Y.prototype;
xe.append = function (t, n) {
  this._pairs.push([t, n]);
};
xe.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ae);
      }
    : ae;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function gt(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Ne(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || gt,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new Y(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class ce {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Pe = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  At = typeof URLSearchParams < "u" ? URLSearchParams : Y,
  Tt = typeof FormData < "u" ? FormData : null,
  xt = typeof Blob < "u" ? Blob : null,
  Nt = {
    isBrowser: !0,
    classes: { URLSearchParams: At, FormData: Tt, Blob: xt },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ce = typeof window < "u" && typeof document < "u",
  Pt = ((e) => Ce && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Ct =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Ft = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ce,
        hasStandardBrowserEnv: Pt,
        hasStandardBrowserWebWorkerEnv: Ct,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  R = { ...Ft, ...Nt };
function _t(e, t) {
  return I(
    e,
    new R.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return R.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Lt(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Bt(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Fe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i),
      p = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      p
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Bt(s[i])),
          !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(Lt(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Dt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ee = {
  transitional: Pe,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s ? JSON.stringify(Fe(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let c;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return _t(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const p = this.env && this.env.FormData;
          return I(c ? { "files[]": t } : t, p && new p(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Dt(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ee.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === "SyntaxError"
              ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: R.classes.FormData, Blob: R.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ee.headers[e] = {};
});
const te = ee,
  Ut = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  kt = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Ut[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  le = Symbol("internals");
function F(e) {
  return e && String(e).trim().toLowerCase();
}
function U(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(U) : String(e);
}
function jt(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Ht = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function v(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function Mt(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function qt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class z {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, p, h) {
      const u = F(p);
      if (!u) throw new Error("header name must be a non-empty string");
      const l = a.findKey(s, u);
      (!l || s[l] === void 0 || h === !0 || (h === void 0 && s[l] !== !1)) &&
        (s[l || p] = U(c));
    }
    const i = (c, p) => a.forEach(c, (h, u) => o(h, u, p));
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : a.isString(t) && (t = t.trim()) && !Ht(t)
        ? i(kt(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = F(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return jt(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = F(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || v(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = F(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || v(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || v(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = U(s)), delete n[o];
          return;
        }
        const c = t ? Mt(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = U(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[le] = this[le] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = F(i);
      r[c] || (qt(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
z.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
a.reduceDescriptors(z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(z);
const A = z;
function $(e, t) {
  const n = this || te,
    r = t || n,
    s = A.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function _e(e) {
  return !!(e && e.__CANCEL__);
}
function B(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
a.inherits(B, m, { __CANCEL__: !0 });
function It(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new m(
          "Request failed with status code " + n.status,
          [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const zt = R.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, s, o) {
        const i = [e + "=" + encodeURIComponent(t)];
        a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
          a.isString(r) && i.push("path=" + r),
          a.isString(s) && i.push("domain=" + s),
          o === !0 && i.push("secure"),
          (document.cookie = i.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Jt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function vt(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Le(e, t) {
  return e && !Jt(t) ? vt(e, t) : t;
}
const $t = R.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const c = a.isString(i) ? s(i) : i;
          return c.protocol === r.protocol && c.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Vt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function Wt(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (p) {
      const h = Date.now(),
        u = r[o];
      i || (i = h), (n[s] = p), (r[s] = h);
      let l = o,
        w = 0;
      for (; l !== s; ) (w += n[l++]), (l = l % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), h - i < t)) return;
      const S = u && h - u;
      return S ? Math.round((w * 1e3) / S) : void 0;
    }
  );
}
function ue(e, t) {
  let n = 0;
  const r = Wt(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      c = o - n,
      p = r(c),
      h = o <= i;
    n = o;
    const u = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && i && h ? (i - o) / p : void 0,
      event: s,
    };
    (u[t ? "download" : "upload"] = !0), e(u);
  };
}
const Kt = typeof XMLHttpRequest < "u",
  Gt =
    Kt &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const o = A.from(e.headers).normalize();
        let { responseType: i, withXSRFToken: c } = e,
          p;
        function h() {
          e.cancelToken && e.cancelToken.unsubscribe(p),
            e.signal && e.signal.removeEventListener("abort", p);
        }
        let u;
        if (a.isFormData(s)) {
          if (R.hasStandardBrowserEnv || R.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((u = o.getContentType()) !== !1) {
            const [d, ...E] = u
              ? u
                  .split(";")
                  .map((b) => b.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([d || "multipart/form-data", ...E].join("; "));
          }
        }
        let l = new XMLHttpRequest();
        if (e.auth) {
          const d = e.auth.username || "",
            E = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(d + ":" + E));
        }
        const w = Le(e.baseURL, e.url);
        l.open(e.method.toUpperCase(), Ne(w, e.params, e.paramsSerializer), !0),
          (l.timeout = e.timeout);
        function S() {
          if (!l) return;
          const d = A.from(
              "getAllResponseHeaders" in l && l.getAllResponseHeaders()
            ),
            b = {
              data:
                !i || i === "text" || i === "json"
                  ? l.responseText
                  : l.response,
              status: l.status,
              statusText: l.statusText,
              headers: d,
              config: e,
              request: l,
            };
          It(
            function (x) {
              n(x), h();
            },
            function (x) {
              r(x), h();
            },
            b
          ),
            (l = null);
        }
        if (
          ("onloadend" in l
            ? (l.onloadend = S)
            : (l.onreadystatechange = function () {
                !l ||
                  l.readyState !== 4 ||
                  (l.status === 0 &&
                    !(l.responseURL && l.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(S);
              }),
          (l.onabort = function () {
            l &&
              (r(new m("Request aborted", m.ECONNABORTED, e, l)), (l = null));
          }),
          (l.onerror = function () {
            r(new m("Network Error", m.ERR_NETWORK, e, l)), (l = null);
          }),
          (l.ontimeout = function () {
            let E = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const b = e.transitional || Pe;
            e.timeoutErrorMessage && (E = e.timeoutErrorMessage),
              r(
                new m(
                  E,
                  b.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
                  e,
                  l
                )
              ),
              (l = null);
          }),
          R.hasStandardBrowserEnv &&
            (c && a.isFunction(c) && (c = c(e)), c || (c !== !1 && $t(w))))
        ) {
          const d =
            e.xsrfHeaderName && e.xsrfCookieName && zt.read(e.xsrfCookieName);
          d && o.set(e.xsrfHeaderName, d);
        }
        s === void 0 && o.setContentType(null),
          "setRequestHeader" in l &&
            a.forEach(o.toJSON(), function (E, b) {
              l.setRequestHeader(b, E);
            }),
          a.isUndefined(e.withCredentials) ||
            (l.withCredentials = !!e.withCredentials),
          i && i !== "json" && (l.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            l.addEventListener("progress", ue(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            l.upload &&
            l.upload.addEventListener("progress", ue(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((p = (d) => {
              l &&
                (r(!d || d.type ? new B(null, e, l) : d),
                l.abort(),
                (l = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(p),
            e.signal &&
              (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
        const f = Vt(w);
        if (f && R.protocols.indexOf(f) === -1) {
          r(new m("Unsupported protocol " + f + ":", m.ERR_BAD_REQUEST, e));
          return;
        }
        l.send(s || null);
      });
    },
  G = { http: St, xhr: Gt };
a.forEach(G, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fe = (e) => `- ${e}`,
  Xt = (e) => a.isFunction(e) || e === null || e === !1,
  Be = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Xt(n) && ((r = G[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new m(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, p]) =>
            `adapter ${c} ` +
            (p === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(fe).join(`
`)
            : " " + fe(o[0])
          : "as no adapter specified";
        throw new m(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: G,
  };
function V(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new B(null, e);
}
function de(e) {
  return (
    V(e),
    (e.headers = A.from(e.headers)),
    (e.data = $.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Be.getAdapter(e.adapter || te.adapter)(e).then(
      function (r) {
        return (
          V(e),
          (r.data = $.call(e, e.transformResponse, r)),
          (r.headers = A.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          _e(r) ||
            (V(e),
            r &&
              r.response &&
              ((r.response.data = $.call(e, e.transformResponse, r.response)),
              (r.response.headers = A.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const pe = (e) => (e instanceof A ? e.toJSON() : e);
function P(e, t) {
  t = t || {};
  const n = {};
  function r(h, u, l) {
    return a.isPlainObject(h) && a.isPlainObject(u)
      ? a.merge.call({ caseless: l }, h, u)
      : a.isPlainObject(u)
      ? a.merge({}, u)
      : a.isArray(u)
      ? u.slice()
      : u;
  }
  function s(h, u, l) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(h)) return r(void 0, h, l);
    } else return r(h, u, l);
  }
  function o(h, u) {
    if (!a.isUndefined(u)) return r(void 0, u);
  }
  function i(h, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(h)) return r(void 0, h);
    } else return r(void 0, u);
  }
  function c(h, u, l) {
    if (l in t) return r(h, u);
    if (l in e) return r(void 0, h);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (h, u) => s(pe(h), pe(u), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const l = p[u] || s,
        w = l(e[u], t[u], u);
      (a.isUndefined(w) && l !== c) || (n[u] = w);
    }),
    n
  );
}
const De = "1.6.7",
  ne = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ne[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const he = {};
ne.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      De +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return (
      n &&
        !he[i] &&
        ((he[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, c) : !0
    );
  };
};
function Qt(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        p = c === void 0 || i(c, o, e);
      if (p !== !0)
        throw new m("option " + o + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const X = { assertOptions: Qt, validators: ne },
  N = X.validators;
class j {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new ce(), response: new ce() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = P(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      X.assertOptions(
        r,
        {
          silentJSONParsing: N.transitional(N.boolean),
          forcedJSONParsing: N.transitional(N.boolean),
          clarifyTimeoutError: N.transitional(N.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : X.assertOptions(
              s,
              { encode: N.function, serialize: N.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (f) => {
          delete o[f];
        }
      ),
      (n.headers = A.concat(i, o));
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function (d) {
      (typeof d.runWhen == "function" && d.runWhen(n) === !1) ||
        ((p = p && d.synchronous), c.unshift(d.fulfilled, d.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function (d) {
      h.push(d.fulfilled, d.rejected);
    });
    let u,
      l = 0,
      w;
    if (!p) {
      const f = [de.bind(this), void 0];
      for (
        f.unshift.apply(f, c),
          f.push.apply(f, h),
          w = f.length,
          u = Promise.resolve(n);
        l < w;

      )
        u = u.then(f[l++], f[l++]);
      return u;
    }
    w = c.length;
    let S = n;
    for (l = 0; l < w; ) {
      const f = c[l++],
        d = c[l++];
      try {
        S = f(S);
      } catch (E) {
        d.call(this, E);
        break;
      }
    }
    try {
      u = de.call(this, S);
    } catch (f) {
      return Promise.reject(f);
    }
    for (l = 0, w = h.length; l < w; ) u = u.then(h[l++], h[l++]);
    return u;
  }
  getUri(t) {
    t = P(this.defaults, t);
    const n = Le(t.baseURL, t.url);
    return Ne(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  j.prototype[t] = function (n, r) {
    return this.request(
      P(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        P(c || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (j.prototype[t] = n()), (j.prototype[t + "Form"] = n(!0));
});
const k = j;
class re {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new B(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new re(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const Zt = re;
function Yt(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function en(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Q = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Q).forEach(([e, t]) => {
  Q[t] = e;
});
const tn = Q;
function Ue(e) {
  const t = new k(e),
    n = me(k.prototype.request, t);
  return (
    a.extend(n, k.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Ue(P(e, s));
    }),
    n
  );
}
const y = Ue(te);
y.Axios = k;
y.CanceledError = B;
y.CancelToken = Zt;
y.isCancel = _e;
y.VERSION = De;
y.toFormData = I;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function (t) {
  return Promise.all(t);
};
y.spread = Yt;
y.isAxiosError = en;
y.mergeConfig = P;
y.AxiosHeaders = A;
y.formToJSON = (e) => Fe(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = Be.getAdapter;
y.HttpStatusCode = tn;
y.default = y;
const nn = async (e) => {
  const n = (await y.get("https://fakestoreapi.com/products")).data.map(
    (r) => `<li>${r.title}</li>`
  );
  e.innerHTML = n.join("");
};
document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${He}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${je}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <ul id="articles"></ul>
    <p class="read-the-docs">
      Le HMR fonctionne
    </p>
  </div>
`;
nn(document.querySelector("#articles")).catch((e) => console.log(e));
Me(document.querySelector("#counter"));
