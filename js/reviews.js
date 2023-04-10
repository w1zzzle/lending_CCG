/* =============== CSS =============== */
// .widget контейнер виджета
// .widget__header навигация виджета
// .widget__leave контейнер "Оставить отзыв"
// .widget__leave-link "ссылка "Оставить отзыв"
// .widget__tab заголовок секции
// .widget__tab_active активная секция
// .widget__tab--rating рейтинг секции
// .widget__count количество отзывов
// .widget__pag .widget__pag_prev навигация слайдера назад
// .widget__pag .widget__pag_next навигация слайдера вперед
// .review обёртка отзыва
// .review__header заголовок отзыва
// .review__photo фото отзыва
// .review__rating рейтинг отзыва
// .review__title имя, кто оставил отзыв
// .review__text текст отзыва
// .review__more "подробнее"

(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    2: function (e, t, n) {
      e.exports = n("Kqg8");
    },
    Kqg8: function (e, t, n) {
      "use strict";
      n.r(t), n("SN8V");
    },
    SN8V: function (e, t, n) {
      var o, r;
      void 0 ===
        (r =
          "function" ==
          typeof (o = function () {
            "use strict";
            !(function (e) {
              const t = e.performance;
              function n(e) {
                t && t.mark && t.mark(e);
              }
              function o(e, n) {
                t && t.measure && t.measure(e, n);
              }
              n("Zone");
              const r = e.__Zone_symbol_prefix || "__zone_symbol__";
              function s(e) {
                return r + e;
              }
              const a = !0 === e[s("forceDuplicateZoneCheck")];
              if (e.Zone) {
                if (a || "function" != typeof e.Zone.__symbol__)
                  throw new Error("Zone already loaded.");
                return e.Zone;
              }
              class i {
                constructor(e, t) {
                  (this._parent = e),
                    (this._name = t ? t.name || "unnamed" : "<root>"),
                    (this._properties = (t && t.properties) || {}),
                    (this._zoneDelegate = new l(
                      this,
                      this._parent && this._parent._zoneDelegate,
                      t
                    ));
                }
                static assertZonePatched() {
                  if (e.Promise !== C.ZoneAwarePromise)
                    throw new Error(
                      "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                    );
                }
                static get root() {
                  let e = i.current;
                  for (; e.parent; ) e = e.parent;
                  return e;
                }
                static get current() {
                  return z.zone;
                }
                static get currentTask() {
                  return j;
                }
                static __load_patch(t, r) {
                  if (C.hasOwnProperty(t)) {
                    if (a) throw Error("Already loaded patch: " + t);
                  } else if (!e["__Zone_disable_" + t]) {
                    const s = "Zone:" + t;
                    n(s), (C[t] = r(e, i, O)), o(s, s);
                  }
                }
                get parent() {
                  return this._parent;
                }
                get name() {
                  return this._name;
                }
                get(e) {
                  const t = this.getZoneWith(e);
                  if (t) return t._properties[e];
                }
                getZoneWith(e) {
                  let t = this;
                  for (; t; ) {
                    if (t._properties.hasOwnProperty(e)) return t;
                    t = t._parent;
                  }
                  return null;
                }
                fork(e) {
                  if (!e) throw new Error("ZoneSpec required!");
                  return this._zoneDelegate.fork(this, e);
                }
                wrap(e, t) {
                  if ("function" != typeof e)
                    throw new Error("Expecting function got: " + e);
                  const n = this._zoneDelegate.intercept(this, e, t),
                    o = this;
                  return function () {
                    return o.runGuarded(n, this, arguments, t);
                  };
                }
                run(e, t, n, o) {
                  z = { parent: z, zone: this };
                  try {
                    return this._zoneDelegate.invoke(this, e, t, n, o);
                  } finally {
                    z = z.parent;
                  }
                }
                runGuarded(e, t = null, n, o) {
                  z = { parent: z, zone: this };
                  try {
                    try {
                      return this._zoneDelegate.invoke(this, e, t, n, o);
                    } catch (r) {
                      if (this._zoneDelegate.handleError(this, r)) throw r;
                    }
                  } finally {
                    z = z.parent;
                  }
                }
                runTask(e, t, n) {
                  if (e.zone != this)
                    throw new Error(
                      "A task can only be run in the zone of creation! (Creation: " +
                        (e.zone || y).name +
                        "; Execution: " +
                        this.name +
                        ")"
                    );
                  if (e.state === v && (e.type === P || e.type === D)) return;
                  const o = e.state != E;
                  o && e._transitionTo(E, T), e.runCount++;
                  const r = j;
                  (j = e), (z = { parent: z, zone: this });
                  try {
                    e.type == D &&
                      e.data &&
                      !e.data.isPeriodic &&
                      (e.cancelFn = void 0);
                    try {
                      return this._zoneDelegate.invokeTask(this, e, t, n);
                    } catch (s) {
                      if (this._zoneDelegate.handleError(this, s)) throw s;
                    }
                  } finally {
                    e.state !== v &&
                      e.state !== Z &&
                      (e.type == P || (e.data && e.data.isPeriodic)
                        ? o && e._transitionTo(T, E)
                        : ((e.runCount = 0),
                          this._updateTaskCount(e, -1),
                          o && e._transitionTo(v, E, v))),
                      (z = z.parent),
                      (j = r);
                  }
                }
                scheduleTask(e) {
                  if (e.zone && e.zone !== this) {
                    let t = this;
                    for (; t; ) {
                      if (t === e.zone)
                        throw Error(
                          `can not reschedule task to ${this.name} which is descendants of the original zone ${e.zone.name}`
                        );
                      t = t.parent;
                    }
                  }
                  e._transitionTo(b, v);
                  const t = [];
                  (e._zoneDelegates = t), (e._zone = this);
                  try {
                    e = this._zoneDelegate.scheduleTask(this, e);
                  } catch (n) {
                    throw (
                      (e._transitionTo(Z, b, v),
                      this._zoneDelegate.handleError(this, n),
                      n)
                    );
                  }
                  return (
                    e._zoneDelegates === t && this._updateTaskCount(e, 1),
                    e.state == b && e._transitionTo(T, b),
                    e
                  );
                }
                scheduleMicroTask(e, t, n, o) {
                  return this.scheduleTask(new u(S, e, t, n, o, void 0));
                }
                scheduleMacroTask(e, t, n, o, r) {
                  return this.scheduleTask(new u(D, e, t, n, o, r));
                }
                scheduleEventTask(e, t, n, o, r) {
                  return this.scheduleTask(new u(P, e, t, n, o, r));
                }
                cancelTask(e) {
                  if (e.zone != this)
                    throw new Error(
                      "A task can only be cancelled in the zone of creation! (Creation: " +
                        (e.zone || y).name +
                        "; Execution: " +
                        this.name +
                        ")"
                    );
                  e._transitionTo(w, T, E);
                  try {
                    this._zoneDelegate.cancelTask(this, e);
                  } catch (t) {
                    throw (
                      (e._transitionTo(Z, w),
                      this._zoneDelegate.handleError(this, t),
                      t)
                    );
                  }
                  return (
                    this._updateTaskCount(e, -1),
                    e._transitionTo(v, w),
                    (e.runCount = 0),
                    e
                  );
                }
                _updateTaskCount(e, t) {
                  const n = e._zoneDelegates;
                  -1 == t && (e._zoneDelegates = null);
                  for (let o = 0; o < n.length; o++)
                    n[o]._updateTaskCount(e.type, t);
                }
              }
              i.__symbol__ = s;
              const c = {
                name: "",
                onHasTask: (e, t, n, o) => e.hasTask(n, o),
                onScheduleTask: (e, t, n, o) => e.scheduleTask(n, o),
                onInvokeTask: (e, t, n, o, r, s) => e.invokeTask(n, o, r, s),
                onCancelTask: (e, t, n, o) => e.cancelTask(n, o),
              };
              class l {
                constructor(e, t, n) {
                  (this._taskCounts = {
                    microTask: 0,
                    macroTask: 0,
                    eventTask: 0,
                  }),
                    (this.zone = e),
                    (this._parentDelegate = t),
                    (this._forkZS = n && (n && n.onFork ? n : t._forkZS)),
                    (this._forkDlgt = n && (n.onFork ? t : t._forkDlgt)),
                    (this._forkCurrZone =
                      n && (n.onFork ? this.zone : t._forkCurrZone)),
                    (this._interceptZS =
                      n && (n.onIntercept ? n : t._interceptZS)),
                    (this._interceptDlgt =
                      n && (n.onIntercept ? t : t._interceptDlgt)),
                    (this._interceptCurrZone =
                      n && (n.onIntercept ? this.zone : t._interceptCurrZone)),
                    (this._invokeZS = n && (n.onInvoke ? n : t._invokeZS)),
                    (this._invokeDlgt = n && (n.onInvoke ? t : t._invokeDlgt)),
                    (this._invokeCurrZone =
                      n && (n.onInvoke ? this.zone : t._invokeCurrZone)),
                    (this._handleErrorZS =
                      n && (n.onHandleError ? n : t._handleErrorZS)),
                    (this._handleErrorDlgt =
                      n && (n.onHandleError ? t : t._handleErrorDlgt)),
                    (this._handleErrorCurrZone =
                      n &&
                      (n.onHandleError ? this.zone : t._handleErrorCurrZone)),
                    (this._scheduleTaskZS =
                      n && (n.onScheduleTask ? n : t._scheduleTaskZS)),
                    (this._scheduleTaskDlgt =
                      n && (n.onScheduleTask ? t : t._scheduleTaskDlgt)),
                    (this._scheduleTaskCurrZone =
                      n &&
                      (n.onScheduleTask ? this.zone : t._scheduleTaskCurrZone)),
                    (this._invokeTaskZS =
                      n && (n.onInvokeTask ? n : t._invokeTaskZS)),
                    (this._invokeTaskDlgt =
                      n && (n.onInvokeTask ? t : t._invokeTaskDlgt)),
                    (this._invokeTaskCurrZone =
                      n &&
                      (n.onInvokeTask ? this.zone : t._invokeTaskCurrZone)),
                    (this._cancelTaskZS =
                      n && (n.onCancelTask ? n : t._cancelTaskZS)),
                    (this._cancelTaskDlgt =
                      n && (n.onCancelTask ? t : t._cancelTaskDlgt)),
                    (this._cancelTaskCurrZone =
                      n &&
                      (n.onCancelTask ? this.zone : t._cancelTaskCurrZone)),
                    (this._hasTaskZS = null),
                    (this._hasTaskDlgt = null),
                    (this._hasTaskDlgtOwner = null),
                    (this._hasTaskCurrZone = null);
                  const o = n && n.onHasTask;
                  (o || (t && t._hasTaskZS)) &&
                    ((this._hasTaskZS = o ? n : c),
                    (this._hasTaskDlgt = t),
                    (this._hasTaskDlgtOwner = this),
                    (this._hasTaskCurrZone = e),
                    n.onScheduleTask ||
                      ((this._scheduleTaskZS = c),
                      (this._scheduleTaskDlgt = t),
                      (this._scheduleTaskCurrZone = this.zone)),
                    n.onInvokeTask ||
                      ((this._invokeTaskZS = c),
                      (this._invokeTaskDlgt = t),
                      (this._invokeTaskCurrZone = this.zone)),
                    n.onCancelTask ||
                      ((this._cancelTaskZS = c),
                      (this._cancelTaskDlgt = t),
                      (this._cancelTaskCurrZone = this.zone)));
                }
                fork(e, t) {
                  return this._forkZS
                    ? this._forkZS.onFork(this._forkDlgt, this.zone, e, t)
                    : new i(e, t);
                }
                intercept(e, t, n) {
                  return this._interceptZS
                    ? this._interceptZS.onIntercept(
                        this._interceptDlgt,
                        this._interceptCurrZone,
                        e,
                        t,
                        n
                      )
                    : t;
                }
                invoke(e, t, n, o, r) {
                  return this._invokeZS
                    ? this._invokeZS.onInvoke(
                        this._invokeDlgt,
                        this._invokeCurrZone,
                        e,
                        t,
                        n,
                        o,
                        r
                      )
                    : t.apply(n, o);
                }
                handleError(e, t) {
                  return (
                    !this._handleErrorZS ||
                    this._handleErrorZS.onHandleError(
                      this._handleErrorDlgt,
                      this._handleErrorCurrZone,
                      e,
                      t
                    )
                  );
                }
                scheduleTask(e, t) {
                  let n = t;
                  if (this._scheduleTaskZS)
                    this._hasTaskZS &&
                      n._zoneDelegates.push(this._hasTaskDlgtOwner),
                      (n = this._scheduleTaskZS.onScheduleTask(
                        this._scheduleTaskDlgt,
                        this._scheduleTaskCurrZone,
                        e,
                        t
                      )),
                      n || (n = t);
                  else if (t.scheduleFn) t.scheduleFn(t);
                  else {
                    if (t.type != S)
                      throw new Error("Task is missing scheduleFn.");
                    k(t);
                  }
                  return n;
                }
                invokeTask(e, t, n, o) {
                  return this._invokeTaskZS
                    ? this._invokeTaskZS.onInvokeTask(
                        this._invokeTaskDlgt,
                        this._invokeTaskCurrZone,
                        e,
                        t,
                        n,
                        o
                      )
                    : t.callback.apply(n, o);
                }
                cancelTask(e, t) {
                  let n;
                  if (this._cancelTaskZS)
                    n = this._cancelTaskZS.onCancelTask(
                      this._cancelTaskDlgt,
                      this._cancelTaskCurrZone,
                      e,
                      t
                    );
                  else {
                    if (!t.cancelFn) throw Error("Task is not cancelable");
                    n = t.cancelFn(t);
                  }
                  return n;
                }
                hasTask(e, t) {
                  try {
                    this._hasTaskZS &&
                      this._hasTaskZS.onHasTask(
                        this._hasTaskDlgt,
                        this._hasTaskCurrZone,
                        e,
                        t
                      );
                  } catch (n) {
                    this.handleError(e, n);
                  }
                }
                _updateTaskCount(e, t) {
                  const n = this._taskCounts,
                    o = n[e],
                    r = (n[e] = o + t);
                  if (r < 0)
                    throw new Error("More tasks executed then were scheduled.");
                  (0 != o && 0 != r) ||
                    this.hasTask(this.zone, {
                      microTask: n.microTask > 0,
                      macroTask: n.macroTask > 0,
                      eventTask: n.eventTask > 0,
                      change: e,
                    });
                }
              }
              class u {
                constructor(t, n, o, r, s, a) {
                  if (
                    ((this._zone = null),
                    (this.runCount = 0),
                    (this._zoneDelegates = null),
                    (this._state = "notScheduled"),
                    (this.type = t),
                    (this.source = n),
                    (this.data = r),
                    (this.scheduleFn = s),
                    (this.cancelFn = a),
                    !o)
                  )
                    throw new Error("callback is not defined");
                  this.callback = o;
                  const i = this;
                  this.invoke =
                    t === P && r && r.useG
                      ? u.invokeTask
                      : function () {
                          return u.invokeTask.call(e, i, this, arguments);
                        };
                }
                static invokeTask(e, t, n) {
                  e || (e = this), I++;
                  try {
                    return e.runCount++, e.zone.runTask(e, t, n);
                  } finally {
                    1 == I && m(), I--;
                  }
                }
                get zone() {
                  return this._zone;
                }
                get state() {
                  return this._state;
                }
                cancelScheduleRequest() {
                  this._transitionTo(v, b);
                }
                _transitionTo(e, t, n) {
                  if (this._state !== t && this._state !== n)
                    throw new Error(
                      `${this.type} '${
                        this.source
                      }': can not transition to '${e}', expecting state '${t}'${
                        n ? " or '" + n + "'" : ""
                      }, was '${this._state}'.`
                    );
                  (this._state = e), e == v && (this._zoneDelegates = null);
                }
                toString() {
                  return this.data && void 0 !== this.data.handleId
                    ? this.data.handleId.toString()
                    : Object.prototype.toString.call(this);
                }
                toJSON() {
                  return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount,
                  };
                }
              }
              const h = s("setTimeout"),
                p = s("Promise"),
                f = s("then");
              let d,
                g = [],
                _ = !1;
              function k(t) {
                if (0 === I && 0 === g.length)
                  if ((d || (e[p] && (d = e[p].resolve(0))), d)) {
                    let e = d[f];
                    e || (e = d.then), e.call(d, m);
                  } else e[h](m, 0);
                t && g.push(t);
              }
              function m() {
                if (!_) {
                  for (_ = !0; g.length; ) {
                    const t = g;
                    g = [];
                    for (let n = 0; n < t.length; n++) {
                      const o = t[n];
                      try {
                        o.zone.runTask(o, null, null);
                      } catch (e) {
                        O.onUnhandledError(e);
                      }
                    }
                  }
                  O.microtaskDrainDone(), (_ = !1);
                }
              }
              const y = { name: "NO ZONE" },
                v = "notScheduled",
                b = "scheduling",
                T = "scheduled",
                E = "running",
                w = "canceling",
                Z = "unknown",
                S = "microTask",
                D = "macroTask",
                P = "eventTask",
                C = {},
                O = {
                  symbol: s,
                  currentZoneFrame: () => z,
                  onUnhandledError: R,
                  microtaskDrainDone: R,
                  scheduleMicroTask: k,
                  showUncaughtError: () =>
                    !i[s("ignoreConsoleErrorUncaughtError")],
                  patchEventTarget: () => [],
                  patchOnProperties: R,
                  patchMethod: () => R,
                  bindArguments: () => [],
                  patchThen: () => R,
                  patchMacroTask: () => R,
                  setNativePromise: (e) => {
                    e && "function" == typeof e.resolve && (d = e.resolve(0));
                  },
                  patchEventPrototype: () => R,
                  isIEOrEdge: () => !1,
                  getGlobalObjects: () => {},
                  ObjectDefineProperty: () => R,
                  ObjectGetOwnPropertyDescriptor: () => {},
                  ObjectCreate: () => {},
                  ArraySlice: () => [],
                  patchClass: () => R,
                  wrapWithCurrentZone: () => R,
                  filterProperties: () => [],
                  attachOriginToPatched: () => R,
                  _redefineProperty: () => R,
                  patchCallbacks: () => R,
                };
              let z = { parent: null, zone: new i(null, null) },
                j = null,
                I = 0;
              function R() {}
              o("Zone", "Zone"), (e.Zone = i);
            })(
              ("undefined" != typeof window && window) ||
                ("undefined" != typeof self && self) ||
                global
            ),
              Zone.__load_patch("ZoneAwarePromise", (e, t, n) => {
                const o = Object.getOwnPropertyDescriptor,
                  r = Object.defineProperty,
                  s = n.symbol,
                  a = [],
                  i =
                    !0 === e[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
                  c = s("Promise"),
                  l = s("then");
                (n.onUnhandledError = (e) => {
                  if (n.showUncaughtError()) {
                    const t = e && e.rejection;
                    t
                      ? console.error(
                          "Unhandled Promise rejection:",
                          t instanceof Error ? t.message : t,
                          "; Zone:",
                          e.zone.name,
                          "; Task:",
                          e.task && e.task.source,
                          "; Value:",
                          t,
                          t instanceof Error ? t.stack : void 0
                        )
                      : console.error(e);
                  }
                }),
                  (n.microtaskDrainDone = () => {
                    for (; a.length; ) {
                      const t = a.shift();
                      try {
                        t.zone.runGuarded(() => {
                          throw t;
                        });
                      } catch (e) {
                        h(e);
                      }
                    }
                  });
                const u = s("unhandledPromiseRejectionHandler");
                function h(e) {
                  n.onUnhandledError(e);
                  try {
                    const n = t[u];
                    "function" == typeof n && n.call(this, e);
                  } catch (o) {}
                }
                function p(e) {
                  return e && e.then;
                }
                function f(e) {
                  return e;
                }
                function d(e) {
                  return D.reject(e);
                }
                const g = s("state"),
                  _ = s("value"),
                  k = s("finally"),
                  m = s("parentPromiseValue"),
                  y = s("parentPromiseState");
                function v(e, t) {
                  return (n) => {
                    try {
                      T(e, t, n);
                    } catch (o) {
                      T(e, !1, o);
                    }
                  };
                }
                const b = s("currentTaskTrace");
                function T(e, o, s) {
                  const c = (function () {
                    let e = !1;
                    return function (t) {
                      return function () {
                        e || ((e = !0), t.apply(null, arguments));
                      };
                    };
                  })();
                  if (e === s)
                    throw new TypeError("Promise resolved with itself");
                  if (null === e[g]) {
                    let h = null;
                    try {
                      ("object" != typeof s && "function" != typeof s) ||
                        (h = s && s.then);
                    } catch (u) {
                      return (
                        c(() => {
                          T(e, !1, u);
                        })(),
                        e
                      );
                    }
                    if (
                      !1 !== o &&
                      s instanceof D &&
                      s.hasOwnProperty(g) &&
                      s.hasOwnProperty(_) &&
                      null !== s[g]
                    )
                      w(s), T(e, s[g], s[_]);
                    else if (!1 !== o && "function" == typeof h)
                      try {
                        h.call(s, c(v(e, o)), c(v(e, !1)));
                      } catch (u) {
                        c(() => {
                          T(e, !1, u);
                        })();
                      }
                    else {
                      e[g] = o;
                      const c = e[_];
                      if (
                        ((e[_] = s),
                        e[k] === k &&
                          !0 === o &&
                          ((e[g] = e[y]), (e[_] = e[m])),
                        !1 === o && s instanceof Error)
                      ) {
                        const e =
                          t.currentTask &&
                          t.currentTask.data &&
                          t.currentTask.data.__creationTrace__;
                        e &&
                          r(s, b, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: e,
                          });
                      }
                      for (let t = 0; t < c.length; )
                        Z(e, c[t++], c[t++], c[t++], c[t++]);
                      if (0 == c.length && 0 == o) {
                        e[g] = 0;
                        let o = s;
                        if (!i)
                          try {
                            throw new Error(
                              "Uncaught (in promise): " +
                                ((l = s) &&
                                l.toString === Object.prototype.toString
                                  ? ((l.constructor && l.constructor.name) ||
                                      "") +
                                    ": " +
                                    JSON.stringify(l)
                                  : l
                                  ? l.toString()
                                  : Object.prototype.toString.call(l)) +
                                (s && s.stack ? "\n" + s.stack : "")
                            );
                          } catch (u) {
                            o = u;
                          }
                        (o.rejection = s),
                          (o.promise = e),
                          (o.zone = t.current),
                          (o.task = t.currentTask),
                          a.push(o),
                          n.scheduleMicroTask();
                      }
                    }
                  }
                  var l;
                  return e;
                }
                const E = s("rejectionHandledHandler");
                function w(e) {
                  if (0 === e[g]) {
                    try {
                      const n = t[E];
                      n &&
                        "function" == typeof n &&
                        n.call(this, { rejection: e[_], promise: e });
                    } catch (n) {}
                    e[g] = !1;
                    for (let t = 0; t < a.length; t++)
                      e === a[t].promise && a.splice(t, 1);
                  }
                }
                function Z(e, t, n, o, r) {
                  w(e);
                  const s = e[g],
                    a = s
                      ? "function" == typeof o
                        ? o
                        : f
                      : "function" == typeof r
                      ? r
                      : d;
                  t.scheduleMicroTask(
                    "Promise.then",
                    () => {
                      try {
                        const o = e[_],
                          r = !!n && k === n[k];
                        r && ((n[m] = o), (n[y] = s));
                        const i = t.run(
                          a,
                          void 0,
                          r && a !== d && a !== f ? [] : [o]
                        );
                        T(n, !0, i);
                      } catch (o) {
                        T(n, !1, o);
                      }
                    },
                    n
                  );
                }
                const S = function () {};
                class D {
                  static toString() {
                    return "function ZoneAwarePromise() { [native code] }";
                  }
                  static resolve(e) {
                    return T(new this(null), !0, e);
                  }
                  static reject(e) {
                    return T(new this(null), !1, e);
                  }
                  static race(e) {
                    let t,
                      n,
                      o = new this((e, o) => {
                        (t = e), (n = o);
                      });
                    function r(e) {
                      t(e);
                    }
                    function s(e) {
                      n(e);
                    }
                    for (let a of e)
                      p(a) || (a = this.resolve(a)), a.then(r, s);
                    return o;
                  }
                  static all(e) {
                    return D.allWithCallback(e);
                  }
                  static allSettled(e) {
                    return (
                      this && this.prototype instanceof D ? this : D
                    ).allWithCallback(e, {
                      thenCallback: (e) => ({ status: "fulfilled", value: e }),
                      errorCallback: (e) => ({ status: "rejected", reason: e }),
                    });
                  }
                  static allWithCallback(e, t) {
                    let n,
                      o,
                      r = new this((e, t) => {
                        (n = e), (o = t);
                      }),
                      s = 2,
                      a = 0;
                    const i = [];
                    for (let l of e) {
                      p(l) || (l = this.resolve(l));
                      const e = a;
                      try {
                        l.then(
                          (o) => {
                            (i[e] = t ? t.thenCallback(o) : o),
                              s--,
                              0 === s && n(i);
                          },
                          (r) => {
                            t
                              ? ((i[e] = t.errorCallback(r)),
                                s--,
                                0 === s && n(i))
                              : o(r);
                          }
                        );
                      } catch (c) {
                        o(c);
                      }
                      s++, a++;
                    }
                    return (s -= 2), 0 === s && n(i), r;
                  }
                  constructor(e) {
                    const t = this;
                    if (!(t instanceof D))
                      throw new Error("Must be an instanceof Promise.");
                    (t[g] = null), (t[_] = []);
                    try {
                      e && e(v(t, !0), v(t, !1));
                    } catch (n) {
                      T(t, !1, n);
                    }
                  }
                  get [Symbol.toStringTag]() {
                    return "Promise";
                  }
                  get [Symbol.species]() {
                    return D;
                  }
                  then(e, n) {
                    let o = this.constructor[Symbol.species];
                    (o && "function" == typeof o) ||
                      (o = this.constructor || D);
                    const r = new o(S),
                      s = t.current;
                    return (
                      null == this[g]
                        ? this[_].push(s, r, e, n)
                        : Z(this, s, r, e, n),
                      r
                    );
                  }
                  catch(e) {
                    return this.then(null, e);
                  }
                  finally(e) {
                    let n = this.constructor[Symbol.species];
                    (n && "function" == typeof n) || (n = D);
                    const o = new n(S);
                    o[k] = k;
                    const r = t.current;
                    return (
                      null == this[g]
                        ? this[_].push(r, o, e, e)
                        : Z(this, r, o, e, e),
                      o
                    );
                  }
                }
                (D.resolve = D.resolve),
                  (D.reject = D.reject),
                  (D.race = D.race),
                  (D.all = D.all);
                const P = (e[c] = e.Promise),
                  C = t.__symbol__("ZoneAwarePromise");
                let O = o(e, "Promise");
                (O && !O.configurable) ||
                  (O && delete O.writable,
                  O && delete O.value,
                  O || (O = { configurable: !0, enumerable: !0 }),
                  (O.get = function () {
                    return e[C] ? e[C] : e[c];
                  }),
                  (O.set = function (t) {
                    t === D
                      ? (e[C] = t)
                      : ((e[c] = t),
                        t.prototype[l] || j(t),
                        n.setNativePromise(t));
                  }),
                  r(e, "Promise", O)),
                  (e.Promise = D);
                const z = s("thenPatched");
                function j(e) {
                  const t = e.prototype,
                    n = o(t, "then");
                  if (n && (!1 === n.writable || !n.configurable)) return;
                  const r = t.then;
                  (t[l] = r),
                    (e.prototype.then = function (e, t) {
                      return new D((e, t) => {
                        r.call(this, e, t);
                      }).then(e, t);
                    }),
                    (e[z] = !0);
                }
                if (((n.patchThen = j), P)) {
                  j(P);
                  const t = e.fetch;
                  "function" == typeof t &&
                    ((e[n.symbol("fetch")] = t),
                    (e.fetch =
                      ((I = t),
                      function () {
                        let e = I.apply(this, arguments);
                        if (e instanceof D) return e;
                        let t = e.constructor;
                        return t[z] || j(t), e;
                      })));
                }
                var I;
                return (Promise[t.__symbol__("uncaughtPromiseErrors")] = a), D;
              });
            const e = Object.getOwnPropertyDescriptor,
              t = Object.defineProperty,
              n = Object.getPrototypeOf,
              o = Object.create,
              r = Array.prototype.slice,
              s = Zone.__symbol__("addEventListener"),
              a = Zone.__symbol__("removeEventListener"),
              i = Zone.__symbol__("");
            function c(e, t) {
              return Zone.current.wrap(e, t);
            }
            function l(e, t, n, o, r) {
              return Zone.current.scheduleMacroTask(e, t, n, o, r);
            }
            const u = Zone.__symbol__,
              h = "undefined" != typeof window,
              p = h ? window : void 0,
              f = (h && p) || ("object" == typeof self && self) || global,
              d = [null];
            function g(e, t) {
              for (let n = e.length - 1; n >= 0; n--)
                "function" == typeof e[n] && (e[n] = c(e[n], t + "_" + n));
              return e;
            }
            function _(e) {
              return (
                !e ||
                (!1 !== e.writable &&
                  !("function" == typeof e.get && void 0 === e.set))
              );
            }
            const k =
                "undefined" != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope,
              m =
                !("nw" in f) &&
                void 0 !== f.process &&
                "[object process]" === {}.toString.call(f.process),
              y = !m && !k && !(!h || !p.HTMLElement),
              v =
                void 0 !== f.process &&
                "[object process]" === {}.toString.call(f.process) &&
                !k &&
                !(!h || !p.HTMLElement),
              b = {},
              T = function (e) {
                if (!(e = e || f.event)) return;
                let t = b[e.type];
                t || (t = b[e.type] = u("ON_PROPERTY" + e.type));
                const n = this || e.target || f,
                  o = n[t];
                let r;
                if (y && n === p && "error" === e.type) {
                  const t = e;
                  (r =
                    o &&
                    o.call(
                      this,
                      t.message,
                      t.filename,
                      t.lineno,
                      t.colno,
                      t.error
                    )),
                    !0 === r && e.preventDefault();
                } else
                  (r = o && o.apply(this, arguments)),
                    null == r || r || e.preventDefault();
                return r;
              };
            function E(n, o, r) {
              let s = e(n, o);
              if (
                (!s &&
                  r &&
                  e(r, o) &&
                  (s = { enumerable: !0, configurable: !0 }),
                !s || !s.configurable)
              )
                return;
              const a = u("on" + o + "patched");
              if (n.hasOwnProperty(a) && n[a]) return;
              delete s.writable, delete s.value;
              const i = s.get,
                c = s.set,
                l = o.substr(2);
              let h = b[l];
              h || (h = b[l] = u("ON_PROPERTY" + l)),
                (s.set = function (e) {
                  let t = this;
                  t || n !== f || (t = f),
                    t &&
                      (t[h] && t.removeEventListener(l, T),
                      c && c.apply(t, d),
                      "function" == typeof e
                        ? ((t[h] = e), t.addEventListener(l, T, !1))
                        : (t[h] = null));
                }),
                (s.get = function () {
                  let e = this;
                  if ((e || n !== f || (e = f), !e)) return null;
                  const t = e[h];
                  if (t) return t;
                  if (i) {
                    let t = i && i.call(this);
                    if (t)
                      return (
                        s.set.call(this, t),
                        "function" == typeof e.removeAttribute &&
                          e.removeAttribute(o),
                        t
                      );
                  }
                  return null;
                }),
                t(n, o, s),
                (n[a] = !0);
            }
            function w(e, t, n) {
              if (t) for (let o = 0; o < t.length; o++) E(e, "on" + t[o], n);
              else {
                const t = [];
                for (const n in e) "on" == n.substr(0, 2) && t.push(n);
                for (let o = 0; o < t.length; o++) E(e, t[o], n);
              }
            }
            const Z = u("originalInstance");
            function S(e) {
              const n = f[e];
              if (!n) return;
              (f[u(e)] = n),
                (f[e] = function () {
                  const t = g(arguments, e);
                  switch (t.length) {
                    case 0:
                      this[Z] = new n();
                      break;
                    case 1:
                      this[Z] = new n(t[0]);
                      break;
                    case 2:
                      this[Z] = new n(t[0], t[1]);
                      break;
                    case 3:
                      this[Z] = new n(t[0], t[1], t[2]);
                      break;
                    case 4:
                      this[Z] = new n(t[0], t[1], t[2], t[3]);
                      break;
                    default:
                      throw new Error("Arg list too long.");
                  }
                }),
                C(f[e], n);
              const o = new n(function () {});
              let r;
              for (r in o)
                ("XMLHttpRequest" === e && "responseBlob" === r) ||
                  (function (n) {
                    "function" == typeof o[n]
                      ? (f[e].prototype[n] = function () {
                          return this[Z][n].apply(this[Z], arguments);
                        })
                      : t(f[e].prototype, n, {
                          set: function (t) {
                            "function" == typeof t
                              ? ((this[Z][n] = c(t, e + "." + n)),
                                C(this[Z][n], t))
                              : (this[Z][n] = t);
                          },
                          get: function () {
                            return this[Z][n];
                          },
                        });
                  })(r);
              for (r in n)
                "prototype" !== r && n.hasOwnProperty(r) && (f[e][r] = n[r]);
            }
            function D(t, o, r) {
              let s = t;
              for (; s && !s.hasOwnProperty(o); ) s = n(s);
              !s && t[o] && (s = t);
              const a = u(o);
              let i = null;
              if (s && !(i = s[a]) && ((i = s[a] = s[o]), _(s && e(s, o)))) {
                const e = r(i, a, o);
                (s[o] = function () {
                  return e(this, arguments);
                }),
                  C(s[o], i);
              }
              return i;
            }
            function P(e, t, n) {
              let o = null;
              function r(e) {
                const t = e.data;
                return (
                  (t.args[t.cbIdx] = function () {
                    e.invoke.apply(this, arguments);
                  }),
                  o.apply(t.target, t.args),
                  e
                );
              }
              o = D(
                e,
                t,
                (e) =>
                  function (t, o) {
                    const s = n(t, o);
                    return s.cbIdx >= 0 && "function" == typeof o[s.cbIdx]
                      ? l(s.name, o[s.cbIdx], s, r)
                      : e.apply(t, o);
                  }
              );
            }
            function C(e, t) {
              e[u("OriginalDelegate")] = t;
            }
            let O = !1,
              z = !1;
            function j() {
              try {
                const e = p.navigator.userAgent;
                if (-1 !== e.indexOf("MSIE ") || -1 !== e.indexOf("Trident/"))
                  return !0;
              } catch (e) {}
              return !1;
            }
            function I() {
              if (O) return z;
              O = !0;
              try {
                const e = p.navigator.userAgent;
                (-1 === e.indexOf("MSIE ") &&
                  -1 === e.indexOf("Trident/") &&
                  -1 === e.indexOf("Edge/")) ||
                  (z = !0);
              } catch (e) {}
              return z;
            }
            Zone.__load_patch("toString", (e) => {
              const t = Function.prototype.toString,
                n = u("OriginalDelegate"),
                o = u("Promise"),
                r = u("Error"),
                s = function () {
                  if ("function" == typeof this) {
                    const s = this[n];
                    if (s)
                      return "function" == typeof s
                        ? t.call(s)
                        : Object.prototype.toString.call(s);
                    if (this === Promise) {
                      const n = e[o];
                      if (n) return t.call(n);
                    }
                    if (this === Error) {
                      const n = e[r];
                      if (n) return t.call(n);
                    }
                  }
                  return t.call(this);
                };
              (s[n] = t), (Function.prototype.toString = s);
              const a = Object.prototype.toString;
              Object.prototype.toString = function () {
                return this instanceof Promise
                  ? "[object Promise]"
                  : a.call(this);
              };
            });
            let R = !1;
            if ("undefined" != typeof window)
              try {
                const e = Object.defineProperty({}, "passive", {
                  get: function () {
                    R = !0;
                  },
                });
                window.addEventListener("test", e, e),
                  window.removeEventListener("test", e, e);
              } catch (ie) {
                R = !1;
              }
            const N = { useG: !0 },
              x = {},
              L = {},
              M = new RegExp("^" + i + "(\\w+)(true|false)$"),
              A = u("propagationStopped");
            function H(e, t) {
              const n = (t ? t(e) : e) + "false",
                o = (t ? t(e) : e) + "true",
                r = i + n,
                s = i + o;
              (x[e] = {}), (x[e].false = r), (x[e].true = s);
            }
            function F(e, t, o) {
              const r = (o && o.add) || "addEventListener",
                s = (o && o.rm) || "removeEventListener",
                a = (o && o.listeners) || "eventListeners",
                c = (o && o.rmAll) || "removeAllListeners",
                l = u(r),
                h = "." + r + ":",
                p = function (e, t, n) {
                  if (e.isRemoved) return;
                  const o = e.callback;
                  "object" == typeof o &&
                    o.handleEvent &&
                    ((e.callback = (e) => o.handleEvent(e)),
                    (e.originalDelegate = o)),
                    e.invoke(e, t, [n]);
                  const r = e.options;
                  r &&
                    "object" == typeof r &&
                    r.once &&
                    t[s].call(
                      t,
                      n.type,
                      e.originalDelegate ? e.originalDelegate : e.callback,
                      r
                    );
                },
                f = function (t) {
                  if (!(t = t || e.event)) return;
                  const n = this || t.target || e,
                    o = n[x[t.type].false];
                  if (o)
                    if (1 === o.length) p(o[0], n, t);
                    else {
                      const e = o.slice();
                      for (let o = 0; o < e.length && (!t || !0 !== t[A]); o++)
                        p(e[o], n, t);
                    }
                },
                d = function (t) {
                  if (!(t = t || e.event)) return;
                  const n = this || t.target || e,
                    o = n[x[t.type].true];
                  if (o)
                    if (1 === o.length) p(o[0], n, t);
                    else {
                      const e = o.slice();
                      for (let o = 0; o < e.length && (!t || !0 !== t[A]); o++)
                        p(e[o], n, t);
                    }
                };
              function g(t, o) {
                if (!t) return !1;
                let p = !0;
                o && void 0 !== o.useG && (p = o.useG);
                const g = o && o.vh;
                let _ = !0;
                o && void 0 !== o.chkDup && (_ = o.chkDup);
                let k = !1;
                o && void 0 !== o.rt && (k = o.rt);
                let y = t;
                for (; y && !y.hasOwnProperty(r); ) y = n(y);
                if ((!y && t[r] && (y = t), !y)) return !1;
                if (y[l]) return !1;
                const v = o && o.eventNameToString,
                  b = {},
                  T = (y[l] = y[r]),
                  E = (y[u(s)] = y[s]),
                  w = (y[u(a)] = y[a]),
                  Z = (y[u(c)] = y[c]);
                let S;
                function D(e, t) {
                  return !R && "object" == typeof e && e
                    ? !!e.capture
                    : R && t
                    ? "boolean" == typeof e
                      ? { capture: e, passive: !0 }
                      : e
                      ? "object" == typeof e && !1 !== e.passive
                        ? Object.assign(Object.assign({}, e), { passive: !0 })
                        : e
                      : { passive: !0 }
                    : e;
                }
                o && o.prepend && (S = y[u(o.prepend)] = y[o.prepend]);
                const P = p
                    ? function (e) {
                        if (!b.isExisting)
                          return T.call(
                            b.target,
                            b.eventName,
                            b.capture ? d : f,
                            b.options
                          );
                      }
                    : function (e) {
                        return T.call(
                          b.target,
                          b.eventName,
                          e.invoke,
                          b.options
                        );
                      },
                  O = p
                    ? function (e) {
                        if (!e.isRemoved) {
                          const t = x[e.eventName];
                          let n;
                          t && (n = t[e.capture ? "true" : "false"]);
                          const o = n && e.target[n];
                          if (o)
                            for (let r = 0; r < o.length; r++)
                              if (o[r] === e) {
                                o.splice(r, 1),
                                  (e.isRemoved = !0),
                                  0 === o.length &&
                                    ((e.allRemoved = !0), (e.target[n] = null));
                                break;
                              }
                        }
                        if (e.allRemoved)
                          return E.call(
                            e.target,
                            e.eventName,
                            e.capture ? d : f,
                            e.options
                          );
                      }
                    : function (e) {
                        return E.call(
                          e.target,
                          e.eventName,
                          e.invoke,
                          e.options
                        );
                      },
                  z =
                    o && o.diff
                      ? o.diff
                      : function (e, t) {
                          const n = typeof t;
                          return (
                            ("function" === n && e.callback === t) ||
                            ("object" === n && e.originalDelegate === t)
                          );
                        },
                  j = Zone[u("BLACK_LISTED_EVENTS")],
                  I = e[u("PASSIVE_EVENTS")],
                  A = function (t, n, r, s, a = !1, i = !1) {
                    return function () {
                      const c = this || e;
                      let l = arguments[0];
                      o && o.transferEventName && (l = o.transferEventName(l));
                      let u = arguments[1];
                      if (!u) return t.apply(this, arguments);
                      if (m && "uncaughtException" === l)
                        return t.apply(this, arguments);
                      let h = !1;
                      if ("function" != typeof u) {
                        if (!u.handleEvent) return t.apply(this, arguments);
                        h = !0;
                      }
                      if (g && !g(t, u, c, arguments)) return;
                      const f = R && !!I && -1 !== I.indexOf(l),
                        d = D(arguments[2], f);
                      if (j)
                        for (let e = 0; e < j.length; e++)
                          if (l === j[e])
                            return f
                              ? t.call(c, l, u, d)
                              : t.apply(this, arguments);
                      const k = !!d && ("boolean" == typeof d || d.capture),
                        y = !(!d || "object" != typeof d) && d.once,
                        T = Zone.current;
                      let E = x[l];
                      E || (H(l, v), (E = x[l]));
                      const w = E[k ? "true" : "false"];
                      let Z,
                        S = c[w],
                        P = !1;
                      if (S) {
                        if (((P = !0), _))
                          for (let e = 0; e < S.length; e++)
                            if (z(S[e], u)) return;
                      } else S = c[w] = [];
                      const C = c.constructor.name,
                        O = L[C];
                      O && (Z = O[l]),
                        Z || (Z = C + n + (v ? v(l) : l)),
                        (b.options = d),
                        y && (b.options.once = !1),
                        (b.target = c),
                        (b.capture = k),
                        (b.eventName = l),
                        (b.isExisting = P);
                      const M = p ? N : void 0;
                      M && (M.taskData = b);
                      const A = T.scheduleEventTask(Z, u, M, r, s);
                      return (
                        (b.target = null),
                        M && (M.taskData = null),
                        y && (d.once = !0),
                        (R || "boolean" != typeof A.options) && (A.options = d),
                        (A.target = c),
                        (A.capture = k),
                        (A.eventName = l),
                        h && (A.originalDelegate = u),
                        i ? S.unshift(A) : S.push(A),
                        a ? c : void 0
                      );
                    };
                  };
                return (
                  (y[r] = A(T, h, P, O, k)),
                  S &&
                    (y.prependListener = A(
                      S,
                      ".prependListener:",
                      function (e) {
                        return S.call(
                          b.target,
                          b.eventName,
                          e.invoke,
                          b.options
                        );
                      },
                      O,
                      k,
                      !0
                    )),
                  (y[s] = function () {
                    const t = this || e;
                    let n = arguments[0];
                    o && o.transferEventName && (n = o.transferEventName(n));
                    const r = arguments[2],
                      s = !!r && ("boolean" == typeof r || r.capture),
                      a = arguments[1];
                    if (!a) return E.apply(this, arguments);
                    if (g && !g(E, a, t, arguments)) return;
                    const c = x[n];
                    let l;
                    c && (l = c[s ? "true" : "false"]);
                    const u = l && t[l];
                    if (u)
                      for (let e = 0; e < u.length; e++) {
                        const o = u[e];
                        if (z(o, a))
                          return (
                            u.splice(e, 1),
                            (o.isRemoved = !0),
                            0 === u.length &&
                              ((o.allRemoved = !0),
                              (t[l] = null),
                              "string" == typeof n) &&
                              (t[i + "ON_PROPERTY" + n] = null),
                            o.zone.cancelTask(o),
                            k ? t : void 0
                          );
                      }
                    return E.apply(this, arguments);
                  }),
                  (y[a] = function () {
                    const t = this || e;
                    let n = arguments[0];
                    o && o.transferEventName && (n = o.transferEventName(n));
                    const r = [],
                      s = G(t, v ? v(n) : n);
                    for (let e = 0; e < s.length; e++) {
                      const t = s[e];
                      r.push(
                        t.originalDelegate ? t.originalDelegate : t.callback
                      );
                    }
                    return r;
                  }),
                  (y[c] = function () {
                    const t = this || e;
                    let n = arguments[0];
                    if (n) {
                      o && o.transferEventName && (n = o.transferEventName(n));
                      const e = x[n];
                      if (e) {
                        const o = t[e.false],
                          r = t[e.true];
                        if (o) {
                          const e = o.slice();
                          for (let t = 0; t < e.length; t++) {
                            const o = e[t];
                            this[s].call(
                              this,
                              n,
                              o.originalDelegate
                                ? o.originalDelegate
                                : o.callback,
                              o.options
                            );
                          }
                        }
                        if (r) {
                          const e = r.slice();
                          for (let t = 0; t < e.length; t++) {
                            const o = e[t];
                            this[s].call(
                              this,
                              n,
                              o.originalDelegate
                                ? o.originalDelegate
                                : o.callback,
                              o.options
                            );
                          }
                        }
                      }
                    } else {
                      const e = Object.keys(t);
                      for (let t = 0; t < e.length; t++) {
                        const n = M.exec(e[t]);
                        let o = n && n[1];
                        o && "removeListener" !== o && this[c].call(this, o);
                      }
                      this[c].call(this, "removeListener");
                    }
                    if (k) return this;
                  }),
                  C(y[r], T),
                  C(y[s], E),
                  Z && C(y[c], Z),
                  w && C(y[a], w),
                  !0
                );
              }
              let _ = [];
              for (let n = 0; n < t.length; n++) _[n] = g(t[n], o);
              return _;
            }
            function G(e, t) {
              if (!t) {
                const n = [];
                for (let o in e) {
                  const r = M.exec(o);
                  let s = r && r[1];
                  if (s && (!t || s === t)) {
                    const t = e[o];
                    if (t) for (let e = 0; e < t.length; e++) n.push(t[e]);
                  }
                }
                return n;
              }
              let n = x[t];
              n || (H(t), (n = x[t]));
              const o = e[n.false],
                r = e[n.true];
              return o ? (r ? o.concat(r) : o.slice()) : r ? r.slice() : [];
            }
            function q(e, t) {
              const n = e.Event;
              n &&
                n.prototype &&
                t.patchMethod(
                  n.prototype,
                  "stopImmediatePropagation",
                  (e) =>
                    function (t, n) {
                      (t[A] = !0), e && e.apply(t, n);
                    }
                );
            }
            function B(e, t, n, o, r) {
              const s = Zone.__symbol__(o);
              if (t[s]) return;
              const a = (t[s] = t[o]);
              (t[o] = function (s, i, c) {
                return (
                  i &&
                    i.prototype &&
                    r.forEach(function (t) {
                      const r = `${n}.${o}::` + t,
                        s = i.prototype;
                      if (s.hasOwnProperty(t)) {
                        const n = e.ObjectGetOwnPropertyDescriptor(s, t);
                        n && n.value
                          ? ((n.value = e.wrapWithCurrentZone(n.value, r)),
                            e._redefineProperty(i.prototype, t, n))
                          : s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r));
                      } else s[t] && (s[t] = e.wrapWithCurrentZone(s[t], r));
                    }),
                  a.call(t, s, i, c)
                );
              }),
                e.attachOriginToPatched(t[o], a);
            }
            const W = [
                "absolutedeviceorientation",
                "afterinput",
                "afterprint",
                "appinstalled",
                "beforeinstallprompt",
                "beforeprint",
                "beforeunload",
                "devicelight",
                "devicemotion",
                "deviceorientation",
                "deviceorientationabsolute",
                "deviceproximity",
                "hashchange",
                "languagechange",
                "message",
                "mozbeforepaint",
                "offline",
                "online",
                "paint",
                "pageshow",
                "pagehide",
                "popstate",
                "rejectionhandled",
                "storage",
                "unhandledrejection",
                "unload",
                "userproximity",
                "vrdisplayconnected",
                "vrdisplaydisconnected",
                "vrdisplaypresentchange",
              ],
              U = [
                "encrypted",
                "waitingforkey",
                "msneedkey",
                "mozinterruptbegin",
                "mozinterruptend",
              ],
              V = ["load"],
              $ = [
                "blur",
                "error",
                "focus",
                "load",
                "resize",
                "scroll",
                "messageerror",
              ],
              X = ["bounce", "finish", "start"],
              J = [
                "loadstart",
                "progress",
                "abort",
                "error",
                "load",
                "progress",
                "timeout",
                "loadend",
                "readystatechange",
              ],
              K = [
                "upgradeneeded",
                "complete",
                "abort",
                "success",
                "error",
                "blocked",
                "versionchange",
                "close",
              ],
              Y = ["close", "error", "open", "message"],
              Q = ["error", "message"],
              ee = [
                "abort",
                "animationcancel",
                "animationend",
                "animationiteration",
                "auxclick",
                "beforeinput",
                "blur",
                "cancel",
                "canplay",
                "canplaythrough",
                "change",
                "compositionstart",
                "compositionupdate",
                "compositionend",
                "cuechange",
                "click",
                "close",
                "contextmenu",
                "curechange",
                "dblclick",
                "drag",
                "dragend",
                "dragenter",
                "dragexit",
                "dragleave",
                "dragover",
                "drop",
                "durationchange",
                "emptied",
                "ended",
                "error",
                "focus",
                "focusin",
                "focusout",
                "gotpointercapture",
                "input",
                "invalid",
                "keydown",
                "keypress",
                "keyup",
                "load",
                "loadstart",
                "loadeddata",
                "loadedmetadata",
                "lostpointercapture",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseout",
                "mouseover",
                "mouseup",
                "mousewheel",
                "orientationchange",
                "pause",
                "play",
                "playing",
                "pointercancel",
                "pointerdown",
                "pointerenter",
                "pointerleave",
                "pointerlockchange",
                "mozpointerlockchange",
                "webkitpointerlockerchange",
                "pointerlockerror",
                "mozpointerlockerror",
                "webkitpointerlockerror",
                "pointermove",
                "pointout",
                "pointerover",
                "pointerup",
                "progress",
                "ratechange",
                "reset",
                "resize",
                "scroll",
                "seeked",
                "seeking",
                "select",
                "selectionchange",
                "selectstart",
                "show",
                "sort",
                "stalled",
                "submit",
                "suspend",
                "timeupdate",
                "volumechange",
                "touchcancel",
                "touchmove",
                "touchstart",
                "touchend",
                "transitioncancel",
                "transitionend",
                "waiting",
                "wheel",
              ].concat(
                [
                  "webglcontextrestored",
                  "webglcontextlost",
                  "webglcontextcreationerror",
                ],
                ["autocomplete", "autocompleteerror"],
                ["toggle"],
                [
                  "afterscriptexecute",
                  "beforescriptexecute",
                  "DOMContentLoaded",
                  "freeze",
                  "fullscreenchange",
                  "mozfullscreenchange",
                  "webkitfullscreenchange",
                  "msfullscreenchange",
                  "fullscreenerror",
                  "mozfullscreenerror",
                  "webkitfullscreenerror",
                  "msfullscreenerror",
                  "readystatechange",
                  "visibilitychange",
                  "resume",
                ],
                W,
                [
                  "beforecopy",
                  "beforecut",
                  "beforepaste",
                  "copy",
                  "cut",
                  "paste",
                  "dragstart",
                  "loadend",
                  "animationstart",
                  "search",
                  "transitionrun",
                  "transitionstart",
                  "webkitanimationend",
                  "webkitanimationiteration",
                  "webkitanimationstart",
                  "webkittransitionend",
                ],
                [
                  "activate",
                  "afterupdate",
                  "ariarequest",
                  "beforeactivate",
                  "beforedeactivate",
                  "beforeeditfocus",
                  "beforeupdate",
                  "cellchange",
                  "controlselect",
                  "dataavailable",
                  "datasetchanged",
                  "datasetcomplete",
                  "errorupdate",
                  "filterchange",
                  "layoutcomplete",
                  "losecapture",
                  "move",
                  "moveend",
                  "movestart",
                  "propertychange",
                  "resizeend",
                  "resizestart",
                  "rowenter",
                  "rowexit",
                  "rowsdelete",
                  "rowsinserted",
                  "command",
                  "compassneedscalibration",
                  "deactivate",
                  "help",
                  "mscontentzoom",
                  "msmanipulationstatechanged",
                  "msgesturechange",
                  "msgesturedoubletap",
                  "msgestureend",
                  "msgesturehold",
                  "msgesturestart",
                  "msgesturetap",
                  "msgotpointercapture",
                  "msinertiastart",
                  "mslostpointercapture",
                  "mspointercancel",
                  "mspointerdown",
                  "mspointerenter",
                  "mspointerhover",
                  "mspointerleave",
                  "mspointermove",
                  "mspointerout",
                  "mspointerover",
                  "mspointerup",
                  "pointerout",
                  "mssitemodejumplistitemremoved",
                  "msthumbnailclick",
                  "stop",
                  "storagecommit",
                ]
              );
            function te(e, t, n) {
              if (!n || 0 === n.length) return t;
              const o = n.filter((t) => t.target === e);
              if (!o || 0 === o.length) return t;
              const r = o[0].ignoreProperties;
              return t.filter((e) => -1 === r.indexOf(e));
            }
            function ne(e, t, n, o) {
              e && w(e, te(e, t, n), o);
            }
            function oe(e, t) {
              if (m && !v) return;
              if (Zone[e.symbol("patchEvents")]) return;
              const o = "undefined" != typeof WebSocket,
                r = t.__Zone_ignore_on_properties;
              if (y) {
                const e = window,
                  t = j ? [{ target: e, ignoreProperties: ["error"] }] : [];
                ne(e, ee.concat(["messageerror"]), r ? r.concat(t) : r, n(e)),
                  ne(Document.prototype, ee, r),
                  void 0 !== e.SVGElement && ne(e.SVGElement.prototype, ee, r),
                  ne(Element.prototype, ee, r),
                  ne(HTMLElement.prototype, ee, r),
                  ne(HTMLMediaElement.prototype, U, r),
                  ne(HTMLFrameSetElement.prototype, W.concat($), r),
                  ne(HTMLBodyElement.prototype, W.concat($), r),
                  ne(HTMLFrameElement.prototype, V, r),
                  ne(HTMLIFrameElement.prototype, V, r);
                const o = e.HTMLMarqueeElement;
                o && ne(o.prototype, X, r);
                const s = e.Worker;
                s && ne(s.prototype, Q, r);
              }
              const s = t.XMLHttpRequest;
              s && ne(s.prototype, J, r);
              const a = t.XMLHttpRequestEventTarget;
              a && ne(a && a.prototype, J, r),
                "undefined" != typeof IDBIndex &&
                  (ne(IDBIndex.prototype, K, r),
                  ne(IDBRequest.prototype, K, r),
                  ne(IDBOpenDBRequest.prototype, K, r),
                  ne(IDBDatabase.prototype, K, r),
                  ne(IDBTransaction.prototype, K, r),
                  ne(IDBCursor.prototype, K, r)),
                o && ne(WebSocket.prototype, Y, r);
            }
            Zone.__load_patch("util", (n, s, a) => {
              (a.patchOnProperties = w),
                (a.patchMethod = D),
                (a.bindArguments = g),
                (a.patchMacroTask = P);
              const l = s.__symbol__("BLACK_LISTED_EVENTS"),
                u = s.__symbol__("UNPATCHED_EVENTS");
              n[u] && (n[l] = n[u]),
                n[l] && (s[l] = s[u] = n[l]),
                (a.patchEventPrototype = q),
                (a.patchEventTarget = F),
                (a.isIEOrEdge = I),
                (a.ObjectDefineProperty = t),
                (a.ObjectGetOwnPropertyDescriptor = e),
                (a.ObjectCreate = o),
                (a.ArraySlice = r),
                (a.patchClass = S),
                (a.wrapWithCurrentZone = c),
                (a.filterProperties = te),
                (a.attachOriginToPatched = C),
                (a._redefineProperty = Object.defineProperty),
                (a.patchCallbacks = B),
                (a.getGlobalObjects = () => ({
                  globalSources: L,
                  zoneSymbolEventNames: x,
                  eventNames: ee,
                  isBrowser: y,
                  isMix: v,
                  isNode: m,
                  TRUE_STR: "true",
                  FALSE_STR: "false",
                  ZONE_SYMBOL_PREFIX: i,
                  ADD_EVENT_LISTENER_STR: "addEventListener",
                  REMOVE_EVENT_LISTENER_STR: "removeEventListener",
                }));
            });
            const re = u("zoneTask");
            function se(e, t, n, o) {
              let r = null,
                s = null;
              n += o;
              const a = {};
              function i(t) {
                const n = t.data;
                return (
                  (n.args[0] = function () {
                    try {
                      t.invoke.apply(this, arguments);
                    } finally {
                      (t.data && t.data.isPeriodic) ||
                        ("number" == typeof n.handleId
                          ? delete a[n.handleId]
                          : n.handleId && (n.handleId[re] = null));
                    }
                  }),
                  (n.handleId = r.apply(e, n.args)),
                  t
                );
              }
              function c(e) {
                return s(e.data.handleId);
              }
              (r = D(
                e,
                (t += o),
                (n) =>
                  function (r, s) {
                    if ("function" == typeof s[0]) {
                      const e = l(
                        t,
                        s[0],
                        {
                          isPeriodic: "Interval" === o,
                          delay:
                            "Timeout" === o || "Interval" === o
                              ? s[1] || 0
                              : void 0,
                          args: s,
                        },
                        i,
                        c
                      );
                      if (!e) return e;
                      const n = e.data.handleId;
                      return (
                        "number" == typeof n ? (a[n] = e) : n && (n[re] = e),
                        n &&
                          n.ref &&
                          n.unref &&
                          "function" == typeof n.ref &&
                          "function" == typeof n.unref &&
                          ((e.ref = n.ref.bind(n)),
                          (e.unref = n.unref.bind(n))),
                        "number" == typeof n || n ? n : e
                      );
                    }
                    return n.apply(e, s);
                  }
              )),
                (s = D(
                  e,
                  n,
                  (t) =>
                    function (n, o) {
                      const r = o[0];
                      let s;
                      "number" == typeof r
                        ? (s = a[r])
                        : ((s = r && r[re]), s || (s = r)),
                        s && "string" == typeof s.type
                          ? "notScheduled" !== s.state &&
                            ((s.cancelFn && s.data.isPeriodic) ||
                              0 === s.runCount) &&
                            ("number" == typeof r
                              ? delete a[r]
                              : r && (r[re] = null),
                            s.zone.cancelTask(s))
                          : t.apply(e, o);
                    }
                ));
            }
            function ae(e, t) {
              if (Zone[t.symbol("patchEventTarget")]) return;
              const {
                eventNames: n,
                zoneSymbolEventNames: o,
                TRUE_STR: r,
                FALSE_STR: s,
                ZONE_SYMBOL_PREFIX: a,
              } = t.getGlobalObjects();
              for (let c = 0; c < n.length; c++) {
                const e = n[c],
                  t = a + (e + s),
                  i = a + (e + r);
                (o[e] = {}), (o[e][s] = t), (o[e][r] = i);
              }
              const i = e.EventTarget;
              return i && i.prototype
                ? (t.patchEventTarget(e, [i && i.prototype]), !0)
                : void 0;
            }
            Zone.__load_patch("legacy", (e) => {
              const t = e[Zone.__symbol__("legacyPatch")];
              t && t();
            }),
              Zone.__load_patch("timers", (e) => {
                se(e, "set", "clear", "Timeout"),
                  se(e, "set", "clear", "Interval"),
                  se(e, "set", "clear", "Immediate");
              }),
              Zone.__load_patch("requestAnimationFrame", (e) => {
                se(e, "request", "cancel", "AnimationFrame"),
                  se(e, "mozRequest", "mozCancel", "AnimationFrame"),
                  se(e, "webkitRequest", "webkitCancel", "AnimationFrame");
              }),
              Zone.__load_patch("blocking", (e, t) => {
                const n = ["alert", "prompt", "confirm"];
                for (let o = 0; o < n.length; o++)
                  D(
                    e,
                    n[o],
                    (n, o, r) =>
                      function (o, s) {
                        return t.current.run(n, e, s, r);
                      }
                  );
              }),
              Zone.__load_patch("EventTarget", (e, t, n) => {
                (function (e, t) {
                  t.patchEventPrototype(e, t);
                })(e, n),
                  ae(e, n);
                const o = e.XMLHttpRequestEventTarget;
                o && o.prototype && n.patchEventTarget(e, [o.prototype]),
                  S("MutationObserver"),
                  S("WebKitMutationObserver"),
                  S("IntersectionObserver"),
                  S("FileReader");
              }),
              Zone.__load_patch("on_property", (e, t, n) => {
                oe(n, e);
              }),
              Zone.__load_patch("customElements", (e, t, n) => {
                !(function (e, t) {
                  const { isBrowser: n, isMix: o } = t.getGlobalObjects();
                  (n || o) &&
                    e.customElements &&
                    "customElements" in e &&
                    t.patchCallbacks(
                      t,
                      e.customElements,
                      "customElements",
                      "define",
                      [
                        "connectedCallback",
                        "disconnectedCallback",
                        "adoptedCallback",
                        "attributeChangedCallback",
                      ]
                    );
                })(e, n);
              }),
              Zone.__load_patch("XHR", (e, t) => {
                !(function (e) {
                  const p = e.XMLHttpRequest;
                  if (!p) return;
                  const f = p.prototype;
                  let d = f[s],
                    g = f[a];
                  if (!d) {
                    const t = e.XMLHttpRequestEventTarget;
                    if (t) {
                      const e = t.prototype;
                      (d = e[s]), (g = e[a]);
                    }
                  }
                  function _(e) {
                    const o = e.data,
                      c = o.target;
                    (c[i] = !1), (c[h] = !1);
                    const l = c[r];
                    d || ((d = c[s]), (g = c[a])),
                      l && g.call(c, "readystatechange", l);
                    const u = (c[r] = () => {
                      if (c.readyState === c.DONE)
                        if (!o.aborted && c[i] && "scheduled" === e.state) {
                          const n = c[t.__symbol__("loadfalse")];
                          if (n && n.length > 0) {
                            const r = e.invoke;
                            (e.invoke = function () {
                              const n = c[t.__symbol__("loadfalse")];
                              for (let t = 0; t < n.length; t++)
                                n[t] === e && n.splice(t, 1);
                              o.aborted || "scheduled" !== e.state || r.call(e);
                            }),
                              n.push(e);
                          } else e.invoke();
                        } else o.aborted || !1 !== c[i] || (c[h] = !0);
                    });
                    return (
                      d.call(c, "readystatechange", u),
                      c[n] || (c[n] = e),
                      T.apply(c, o.args),
                      (c[i] = !0),
                      e
                    );
                  }
                  function k() {}
                  function m(e) {
                    const t = e.data;
                    return (t.aborted = !0), E.apply(t.target, t.args);
                  }
                  const y = D(
                      f,
                      "open",
                      () =>
                        function (e, t) {
                          return (
                            (e[o] = 0 == t[2]), (e[c] = t[1]), y.apply(e, t)
                          );
                        }
                    ),
                    v = u("fetchTaskAborting"),
                    b = u("fetchTaskScheduling"),
                    T = D(
                      f,
                      "send",
                      () =>
                        function (e, n) {
                          if (!0 === t.current[b]) return T.apply(e, n);
                          if (e[o]) return T.apply(e, n);
                          {
                            const t = {
                                target: e,
                                url: e[c],
                                isPeriodic: !1,
                                args: n,
                                aborted: !1,
                              },
                              o = l("XMLHttpRequest.send", k, t, _, m);
                            e &&
                              !0 === e[h] &&
                              !t.aborted &&
                              "scheduled" === o.state &&
                              o.invoke();
                          }
                        }
                    ),
                    E = D(
                      f,
                      "abort",
                      () =>
                        function (e, o) {
                          const r = e[n];
                          if (r && "string" == typeof r.type) {
                            if (
                              null == r.cancelFn ||
                              (r.data && r.data.aborted)
                            )
                              return;
                            r.zone.cancelTask(r);
                          } else if (!0 === t.current[v]) return E.apply(e, o);
                        }
                    );
                })(e);
                const n = u("xhrTask"),
                  o = u("xhrSync"),
                  r = u("xhrListener"),
                  i = u("xhrScheduled"),
                  c = u("xhrURL"),
                  h = u("xhrErrorBeforeScheduled");
              }),
              Zone.__load_patch("geolocation", (t) => {
                t.navigator &&
                  t.navigator.geolocation &&
                  (function (t, n) {
                    const o = t.constructor.name;
                    for (let r = 0; r < n.length; r++) {
                      const s = n[r],
                        a = t[s];
                      if (a) {
                        if (!_(e(t, s))) continue;
                        t[s] = ((e) => {
                          const t = function () {
                            return e.apply(this, g(arguments, o + "." + s));
                          };
                          return C(t, e), t;
                        })(a);
                      }
                    }
                  })(t.navigator.geolocation, [
                    "getCurrentPosition",
                    "watchPosition",
                  ]);
              }),
              Zone.__load_patch("PromiseRejectionEvent", (e, t) => {
                function n(t) {
                  return function (n) {
                    G(e, t).forEach((o) => {
                      const r = e.PromiseRejectionEvent;
                      if (r) {
                        const e = new r(t, {
                          promise: n.promise,
                          reason: n.rejection,
                        });
                        o.invoke(e);
                      }
                    });
                  };
                }
                e.PromiseRejectionEvent &&
                  ((t[u("unhandledPromiseRejectionHandler")] =
                    n("unhandledrejection")),
                  (t[u("rejectionHandledHandler")] = n("rejectionhandled")));
              });
          })
            ? o.call(t, n, t, e)
            : o) || (e.exports = r);
    },
  },
  [[2, 0]],
]);
!(function (e) {
  function r(r) {
    for (
      var n, l, f = r[0], i = r[1], p = r[2], c = 0, s = [];
      c < f.length;
      c++
    )
      (l = f[c]),
        Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]),
        (o[l] = 0);
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    for (a && a(r); s.length; ) s.shift()();
    return u.push.apply(u, p || []), t();
  }
  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, f = 1; f < t.length; f++)
        0 !== o[t[f]] && (n = !1);
      n && (u.splice(r--, 1), (e = l((l.s = t[0]))));
    }
    return e;
  }
  var n = {},
    o = { 0: 0 },
    u = [];
  function l(r) {
    if (n[r]) return n[r].exports;
    var t = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(t.exports, t, t.exports, l), (t.l = !0), t.exports;
  }
  (l.m = e),
    (l.c = n),
    (l.d = function (e, r, t) {
      l.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: t });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (l.t = function (e, r) {
      if ((1 & r && (e = l(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (l.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var n in e)
          l.d(
            t,
            n,
            function (r) {
              return e[r];
            }.bind(null, n)
          );
      return t;
    }),
    (l.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(r, "a", r), r;
    }),
    (l.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (l.p = "");
  var f = (window.webpackJsonp = window.webpackJsonp || []),
    i = f.push.bind(f);
  (f.push = r), (f = f.slice());
  for (var p = 0; p < f.length; p++) r(f[p]);
  var a = i;
  t();
})([]);
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n("eAG3");
    },
    "1D88": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    "3Rp7": function (e, t, n) {
      "use strict";
      var i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UserRoleE = void 0),
        ((i = t.UserRoleE || (t.UserRoleE = {})).ADMIN = "ADMIN"),
        (i.USER = "USER");
    },
    AJ5D: function (e, t, n) {
      "use strict";
      var i, r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PaymentStatusE = t.PaymentGatewayE = void 0),
        ((r = t.PaymentGatewayE || (t.PaymentGatewayE = {})).YOOKASSA =
          "YOOKASSA"),
        (r.INVOICE = "INVOICE"),
        ((i = t.PaymentStatusE || (t.PaymentStatusE = {})).PENDING = "PENDING"),
        (i.SUCCEEDED = "SUCCEEDED"),
        (i.CANCELLED = "CANCELLED");
    },
    Bx8h: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    K70k: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    MAYq: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    Oc93: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    QFtD: function (e, t, n) {
      var i;
      !(function (r, s, o, a) {
        "use strict";
        var l,
          u = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = s.createElement("div"),
          h = Math.round,
          d = Math.abs,
          p = Date.now;
        function f(e, t, n) {
          return setTimeout(b(e, n), t);
        }
        function g(e, t, n) {
          return !!Array.isArray(e) && (m(e, n[t], n), !0);
        }
        function m(e, t, n) {
          var i;
          if (e)
            if (e.forEach) e.forEach(t, n);
            else if (void 0 !== e.length)
              for (i = 0; i < e.length; ) t.call(n, e[i], i, e), i++;
            else for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
        }
        function w(e, t, n) {
          var i = "DEPRECATED METHOD: " + t + "\n" + n + " AT \n";
          return function () {
            var t = new Error("get-stack-trace"),
              n =
                t && t.stack
                  ? t.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              s = r.console && (r.console.warn || r.console.log);
            return s && s.call(r.console, i, n), e.apply(this, arguments);
          };
        }
        l =
          "function" != typeof Object.assign
            ? function (e) {
                if (null == e)
                  throw new TypeError(
                    "Cannot convert undefined or null to object"
                  );
                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                  var i = arguments[n];
                  if (null != i)
                    for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r]);
                }
                return t;
              }
            : Object.assign;
        var v = w(
            function (e, t, n) {
              for (var i = Object.keys(t), r = 0; r < i.length; )
                (!n || (n && void 0 === e[i[r]])) && (e[i[r]] = t[i[r]]), r++;
              return e;
            },
            "extend",
            "Use `assign`."
          ),
          y = w(
            function (e, t) {
              return v(e, t, !0);
            },
            "merge",
            "Use `assign`."
          );
        function _(e, t, n) {
          var i,
            r = t.prototype;
          ((i = e.prototype = Object.create(r)).constructor = e),
            (i._super = r),
            n && l(i, n);
        }
        function b(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        function x(e, t) {
          return "function" == typeof e ? e.apply((t && t[0]) || void 0, t) : e;
        }
        function C(e, t) {
          return void 0 === e ? t : e;
        }
        function S(e, t, n) {
          m(I(t), function (t) {
            e.addEventListener(t, n, !1);
          });
        }
        function E(e, t, n) {
          m(I(t), function (t) {
            e.removeEventListener(t, n, !1);
          });
        }
        function T(e, t) {
          for (; e; ) {
            if (e == t) return !0;
            e = e.parentNode;
          }
          return !1;
        }
        function k(e, t) {
          return e.indexOf(t) > -1;
        }
        function I(e) {
          return e.trim().split(/\s+/g);
        }
        function A(e, t, n) {
          if (e.indexOf && !n) return e.indexOf(t);
          for (var i = 0; i < e.length; ) {
            if ((n && e[i][n] == t) || (!n && e[i] === t)) return i;
            i++;
          }
          return -1;
        }
        function R(e) {
          return Array.prototype.slice.call(e, 0);
        }
        function M(e, t, n) {
          for (var i = [], r = [], s = 0; s < e.length; ) {
            var o = t ? e[s][t] : e[s];
            A(r, o) < 0 && i.push(e[s]), (r[s] = o), s++;
          }
          return (
            n &&
              (i = t
                ? i.sort(function (e, n) {
                    return e[t] > n[t];
                  })
                : i.sort()),
            i
          );
        }
        function D(e, t) {
          for (
            var n, i, r = t[0].toUpperCase() + t.slice(1), s = 0;
            s < u.length;

          ) {
            if ((i = (n = u[s]) ? n + r : t) in e) return i;
            s++;
          }
        }
        var N = 1;
        function O(e) {
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow || r;
        }
        var P = "ontouchstart" in r,
          L = void 0 !== D(r, "PointerEvent"),
          F =
            P &&
            /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          j = ["x", "y"],
          H = ["clientX", "clientY"];
        function V(e, t) {
          var n = this;
          (this.manager = e),
            (this.callback = t),
            (this.element = e.element),
            (this.target = e.options.inputTarget),
            (this.domHandler = function (t) {
              x(e.options.enable, [e]) && n.handler(t);
            }),
            this.init();
        }
        function z(e, t, n) {
          var i = n.pointers.length,
            r = n.changedPointers.length,
            s = 1 & t && i - r == 0,
            o = 12 & t && i - r == 0;
          (n.isFirst = !!s),
            (n.isFinal = !!o),
            s && (e.session = {}),
            (n.eventType = t),
            (function (e, t) {
              var n = e.session,
                i = t.pointers,
                r = i.length;
              n.firstInput || (n.firstInput = $(t)),
                r > 1 && !n.firstMultiple
                  ? (n.firstMultiple = $(t))
                  : 1 === r && (n.firstMultiple = !1);
              var s = n.firstInput,
                o = n.firstMultiple,
                a = o ? o.center : s.center,
                l = (t.center = B(i));
              (t.timeStamp = p()),
                (t.deltaTime = t.timeStamp - s.timeStamp),
                (t.angle = Z(a, l)),
                (t.distance = q(a, l)),
                (function (e, t) {
                  var n = t.center,
                    i = e.offsetDelta || {},
                    r = e.prevDelta || {},
                    s = e.prevInput || {};
                  (1 !== t.eventType && 4 !== s.eventType) ||
                    ((r = e.prevDelta = { x: s.deltaX || 0, y: s.deltaY || 0 }),
                    (i = e.offsetDelta = { x: n.x, y: n.y })),
                    (t.deltaX = r.x + (n.x - i.x)),
                    (t.deltaY = r.y + (n.y - i.y));
                })(n, t),
                (t.offsetDirection = W(t.deltaX, t.deltaY));
              var u,
                c,
                h = U(t.deltaTime, t.deltaX, t.deltaY);
              (t.overallVelocityX = h.x),
                (t.overallVelocityY = h.y),
                (t.overallVelocity = d(h.x) > d(h.y) ? h.x : h.y),
                (t.scale = o
                  ? ((u = o.pointers),
                    q((c = i)[0], c[1], H) / q(u[0], u[1], H))
                  : 1),
                (t.rotation = o
                  ? (function (e, t) {
                      return Z(t[1], t[0], H) + Z(e[1], e[0], H);
                    })(o.pointers, i)
                  : 0),
                (t.maxPointers = n.prevInput
                  ? t.pointers.length > n.prevInput.maxPointers
                    ? t.pointers.length
                    : n.prevInput.maxPointers
                  : t.pointers.length),
                (function (e, t) {
                  var n,
                    i,
                    r,
                    s,
                    o = e.lastInterval || t,
                    a = t.timeStamp - o.timeStamp;
                  if (8 != t.eventType && (a > 25 || void 0 === o.velocity)) {
                    var l = t.deltaX - o.deltaX,
                      u = t.deltaY - o.deltaY,
                      c = U(a, l, u);
                    (i = c.x),
                      (r = c.y),
                      (n = d(c.x) > d(c.y) ? c.x : c.y),
                      (s = W(l, u)),
                      (e.lastInterval = t);
                  } else
                    (n = o.velocity),
                      (i = o.velocityX),
                      (r = o.velocityY),
                      (s = o.direction);
                  (t.velocity = n),
                    (t.velocityX = i),
                    (t.velocityY = r),
                    (t.direction = s);
                })(n, t);
              var f = e.element;
              T(t.srcEvent.target, f) && (f = t.srcEvent.target),
                (t.target = f);
            })(e, n),
            e.emit("hammer.input", n),
            e.recognize(n),
            (e.session.prevInput = n);
        }
        function $(e) {
          for (var t = [], n = 0; n < e.pointers.length; )
            (t[n] = {
              clientX: h(e.pointers[n].clientX),
              clientY: h(e.pointers[n].clientY),
            }),
              n++;
          return {
            timeStamp: p(),
            pointers: t,
            center: B(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY,
          };
        }
        function B(e) {
          var t = e.length;
          if (1 === t) return { x: h(e[0].clientX), y: h(e[0].clientY) };
          for (var n = 0, i = 0, r = 0; r < t; )
            (n += e[r].clientX), (i += e[r].clientY), r++;
          return { x: h(n / t), y: h(i / t) };
        }
        function U(e, t, n) {
          return { x: t / e || 0, y: n / e || 0 };
        }
        function W(e, t) {
          return e === t ? 1 : d(e) >= d(t) ? (e < 0 ? 2 : 4) : t < 0 ? 8 : 16;
        }
        function q(e, t, n) {
          n || (n = j);
          var i = t[n[0]] - e[n[0]],
            r = t[n[1]] - e[n[1]];
          return Math.sqrt(i * i + r * r);
        }
        function Z(e, t, n) {
          return (
            n || (n = j),
            (180 * Math.atan2(t[n[1]] - e[n[1]], t[n[0]] - e[n[0]])) / Math.PI
          );
        }
        V.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && S(this.element, this.evEl, this.domHandler),
              this.evTarget && S(this.target, this.evTarget, this.domHandler),
              this.evWin && S(O(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && E(this.element, this.evEl, this.domHandler),
              this.evTarget && E(this.target, this.evTarget, this.domHandler),
              this.evWin && E(O(this.element), this.evWin, this.domHandler);
          },
        };
        var G = { mousedown: 1, mousemove: 2, mouseup: 4 };
        function Y() {
          (this.evEl = "mousedown"),
            (this.evWin = "mousemove mouseup"),
            (this.pressed = !1),
            V.apply(this, arguments);
        }
        _(Y, V, {
          handler: function (e) {
            var t = G[e.type];
            1 & t && 0 === e.button && (this.pressed = !0),
              2 & t && 1 !== e.which && (t = 4),
              this.pressed &&
                (4 & t && (this.pressed = !1),
                this.callback(this.manager, t, {
                  pointers: [e],
                  changedPointers: [e],
                  pointerType: "mouse",
                  srcEvent: e,
                }));
          },
        });
        var Q = {
            pointerdown: 1,
            pointermove: 2,
            pointerup: 4,
            pointercancel: 8,
            pointerout: 8,
          },
          X = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
          K = "pointerdown",
          J = "pointermove pointerup pointercancel";
        function ee() {
          (this.evEl = K),
            (this.evWin = J),
            V.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        r.MSPointerEvent &&
          !r.PointerEvent &&
          ((K = "MSPointerDown"),
          (J = "MSPointerMove MSPointerUp MSPointerCancel")),
          _(ee, V, {
            handler: function (e) {
              var t = this.store,
                n = !1,
                i = e.type.toLowerCase().replace("ms", ""),
                r = Q[i],
                s = X[e.pointerType] || e.pointerType,
                o = "touch" == s,
                a = A(t, e.pointerId, "pointerId");
              1 & r && (0 === e.button || o)
                ? a < 0 && (t.push(e), (a = t.length - 1))
                : 12 & r && (n = !0),
                a < 0 ||
                  ((t[a] = e),
                  this.callback(this.manager, r, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: s,
                    srcEvent: e,
                  }),
                  n && t.splice(a, 1));
            },
          });
        var te = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function ne() {
          (this.evTarget = "touchstart"),
            (this.evWin = "touchstart touchmove touchend touchcancel"),
            (this.started = !1),
            V.apply(this, arguments);
        }
        function ie(e, t) {
          var n = R(e.touches),
            i = R(e.changedTouches);
          return 12 & t && (n = M(n.concat(i), "identifier", !0)), [n, i];
        }
        _(ne, V, {
          handler: function (e) {
            var t = te[e.type];
            if ((1 === t && (this.started = !0), this.started)) {
              var n = ie.call(this, e, t);
              12 & t && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                  pointers: n[0],
                  changedPointers: n[1],
                  pointerType: "touch",
                  srcEvent: e,
                });
            }
          },
        });
        var re = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
        function se() {
          (this.evTarget = "touchstart touchmove touchend touchcancel"),
            (this.targetIds = {}),
            V.apply(this, arguments);
        }
        function oe(e, t) {
          var n = R(e.touches),
            i = this.targetIds;
          if (3 & t && 1 === n.length) return (i[n[0].identifier] = !0), [n, n];
          var r,
            s,
            o = R(e.changedTouches),
            a = [],
            l = this.target;
          if (
            ((s = n.filter(function (e) {
              return T(e.target, l);
            })),
            1 === t)
          )
            for (r = 0; r < s.length; ) (i[s[r].identifier] = !0), r++;
          for (r = 0; r < o.length; )
            i[o[r].identifier] && a.push(o[r]),
              12 & t && delete i[o[r].identifier],
              r++;
          return a.length ? [M(s.concat(a), "identifier", !0), a] : void 0;
        }
        function ae() {
          V.apply(this, arguments);
          var e = b(this.handler, this);
          (this.touch = new se(this.manager, e)),
            (this.mouse = new Y(this.manager, e)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function le(e, t) {
          1 & e
            ? ((this.primaryTouch = t.changedPointers[0].identifier),
              ue.call(this, t))
            : 12 & e && ue.call(this, t);
        }
        function ue(e) {
          var t = e.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var n = { x: t.clientX, y: t.clientY };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function () {
              var e = i.indexOf(n);
              e > -1 && i.splice(e, 1);
            }, 2500);
          }
        }
        function ce(e) {
          for (
            var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0;
            i < this.lastTouches.length;
            i++
          ) {
            var r = this.lastTouches[i],
              s = Math.abs(t - r.x),
              o = Math.abs(n - r.y);
            if (s <= 25 && o <= 25) return !0;
          }
          return !1;
        }
        _(se, V, {
          handler: function (e) {
            var t = re[e.type],
              n = oe.call(this, e, t);
            n &&
              this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e,
              });
          },
        }),
          _(ae, V, {
            handler: function (e, t, n) {
              var i = "mouse" == n.pointerType;
              if (
                !(
                  i &&
                  n.sourceCapabilities &&
                  n.sourceCapabilities.firesTouchEvents
                )
              ) {
                if ("touch" == n.pointerType) le.call(this, t, n);
                else if (i && ce.call(this, n)) return;
                this.callback(e, t, n);
              }
            },
            destroy: function () {
              this.touch.destroy(), this.mouse.destroy();
            },
          });
        var he = D(c.style, "touchAction"),
          de = void 0 !== he,
          pe = (function () {
            if (!de) return !1;
            var e = {},
              t = r.CSS && r.CSS.supports;
            return (
              [
                "auto",
                "manipulation",
                "pan-y",
                "pan-x",
                "pan-x pan-y",
                "none",
              ].forEach(function (n) {
                e[n] = !t || r.CSS.supports("touch-action", n);
              }),
              e
            );
          })();
        function fe(e, t) {
          (this.manager = e), this.set(t);
        }
        function ge(e) {
          (this.options = l({}, this.defaults, e || {})),
            (this.id = N++),
            (this.manager = null),
            (this.options.enable = C(this.options.enable, !0)),
            (this.state = 1),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function me(e) {
          return 16 & e
            ? "cancel"
            : 8 & e
            ? "end"
            : 4 & e
            ? "move"
            : 2 & e
            ? "start"
            : "";
        }
        function we(e) {
          return 16 == e
            ? "down"
            : 8 == e
            ? "up"
            : 2 == e
            ? "left"
            : 4 == e
            ? "right"
            : "";
        }
        function ve(e, t) {
          var n = t.manager;
          return n ? n.get(e) : e;
        }
        function ye() {
          ge.apply(this, arguments);
        }
        function _e() {
          ye.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function be() {
          ye.apply(this, arguments);
        }
        function xe() {
          ge.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function Ce() {
          ye.apply(this, arguments);
        }
        function Se() {
          ye.apply(this, arguments);
        }
        function Ee() {
          ge.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function Te(e, t) {
          return (
            ((t = t || {}).recognizers = C(t.recognizers, Te.defaults.preset)),
            new ke(e, t)
          );
        }
        function ke(e, t) {
          (this.options = l({}, Te.defaults, t || {})),
            (this.options.inputTarget = this.options.inputTarget || e),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = e),
            (this.input = new (this.options.inputClass ||
              (L ? ee : F ? se : P ? ae : Y))(this, z)),
            (this.touchAction = new fe(this, this.options.touchAction)),
            Ie(this, !0),
            m(
              this.options.recognizers,
              function (e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
              },
              this
            );
        }
        function Ie(e, t) {
          var n,
            i = e.element;
          i.style &&
            (m(e.options.cssProps, function (r, s) {
              (n = D(i.style, s)),
                t
                  ? ((e.oldCssProps[n] = i.style[n]), (i.style[n] = r))
                  : (i.style[n] = e.oldCssProps[n] || "");
            }),
            t || (e.oldCssProps = {}));
        }
        (fe.prototype = {
          set: function (e) {
            "compute" == e && (e = this.compute()),
              de &&
                this.manager.element.style &&
                pe[e] &&
                (this.manager.element.style[he] = e),
              (this.actions = e.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var e = [];
            return (
              m(this.manager.recognizers, function (t) {
                x(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
              }),
              (function (e) {
                if (k(e, "none")) return "none";
                var t = k(e, "pan-x"),
                  n = k(e, "pan-y");
                return t && n
                  ? "none"
                  : t || n
                  ? t
                    ? "pan-x"
                    : "pan-y"
                  : k(e, "manipulation")
                  ? "manipulation"
                  : "auto";
              })(e.join(" "))
            );
          },
          preventDefaults: function (e) {
            var t = e.srcEvent,
              n = e.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault();
            else {
              var i = this.actions,
                r = k(i, "none") && !pe.none,
                s = k(i, "pan-y") && !pe["pan-y"],
                o = k(i, "pan-x") && !pe["pan-x"];
              if (
                r &&
                1 === e.pointers.length &&
                e.distance < 2 &&
                e.deltaTime < 250
              )
                return;
              if (!o || !s)
                return r || (s && 6 & n) || (o && 24 & n)
                  ? this.preventSrc(t)
                  : void 0;
            }
          },
          preventSrc: function (e) {
            (this.manager.session.prevented = !0), e.preventDefault();
          },
        }),
          (ge.prototype = {
            defaults: {},
            set: function (e) {
              return (
                l(this.options, e),
                this.manager && this.manager.touchAction.update(),
                this
              );
            },
            recognizeWith: function (e) {
              if (g(e, "recognizeWith", this)) return this;
              var t = this.simultaneous;
              return (
                t[(e = ve(e, this)).id] ||
                  ((t[e.id] = e), e.recognizeWith(this)),
                this
              );
            },
            dropRecognizeWith: function (e) {
              return (
                g(e, "dropRecognizeWith", this) ||
                  ((e = ve(e, this)), delete this.simultaneous[e.id]),
                this
              );
            },
            requireFailure: function (e) {
              if (g(e, "requireFailure", this)) return this;
              var t = this.requireFail;
              return (
                -1 === A(t, (e = ve(e, this))) &&
                  (t.push(e), e.requireFailure(this)),
                this
              );
            },
            dropRequireFailure: function (e) {
              if (g(e, "dropRequireFailure", this)) return this;
              e = ve(e, this);
              var t = A(this.requireFail, e);
              return t > -1 && this.requireFail.splice(t, 1), this;
            },
            hasRequireFailures: function () {
              return this.requireFail.length > 0;
            },
            canRecognizeWith: function (e) {
              return !!this.simultaneous[e.id];
            },
            emit: function (e) {
              var t = this,
                n = this.state;
              function i(n) {
                t.manager.emit(n, e);
              }
              n < 8 && i(t.options.event + me(n)),
                i(t.options.event),
                e.additionalEvent && i(e.additionalEvent),
                n >= 8 && i(t.options.event + me(n));
            },
            tryEmit: function (e) {
              if (this.canEmit()) return this.emit(e);
              this.state = 32;
            },
            canEmit: function () {
              for (var e = 0; e < this.requireFail.length; ) {
                if (!(33 & this.requireFail[e].state)) return !1;
                e++;
              }
              return !0;
            },
            recognize: function (e) {
              var t = l({}, e);
              if (!x(this.options.enable, [this, t]))
                return this.reset(), void (this.state = 32);
              56 & this.state && (this.state = 1),
                (this.state = this.process(t)),
                30 & this.state && this.tryEmit(t);
            },
            process: function (e) {},
            getTouchAction: function () {},
            reset: function () {},
          }),
          _(ye, ge, {
            defaults: { pointers: 1 },
            attrTest: function (e) {
              var t = this.options.pointers;
              return 0 === t || e.pointers.length === t;
            },
            process: function (e) {
              var t = this.state,
                n = e.eventType,
                i = 6 & t,
                r = this.attrTest(e);
              return i && (8 & n || !r)
                ? 16 | t
                : i || r
                ? 4 & n
                  ? 8 | t
                  : 2 & t
                  ? 4 | t
                  : 2
                : 32;
            },
          }),
          _(_e, ye, {
            defaults: {
              event: "pan",
              threshold: 10,
              pointers: 1,
              direction: 30,
            },
            getTouchAction: function () {
              var e = this.options.direction,
                t = [];
              return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t;
            },
            directionTest: function (e) {
              var t = this.options,
                n = !0,
                i = e.distance,
                r = e.direction,
                s = e.deltaX,
                o = e.deltaY;
              return (
                r & t.direction ||
                  (6 & t.direction
                    ? ((r = 0 === s ? 1 : s < 0 ? 2 : 4),
                      (n = s != this.pX),
                      (i = Math.abs(e.deltaX)))
                    : ((r = 0 === o ? 1 : o < 0 ? 8 : 16),
                      (n = o != this.pY),
                      (i = Math.abs(e.deltaY)))),
                (e.direction = r),
                n && i > t.threshold && r & t.direction
              );
            },
            attrTest: function (e) {
              return (
                ye.prototype.attrTest.call(this, e) &&
                (2 & this.state || (!(2 & this.state) && this.directionTest(e)))
              );
            },
            emit: function (e) {
              (this.pX = e.deltaX), (this.pY = e.deltaY);
              var t = we(e.direction);
              t && (e.additionalEvent = this.options.event + t),
                this._super.emit.call(this, e);
            },
          }),
          _(be, ye, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.scale - 1) > this.options.threshold ||
                  2 & this.state)
              );
            },
            emit: function (e) {
              1 !== e.scale &&
                (e.additionalEvent =
                  this.options.event + (e.scale < 1 ? "in" : "out")),
                this._super.emit.call(this, e);
            },
          }),
          _(xe, ge, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
              return ["auto"];
            },
            process: function (e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                r = e.deltaTime > t.time;
              if (((this._input = e), !i || !n || (12 & e.eventType && !r)))
                this.reset();
              else if (1 & e.eventType)
                this.reset(),
                  (this._timer = f(
                    function () {
                      (this.state = 8), this.tryEmit();
                    },
                    t.time,
                    this
                  ));
              else if (4 & e.eventType) return 8;
              return 32;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (e) {
              8 === this.state &&
                (e && 4 & e.eventType
                  ? this.manager.emit(this.options.event + "up", e)
                  : ((this._input.timeStamp = p()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          _(Ce, ye, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
              return ["none"];
            },
            attrTest: function (e) {
              return (
                this._super.attrTest.call(this, e) &&
                (Math.abs(e.rotation) > this.options.threshold ||
                  2 & this.state)
              );
            },
          }),
          _(Se, ye, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: 30,
              pointers: 1,
            },
            getTouchAction: function () {
              return _e.prototype.getTouchAction.call(this);
            },
            attrTest: function (e) {
              var t,
                n = this.options.direction;
              return (
                30 & n
                  ? (t = e.overallVelocity)
                  : 6 & n
                  ? (t = e.overallVelocityX)
                  : 24 & n && (t = e.overallVelocityY),
                this._super.attrTest.call(this, e) &&
                  n & e.offsetDirection &&
                  e.distance > this.options.threshold &&
                  e.maxPointers == this.options.pointers &&
                  d(t) > this.options.velocity &&
                  4 & e.eventType
              );
            },
            emit: function (e) {
              var t = we(e.offsetDirection);
              t && this.manager.emit(this.options.event + t, e),
                this.manager.emit(this.options.event, e);
            },
          }),
          _(Ee, ge, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return ["manipulation"];
            },
            process: function (e) {
              var t = this.options,
                n = e.pointers.length === t.pointers,
                i = e.distance < t.threshold,
                r = e.deltaTime < t.time;
              if ((this.reset(), 1 & e.eventType && 0 === this.count))
                return this.failTimeout();
              if (i && r && n) {
                if (4 != e.eventType) return this.failTimeout();
                var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
                  o =
                    !this.pCenter || q(this.pCenter, e.center) < t.posThreshold;
                if (
                  ((this.pTime = e.timeStamp),
                  (this.pCenter = e.center),
                  o && s ? (this.count += 1) : (this.count = 1),
                  (this._input = e),
                  0 == this.count % t.taps)
                )
                  return this.hasRequireFailures()
                    ? ((this._timer = f(
                        function () {
                          (this.state = 8), this.tryEmit();
                        },
                        t.interval,
                        this
                      )),
                      2)
                    : 8;
              }
              return 32;
            },
            failTimeout: function () {
              return (
                (this._timer = f(
                  function () {
                    this.state = 32;
                  },
                  this.options.interval,
                  this
                )),
                32
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              8 == this.state &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (Te.VERSION = "2.0.7"),
          (Te.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [Ce, { enable: !1 }],
              [be, { enable: !1 }, ["rotate"]],
              [Se, { direction: 6 }],
              [_e, { direction: 6 }, ["swipe"]],
              [Ee],
              [Ee, { event: "doubletap", taps: 2 }, ["tap"]],
              [xe],
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)",
            },
          }),
          (ke.prototype = {
            set: function (e) {
              return (
                l(this.options, e),
                e.touchAction && this.touchAction.update(),
                e.inputTarget &&
                  (this.input.destroy(),
                  (this.input.target = e.inputTarget),
                  this.input.init()),
                this
              );
            },
            stop: function (e) {
              this.session.stopped = e ? 2 : 1;
            },
            recognize: function (e) {
              var t = this.session;
              if (!t.stopped) {
                var n;
                this.touchAction.preventDefaults(e);
                var i = this.recognizers,
                  r = t.curRecognizer;
                (!r || (r && 8 & r.state)) && (r = t.curRecognizer = null);
                for (var s = 0; s < i.length; )
                  (n = i[s]),
                    2 === t.stopped || (r && n != r && !n.canRecognizeWith(r))
                      ? n.reset()
                      : n.recognize(e),
                    !r && 14 & n.state && (r = t.curRecognizer = n),
                    s++;
              }
            },
            get: function (e) {
              if (e instanceof ge) return e;
              for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e) return t[n];
              return null;
            },
            add: function (e) {
              if (g(e, "add", this)) return this;
              var t = this.get(e.options.event);
              return (
                t && this.remove(t),
                this.recognizers.push(e),
                (e.manager = this),
                this.touchAction.update(),
                e
              );
            },
            remove: function (e) {
              if (g(e, "remove", this)) return this;
              if ((e = this.get(e))) {
                var t = this.recognizers,
                  n = A(t, e);
                -1 !== n && (t.splice(n, 1), this.touchAction.update());
              }
              return this;
            },
            on: function (e, t) {
              if (void 0 !== e && void 0 !== t) {
                var n = this.handlers;
                return (
                  m(I(e), function (e) {
                    (n[e] = n[e] || []), n[e].push(t);
                  }),
                  this
                );
              }
            },
            off: function (e, t) {
              if (void 0 !== e) {
                var n = this.handlers;
                return (
                  m(I(e), function (e) {
                    t ? n[e] && n[e].splice(A(n[e], t), 1) : delete n[e];
                  }),
                  this
                );
              }
            },
            emit: function (e, t) {
              this.options.domEvents &&
                (function (e, t) {
                  var n = s.createEvent("Event");
                  n.initEvent(e, !0, !0),
                    (n.gesture = t),
                    t.target.dispatchEvent(n);
                })(e, t);
              var n = this.handlers[e] && this.handlers[e].slice();
              if (n && n.length) {
                (t.type = e),
                  (t.preventDefault = function () {
                    t.srcEvent.preventDefault();
                  });
                for (var i = 0; i < n.length; ) n[i](t), i++;
              }
            },
            destroy: function () {
              this.element && Ie(this, !1),
                (this.handlers = {}),
                (this.session = {}),
                this.input.destroy(),
                (this.element = null);
            },
          }),
          l(Te, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: ke,
            Input: V,
            TouchAction: fe,
            TouchInput: se,
            MouseInput: Y,
            PointerEventInput: ee,
            TouchMouseInput: ae,
            SingleTouchInput: ne,
            Recognizer: ge,
            AttrRecognizer: ye,
            Tap: Ee,
            Pan: _e,
            Swipe: Se,
            Pinch: be,
            Rotate: Ce,
            Press: xe,
            on: S,
            off: E,
            each: m,
            merge: y,
            extend: v,
            assign: l,
            inherit: _,
            bindFn: b,
            prefixed: D,
          }),
          ((void 0 !== r ? r : "undefined" != typeof self ? self : {}).Hammer =
            Te),
          void 0 ===
            (i = function () {
              return Te;
            }.call(t, n, t, e)) || (e.exports = i);
      })(window, document);
    },
    YguL: function (e, t) {
      !(function (e) {
        (e.ng = e.ng || {}),
          (e.ng.common = e.ng.common || {}),
          (e.ng.common.locales = e.ng.common.locales || {});
        const t = void 0;
        e.ng.common.locales.ru = [
          "ru",
          [["AM", "PM"], t, t],
          t,
          [
            [
              "\u0432\u0441",
              "\u043f\u043d",
              "\u0432\u0442",
              "\u0441\u0440",
              "\u0447\u0442",
              "\u043f\u0442",
              "\u0441\u0431",
            ],
            t,
            [
              "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",
              "\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",
              "\u0432\u0442\u043e\u0440\u043d\u0438\u043a",
              "\u0441\u0440\u0435\u0434\u0430",
              "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
              "\u043f\u044f\u0442\u043d\u0438\u0446\u0430",
              "\u0441\u0443\u0431\u0431\u043e\u0442\u0430",
            ],
            [
              "\u0432\u0441",
              "\u043f\u043d",
              "\u0432\u0442",
              "\u0441\u0440",
              "\u0447\u0442",
              "\u043f\u0442",
              "\u0441\u0431",
            ],
          ],
          [
            [
              "\u0412",
              "\u041f",
              "\u0412",
              "\u0421",
              "\u0427",
              "\u041f",
              "\u0421",
            ],
            [
              "\u0432\u0441",
              "\u043f\u043d",
              "\u0432\u0442",
              "\u0441\u0440",
              "\u0447\u0442",
              "\u043f\u0442",
              "\u0441\u0431",
            ],
            [
              "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435",
              "\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a",
              "\u0432\u0442\u043e\u0440\u043d\u0438\u043a",
              "\u0441\u0440\u0435\u0434\u0430",
              "\u0447\u0435\u0442\u0432\u0435\u0440\u0433",
              "\u043f\u044f\u0442\u043d\u0438\u0446\u0430",
              "\u0441\u0443\u0431\u0431\u043e\u0442\u0430",
            ],
            [
              "\u0432\u0441",
              "\u043f\u043d",
              "\u0432\u0442",
              "\u0441\u0440",
              "\u0447\u0442",
              "\u043f\u0442",
              "\u0441\u0431",
            ],
          ],
          [
            [
              "\u042f",
              "\u0424",
              "\u041c",
              "\u0410",
              "\u041c",
              "\u0418",
              "\u0418",
              "\u0410",
              "\u0421",
              "\u041e",
              "\u041d",
              "\u0414",
            ],
            [
              "\u044f\u043d\u0432.",
              "\u0444\u0435\u0432\u0440.",
              "\u043c\u0430\u0440.",
              "\u0430\u043f\u0440.",
              "\u043c\u0430\u044f",
              "\u0438\u044e\u043d.",
              "\u0438\u044e\u043b.",
              "\u0430\u0432\u0433.",
              "\u0441\u0435\u043d\u0442.",
              "\u043e\u043a\u0442.",
              "\u043d\u043e\u044f\u0431.",
              "\u0434\u0435\u043a.",
            ],
            [
              "\u044f\u043d\u0432\u0430\u0440\u044f",
              "\u0444\u0435\u0432\u0440\u0430\u043b\u044f",
              "\u043c\u0430\u0440\u0442\u0430",
              "\u0430\u043f\u0440\u0435\u043b\u044f",
              "\u043c\u0430\u044f",
              "\u0438\u044e\u043d\u044f",
              "\u0438\u044e\u043b\u044f",
              "\u0430\u0432\u0433\u0443\u0441\u0442\u0430",
              "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f",
              "\u043e\u043a\u0442\u044f\u0431\u0440\u044f",
              "\u043d\u043e\u044f\u0431\u0440\u044f",
              "\u0434\u0435\u043a\u0430\u0431\u0440\u044f",
            ],
          ],
          [
            [
              "\u042f",
              "\u0424",
              "\u041c",
              "\u0410",
              "\u041c",
              "\u0418",
              "\u0418",
              "\u0410",
              "\u0421",
              "\u041e",
              "\u041d",
              "\u0414",
            ],
            [
              "\u044f\u043d\u0432.",
              "\u0444\u0435\u0432\u0440.",
              "\u043c\u0430\u0440\u0442",
              "\u0430\u043f\u0440.",
              "\u043c\u0430\u0439",
              "\u0438\u044e\u043d\u044c",
              "\u0438\u044e\u043b\u044c",
              "\u0430\u0432\u0433.",
              "\u0441\u0435\u043d\u0442.",
              "\u043e\u043a\u0442.",
              "\u043d\u043e\u044f\u0431.",
              "\u0434\u0435\u043a.",
            ],
            [
              "\u044f\u043d\u0432\u0430\u0440\u044c",
              "\u0444\u0435\u0432\u0440\u0430\u043b\u044c",
              "\u043c\u0430\u0440\u0442",
              "\u0430\u043f\u0440\u0435\u043b\u044c",
              "\u043c\u0430\u0439",
              "\u0438\u044e\u043d\u044c",
              "\u0438\u044e\u043b\u044c",
              "\u0430\u0432\u0433\u0443\u0441\u0442",
              "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
              "\u043e\u043a\u0442\u044f\u0431\u0440\u044c",
              "\u043d\u043e\u044f\u0431\u0440\u044c",
              "\u0434\u0435\u043a\u0430\u0431\u0440\u044c",
            ],
          ],
          [
            ["\u0434\u043e \u043d.\u044d.", "\u043d.\u044d."],
            ["\u0434\u043e \u043d. \u044d.", "\u043d. \u044d."],
            [
              "\u0434\u043e \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430",
              "\u043e\u0442 \u0420\u043e\u0436\u0434\u0435\u0441\u0442\u0432\u0430 \u0425\u0440\u0438\u0441\u0442\u043e\u0432\u0430",
            ],
          ],
          1,
          [6, 0],
          [
            "dd.MM.y",
            "d MMM y '\u0433'.",
            "d MMMM y '\u0433'.",
            "EEEE, d MMMM y '\u0433'.",
          ],
          ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"],
          ["{1}, {0}", t, t, t],
          [
            ",",
            "\xa0",
            ";",
            "%",
            "+",
            "-",
            "E",
            "\xd7",
            "\u2030",
            "\u221e",
            "\u043d\u0435\xa0\u0447\u0438\u0441\u043b\u043e",
            ":",
          ],
          ["#,##0.###", "#,##0\xa0%", "#,##0.00\xa0\xa4", "#E0"],
          "RUB",
          "\u20bd",
          "\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c",
          {
            GEL: [t, "\u10da"],
            RON: [t, "L"],
            RUB: ["\u20bd"],
            RUR: ["\u0440."],
            THB: ["\u0e3f"],
            TMT: ["\u0422\u041c\u0422"],
            TWD: ["NT$"],
            UAH: ["\u20b4"],
            XXX: ["XXXX"],
          },
          "ltr",
          function (e) {
            let t = Math.floor(Math.abs(e)),
              n = e.toString().replace(/^[^.]*\.?/, "").length;
            return 0 === n && t % 10 == 1 && t % 100 != 11
              ? 1
              : 0 === n &&
                t % 10 === Math.floor(t % 10) &&
                t % 10 >= 2 &&
                t % 10 <= 4 &&
                !(t % 100 >= 12 && t % 100 <= 14)
              ? 3
              : (0 === n && t % 10 == 0) ||
                (0 === n &&
                  t % 10 === Math.floor(t % 10) &&
                  t % 10 >= 5 &&
                  t % 10 <= 9) ||
                (0 === n &&
                  t % 100 === Math.floor(t % 100) &&
                  t % 100 >= 11 &&
                  t % 100 <= 14)
              ? 4
              : 5;
          },
          [
            [
              [
                "\u043f\u043e\u043b\u043d.",
                "\u043f\u043e\u043b\u0434.",
                "\u0443\u0442\u0440\u0430",
                "\u0434\u043d\u044f",
                "\u0432\u0435\u0447.",
                "\u043d\u043e\u0447\u0438",
              ],
              [
                "\u043f\u043e\u043b\u043d.",
                "\u043f\u043e\u043b\u0434.",
                "\u0443\u0442\u0440\u0430",
                "\u0434\u043d\u044f",
                "\u0432\u0435\u0447\u0435\u0440\u0430",
                "\u043d\u043e\u0447\u0438",
              ],
              [
                "\u043f\u043e\u043b\u043d\u043e\u0447\u044c",
                "\u043f\u043e\u043b\u0434\u0435\u043d\u044c",
                "\u0443\u0442\u0440\u0430",
                "\u0434\u043d\u044f",
                "\u0432\u0435\u0447\u0435\u0440\u0430",
                "\u043d\u043e\u0447\u0438",
              ],
            ],
            [
              [
                "\u043f\u043e\u043b\u043d.",
                "\u043f\u043e\u043b\u0434.",
                "\u0443\u0442\u0440\u043e",
                "\u0434\u0435\u043d\u044c",
                "\u0432\u0435\u0447.",
                "\u043d\u043e\u0447\u044c",
              ],
              t,
              [
                "\u043f\u043e\u043b\u043d\u043e\u0447\u044c",
                "\u043f\u043e\u043b\u0434\u0435\u043d\u044c",
                "\u0443\u0442\u0440\u043e",
                "\u0434\u0435\u043d\u044c",
                "\u0432\u0435\u0447\u0435\u0440",
                "\u043d\u043e\u0447\u044c",
              ],
            ],
            [
              "00:00",
              "12:00",
              ["04:00", "12:00"],
              ["12:00", "18:00"],
              ["18:00", "24:00"],
              ["00:00", "04:00"],
            ],
          ],
        ];
      })(
        ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof global && global) ||
          ("undefined" != typeof window && window)
      );
    },
    ZM9f: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    c9FL: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    eAG3: function (e, t, n) {
      "use strict";
      function i(e) {
        return "function" == typeof e;
      }
      n.r(t);
      let r = !1;
      const s = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                e.stack
            );
          } else
            r &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          r = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        },
      };
      function o(e) {
        setTimeout(() => {
          throw e;
        }, 0);
      }
      const a = {
          closed: !0,
          next(e) {},
          error(e) {
            if (s.useDeprecatedSynchronousErrorHandling) throw e;
            o(e);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((e) => e && "number" == typeof e.length))();
      function u(e) {
        return null !== e && "object" == typeof e;
      }
      const c = (() => {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? `${e.length} errors occurred during unsubscription:\n${e
                  .map((e, t) => `${t + 1}) ${e.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      let h = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
          }
          unsubscribe() {
            let t;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: r,
              _unsubscribe: s,
              _subscriptions: o,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof e)
            )
              n.remove(this);
            else if (null !== n)
              for (let e = 0; e < n.length; ++e) n[e].remove(this);
            if (i(s)) {
              r && (this._unsubscribe = void 0);
              try {
                s.call(this);
              } catch (a) {
                t = a instanceof c ? d(a.errors) : [a];
              }
            }
            if (l(o)) {
              let e = -1,
                n = o.length;
              for (; ++e < n; ) {
                const n = o[e];
                if (u(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (t = t || []),
                      a instanceof c ? (t = t.concat(d(a.errors))) : t.push(a);
                  }
              }
            }
            if (t) throw new c(t);
          }
          add(t) {
            let n = t;
            if (!t) return e.EMPTY;
            switch (typeof t) {
              case "function":
                n = new e(t);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  const t = n;
                  (n = new e()), (n._subscriptions = [t]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + t + " added to Subscription."
                );
            }
            let { _parentOrParents: i } = n;
            if (null === i) n._parentOrParents = this;
            else if (i instanceof e) {
              if (i === this) return n;
              n._parentOrParents = [i, this];
            } else {
              if (-1 !== i.indexOf(this)) return n;
              i.push(this);
            }
            const r = this._subscriptions;
            return null === r ? (this._subscriptions = [n]) : r.push(n), n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
        }
        return (
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
      function d(e) {
        return e.reduce((e, t) => e.concat(t instanceof c ? t.errors : t), []);
      }
      const p = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class f extends h {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!e) {
                this.destination = a;
                break;
              }
              if ("object" == typeof e) {
                e instanceof f
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new g(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new g(this, e, t, n));
          }
        }
        [p]() {
          return this;
        }
        static create(e, t, n) {
          const i = new f(e, t, n);
          return (i.syncErrorThrowable = !1), i;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: e } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = e),
            this
          );
        }
      }
      class g extends f {
        constructor(e, t, n, r) {
          let s;
          super(), (this._parentSubscriber = e);
          let o = this;
          i(t)
            ? (s = t)
            : t &&
              ((s = t.next),
              (n = t.error),
              (r = t.complete),
              t !== a &&
                ((o = Object.create(t)),
                i(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = s),
            (this._error = n),
            (this._complete = r);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = s;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : o(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              o(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              s.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!s.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            t.call(this._context, n);
          } catch (i) {
            return s.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = i), (e.syncErrorThrown = !0), !0)
              : (o(i), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const m = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function w(e) {
        return e;
      }
      let v = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: i } = this,
              r = (function (e, t, n) {
                if (e) {
                  if (e instanceof f) return e;
                  if (e[p]) return e[p]();
                }
                return e || t || n ? new f(e, t, n) : new f(a);
              })(e, t, n);
            if (
              (r.add(
                i
                  ? i.call(r, this.source)
                  : this.source ||
                    (s.useDeprecatedSynchronousErrorHandling &&
                      !r.syncErrorThrowable)
                  ? this._subscribe(r)
                  : this._trySubscribe(r)
              ),
              s.useDeprecatedSynchronousErrorHandling &&
                r.syncErrorThrowable &&
                ((r.syncErrorThrowable = !1), r.syncErrorThrown))
            )
              throw r.syncErrorValue;
            return r;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              s.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function (e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: i } = e;
                    if (t || i) return !1;
                    e = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = y(t))((t, n) => {
              let i;
              i = this.subscribe(
                (t) => {
                  try {
                    e(t);
                  } catch (r) {
                    n(r), i && i.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [m]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length
              ? this
              : (0 === (t = e).length
                  ? w
                  : 1 === t.length
                  ? t[0]
                  : function (e) {
                      return t.reduce((e, t) => t(e), e);
                    })(this);
            var t;
          }
          toPromise(e) {
            return new (e = y(e))((e, t) => {
              let n;
              this.subscribe(
                (e) => (n = e),
                (e) => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = (t) => new e(t)), e;
      })();
      function y(e) {
        if ((e || (e = s.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      const _ = (() => {
        function e() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      class b extends h {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class x extends f {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let C = (() => {
        class e extends v {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new x(this);
          }
          lift(e) {
            const t = new S(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new _();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                i = t.slice();
              for (let r = 0; r < n; r++) i[r].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new _();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              i = t.slice();
            for (let r = 0; r < n; r++) i[r].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new _();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let i = 0; i < t; i++) n[i].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new _();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new _();
            return this.hasError
              ? (e.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (e.complete(), h.EMPTY)
              : (this.observers.push(e), new b(this, e));
          }
          asObservable() {
            const e = new v();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new S(e, t)), e;
      })();
      class S extends C {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : h.EMPTY;
        }
      }
      function E(e) {
        return e && "function" == typeof e.schedule;
      }
      function T(e, t) {
        return function (n) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new k(e, t));
        };
      }
      class k {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new I(e, this.project, this.thisArg));
        }
      }
      class I extends f {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      const A = (e) => (t) => {
        for (let n = 0, i = e.length; n < i && !t.closed; n++) t.next(e[n]);
        t.complete();
      };
      function R() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const M = R(),
        D = (e) => e && "number" == typeof e.length && "function" != typeof e;
      function N(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      const O = (e) => {
        if (e && "function" == typeof e[m])
          return (
            (i = e),
            (e) => {
              const t = i[m]();
              if ("function" != typeof t.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return t.subscribe(e);
            }
          );
        if (D(e)) return A(e);
        if (N(e))
          return (
            (n = e),
            (e) => (
              n
                .then(
                  (t) => {
                    e.closed || (e.next(t), e.complete());
                  },
                  (t) => e.error(t)
                )
                .then(null, o),
              e
            )
          );
        if (e && "function" == typeof e[M])
          return (
            (t = e),
            (e) => {
              const n = t[M]();
              for (;;) {
                let t;
                try {
                  t = n.next();
                } catch (i) {
                  return e.error(i), e;
                }
                if (t.done) {
                  e.complete();
                  break;
                }
                if ((e.next(t.value), e.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  e.add(() => {
                    n.return && n.return();
                  }),
                e
              );
            }
          );
        {
          const t = u(e) ? "an invalid object" : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var t, n, i;
      };
      function P(e, t) {
        return new v((n) => {
          const i = new h();
          let r = 0;
          return (
            i.add(
              t.schedule(function () {
                r !== e.length
                  ? (n.next(e[r++]), n.closed || i.add(this.schedule()))
                  : n.complete();
              })
            ),
            i
          );
        });
      }
      function L(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (
                  (function (e) {
                    return e && "function" == typeof e[m];
                  })(e)
                )
                  return (function (e, t) {
                    return new v((n) => {
                      const i = new h();
                      return (
                        i.add(
                          t.schedule(() => {
                            const r = e[m]();
                            i.add(
                              r.subscribe({
                                next(e) {
                                  i.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  i.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  i.add(t.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        i
                      );
                    });
                  })(e, t);
                if (N(e))
                  return (function (e, t) {
                    return new v((n) => {
                      const i = new h();
                      return (
                        i.add(
                          t.schedule(() =>
                            e.then(
                              (e) => {
                                i.add(
                                  t.schedule(() => {
                                    n.next(e),
                                      i.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (e) => {
                                i.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        i
                      );
                    });
                  })(e, t);
                if (D(e)) return P(e, t);
                if (
                  (function (e) {
                    return e && "function" == typeof e[M];
                  })(e) ||
                  "string" == typeof e
                )
                  return (function (e, t) {
                    if (!e) throw new Error("Iterable cannot be null");
                    return new v((n) => {
                      const i = new h();
                      let r;
                      return (
                        i.add(() => {
                          r && "function" == typeof r.return && r.return();
                        }),
                        i.add(
                          t.schedule(() => {
                            (r = e[M]()),
                              i.add(
                                t.schedule(function () {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = r.next();
                                    (e = n.value), (t = n.done);
                                  } catch (i) {
                                    return void n.error(i);
                                  }
                                  t
                                    ? n.complete()
                                    : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        i
                      );
                    });
                  })(e, t);
              }
              throw new TypeError(
                ((null !== e && typeof e) || e) + " is not observable"
              );
            })(e, t)
          : e instanceof v
          ? e
          : new v(O(e));
      }
      class F extends f {
        constructor(e) {
          super(), (this.parent = e);
        }
        _next(e) {
          this.parent.notifyNext(e);
        }
        _error(e) {
          this.parent.notifyError(e), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class j extends f {
        notifyNext(e) {
          this.destination.next(e);
        }
        notifyError(e) {
          this.destination.error(e);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function H(e, t) {
        if (t.closed) return;
        if (e instanceof v) return e.subscribe(t);
        let n;
        try {
          n = O(e)(t);
        } catch (i) {
          t.error(i);
        }
        return n;
      }
      function V(e, t, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof t
          ? (i) =>
              i.pipe(
                V((n, i) => L(e(n, i)).pipe(T((e, r) => t(n, e, i, r))), n)
              )
          : ("number" == typeof t && (n = t), (t) => t.lift(new z(e, n)));
      }
      class z {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new $(e, this.project, this.concurrent));
        }
      }
      class $ extends j {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (i) {
            return void this.destination.error(i);
          }
          this.active++, this._innerSub(t);
        }
        _innerSub(e) {
          const t = new F(this),
            n = this.destination;
          n.add(t);
          const i = H(e, t);
          i !== t && n.add(i);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e) {
          this.destination.next(e);
        }
        notifyComplete() {
          const e = this.buffer;
          this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function B(e = Number.POSITIVE_INFINITY) {
        return V(w, e);
      }
      function U(e, t) {
        return t ? P(e, t) : new v(A(e));
      }
      function W(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          i = e[e.length - 1];
        return (
          E(i)
            ? ((n = e.pop()),
              e.length > 1 &&
                "number" == typeof e[e.length - 1] &&
                (t = e.pop()))
            : "number" == typeof i && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof v
            ? e[0]
            : B(t)(U(e, n))
        );
      }
      function q() {
        return function (e) {
          return e.lift(new Z(e));
        };
      }
      class Z {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const i = new G(e, n),
            r = t.subscribe(i);
          return i.closed || (i.connection = n.connect()), r;
        }
      }
      class G extends f {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            i = e._connection;
          (this.connection = null), !i || (n && i !== n) || i.unsubscribe();
        }
      }
      class Y extends v {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.subjectFactory = t),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(e) {
          return this.getSubject().subscribe(e);
        }
        getSubject() {
          const e = this._subject;
          return (
            (e && !e.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let e = this._connection;
          return (
            e ||
              ((this._isComplete = !1),
              (e = this._connection = new h()),
              e.add(this.source.subscribe(new X(this.getSubject(), this))),
              e.closed && ((this._connection = null), (e = h.EMPTY))),
            e
          );
        }
        refCount() {
          return q()(this);
        }
      }
      const Q = (() => {
        const e = Y.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: e._subscribe },
          _isComplete: { value: e._isComplete, writable: !0 },
          getSubject: { value: e.getSubject },
          connect: { value: e.connect },
          refCount: { value: e.refCount },
        };
      })();
      class X extends x {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function K() {
        return new C();
      }
      function J(e) {
        return { toString: e }.toString();
      }
      function ee(e, t, n) {
        return J(() => {
          const i = (function (e) {
            return function (...t) {
              if (e) {
                const n = e(...t);
                for (const e in n) this[e] = n[e];
              }
            };
          })(t);
          function r(...e) {
            if (this instanceof r) return i.apply(this, e), this;
            const t = new r(...e);
            return (n.annotation = t), n;
            function n(e, n, i) {
              const r = e.hasOwnProperty("__parameters__")
                ? e.__parameters__
                : Object.defineProperty(e, "__parameters__", { value: [] })
                    .__parameters__;
              for (; r.length <= i; ) r.push(null);
              return (r[i] = r[i] || []).push(t), e;
            }
          }
          return (
            n && (r.prototype = Object.create(n.prototype)),
            (r.prototype.ngMetadataName = e),
            (r.annotationCls = r),
            r
          );
        });
      }
      const te = ee("Inject", (e) => ({ token: e })),
        ne = ee("Optional"),
        ie = ee("Self"),
        re = ee("SkipSelf");
      var se = (function (e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })({});
      function oe(e) {
        for (let t in e) if (e[t] === oe) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function ae(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function le(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ue(e) {
        return {
          factory: e.factory,
          providers: e.providers || [],
          imports: e.imports || [],
        };
      }
      function ce(e) {
        return he(e, e[pe]) || he(e, e[me]);
      }
      function he(e, t) {
        return t && t.token === e ? t : null;
      }
      function de(e) {
        return e && (e.hasOwnProperty(fe) || e.hasOwnProperty(we))
          ? e[fe]
          : null;
      }
      const pe = oe({ ɵprov: oe }),
        fe = oe({ ɵinj: oe }),
        ge = oe({ ɵprovFallback: oe }),
        me = oe({ ngInjectableDef: oe }),
        we = oe({ ngInjectorDef: oe });
      function ve(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(ve).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return "" + e.overriddenName;
        if (e.name) return "" + e.name;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function ye(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const _e = oe({ __forward_ref__: oe });
      function be(e) {
        return (
          (e.__forward_ref__ = be),
          (e.toString = function () {
            return ve(this());
          }),
          e
        );
      }
      function xe(e) {
        return "function" == typeof (t = e) &&
          t.hasOwnProperty(_e) &&
          t.__forward_ref__ === be
          ? e()
          : e;
        var t;
      }
      const Ce = "undefined" != typeof globalThis && globalThis,
        Se = "undefined" != typeof window && window,
        Ee =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Te = "undefined" != typeof global && global,
        ke = Ce || Te || Se || Ee,
        Ie = oe({ ɵcmp: oe }),
        Ae = oe({ ɵdir: oe }),
        Re = oe({ ɵpipe: oe }),
        Me = oe({ ɵmod: oe }),
        De = oe({ ɵloc: oe }),
        Ne = oe({ ɵfac: oe }),
        Oe = oe({ __NG_ELEMENT_ID__: oe });
      class Pe {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ɵprov = le({
                  token: this,
                  providedIn: t.providedIn || "root",
                  factory: t.factory,
                }));
        }
        toString() {
          return "InjectionToken " + this._desc;
        }
      }
      const Le = new Pe("INJECTOR", -1),
        Fe = {},
        je = /\n/gm,
        He = oe({ provide: String, useValue: oe });
      let Ve,
        ze = void 0;
      function $e(e) {
        const t = ze;
        return (ze = e), t;
      }
      function Be(e) {
        const t = Ve;
        return (Ve = e), t;
      }
      function Ue(e, t = se.Default) {
        if (void 0 === ze)
          throw new Error("inject() must be called from an injection context");
        return null === ze
          ? qe(e, void 0, t)
          : ze.get(e, t & se.Optional ? null : void 0, t);
      }
      function We(e, t = se.Default) {
        return (Ve || Ue)(xe(e), t);
      }
      function qe(e, t, n) {
        const i = ce(e);
        if (i && "root" == i.providedIn)
          return void 0 === i.value ? (i.value = i.factory()) : i.value;
        if (n & se.Optional) return null;
        if (void 0 !== t) return t;
        throw new Error(`Injector: NOT_FOUND [${ve(e)}]`);
      }
      function Ze(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const i = xe(e[n]);
          if (Array.isArray(i)) {
            if (0 === i.length)
              throw new Error("Arguments array must have arguments.");
            let e = void 0,
              n = se.Default;
            for (let t = 0; t < i.length; t++) {
              const r = i[t];
              r instanceof ne || "Optional" === r.ngMetadataName || r === ne
                ? (n |= se.Optional)
                : r instanceof re || "SkipSelf" === r.ngMetadataName || r === re
                ? (n |= se.SkipSelf)
                : r instanceof ie || "Self" === r.ngMetadataName || r === ie
                ? (n |= se.Self)
                : (e = r instanceof te || r === te ? r.token : r);
            }
            t.push(We(e, n));
          } else t.push(We(i));
        }
        return t;
      }
      class Ge {
        get(e, t = Fe) {
          if (t === Fe) {
            const t = new Error(`NullInjectorError: No provider for ${ve(e)}!`);
            throw ((t.name = "NullInjectorError"), t);
          }
          return t;
        }
      }
      class Ye {}
      function Qe(e, t) {
        e.forEach((e) => (Array.isArray(e) ? Qe(e, t) : t(e)));
      }
      function Xe(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Ke(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function Je(e, t) {
        const n = [];
        for (let i = 0; i < e; i++) n.push(t);
        return n;
      }
      function et(e, t, n) {
        let i = nt(e, t);
        return (
          i >= 0
            ? (e[1 | i] = n)
            : ((i = ~i),
              (function (e, t, n, i) {
                let r = e.length;
                if (r == t) e.push(n, i);
                else if (1 === r) e.push(i, e[0]), (e[0] = n);
                else {
                  for (r--, e.push(e[r - 1], e[r]); r > t; )
                    (e[r] = e[r - 2]), r--;
                  (e[t] = n), (e[t + 1] = i);
                }
              })(e, i, t, n)),
          i
        );
      }
      function tt(e, t) {
        const n = nt(e, t);
        if (n >= 0) return e[1 | n];
      }
      function nt(e, t) {
        return (function (e, t, n) {
          let i = 0,
            r = e.length >> 1;
          for (; r !== i; ) {
            const n = i + ((r - i) >> 1),
              s = e[n << 1];
            if (t === s) return n << 1;
            s > t ? (r = n) : (i = n + 1);
          }
          return ~(r << 1);
        })(e, t);
      }
      var it = (function (e) {
          return (
            (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e
          );
        })({}),
        rt = (function (e) {
          return (
            (e[(e.Emulated = 0)] = "Emulated"),
            (e[(e.Native = 1)] = "Native"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            e
          );
        })({});
      const st = {},
        ot = [];
      let at = 0;
      function lt(e) {
        return J(() => {
          const t = {},
            n = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: t,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === it.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || ot,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || rt.Emulated,
              id: "c",
              styles: e.styles || ot,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.directives,
            r = e.features,
            s = e.pipes;
          return (
            (n.id += at++),
            (n.inputs = pt(e.inputs, t)),
            (n.outputs = pt(e.outputs)),
            r && r.forEach((e) => e(n)),
            (n.directiveDefs = i
              ? () => ("function" == typeof i ? i() : i).map(ut)
              : null),
            (n.pipeDefs = s
              ? () => ("function" == typeof s ? s() : s).map(ct)
              : null),
            n
          );
        });
      }
      function ut(e) {
        return (
          mt(e) ||
          (function (e) {
            return e[Ae] || null;
          })(e)
        );
      }
      function ct(e) {
        return (function (e) {
          return e[Re] || null;
        })(e);
      }
      const ht = {};
      function dt(e) {
        const t = {
          type: e.type,
          bootstrap: e.bootstrap || ot,
          declarations: e.declarations || ot,
          imports: e.imports || ot,
          exports: e.exports || ot,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        };
        return (
          null != e.id &&
            J(() => {
              ht[e.id] = e.type;
            }),
          t
        );
      }
      function pt(e, t) {
        if (null == e) return st;
        const n = {};
        for (const i in e)
          if (e.hasOwnProperty(i)) {
            let r = e[i],
              s = r;
            Array.isArray(r) && ((s = r[1]), (r = r[0])),
              (n[r] = i),
              t && (t[r] = s);
          }
        return n;
      }
      const ft = lt;
      function gt(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function mt(e) {
        return e[Ie] || null;
      }
      function wt(e, t) {
        return e.hasOwnProperty(Ne) ? e[Ne] : null;
      }
      function vt(e, t) {
        const n = e[Me] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${ve(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function yt(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function _t(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function bt(e) {
        return 0 != (8 & e.flags);
      }
      function xt(e) {
        return 2 == (2 & e.flags);
      }
      function Ct(e) {
        return 1 == (1 & e.flags);
      }
      function St(e) {
        return null !== e.template;
      }
      function Et(e) {
        return 0 != (512 & e[2]);
      }
      class Tt {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function kt() {
        const e = At(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === st) e.previous = t;
          else for (let e in t) n[e] = t[e];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function It(e, t, n, i) {
        const r =
            At(e) ||
            (function (e, t) {
              return (e.__ngSimpleChanges__ = t);
            })(e, { previous: st, current: null }),
          s = r.current || (r.current = {}),
          o = r.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (s[a] = new Tt(l && l.currentValue, t, o === st)), (e[i] = t);
      }
      function At(e) {
        return e.__ngSimpleChanges__ || null;
      }
      let Rt = void 0;
      function Mt() {
        return void 0 !== Rt
          ? Rt
          : "undefined" != typeof document
          ? document
          : void 0;
      }
      function Dt(e) {
        return !!e.listen;
      }
      const Nt = { createRenderer: (e, t) => Mt() };
      function Ot(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function Pt(e, t) {
        return Ot(t[e + 20]);
      }
      function Lt(e, t) {
        return Ot(t[e.index]);
      }
      function Ft(e, t) {
        return e.data[t + 20];
      }
      function jt(e, t) {
        return e[t + 20];
      }
      function Ht(e, t) {
        const n = t[e];
        return yt(n) ? n : n[0];
      }
      function Vt(e) {
        const t = (function (e) {
          return e.__ngContext__ || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function zt(e) {
        return 4 == (4 & e[2]);
      }
      function $t(e) {
        return 128 == (128 & e[2]);
      }
      function Bt(e, t) {
        return null === e || null == t ? null : e[t];
      }
      function Ut(e) {
        e[18] = 0;
      }
      function Wt(e, t) {
        e[5] += t;
        let n = e,
          i = e[3];
        for (
          ;
          null !== i && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (i[5] += t), (n = i), (i = i[3]);
      }
      const qt = {
        lFrame: gn(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1,
      };
      function Zt() {
        return qt.bindingsEnabled;
      }
      function Gt() {
        return qt.lFrame.lView;
      }
      function Yt() {
        return qt.lFrame.tView;
      }
      function Qt(e) {
        qt.lFrame.contextLView = e;
      }
      function Xt() {
        return qt.lFrame.currentTNode;
      }
      function Kt(e, t) {
        (qt.lFrame.currentTNode = e), (qt.lFrame.isParent = t);
      }
      function Jt() {
        return qt.lFrame.isParent;
      }
      function en() {
        qt.lFrame.isParent = !1;
      }
      function tn() {
        return qt.checkNoChangesMode;
      }
      function nn(e) {
        qt.checkNoChangesMode = e;
      }
      function rn() {
        const e = qt.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function sn() {
        return qt.lFrame.bindingIndex;
      }
      function on() {
        return qt.lFrame.bindingIndex++;
      }
      function an(e) {
        const t = qt.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function ln(e, t) {
        const n = qt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), un(t);
      }
      function un(e) {
        qt.lFrame.currentDirectiveIndex = e;
      }
      function cn() {
        return qt.lFrame.currentQueryIndex;
      }
      function hn(e) {
        qt.lFrame.currentQueryIndex = e;
      }
      function dn(e, t) {
        const n = fn();
        (qt.lFrame = n), (n.currentTNode = t), (n.lView = e);
      }
      function pn(e) {
        const t = fn(),
          n = e[1];
        (qt.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex);
      }
      function fn() {
        const e = qt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? gn(e) : t;
      }
      function gn(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
        };
        return null !== e && (e.child = t), t;
      }
      function mn() {
        const e = qt.lFrame;
        return (
          (qt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const wn = mn;
      function vn() {
        const e = mn();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = 0),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function yn() {
        return qt.lFrame.selectedIndex;
      }
      function _n(e) {
        qt.lFrame.selectedIndex = e;
      }
      function bn() {
        const e = qt.lFrame;
        return Ft(e.tView, e.selectedIndex);
      }
      function xn() {
        qt.lFrame.currentNamespace = "http://www.w3.org/2000/svg";
      }
      function Cn(e, t) {
        for (let n = t.directiveStart, i = t.directiveEnd; n < i; n++) {
          const t = e.data[n].type.prototype,
            {
              ngAfterContentInit: i,
              ngAfterContentChecked: r,
              ngAfterViewInit: s,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = t;
          i && (e.contentHooks || (e.contentHooks = [])).push(-n, i),
            r &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, r),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, r)),
            s && (e.viewHooks || (e.viewHooks = [])).push(-n, s),
            o &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, o),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, o)),
            null != a && (e.destroyHooks || (e.destroyHooks = [])).push(n, a);
        }
      }
      function Sn(e, t, n) {
        kn(e, t, 3, n);
      }
      function En(e, t, n, i) {
        (3 & e[2]) === n && kn(e, t, n, i);
      }
      function Tn(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function kn(e, t, n, i) {
        const r = null != i ? i : -1;
        let s = 0;
        for (let o = void 0 !== i ? 65535 & e[18] : 0; o < t.length; o++)
          if ("number" == typeof t[o + 1]) {
            if (((s = t[o]), null != i && s >= i)) break;
          } else
            t[o] < 0 && (e[18] += 65536),
              (s < r || -1 == r) &&
                (In(e, n, t, o), (e[18] = (4294901760 & e[18]) + o + 2)),
              o++;
      }
      function In(e, t, n, i) {
        const r = n[i] < 0,
          s = n[i + 1],
          o = e[r ? -n[i] : n[i]];
        r
          ? e[2] >> 11 < e[18] >> 16 &&
            (3 & e[2]) === t &&
            ((e[2] += 2048), s.call(o))
          : s.call(o);
      }
      class An {
        constructor(e, t, n) {
          (this.factory = e),
            (this.resolving = !1),
            (this.canSeeViewProviders = t),
            (this.injectImpl = n);
        }
      }
      function Rn(e, t, n) {
        const i = Dt(e);
        let r = 0;
        for (; r < n.length; ) {
          const s = n[r];
          if ("number" == typeof s) {
            if (0 !== s) break;
            r++;
            const o = n[r++],
              a = n[r++],
              l = n[r++];
            i ? e.setAttribute(t, a, l, o) : t.setAttributeNS(o, a, l);
          } else {
            const o = s,
              a = n[++r];
            Mn(o)
              ? i && e.setProperty(t, o, a)
              : i
              ? e.setAttribute(t, o, a)
              : t.setAttribute(o, a),
              r++;
          }
        }
        return r;
      }
      function Mn(e) {
        return 64 === e.charCodeAt(0);
      }
      function Dn(e, t) {
        if (null === t || 0 === t.length);
        else if (null === e || 0 === e.length) e = t.slice();
        else {
          let n = -1;
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            "number" == typeof r
              ? (n = r)
              : 0 === n ||
                Nn(e, n, r, null, -1 === n || 2 === n ? t[++i] : null);
          }
        }
        return e;
      }
      function Nn(e, t, n, i, r) {
        let s = 0,
          o = e.length;
        if (-1 === t) o = -1;
        else
          for (; s < e.length; ) {
            const n = e[s++];
            if ("number" == typeof n) {
              if (n === t) {
                o = -1;
                break;
              }
              if (n > t) {
                o = s - 1;
                break;
              }
            }
          }
        for (; s < e.length; ) {
          const t = e[s];
          if ("number" == typeof t) break;
          if (t === n) {
            if (null === i) return void (null !== r && (e[s + 1] = r));
            if (i === e[s + 1]) return void (e[s + 2] = r);
          }
          s++, null !== i && s++, null !== r && s++;
        }
        -1 !== o && (e.splice(o, 0, t), (s = o + 1)),
          e.splice(s++, 0, n),
          null !== i && e.splice(s++, 0, i),
          null !== r && e.splice(s++, 0, r);
      }
      function On(e) {
        return -1 !== e;
      }
      function Pn(e) {
        return 32767 & e;
      }
      function Ln(e, t) {
        let n = e >> 16,
          i = t;
        for (; n > 0; ) (i = i[15]), n--;
        return i;
      }
      function Fn(e) {
        return "string" == typeof e ? e : null == e ? "" : "" + e;
      }
      function jn(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : Fn(e);
      }
      const Hn = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(ke))();
      function Vn(e) {
        return e instanceof Function ? e() : e;
      }
      let zn = !0;
      function $n(e) {
        const t = zn;
        return (zn = e), t;
      }
      let Bn = 0;
      function Un(e, t) {
        const n = qn(e, t);
        if (-1 !== n) return n;
        const i = t[1];
        i.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Wn(i.data, e),
          Wn(t, null),
          Wn(i.blueprint, null));
        const r = Zn(e, t),
          s = e.injectorIndex;
        if (On(r)) {
          const e = Pn(r),
            n = Ln(r, t),
            i = n[1].data;
          for (let r = 0; r < 8; r++) t[s + r] = n[e + r] | i[e + r];
        }
        return (t[s + 8] = r), s;
      }
      function Wn(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function qn(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Zn(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          i = null,
          r = t;
        for (; null !== r; ) {
          const e = r[1],
            t = e.type;
          if (((i = 2 === t ? e.declTNode : 1 === t ? r[6] : null), null === i))
            return -1;
          if ((n++, (r = r[15]), -1 !== i.injectorIndex))
            return i.injectorIndex | (n << 16);
        }
        return -1;
      }
      function Gn(e, t, n) {
        !(function (e, t, n) {
          let i;
          "string" == typeof n
            ? (i = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Oe) && (i = n[Oe]),
            null == i && (i = n[Oe] = Bn++);
          const r = 255 & i,
            s = 1 << r,
            o = 64 & r,
            a = 32 & r,
            l = t.data;
          128 & r
            ? o
              ? a
                ? (l[e + 7] |= s)
                : (l[e + 6] |= s)
              : a
              ? (l[e + 5] |= s)
              : (l[e + 4] |= s)
            : o
            ? a
              ? (l[e + 3] |= s)
              : (l[e + 2] |= s)
            : a
            ? (l[e + 1] |= s)
            : (l[e] |= s);
        })(e, t, n);
      }
      function Yn(e, t, n, i = se.Default, r) {
        if (null !== e) {
          const r = (function (e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(Oe) ? e[Oe] : void 0;
            return "number" == typeof t && t > 0 ? 255 & t : t;
          })(n);
          if ("function" == typeof r) {
            dn(t, e);
            try {
              const e = r();
              if (null != e || i & se.Optional) return e;
              throw new Error(`No provider for ${jn(n)}!`);
            } finally {
              wn();
            }
          } else if ("number" == typeof r) {
            if (-1 === r) return new ni(e, t);
            let s = null,
              o = qn(e, t),
              a = -1,
              l = i & se.Host ? t[16][6] : null;
            for (
              (-1 === o || i & se.SkipSelf) &&
              ((a = -1 === o ? Zn(e, t) : t[o + 8]),
              -1 !== a && ti(i, !1)
                ? ((s = t[1]), (o = Pn(a)), (t = Ln(a, t)))
                : (o = -1));
              -1 !== o;

            ) {
              const e = t[1];
              if (ei(r, o, e.data)) {
                const e = Xn(o, t, n, s, i, l);
                if (e !== Qn) return e;
              }
              (a = t[o + 8]),
                -1 !== a && ti(i, t[1].data[o + 8] === l) && ei(r, o, t)
                  ? ((s = e), (o = Pn(a)), (t = Ln(a, t)))
                  : (o = -1);
            }
          }
        }
        if (
          (i & se.Optional && void 0 === r && (r = null),
          0 == (i & (se.Self | se.Host)))
        ) {
          const e = t[9],
            s = Be(void 0);
          try {
            return e ? e.get(n, r, i & se.Optional) : qe(n, r, i & se.Optional);
          } finally {
            Be(s);
          }
        }
        if (i & se.Optional) return r;
        throw new Error(`NodeInjector: NOT_FOUND [${jn(n)}]`);
      }
      const Qn = {};
      function Xn(e, t, n, i, r, s) {
        const o = t[1],
          a = o.data[e + 8],
          l = Kn(
            a,
            o,
            n,
            null == i ? xt(a) && zn : i != o && 2 === a.type,
            r & se.Host && s === a
          );
        return null !== l ? Jn(t, o, l, a) : Qn;
      }
      function Kn(e, t, n, i, r) {
        const s = e.providerIndexes,
          o = t.data,
          a = 1048575 & s,
          l = e.directiveStart,
          u = s >> 20,
          c = r ? a + u : e.directiveEnd;
        for (let h = i ? a : a + u; h < c; h++) {
          const e = o[h];
          if ((h < l && n === e) || (h >= l && e.type === n)) return h;
        }
        if (r) {
          const e = o[l];
          if (e && St(e) && e.type === n) return l;
        }
        return null;
      }
      function Jn(e, t, n, i) {
        let r = e[n];
        const s = t.data;
        if (r instanceof An) {
          const o = r;
          if (o.resolving) throw new Error("Circular dep for " + jn(s[n]));
          const a = $n(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? Be(o.injectImpl) : null;
          dn(e, i);
          try {
            (r = e[n] = o.factory(void 0, s, e, i)),
              t.firstCreatePass &&
                n >= i.directiveStart &&
                (function (e, t, n) {
                  const {
                    ngOnChanges: i,
                    ngOnInit: r,
                    ngDoCheck: s,
                  } = t.type.prototype;
                  if (i) {
                    const i =
                      ((o = t).type.prototype.ngOnChanges && (o.setInput = It),
                      kt);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i);
                  }
                  var o;
                  r &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, r),
                    s &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, s),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, s));
                })(n, s[n], t);
          } finally {
            null !== l && Be(l), $n(a), (o.resolving = !1), wn();
          }
        }
        return r;
      }
      function ei(e, t, n) {
        const i = 64 & e,
          r = 32 & e;
        let s;
        return (
          (s =
            128 & e
              ? i
                ? r
                  ? n[t + 7]
                  : n[t + 6]
                : r
                ? n[t + 5]
                : n[t + 4]
              : i
              ? r
                ? n[t + 3]
                : n[t + 2]
              : r
              ? n[t + 1]
              : n[t]),
          !!(s & (1 << e))
        );
      }
      function ti(e, t) {
        return !(e & se.Self || (e & se.Host && t));
      }
      class ni {
        constructor(e, t) {
          (this._tNode = e), (this._lView = t);
        }
        get(e, t) {
          return Yn(this._tNode, this._lView, e, void 0, t);
        }
      }
      function ii(e) {
        return e.ngDebugContext;
      }
      function ri(e) {
        return e.ngOriginalError;
      }
      function si(e, ...t) {
        e.error(...t);
      }
      class oi {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            i = (function (e) {
              return e.ngErrorLogger || si;
            })(e);
          i(this._console, "ERROR", e),
            t && i(this._console, "ORIGINAL ERROR", t),
            n && i(this._console, "ERROR CONTEXT", n);
        }
        _findContext(e) {
          return e ? (ii(e) ? ii(e) : this._findContext(ri(e))) : null;
        }
        _findOriginalError(e) {
          let t = ri(e);
          for (; t && ri(t); ) t = ri(t);
          return t;
        }
      }
      class ai {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return (
            "SafeValue must use [property]=binding: " +
            this.changingThisBreaksApplicationSecurity +
            " (see http://g.co/ng/security#xss)"
          );
        }
      }
      function li(e) {
        return e instanceof ai ? e.changingThisBreaksApplicationSecurity : e;
      }
      function ui(e, t) {
        const n = (function (e) {
          return (e instanceof ai && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(
            `Required a safe ${t}, got a ${n} (see http://g.co/ng/security#xss)`
          );
        }
        return n === t;
      }
      let ci = !0,
        hi = !1;
      function di() {
        return (hi = !0), ci;
      }
      class pi {
        getInertBodyElement(e) {
          e = "<body><remove></remove>" + e;
          try {
            const t = new window.DOMParser().parseFromString(
              e,
              "text/html"
            ).body;
            return t.removeChild(t.firstChild), t;
          } catch (t) {
            return null;
          }
        }
      }
      class fi {
        constructor(e) {
          if (
            ((this.defaultDoc = e),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert"
              )),
            null == this.inertDocument.body)
          ) {
            const e = this.inertDocument.createElement("html");
            this.inertDocument.appendChild(e);
            const t = this.inertDocument.createElement("body");
            e.appendChild(t);
          }
        }
        getInertBodyElement(e) {
          const t = this.inertDocument.createElement("template");
          if ("content" in t) return (t.innerHTML = e), t;
          const n = this.inertDocument.createElement("body");
          return (
            (n.innerHTML = e),
            this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
            n
          );
        }
        stripCustomNsAttrs(e) {
          const t = e.attributes;
          for (let i = t.length - 1; 0 < i; i--) {
            const n = t.item(i).name;
            ("xmlns:ns1" !== n && 0 !== n.indexOf("ns1:")) ||
              e.removeAttribute(n);
          }
          let n = e.firstChild;
          for (; n; )
            n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
              (n = n.nextSibling);
        }
      }
      const gi =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        mi =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function wi(e) {
        return (e = String(e)).match(gi) || e.match(mi)
          ? e
          : (di() &&
              console.warn(
                `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
              ),
            "unsafe:" + e);
      }
      function vi(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function yi(...e) {
        const t = {};
        for (const n of e)
          for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
        return t;
      }
      const _i = vi("area,br,col,hr,img,wbr"),
        bi = vi("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        xi = vi("rp,rt"),
        Ci = yi(xi, bi),
        Si = yi(
          _i,
          yi(
            bi,
            vi(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
            )
          ),
          yi(
            xi,
            vi(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
            )
          ),
          Ci
        ),
        Ei = vi("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        Ti = vi("srcset"),
        ki = yi(
          Ei,
          Ti,
          vi(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
          ),
          vi(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
          )
        ),
        Ii = vi("script,style,template");
      class Ai {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(e) {
          let t = e.firstChild,
            n = !0;
          for (; t; )
            if (
              (t.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(t))
                : t.nodeType === Node.TEXT_NODE
                ? this.chars(t.nodeValue)
                : (this.sanitizedSomething = !0),
              n && t.firstChild)
            )
              t = t.firstChild;
            else
              for (; t; ) {
                t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
                let e = this.checkClobberedElement(t, t.nextSibling);
                if (e) {
                  t = e;
                  break;
                }
                t = this.checkClobberedElement(t, t.parentNode);
              }
          return this.buf.join("");
        }
        startElement(e) {
          const t = e.nodeName.toLowerCase();
          if (!Si.hasOwnProperty(t))
            return (this.sanitizedSomething = !0), !Ii.hasOwnProperty(t);
          this.buf.push("<"), this.buf.push(t);
          const n = e.attributes;
          for (let r = 0; r < n.length; r++) {
            const e = n.item(r),
              t = e.name,
              s = t.toLowerCase();
            if (!ki.hasOwnProperty(s)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let o = e.value;
            Ei[s] && (o = wi(o)),
              Ti[s] &&
                ((i = o),
                (o = (i = String(i))
                  .split(",")
                  .map((e) => wi(e.trim()))
                  .join(", "))),
              this.buf.push(" ", t, '="', Di(o), '"');
          }
          var i;
          return this.buf.push(">"), !0;
        }
        endElement(e) {
          const t = e.nodeName.toLowerCase();
          Si.hasOwnProperty(t) &&
            !_i.hasOwnProperty(t) &&
            (this.buf.push("</"), this.buf.push(t), this.buf.push(">"));
        }
        chars(e) {
          this.buf.push(Di(e));
        }
        checkClobberedElement(e, t) {
          if (
            t &&
            (e.compareDocumentPosition(t) &
              Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              "Failed to sanitize html because the element is clobbered: " +
                e.outerHTML
            );
          return t;
        }
      }
      const Ri = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Mi = /([^\#-~ |!])/g;
      function Di(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(Ri, function (e) {
            return (
              "&#" +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(Mi, function (e) {
            return "&#" + e.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let Ni;
      function Oi(e) {
        return "content" in e &&
          (function (e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var Pi = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.HTML = 1)] = "HTML"),
          (e[(e.STYLE = 2)] = "STYLE"),
          (e[(e.SCRIPT = 3)] = "SCRIPT"),
          (e[(e.URL = 4)] = "URL"),
          (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          e
        );
      })({});
      function Li(e) {
        const t = ji();
        return t
          ? t.sanitize(Pi.HTML, e) || ""
          : ui(e, "HTML")
          ? li(e)
          : (function (e, t) {
              let n = null;
              try {
                Ni =
                  Ni ||
                  (function (e) {
                    return (function () {
                      try {
                        return !!new window.DOMParser().parseFromString(
                          "",
                          "text/html"
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()
                      ? new pi()
                      : new fi(e);
                  })(e);
                let i = t ? String(t) : "";
                n = Ni.getInertBodyElement(i);
                let r = 5,
                  s = i;
                do {
                  if (0 === r)
                    throw new Error(
                      "Failed to sanitize html because the input is unstable"
                    );
                  r--,
                    (i = s),
                    (s = n.innerHTML),
                    (n = Ni.getInertBodyElement(i));
                } while (i !== s);
                const o = new Ai(),
                  a = o.sanitizeChildren(Oi(n) || n);
                return (
                  di() &&
                    o.sanitizedSomething &&
                    console.warn(
                      "WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"
                    ),
                  a
                );
              } finally {
                if (n) {
                  const e = Oi(n) || n;
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                }
              }
            })(Mt(), Fn(e));
      }
      function Fi(e) {
        const t = ji();
        return t
          ? t.sanitize(Pi.URL, e) || ""
          : ui(e, "URL")
          ? li(e)
          : wi(Fn(e));
      }
      function ji() {
        const e = Gt();
        return e && e[12];
      }
      function Hi(e, t) {
        e.__ngContext__ = t;
      }
      function Vi(e, t, n) {
        let i = e.length;
        for (;;) {
          const r = e.indexOf(t, n);
          if (-1 === r) return r;
          if (0 === r || e.charCodeAt(r - 1) <= 32) {
            const n = t.length;
            if (r + n === i || e.charCodeAt(r + n) <= 32) return r;
          }
          n = r + 1;
        }
      }
      function zi(e, t, n) {
        let i = 0;
        for (; i < e.length; ) {
          let r = e[i++];
          if (n && "class" === r) {
            if (((r = e[i]), -1 !== Vi(r.toLowerCase(), t, 0))) return !0;
          } else if (1 === r) {
            for (; i < e.length && "string" == typeof (r = e[i++]); )
              if (r.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function $i(e) {
        return 0 === e.type && "ng-template" !== e.tagName;
      }
      function Bi(e, t, n) {
        return t === (0 !== e.type || n ? e.tagName : "ng-template");
      }
      function Ui(e, t, n) {
        let i = 4;
        const r = e.attrs || [],
          s = (function (e) {
            for (let n = 0; n < e.length; n++)
              if (3 === (t = e[n]) || 4 === t || 6 === t) return n;
            var t;
            return e.length;
          })(r);
        let o = !1;
        for (let a = 0; a < t.length; a++) {
          const l = t[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & i) {
                if (
                  ((i = 2 | (1 & i)),
                  ("" !== l && !Bi(e, l, n)) || ("" === l && 1 === t.length))
                ) {
                  if (Wi(i)) return !1;
                  o = !0;
                }
              } else {
                const u = 8 & i ? l : t[++a];
                if (8 & i && null !== e.attrs) {
                  if (!zi(e.attrs, u, n)) {
                    if (Wi(i)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const c = qi(8 & i ? "class" : l, r, $i(e), n);
                if (-1 === c) {
                  if (Wi(i)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== u) {
                  let e;
                  e = c > s ? "" : r[c + 1].toLowerCase();
                  const t = 8 & i ? e : null;
                  if ((t && -1 !== Vi(t, u, 0)) || (2 & i && u !== e)) {
                    if (Wi(i)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Wi(i) && !Wi(l)) return !1;
            if (o && Wi(l)) continue;
            (o = !1), (i = l | (1 & i));
          }
        }
        return Wi(i) || o;
      }
      function Wi(e) {
        return 0 == (1 & e);
      }
      function qi(e, t, n, i) {
        if (null === t) return -1;
        let r = 0;
        if (i || !n) {
          let n = !1;
          for (; r < t.length; ) {
            const i = t[r];
            if (i === e) return r;
            if (3 === i || 6 === i) n = !0;
            else {
              if (1 === i || 2 === i) {
                let e = t[++r];
                for (; "string" == typeof e; ) e = t[++r];
                continue;
              }
              if (4 === i) break;
              if (0 === i) {
                r += 4;
                continue;
              }
            }
            r += n ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const i = e[n];
              if ("number" == typeof i) return -1;
              if (i === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Zi(e, t, n = !1) {
        for (let i = 0; i < t.length; i++) if (Ui(e, t[i], n)) return !0;
        return !1;
      }
      function Gi(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const i = t[n];
          if (e.length === i.length) {
            for (let t = 0; t < e.length; t++) if (e[t] !== i[t]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function Yi(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function Qi(e) {
        let t = e[0],
          n = 1,
          i = 2,
          r = "",
          s = !1;
        for (; n < e.length; ) {
          let o = e[n];
          if ("string" == typeof o)
            if (2 & i) {
              const t = e[++n];
              r += "[" + o + (t.length > 0 ? '="' + t + '"' : "") + "]";
            } else 8 & i ? (r += "." + o) : 4 & i && (r += " " + o);
          else
            "" === r || Wi(o) || ((t += Yi(s, r)), (r = "")),
              (i = o),
              (s = s || !Wi(i));
          n++;
        }
        return "" !== r && (t += Yi(s, r)), t;
      }
      const Xi = {};
      function Ki(e) {
        const t = e[3];
        return _t(t) ? t[3] : t;
      }
      function Ji(e) {
        return tr(e[13]);
      }
      function er(e) {
        return tr(e[4]);
      }
      function tr(e) {
        for (; null !== e && !_t(e); ) e = e[4];
        return e;
      }
      function nr(e) {
        ir(Yt(), Gt(), yn() + e, tn());
      }
      function ir(e, t, n, i) {
        if (!i)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && Sn(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && En(t, i, 0, n);
          }
        _n(n);
      }
      function rr(e, t) {
        return (e << 17) | (t << 2);
      }
      function sr(e) {
        return (e >> 17) & 32767;
      }
      function or(e) {
        return 2 | e;
      }
      function ar(e) {
        return (131068 & e) >> 2;
      }
      function lr(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function ur(e) {
        return 1 | e;
      }
      function cr(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let i = 0; i < n.length; i += 2) {
            const r = n[i],
              s = n[i + 1];
            if (-1 !== s) {
              const n = e.data[s];
              hn(r), n.contentQueries(2, t[s], s);
            }
          }
      }
      function hr(e, t, n) {
        return Dt(t)
          ? t.createElement(e, n)
          : null === n
          ? t.createElement(e)
          : t.createElementNS(n, e);
      }
      function dr(e, t, n, i, r, s, o, a, l, u) {
        const c = t.blueprint.slice();
        return (
          (c[0] = r),
          (c[2] = 140 | i),
          Ut(c),
          (c[3] = c[15] = e),
          (c[8] = n),
          (c[10] = o || (e && e[10])),
          (c[11] = a || (e && e[11])),
          (c[12] = l || (e && e[12]) || null),
          (c[9] = u || (e && e[9]) || null),
          (c[6] = s),
          (c[16] = 2 == t.type ? e[16] : c),
          c
        );
      }
      function pr(e, t, n, i, r) {
        const s = t + 20,
          o =
            e.data[s] ||
            (function (e, t, n, i, r) {
              const s = Xt(),
                o = Jt(),
                a = (e.data[t] = (function (e, t, n, i, r, s) {
                  return {
                    type: n,
                    index: i,
                    injectorIndex: t ? t.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    propertyBindings: null,
                    flags: 0,
                    providerIndexes: 0,
                    tagName: r,
                    attrs: s,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: null,
                    outputs: null,
                    tViews: null,
                    next: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  };
                })(0, o ? s : s && s.parent, n, t, i, r));
              return (
                null === e.firstChild && (e.firstChild = a),
                null !== s &&
                  (o && null == s.child && null !== a.parent
                    ? (s.child = a)
                    : o || (s.next = a)),
                a
              );
            })(e, s, n, i, r);
        return Kt(o, !0), o;
      }
      function fr(e, t, n) {
        pn(t);
        try {
          const i = e.viewQuery;
          null !== i && Wr(1, i, n);
          const r = e.template;
          null !== r && wr(e, t, r, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && cr(e, t),
            e.staticViewQueries && Wr(2, e.viewQuery, n);
          const s = e.components;
          null !== s &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) Vr(e, t[n]);
            })(t, s);
        } catch (i) {
          throw (e.firstCreatePass && (e.incompleteFirstPass = !0), i);
        } finally {
          (t[2] &= -5), vn();
        }
      }
      function gr(e, t, n, i) {
        const r = t[2];
        if (256 == (256 & r)) return;
        pn(t);
        const s = tn();
        try {
          Ut(t),
            (qt.lFrame.bindingIndex = e.bindingStartIndex),
            null !== n && wr(e, t, n, 2, i);
          const o = 3 == (3 & r);
          if (!s)
            if (o) {
              const n = e.preOrderCheckHooks;
              null !== n && Sn(t, n, null);
            } else {
              const n = e.preOrderHooks;
              null !== n && En(t, n, 0, null), Tn(t, 0);
            }
          if (
            ((function (e) {
              for (let t = Ji(e); null !== t; t = er(t)) {
                if (!t[2]) continue;
                const e = t[9];
                for (let t = 0; t < e.length; t++) {
                  const n = e[t],
                    i = n[3];
                  0 == (1024 & n[2]) && Wt(i, 1), (n[2] |= 1024);
                }
              }
            })(t),
            (function (e) {
              for (let t = Ji(e); null !== t; t = er(t))
                for (let e = 10; e < t.length; e++) {
                  const n = t[e],
                    i = n[1];
                  $t(n) && gr(i, n, i.template, n[8]);
                }
            })(t),
            null !== e.contentQueries && cr(e, t),
            !s)
          )
            if (o) {
              const n = e.contentCheckHooks;
              null !== n && Sn(t, n);
            } else {
              const n = e.contentHooks;
              null !== n && En(t, n, 1), Tn(t, 1);
            }
          !(function (e, t) {
            try {
              const n = e.expandoInstructions;
              if (null !== n) {
                let i = e.expandoStartIndex,
                  r = -1,
                  s = -1;
                for (let e = 0; e < n.length; e++) {
                  const o = n[e];
                  "number" == typeof o
                    ? o <= 0
                      ? ((s = 0 - o), _n(s), (i += 9 + n[++e]), (r = i))
                      : (i += o)
                    : (null !== o && (ln(i, r), o(2, t[r])), r++);
                }
              }
            } finally {
              _n(-1);
            }
          })(e, t);
          const a = e.components;
          null !== a &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) Hr(e, t[n]);
            })(t, a);
          const l = e.viewQuery;
          if ((null !== l && Wr(2, l, i), !s))
            if (o) {
              const n = e.viewCheckHooks;
              null !== n && Sn(t, n);
            } else {
              const n = e.viewHooks;
              null !== n && En(t, n, 2), Tn(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            s || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), Wt(t[3], -1));
        } finally {
          vn();
        }
      }
      function mr(e, t, n, i) {
        const r = t[10],
          s = !tn(),
          o = zt(t);
        try {
          s && !o && r.begin && r.begin(), o && fr(e, t, i), gr(e, t, n, i);
        } finally {
          s && !o && r.end && r.end();
        }
      }
      function wr(e, t, n, i, r) {
        const s = yn();
        try {
          _n(-1), 2 & i && t.length > 20 && ir(e, t, 0, tn()), n(i, r);
        } finally {
          _n(s);
        }
      }
      function vr(e, t, n) {
        if (bt(t)) {
          const i = t.directiveEnd;
          for (let r = t.directiveStart; r < i; r++) {
            const t = e.data[r];
            t.contentQueries && t.contentQueries(1, n[r], r);
          }
        }
      }
      function yr(e, t, n) {
        Zt() &&
          ((function (e, t, n, i) {
            const r = n.directiveStart,
              s = n.directiveEnd;
            e.firstCreatePass || Un(n, t), Hi(i, t);
            const o = n.initialInputs;
            for (let a = r; a < s; a++) {
              const i = e.data[a],
                s = St(i);
              s && Pr(t, n, i);
              const l = Jn(t, e, a, n);
              Hi(l, t),
                null !== o && Lr(0, a - r, l, i, 0, o),
                s && (Ht(n.index, t)[8] = l);
            }
          })(e, t, n, Lt(n, t)),
          128 == (128 & n.flags) &&
            (function (e, t, n) {
              const i = n.directiveStart,
                r = n.directiveEnd,
                s = e.expandoInstructions,
                o = e.firstCreatePass,
                a = n.index - 20,
                l = qt.lFrame.currentDirectiveIndex;
              try {
                _n(a);
                for (let n = i; n < r; n++) {
                  const i = e.data[n],
                    r = t[n];
                  un(n),
                    null !== i.hostBindings ||
                    0 !== i.hostVars ||
                    null !== i.hostAttrs
                      ? Ar(i, r)
                      : o && s.push(null);
                }
              } finally {
                _n(-1), un(l);
              }
            })(e, t, n));
      }
      function _r(e, t, n = Lt) {
        const i = t.localNames;
        if (null !== i) {
          let r = t.index + 1;
          for (let s = 0; s < i.length; s += 2) {
            const o = i[s + 1],
              a = -1 === o ? n(t, e) : e[o];
            e[r++] = a;
          }
        }
      }
      function br(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = xr(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function xr(e, t, n, i, r, s, o, a, l, u) {
        const c = 20 + i,
          h = c + r,
          d = (function (e, t) {
            const n = [];
            for (let i = 0; i < t; i++) n.push(i < e ? null : Xi);
            return n;
          })(c, h),
          p = "function" == typeof u ? u() : u;
        return (d[1] = {
          type: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: d.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: h,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof s ? s() : s,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        });
      }
      function Cr(e, t, n, i) {
        const r = Zr(t);
        r.push(n),
          e.firstCreatePass &&
            (function (e) {
              return e.cleanup || (e.cleanup = []);
            })(e).push(i, r.length - 1);
      }
      function Sr(e, t, n) {
        for (let i in e)
          if (e.hasOwnProperty(i)) {
            const r = e[i];
            (n = null === n ? {} : n).hasOwnProperty(i)
              ? n[i].push(t, r)
              : (n[i] = [t, r]);
          }
        return n;
      }
      function Er(e, t, n, i, r, s, o, a) {
        const l = Lt(t, n);
        let u,
          c = t.inputs;
        var h;
        !a && null != c && (u = c[i])
          ? (Yr(e, n, u, i, r),
            xt(t) &&
              (function (e, t) {
                const n = Ht(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 2 === t.type &&
            ((i =
              "class" === (h = i)
                ? "className"
                : "for" === h
                ? "htmlFor"
                : "formaction" === h
                ? "formAction"
                : "innerHtml" === h
                ? "innerHTML"
                : "readonly" === h
                ? "readOnly"
                : "tabindex" === h
                ? "tabIndex"
                : h),
            (r = null != o ? o(r, t.tagName || "", i) : r),
            Dt(s)
              ? s.setProperty(l, i, r)
              : Mn(i) || (l.setProperty ? l.setProperty(i, r) : (l[i] = r)));
      }
      function Tr(e, t, n, i) {
        let r = !1;
        if (Zt()) {
          const s = (function (e, t, n) {
              const i = e.directiveRegistry;
              let r = null;
              if (i)
                for (let s = 0; s < i.length; s++) {
                  const o = i[s];
                  Zi(n, o.selectors, !1) &&
                    (r || (r = []),
                    Gn(Un(n, t), e, o.type),
                    St(o) ? (Mr(e, n), r.unshift(o)) : r.push(o));
                }
              return r;
            })(e, t, n),
            o = null === i ? null : { "": -1 };
          if (null !== s) {
            let i = 0;
            (r = !0), Nr(n, e.data.length, s.length);
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.providersResolver && t.providersResolver(t);
            }
            Rr(e, n, s.length);
            let a = !1,
              l = !1;
            for (let r = 0; r < s.length; r++) {
              const u = s[r];
              (n.mergedAttrs = Dn(n.mergedAttrs, u.hostAttrs)),
                Or(e, t, u),
                Dr(e.data.length - 1, u, o),
                null !== u.contentQueries && (n.flags |= 8),
                (null === u.hostBindings &&
                  null === u.hostAttrs &&
                  0 === u.hostVars) ||
                  (n.flags |= 128);
              const c = u.type.prototype;
              !a &&
                (c.ngOnChanges || c.ngOnInit || c.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index - 20),
                (a = !0)),
                l ||
                  (!c.ngOnChanges && !c.ngDoCheck) ||
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index - 20
                  ),
                  (l = !0)),
                kr(e, u),
                (i += u.hostVars);
            }
            !(function (e, t) {
              const n = t.directiveEnd,
                i = e.data,
                r = t.attrs,
                s = [];
              let o = null,
                a = null;
              for (let l = t.directiveStart; l < n; l++) {
                const e = i[l],
                  n = e.inputs,
                  u = null === r || $i(t) ? null : Fr(n, r);
                s.push(u), (o = Sr(n, l, o)), (a = Sr(e.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (t.flags |= 16),
                o.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = s),
                (t.inputs = o),
                (t.outputs = a);
            })(e, n),
              Ir(e, t, i);
          }
          o &&
            (function (e, t, n) {
              if (t) {
                const i = (e.localNames = []);
                for (let e = 0; e < t.length; e += 2) {
                  const r = n[t[e + 1]];
                  if (null == r)
                    throw new Error(`Export of name '${t[e + 1]}' not found!`);
                  i.push(t[e], r);
                }
              }
            })(n, i, o);
        }
        return (n.mergedAttrs = Dn(n.mergedAttrs, n.attrs)), r;
      }
      function kr(e, t) {
        const n = e.expandoInstructions;
        n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars);
      }
      function Ir(e, t, n) {
        for (let i = 0; i < n; i++)
          t.push(Xi), e.blueprint.push(Xi), e.data.push(null);
      }
      function Ar(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Rr(e, t, n) {
        const i = 20 - t.index,
          r = e.data.length - (1048575 & t.providerIndexes);
        (e.expandoInstructions || (e.expandoInstructions = [])).push(i, r, n);
      }
      function Mr(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Dr(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let i = 0; i < t.exportAs.length; i++) n[t.exportAs[i]] = e;
          St(t) && (n[""] = e);
        }
      }
      function Nr(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Or(e, t, n) {
        e.data.push(n);
        const i = n.factory || (n.factory = wt(n.type)),
          r = new An(i, St(n), null);
        e.blueprint.push(r), t.push(r);
      }
      function Pr(e, t, n) {
        const i = Lt(t, e),
          r = br(n),
          s = e[10],
          o = zr(
            e,
            dr(
              e,
              r,
              null,
              n.onPush ? 64 : 16,
              i,
              t,
              s,
              s.createRenderer(i, n),
              null,
              null
            )
          );
        e[t.index] = o;
      }
      function Lr(e, t, n, i, r, s) {
        const o = s[t];
        if (null !== o) {
          const e = i.setInput;
          for (let t = 0; t < o.length; ) {
            const r = o[t++],
              s = o[t++],
              a = o[t++];
            null !== e ? i.setInput(n, a, r, s) : (n[s] = a);
          }
        }
      }
      function Fr(e, t) {
        let n = null,
          i = 0;
        for (; i < t.length; ) {
          const r = t[i];
          if (0 !== r)
            if (5 !== r) {
              if ("number" == typeof r) break;
              e.hasOwnProperty(r) &&
                (null === n && (n = []), n.push(r, e[r], t[i + 1])),
                (i += 2);
            } else i += 2;
          else i += 4;
        }
        return n;
      }
      function jr(e, t, n, i) {
        return new Array(e, !0, !1, t, null, 0, i, n, null, null);
      }
      function Hr(e, t) {
        const n = Ht(t, e);
        if ($t(n)) {
          const e = n[1];
          80 & n[2]
            ? gr(e, n, e.template, n[8])
            : n[5] > 0 &&
              (function e(t) {
                for (let i = Ji(t); null !== i; i = er(i))
                  for (let t = 10; t < i.length; t++) {
                    const n = i[t];
                    if (1024 & n[2]) {
                      const e = n[1];
                      gr(e, n, e.template, n[8]);
                    } else n[5] > 0 && e(n);
                  }
                const n = t[1].components;
                if (null !== n)
                  for (let i = 0; i < n.length; i++) {
                    const r = Ht(n[i], t);
                    $t(r) && r[5] > 0 && e(r);
                  }
              })(n);
        }
      }
      function Vr(e, t) {
        const n = Ht(t, e),
          i = n[1];
        !(function (e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(i, n),
          fr(i, n, n[8]);
      }
      function zr(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function $r(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = Ki(e);
          if (Et(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Br(e, t, n) {
        const i = t[10];
        i.begin && i.begin();
        try {
          gr(e, t, e.template, n);
        } catch (r) {
          throw (Gr(t, r), r);
        } finally {
          i.end && i.end();
        }
      }
      function Ur(e) {
        !(function (e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              i = Vt(n),
              r = i[1];
            mr(r, i, r.template, n);
          }
        })(e[8]);
      }
      function Wr(e, t, n) {
        hn(0), t(e, n);
      }
      const qr = (() => Promise.resolve(null))();
      function Zr(e) {
        return e[7] || (e[7] = []);
      }
      function Gr(e, t) {
        const n = e[9],
          i = n ? n.get(oi, null) : null;
        i && i.handleError(t);
      }
      function Yr(e, t, n, i, r) {
        for (let s = 0; s < n.length; ) {
          const o = n[s++],
            a = n[s++],
            l = t[o],
            u = e.data[o];
          null !== u.setInput ? u.setInput(l, r, i, a) : (l[a] = r);
        }
      }
      function Qr(e, t, n) {
        const i = Pt(t, e),
          r = e[11];
        Dt(r) ? r.setValue(i, n) : (i.textContent = n);
      }
      function Xr(e, t, n, i, r) {
        if (null != i) {
          let s,
            o = !1;
          _t(i) ? (s = i) : yt(i) && ((o = !0), (i = i[0]));
          const a = Ot(i);
          0 === e && null !== n
            ? null == r
              ? rs(t, n, a)
              : is(t, n, a, r || null)
            : 1 === e && null !== n
            ? is(t, n, a, r || null)
            : 2 === e
            ? (function (e, t, n) {
                const i = os(e, t);
                i &&
                  (function (e, t, n, i) {
                    Dt(e) ? e.removeChild(t, n, i) : t.removeChild(n);
                  })(e, i, t, n);
              })(t, a, o)
            : 3 === e && t.destroyNode(a),
            null != s &&
              (function (e, t, n, i, r) {
                const s = n[7];
                s !== Ot(n) && Xr(t, e, i, s, r);
                for (let o = 10; o < n.length; o++) {
                  const r = n[o];
                  cs(r[1], r, e, t, i, s);
                }
              })(t, e, s, n, r);
        }
      }
      function Kr(e, t) {
        const n = e[9],
          i = n.indexOf(t),
          r = t[3];
        1024 & t[2] && ((t[2] &= -1025), Wt(r, -1)), n.splice(i, 1);
      }
      function Jr(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          i = e[n];
        if (i) {
          const s = i[17];
          null !== s && s !== e && Kr(s, i), t > 0 && (e[n - 1][4] = i[4]);
          const o = Ke(e, 10 + t);
          cs(i[1], (r = i), r[11], 2, null, null), (r[0] = null), (r[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (i[3] = null),
            (i[4] = null),
            (i[2] &= -129);
        }
        var r;
        return i;
      }
      function es(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          Dt(n) && n.destroyNode && cs(e, t, n, 3, null, null),
            (function (e) {
              let t = e[13];
              if (!t) return ts(e[1], e);
              for (; t; ) {
                let n = null;
                if (yt(t)) n = t[13];
                else {
                  const e = t[10];
                  e && (n = e);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    yt(t) && ts(t[1], t), (t = t[3]);
                  null === t && (t = e), yt(t) && ts(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function ts(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let i = 0; i < n.length; i += 2) {
                  const e = t[n[i]];
                  if (!(e instanceof An)) {
                    const t = n[i + 1];
                    if (Array.isArray(t))
                      for (let n = 0; n < t.length; n += 2)
                        t[n + 1].call(e[t[n]]);
                    else t.call(e);
                  }
                }
            })(e, t),
            (function (e, t) {
              const n = e.cleanup;
              if (null !== n) {
                const e = t[7];
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const r = n[i + 1],
                      s = "function" == typeof r ? r(t) : Ot(t[r]),
                      o = e[n[i + 2]],
                      a = n[i + 3];
                    "boolean" == typeof a
                      ? s.removeEventListener(n[i], o, a)
                      : a >= 0
                      ? e[a]()
                      : e[-a].unsubscribe(),
                      (i += 2);
                  } else n[i].call(e[n[i + 1]]);
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && Dt(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && _t(t[3])) {
            n !== t[3] && Kr(n, t);
            const i = t[19];
            null !== i && i.detachView(e);
          }
        }
      }
      function ns(e, t, n) {
        let i = t.parent;
        for (; null != i && (3 === i.type || 4 === i.type); )
          i = (t = i).parent;
        if (null === i) return n[0];
        if (t && 4 === t.type && 4 & t.flags) return Lt(t, n).parentNode;
        if (2 & i.flags) {
          const t = e.data,
            n = t[t[i.index].directiveStart].encapsulation;
          if (n !== rt.ShadowDom && n !== rt.Native) return null;
        }
        return Lt(i, n);
      }
      function is(e, t, n, i) {
        Dt(e) ? e.insertBefore(t, n, i) : t.insertBefore(n, i, !0);
      }
      function rs(e, t, n) {
        Dt(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function ss(e, t, n, i) {
        null !== i ? is(e, t, n, i) : rs(e, t, n);
      }
      function os(e, t) {
        return Dt(e) ? e.parentNode(t) : t.parentNode;
      }
      function as(e, t) {
        return 3 === e.type || 4 === e.type ? Lt(e, t) : null;
      }
      function ls(e, t, n, i) {
        const r = ns(e, i, t);
        if (null != r) {
          const e = t[11],
            s = as(i.parent || t[6], t);
          if (Array.isArray(n))
            for (let t = 0; t < n.length; t++) ss(e, r, n[t], s);
          else ss(e, r, n, s);
        }
      }
      function us(e, t, n, i, r, s, o) {
        for (; null != n; ) {
          const a = i[n.index],
            l = n.type;
          o && 0 === t && (a && Hi(Ot(a), i), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (3 === l || 4 === l
                ? (us(e, t, n.child, i, r, s, !1), Xr(t, e, r, a, s))
                : 1 === l
                ? hs(e, t, i, n, r, s)
                : Xr(t, e, r, a, s)),
            (n = o ? n.projectionNext : n.next);
        }
      }
      function cs(e, t, n, i, r, s) {
        us(n, i, e.firstChild, t, r, s, !1);
      }
      function hs(e, t, n, i, r, s) {
        const o = n[16],
          a = o[6].projection[i.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) Xr(t, e, r, a[l], s);
        else us(e, t, a, o[3], r, s, !0);
      }
      function ds(e, t, n) {
        Dt(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function ps(e, t, n) {
        Dt(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      class fs {
        constructor(e, t) {
          (this._lView = e),
            (this._cdRefInjectingView = t),
            (this._appRef = null),
            (this._viewContainerRef = null);
        }
        get rootNodes() {
          const e = this._lView,
            t = e[1];
          return (function e(t, n, i, r, s = !1) {
            for (; null !== i; ) {
              const o = n[i.index];
              if ((null !== o && r.push(Ot(o)), _t(o)))
                for (let t = 10; t < o.length; t++) {
                  const n = o[t],
                    i = n[1].firstChild;
                  null !== i && e(n[1], n, i, r);
                }
              const a = i.type;
              if (3 === a || 4 === a) e(t, n, i.child, r);
              else if (1 === a) {
                const t = n[16],
                  s = t[6].projection[i.projection];
                if (Array.isArray(s)) r.push(...s);
                else {
                  const n = Ki(t);
                  e(n[1], n, s, r, !0);
                }
              }
              i = s ? i.projectionNext : i.next;
            }
            return r;
          })(t, e, t.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._viewContainerRef) {
            const e = this._viewContainerRef.indexOf(this);
            e > -1 && this._viewContainerRef.detach(e),
              (this._viewContainerRef = null);
          }
          es(this._lView[1], this._lView);
        }
        onDestroy(e) {
          Cr(this._lView[1], this._lView, null, e);
        }
        markForCheck() {
          $r(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Br(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (e, t, n) {
            nn(!0);
            try {
              Br(e, t, n);
            } finally {
              nn(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef(e) {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._viewContainerRef = e;
        }
        detachFromAppRef() {
          var e;
          (this._appRef = null),
            cs(this._lView[1], (e = this._lView), e[11], 2, null, null);
        }
        attachToAppRef(e) {
          if (this._viewContainerRef)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = e;
        }
      }
      class gs extends fs {
        constructor(e) {
          super(e), (this._view = e);
        }
        detectChanges() {
          Ur(this._view);
        }
        checkNoChanges() {
          !(function (e) {
            nn(!0);
            try {
              Ur(e);
            } finally {
              nn(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      let ms, ws, vs;
      function ys(e, t, n) {
        return ms || (ms = class extends e {}), new ms(Lt(t, n));
      }
      function _s(e, t, n, i) {
        return (
          ws ||
            (ws = class extends e {
              constructor(e, t, n) {
                super(),
                  (this._declarationView = e),
                  (this._declarationTContainer = t),
                  (this.elementRef = n);
              }
              createEmbeddedView(e) {
                const t = this._declarationTContainer.tViews,
                  n = dr(
                    this._declarationView,
                    t,
                    e,
                    16,
                    null,
                    t.declTNode,
                    null,
                    null,
                    null,
                    null
                  );
                n[17] =
                  this._declarationView[this._declarationTContainer.index];
                const i = this._declarationView[19];
                return (
                  null !== i && (n[19] = i.createEmbeddedView(t)),
                  fr(t, n, e),
                  new fs(n)
                );
              }
            }),
          0 === n.type ? new ws(i, n, ys(t, n, i)) : null
        );
      }
      function bs(e, t, n, i) {
        let r;
        vs ||
          (vs = class extends e {
            constructor(e, t, n) {
              super(),
                (this._lContainer = e),
                (this._hostTNode = t),
                (this._hostView = n);
            }
            get element() {
              return ys(t, this._hostTNode, this._hostView);
            }
            get injector() {
              return new ni(this._hostTNode, this._hostView);
            }
            get parentInjector() {
              const e = Zn(this._hostTNode, this._hostView);
              if (On(e)) {
                const t = Ln(e, this._hostView),
                  n = Pn(e);
                return new ni(t[1].data[n + 8], t);
              }
              return new ni(null, this._hostView);
            }
            clear() {
              for (; this.length > 0; ) this.remove(this.length - 1);
            }
            get(e) {
              return (
                (null !== this._lContainer[8] && this._lContainer[8][e]) || null
              );
            }
            get length() {
              return this._lContainer.length - 10;
            }
            createEmbeddedView(e, t, n) {
              const i = e.createEmbeddedView(t || {});
              return this.insert(i, n), i;
            }
            createComponent(e, t, n, i, r) {
              const s = n || this.parentInjector;
              if (!r && null == e.ngModule && s) {
                const e = s.get(Ye, null);
                e && (r = e);
              }
              const o = e.create(s, i, void 0, r);
              return this.insert(o.hostView, t), o;
            }
            insert(e, t) {
              const n = e._lView,
                i = n[1];
              if (e.destroyed)
                throw new Error(
                  "Cannot insert a destroyed View in a ViewContainer!"
                );
              if ((this.allocateContainerIfNeeded(), _t(n[3]))) {
                const t = this.indexOf(e);
                if (-1 !== t) this.detach(t);
                else {
                  const t = n[3],
                    i = new vs(t, t[6], t[3]);
                  i.detach(i.indexOf(e));
                }
              }
              const r = this._adjustIndex(t),
                s = this._lContainer;
              !(function (e, t, n, i) {
                const r = 10 + i,
                  s = n.length;
                i > 0 && (n[r - 1][4] = t),
                  i < s - 10
                    ? ((t[4] = n[r]), Xe(n, 10 + i, t))
                    : (n.push(t), (t[4] = null)),
                  (t[3] = n);
                const o = t[17];
                null !== o &&
                  n !== o &&
                  (function (e, t) {
                    const n = e[9];
                    t[16] !== t[3][3][16] && (e[2] = !0),
                      null === n ? (e[9] = [t]) : n.push(t);
                  })(o, t);
                const a = t[19];
                null !== a && a.insertView(e), (t[2] |= 128);
              })(i, n, s, r);
              const o = (function e(t, n) {
                  const i = 10 + t + 1;
                  if (i < n.length) {
                    const t = n[i],
                      r = t[1].firstChild;
                    if (null !== r)
                      return (function t(n, i) {
                        if (null !== i) {
                          const r = i.type;
                          if (2 === r) return Lt(i, n);
                          if (0 === r) return e(-1, n[i.index]);
                          if (3 === r || 4 === r) {
                            const r = i.child;
                            if (null !== r) return t(n, r);
                            {
                              const t = n[i.index];
                              return _t(t) ? e(-1, t) : Ot(t);
                            }
                          }
                          {
                            const e = n[16],
                              r = e[6],
                              s = Ki(e),
                              o = r.projection[i.projection];
                            return null != o ? t(s, o) : t(n, i.next);
                          }
                        }
                        return null;
                      })(t, r);
                  }
                  return n[7];
                })(r, s),
                a = n[11],
                l = os(a, s[7]);
              return (
                null !== l &&
                  (function (e, t, n, i, r, s) {
                    (i[0] = r), (i[6] = t), cs(e, i, n, 1, r, s);
                  })(i, s[6], a, n, l, o),
                e.attachToViewContainerRef(this),
                Xe(s[8], r, e),
                e
              );
            }
            move(e, t) {
              if (e.destroyed)
                throw new Error(
                  "Cannot move a destroyed View in a ViewContainer!"
                );
              return this.insert(e, t);
            }
            indexOf(e) {
              const t = this._lContainer[8];
              return null !== t ? t.indexOf(e) : -1;
            }
            remove(e) {
              this.allocateContainerIfNeeded();
              const t = this._adjustIndex(e, -1),
                n = Jr(this._lContainer, t);
              n && (Ke(this._lContainer[8], t), es(n[1], n));
            }
            detach(e) {
              this.allocateContainerIfNeeded();
              const t = this._adjustIndex(e, -1),
                n = Jr(this._lContainer, t);
              return n && null != Ke(this._lContainer[8], t) ? new fs(n) : null;
            }
            _adjustIndex(e, t = 0) {
              return null == e ? this.length + t : e;
            }
            allocateContainerIfNeeded() {
              null === this._lContainer[8] && (this._lContainer[8] = []);
            }
          });
        const s = i[n.index];
        if (_t(s)) r = s;
        else {
          let e;
          if (3 === n.type) e = Ot(s);
          else if (((e = i[11].createComment("")), Et(i))) {
            const t = i[11],
              r = Lt(n, i);
            is(
              t,
              os(t, r),
              e,
              (function (e, t) {
                return Dt(e) ? e.nextSibling(t) : t.nextSibling;
              })(t, r)
            );
          } else ls(i[1], i, e, n);
          (i[n.index] = r = jr(s, i, e, n)), zr(i, r);
        }
        return new vs(r, n, i);
      }
      let xs = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Cs()), e;
      })();
      const Cs = function (e = !1) {
          return (function (e, t, n) {
            if (!n && xt(e)) {
              const n = Ht(e.index, t);
              return new fs(n, n);
            }
            return 2 === e.type || 0 === e.type || 3 === e.type || 4 === e.type
              ? new fs(t[16], t)
              : null;
          })(Xt(), Gt(), e);
        },
        Ss = new Pe("Set Injector scope."),
        Es = {},
        Ts = {},
        ks = [];
      let Is = void 0;
      function As() {
        return void 0 === Is && (Is = new Ge()), Is;
      }
      function Rs(e, t = null, n = null, i) {
        return new Ms(e, n, t || As(), i);
      }
      class Ms {
        constructor(e, t, n, i = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const r = [];
          t && Qe(t, (n) => this.processProvider(n, e, t)),
            Qe([e], (e) => this.processInjectorType(e, [], r)),
            this.records.set(Le, Ns(void 0, this));
          const s = this.records.get(Ss);
          (this.scope = null != s ? s.value : null),
            (this.source = i || ("object" == typeof e ? null : ve(e)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((e) => e.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(e, t = Fe, n = se.Default) {
          this.assertNotDestroyed();
          const i = $e(this);
          try {
            if (!(n & se.SkipSelf)) {
              let t = this.records.get(e);
              if (void 0 === t) {
                const n =
                  ("function" == typeof (r = e) ||
                    ("object" == typeof r && r instanceof Pe)) &&
                  ce(e);
                (t = n && this.injectableDefInScope(n) ? Ns(Ds(e), Es) : null),
                  this.records.set(e, t);
              }
              if (null != t) return this.hydrate(e, t);
            }
            return (n & se.Self ? As() : this.parent).get(
              e,
              (t = n & se.Optional && t === Fe ? null : t)
            );
          } catch (s) {
            if ("NullInjectorError" === s.name) {
              if (
                ((s.ngTempTokenPath = s.ngTempTokenPath || []).unshift(ve(e)),
                i)
              )
                throw s;
              return (function (e, t, n, i) {
                const r = e.ngTempTokenPath;
                throw (
                  (t.__source && r.unshift(t.__source),
                  (e.message = (function (e, t, n, i = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.substr(2)
                        : e;
                    let r = ve(t);
                    if (Array.isArray(t)) r = t.map(ve).join(" -> ");
                    else if ("object" == typeof t) {
                      let e = [];
                      for (let n in t)
                        if (t.hasOwnProperty(n)) {
                          let i = t[n];
                          e.push(
                            n +
                              ":" +
                              ("string" == typeof i ? JSON.stringify(i) : ve(i))
                          );
                        }
                      r = `{${e.join(", ")}}`;
                    }
                    return `${n}${i ? "(" + i + ")" : ""}[${r}]: ${e.replace(
                      je,
                      "\n  "
                    )}`;
                  })("\n" + e.message, r, n, i)),
                  (e.ngTokenPath = r),
                  (e.ngTempTokenPath = null),
                  e)
                );
              })(s, e, "R3InjectorError", this.source);
            }
            throw s;
          } finally {
            $e(i);
          }
          var r;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((e) => this.get(e));
        }
        toString() {
          const e = [];
          return (
            this.records.forEach((t, n) => e.push(ve(n))),
            `R3Injector[${e.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(e, t, n) {
          if (!(e = xe(e))) return !1;
          let i = de(e);
          const r = (null == i && e.ngModule) || void 0,
            s = void 0 === r ? e : r,
            o = -1 !== n.indexOf(s);
          if ((void 0 !== r && (i = de(r)), null == i)) return !1;
          if (null != i.imports && !o) {
            let e;
            n.push(s);
            try {
              Qe(i.imports, (i) => {
                this.processInjectorType(i, t, n) &&
                  (void 0 === e && (e = []), e.push(i));
              });
            } finally {
            }
            if (void 0 !== e)
              for (let t = 0; t < e.length; t++) {
                const { ngModule: n, providers: i } = e[t];
                Qe(i, (e) => this.processProvider(e, n, i || ks));
              }
          }
          this.injectorDefTypes.add(s), this.records.set(s, Ns(i.factory, Es));
          const a = i.providers;
          if (null != a && !o) {
            const t = e;
            Qe(a, (e) => this.processProvider(e, t, a));
          }
          return void 0 !== r && void 0 !== e.providers;
        }
        processProvider(e, t, n) {
          let i = Ps((e = xe(e))) ? e : xe(e && e.provide);
          const r = (function (e, t, n) {
            return Os(e)
              ? Ns(void 0, e.useValue)
              : Ns(
                  (function (e, t, n) {
                    let i = void 0;
                    if (Ps(e)) {
                      const t = xe(e);
                      return wt(t) || Ds(t);
                    }
                    if (Os(e)) i = () => xe(e.useValue);
                    else if ((r = e) && r.useFactory)
                      i = () => e.useFactory(...Ze(e.deps || []));
                    else if (
                      (function (e) {
                        return !(!e || !e.useExisting);
                      })(e)
                    )
                      i = () => We(xe(e.useExisting));
                    else {
                      const t = xe(e && (e.useClass || e.provide));
                      if (
                        !(function (e) {
                          return !!e.deps;
                        })(e)
                      )
                        return wt(t) || Ds(t);
                      i = () => new t(...Ze(e.deps));
                    }
                    var r;
                    return i;
                  })(e),
                  Es
                );
          })(e);
          if (Ps(e) || !0 !== e.multi) this.records.get(i);
          else {
            let t = this.records.get(i);
            t ||
              ((t = Ns(void 0, Es, !0)),
              (t.factory = () => Ze(t.multi)),
              this.records.set(i, t)),
              (i = e),
              t.multi.push(e);
          }
          this.records.set(i, r);
        }
        hydrate(e, t) {
          var n;
          return (
            t.value === Es && ((t.value = Ts), (t.value = t.factory())),
            "object" == typeof t.value &&
              t.value &&
              null !== (n = t.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(t.value),
            t.value
          );
        }
        injectableDefInScope(e) {
          return (
            !!e.providedIn &&
            ("string" == typeof e.providedIn
              ? "any" === e.providedIn || e.providedIn === this.scope
              : this.injectorDefTypes.has(e.providedIn))
          );
        }
      }
      function Ds(e) {
        const t = ce(e),
          n = null !== t ? t.factory : wt(e);
        if (null !== n) return n;
        const i = de(e);
        if (null !== i) return i.factory;
        if (e instanceof Pe)
          throw new Error(`Token ${ve(e)} is missing a \u0275prov definition.`);
        if (e instanceof Function)
          return (function (e) {
            const t = e.length;
            if (t > 0) {
              const n = Je(t, "?");
              throw new Error(
                `Can't resolve all parameters for ${ve(e)}: (${n.join(", ")}).`
              );
            }
            const n = (function (e) {
              const t = e && (e[pe] || e[me] || (e[ge] && e[ge]()));
              if (t) {
                const n = (function (e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Error("unreachable");
      }
      function Ns(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Os(e) {
        return null !== e && "object" == typeof e && He in e;
      }
      function Ps(e) {
        return "function" == typeof e;
      }
      const Ls = function (e, t, n) {
        return (function (e, t = null, n = null, i) {
          const r = Rs(e, t, n, i);
          return r._resolveInjectorDefTypes(), r;
        })({ name: n }, t, e, n);
      };
      let Fs = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e)
              ? Ls(e, t, "")
              : Ls(e.providers, e.parent, e.name || "");
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = Fe),
          (e.NULL = new Ge()),
          (e.ɵprov = le({
            token: e,
            providedIn: "any",
            factory: () => We(Le),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function js(e, t, n) {
        let i = n ? e.styles : null,
          r = n ? e.classes : null,
          s = 0;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const e = t[o];
            "number" == typeof e
              ? (s = e)
              : 1 == s
              ? (r = ye(r, e))
              : 2 == s && (i = ye(i, e + ": " + t[++o] + ";"));
          }
        n ? (e.styles = i) : (e.stylesWithoutHost = i),
          n ? (e.classes = r) : (e.classesWithoutHost = r);
      }
      function Hs(e, t) {
        const n = Vt(e)[1],
          i = n.data.length - 1;
        Cn(n, { directiveStart: i, directiveEnd: i + 1 });
      }
      function Vs(e) {
        let t = Object.getPrototypeOf(e.type.prototype).constructor,
          n = !0;
        const i = [e];
        for (; t; ) {
          let r = void 0;
          if (St(e)) r = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new Error("Directives cannot inherit Components");
            r = t.ɵdir;
          }
          if (r) {
            if (n) {
              i.push(r);
              const t = e;
              (t.inputs = zs(e.inputs)),
                (t.declaredInputs = zs(e.declaredInputs)),
                (t.outputs = zs(e.outputs));
              const n = r.hostBindings;
              n && Us(e, n);
              const s = r.viewQuery,
                o = r.contentQueries;
              if (
                (s && $s(e, s),
                o && Bs(e, o),
                ae(e.inputs, r.inputs),
                ae(e.declaredInputs, r.declaredInputs),
                ae(e.outputs, r.outputs),
                St(r) && r.data.animation)
              ) {
                const t = e.data;
                t.animation = (t.animation || []).concat(r.data.animation);
              }
            }
            const t = r.features;
            if (t)
              for (let i = 0; i < t.length; i++) {
                const r = t[i];
                r && r.ngInherit && r(e), r === Vs && (n = !1);
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function (e) {
          let t = 0,
            n = null;
          for (let i = e.length - 1; i >= 0; i--) {
            const r = e[i];
            (r.hostVars = t += r.hostVars),
              (r.hostAttrs = Dn(r.hostAttrs, (n = Dn(n, r.hostAttrs))));
          }
        })(i);
      }
      function zs(e) {
        return e === st ? {} : e === ot ? [] : e;
      }
      function $s(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (e, i) => {
              t(e, i), n(e, i);
            }
          : t;
      }
      function Bs(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (e, i, r) => {
              t(e, i, r), n(e, i, r);
            }
          : t;
      }
      function Us(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (e, i) => {
              t(e, i), n(e, i);
            }
          : t;
      }
      let Ws = null;
      function qs() {
        if (!Ws) {
          const e = ke.Symbol;
          if (e && e.iterator) Ws = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (Ws = n);
            }
          }
        }
        return Ws;
      }
      class Zs {
        constructor(e) {
          this.wrapped = e;
        }
        static wrap(e) {
          return new Zs(e);
        }
        static unwrap(e) {
          return Zs.isWrapped(e) ? e.wrapped : e;
        }
        static isWrapped(e) {
          return e instanceof Zs;
        }
      }
      function Gs(e) {
        return (
          !!Ys(e) && (Array.isArray(e) || (!(e instanceof Map) && qs() in e))
        );
      }
      function Ys(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Qs(e, t, n) {
        return (e[t] = n);
      }
      function Xs(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Ks(e, t, n, i) {
        const r = Xs(e, t, n);
        return Xs(e, t + 1, i) || r;
      }
      function Js(e, t, n, i, r) {
        const s = Ks(e, t, n, i);
        return Xs(e, t + 2, r) || s;
      }
      function eo(e, t, n, i, r, s) {
        const o = Ks(e, t, n, i);
        return Ks(e, t + 2, r, s) || o;
      }
      function to(e, t, n, i) {
        return Xs(e, on(), n) ? t + Fn(n) + i : Xi;
      }
      function no(e, t, n, i, r, s, o, a) {
        const l = Gt(),
          u = Yt(),
          c = e + 20,
          h = u.firstCreatePass
            ? (function (e, t, n, i, r, s, o, a, l) {
                const u = t.consts,
                  c = pr(t, e, 0, o || null, Bt(u, a));
                Tr(t, n, c, Bt(u, l)), Cn(t, c);
                const h = (c.tViews = xr(
                  2,
                  c,
                  i,
                  r,
                  s,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  u
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, c),
                    (h.queries = t.queries.embeddedTView(c))),
                  c
                );
              })(e, u, l, t, n, i, r, s, o)
            : u.data[c];
        Kt(h, !1);
        const d = l[11].createComment("");
        ls(u, l, d, h),
          Hi(d, l),
          zr(l, (l[c] = jr(d, l, d, h))),
          Ct(h) && yr(u, l, h),
          null != o && _r(l, h, a);
      }
      function io(e) {
        return jt(qt.lFrame.contextLView, e);
      }
      function ro(e, t = se.Default) {
        const n = Gt();
        return null === n ? We(e, t) : Yn(Xt(), n, xe(e), t);
      }
      function so(e, t, n) {
        const i = Gt();
        return Xs(i, on(), t) && Er(Yt(), bn(), i, e, t, i[11], n, !1), so;
      }
      function oo(e, t, n, i, r) {
        const s = r ? "class" : "style";
        Yr(e, n, t.inputs[s], s, i);
      }
      function ao(e, t, n, i) {
        const r = Gt(),
          s = Yt(),
          o = 20 + e,
          a = r[11],
          l = (r[o] = hr(t, a, qt.lFrame.currentNamespace)),
          u = s.firstCreatePass
            ? (function (e, t, n, i, r, s, o) {
                const a = t.consts,
                  l = pr(t, e, 2, r, Bt(a, s));
                return (
                  Tr(t, n, l, Bt(a, o)),
                  null !== l.attrs && js(l, l.attrs, !1),
                  null !== l.mergedAttrs && js(l, l.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, l),
                  l
                );
              })(e, s, r, 0, t, n, i)
            : s.data[o];
        Kt(u, !0);
        const c = u.mergedAttrs;
        null !== c && Rn(a, l, c);
        const h = u.classes;
        null !== h && ps(a, l, h);
        const d = u.styles;
        null !== d && ds(a, l, d),
          ls(s, r, l, u),
          0 === qt.lFrame.elementDepthCount && Hi(l, r),
          qt.lFrame.elementDepthCount++,
          Ct(u) && (yr(s, r, u), vr(s, u, r)),
          null !== i && _r(r, u);
      }
      function lo() {
        let e = Xt();
        Jt() ? en() : ((e = e.parent), Kt(e, !1));
        const t = e;
        qt.lFrame.elementDepthCount--;
        const n = Yt();
        n.firstCreatePass && (Cn(n, e), bt(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(t) &&
            oo(n, t, Gt(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(t) &&
            oo(n, t, Gt(), t.stylesWithoutHost, !1);
      }
      function uo(e, t, n, i) {
        ao(e, t, n, i), lo();
      }
      function co(e, t, n) {
        const i = Gt(),
          r = Yt(),
          s = e + 20,
          o = r.firstCreatePass
            ? (function (e, t, n, i, r) {
                const s = t.consts,
                  o = Bt(s, i),
                  a = pr(t, e, 3, "ng-container", o);
                return (
                  null !== o && js(a, o, !0),
                  Tr(t, n, a, Bt(s, r)),
                  null !== t.queries && t.queries.elementStart(t, a),
                  a
                );
              })(e, r, i, t, n)
            : r.data[s];
        Kt(o, !0);
        const a = (i[s] = i[11].createComment(""));
        ls(r, i, a, o),
          Hi(a, i),
          Ct(o) && (yr(r, i, o), vr(r, o, i)),
          null != n && _r(i, o);
      }
      function ho() {
        let e = Xt();
        const t = Yt();
        Jt() ? en() : ((e = e.parent), Kt(e, !1)),
          t.firstCreatePass && (Cn(t, e), bt(e) && t.queries.elementEnd(e));
      }
      function po() {
        return Gt();
      }
      function fo(e) {
        return !!e && "function" == typeof e.then;
      }
      function go(e, t, n = !1, i) {
        const r = Gt(),
          s = Yt(),
          o = Xt();
        return (
          (function (e, t, n, i, r, s, o = !1, a) {
            const l = Ct(i),
              u = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
              c = Zr(t);
            let h = !0;
            if (2 === i.type) {
              const d = Lt(i, t),
                p = a ? a(d) : st,
                f = p.target || d,
                g = c.length,
                m = a ? (e) => a(Ot(e[i.index])).target : i.index;
              if (Dt(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (e, t, n, i) {
                      const r = e.cleanup;
                      if (null != r)
                        for (let s = 0; s < r.length - 1; s += 2) {
                          const e = r[s];
                          if (e === n && r[s + 1] === i) {
                            const e = t[7],
                              n = r[s + 2];
                            return e.length > n ? e[n] : null;
                          }
                          "string" == typeof e && (s += 2);
                        }
                      return null;
                    })(e, t, r, i.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = s),
                    (o.__ngLastListenerFn__ = s),
                    (h = !1);
                else {
                  s = wo(i, t, s, !1);
                  const e = n.listen(p.name || f, r, s);
                  c.push(s, e), u && u.push(r, m, g, g + 1);
                }
              } else
                (s = wo(i, t, s, !0)),
                  f.addEventListener(r, s, o),
                  c.push(s),
                  u && u.push(r, m, g, o);
            }
            const d = i.outputs;
            let p;
            if (h && null !== d && (p = d[r])) {
              const e = p.length;
              if (e)
                for (let n = 0; n < e; n += 2) {
                  const e = t[p[n]][p[n + 1]].subscribe(s),
                    o = c.length;
                  c.push(s, e), u && u.push(r, i.index, o, -(o + 1));
                }
            }
          })(s, r, r[11], o, e, t, n, i),
          go
        );
      }
      function mo(e, t, n) {
        try {
          return !1 !== t(n);
        } catch (i) {
          return Gr(e, i), !1;
        }
      }
      function wo(e, t, n, i) {
        return function r(s) {
          if (s === Function) return n;
          const o = 2 & e.flags ? Ht(e.index, t) : t;
          0 == (32 & t[2]) && $r(o);
          let a = mo(t, n, s),
            l = r.__ngNextListenerFn__;
          for (; l; ) (a = mo(t, l, s) && a), (l = l.__ngNextListenerFn__);
          return i && !1 === a && (s.preventDefault(), (s.returnValue = !1)), a;
        };
      }
      function vo(e = 1) {
        return (function (e) {
          return (qt.lFrame.contextLView = (function (e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, qt.lFrame.contextLView))[8];
        })(e);
      }
      function yo(e, t) {
        let n = null;
        const i = (function (e) {
          const t = e.attrs;
          if (null != t) {
            const e = t.indexOf(5);
            if (0 == (1 & e)) return t[e + 1];
          }
          return null;
        })(e);
        for (let r = 0; r < t.length; r++) {
          const s = t[r];
          if ("*" !== s) {
            if (null === i ? Zi(e, s, !0) : Gi(i, s)) return r;
          } else n = r;
        }
        return n;
      }
      function _o(e) {
        const t = Gt()[16][6];
        if (!t.projection) {
          const n = (t.projection = Je(e ? e.length : 1, null)),
            i = n.slice();
          let r = t.child;
          for (; null !== r; ) {
            const t = e ? yo(r, e) : 0;
            null !== t &&
              (i[t] ? (i[t].projectionNext = r) : (n[t] = r), (i[t] = r)),
              (r = r.next);
          }
        }
      }
      function bo(e, t = 0, n) {
        const i = Gt(),
          r = Yt(),
          s = pr(r, e, 1, null, n || null);
        null === s.projection && (s.projection = t),
          en(),
          (function (e, t, n) {
            hs(t[11], 0, t, n, ns(e, n, t), as(n.parent || t[6], t));
          })(r, i, s);
      }
      function xo(e, t, n) {
        return Co(e, "", t, "", n), xo;
      }
      function Co(e, t, n, i, r) {
        const s = Gt(),
          o = to(s, t, n, i);
        return o !== Xi && Er(Yt(), bn(), s, e, o, s[11], r, !1), Co;
      }
      const So = [];
      function Eo(e, t, n, i, r) {
        const s = e[n + 1],
          o = null === t;
        let a = i ? sr(s) : ar(s),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = e[a + 1];
          To(e[a], t) && ((l = !0), (e[a + 1] = i ? ur(n) : or(n))),
            (a = i ? sr(n) : ar(n));
        }
        l && (e[n + 1] = i ? or(s) : ur(s));
      }
      function To(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && nt(e, t) >= 0)
        );
      }
      const ko = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Io(e) {
        return e.substring(ko.key, ko.keyEnd);
      }
      function Ao(e) {
        return e.substring(ko.value, ko.valueEnd);
      }
      function Ro(e, t) {
        const n = ko.textEnd;
        return n === t
          ? -1
          : ((t = ko.keyEnd =
              (function (e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (ko.key = t), n)),
            No(e, t, n));
      }
      function Mo(e, t) {
        const n = ko.textEnd;
        let i = (ko.key = No(e, t, n));
        return n === i
          ? -1
          : ((i = ko.keyEnd =
              (function (e, t, n) {
                let i;
                for (
                  ;
                  t < n &&
                  (45 === (i = e.charCodeAt(t)) ||
                    95 === i ||
                    ((-33 & i) >= 65 && (-33 & i) <= 90) ||
                    (i >= 48 && i <= 57));

                )
                  t++;
                return t;
              })(e, i, n)),
            (i = Oo(e, i, n)),
            (i = ko.value = No(e, i, n)),
            (i = ko.valueEnd =
              (function (e, t, n) {
                let i = -1,
                  r = -1,
                  s = -1,
                  o = t,
                  a = o;
                for (; o < n; ) {
                  const l = e.charCodeAt(o++);
                  if (59 === l) return a;
                  34 === l || 39 === l
                    ? (a = o = Po(e, l, o, n))
                    : t === o - 4 &&
                      85 === s &&
                      82 === r &&
                      76 === i &&
                      40 === l
                    ? (a = o = Po(e, 41, o, n))
                    : l > 32 && (a = o),
                    (s = r),
                    (r = i),
                    (i = -33 & l);
                }
                return a;
              })(e, i, n)),
            Oo(e, i, n));
      }
      function Do(e) {
        (ko.key = 0),
          (ko.keyEnd = 0),
          (ko.value = 0),
          (ko.valueEnd = 0),
          (ko.textEnd = e.length);
      }
      function No(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Oo(e, t, n, i) {
        return (t = No(e, t, n)) < n && t++, t;
      }
      function Po(e, t, n, i) {
        let r = -1,
          s = n;
        for (; s < i; ) {
          const n = e.charCodeAt(s++);
          if (n == t && 92 !== r) return s;
          r = 92 == n && 92 === r ? 0 : n;
        }
        throw new Error();
      }
      function Lo(e, t) {
        return (
          (function (e, t, n, i) {
            const r = Gt(),
              s = Yt(),
              o = an(2);
            s.firstUpdatePass && $o(s, e, o, true),
              t !== Xi &&
                Xs(r, o, t) &&
                qo(
                  s,
                  s.data[yn() + 20],
                  r,
                  r[11],
                  e,
                  (r[o + 1] = (function (e, t) {
                    return (
                      null == e || ("object" == typeof e && (e = ve(li(e)))), e
                    );
                  })(t)),
                  true,
                  o
                );
          })(e, t),
          Lo
        );
      }
      function Fo(e) {
        Vo(Wo, jo, e, !1);
      }
      function jo(e, t) {
        for (
          let n = (function (e) {
            return Do(e), Mo(e, No(e, 0, ko.textEnd));
          })(t);
          n >= 0;
          n = Mo(t, n)
        )
          Wo(e, Io(t), Ao(t));
      }
      function Ho(e, t) {
        for (
          let n = (function (e) {
            return Do(e), Ro(e, No(e, 0, ko.textEnd));
          })(t);
          n >= 0;
          n = Ro(t, n)
        )
          et(e, Io(t), !0);
      }
      function Vo(e, t, n, i) {
        const r = Yt(),
          s = an(2);
        r.firstUpdatePass && $o(r, null, s, i);
        const o = Gt();
        if (n !== Xi && Xs(o, s, n)) {
          const a = r.data[yn() + 20];
          if (Yo(a, i) && !zo(r, s)) {
            let e = i ? a.classesWithoutHost : a.stylesWithoutHost;
            null !== e && (n = ye(e, n || "")), oo(r, a, o, n, i);
          } else
            !(function (e, t, n, i, r, s, o, a) {
              r === Xi && (r = So);
              let l = 0,
                u = 0,
                c = 0 < r.length ? r[0] : null,
                h = 0 < s.length ? s[0] : null;
              for (; null !== c || null !== h; ) {
                const d = l < r.length ? r[l + 1] : void 0,
                  p = u < s.length ? s[u + 1] : void 0;
                let f = null,
                  g = void 0;
                c === h
                  ? ((l += 2), (u += 2), d !== p && ((f = h), (g = p)))
                  : null === h || (null !== c && c < h)
                  ? ((l += 2), (f = c))
                  : ((u += 2), (f = h), (g = p)),
                  null !== f && qo(e, t, n, i, f, g, o, a),
                  (c = l < r.length ? r[l] : null),
                  (h = u < s.length ? s[u] : null);
              }
            })(
              r,
              a,
              o,
              o[11],
              o[s + 1],
              (o[s + 1] = (function (e, t, n) {
                if (null == n || "" === n) return So;
                const i = [],
                  r = li(n);
                if (Array.isArray(r))
                  for (let s = 0; s < r.length; s++) e(i, r[s], !0);
                else if ("object" == typeof r)
                  for (const s in r) r.hasOwnProperty(s) && e(i, s, r[s]);
                else "string" == typeof r && t(i, r);
                return i;
              })(e, t, n)),
              i,
              s
            );
        }
      }
      function zo(e, t) {
        return t >= e.expandoStartIndex;
      }
      function $o(e, t, n, i) {
        const r = e.data;
        if (null === r[n + 1]) {
          const s = r[yn() + 20],
            o = zo(e, n);
          Yo(s, i) && null === t && !o && (t = !1),
            (t = (function (e, t, n, i) {
              const r = (function (e) {
                const t = qt.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let s = i ? t.residualClasses : t.residualStyles;
              if (null === r)
                0 === (i ? t.classBindings : t.styleBindings) &&
                  ((n = Uo((n = Bo(null, e, t, n, i)), t.attrs, i)),
                  (s = null));
              else {
                const o = t.directiveStylingLast;
                if (-1 === o || e[o] !== r)
                  if (((n = Bo(r, e, t, n, i)), null === s)) {
                    let n = (function (e, t, n) {
                      const i = n ? t.classBindings : t.styleBindings;
                      if (0 !== ar(i)) return e[sr(i)];
                    })(e, t, i);
                    void 0 !== n &&
                      Array.isArray(n) &&
                      ((n = Bo(null, e, t, n[1], i)),
                      (n = Uo(n, t.attrs, i)),
                      (function (e, t, n, i) {
                        e[sr(n ? t.classBindings : t.styleBindings)] = i;
                      })(e, t, i, n));
                  } else
                    s = (function (e, t, n) {
                      let i = void 0;
                      const r = t.directiveEnd;
                      for (let s = 1 + t.directiveStylingLast; s < r; s++)
                        i = Uo(i, e[s].hostAttrs, n);
                      return Uo(i, t.attrs, n);
                    })(e, t, i);
              }
              return (
                void 0 !== s &&
                  (i ? (t.residualClasses = s) : (t.residualStyles = s)),
                n
              );
            })(r, s, t, i)),
            (function (e, t, n, i, r, s) {
              let o = s ? t.classBindings : t.styleBindings,
                a = sr(o),
                l = ar(o);
              e[i] = n;
              let u,
                c = !1;
              if (Array.isArray(n)) {
                const e = n;
                (u = e[1]), (null === u || nt(e, u) > 0) && (c = !0);
              } else u = n;
              if (r)
                if (0 !== l) {
                  const t = sr(e[a + 1]);
                  (e[i + 1] = rr(t, a)),
                    0 !== t && (e[t + 1] = lr(e[t + 1], i)),
                    (e[a + 1] = (131071 & e[a + 1]) | (i << 17));
                } else
                  (e[i + 1] = rr(a, 0)),
                    0 !== a && (e[a + 1] = lr(e[a + 1], i)),
                    (a = i);
              else
                (e[i + 1] = rr(l, 0)),
                  0 === a ? (a = i) : (e[l + 1] = lr(e[l + 1], i)),
                  (l = i);
              c && (e[i + 1] = or(e[i + 1])),
                Eo(e, u, i, !0),
                Eo(e, u, i, !1),
                (function (e, t, n, i, r) {
                  const s = r ? e.residualClasses : e.residualStyles;
                  null != s &&
                    "string" == typeof t &&
                    nt(s, t) >= 0 &&
                    (n[i + 1] = ur(n[i + 1]));
                })(t, u, e, i, s),
                (o = rr(a, l)),
                s ? (t.classBindings = o) : (t.styleBindings = o);
            })(r, s, t, n, o, i);
        }
      }
      function Bo(e, t, n, i, r) {
        let s = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((s = t[a]), (i = Uo(i, s.hostAttrs, r)), s !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), i;
      }
      function Uo(e, t, n) {
        const i = n ? 1 : 2;
        let r = -1;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const o = t[s];
            "number" == typeof o
              ? (r = o)
              : r === i &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                et(e, o, !!n || t[++s]));
          }
        return void 0 === e ? null : e;
      }
      function Wo(e, t, n) {
        et(e, t, li(n));
      }
      function qo(e, t, n, i, r, s, o, a) {
        if (2 !== t.type) return;
        const l = e.data,
          u = l[a + 1];
        Go(1 == (1 & u) ? Zo(l, t, n, r, ar(u), o) : void 0) ||
          (Go(s) || (2 == (2 & u) && (s = Zo(l, null, n, r, a, o))),
          (function (e, t, n, i, r) {
            const s = Dt(e);
            if (t)
              r
                ? s
                  ? e.addClass(n, i)
                  : n.classList.add(i)
                : s
                ? e.removeClass(n, i)
                : n.classList.remove(i);
            else {
              const t = -1 == i.indexOf("-") ? void 0 : 2;
              null == r
                ? s
                  ? e.removeStyle(n, i, t)
                  : n.style.removeProperty(i)
                : s
                ? e.setStyle(n, i, r, t)
                : n.style.setProperty(i, r);
            }
          })(i, o, Pt(yn(), n), r, s));
      }
      function Zo(e, t, n, i, r, s) {
        const o = null === t;
        let a = void 0;
        for (; r > 0; ) {
          const t = e[r],
            s = Array.isArray(t),
            l = s ? t[1] : t,
            u = null === l;
          let c = n[r + 1];
          c === Xi && (c = u ? So : void 0);
          let h = u ? tt(c, i) : l === i ? c : void 0;
          if ((s && !Go(h) && (h = tt(t, i)), Go(h) && ((a = h), o))) return a;
          const d = e[r + 1];
          r = o ? sr(d) : ar(d);
        }
        if (null !== t) {
          let e = s ? t.residualClasses : t.residualStyles;
          null != e && (a = tt(e, i));
        }
        return a;
      }
      function Go(e) {
        return void 0 !== e;
      }
      function Yo(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function Qo(e, t = "") {
        const n = Gt(),
          i = Yt(),
          r = e + 20,
          s = i.firstCreatePass ? pr(i, e, 2, null, null) : i.data[r],
          o = (n[r] = (function (e, t) {
            return Dt(t) ? t.createText(e) : t.createTextNode(e);
          })(t, n[11]));
        ls(i, n, o, s), Kt(s, !1);
      }
      function Xo(e) {
        return Ko("", e, ""), Xo;
      }
      function Ko(e, t, n) {
        const i = Gt(),
          r = to(i, e, t, n);
        return r !== Xi && Qr(i, yn(), r), Ko;
      }
      function Jo(e, t, n, i, r, s, o) {
        const a = Gt(),
          l = (function (e, t, n, i, r, s, o, a) {
            const l = Js(e, sn(), n, r, o);
            return an(3), l ? t + Fn(n) + i + Fn(r) + s + Fn(o) + a : Xi;
          })(a, e, t, n, i, r, s, o);
        return l !== Xi && Qr(a, yn(), l), Jo;
      }
      function ea(e, t, n, i, r, s, o, a, l) {
        const u = Gt(),
          c = (function (e, t, n, i, r, s, o, a, l, u) {
            const c = eo(e, sn(), n, r, o, l);
            return (
              an(4), c ? t + Fn(n) + i + Fn(r) + s + Fn(o) + a + Fn(l) + u : Xi
            );
          })(u, e, t, n, i, r, s, o, a, l);
        return c !== Xi && Qr(u, yn(), c), ea;
      }
      function ta(e, t, n) {
        Vo(et, Ho, to(Gt(), e, t, n), !0);
      }
      class na {}
      class ia {
        resolveComponentFactory(e) {
          throw (function (e) {
            const t = Error(
              `No component factory found for ${ve(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(e);
        }
      }
      let ra = (() => {
          class e {}
          return (e.NULL = new ia()), e;
        })(),
        sa = (() => {
          class e {
            constructor(e) {
              this.nativeElement = e;
            }
          }
          return (e.__NG_ELEMENT_ID__ = () => oa(e)), e;
        })();
      const oa = function (e) {
        return ys(e, Xt(), Gt());
      };
      class aa {}
      var la = (function (e) {
        return (
          (e[(e.Important = 1)] = "Important"),
          (e[(e.DashCase = 2)] = "DashCase"),
          e
        );
      })({});
      let ua = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => ca()), e;
      })();
      const ca = function () {
        const e = Gt(),
          t = Ht(Xt().index, e);
        return (function (e) {
          const t = e[11];
          if (Dt(t)) return t;
          throw new Error(
            "Cannot inject Renderer2 when the application uses Renderer3!"
          );
        })(yt(t) ? t : e);
      };
      let ha = (() => {
        class e {}
        return (
          (e.ɵprov = le({ token: e, providedIn: "root", factory: () => null })),
          e
        );
      })();
      class da {
        constructor(e) {
          (this.full = e),
            (this.major = e.split(".")[0]),
            (this.minor = e.split(".")[1]),
            (this.patch = e.split(".").slice(2).join("."));
        }
      }
      const pa = new da("10.1.6");
      class fa {
        constructor() {}
        supports(e) {
          return Gs(e);
        }
        create(e) {
          return new ma(e);
        }
      }
      const ga = (e, t) => t;
      class ma {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || ga);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            i = 0,
            r = null;
          for (; t || n; ) {
            const s = !n || (t && t.currentIndex < _a(n, i, r)) ? t : n,
              o = _a(s, i, r),
              a = s.currentIndex;
            if (s === n) i--, (n = n._nextRemoved);
            else if (((t = t._next), null == s.previousIndex)) i++;
            else {
              r || (r = []);
              const e = o - i,
                t = a - i;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const i = n < r.length ? r[n] : (r[n] = 0),
                    s = i + n;
                  t <= s && s < e && (r[n] = i + 1);
                }
                r[s.previousIndex] = t - e;
              }
            }
            o !== a && e(s, o, a);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !Gs(e)))
            throw new Error(
              `Error trying to diff '${ve(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            i,
            r = this._itHead,
            s = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (n = e[t]),
                (i = this._trackByFn(t, n)),
                null !== r && Object.is(r.trackById, i)
                  ? (s && (r = this._verifyReinsertion(r, n, i, t)),
                    Object.is(r.item, n) || this._addIdentityChange(r, n))
                  : ((r = this._mismatch(r, n, i, t)), (s = !0)),
                (r = r._next);
          } else
            (t = 0),
              (function (e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[qs()]();
                  let i;
                  for (; !(i = n.next()).done; ) t(i.value);
                }
              })(e, (e) => {
                (i = this._trackByFn(t, e)),
                  null !== r && Object.is(r.trackById, i)
                    ? (s && (r = this._verifyReinsertion(r, e, i, t)),
                      Object.is(r.item, e) || this._addIdentityChange(r, e))
                    : ((r = this._mismatch(r, e, i, t)), (s = !0)),
                  (r = r._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(r), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
              e.previousIndex = e.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                e = this._movesHead;
              null !== e;
              e = e._nextMoved
            )
              e.previousIndex = e.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, i) {
          let r;
          return (
            null === e ? (r = this._itTail) : ((r = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._linkedRecords
                ? null
                : this._linkedRecords.get(n, i))
              ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, r, i))
              : null !==
                (e =
                  null === this._unlinkedRecords
                    ? null
                    : this._unlinkedRecords.get(n, null))
              ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, r, i))
              : (e = this._addAfter(new wa(t, n), r, i)),
            e
          );
        }
        _verifyReinsertion(e, t, n, i) {
          let r =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== r
              ? (e = this._reinsertAfter(r, e._prev, i))
              : e.currentIndex != i &&
                ((e.currentIndex = i), this._addToMoves(e, i)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const i = e._prevRemoved,
            r = e._nextRemoved;
          return (
            null === i ? (this._removalsHead = r) : (i._nextRemoved = r),
            null === r ? (this._removalsTail = i) : (r._prevRemoved = i),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const i = null === t ? this._itHead : t._next;
          return (
            (e._next = i),
            (e._prev = t),
            null === i ? (this._itTail = e) : (i._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new ya()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return (
            e.previousIndex === t ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
            e
          );
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new ya()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class wa {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class va {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === t || t <= n.currentIndex) &&
              Object.is(n.trackById, e)
            )
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class ya {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new va()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function _a(e, t, n) {
        const i = e.previousIndex;
        if (null === i) return i;
        let r = 0;
        return n && i < n.length && (r = n[i]), i + t + r;
      }
      class ba {
        constructor() {}
        supports(e) {
          return e instanceof Map || Ys(e);
        }
        create() {
          return new xa();
        }
      }
      class xa {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || Ys(e)))
              throw new Error(
                `Error trying to diff '${ve(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const i = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, i);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const i = n._prev,
              r = n._next;
            return (
              i && (i._next = r),
              r && (r._prev = i),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Ca(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Object.is(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach((n) => t(e[n], n));
        }
      }
      class Ca {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Sa = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (null != n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend IterableDiffers without a parent injector"
                    );
                  return e.create(t, n);
                },
                deps: [[e, new re(), new ne()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (null != t) return t;
              throw new Error(
                `Cannot find a differ supporting object '${e}' of type '${
                  ((n = e), n.name || typeof n)
                }'`
              );
              var n;
            }
          }
          return (
            (e.ɵprov = le({
              token: e,
              providedIn: "root",
              factory: () => new e([new fa()]),
            })),
            e
          );
        })(),
        Ea = (() => {
          class e {
            constructor(e) {
              this.factories = e;
            }
            static create(t, n) {
              if (n) {
                const e = n.factories.slice();
                t = t.concat(e);
              }
              return new e(t);
            }
            static extend(t) {
              return {
                provide: e,
                useFactory: (n) => {
                  if (!n)
                    throw new Error(
                      "Cannot extend KeyValueDiffers without a parent injector"
                    );
                  return e.create(t, n);
                },
                deps: [[e, new re(), new ne()]],
              };
            }
            find(e) {
              const t = this.factories.find((t) => t.supports(e));
              if (t) return t;
              throw new Error(`Cannot find a differ supporting object '${e}'`);
            }
          }
          return (
            (e.ɵprov = le({
              token: e,
              providedIn: "root",
              factory: () => new e([new ba()]),
            })),
            e
          );
        })();
      const Ta = [new ba()],
        ka = new Sa([new fa()]),
        Ia = new Ea(Ta);
      let Aa = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Ra(e, sa)), e;
      })();
      const Ra = function (e, t) {
        return _s(e, t, Xt(), Gt());
      };
      let Ma = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => Da(e, sa)), e;
      })();
      const Da = function (e, t) {
          return bs(e, t, Xt(), Gt());
        },
        Na = {};
      class Oa extends ra {
        constructor(e) {
          super(), (this.ngModule = e);
        }
        resolveComponentFactory(e) {
          const t = mt(e);
          return new Fa(t, this.ngModule);
        }
      }
      function Pa(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      const La = new Pe("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => Hn,
      });
      class Fa extends na {
        constructor(e, t) {
          super(),
            (this.componentDef = e),
            (this.ngModule = t),
            (this.componentType = e.type),
            (this.selector = e.selectors.map(Qi).join(",")),
            (this.ngContentSelectors = e.ngContentSelectors
              ? e.ngContentSelectors
              : []),
            (this.isBoundToModule = !!t);
        }
        get inputs() {
          return Pa(this.componentDef.inputs);
        }
        get outputs() {
          return Pa(this.componentDef.outputs);
        }
        create(e, t, n, i) {
          const r = (i = i || this.ngModule)
              ? (function (e, t) {
                  return {
                    get: (n, i, r) => {
                      const s = e.get(n, Na, r);
                      return s !== Na || i === Na ? s : t.get(n, i, r);
                    },
                  };
                })(e, i.injector)
              : e,
            s = r.get(aa, Nt),
            o = r.get(ha, null),
            a = s.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            u = n
              ? (function (e, t, n) {
                  if (Dt(e)) return e.selectRootElement(t, n === rt.ShadowDom);
                  let i = "string" == typeof t ? e.querySelector(t) : t;
                  return (i.textContent = ""), i;
                })(a, n, this.componentDef.encapsulation)
              : hr(
                  l,
                  s.createRenderer(null, this.componentDef),
                  (function (e) {
                    const t = e.toLowerCase();
                    return "svg" === t
                      ? "http://www.w3.org/2000/svg"
                      : "math" === t
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            c = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: Hn,
              clean: qr,
              playerHandler: null,
              flags: 0,
            },
            d = xr(0, null, null, 1, 0, null, null, null, null, null),
            p = dr(null, d, h, c, null, null, s, a, o, r);
          let f, g;
          pn(p);
          try {
            const e = (function (e, t, n, i, r, s) {
              const o = n[1];
              n[20] = e;
              const a = pr(o, 0, 2, null, null),
                l = (a.mergedAttrs = t.hostAttrs);
              null !== l &&
                (js(a, l, !0),
                null !== e &&
                  (Rn(r, e, l),
                  null !== a.classes && ps(r, e, a.classes),
                  null !== a.styles && ds(r, e, a.styles)));
              const u = i.createRenderer(e, t),
                c = dr(
                  n,
                  br(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  a,
                  i,
                  u,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (Gn(Un(a, n), o, t.type), Mr(o, a), Nr(a, n.length, 1)),
                zr(n, c),
                (n[20] = c)
              );
            })(u, this.componentDef, p, s, a);
            if (u)
              if (n) Rn(a, u, ["ng-version", pa.full]);
              else {
                const { attrs: e, classes: t } = (function (e) {
                  const t = [],
                    n = [];
                  let i = 1,
                    r = 2;
                  for (; i < e.length; ) {
                    let s = e[i];
                    if ("string" == typeof s)
                      2 === r
                        ? "" !== s && t.push(s, e[++i])
                        : 8 === r && n.push(s);
                    else {
                      if (!Wi(r)) break;
                      r = s;
                    }
                    i++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                e && Rn(a, u, e), t && t.length > 0 && ps(a, u, t.join(" "));
              }
            if (((g = Ft(d, 0)), void 0 !== t)) {
              const e = (g.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const i = t[n];
                e.push(null != i ? Array.from(i) : null);
              }
            }
            (f = (function (e, t, n, i, r) {
              const s = n[1],
                o = (function (e, t, n) {
                  const i = Xt();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Rr(e, i, 1),
                    Or(e, t, n));
                  const r = Jn(t, e, t.length - 1, i);
                  Hi(r, t);
                  const s = Lt(i, t);
                  return s && Hi(s, t), r;
                })(s, n, t);
              i.components.push(o),
                (e[8] = o),
                r && r.forEach((e) => e(o, t)),
                t.contentQueries && t.contentQueries(1, o, n.length - 1);
              const a = Xt();
              if (
                s.firstCreatePass &&
                (null !== t.hostBindings || null !== t.hostAttrs)
              ) {
                _n(a.index - 20);
                const e = n[1];
                kr(e, t), Ir(e, n, t.hostVars), Ar(t, o);
              }
              return o;
            })(e, this.componentDef, p, h, [Hs])),
              fr(d, p, null);
          } finally {
            vn();
          }
          return new ja(this.componentType, f, ys(sa, g, p), p, g);
        }
      }
      class ja extends class {} {
        constructor(e, t, n, i, r) {
          super(),
            (this.location = n),
            (this._rootLView = i),
            (this._tNode = r),
            (this.destroyCbs = []),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new gs(i)),
            (this.componentType = e);
        }
        get injector() {
          return new ni(this._tNode, this._rootLView);
        }
        destroy() {
          this.destroyCbs &&
            (this.destroyCbs.forEach((e) => e()),
            (this.destroyCbs = null),
            !this.hostView.destroyed && this.hostView.destroy());
        }
        onDestroy(e) {
          this.destroyCbs && this.destroyCbs.push(e);
        }
      }
      const Ha = void 0;
      var Va = [
        "en",
        [["a", "p"], ["AM", "PM"], Ha],
        [["AM", "PM"], Ha, Ha],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Ha,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Ha,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Ha, "{1} 'at' {0}", Ha],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      let za = {};
      function $a(e) {
        const t = (function (e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Ba(t);
        if (n) return n;
        const i = t.split("-")[0];
        if (((n = Ba(i)), n)) return n;
        if ("en" === i) return Va;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function Ba(e) {
        return (
          e in za ||
            (za[e] =
              ke.ng &&
              ke.ng.common &&
              ke.ng.common.locales &&
              ke.ng.common.locales[e]),
          za[e]
        );
      }
      var Ua = (function (e) {
        return (
          (e[(e.LocaleId = 0)] = "LocaleId"),
          (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (e[(e.DaysFormat = 3)] = "DaysFormat"),
          (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
          (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
          (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
          (e[(e.Eras = 7)] = "Eras"),
          (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (e[(e.WeekendRange = 9)] = "WeekendRange"),
          (e[(e.DateFormat = 10)] = "DateFormat"),
          (e[(e.TimeFormat = 11)] = "TimeFormat"),
          (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
          (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
          (e[(e.NumberFormats = 14)] = "NumberFormats"),
          (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
          (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
          (e[(e.CurrencyName = 17)] = "CurrencyName"),
          (e[(e.Currencies = 18)] = "Currencies"),
          (e[(e.Directionality = 19)] = "Directionality"),
          (e[(e.PluralCase = 20)] = "PluralCase"),
          (e[(e.ExtraData = 21)] = "ExtraData"),
          e
        );
      })({});
      let Wa = "en-US";
      function qa(e) {
        var t, n;
        (n = "Expected localeId to be defined"),
          null == (t = e) &&
            (function (e, t, n, i) {
              throw new Error(
                "ASSERTION ERROR: " + e + ` [Expected=> null != ${t} <=Actual]`
              );
            })(n, t),
          "string" == typeof e && (Wa = e.toLowerCase().replace(/_/g, "-"));
      }
      const Za = new Map();
      class Ga extends Ye {
        constructor(e, t) {
          super(),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new Oa(this));
          const n = vt(e),
            i = e[De] || null;
          i && qa(i),
            (this._bootstrapComponents = Vn(n.bootstrap)),
            (this._r3Injector = Rs(
              e,
              t,
              [
                { provide: Ye, useValue: this },
                { provide: ra, useValue: this.componentFactoryResolver },
              ],
              ve(e)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(e));
        }
        get(e, t = Fs.THROW_IF_NOT_FOUND, n = se.Default) {
          return e === Fs || e === Ye || e === Le
            ? this
            : this._r3Injector.get(e, t, n);
        }
        destroy() {
          const e = this._r3Injector;
          !e.destroyed && e.destroy(),
            this.destroyCbs.forEach((e) => e()),
            (this.destroyCbs = null);
        }
        onDestroy(e) {
          this.destroyCbs.push(e);
        }
      }
      class Ya extends class {} {
        constructor(e) {
          super(),
            (this.moduleType = e),
            null !== vt(e) &&
              (function e(t) {
                if (null !== t.ɵmod.id) {
                  const e = t.ɵmod.id;
                  (function (e, t, n) {
                    if (t && t !== n)
                      throw new Error(
                        `Duplicate module registered for ${e} - ${ve(
                          t
                        )} vs ${ve(t.name)}`
                      );
                  })(e, Za.get(e), t),
                    Za.set(e, t);
                }
                let n = t.ɵmod.imports;
                n instanceof Function && (n = n()), n && n.forEach((t) => e(t));
              })(e);
        }
        create(e) {
          return new Ga(this.moduleType, e);
        }
      }
      function Qa(e, t, n) {
        const i = rn() + e,
          r = Gt();
        return r[i] === Xi
          ? Qs(r, i, n ? t.call(n) : t())
          : (function (e, t) {
              return e[t];
            })(r, i);
      }
      function Xa(e, t, n, i) {
        return Ja(Gt(), rn(), e, t, n, i);
      }
      function Ka(e, t) {
        const n = e[t];
        return n === Xi ? void 0 : n;
      }
      function Ja(e, t, n, i, r, s) {
        const o = t + n;
        return Xs(e, o, r)
          ? Qs(e, o + 1, s ? i.call(s, r) : i(r))
          : Ka(e, o + 1);
      }
      function el(e, t) {
        const n = Yt();
        let i;
        const r = e + 20;
        n.firstCreatePass
          ? ((i = (function (e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const i = t[n];
                  if (e === i.name) return i;
                }
              throw new Error(`The pipe '${e}' could not be found!`);
            })(t, n.pipeRegistry)),
            (n.data[r] = i),
            i.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(r, i.onDestroy))
          : (i = n.data[r]);
        const s = i.factory || (i.factory = wt(i.type)),
          o = Be(ro);
        try {
          const t = $n(!1),
            i = s();
          return (
            $n(t),
            (function (e, t, n, i) {
              const r = n + 20;
              r >= e.data.length &&
                ((e.data[r] = null), (e.blueprint[r] = null)),
                (t[r] = i);
            })(n, Gt(), e, i),
            i
          );
        } finally {
          Be(o);
        }
      }
      function tl(e, t, n, i) {
        const r = Gt(),
          s = jt(r, e);
        return il(
          r,
          nl(r, e)
            ? (function (e, t, n, i, r, s, o) {
                const a = t + n;
                return Ks(e, a, r, s)
                  ? Qs(e, a + 2, o ? i.call(o, r, s) : i(r, s))
                  : Ka(e, a + 2);
              })(r, rn(), t, s.transform, n, i, s)
            : s.transform(n, i)
        );
      }
      function nl(e, t) {
        return e[1].data[t + 20].pure;
      }
      function il(e, t) {
        return Zs.isWrapped(t) && ((t = Zs.unwrap(t)), (e[sn()] = Xi)), t;
      }
      const rl = class extends C {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          let i,
            r = (e) => null,
            s = () => null;
          e && "object" == typeof e
            ? ((i = this.__isAsync
                ? (t) => {
                    setTimeout(() => e.next(t));
                  }
                : (t) => {
                    e.next(t);
                  }),
              e.error &&
                (r = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e.error(t));
                    }
                  : (t) => {
                      e.error(t);
                    }),
              e.complete &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => e.complete());
                    }
                  : () => {
                      e.complete();
                    }))
            : ((i = this.__isAsync
                ? (t) => {
                    setTimeout(() => e(t));
                  }
                : (t) => {
                    e(t);
                  }),
              t &&
                (r = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t(e));
                    }
                  : (e) => {
                      t(e);
                    }),
              n &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const o = super.subscribe(i, r, s);
          return e instanceof h && e.add(o), o;
        }
      };
      function sl() {
        return this._results[qs()]();
      }
      class ol {
        constructor() {
          (this.dirty = !0),
            (this._results = []),
            (this.changes = new rl()),
            (this.length = 0);
          const e = qs(),
            t = ol.prototype;
          t[e] || (t[e] = sl);
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e) {
          (this._results = (function e(t, n) {
            void 0 === n && (n = t);
            for (let i = 0; i < t.length; i++) {
              let r = t[i];
              Array.isArray(r)
                ? (n === t && (n = t.slice(0, i)), e(r, n))
                : n !== t && n.push(r);
            }
            return n;
          })(e)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class al {
        constructor(e) {
          (this.queryList = e), (this.matches = null);
        }
        clone() {
          return new al(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class ll {
        constructor(e = []) {
          this.queries = e;
        }
        createEmbeddedView(e) {
          const t = e.queries;
          if (null !== t) {
            const n =
                null !== e.contentQueries ? e.contentQueries[0] : t.length,
              i = [];
            for (let e = 0; e < n; e++) {
              const n = t.getByIndex(e);
              i.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new ll(i);
          }
          return null;
        }
        insertView(e) {
          this.dirtyQueriesWithMatches(e);
        }
        detachView(e) {
          this.dirtyQueriesWithMatches(e);
        }
        dirtyQueriesWithMatches(e) {
          for (let t = 0; t < this.queries.length; t++)
            null !== xl(e, t).matches && this.queries[t].setDirty();
        }
      }
      class ul {
        constructor(e, t, n, i = null) {
          (this.predicate = e),
            (this.descendants = t),
            (this.isStatic = n),
            (this.read = i);
        }
      }
      class cl {
        constructor(e = []) {
          this.queries = e;
        }
        elementStart(e, t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(e, t);
        }
        elementEnd(e) {
          for (let t = 0; t < this.queries.length; t++)
            this.queries[t].elementEnd(e);
        }
        embeddedTView(e) {
          let t = null;
          for (let n = 0; n < this.length; n++) {
            const i = null !== t ? t.length : 0,
              r = this.getByIndex(n).embeddedTView(e, i);
            r &&
              ((r.indexInDeclarationView = n),
              null !== t ? t.push(r) : (t = [r]));
          }
          return null !== t ? new cl(t) : null;
        }
        template(e, t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(e, t);
        }
        getByIndex(e) {
          return this.queries[e];
        }
        get length() {
          return this.queries.length;
        }
        track(e) {
          this.queries.push(e);
        }
      }
      class hl {
        constructor(e, t = -1) {
          (this.metadata = e),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = t);
        }
        elementStart(e, t) {
          this.isApplyingToNode(t) && this.matchTNode(e, t);
        }
        elementEnd(e) {
          this._declarationNodeIndex === e.index &&
            (this._appliesToNextNode = !1);
        }
        template(e, t) {
          this.elementStart(e, t);
        }
        embeddedTView(e, t) {
          return this.isApplyingToNode(e)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-e.index, t),
              new hl(this.metadata))
            : null;
        }
        isApplyingToNode(e) {
          if (this._appliesToNextNode && !1 === this.metadata.descendants) {
            const t = this._declarationNodeIndex;
            let n = e.parent;
            for (; null !== n && 3 === n.type && n.index !== t; ) n = n.parent;
            return t === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(e, t) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let i = 0; i < n.length; i++) {
              const r = n[i];
              this.matchTNodeWithReadOption(e, t, dl(t, r)),
                this.matchTNodeWithReadOption(e, t, Kn(t, e, r, !1, !1));
            }
          else
            n === Aa
              ? 0 === t.type && this.matchTNodeWithReadOption(e, t, -1)
              : this.matchTNodeWithReadOption(e, t, Kn(t, e, n, !1, !1));
        }
        matchTNodeWithReadOption(e, t, n) {
          if (null !== n) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === sa || i === Ma || (i === Aa && 0 === t.type))
                this.addMatch(t.index, -2);
              else {
                const n = Kn(t, e, i, !1, !1);
                null !== n && this.addMatch(t.index, n);
              }
            else this.addMatch(t.index, n);
          }
        }
        addMatch(e, t) {
          null === this.matches
            ? (this.matches = [e, t])
            : this.matches.push(e, t);
        }
      }
      function dl(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let i = 0; i < n.length; i += 2) if (n[i] === t) return n[i + 1];
        return null;
      }
      function pl(e, t, n, i) {
        return -1 === n
          ? (function (e, t) {
              return 2 === e.type || 3 === e.type
                ? ys(sa, e, t)
                : 0 === e.type
                ? _s(Aa, sa, e, t)
                : null;
            })(t, e)
          : -2 === n
          ? (function (e, t, n) {
              return n === sa
                ? ys(sa, t, e)
                : n === Aa
                ? _s(Aa, sa, t, e)
                : n === Ma
                ? bs(Ma, sa, t, e)
                : void 0;
            })(e, t, i)
          : Jn(e, e[1], n, t);
      }
      function fl(e, t, n, i) {
        const r = t[19].queries[i];
        if (null === r.matches) {
          const i = e.data,
            s = n.matches,
            o = [];
          for (let e = 0; e < s.length; e += 2) {
            const r = s[e];
            o.push(r < 0 ? null : pl(t, i[r], s[e + 1], n.metadata.read));
          }
          r.matches = o;
        }
        return r.matches;
      }
      function gl(e) {
        const t = Gt(),
          n = Yt(),
          i = cn();
        hn(i + 1);
        const r = xl(n, i);
        if (e.dirty && zt(t) === r.metadata.isStatic) {
          if (null === r.matches) e.reset([]);
          else {
            const s = r.crossesNgTemplate
              ? (function e(t, n, i, r) {
                  const s = t.queries.getByIndex(i),
                    o = s.matches;
                  if (null !== o) {
                    const a = fl(t, n, s, i);
                    for (let t = 0; t < o.length; t += 2) {
                      const i = o[t];
                      if (i > 0) r.push(a[t / 2]);
                      else {
                        const s = o[t + 1],
                          a = n[-i];
                        for (let t = 10; t < a.length; t++) {
                          const n = a[t];
                          n[17] === n[3] && e(n[1], n, s, r);
                        }
                        if (null !== a[9]) {
                          const t = a[9];
                          for (let n = 0; n < t.length; n++) {
                            const i = t[n];
                            e(i[1], i, s, r);
                          }
                        }
                      }
                    }
                  }
                  return r;
                })(n, t, i, [])
              : fl(n, t, r, i);
            e.reset(s), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function ml(e, t, n) {
        wl(Yt(), Gt(), e, t, n, !0);
      }
      function wl(e, t, n, i, r, s) {
        e.firstCreatePass &&
          (bl(e, new ul(n, i, s, r), -1), s && (e.staticViewQueries = !0)),
          _l(e, t);
      }
      function vl(e, t, n, i) {
        !(function (e, t, n, i, r, s, o, a) {
          e.firstCreatePass &&
            (bl(e, new ul(n, i, false, r), o.index),
            (function (e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (e.contentQueries.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(e, a)),
            _l(e, t);
        })(Yt(), Gt(), t, n, i, 0, Xt(), e);
      }
      function yl() {
        return (e = Gt()), (t = cn()), e[19].queries[t].queryList;
        var e, t;
      }
      function _l(e, t) {
        const n = new ol();
        Cr(e, t, n, n.destroy),
          null === t[19] && (t[19] = new ll()),
          t[19].queries.push(new al(n));
      }
      function bl(e, t, n) {
        null === e.queries && (e.queries = new cl()),
          e.queries.track(new hl(t, n));
      }
      function xl(e, t) {
        return e.queries.getByIndex(t);
      }
      function Cl(e, t) {
        return _s(Aa, sa, e, t);
      }
      const Sl = new Pe("Application Initializer");
      let El = (() => {
        class e {
          constructor(e) {
            (this.appInits = e),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const e = [],
              t = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const t = this.appInits[n]();
                fo(t) && e.push(t);
              }
            Promise.all(e)
              .then(() => {
                t();
              })
              .catch((e) => {
                this.reject(e);
              }),
              0 === e.length && t(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(Sl, 8));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Tl = new Pe("AppId"),
        kl = {
          provide: Tl,
          useFactory: function () {
            return `${Il()}${Il()}${Il()}`;
          },
          deps: [],
        };
      function Il() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Al = new Pe("Platform Initializer"),
        Rl = new Pe("Platform ID"),
        Ml = new Pe("appBootstrapListener");
      let Dl = (() => {
        class e {
          log(e) {
            console.log(e);
          }
          warn(e) {
            console.warn(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Nl = new Pe("LocaleId"),
        Ol = new Pe("DefaultCurrencyCode");
      class Pl {
        constructor(e, t) {
          (this.ngModuleFactory = e), (this.componentFactories = t);
        }
      }
      const Ll = function (e) {
          return new Ya(e);
        },
        Fl = Ll,
        jl = function (e) {
          return Promise.resolve(Ll(e));
        },
        Hl = function (e) {
          const t = Ll(e),
            n = Vn(vt(e).declarations).reduce((e, t) => {
              const n = mt(t);
              return n && e.push(new Fa(n)), e;
            }, []);
          return new Pl(t, n);
        },
        Vl = Hl,
        zl = function (e) {
          return Promise.resolve(Hl(e));
        };
      let $l = (() => {
        class e {
          constructor() {
            (this.compileModuleSync = Fl),
              (this.compileModuleAsync = jl),
              (this.compileModuleAndAllComponentsSync = Vl),
              (this.compileModuleAndAllComponentsAsync = zl);
          }
          clearCache() {}
          clearCacheFor(e) {}
          getModuleId(e) {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Bl = (() => Promise.resolve(0))();
      function Ul(e) {
        "undefined" == typeof Zone
          ? Bl.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class Wl {
        constructor({
          enableLongStackTrace: e = !1,
          shouldCoalesceEventChangeDetection: t = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new rl(!1)),
            (this.onMicrotaskEmpty = new rl(!1)),
            (this.onStable = new rl(!1)),
            (this.onError = new rl(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = t),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let e = ke.requestAnimationFrame,
                t = ke.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const i = t[Zone.__symbol__("OriginalDelegate")];
                i && (t = i);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function (e) {
              const t =
                !!e.shouldCoalesceEventChangeDetection &&
                e.nativeRequestAnimationFrame &&
                (() => {
                  !(function (e) {
                    -1 === e.lastRequestAnimationFrameId &&
                      ((e.lastRequestAnimationFrameId =
                        e.nativeRequestAnimationFrame.call(ke, () => {
                          e.fakeTopEventTask ||
                            (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                              "fakeTopEventTask",
                              () => {
                                (e.lastRequestAnimationFrameId = -1),
                                  Yl(e),
                                  Gl(e);
                              },
                              void 0,
                              () => {},
                              () => {}
                            )),
                            e.fakeTopEventTask.invoke();
                        })),
                      Yl(e));
                  })(e);
                });
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0, maybeDelayChangeDetection: t },
                onInvokeTask: (n, i, r, s, o, a) => {
                  try {
                    return Ql(e), n.invokeTask(r, s, o, a);
                  } finally {
                    t && "eventTask" === s.type && t(), Xl(e);
                  }
                },
                onInvoke: (t, n, i, r, s, o, a) => {
                  try {
                    return Ql(e), t.invoke(i, r, s, o, a);
                  } finally {
                    Xl(e);
                  }
                },
                onHasTask: (t, n, i, r) => {
                  t.hasTask(i, r),
                    n === i &&
                      ("microTask" == r.change
                        ? ((e._hasPendingMicrotasks = r.microTask),
                          Yl(e),
                          Gl(e))
                        : "macroTask" == r.change &&
                          (e.hasPendingMacrotasks = r.macroTask));
                },
                onHandleError: (t, n, i, r) => (
                  t.handleError(i, r),
                  e.runOutsideAngular(() => e.onError.emit(r)),
                  !1
                ),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!Wl.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (Wl.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, i) {
          const r = this._inner,
            s = r.scheduleEventTask("NgZoneEvent: " + i, e, Zl, ql, ql);
          try {
            return r.runTask(s, t, n);
          } finally {
            r.cancelTask(s);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      function ql() {}
      const Zl = {};
      function Gl(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Yl(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          (e.shouldCoalesceEventChangeDetection &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Ql(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Xl(e) {
        e._nesting--, Gl(e);
      }
      class Kl {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new rl()),
            (this.onMicrotaskEmpty = new rl()),
            (this.onStable = new rl()),
            (this.onError = new rl());
        }
        run(e, t, n) {
          return e.apply(t, n);
        }
        runGuarded(e, t, n) {
          return e.apply(t, n);
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e, t, n, i) {
          return e.apply(t, n);
        }
      }
      let Jl = (() => {
          class e {
            constructor(e) {
              (this._ngZone = e),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                e.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Wl.assertNotInAngularZone(),
                        Ul(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Ul(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let e = this._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (t) =>
                    !t.updateCb ||
                    !t.updateCb(e) ||
                    (clearTimeout(t.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((e) => ({
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data,
                  }))
                : [];
            }
            addCallback(e, t, n) {
              let i = -1;
              t &&
                t > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (e) => e.timeoutId !== i
                  )),
                    e(this._didWork, this.getPendingTasks());
                }, t)),
                this._callbacks.push({ doneCb: e, timeoutId: i, updateCb: n });
            }
            whenStable(e, t, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(e, t, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(e, t, n) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(We(Wl));
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        eu = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), iu.addToWindow(this);
            }
            registerApplication(e, t) {
              this._applications.set(e, t);
            }
            unregisterApplication(e) {
              this._applications.delete(e);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(e) {
              return this._applications.get(e) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(e, t = !0) {
              return iu.findTestabilityInTree(this, e, t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class tu {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let nu,
        iu = new tu();
      const ru = new Pe("AllowMultipleToken");
      function su(e, t, n = []) {
        const i = "Platform: " + t,
          r = new Pe(i);
        return (t = []) => {
          let s = ou();
          if (!s || s.injector.get(ru, !1))
            if (e) e(n.concat(t).concat({ provide: r, useValue: !0 }));
            else {
              const e = n
                .concat(t)
                .concat(
                  { provide: r, useValue: !0 },
                  { provide: Ss, useValue: "platform" }
                );
              !(function (e) {
                if (nu && !nu.destroyed && !nu.injector.get(ru, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                nu = e.get(au);
                const t = e.get(Al, null);
                t && t.forEach((e) => e());
              })(Fs.create({ providers: e, name: i }));
            }
          return (function (e) {
            const t = ou();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(r);
        };
      }
      function ou() {
        return nu && !nu.destroyed ? nu : null;
      }
      let au = (() => {
        class e {
          constructor(e) {
            (this._injector = e),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(e, t) {
            const n = (function (e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new Kl()
                      : ("zone.js" === e ? void 0 : e) ||
                        new Wl({
                          enableLongStackTrace: di(),
                          shouldCoalesceEventChangeDetection: t,
                        })),
                  n
                );
              })(t ? t.ngZone : void 0, (t && t.ngZoneEventCoalescing) || !1),
              i = [{ provide: Wl, useValue: n }];
            return n.run(() => {
              const t = Fs.create({
                  providers: i,
                  parent: this.injector,
                  name: e.moduleType.name,
                }),
                r = e.create(t),
                s = r.injector.get(oi, null);
              if (!s)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                r.onDestroy(() => cu(this._modules, r)),
                n.runOutsideAngular(() =>
                  n.onError.subscribe({
                    next: (e) => {
                      s.handleError(e);
                    },
                  })
                ),
                (function (e, t, n) {
                  try {
                    const i = n();
                    return fo(i)
                      ? i.catch((n) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(n)), n)
                          );
                        })
                      : i;
                  } catch (i) {
                    throw (t.runOutsideAngular(() => e.handleError(i)), i);
                  }
                })(s, n, () => {
                  const e = r.injector.get(El);
                  return (
                    e.runInitializers(),
                    e.donePromise.then(
                      () => (
                        qa(r.injector.get(Nl, "en-US") || "en-US"),
                        this._moduleDoBootstrap(r),
                        r
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(e, t = []) {
            const n = lu({}, t);
            return (function (e, t, n) {
              const i = new Ya(n);
              return Promise.resolve(i);
            })(0, 0, e).then((e) => this.bootstrapModuleFactory(e, n));
          }
          _moduleDoBootstrap(e) {
            const t = e.injector.get(uu);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach((e) => t.bootstrap(e));
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${ve(
                    e.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
          }
          onDestroy(e) {
            this._destroyListeners.push(e);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((e) => e.destroy()),
              this._destroyListeners.forEach((e) => e()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(Fs));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function lu(e, t) {
        return Array.isArray(t)
          ? t.reduce(lu, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let uu = (() => {
        class e {
          constructor(e, t, n, i, r, s) {
            (this._zone = e),
              (this._console = t),
              (this._injector = n),
              (this._exceptionHandler = i),
              (this._componentFactoryResolver = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = di()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              });
            const o = new v((e) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              a = new v((e) => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    Wl.assertNotInAngularZone(),
                      Ul(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  Wl.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = W(
              o,
              a.pipe((e) => {
                return q()(
                  ((t = K),
                  function (e) {
                    let n;
                    n =
                      "function" == typeof t
                        ? t
                        : function () {
                            return t;
                          };
                    const i = Object.create(e, Q);
                    return (i.source = e), (i.subjectFactory = n), i;
                  })(e)
                );
                var t;
              })
            );
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              e instanceof na
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const i = n.isBoundToModule ? void 0 : this._injector.get(Ye),
              r = n.create(Fs.NULL, [], t || n.selector, i);
            r.onDestroy(() => {
              this._unloadComponent(r);
            });
            const s = r.injector.get(Jl, null);
            return (
              s &&
                r.injector
                  .get(eu)
                  .registerApplication(r.location.nativeElement, s),
              this._loadComponent(r),
              di() &&
                this._console.log(
                  "Angular is running in development mode. Call enableProdMode() to enable production mode."
                ),
              r
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
              if (this._enforceNoNewChanges)
                for (let e of this._views) e.checkNoChanges();
            } catch (e) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(e)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            cu(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Ml, [])
                .concat(this._bootstrapListeners)
                .forEach((t) => t(e));
          }
          _unloadComponent(e) {
            this.detachView(e.hostView), cu(this.components, e);
          }
          ngOnDestroy() {
            this._views.slice().forEach((e) => e.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(Wl), We(Dl), We(Fs), We(oi), We(ra), We(El));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function cu(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      const hu = su(null, "core", [
          { provide: Rl, useValue: "unknown" },
          { provide: au, deps: [Fs] },
          { provide: eu, deps: [] },
          { provide: Dl, deps: [] },
        ]),
        du = [
          { provide: uu, useClass: uu, deps: [Wl, Dl, Fs, oi, ra, El] },
          {
            provide: La,
            deps: [Wl],
            useFactory: function (e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (e) {
                  t.push(e);
                }
              );
            },
          },
          { provide: El, useClass: El, deps: [[new ne(), Sl]] },
          { provide: $l, useClass: $l, deps: [] },
          kl,
          {
            provide: Sa,
            useFactory: function () {
              return ka;
            },
            deps: [],
          },
          {
            provide: Ea,
            useFactory: function () {
              return Ia;
            },
            deps: [],
          },
          {
            provide: Nl,
            useFactory: function (e) {
              return (
                qa(
                  (e =
                    e ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                e
              );
            },
            deps: [[new te(Nl), new ne(), new re()]],
          },
          { provide: Ol, useValue: "USD" },
        ];
      let pu = (() => {
        class e {
          constructor(e) {}
        }
        return (
          (e.ɵmod = dt({ type: e })),
          (e.ɵinj = ue({
            factory: function (t) {
              return new (t || e)(We(uu));
            },
            providers: du,
          })),
          e
        );
      })();
      n("QFtD");
      let fu = null;
      function gu() {
        return fu;
      }
      const mu = new Pe("DocumentToken");
      var wu = (function (e) {
          return (
            (e[(e.Decimal = 0)] = "Decimal"),
            (e[(e.Percent = 1)] = "Percent"),
            (e[(e.Currency = 2)] = "Currency"),
            (e[(e.Scientific = 3)] = "Scientific"),
            e
          );
        })({}),
        vu = (function (e) {
          return (
            (e[(e.Zero = 0)] = "Zero"),
            (e[(e.One = 1)] = "One"),
            (e[(e.Two = 2)] = "Two"),
            (e[(e.Few = 3)] = "Few"),
            (e[(e.Many = 4)] = "Many"),
            (e[(e.Other = 5)] = "Other"),
            e
          );
        })({}),
        yu = (function (e) {
          return (
            (e[(e.Format = 0)] = "Format"),
            (e[(e.Standalone = 1)] = "Standalone"),
            e
          );
        })({}),
        _u = (function (e) {
          return (
            (e[(e.Narrow = 0)] = "Narrow"),
            (e[(e.Abbreviated = 1)] = "Abbreviated"),
            (e[(e.Wide = 2)] = "Wide"),
            (e[(e.Short = 3)] = "Short"),
            e
          );
        })({}),
        bu = (function (e) {
          return (
            (e[(e.Short = 0)] = "Short"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Long = 2)] = "Long"),
            (e[(e.Full = 3)] = "Full"),
            e
          );
        })({}),
        xu = (function (e) {
          return (
            (e[(e.Decimal = 0)] = "Decimal"),
            (e[(e.Group = 1)] = "Group"),
            (e[(e.List = 2)] = "List"),
            (e[(e.PercentSign = 3)] = "PercentSign"),
            (e[(e.PlusSign = 4)] = "PlusSign"),
            (e[(e.MinusSign = 5)] = "MinusSign"),
            (e[(e.Exponential = 6)] = "Exponential"),
            (e[(e.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
            (e[(e.PerMille = 8)] = "PerMille"),
            (e[(e[1 / 0] = 9)] = "Infinity"),
            (e[(e.NaN = 10)] = "NaN"),
            (e[(e.TimeSeparator = 11)] = "TimeSeparator"),
            (e[(e.CurrencyDecimal = 12)] = "CurrencyDecimal"),
            (e[(e.CurrencyGroup = 13)] = "CurrencyGroup"),
            e
          );
        })({});
      function Cu(e, t) {
        return Iu($a(e)[Ua.DateFormat], t);
      }
      function Su(e, t) {
        return Iu($a(e)[Ua.TimeFormat], t);
      }
      function Eu(e, t) {
        return Iu($a(e)[Ua.DateTimeFormat], t);
      }
      function Tu(e, t) {
        const n = $a(e),
          i = n[Ua.NumberSymbols][t];
        if (void 0 === i) {
          if (t === xu.CurrencyDecimal) return n[Ua.NumberSymbols][xu.Decimal];
          if (t === xu.CurrencyGroup) return n[Ua.NumberSymbols][xu.Group];
        }
        return i;
      }
      function ku(e) {
        if (!e[Ua.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${
              e[Ua.LocaleId]
            }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
          );
      }
      function Iu(e, t) {
        for (let n = t; n > -1; n--) if (void 0 !== e[n]) return e[n];
        throw new Error("Locale data API: locale data undefined");
      }
      function Au(e) {
        const [t, n] = e.split(":");
        return { hours: +t, minutes: +n };
      }
      const Ru =
          /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        Mu = {},
        Du =
          /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      var Nu = (function (e) {
          return (
            (e[(e.Short = 0)] = "Short"),
            (e[(e.ShortGMT = 1)] = "ShortGMT"),
            (e[(e.Long = 2)] = "Long"),
            (e[(e.Extended = 3)] = "Extended"),
            e
          );
        })({}),
        Ou = (function (e) {
          return (
            (e[(e.FullYear = 0)] = "FullYear"),
            (e[(e.Month = 1)] = "Month"),
            (e[(e.Date = 2)] = "Date"),
            (e[(e.Hours = 3)] = "Hours"),
            (e[(e.Minutes = 4)] = "Minutes"),
            (e[(e.Seconds = 5)] = "Seconds"),
            (e[(e.FractionalSeconds = 6)] = "FractionalSeconds"),
            (e[(e.Day = 7)] = "Day"),
            e
          );
        })({}),
        Pu = (function (e) {
          return (
            (e[(e.DayPeriods = 0)] = "DayPeriods"),
            (e[(e.Days = 1)] = "Days"),
            (e[(e.Months = 2)] = "Months"),
            (e[(e.Eras = 3)] = "Eras"),
            e
          );
        })({});
      function Lu(e, t) {
        return (
          t &&
            (e = e.replace(/\{([^}]+)}/g, function (e, n) {
              return null != t && n in t ? t[n] : e;
            })),
          e
        );
      }
      function Fu(e, t, n = "-", i, r) {
        let s = "";
        (e < 0 || (r && e <= 0)) && (r ? (e = 1 - e) : ((e = -e), (s = n)));
        let o = String(e);
        for (; o.length < t; ) o = "0" + o;
        return i && (o = o.substr(o.length - t)), s + o;
      }
      function ju(e, t, n = 0, i = !1, r = !1) {
        return function (s, o) {
          let a = (function (e, t) {
            switch (e) {
              case Ou.FullYear:
                return t.getFullYear();
              case Ou.Month:
                return t.getMonth();
              case Ou.Date:
                return t.getDate();
              case Ou.Hours:
                return t.getHours();
              case Ou.Minutes:
                return t.getMinutes();
              case Ou.Seconds:
                return t.getSeconds();
              case Ou.FractionalSeconds:
                return t.getMilliseconds();
              case Ou.Day:
                return t.getDay();
              default:
                throw new Error(`Unknown DateType value "${e}".`);
            }
          })(e, s);
          if (((n > 0 || a > -n) && (a += n), e === Ou.Hours))
            0 === a && -12 === n && (a = 12);
          else if (e === Ou.FractionalSeconds)
            return (l = t), Fu(a, 3).substr(0, l);
          var l;
          const u = Tu(o, xu.MinusSign);
          return Fu(a, t, u, i, r);
        };
      }
      function Hu(e, t, n = yu.Format, i = !1) {
        return function (r, s) {
          return (function (e, t, n, i, r, s) {
            switch (n) {
              case Pu.Months:
                return (function (e, t, n) {
                  const i = $a(e),
                    r = Iu([i[Ua.MonthsFormat], i[Ua.MonthsStandalone]], t);
                  return Iu(r, n);
                })(t, r, i)[e.getMonth()];
              case Pu.Days:
                return (function (e, t, n) {
                  const i = $a(e),
                    r = Iu([i[Ua.DaysFormat], i[Ua.DaysStandalone]], t);
                  return Iu(r, n);
                })(t, r, i)[e.getDay()];
              case Pu.DayPeriods:
                const o = e.getHours(),
                  a = e.getMinutes();
                if (s) {
                  const e = (function (e) {
                      const t = $a(e);
                      return (
                        ku(t),
                        (t[Ua.ExtraData][2] || []).map((e) =>
                          "string" == typeof e ? Au(e) : [Au(e[0]), Au(e[1])]
                        )
                      );
                    })(t),
                    n = (function (e, t, n) {
                      const i = $a(e);
                      ku(i);
                      const r =
                        Iu([i[Ua.ExtraData][0], i[Ua.ExtraData][1]], t) || [];
                      return Iu(r, n) || [];
                    })(t, r, i),
                    s = e.findIndex((e) => {
                      if (Array.isArray(e)) {
                        const [t, n] = e,
                          i = o >= t.hours && a >= t.minutes,
                          r = o < n.hours || (o === n.hours && a < n.minutes);
                        if (t.hours < n.hours) {
                          if (i && r) return !0;
                        } else if (i || r) return !0;
                      } else if (e.hours === o && e.minutes === a) return !0;
                      return !1;
                    });
                  if (-1 !== s) return n[s];
                }
                return (function (e, t, n) {
                  const i = $a(e),
                    r = Iu(
                      [i[Ua.DayPeriodsFormat], i[Ua.DayPeriodsStandalone]],
                      t
                    );
                  return Iu(r, n);
                })(t, r, i)[o < 12 ? 0 : 1];
              case Pu.Eras:
                return (function (e, t) {
                  return Iu($a(e)[Ua.Eras], t);
                })(t, i)[e.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error("unexpected translation type " + n);
            }
          })(r, s, e, t, n, i);
        };
      }
      function Vu(e) {
        return function (t, n, i) {
          const r = -1 * i,
            s = Tu(n, xu.MinusSign),
            o = r > 0 ? Math.floor(r / 60) : Math.ceil(r / 60);
          switch (e) {
            case Nu.Short:
              return (
                (r >= 0 ? "+" : "") + Fu(o, 2, s) + Fu(Math.abs(r % 60), 2, s)
              );
            case Nu.ShortGMT:
              return "GMT" + (r >= 0 ? "+" : "") + Fu(o, 1, s);
            case Nu.Long:
              return (
                "GMT" +
                (r >= 0 ? "+" : "") +
                Fu(o, 2, s) +
                ":" +
                Fu(Math.abs(r % 60), 2, s)
              );
            case Nu.Extended:
              return 0 === i
                ? "Z"
                : (r >= 0 ? "+" : "") +
                    Fu(o, 2, s) +
                    ":" +
                    Fu(Math.abs(r % 60), 2, s);
            default:
              throw new Error(`Unknown zone width "${e}"`);
          }
        };
      }
      function zu(e, t = !1) {
        return function (n, i) {
          let r;
          if (t) {
            const e = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
              t = n.getDate();
            r = 1 + Math.floor((t + e) / 7);
          } else {
            const e =
                ((s = n),
                new Date(
                  s.getFullYear(),
                  s.getMonth(),
                  s.getDate() + (4 - s.getDay())
                )),
              t = (function (e) {
                const t = new Date(e, 0, 1).getDay();
                return new Date(e, 0, 1 + (t <= 4 ? 4 : 11) - t);
              })(e.getFullYear()),
              i = e.getTime() - t.getTime();
            r = 1 + Math.round(i / 6048e5);
          }
          var s;
          return Fu(r, e, Tu(i, xu.MinusSign));
        };
      }
      const $u = {};
      function Bu(e, t) {
        e = e.replace(/:/g, "");
        const n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
        return isNaN(n) ? t : n;
      }
      function Uu(e) {
        return e instanceof Date && !isNaN(e.valueOf());
      }
      const Wu = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function qu(e) {
        const t = parseInt(e);
        if (isNaN(t))
          throw new Error("Invalid integer literal when parsing " + e);
        return t;
      }
      class Zu {}
      let Gu = (() => {
        class e extends Zu {
          constructor(e) {
            super(), (this.locale = e);
          }
          getPluralCategory(e, t) {
            switch (
              (function (e) {
                return $a(e)[Ua.PluralCase];
              })(t || this.locale)(e)
            ) {
              case vu.Zero:
                return "zero";
              case vu.One:
                return "one";
              case vu.Two:
                return "two";
              case vu.Few:
                return "few";
              case vu.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(Nl));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Yu(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(";")) {
          const e = n.indexOf("="),
            [i, r] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
          if (i.trim() === t) return decodeURIComponent(r);
        }
        return null;
      }
      let Qu = (() => {
        class e {
          constructor(e, t, n, i) {
            (this._iterableDiffers = e),
              (this._keyValueDiffers = t),
              (this._ngEl = n),
              (this._renderer = i),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(e) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof e ? e.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(e) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof e ? e.split(/\s+/) : e),
              this._rawClass &&
                (Gs(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const e = this._iterableDiffer.diff(this._rawClass);
              e && this._applyIterableChanges(e);
            } else if (this._keyValueDiffer) {
              const e = this._keyValueDiffer.diff(this._rawClass);
              e && this._applyKeyValueChanges(e);
            }
          }
          _applyKeyValueChanges(e) {
            e.forEachAddedItem((e) => this._toggleClass(e.key, e.currentValue)),
              e.forEachChangedItem((e) =>
                this._toggleClass(e.key, e.currentValue)
              ),
              e.forEachRemovedItem((e) => {
                e.previousValue && this._toggleClass(e.key, !1);
              });
          }
          _applyIterableChanges(e) {
            e.forEachAddedItem((e) => {
              if ("string" != typeof e.item)
                throw new Error(
                  "NgClass can only toggle CSS classes expressed as strings, got " +
                    ve(e.item)
                );
              this._toggleClass(e.item, !0);
            }),
              e.forEachRemovedItem((e) => this._toggleClass(e.item, !1));
          }
          _applyClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach((e) => this._toggleClass(e, !0))
                : Object.keys(e).forEach((t) => this._toggleClass(t, !!e[t])));
          }
          _removeClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach((e) => this._toggleClass(e, !1))
                : Object.keys(e).forEach((e) => this._toggleClass(e, !1)));
          }
          _toggleClass(e, t) {
            (e = e.trim()) &&
              e.split(/\s+/g).forEach((e) => {
                t
                  ? this._renderer.addClass(this._ngEl.nativeElement, e)
                  : this._renderer.removeClass(this._ngEl.nativeElement, e);
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(ro(Sa), ro(Ea), ro(sa), ro(ua));
          }),
          (e.ɵdir = ft({
            type: e,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          e
        );
      })();
      class Xu {
        constructor(e, t, n, i) {
          (this.$implicit = e),
            (this.ngForOf = t),
            (this.index = n),
            (this.count = i);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Ku = (() => {
        class e {
          constructor(e, t, n) {
            (this._viewContainer = e),
              (this._template = t),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(e) {
            (this._ngForOf = e), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(e) {
            di() &&
              null != e &&
              "function" != typeof e &&
              console &&
              console.warn &&
              console.warn(
                `trackBy must be a function, but received ${JSON.stringify(
                  e
                )}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`
              ),
              (this._trackByFn = e);
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(e) {
            e && (this._template = e);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (t) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((e = n), e.name || typeof e)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var e;
            if (this._differ) {
              const e = this._differ.diff(this._ngForOf);
              e && this._applyChanges(e);
            }
          }
          _applyChanges(e) {
            const t = [];
            e.forEachOperation((e, n, i) => {
              if (null == e.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Xu(null, this._ngForOf, -1, -1),
                    null === i ? void 0 : i
                  ),
                  r = new Ju(e, n);
                t.push(r);
              } else if (null == i)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const r = this._viewContainer.get(n);
                this._viewContainer.move(r, i);
                const s = new Ju(e, r);
                t.push(s);
              }
            });
            for (let n = 0; n < t.length; n++)
              this._perViewChange(t[n].view, t[n].record);
            for (let n = 0, i = this._viewContainer.length; n < i; n++) {
              const e = this._viewContainer.get(n);
              (e.context.index = n),
                (e.context.count = i),
                (e.context.ngForOf = this._ngForOf);
            }
            e.forEachIdentityChange((e) => {
              this._viewContainer.get(e.currentIndex).context.$implicit =
                e.item;
            });
          }
          _perViewChange(e, t) {
            e.context.$implicit = t.item;
          }
          static ngTemplateContextGuard(e, t) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(ro(Ma), ro(Aa), ro(Sa));
          }),
          (e.ɵdir = ft({
            type: e,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          e
        );
      })();
      class Ju {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      let ec = (() => {
        class e {
          constructor(e, t) {
            (this._viewContainer = e),
              (this._context = new tc()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = t);
          }
          set ngIf(e) {
            (this._context.$implicit = this._context.ngIf = e),
              this._updateView();
          }
          set ngIfThen(e) {
            nc("ngIfThen", e),
              (this._thenTemplateRef = e),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(e) {
            nc("ngIfElse", e),
              (this._elseTemplateRef = e),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(e, t) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(ro(Ma), ro(Aa));
          }),
          (e.ɵdir = ft({
            type: e,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          e
        );
      })();
      class tc {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function nc(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${ve(t)}'.`
          );
      }
      function ic(e, t) {
        return Error(`InvalidPipeArgument: '${t}' for pipe '${ve(e)}'`);
      }
      let rc = (() => {
          class e {
            constructor(e) {
              this.locale = e;
            }
            transform(t, n = "mediumDate", i, r) {
              if (null == t || "" === t || t != t) return null;
              try {
                return (function (e, t, n, i) {
                  let r = (function (e) {
                    if (Uu(e)) return e;
                    if ("number" == typeof e && !isNaN(e)) return new Date(e);
                    if ("string" == typeof e) {
                      e = e.trim();
                      const t = parseFloat(e);
                      if (!isNaN(e - t)) return new Date(t);
                      if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
                        const [t, n, i] = e.split("-").map((e) => +e);
                        return new Date(t, n - 1, i);
                      }
                      let n;
                      if ((n = e.match(Ru)))
                        return (function (e) {
                          const t = new Date(0);
                          let n = 0,
                            i = 0;
                          const r = e[8] ? t.setUTCFullYear : t.setFullYear,
                            s = e[8] ? t.setUTCHours : t.setHours;
                          e[9] &&
                            ((n = Number(e[9] + e[10])),
                            (i = Number(e[9] + e[11]))),
                            r.call(
                              t,
                              Number(e[1]),
                              Number(e[2]) - 1,
                              Number(e[3])
                            );
                          const o = Number(e[4] || 0) - n,
                            a = Number(e[5] || 0) - i,
                            l = Number(e[6] || 0),
                            u = Math.round(
                              1e3 * parseFloat("0." + (e[7] || 0))
                            );
                          return s.call(t, o, a, l, u), t;
                        })(n);
                    }
                    const t = new Date(e);
                    if (!Uu(t))
                      throw new Error(`Unable to convert "${e}" into a date`);
                    return t;
                  })(e);
                  t =
                    (function e(t, n) {
                      const i = (function (e) {
                        return $a(e)[Ua.LocaleId];
                      })(t);
                      if (((Mu[i] = Mu[i] || {}), Mu[i][n])) return Mu[i][n];
                      let r = "";
                      switch (n) {
                        case "shortDate":
                          r = Cu(t, bu.Short);
                          break;
                        case "mediumDate":
                          r = Cu(t, bu.Medium);
                          break;
                        case "longDate":
                          r = Cu(t, bu.Long);
                          break;
                        case "fullDate":
                          r = Cu(t, bu.Full);
                          break;
                        case "shortTime":
                          r = Su(t, bu.Short);
                          break;
                        case "mediumTime":
                          r = Su(t, bu.Medium);
                          break;
                        case "longTime":
                          r = Su(t, bu.Long);
                          break;
                        case "fullTime":
                          r = Su(t, bu.Full);
                          break;
                        case "short":
                          const n = e(t, "shortTime"),
                            i = e(t, "shortDate");
                          r = Lu(Eu(t, bu.Short), [n, i]);
                          break;
                        case "medium":
                          const s = e(t, "mediumTime"),
                            o = e(t, "mediumDate");
                          r = Lu(Eu(t, bu.Medium), [s, o]);
                          break;
                        case "long":
                          const a = e(t, "longTime"),
                            l = e(t, "longDate");
                          r = Lu(Eu(t, bu.Long), [a, l]);
                          break;
                        case "full":
                          const u = e(t, "fullTime"),
                            c = e(t, "fullDate");
                          r = Lu(Eu(t, bu.Full), [u, c]);
                      }
                      return r && (Mu[i][n] = r), r;
                    })(n, t) || t;
                  let s,
                    o = [];
                  for (; t; ) {
                    if (((s = Du.exec(t)), !s)) {
                      o.push(t);
                      break;
                    }
                    {
                      o = o.concat(s.slice(1));
                      const e = o.pop();
                      if (!e) break;
                      t = e;
                    }
                  }
                  let a = r.getTimezoneOffset();
                  i &&
                    ((a = Bu(i, a)),
                    (r = (function (e, t, n) {
                      const i = e.getTimezoneOffset();
                      return (function (e, t) {
                        return (
                          (e = new Date(e.getTime())).setMinutes(
                            e.getMinutes() + t
                          ),
                          e
                        );
                      })(e, -1 * (Bu(t, i) - i));
                    })(r, i)));
                  let l = "";
                  return (
                    o.forEach((e) => {
                      const t = (function (e) {
                        if ($u[e]) return $u[e];
                        let t;
                        switch (e) {
                          case "G":
                          case "GG":
                          case "GGG":
                            t = Hu(Pu.Eras, _u.Abbreviated);
                            break;
                          case "GGGG":
                            t = Hu(Pu.Eras, _u.Wide);
                            break;
                          case "GGGGG":
                            t = Hu(Pu.Eras, _u.Narrow);
                            break;
                          case "y":
                            t = ju(Ou.FullYear, 1, 0, !1, !0);
                            break;
                          case "yy":
                            t = ju(Ou.FullYear, 2, 0, !0, !0);
                            break;
                          case "yyy":
                            t = ju(Ou.FullYear, 3, 0, !1, !0);
                            break;
                          case "yyyy":
                            t = ju(Ou.FullYear, 4, 0, !1, !0);
                            break;
                          case "M":
                          case "L":
                            t = ju(Ou.Month, 1, 1);
                            break;
                          case "MM":
                          case "LL":
                            t = ju(Ou.Month, 2, 1);
                            break;
                          case "MMM":
                            t = Hu(Pu.Months, _u.Abbreviated);
                            break;
                          case "MMMM":
                            t = Hu(Pu.Months, _u.Wide);
                            break;
                          case "MMMMM":
                            t = Hu(Pu.Months, _u.Narrow);
                            break;
                          case "LLL":
                            t = Hu(Pu.Months, _u.Abbreviated, yu.Standalone);
                            break;
                          case "LLLL":
                            t = Hu(Pu.Months, _u.Wide, yu.Standalone);
                            break;
                          case "LLLLL":
                            t = Hu(Pu.Months, _u.Narrow, yu.Standalone);
                            break;
                          case "w":
                            t = zu(1);
                            break;
                          case "ww":
                            t = zu(2);
                            break;
                          case "W":
                            t = zu(1, !0);
                            break;
                          case "d":
                            t = ju(Ou.Date, 1);
                            break;
                          case "dd":
                            t = ju(Ou.Date, 2);
                            break;
                          case "E":
                          case "EE":
                          case "EEE":
                            t = Hu(Pu.Days, _u.Abbreviated);
                            break;
                          case "EEEE":
                            t = Hu(Pu.Days, _u.Wide);
                            break;
                          case "EEEEE":
                            t = Hu(Pu.Days, _u.Narrow);
                            break;
                          case "EEEEEE":
                            t = Hu(Pu.Days, _u.Short);
                            break;
                          case "a":
                          case "aa":
                          case "aaa":
                            t = Hu(Pu.DayPeriods, _u.Abbreviated);
                            break;
                          case "aaaa":
                            t = Hu(Pu.DayPeriods, _u.Wide);
                            break;
                          case "aaaaa":
                            t = Hu(Pu.DayPeriods, _u.Narrow);
                            break;
                          case "b":
                          case "bb":
                          case "bbb":
                            t = Hu(
                              Pu.DayPeriods,
                              _u.Abbreviated,
                              yu.Standalone,
                              !0
                            );
                            break;
                          case "bbbb":
                            t = Hu(Pu.DayPeriods, _u.Wide, yu.Standalone, !0);
                            break;
                          case "bbbbb":
                            t = Hu(Pu.DayPeriods, _u.Narrow, yu.Standalone, !0);
                            break;
                          case "B":
                          case "BB":
                          case "BBB":
                            t = Hu(
                              Pu.DayPeriods,
                              _u.Abbreviated,
                              yu.Format,
                              !0
                            );
                            break;
                          case "BBBB":
                            t = Hu(Pu.DayPeriods, _u.Wide, yu.Format, !0);
                            break;
                          case "BBBBB":
                            t = Hu(Pu.DayPeriods, _u.Narrow, yu.Format, !0);
                            break;
                          case "h":
                            t = ju(Ou.Hours, 1, -12);
                            break;
                          case "hh":
                            t = ju(Ou.Hours, 2, -12);
                            break;
                          case "H":
                            t = ju(Ou.Hours, 1);
                            break;
                          case "HH":
                            t = ju(Ou.Hours, 2);
                            break;
                          case "m":
                            t = ju(Ou.Minutes, 1);
                            break;
                          case "mm":
                            t = ju(Ou.Minutes, 2);
                            break;
                          case "s":
                            t = ju(Ou.Seconds, 1);
                            break;
                          case "ss":
                            t = ju(Ou.Seconds, 2);
                            break;
                          case "S":
                            t = ju(Ou.FractionalSeconds, 1);
                            break;
                          case "SS":
                            t = ju(Ou.FractionalSeconds, 2);
                            break;
                          case "SSS":
                            t = ju(Ou.FractionalSeconds, 3);
                            break;
                          case "Z":
                          case "ZZ":
                          case "ZZZ":
                            t = Vu(Nu.Short);
                            break;
                          case "ZZZZZ":
                            t = Vu(Nu.Extended);
                            break;
                          case "O":
                          case "OO":
                          case "OOO":
                          case "z":
                          case "zz":
                          case "zzz":
                            t = Vu(Nu.ShortGMT);
                            break;
                          case "OOOO":
                          case "ZZZZ":
                          case "zzzz":
                            t = Vu(Nu.Long);
                            break;
                          default:
                            return null;
                        }
                        return ($u[e] = t), t;
                      })(e);
                      l += t
                        ? t(r, n, a)
                        : "''" === e
                        ? "'"
                        : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
                    }),
                    l
                  );
                })(t, n, r || this.locale, i);
              } catch (s) {
                throw ic(e, s.message);
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(ro(Nl));
            }),
            (e.ɵpipe = gt({ name: "date", type: e, pure: !0 })),
            e
          );
        })(),
        sc = (() => {
          class e {
            constructor(e) {
              this._locale = e;
            }
            transform(t, n, i) {
              if (
                (function (e) {
                  return null == e || "" === e || e != e;
                })(t)
              )
                return null;
              i = i || this._locale;
              try {
                return (function (e, t, n) {
                  return (function (e, t, n, i, r, s, o = !1) {
                    let a = "",
                      l = !1;
                    if (isFinite(e)) {
                      let u = (function (e) {
                        let t,
                          n,
                          i,
                          r,
                          s,
                          o = Math.abs(e) + "",
                          a = 0;
                        for (
                          (n = o.indexOf(".")) > -1 && (o = o.replace(".", "")),
                            (i = o.search(/e/i)) > 0
                              ? (n < 0 && (n = i),
                                (n += +o.slice(i + 1)),
                                (o = o.substring(0, i)))
                              : n < 0 && (n = o.length),
                            i = 0;
                          "0" === o.charAt(i);
                          i++
                        );
                        if (i === (s = o.length)) (t = [0]), (n = 1);
                        else {
                          for (s--; "0" === o.charAt(s); ) s--;
                          for (n -= i, t = [], r = 0; i <= s; i++, r++)
                            t[r] = Number(o.charAt(i));
                        }
                        return (
                          n > 22 &&
                            ((t = t.splice(0, 21)), (a = n - 1), (n = 1)),
                          { digits: t, exponent: a, integerLen: n }
                        );
                      })(e);
                      o &&
                        (u = (function (e) {
                          if (0 === e.digits[0]) return e;
                          const t = e.digits.length - e.integerLen;
                          return (
                            e.exponent
                              ? (e.exponent += 2)
                              : (0 === t
                                  ? e.digits.push(0, 0)
                                  : 1 === t && e.digits.push(0),
                                (e.integerLen += 2)),
                            e
                          );
                        })(u));
                      let c = t.minInt,
                        h = t.minFrac,
                        d = t.maxFrac;
                      if (s) {
                        const e = s.match(Wu);
                        if (null === e)
                          throw new Error(s + " is not a valid digit info");
                        const t = e[1],
                          n = e[3],
                          i = e[5];
                        null != t && (c = qu(t)),
                          null != n && (h = qu(n)),
                          null != i
                            ? (d = qu(i))
                            : null != n && h > d && (d = h);
                      }
                      !(function (e, t, n) {
                        if (t > n)
                          throw new Error(
                            `The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`
                          );
                        let i = e.digits,
                          r = i.length - e.integerLen;
                        const s = Math.min(Math.max(t, r), n);
                        let o = s + e.integerLen,
                          a = i[o];
                        if (o > 0) {
                          i.splice(Math.max(e.integerLen, o));
                          for (let e = o; e < i.length; e++) i[e] = 0;
                        } else {
                          (r = Math.max(0, r)),
                            (e.integerLen = 1),
                            (i.length = Math.max(1, (o = s + 1))),
                            (i[0] = 0);
                          for (let e = 1; e < o; e++) i[e] = 0;
                        }
                        if (a >= 5)
                          if (o - 1 < 0) {
                            for (let t = 0; t > o; t--)
                              i.unshift(0), e.integerLen++;
                            i.unshift(1), e.integerLen++;
                          } else i[o - 1]++;
                        for (; r < Math.max(0, s); r++) i.push(0);
                        let l = 0 !== s;
                        const u = t + e.integerLen,
                          c = i.reduceRight(function (e, t, n, i) {
                            return (
                              (i[n] = (t += e) < 10 ? t : t - 10),
                              l && (0 === i[n] && n >= u ? i.pop() : (l = !1)),
                              t >= 10 ? 1 : 0
                            );
                          }, 0);
                        c && (i.unshift(c), e.integerLen++);
                      })(u, h, d);
                      let p = u.digits,
                        f = u.integerLen;
                      const g = u.exponent;
                      let m = [];
                      for (l = p.every((e) => !e); f < c; f++) p.unshift(0);
                      for (; f < 0; f++) p.unshift(0);
                      f > 0
                        ? (m = p.splice(f, p.length))
                        : ((m = p), (p = [0]));
                      const w = [];
                      for (
                        p.length >= t.lgSize &&
                        w.unshift(p.splice(-t.lgSize, p.length).join(""));
                        p.length > t.gSize;

                      )
                        w.unshift(p.splice(-t.gSize, p.length).join(""));
                      p.length && w.unshift(p.join("")),
                        (a = w.join(Tu(n, i))),
                        m.length && (a += Tu(n, r) + m.join("")),
                        g && (a += Tu(n, xu.Exponential) + "+" + g);
                    } else a = Tu(n, xu.Infinity);
                    return (
                      (a =
                        e < 0 && !l
                          ? t.negPre + a + t.negSuf
                          : t.posPre + a + t.posSuf),
                      a
                    );
                  })(
                    e,
                    (function (e, t = "-") {
                      const n = {
                          minInt: 1,
                          minFrac: 0,
                          maxFrac: 0,
                          posPre: "",
                          posSuf: "",
                          negPre: "",
                          negSuf: "",
                          gSize: 0,
                          lgSize: 0,
                        },
                        i = e.split(";"),
                        r = i[0],
                        s = i[1],
                        o =
                          -1 !== r.indexOf(".")
                            ? r.split(".")
                            : [
                                r.substring(0, r.lastIndexOf("0") + 1),
                                r.substring(r.lastIndexOf("0") + 1),
                              ],
                        a = o[0],
                        l = o[1] || "";
                      n.posPre = a.substr(0, a.indexOf("#"));
                      for (let c = 0; c < l.length; c++) {
                        const e = l.charAt(c);
                        "0" === e
                          ? (n.minFrac = n.maxFrac = c + 1)
                          : "#" === e
                          ? (n.maxFrac = c + 1)
                          : (n.posSuf += e);
                      }
                      const u = a.split(",");
                      if (
                        ((n.gSize = u[1] ? u[1].length : 0),
                        (n.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0),
                        s)
                      ) {
                        const e = r.length - n.posPre.length - n.posSuf.length,
                          t = s.indexOf("#");
                        (n.negPre = s.substr(0, t).replace(/'/g, "")),
                          (n.negSuf = s.substr(t + e).replace(/'/g, ""));
                      } else (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
                      return n;
                    })(
                      (function (e, t) {
                        return $a(e)[Ua.NumberFormats][t];
                      })(t, wu.Decimal),
                      Tu(t, xu.MinusSign)
                    ),
                    t,
                    xu.Group,
                    xu.Decimal,
                    n
                  );
                })(
                  (function (e) {
                    if (
                      "string" == typeof e &&
                      !isNaN(Number(e) - parseFloat(e))
                    )
                      return Number(e);
                    if ("number" != typeof e)
                      throw new Error(e + " is not a number");
                    return e;
                  })(t),
                  i,
                  n
                );
              } catch (r) {
                throw ic(e, r.message);
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(ro(Nl));
            }),
            (e.ɵpipe = gt({ name: "number", type: e, pure: !0 })),
            e
          );
        })(),
        oc = (() => {
          class e {
            transform(t, n, i) {
              if (null == t) return t;
              if (!this.supports(t)) throw ic(e, t);
              return t.slice(n, i);
            }
            supports(e) {
              return "string" == typeof e || Array.isArray(e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵpipe = gt({ name: "slice", type: e, pure: !1 })),
            e
          );
        })(),
        ac = (() => {
          class e {}
          return (
            (e.ɵmod = dt({ type: e })),
            (e.ɵinj = ue({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [{ provide: Zu, useClass: Gu }],
            })),
            e
          );
        })();
      function lc(e) {
        return "browser" === e;
      }
      class uc extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var e;
          (e = new uc()), fu || (fu = e);
        }
        getProperty(e, t) {
          return e[t];
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        getValue(e) {
          return e.value;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        getGlobalEventTarget(e, t) {
          return "window" === t
            ? window
            : "document" === t
            ? e
            : "body" === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            hc || ((hc = document.querySelector("base")), hc)
              ? hc.getAttribute("href")
              : null;
          return null == t
            ? null
            : ((n = t),
              cc || (cc = document.createElement("a")),
              cc.setAttribute("href", n),
              "/" === cc.pathname.charAt(0) ? cc.pathname : "/" + cc.pathname);
          var n;
        }
        resetBaseElement() {
          hc = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return Yu(document.cookie, e);
        }
      }
      let cc,
        hc = null;
      const dc = new Pe("TRANSITION_ID"),
        pc = [
          {
            provide: Sl,
            useFactory: function (e, t, n) {
              return () => {
                n.get(El).donePromise.then(() => {
                  const n = gu();
                  Array.prototype.slice
                    .apply(t.querySelectorAll("style[ng-transition]"))
                    .filter((t) => t.getAttribute("ng-transition") === e)
                    .forEach((e) => n.remove(e));
                });
              };
            },
            deps: [dc, mu, Fs],
            multi: !0,
          },
        ];
      class fc {
        static init() {
          var e;
          (e = new fc()), (iu = e);
        }
        addToWindow(e) {
          (ke.getAngularTestability = (t, n = !0) => {
            const i = e.findTestabilityInTree(t, n);
            if (null == i)
              throw new Error("Could not find testability for element.");
            return i;
          }),
            (ke.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (ke.getAllAngularRootElements = () => e.getAllRootElements()),
            ke.frameworkStabilizers || (ke.frameworkStabilizers = []),
            ke.frameworkStabilizers.push((e) => {
              const t = ke.getAllAngularTestabilities();
              let n = t.length,
                i = !1;
              const r = function (t) {
                (i = i || t), n--, 0 == n && e(i);
              };
              t.forEach(function (e) {
                e.whenStable(r);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const i = e.getTestability(t);
          return null != i
            ? i
            : n
            ? gu().isShadowRoot(t)
              ? this.findTestabilityInTree(e, t.host, !0)
              : this.findTestabilityInTree(e, t.parentElement, !0)
            : null;
        }
      }
      const gc = new Pe("EventManagerPlugins");
      let mc = (() => {
        class e {
          constructor(e, t) {
            (this._zone = t),
              (this._eventNameToPlugin = new Map()),
              e.forEach((e) => (e.manager = this)),
              (this._plugins = e.slice().reverse());
          }
          addEventListener(e, t, n) {
            return this._findPluginFor(t).addEventListener(e, t, n);
          }
          addGlobalEventListener(e, t, n) {
            return this._findPluginFor(t).addGlobalEventListener(e, t, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(e) {
            const t = this._eventNameToPlugin.get(e);
            if (t) return t;
            const n = this._plugins;
            for (let i = 0; i < n.length; i++) {
              const t = n[i];
              if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
            }
            throw new Error("No event manager plugin found for event " + e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(gc), We(Wl));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class wc {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const i = gu().getGlobalEventTarget(this._doc, e);
          if (!i)
            throw new Error(`Unsupported event target ${i} for event ${t}`);
          return this.addEventListener(i, t, n);
        }
      }
      let vc = (() => {
          class e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(e) {
              const t = new Set();
              e.forEach((e) => {
                this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
              }),
                this.onStylesAdded(t);
            }
            onStylesAdded(e) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        yc = (() => {
          class e extends vc {
            constructor(e) {
              super(),
                (this._doc = e),
                (this._hostNodes = new Set()),
                (this._styleNodes = new Set()),
                this._hostNodes.add(e.head);
            }
            _addStylesToHost(e, t) {
              e.forEach((e) => {
                const n = this._doc.createElement("style");
                (n.textContent = e), this._styleNodes.add(t.appendChild(n));
              });
            }
            addHost(e) {
              this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
            }
            removeHost(e) {
              this._hostNodes.delete(e);
            }
            onStylesAdded(e) {
              this._hostNodes.forEach((t) => this._addStylesToHost(e, t));
            }
            ngOnDestroy() {
              this._styleNodes.forEach((e) => gu().remove(e));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(We(mu));
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const _c = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        bc = /%COMP%/g;
      function xc(e, t, n) {
        for (let i = 0; i < t.length; i++) {
          let r = t[i];
          Array.isArray(r) ? xc(e, r, n) : ((r = r.replace(bc, e)), n.push(r));
        }
        return n;
      }
      function Cc(e) {
        return (t) => {
          if ("__ngUnwrap__" === t) return e;
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      let Sc = (() => {
        class e {
          constructor(e, t, n) {
            (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Ec(e));
          }
          createRenderer(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case rt.Emulated: {
                let n = this.rendererByCompId.get(t.id);
                return (
                  n ||
                    ((n = new Tc(
                      this.eventManager,
                      this.sharedStylesHost,
                      t,
                      this.appId
                    )),
                    this.rendererByCompId.set(t.id, n)),
                  n.applyToHost(e),
                  n
                );
              }
              case rt.Native:
              case rt.ShadowDom:
                return new kc(this.eventManager, this.sharedStylesHost, e, t);
              default:
                if (!this.rendererByCompId.has(t.id)) {
                  const e = xc(t.id, t.styles, []);
                  this.sharedStylesHost.addStyles(e),
                    this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(mc), We(yc), We(Tl));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Ec {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(_c[t] || t, e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = "string" == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ""), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, i) {
          if (i) {
            t = i + ":" + t;
            const r = _c[i];
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const i = _c[n];
            i ? e.removeAttributeNS(i, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, i) {
          i & la.DashCase
            ? e.style.setProperty(t, n, i & la.Important ? "important" : "")
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & la.DashCase ? e.style.removeProperty(t) : (e.style[t] = "");
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return "string" == typeof e
            ? this.eventManager.addGlobalEventListener(e, t, Cc(n))
            : this.eventManager.addEventListener(e, t, Cc(n));
        }
      }
      class Tc extends Ec {
        constructor(e, t, n, i) {
          super(e), (this.component = n);
          const r = xc(i + "-" + n.id, n.styles, []);
          t.addStyles(r),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              bc,
              i + "-" + n.id
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(bc, i + "-" + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, "");
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class kc extends Ec {
        constructor(e, t, n, i) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.component = i),
            (this.shadowRoot =
              i.encapsulation === rt.ShadowDom
                ? n.attachShadow({ mode: "open" })
                : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const r = xc(i.id, i.styles, []);
          for (let s = 0; s < r.length; s++) {
            const e = document.createElement("style");
            (e.textContent = r[s]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      let Ic = (() => {
        class e extends wc {
          constructor(e) {
            super(e);
          }
          supports(e) {
            return !0;
          }
          addEventListener(e, t, n) {
            return (
              e.addEventListener(t, n, !1),
              () => this.removeEventListener(e, t, n)
            );
          }
          removeEventListener(e, t, n) {
            return e.removeEventListener(t, n);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(mu));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Ac = ["alt", "control", "meta", "shift"],
        Rc = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Mc = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Dc = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      let Nc = (() => {
        class e extends wc {
          constructor(e) {
            super(e);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, n, i) {
            const r = e.parseEventName(n),
              s = e.eventCallback(r.fullKey, i, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => gu().onAndCancel(t, r.domEventName, s));
          }
          static parseEventName(t) {
            const n = t.toLowerCase().split("."),
              i = n.shift();
            if (0 === n.length || ("keydown" !== i && "keyup" !== i))
              return null;
            const r = e._normalizeKey(n.pop());
            let s = "";
            if (
              (Ac.forEach((e) => {
                const t = n.indexOf(e);
                t > -1 && (n.splice(t, 1), (s += e + "."));
              }),
              (s += r),
              0 != n.length || 0 === r.length)
            )
              return null;
            const o = {};
            return (o.domEventName = i), (o.fullKey = s), o;
          }
          static getEventFullKey(e) {
            let t = "",
              n = (function (e) {
                let t = e.key;
                if (null == t) {
                  if (((t = e.keyIdentifier), null == t)) return "Unidentified";
                  t.startsWith("U+") &&
                    ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                    3 === e.location && Mc.hasOwnProperty(t) && (t = Mc[t]));
                }
                return Rc[t] || t;
              })(e);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              Ac.forEach((i) => {
                i != n && (0, Dc[i])(e) && (t += i + ".");
              }),
              (t += n),
              t
            );
          }
          static eventCallback(t, n, i) {
            return (r) => {
              e.getEventFullKey(r) === t && i.runGuarded(() => n(r));
            };
          }
          static _normalizeKey(e) {
            switch (e) {
              case "esc":
                return "escape";
              default:
                return e;
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(mu));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Oc = su(hu, "browser", [
          { provide: Rl, useValue: "browser" },
          {
            provide: Al,
            useValue: function () {
              uc.makeCurrent(), fc.init();
            },
            multi: !0,
          },
          {
            provide: mu,
            useFactory: function () {
              return (
                (function (e) {
                  Rt = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Pc = [
          [],
          { provide: Ss, useValue: "root" },
          {
            provide: oi,
            useFactory: function () {
              return new oi();
            },
            deps: [],
          },
          { provide: gc, useClass: Ic, multi: !0, deps: [mu, Wl, Rl] },
          { provide: gc, useClass: Nc, multi: !0, deps: [mu] },
          [],
          { provide: Sc, useClass: Sc, deps: [mc, yc, Tl] },
          { provide: aa, useExisting: Sc },
          { provide: vc, useExisting: yc },
          { provide: yc, useClass: yc, deps: [mu] },
          { provide: Jl, useClass: Jl, deps: [Wl] },
          { provide: mc, useClass: mc, deps: [gc, Wl] },
          [],
        ];
      let Lc = (() => {
        class e {
          constructor(e) {
            if (e)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(t) {
            return {
              ngModule: e,
              providers: [
                { provide: Tl, useValue: t.appId },
                { provide: dc, useExisting: Tl },
                pc,
              ],
            };
          }
        }
        return (
          (e.ɵmod = dt({ type: e })),
          (e.ɵinj = ue({
            factory: function (t) {
              return new (t || e)(We(e, 12));
            },
            providers: Pc,
            imports: [ac, pu],
          })),
          e
        );
      })();
      function Fc(...e) {
        let t = e[e.length - 1];
        return E(t) ? (e.pop(), P(e, t)) : U(e);
      }
      "undefined" != typeof window && window;
      class jc {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new Hc(e, this.predicate, this.thisArg));
        }
      }
      class Hc extends f {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      class Vc {}
      class zc {}
      class $c {
        constructor(e) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            e
              ? (this.lazyInit =
                  "string" == typeof e
                    ? () => {
                        (this.headers = new Map()),
                          e.split("\n").forEach((e) => {
                            const t = e.indexOf(":");
                            if (t > 0) {
                              const n = e.slice(0, t),
                                i = n.toLowerCase(),
                                r = e.slice(t + 1).trim();
                              this.maybeSetNormalizedName(n, i),
                                this.headers.has(i)
                                  ? this.headers.get(i).push(r)
                                  : this.headers.set(i, [r]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(e).forEach((t) => {
                            let n = e[t];
                            const i = t.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(i, n),
                                this.maybeSetNormalizedName(t, i));
                          });
                      })
              : (this.headers = new Map());
        }
        has(e) {
          return this.init(), this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.init(), this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: "a" });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: "s" });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: "d" });
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof $c
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
              (this.lazyUpdate = null)));
        }
        copyFrom(e) {
          e.init(),
            Array.from(e.headers.keys()).forEach((t) => {
              this.headers.set(t, e.headers.get(t)),
                this.normalizedNames.set(t, e.normalizedNames.get(t));
            });
        }
        clone(e) {
          const t = new $c();
          return (
            (t.lazyInit =
              this.lazyInit && this.lazyInit instanceof $c
                ? this.lazyInit
                : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
            t
          );
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case "a":
            case "s":
              let n = e.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(e.name, t);
              const i = ("a" === e.op ? this.headers.get(t) : void 0) || [];
              i.push(...n), this.headers.set(t, i);
              break;
            case "d":
              const r = e.value;
              if (r) {
                let e = this.headers.get(t);
                if (!e) return;
                (e = e.filter((e) => -1 === r.indexOf(e))),
                  0 === e.length
                    ? (this.headers.delete(t), this.normalizedNames.delete(t))
                    : this.headers.set(t, e);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(e) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((t) =>
              e(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class Bc {
        encodeKey(e) {
          return Uc(e);
        }
        encodeValue(e) {
          return Uc(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      function Uc(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      class Wc {
        constructor(e = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = e.encoder || new Bc()),
            e.fromString)
          ) {
            if (e.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e.split("&").forEach((e) => {
                    const i = e.indexOf("="),
                      [r, s] =
                        -1 == i
                          ? [t.decodeKey(e), ""]
                          : [
                              t.decodeKey(e.slice(0, i)),
                              t.decodeValue(e.slice(i + 1)),
                            ],
                      o = n.get(r) || [];
                    o.push(s), n.set(r, o);
                  }),
                n
              );
            })(e.fromString, this.encoder);
          } else
            e.fromObject
              ? ((this.map = new Map()),
                Object.keys(e.fromObject).forEach((t) => {
                  const n = e.fromObject[t];
                  this.map.set(t, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(e) {
          return this.init(), this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          return t ? t[0] : null;
        }
        getAll(e) {
          return this.init(), this.map.get(e) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: "a" });
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: "s" });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((e) => {
                const t = this.encoder.encodeKey(e);
                return this.map
                  .get(e)
                  .map((e) => t + "=" + this.encoder.encodeValue(e))
                  .join("&");
              })
              .filter((e) => "" !== e)
              .join("&")
          );
        }
        clone(e) {
          const t = new Wc({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this),
            (t.updates = (this.updates || []).concat([e])),
            t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
              this.updates.forEach((e) => {
                switch (e.op) {
                  case "a":
                  case "s":
                    const t =
                      ("a" === e.op ? this.map.get(e.param) : void 0) || [];
                    t.push(e.value), this.map.set(e.param, t);
                    break;
                  case "d":
                    if (void 0 === e.value) {
                      this.map.delete(e.param);
                      break;
                    }
                    {
                      let t = this.map.get(e.param) || [];
                      const n = t.indexOf(e.value);
                      -1 !== n && t.splice(n, 1),
                        t.length > 0
                          ? this.map.set(e.param, t)
                          : this.map.delete(e.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function qc(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function Zc(e) {
        return "undefined" != typeof Blob && e instanceof Blob;
      }
      function Gc(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }
      class Yc {
        constructor(e, t, n, i) {
          let r;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = e.toUpperCase()),
            (function (e) {
              switch (e) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || i
              ? ((this.body = void 0 !== n ? n : null), (r = i))
              : (r = n),
            r &&
              ((this.reportProgress = !!r.reportProgress),
              (this.withCredentials = !!r.withCredentials),
              r.responseType && (this.responseType = r.responseType),
              r.headers && (this.headers = r.headers),
              r.params && (this.params = r.params)),
            this.headers || (this.headers = new $c()),
            this.params)
          ) {
            const e = this.params.toString();
            if (0 === e.length) this.urlWithParams = t;
            else {
              const n = t.indexOf("?");
              this.urlWithParams =
                t + (-1 === n ? "?" : n < t.length - 1 ? "&" : "") + e;
            }
          } else (this.params = new Wc()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : qc(this.body) ||
              Zc(this.body) ||
              Gc(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Wc
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Gc(this.body)
            ? null
            : Zc(this.body)
            ? this.body.type || null
            : qc(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Wc
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              Array.isArray(this.body)
            ? "application/json"
            : null;
        }
        clone(e = {}) {
          const t = e.method || this.method,
            n = e.url || this.url,
            i = e.responseType || this.responseType,
            r = void 0 !== e.body ? e.body : this.body,
            s =
              void 0 !== e.withCredentials
                ? e.withCredentials
                : this.withCredentials,
            o =
              void 0 !== e.reportProgress
                ? e.reportProgress
                : this.reportProgress;
          let a = e.headers || this.headers,
            l = e.params || this.params;
          return (
            void 0 !== e.setHeaders &&
              (a = Object.keys(e.setHeaders).reduce(
                (t, n) => t.set(n, e.setHeaders[n]),
                a
              )),
            e.setParams &&
              (l = Object.keys(e.setParams).reduce(
                (t, n) => t.set(n, e.setParams[n]),
                l
              )),
            new Yc(t, n, r, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: i,
              withCredentials: s,
            })
          );
        }
      }
      var Qc = (function (e) {
        return (
          (e[(e.Sent = 0)] = "Sent"),
          (e[(e.UploadProgress = 1)] = "UploadProgress"),
          (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
          (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
          (e[(e.Response = 4)] = "Response"),
          (e[(e.User = 5)] = "User"),
          e
        );
      })({});
      class Xc {
        constructor(e, t = 200, n = "OK") {
          (this.headers = e.headers || new $c()),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText || n),
            (this.url = e.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Kc extends Xc {
        constructor(e = {}) {
          super(e), (this.type = Qc.ResponseHeader);
        }
        clone(e = {}) {
          return new Kc({
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class Jc extends Xc {
        constructor(e = {}) {
          super(e),
            (this.type = Qc.Response),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new Jc({
            body: void 0 !== e.body ? e.body : this.body,
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class eh extends Xc {
        constructor(e) {
          super(e, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? "Http failure during parsing for " +
                  (e.url || "(unknown url)")
                : `Http failure response for ${e.url || "(unknown url)"}: ${
                    e.status
                  } ${e.statusText}`),
            (this.error = e.error || null);
        }
      }
      function th(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      let nh = (() => {
        class e {
          constructor(e) {
            this.handler = e;
          }
          request(e, t, n = {}) {
            let i;
            if (e instanceof Yc) i = e;
            else {
              let r = void 0;
              r = n.headers instanceof $c ? n.headers : new $c(n.headers);
              let s = void 0;
              n.params &&
                (s =
                  n.params instanceof Wc
                    ? n.params
                    : new Wc({ fromObject: n.params })),
                (i = new Yc(e, t, void 0 !== n.body ? n.body : null, {
                  headers: r,
                  params: s,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials,
                }));
            }
            const r = Fc(i).pipe(V((e) => this.handler.handle(e), void 0, 1));
            if (e instanceof Yc || "events" === n.observe) return r;
            const s = r.pipe(
              ((o = (e) => e instanceof Jc),
              function (e) {
                return e.lift(new jc(o, void 0));
              })
            );
            var o;
            switch (n.observe || "body") {
              case "body":
                switch (i.responseType) {
                  case "arraybuffer":
                    return s.pipe(
                      T((e) => {
                        if (null !== e.body && !(e.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return e.body;
                      })
                    );
                  case "blob":
                    return s.pipe(
                      T((e) => {
                        if (null !== e.body && !(e.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return e.body;
                      })
                    );
                  case "text":
                    return s.pipe(
                      T((e) => {
                        if (null !== e.body && "string" != typeof e.body)
                          throw new Error("Response is not a string.");
                        return e.body;
                      })
                    );
                  case "json":
                  default:
                    return s.pipe(T((e) => e.body));
                }
              case "response":
                return s;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(e, t = {}) {
            return this.request("DELETE", e, t);
          }
          get(e, t = {}) {
            return this.request("GET", e, t);
          }
          head(e, t = {}) {
            return this.request("HEAD", e, t);
          }
          jsonp(e, t) {
            return this.request("JSONP", e, {
              params: new Wc().append(t, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(e, t = {}) {
            return this.request("OPTIONS", e, t);
          }
          patch(e, t, n = {}) {
            return this.request("PATCH", e, th(n, t));
          }
          post(e, t, n = {}) {
            return this.request("POST", e, th(n, t));
          }
          put(e, t, n = {}) {
            return this.request("PUT", e, th(n, t));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(We(Vc));
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class ih {
        constructor(e, t) {
          (this.next = e), (this.interceptor = t);
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const rh = new Pe("HTTP_INTERCEPTORS");
      let sh = (() => {
        class e {
          intercept(e, t) {
            return t.handle(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = le({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const oh = /^\)\]\}',?\n/;
      class ah {}
      let lh = (() => {
          class e {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        uh = (() => {
          class e {
            constructor(e) {
              this.xhrFactory = e;
            }
            handle(e) {
              if ("JSONP" === e.method)
                throw new Error(
                  "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
                );
              return new v((t) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(e.method, e.urlWithParams),
                  e.withCredentials && (n.withCredentials = !0),
                  e.headers.forEach((e, t) =>
                    n.setRequestHeader(e, t.join(","))
                  ),
                  e.headers.has("Accept") ||
                    n.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !e.headers.has("Content-Type"))
                ) {
                  const t = e.detectContentTypeHeader();
                  null !== t && n.setRequestHeader("Content-Type", t);
                }
                if (e.responseType) {
                  const t = e.responseType.toLowerCase();
                  n.responseType = "json" !== t ? t : "text";
                }
                const i = e.serializeBody();
                let r = null;
                const s = () => {
                    if (null !== r) return r;
                    const t = 1223 === n.status ? 204 : n.status,
                      i = n.statusText || "OK",
                      s = new $c(n.getAllResponseHeaders()),
                      o =
                        (function (e) {
                          return "responseURL" in e && e.responseURL
                            ? e.responseURL
                            : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                            ? e.getResponseHeader("X-Request-URL")
                            : null;
                        })(n) || e.url;
                    return (
                      (r = new Kc({
                        headers: s,
                        status: t,
                        statusText: i,
                        url: o,
                      })),
                      r
                    );
                  },
                  o = () => {
                    let { headers: i, status: r, statusText: o, url: a } = s(),
                      l = null;
                    204 !== r &&
                      (l = void 0 === n.response ? n.responseText : n.response),
                      0 === r && (r = l ? 200 : 0);
                    let u = r >= 200 && r < 300;
                    if ("json" === e.responseType && "string" == typeof l) {
                      const e = l;
                      l = l.replace(oh, "");
                      try {
                        l = "" !== l ? JSON.parse(l) : null;
                      } catch (c) {
                        (l = e), u && ((u = !1), (l = { error: c, text: l }));
                      }
                    }
                    u
                      ? (t.next(
                          new Jc({
                            body: l,
                            headers: i,
                            status: r,
                            statusText: o,
                            url: a || void 0,
                          })
                        ),
                        t.complete())
                      : t.error(
                          new eh({
                            error: l,
                            headers: i,
                            status: r,
                            statusText: o,
                            url: a || void 0,
                          })
                        );
                  },
                  a = (e) => {
                    const { url: i } = s(),
                      r = new eh({
                        error: e,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: i || void 0,
                      });
                    t.error(r);
                  };
                let l = !1;
                const u = (i) => {
                    l || (t.next(s()), (l = !0));
                    let r = { type: Qc.DownloadProgress, loaded: i.loaded };
                    i.lengthComputable && (r.total = i.total),
                      "text" === e.responseType &&
                        n.responseText &&
                        (r.partialText = n.responseText),
                      t.next(r);
                  },
                  c = (e) => {
                    let n = { type: Qc.UploadProgress, loaded: e.loaded };
                    e.lengthComputable && (n.total = e.total), t.next(n);
                  };
                return (
                  n.addEventListener("load", o),
                  n.addEventListener("error", a),
                  e.reportProgress &&
                    (n.addEventListener("progress", u),
                    null !== i &&
                      n.upload &&
                      n.upload.addEventListener("progress", c)),
                  n.send(i),
                  t.next({ type: Qc.Sent }),
                  () => {
                    n.removeEventListener("error", a),
                      n.removeEventListener("load", o),
                      e.reportProgress &&
                        (n.removeEventListener("progress", u),
                        null !== i &&
                          n.upload &&
                          n.upload.removeEventListener("progress", c)),
                      n.readyState !== n.DONE && n.abort();
                  }
                );
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(We(ah));
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const ch = new Pe("XSRF_COOKIE_NAME"),
        hh = new Pe("XSRF_HEADER_NAME");
      class dh {}
      let ph = (() => {
          class e {
            constructor(e, t, n) {
              (this.doc = e),
                (this.platform = t),
                (this.cookieName = n),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const e = this.doc.cookie || "";
              return (
                e !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = Yu(e, this.cookieName)),
                  (this.lastCookieString = e)),
                this.lastToken
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(We(mu), We(Rl), We(ch));
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        fh = (() => {
          class e {
            constructor(e, t) {
              (this.tokenService = e), (this.headerName = t);
            }
            intercept(e, t) {
              const n = e.url.toLowerCase();
              if (
                "GET" === e.method ||
                "HEAD" === e.method ||
                n.startsWith("http://") ||
                n.startsWith("https://")
              )
                return t.handle(e);
              const i = this.tokenService.getToken();
              return (
                null === i ||
                  e.headers.has(this.headerName) ||
                  (e = e.clone({ headers: e.headers.set(this.headerName, i) })),
                t.handle(e)
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(We(dh), We(hh));
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        gh = (() => {
          class e {
            constructor(e, t) {
              (this.backend = e), (this.injector = t), (this.chain = null);
            }
            handle(e) {
              if (null === this.chain) {
                const e = this.injector.get(rh, []);
                this.chain = e.reduceRight(
                  (e, t) => new ih(e, t),
                  this.backend
                );
              }
              return this.chain.handle(e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(We(zc), We(Fs));
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        mh = (() => {
          class e {
            static disable() {
              return {
                ngModule: e,
                providers: [{ provide: fh, useClass: sh }],
              };
            }
            static withOptions(t = {}) {
              return {
                ngModule: e,
                providers: [
                  t.cookieName ? { provide: ch, useValue: t.cookieName } : [],
                  t.headerName ? { provide: hh, useValue: t.headerName } : [],
                ],
              };
            }
          }
          return (
            (e.ɵmod = dt({ type: e })),
            (e.ɵinj = ue({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [
                fh,
                { provide: rh, useExisting: fh, multi: !0 },
                { provide: dh, useClass: ph },
                { provide: ch, useValue: "XSRF-TOKEN" },
                { provide: hh, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            e
          );
        })(),
        wh = (() => {
          class e {}
          return (
            (e.ɵmod = dt({ type: e })),
            (e.ɵinj = ue({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [
                nh,
                { provide: Vc, useClass: gh },
                uh,
                { provide: zc, useExisting: uh },
                lh,
                { provide: ah, useExisting: lh },
              ],
              imports: [
                [
                  mh.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            e
          );
        })();
      function vh(e, t, n, r) {
        return (
          i(n) && ((r = n), (n = void 0)),
          r
            ? vh(e, t, n).pipe(T((e) => (l(e) ? r(...e) : r(e))))
            : new v((i) => {
                !(function e(t, n, i, r, s) {
                  let o;
                  if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.addEventListener &&
                        "function" == typeof e.removeEventListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addEventListener(n, i, s),
                      (o = () => e.removeEventListener(n, i, s));
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.on &&
                        "function" == typeof e.off
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.on(n, i), (o = () => e.off(n, i));
                  } else if (
                    (function (e) {
                      return (
                        e &&
                        "function" == typeof e.addListener &&
                        "function" == typeof e.removeListener
                      );
                    })(t)
                  ) {
                    const e = t;
                    t.addListener(n, i), (o = () => e.removeListener(n, i));
                  } else {
                    if (!t || !t.length)
                      throw new TypeError("Invalid event target");
                    for (let o = 0, a = t.length; o < a; o++)
                      e(t[o], n, i, r, s);
                  }
                  r.add(o);
                })(
                  e,
                  t,
                  function (e) {
                    i.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : e
                    );
                  },
                  i,
                  n
                );
              })
        );
      }
      class yh extends h {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class _h extends yh {
        constructor(e, t) {
          super(e, t),
            (this.scheduler = e),
            (this.work = t),
            (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            i = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(i, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(i, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n = !1,
            i = void 0;
          try {
            this.work(e);
          } catch (r) {
            (n = !0), (i = (!!r && r) || new Error(r));
          }
          if (n) return this.unsubscribe(), i;
        }
        _unsubscribe() {
          const e = this.id,
            t = this.scheduler,
            n = t.actions,
            i = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== i && n.splice(i, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null);
        }
      }
      let bh = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class xh extends bh {
        constructor(e, t = bh.now) {
          super(e, () =>
            xh.delegate && xh.delegate !== this ? xh.delegate.now() : t()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return xh.delegate && xh.delegate !== this
            ? xh.delegate.schedule(e, t, n)
            : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      const Ch = new xh(_h);
      function Sh(e) {
        const { subscriber: t, counter: n, period: i } = e;
        t.next(n),
          this.schedule({ subscriber: t, counter: n + 1, period: i }, i);
      }
      const Eh = new v((e) => e.complete());
      class Th {
        constructor(e) {
          this.notifier = e;
        }
        call(e, t) {
          const n = new kh(e),
            i = H(this.notifier, new F(n));
          return i && !n.seenValue ? (n.add(i), t.subscribe(n)) : n;
        }
      }
      class kh extends j {
        constructor(e) {
          super(e), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      function Ih(e) {
        return (t) => t.lift(new Ah(e));
      }
      class Ah {
        constructor(e) {
          this.value = e;
        }
        call(e, t) {
          return t.subscribe(new Rh(e, this.value));
        }
      }
      class Rh extends f {
        constructor(e, t) {
          super(e), (this.value = t);
        }
        _next(e) {
          this.destination.next(this.value);
        }
      }
      function Mh(...e) {
        return B(1)(Fc(...e));
      }
      class Dh {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new Nh(e, this.project));
        }
      }
      class Nh extends j {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (i) {
            return void this.destination.error(i);
          }
          this._innerSub(t);
        }
        _innerSub(e) {
          const t = this.innerSubscription;
          t && t.unsubscribe();
          const n = new F(this),
            i = this.destination;
          i.add(n),
            (this.innerSubscription = H(e, n)),
            this.innerSubscription !== n && i.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(e) {
          this.destination.next(e);
        }
      }
      const Oh = ["ngucarousel"],
        Ph = ["nguItemsContainer"],
        Lh = ["touchContainer"],
        Fh = [
          [["", "NguCarouselPrev", ""]],
          [["", "NguCarouselNext", ""]],
          [["", "NguCarouselPoint", ""]],
        ],
        jh = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"],
        Hh = ["*"];
      class Vh {}
      class zh {}
      class $h {
        constructor(e = 0, t = 0, n = 0, i = 0, r = 0) {
          (this.xs = e),
            (this.sm = t),
            (this.md = n),
            (this.lg = i),
            (this.all = r),
            (this.xl = 0);
        }
      }
      class Bh {
        constructor(e = 768, t = 992, n = 1200, i = 1200) {
          (this.sm = e), (this.md = t), (this.lg = n), (this.xl = i);
        }
      }
      class Uh {
        constructor(e) {
          this.$implicit = e;
        }
      }
      let Wh = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = ft({
              type: e,
              selectors: [["", "NguCarouselNext", ""]],
            })),
            e
          );
        })(),
        qh = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = ft({
              type: e,
              selectors: [["", "NguCarouselPrev", ""]],
            })),
            e
          );
        })(),
        Zh = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = ft({
              type: e,
              selectors: [["", "NguCarouselPoint", ""]],
            })),
            e
          );
        })(),
        Gh = (() => {
          class e {
            constructor(e) {
              this.template = e;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(ro(Aa));
            }),
            (e.ɵdir = ft({ type: e, selectors: [["", "nguCarouselDef", ""]] })),
            e
          );
        })(),
        Yh = (() => {
          class e {
            constructor(e) {
              this.viewContainer = e;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(ro(Ma));
            }),
            (e.ɵdir = ft({
              type: e,
              selectors: [["", "nguCarouselOutlet", ""]],
            })),
            e
          );
        })(),
        Qh = (() => {
          class e extends class {
            constructor(
              e = new zh(),
              t = new Vh(),
              n,
              i = new $h(),
              r,
              s,
              o,
              a = "fixed",
              l = "",
              u = 0,
              c = 0,
              h = 0,
              d = 0,
              p = 0,
              f = 0,
              g = 0,
              m = 0,
              w = 0,
              v = "cubic-bezier(0, 0, 0.2, 1)",
              y = 200,
              _ = !1,
              b = 0,
              x = 0,
              C = !1,
              S = !0,
              E = !1,
              T = !1,
              k = !0,
              I = 1
            ) {
              (this.touch = e),
                (this.vertical = t),
                (this.interval = n),
                (this.transform = i),
                (this.button = r),
                (this.visibleItems = s),
                (this.deviceType = o),
                (this.type = a),
                (this.token = l),
                (this.items = u),
                (this.load = c),
                (this.deviceWidth = h),
                (this.carouselWidth = d),
                (this.itemWidth = p),
                (this.slideItems = f),
                (this.itemWidthPer = g),
                (this.itemLength = m),
                (this.currentSlide = w),
                (this.easing = v),
                (this.speed = y),
                (this.loop = _),
                (this.dexVal = b),
                (this.touchTransform = x),
                (this.isEnd = C),
                (this.isFirst = S),
                (this.isLast = E),
                (this.RTL = T),
                (this.point = k),
                (this.velocity = I);
            }
          } {
            constructor(e, t, n, i, r) {
              super(),
                (this._el = e),
                (this._renderer = t),
                (this._differs = n),
                (this.platformId = i),
                (this.cdr = r),
                (this.withAnim = !0),
                (this.isHovered = !1),
                (this.carouselLoad = new rl()),
                (this.onMove = new rl()),
                (this._intervalController$ = new C()),
                (this.pointNumbers = []);
            }
            get dataSource() {
              return this._dataSource;
            }
            set dataSource(e) {
              e && this._switchDataSource(e);
            }
            set nextBtn(e) {
              this.listener2 && this.listener2(),
                e &&
                  (this.listener2 = this._renderer.listen(
                    e.nativeElement,
                    "click",
                    () => this._carouselScrollOne(1)
                  ));
            }
            set prevBtn(e) {
              this.listener1 && this.listener1(),
                e &&
                  (this.listener1 = this._renderer.listen(
                    e.nativeElement,
                    "click",
                    () => this._carouselScrollOne(0)
                  ));
            }
            get trackBy() {
              return this._trackByFn;
            }
            set trackBy(e) {
              di() &&
                null != e &&
                "function" != typeof e &&
                console &&
                console.warn &&
                console.warn(
                  `trackBy must be a function, but received ${JSON.stringify(
                    e
                  )}.`
                ),
                (this._trackByFn = e);
            }
            ngOnInit() {
              this._dataDiffer = this._differs
                .find([])
                .create((e, t) => (this.trackBy ? this.trackBy(e, t) : t));
            }
            ngDoCheck() {
              (this.arrayChanges = this._dataDiffer.diff(this.dataSource)),
                this.arrayChanges &&
                  this._defDirec &&
                  this._observeRenderChanges();
            }
            _switchDataSource(e) {
              (this._dataSource = e),
                this._defDirec && this._observeRenderChanges();
            }
            _observeRenderChanges() {
              let e;
              var t;
              this._dataSource instanceof v
                ? (e = this._dataSource)
                : Array.isArray(this._dataSource) && (e = Fc(this._dataSource)),
                e &&
                  (this._dataSubscription = e
                    .pipe(
                      ((t = this._intervalController$),
                      (e) => e.lift(new Th(t)))
                    )
                    .subscribe((e) => {
                      this.renderNodeChanges(e), (this.isLast = !1);
                    }));
            }
            renderNodeChanges(e, t = this._nodeOutlet.viewContainer) {
              this.arrayChanges &&
                (this.arrayChanges.forEachOperation((n, i, r) => {
                  const s = this._getNodeDef(e[r], r);
                  if (null == n.previousIndex) {
                    const n = new Uh(e[r]);
                    (n.index = r), t.createEmbeddedView(s.template, n, r);
                  } else if (null == r) t.remove(i);
                  else {
                    const e = t.get(i);
                    t.move(e, r);
                  }
                }),
                this._updateItemIndexContext(),
                this.carousel && this._storeCarouselData());
            }
            _updateItemIndexContext() {
              const e = this._nodeOutlet.viewContainer;
              for (let t = 0, n = e.length; t < n; t++) {
                const i = e.get(t).context;
                (i.count = n),
                  (i.first = 0 === t),
                  (i.last = t === n - 1),
                  (i.even = t % 2 == 0),
                  (i.odd = !i.even),
                  (i.index = t);
              }
            }
            _getNodeDef(e, t) {
              return 1 === this._defDirec.length
                ? this._defDirec.first
                : this._defDirec.find((n) => n.when && n.when(t, e)) ||
                    this._defaultNodeDef;
            }
            ngAfterViewInit() {
              (this.carousel = this._el.nativeElement),
                this._inputValidation(),
                (this.carouselCssNode = this._createStyleElem()),
                lc(this.platformId) &&
                  (this._carouselInterval(),
                  this.vertical.enabled || this._touch(),
                  (this.listener3 = this._renderer.listen(
                    "window",
                    "resize",
                    (e) => {
                      this._onResizing(e);
                    }
                  )),
                  this._onWindowScrolling());
            }
            ngAfterContentInit() {
              this._observeRenderChanges(), this.cdr.markForCheck();
            }
            _inputValidation() {
              (this.inputs.gridBreakpoints = this.inputs.gridBreakpoints
                ? this.inputs.gridBreakpoints
                : new Bh()),
                void 0 === this.inputs.grid.xl &&
                  (this.inputs.grid.xl = this.inputs.grid.lg),
                (this.type =
                  0 !== this.inputs.grid.all ? "fixed" : "responsive"),
                (this.loop = this.inputs.loop || !1),
                (this.inputs.easing =
                  this.inputs.easing || "cubic-bezier(0, 0, 0.2, 1)"),
                (this.touch.active = this.inputs.touch || !1),
                (this.RTL = !!this.inputs.RTL),
                (this.interval = this.inputs.interval || null),
                (this.velocity =
                  "number" == typeof this.inputs.velocity
                    ? this.inputs.velocity
                    : this.velocity),
                this.inputs.vertical &&
                  this.inputs.vertical.enabled &&
                  ((this.vertical.enabled = this.inputs.vertical.enabled),
                  (this.vertical.height = this.inputs.vertical.height)),
                (this.directionSym = this.RTL ? "" : "-"),
                (this.point =
                  !this.inputs.point ||
                  void 0 === this.inputs.point.visible ||
                  this.inputs.point.visible),
                this._carouselSize();
            }
            ngOnDestroy() {
              this.carouselInt && this.carouselInt.unsubscribe(),
                this._intervalController$.unsubscribe(),
                this.carouselLoad.complete(),
                this.onMove.complete(),
                clearTimeout(this.onScrolling);
              for (let e = 1; e <= 4; e++) {
                const t = "listener" + e;
                this[t] && this[t]();
              }
            }
            _onResizing(e) {
              clearTimeout(this.onResize),
                (this.onResize = setTimeout(() => {
                  this.deviceWidth !== e.target.outerWidth &&
                    (this._setStyle(
                      this.nguItemsContainer.nativeElement,
                      "transition",
                      ""
                    ),
                    this._storeCarouselData());
                }, 500));
            }
            _touch() {
              this.inputs.touch &&
                Promise.resolve()
                  .then(n.t.bind(null, "QFtD", 7))
                  .then(() => {
                    const e = new Hammer(this.touchContainer.nativeElement);
                    e
                      .get("pan")
                      .set({ direction: Hammer.DIRECTION_HORIZONTAL }),
                      e.on("panstart", (e) => {
                        (this.carouselWidth =
                          this.nguItemsContainer.nativeElement.offsetWidth),
                          (this.touchTransform =
                            this.transform[this.deviceType]),
                          (this.dexVal = 0),
                          this._setStyle(
                            this.nguItemsContainer.nativeElement,
                            "transition",
                            ""
                          );
                      }),
                      this.vertical.enabled
                        ? (e.on("panup", (e) => {
                            this._touchHandling("panleft", e);
                          }),
                          e.on("pandown", (e) => {
                            this._touchHandling("panright", e);
                          }))
                        : (e.on("panleft", (e) => {
                            this._touchHandling("panleft", e);
                          }),
                          e.on("panright", (e) => {
                            this._touchHandling("panright", e);
                          })),
                      e.on("panend pancancel", (e) => {
                        if (Math.abs(e.velocity) >= this.velocity) {
                          this.touch.velocity = e.velocity;
                          let t = 0;
                          (t = this.RTL
                            ? "panright" === this.touch.swipe
                              ? 1
                              : 0
                            : "panright" === this.touch.swipe
                            ? 0
                            : 1),
                            this._carouselScrollOne(t);
                        } else
                          (this.dexVal = 0),
                            this._setStyle(
                              this.nguItemsContainer.nativeElement,
                              "transition",
                              "transform 324ms cubic-bezier(0, 0, 0.2, 1)"
                            ),
                            this._setStyle(
                              this.nguItemsContainer.nativeElement,
                              "transform",
                              ""
                            );
                      }),
                      e.on("hammer.input", (e) => {
                        e.srcEvent.stopPropagation();
                      });
                  });
            }
            _touchHandling(e, t) {
              if (0 === t.center.x) return;
              let n =
                (t = Math.abs(this.vertical.enabled ? t.deltaY : t.deltaX)) -
                this.dexVal;
              (n =
                "responsive" === this.type
                  ? (Math.abs(t - this.dexVal) /
                      (this.vertical.enabled
                        ? this.vertical.height
                        : this.carouselWidth)) *
                    100
                  : n),
                (this.dexVal = t),
                (this.touch.swipe = e),
                this._setTouchTransfrom(e, n),
                this._setTransformFromTouch();
            }
            _setTouchTransfrom(e, t) {
              this.touchTransform =
                e === (this.RTL ? "panright" : "panleft")
                  ? t + this.touchTransform
                  : this.touchTransform - t;
            }
            _setTransformFromTouch() {
              this.touchTransform < 0 && (this.touchTransform = 0);
              const e = "responsive" === this.type ? "%" : "px";
              this._setStyle(
                this.nguItemsContainer.nativeElement,
                "transform",
                this.vertical.enabled
                  ? `translate3d(0, ${this.directionSym}${this.touchTransform}${e}, 0)`
                  : `translate3d(${this.directionSym}${this.touchTransform}${e}, 0, 0)`
              );
            }
            _onWindowScrolling() {
              const e = this.carousel.offsetTop,
                t = window.scrollY,
                n = window.innerHeight,
                i = this.carousel.offsetHeight;
              this._intervalController$.next(
                e <= t + n - i / 4 && e + i / 2 >= t ? 1 : 0
              );
            }
            _storeCarouselData() {
              const e = this.inputs.gridBreakpoints;
              (this.deviceWidth = lc(this.platformId)
                ? window.innerWidth
                : e.xl),
                (this.carouselWidth =
                  this.carouselMain1.nativeElement.offsetWidth),
                "responsive" === this.type
                  ? ((this.deviceType =
                      this.deviceWidth >= e.xl
                        ? "xl"
                        : this.deviceWidth >= e.lg
                        ? "lg"
                        : this.deviceWidth >= e.md
                        ? "md"
                        : this.deviceWidth >= e.sm
                        ? "sm"
                        : "xs"),
                    (this.items = this.inputs.grid[this.deviceType]),
                    (this.itemWidth = this.carouselWidth / this.items))
                  : ((this.items = Math.trunc(
                      this.carouselWidth / this.inputs.grid.all
                    )),
                    (this.itemWidth = this.inputs.grid.all),
                    (this.deviceType = "all")),
                (this.slideItems = +(this.inputs.slide < this.items
                  ? this.inputs.slide
                  : this.items)),
                (this.load =
                  this.inputs.load >= this.slideItems
                    ? this.inputs.load
                    : this.slideItems),
                (this.speed =
                  this.inputs.speed && this.inputs.speed > -1
                    ? this.inputs.speed
                    : 400),
                this._carouselPoint();
            }
            reset(e) {
              e && (this.withAnim = !1),
                (this.carouselCssNode.innerHTML = ""),
                this.moveTo(0),
                this._carouselPoint();
            }
            _carouselPoint() {
              this.pointIndex = Math.ceil(
                (this.dataSource.length - (this.items - this.slideItems)) /
                  this.slideItems
              );
              const e = [];
              if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide)
                for (let t = 0; t < this.pointIndex; t++) e.push(t);
              (this.pointNumbers = e),
                this._carouselPointActiver(),
                this.pointIndex <= 1
                  ? this._btnBoolean(1, 1)
                  : this._btnBoolean(
                      0 !== this.currentSlide || this.loop ? 0 : 1,
                      0
                    );
            }
            _carouselPointActiver() {
              const e = Math.ceil(this.currentSlide / this.slideItems);
              (this.activePoint = e), this.cdr.markForCheck();
            }
            moveTo(e, t) {
              if (
                (t && (this.withAnim = !1),
                this.activePoint !== e && e < this.pointIndex)
              ) {
                let t;
                const n = this.currentSlide < e ? 1 : 0;
                switch (e) {
                  case 0:
                    this._btnBoolean(1, 0), (t = e * this.slideItems);
                    break;
                  case this.pointIndex - 1:
                    this._btnBoolean(0, 1),
                      (t = this.dataSource.length - this.items);
                    break;
                  default:
                    this._btnBoolean(0, 0), (t = e * this.slideItems);
                }
                this._carouselScrollTwo(n, t, this.speed);
              }
            }
            _carouselSize() {
              this.token = this._generateID();
              let e = "";
              (this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`),
                "banner" === this.inputs.custom &&
                  this._renderer.addClass(this.carousel, "banner"),
                "lazy" === this.inputs.animation &&
                  (e +=
                    this.styleid +
                    " > .item {transition: transform .6s ease;}");
              const t = this.inputs.gridBreakpoints;
              let n = "";
              (n = this.vertical.enabled
                ? `@media (max-width:${t.sm - 1}px){${
                    this.styleid
                  } > .item {height: ${
                    this.vertical.height / +this.inputs.grid.xs
                  }px}}\n                    @media (max-width:${t.sm}px){${
                    this.styleid
                  } > .item {height: ${
                    this.vertical.height / +this.inputs.grid.sm
                  }px}}\n                    @media (min-width:${t.md}px){${
                    this.styleid
                  } > .item {height: ${
                    this.vertical.height / +this.inputs.grid.md
                  }px}}\n                    @media (min-width:${t.lg}px){${
                    this.styleid
                  } > .item {height: ${
                    this.vertical.height / +this.inputs.grid.lg
                  }px}}\n                    @media (min-width:${t.xl}px){${
                    this.styleid
                  } > .item {height: ${
                    this.vertical.height / +this.inputs.grid.xl
                  }px}}`
                : "responsive" === this.type
                ? `@media (max-width:${t.sm - 1}px){${
                    "mobile" === this.inputs.type
                      ? `${this.styleid} .item {flex: 0 0 ${
                          95 / +this.inputs.grid.xs
                        }%; width: ${95 / +this.inputs.grid.xs}%;}`
                      : `${this.styleid} .item {flex: 0 0 ${
                          100 / +this.inputs.grid.xs
                        }%; width: ${100 / +this.inputs.grid.xs}%;}`
                  }}\n                    @media (min-width:${t.sm}px){${
                    this.styleid
                  } > .item {flex: 0 0 ${100 / +this.inputs.grid.sm}%; width: ${
                    100 / +this.inputs.grid.sm
                  }%}}\n                    @media (min-width:${t.md}px){${
                    this.styleid
                  } > .item {flex: 0 0 ${100 / +this.inputs.grid.md}%; width: ${
                    100 / +this.inputs.grid.md
                  }%}}\n                    @media (min-width:${t.lg}px){${
                    this.styleid
                  } > .item {flex: 0 0 ${100 / +this.inputs.grid.lg}%; width: ${
                    100 / +this.inputs.grid.lg
                  }%}}\n                    @media (min-width:${t.xl}px){${
                    this.styleid
                  } > .item {flex: 0 0 ${100 / +this.inputs.grid.xl}%; width: ${
                    100 / +this.inputs.grid.xl
                  }%}}`
                : `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`),
                this._renderer.addClass(this.carousel, this.token),
                this.vertical.enabled &&
                  (this._renderer.addClass(
                    this.nguItemsContainer.nativeElement,
                    "nguvertical"
                  ),
                  this._renderer.setStyle(
                    this.carouselMain1.nativeElement,
                    "height",
                    this.vertical.height + "px"
                  )),
                this.RTL &&
                  !this.vertical.enabled &&
                  this._renderer.addClass(this.carousel, "ngurtl"),
                this._createStyleElem(`${e} ${n}`),
                this._storeCarouselData();
            }
            _carouselScrollOne(e) {
              let t = this.speed,
                n = 0,
                i = 0;
              const r = Math.ceil(this.dexVal / this.itemWidth);
              if (
                (this._setStyle(
                  this.nguItemsContainer.nativeElement,
                  "transform",
                  ""
                ),
                1 !== this.pointIndex)
              )
                if (0 !== e || ((this.loop || this.isFirst) && !this.loop))
                  1 !== e ||
                    ((this.loop || this.isLast) && !this.loop) ||
                    (this.dataSource.length <=
                      this.currentSlide + this.items + this.slideItems &&
                    !this.isLast
                      ? ((i = this.dataSource.length - this.items),
                        this._btnBoolean(0, 1))
                      : this.isLast
                      ? ((i = n = 0), (t = 400), this._btnBoolean(1, 0))
                      : (this._btnBoolean(0, 0),
                        r > this.slideItems
                          ? ((i =
                              this.currentSlide +
                              this.slideItems +
                              (r - this.slideItems)),
                            (t = 200))
                          : (i = this.currentSlide + this.slideItems)),
                    this._carouselScrollTwo(e, i, t));
                else {
                  const s =
                    this.currentSlide - this.slideItems + this.slideItems;
                  this._btnBoolean(0, 1),
                    0 === this.currentSlide
                      ? ((i = this.dataSource.length - this.items),
                        (t = 400),
                        this._btnBoolean(0, 1))
                      : this.slideItems >= s
                      ? ((i = n = 0), this._btnBoolean(1, 0))
                      : (this._btnBoolean(0, 0),
                        r > this.slideItems
                          ? ((i = this.currentSlide - r), (t = 200))
                          : (i = this.currentSlide - this.slideItems)),
                    this._carouselScrollTwo(e, i, t);
                }
            }
            _carouselScrollTwo(e, t, n) {
              if (0 !== this.dexVal) {
                const e = Math.abs(this.touch.velocity);
                let t = Math.floor(
                  (this.dexVal / e / this.dexVal) *
                    (this.deviceWidth - this.dexVal)
                );
                (t = t > n ? n : t), (n = t < 200 ? 200 : t), (this.dexVal = 0);
              }
              this.withAnim
                ? (this._setStyle(
                    this.nguItemsContainer.nativeElement,
                    "transition",
                    `transform ${n}ms ${this.inputs.easing}`
                  ),
                  this.inputs.animation &&
                    this._carouselAnimator(
                      e,
                      t + 1,
                      t + this.items,
                      n,
                      Math.abs(this.currentSlide - t)
                    ))
                : this._setStyle(
                    this.nguItemsContainer.nativeElement,
                    "transition",
                    ""
                  ),
                (this.itemLength = this.dataSource.length),
                this._transformStyle(t),
                (this.currentSlide = t),
                this.onMove.emit(this),
                this._carouselPointActiver(),
                this._carouselLoadTrigger(),
                (this.withAnim = !0);
            }
            _btnBoolean(e, t) {
              (this.isFirst = !!e), (this.isLast = !!t);
            }
            _transformString(e, t) {
              let n = "";
              return (
                (n += this.styleid + " { transform: translate3d("),
                this.vertical.enabled
                  ? ((this.transform[e] =
                      (this.vertical.height / this.inputs.grid[e]) * t),
                    (n += `0, -${this.transform[e]}px, 0`))
                  : ((this.transform[e] = (100 / this.inputs.grid[e]) * t),
                    (n += `${this.directionSym}${this.transform[e]}%, 0, 0`)),
                (n += "); }"),
                n
              );
            }
            _transformStyle(e) {
              let t = "";
              if ("responsive" === this.type) {
                const n = this.inputs.gridBreakpoints;
                t = `@media (max-width: ${n.sm - 1}px) {${this._transformString(
                  "xs",
                  e
                )}}\n      @media (min-width: ${
                  n.sm
                }px) {${this._transformString(
                  "sm",
                  e
                )} }\n      @media (min-width: ${
                  n.md
                }px) {${this._transformString(
                  "md",
                  e
                )} }\n      @media (min-width: ${
                  n.lg
                }px) {${this._transformString(
                  "lg",
                  e
                )} }\n      @media (min-width: ${
                  n.xl
                }px) {${this._transformString("xl", e)} }`;
              } else
                (this.transform.all = this.inputs.grid.all * e),
                  (t = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`);
              this.carouselCssNode.textContent = t;
            }
            _carouselLoadTrigger() {
              "number" == typeof this.inputs.load &&
                this.dataSource.length - this.load <=
                  this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
            }
            _generateID() {
              let e = "";
              const t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
              for (let n = 0; n < 6; n++)
                e += t.charAt(Math.floor(Math.random() * t.length));
              return "ngucarousel" + e;
            }
            _carouselInterval() {
              const e = this.carouselMain1.nativeElement;
              if (this.interval && this.loop) {
                this.listener4 = this._renderer.listen(
                  "window",
                  "scroll",
                  () => {
                    clearTimeout(this.onScrolling),
                      (this.onScrolling = setTimeout(() => {
                        this._onWindowScrolling();
                      }, 600));
                  }
                );
                const t = vh(e, "mouseleave").pipe(Ih(1)),
                  n = vh(e, "mouseenter").pipe(Ih(0)),
                  i = vh(e, "touchstart").pipe(Ih(1)),
                  r = vh(e, "touchend").pipe(Ih(0)),
                  s = (function (e = 0, t = Ch) {
                    var n;
                    return (
                      (l((n = e)) || !(n - parseFloat(n) + 1 >= 0) || e < 0) &&
                        (e = 0),
                      (t && "function" == typeof t.schedule) || (t = Ch),
                      new v(
                        (n) => (
                          n.add(
                            t.schedule(Sh, e, {
                              subscriber: n,
                              counter: 0,
                              period: e,
                            })
                          ),
                          n
                        )
                      )
                    );
                  })(this.inputs.interval.timing).pipe(Ih(1));
                setTimeout(() => {
                  this.carouselInt = W(t, i, n, r, this._intervalController$)
                    .pipe(
                      (function (...e) {
                        const t = e[e.length - 1];
                        return E(t)
                          ? (e.pop(), (n) => Mh(e, n, t))
                          : (t) => Mh(e, t);
                      })(1),
                      (function e(t, n) {
                        return "function" == typeof n
                          ? (i) =>
                              i.pipe(
                                e((e, i) =>
                                  L(t(e, i)).pipe(T((t, r) => n(e, t, i, r)))
                                )
                              )
                          : (e) => e.lift(new Dh(t));
                      })(
                        (e) => (
                          (this.isHovered = !e),
                          this.cdr.markForCheck(),
                          e ? s : Eh
                        )
                      )
                    )
                    .subscribe((e) => {
                      this._carouselScrollOne(1);
                    });
                }, this.interval.initialDelay);
              }
            }
            _updateItemIndexContextAni() {
              const e = this._nodeOutlet.viewContainer;
              for (let t = 0, n = e.length; t < n; t++) {
                const i = e.get(t).context;
                (i.count = n),
                  (i.first = 0 === t),
                  (i.last = t === n - 1),
                  (i.even = t % 2 == 0),
                  (i.odd = !i.even),
                  (i.index = t);
              }
            }
            _carouselAnimator(
              e,
              t,
              n,
              i,
              r,
              s = this._nodeOutlet.viewContainer
            ) {
              let o = r < 5 ? r : 5;
              o = 1 === o ? 3 : o;
              const a = [];
              if (1 === e)
                for (let l = t - 1; l < n; l++)
                  a.push(l),
                    (o *= 2),
                    (s.get(l).context.animate = {
                      value: !0,
                      params: { distance: o },
                    });
              else
                for (let l = n - 1; l >= t - 1; l--)
                  a.push(l),
                    (o *= 2),
                    (s.get(l).context.animate = {
                      value: !0,
                      params: { distance: -o },
                    });
              this.cdr.markForCheck(),
                setTimeout(() => {
                  this._removeAnimations(a);
                }, 0.7 * i);
            }
            _removeAnimations(e) {
              const t = this._nodeOutlet.viewContainer;
              e.forEach((e) => {
                t.get(e).context.animate = {
                  value: !1,
                  params: { distance: 0 },
                };
              }),
                this.cdr.markForCheck();
            }
            _setStyle(e, t, n) {
              this._renderer.setStyle(e, t, n);
            }
            _createStyleElem(e) {
              const t = this._renderer.createElement("style");
              if (e) {
                const n = this._renderer.createText(e);
                this._renderer.appendChild(t, n);
              }
              return this._renderer.appendChild(this.carousel, t), t;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(ro(sa), ro(ua), ro(Sa), ro(Rl), ro(xs));
            }),
            (e.ɵcmp = lt({
              type: e,
              selectors: [["ngu-carousel"]],
              contentQueries: function (e, t, n) {
                var i;
                1 & e && (vl(n, Wh, !0, sa), vl(n, qh, !0, sa), vl(n, Gh, !1)),
                  2 & e &&
                    (gl((i = yl())) && (t.nextBtn = i.first),
                    gl((i = yl())) && (t.prevBtn = i.first),
                    gl((i = yl())) && (t._defDirec = i));
              },
              viewQuery: function (e, t) {
                var n;
                1 & e &&
                  (ml(Yh, !0), ml(Oh, !0, sa), ml(Ph, !0, sa), ml(Lh, !0, sa)),
                  2 & e &&
                    (gl((n = yl())) && (t._nodeOutlet = n.first),
                    gl((n = yl())) && (t.carouselMain1 = n.first),
                    gl((n = yl())) && (t.nguItemsContainer = n.first),
                    gl((n = yl())) && (t.touchContainer = n.first));
              },
              inputs: {
                dataSource: "dataSource",
                trackBy: "trackBy",
                inputs: "inputs",
              },
              outputs: { carouselLoad: "carouselLoad", onMove: "onMove" },
              features: [Vs],
              ngContentSelectors: jh,
              decls: 11,
              vars: 0,
              consts: [
                [1, "ngucarousel"],
                ["ngucarousel", ""],
                [1, "ngu-touch-container"],
                ["touchContainer", ""],
                [1, "ngucarousel-items"],
                ["nguItemsContainer", ""],
                ["nguCarouselOutlet", ""],
                [1, "nguclearFix"],
              ],
              template: function (e, t) {
                1 & e &&
                  (_o(Fh),
                  ao(0, "div", 0, 1),
                  bo(2),
                  ao(3, "div", 2, 3),
                  ao(5, "div", 4, 5),
                  co(7, 6, undefined),
                  ho(),
                  lo(),
                  lo(),
                  uo(8, "div", 7),
                  bo(9, 1),
                  lo(),
                  bo(10, 2));
              },
              directives: [Yh],
              styles: [
                "[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{height:100%;overflow:hidden;position:relative}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{display:flex;height:100%;position:relative}.nguvertical[_ngcontent-%COMP%]{flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{bottom:20px;position:absolute;width:100%}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:12px;text-align:center;white-space:nowrap}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(0,0,0,.55);border-radius:50%;display:inline-block;margin:0 4px;padding:4px;transition:.4s;transition-timing-function:cubic-bezier(.17,.67,.83,.67)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}",
              ],
              changeDetection: 0,
            })),
            e
          );
        })(),
        Xh = (() => {
          class e {
            constructor() {
              this.classes = !0;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = lt({
              type: e,
              selectors: [["ngu-tile"]],
              hostVars: 2,
              hostBindings: function (e, t) {
                2 & e && Lo("item", t.classes);
              },
              ngContentSelectors: Hh,
              decls: 2,
              vars: 0,
              consts: [[1, "tile"]],
              template: function (e, t) {
                1 & e && (_o(), ao(0, "div", 0), bo(1), lo());
              },
              styles: [
                "[_nghost-%COMP%]{box-sizing:border-box;padding:10px}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}",
              ],
            })),
            e
          );
        })(),
        Kh = (() => {
          class e {}
          return (
            (e.ɵmod = dt({ type: e })),
            (e.ɵinj = ue({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[ac]],
            })),
            e
          );
        })(),
        Jh = (() => {
          class e {
            constructor(e) {
              this.http = e;
            }
            getWidget(e, t) {
              return this.http.get(
                `\https://app.reviewlab.ru/api/v1/widgets/widget/${e}${
                  t ? "/remote" : ""
                }`
              );
            }
            getReviews(e, { type: t, skip: n, limit: i }, r) {
              const s = { skip: n.toString(), limit: i.toString() };
              return (
                t && (s.type = t.toString()),
                this.http.get(
                  `\https://app.reviewlab.ru/api/v1/widgets/widget/${e}/reviews${
                    r ? "/remote" : ""
                  }`,
                  { params: s }
                )
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(We(nh));
            }),
            (e.ɵprov = le({ token: e, factory: e.ɵfac, providedIn: "root" })),
            e
          );
        })();
      var ed = n("ekE9");
      let td = (() => {
          class e extends oc {
            constructor() {
              super();
            }
            transform(e, t) {
              if (!e) return "";
              const n = e && e.length > t ? "..." : "";
              return super.transform(e, 0, t) + n;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵpipe = gt({ name: "ellipsis", type: e, pure: !0 })),
            e
          );
        })(),
        nd = (() => {
          class e {
            transform(e) {
              return e ? (Array.isArray(e) ? e[0] : e) : "";
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵpipe = gt({ name: "sourceLink", type: e, pure: !0 })),
            e
          );
        })();
      function id(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 10), uo(1, "meta", 11), uo(2, "meta", 12), lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            so("content", e.averageRatings),
            nr(1),
            so("content", e.reviewsCount);
        }
      }
      function rd(e, t) {
        1 & e && uo(0, "img", 23), 2 & e && so("src", vo(4).review.photo, Fi);
      }
      const sd = function (e) {
        return { "background-color": e };
      };
      function od(e, t) {
        if ((1 & e && (ao(0, "div", 24), Qo(1), lo()), 2 & e)) {
          const e = vo(4);
          Fo(Xa(3, sd, e.color)),
            nr(1),
            Ko(" ", e.getAvatarLetters(e.review.name), " ");
        }
      }
      function ad(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 20),
            no(1, rd, 1, 1, "img", 21),
            no(2, od, 2, 5, "ng-template", null, 22, Cl),
            lo()),
          2 & e)
        ) {
          const e = io(3),
            t = vo(3);
          nr(1), so("ngIf", t.review.photo)("ngIfElse", e);
        }
      }
      const ld = function (e) {
        return { icon_active: e };
      };
      function ud(e, t) {
        if (
          (1 & e &&
            (co(0),
            xn(),
            ao(1, "svg", 29),
            ao(2, "g"),
            uo(3, "rect", 30),
            uo(4, "polygon", 31),
            lo(),
            lo(),
            ho()),
          2 & e)
        ) {
          const e = t.index,
            n = vo(4);
          nr(1), so("ngClass", Xa(1, ld, n.review.rating >= e + 1));
        }
      }
      const cd = function () {
        return [];
      };
      function hd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 25),
            uo(1, "meta", 26),
            uo(2, "meta", 27),
            uo(3, "meta", 11),
            no(4, ud, 5, 3, "ng-container", 28),
            lo()),
          2 & e)
        ) {
          const e = vo(3);
          nr(3),
            so("content", e.review.rating),
            nr(1),
            so("ngForOf", Qa(2, cd).constructor(5));
        }
      }
      function dd(e, t) {
        if (
          (1 & e && (ao(0, "div", 32), ao(1, "span", 33), Qo(2), lo(), lo()),
          2 & e)
        ) {
          const e = vo(3);
          nr(2), Xo(e.review.name);
        }
      }
      function pd(e, t) {
        if ((1 & e && (ao(0, "div", 34), Qo(1), el(2, "date"), lo()), 2 & e)) {
          const e = vo(3);
          nr(1),
            Xo(
              (function (e, t, n, i, r, s) {
                const o = Gt(),
                  a = jt(o, e);
                return il(
                  o,
                  nl(o, e)
                    ? (function (e, t, n, i, r, s, o, a, l) {
                        const u = t + n;
                        return eo(e, u, r, s, o, a)
                          ? Qs(
                              e,
                              u + 4,
                              l ? i.call(l, r, s, o, a) : i(r, s, o, a)
                            )
                          : Ka(e, u + 4);
                      })(o, rn(), t, a.transform, n, i, r, s, a)
                    : a.transform(n, i, r, s)
                );
              })(2, 1, e.review.date, "d MMM yyyy", void 0, "ru")
            );
        }
      }
      function fd(e, t) {
        1 & e && (uo(0, "meta", 35), el(1, "date")),
          2 & e && so("content", tl(1, 1, vo(3).review.date, "dd-MM-yyyy"));
      }
      function gd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 13),
            no(1, ad, 4, 2, "div", 14),
            ao(2, "div", 15),
            no(3, hd, 5, 3, "div", 16),
            no(4, dd, 3, 1, "div", 17),
            no(5, pd, 3, 6, "div", 18),
            no(6, fd, 2, 4, "meta", 19),
            lo(),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            so("ngIf", e.customSettings.isShowUserImage),
            nr(2),
            so("ngIf", e.review.rating && e.customSettings.isShowReviewRating),
            nr(1),
            so("ngIf", e.customSettings.isShowUserName),
            nr(1),
            so("ngIf", e.customSettings.isShowReviewDate && e.review.date),
            nr(1),
            so("ngIf", e.customSettings.isShowReviewDate && e.review.date);
        }
      }
      function md(e, t) {
        if ((1 & e && uo(0, "img", 41), 2 & e)) {
          const e = t.$implicit,
            n = vo(4);
          so("src", e, Fi)("alt", n.review.message);
        }
      }
      function wd(e, t) {
        if (
          (1 & e && (ao(0, "div"), no(1, md, 1, 2, "img", 40), lo()), 2 & e)
        ) {
          const e = vo(3);
          nr(1), so("ngForOf", e.review.images);
        }
      }
      function vd(e, t) {
        if ((1 & e && (uo(0, "p", 42), el(1, "ellipsis")), 2 & e)) {
          const e = vo(3);
          so(
            "innerHTML",
            tl(
              1,
              1,
              e.review.message,
              +e.customSettings.reviewShortLength || 220
            ),
            Li
          );
        }
      }
      function yd(e, t) {
        1 & e && uo(0, "p", 42),
          2 & e && so("innerHTML", vo(3).review.message, Li);
      }
      function _d(e, t) {
        if (1 & e) {
          const e = po();
          ao(0, "div", 43),
            go("click", function () {
              return Qt(e), vo(3).readMore();
            }),
            Qo(1),
            lo();
        }
        if (2 & e) {
          const e = vo(3);
          nr(1),
            Xo(
              e.isMore
                ? "\u0421\u043a\u0440\u044b\u0442\u044c"
                : "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"
            );
        }
      }
      function bd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 36),
            no(1, wd, 2, 1, "div", 37),
            no(2, vd, 2, 4, "p", 38),
            no(3, yd, 1, 1, "p", 38),
            no(4, _d, 2, 1, "div", 39),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            so("ngIf", e.review.images && e.review.images.length),
            nr(1),
            so("ngIf", !e.isMore),
            nr(1),
            so("ngIf", e.isMore),
            nr(1),
            so(
              "ngIf",
              (null == e.review.message ? null : e.review.message.length) >
                (+e.customSettings.reviewShortLength || 220) + 1
            );
        }
      }
      function xd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 44),
            ao(1, "a", 45),
            el(2, "sourceLink"),
            Qo(3),
            lo(),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            so(
              "href",
              (function (e, t, n) {
                const i = Gt(),
                  r = jt(i, 2);
                return il(
                  i,
                  nl(i, 2) ? Ja(i, rn(), 2, r.transform, n, r) : r.transform(n)
                );
              })(
                0,
                0,
                e.review.type === e.ReviewTypeE.yaMarket ||
                  e.review.type === e.ReviewTypeE.yaSprav ||
                  e.review.type === e.ReviewTypeE.googleMap
                  ? e.source
                  : e.review.src
              ),
              Fi
            ),
            nr(2),
            Ko(
              " \u041e\u0442\u0437\u044b\u0432 \u0438\u0437 ",
              e.ReviewTypeNamePluralE[e.review.type],
              " "
            );
        }
      }
      function Cd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 1),
            uo(1, "meta", 2),
            ao(2, "div", 3),
            uo(3, "meta", 4),
            uo(4, "meta", 5),
            no(5, id, 3, 2, "div", 6),
            uo(6, "meta", 2),
            lo(),
            no(7, gd, 7, 5, "div", 7),
            no(8, bd, 5, 4, "div", 8),
            no(9, xd, 4, 4, "div", 9),
            lo()),
          2 & e)
        ) {
          const e = vo();
          nr(1),
            so("content", e.project),
            nr(4),
            so("ngIf", e.averageRatings),
            nr(1),
            so("content", e.project),
            nr(1),
            so(
              "ngIf",
              e.customSettings.isShowUserImage ||
                e.customSettings.isShowReviewRating ||
                e.customSettings.isShowUserName
            ),
            nr(1),
            so("ngIf", e.customSettings.isShowTextMessage),
            nr(1),
            so("ngIf", e.customSettings.isShowReviewSource);
        }
      }
      let Sd = (() => {
        class e {
          constructor() {
            (this.ReviewTypeNamePluralE = ed.ReviewTypeNamePluralE),
              (this.ReviewTypeE = ed.ReviewTypeE),
              (this.colors = [
                "#8585CC",
                "#5798D9",
                "#B37DB3",
                "#5798D9",
                "#B37DB3",
                "#50C0E6",
                "#6CA632",
                "#F29D61",
                "#F285AA",
              ]),
              (this.isMore = !1);
          }
          ngOnInit() {
            this.color =
              this.colors[Math.floor(Math.random() * this.colors.length)];
          }
          readMore() {
            this.isMore = !this.isMore;
          }
          getAvatarLetters(e) {
            return (e || "")
              .split(" ")
              .map((e) => e[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = lt({
            type: e,
            selectors: [["widget-review"]],
            inputs: {
              review: "review",
              source: "source",
              project: "project",
              averageRatings: "averageRatings",
              reviewsCount: "reviewsCount",
              customSettings: "customSettings",
            },
            decls: 1,
            vars: 1,
            consts: [
              [
                "class",
                "review",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/Review",
                4,
                "ngIf",
              ],
              [
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/Review",
                1,
                "review",
              ],
              ["itemprop", "name", 3, "content"],
              [
                "itemprop",
                "itemReviewed",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/Organization",
              ],
              ["itemprop", "address", "content", ""],
              ["itemprop", "telephone", "content", ""],
              [
                "itemprop",
                "aggregateRating",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/AggregateRating",
                4,
                "ngIf",
              ],
              ["class", "review__header", 4, "ngIf"],
              ["class", "review__body", "itemprop", "reviewBody", 4, "ngIf"],
              ["class", "review__footer", 4, "ngIf"],
              [
                "itemprop",
                "aggregateRating",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/AggregateRating",
              ],
              ["itemprop", "ratingValue", 3, "content"],
              ["itemprop", "reviewCount", 3, "content"],
              [1, "review__header"],
              ["class", "review__header-left", 4, "ngIf"],
              [1, "review__header-right"],
              [
                "class",
                "review__rating",
                "itemprop",
                "reviewRating",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/Rating",
                4,
                "ngIf",
              ],
              [
                "class",
                "review__title",
                "itemprop",
                "author",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/Person",
                4,
                "ngIf",
              ],
              ["class", "review__date", 4, "ngIf"],
              ["itemprop", "datePublished", 3, "content", 4, "ngIf"],
              [1, "review__header-left"],
              [
                "class",
                "review__photo",
                "alt",
                "avatar",
                3,
                "src",
                4,
                "ngIf",
                "ngIfElse",
              ],
              ["defaultAvatar", ""],
              ["alt", "avatar", 1, "review__photo", 3, "src"],
              [1, "review__avatar"],
              [
                "itemprop",
                "reviewRating",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/Rating",
                1,
                "review__rating",
              ],
              ["itemprop", "worstRating", "content", "1"],
              ["itemprop", "bestRating", "content", "5"],
              [4, "ngFor", "ngForOf"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "enable-background",
                "new 0 0 24 24",
                "height",
                "24",
                "viewBox",
                "0 0 24 24",
                "width",
                "24",
                1,
                "icon",
                3,
                "ngClass",
              ],
              ["fill", "none", "height", "24", "width", "24", "x", "0"],
              [
                "points",
                "14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10",
              ],
              [
                "itemprop",
                "author",
                "itemscope",
                "",
                "itemtype",
                "https://schema.org/Person",
                1,
                "review__title",
              ],
              ["itemprop", "name"],
              [1, "review__date"],
              ["itemprop", "datePublished", 3, "content"],
              ["itemprop", "reviewBody", 1, "review__body"],
              [4, "ngIf"],
              ["class", "review__text", 3, "innerHTML", 4, "ngIf"],
              ["class", "review__more", 3, "click", 4, "ngIf"],
              [
                "class",
                "review__image",
                3,
                "src",
                "alt",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "review__image", 3, "src", "alt"],
              [1, "review__text", 3, "innerHTML"],
              [1, "review__more", 3, "click"],
              [1, "review__footer"],
              [
                "target",
                "_blank",
                "itemprop",
                "url",
                "rel",
                "nofollow",
                1,
                "review__src",
                3,
                "href",
              ],
            ],
            template: function (e, t) {
              1 & e && no(0, Cd, 10, 6, "div", 0),
                2 & e && so("ngIf", t.review);
            },
            directives: [ec, Ku, Qu],
            pipes: [rc, td, nd],
            styles: [
              "widget-review .review{height:100%;padding:24px 16px;position:relative;display:flex;flex-direction:column;border-radius:15px;box-shadow:0 6px 10px rgba(0,0,0,.2);background-color:#fff;transition:box-shadow .15s}widget-review .review:hover{box-shadow:0 6px 10px rgba(0,0,0,.4)}widget-review .review__header{display:flex;align-items:center}widget-review .review__header-left{margin-right:12px}widget-review .review__avatar,widget-review .review__photo{height:48px;width:48px;min-width:48px;max-width:48px;display:block;border-radius:50%}widget-review .review__avatar{display:flex;align-items:center;justify-content:center;font-size:18px;color:#fff}widget-review .review__rating{display:flex;position:relative;left:-4px}widget-review .review__rating .icon{height:24px;width:24px;fill:rgba(43,43,43,.3)}widget-review .review__rating .icon_active{fill:#ffd426}widget-review .review__rating+.review__title{margin-top:2px}widget-review .review__title{grid-area:title;word-break:break-word;font-weight:700}widget-review .review__body{margin-top:10px;overflow:hidden;flex-grow:1}widget-review .review__body p{font-size:inherit;font-weight:inherit;line-height:inherit}widget-review .review__image{display:block;max-width:100%;height:auto;margin:0 auto 5px}widget-review .review__text{line-height:140%;color:#333}widget-review .review__text_mobile{display:none}@media (max-width:767px){widget-review .review__text_mobile{display:block}}@media (max-width:767px){widget-review .review__text_desktop{display:none}}widget-review .review__footer{margin-top:16px}widget-review .review__more{margin-top:4px;color:rgba(43,43,43,.8);font-weight:700;cursor:pointer;transition:color .15s}widget-review .review__more:hover{color:#2b2b2b}widget-review .review__src{color:rgba(43,43,43,.6)!important;text-decoration:underline!important;font-size:13px;transition:color .15s}widget-review .review__src:hover{color:#2b2b2b!important}widget-review .review__date{color:rgba(43,43,43,.6);font-size:13px;line-height:160%}",
            ],
            encapsulation: 2,
          })),
          e
        );
      })();
      const Ed = ["widgetCarousel"];
      function Td(e, t) {
        if (
          (1 & e &&
            (ao(0, "span"),
            ao(1, "span", 11),
            Qo(2),
            el(3, "number"),
            lo(),
            lo()),
          2 & e)
        ) {
          const e = vo().$implicit,
            t = vo(3);
          nr(2),
            Ko(
              " ",
              tl(
                3,
                1,
                "all" === e.type ? t.averageRatings : t.ratings[e.type],
                "1.1-1"
              ),
              " "
            );
        }
      }
      const kd = function (e) {
        return { widget__tab_active: e };
      };
      function Id(e, t) {
        if (1 & e) {
          const e = po();
          co(0),
            ao(1, "div", 9),
            go("click", function () {
              Qt(e);
              const n = t.$implicit;
              return vo(3).changeTab(n.type);
            }),
            uo(2, "span", 10),
            Qo(3),
            no(4, Td, 4, 4, "span", 3),
            lo(),
            ho();
        }
        if (2 & e) {
          const e = t.$implicit,
            n = vo(3);
          nr(1),
            so("className", "widget__tab_" + e.type)(
              "ngClass",
              Xa(6, kd, e.type === n.tabActive)
            ),
            nr(1),
            Fo(n.getIcon(e.type)),
            nr(1),
            Ko(" ", e.title, " "),
            nr(1),
            so(
              "ngIf",
              n.hasRatings &&
                (null == n.customSettings
                  ? null
                  : n.customSettings.isShowSectionsRating)
            );
        }
      }
      function Ad(e, t) {
        if (
          (1 & e &&
            (ao(0, "a", 12),
            Qo(
              1,
              " \u0421\u0434\u0435\u043b\u0430\u043d\u043e \u043d\u0430 ReviewLab "
            ),
            lo()),
          2 & e)
        ) {
          const e = vo(3);
          ta(
            "widget__src widget__src--desktop widget__src--desktop-",
            null == e.customSettings ? null : e.customSettings.reviewLayout,
            ""
          );
        }
      }
      function Rd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div"),
            ao(1, "div", 7),
            no(2, Id, 5, 8, "ng-container", 8),
            lo(),
            no(3, Ad, 2, 3, "a", 5),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          ta(
            "widget__header ",
            null == e.customSettings ? null : e.customSettings.reviewLayout,
            ""
          ),
            nr(2),
            so("ngForOf", e.tabs),
            nr(1),
            so(
              "ngIf",
              !1 === (null == e.widget ? null : e.widget.hideWatermark)
            );
        }
      }
      const Md = function () {
          return [
            "\u043e\u0442\u0437\u044b\u0432",
            "\u043e\u0442\u0437\u044b\u0432\u0430",
            "\u043e\u0442\u0437\u044b\u0432\u043e\u0432",
          ];
        },
        Dd = function () {
          return [
            "\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430",
            "\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432",
            "\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432",
          ];
        };
      function Nd(e, t) {
        if ((1 & e && (co(0), ao(1, "span"), Qo(2), lo(), ho()), 2 & e)) {
          const e = vo(3);
          nr(2),
            ea(
              " \u0412\u0441\u0435\u0433\u043e ",
              e.reviews.length,
              " ",
              e.plural(e.reviews.length, Qa(4, Md)),
              " \u0438\u0437 ",
              e.types.length,
              " ",
              e.plural(e.types.length, Qa(5, Dd)),
              " "
            );
        }
      }
      function Od(e, t) {
        if (
          (1 & e &&
            (ao(0, "span", 15),
            xn(),
            ao(1, "svg", 16),
            ao(2, "g"),
            uo(3, "rect", 17),
            uo(4, "polygon", 18),
            lo(),
            lo(),
            Qo(5),
            el(6, "number"),
            lo()),
          2 & e)
        ) {
          const e = vo(4);
          nr(5), Ko(" ", tl(6, 1, e.ratings[e.tabActive], "1.1-1"), " ");
        }
      }
      function Pd(e, t) {
        if (
          (1 & e &&
            (co(0),
            no(1, Od, 7, 4, "span", 14),
            ao(2, "span"),
            Qo(3),
            lo(),
            ho()),
          2 & e)
        ) {
          const e = vo(3);
          nr(1),
            so(
              "ngIf",
              e.ratings[e.ReviewTypeE[e.tabActive]] &&
                (null == e.customSettings
                  ? null
                  : e.customSettings.isShowSectionsRating)
            ),
            nr(2),
            Jo(
              " ",
              e.counts[e.tabActive] || 0,
              " ",
              e.plural(e.counts[e.tabActive], Qa(4, Md)),
              " \u0438\u0437 ",
              e.ReviewTypeNamePluralE[e.tabActive],
              " "
            );
        }
      }
      function Ld(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 13),
            no(1, Nd, 3, 6, "ng-container", 3),
            no(2, Pd, 4, 5, "ng-container", 3),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            so("ngIf", "all" === e.tabActive),
            nr(1),
            so("ngIf", "all" !== e.tabActive);
        }
      }
      function Fd(e, t) {
        if ((1 & e && uo(0, "widget-review", 22), 2 & e)) {
          const e = vo().$implicit,
            t = vo(3);
          so("review", e)("project", t.widget.title)(
            "averageRatings",
            t.averageRatings
          )("source", t.widget[e.type])(
            "reviewsCount",
            t.getTotalReviewsCount()
          )("customSettings", t.customSettings);
        }
      }
      function jd(e, t) {
        if (
          (1 & e && (co(0), no(1, Fd, 1, 6, "widget-review", 21), ho()), 2 & e)
        ) {
          const e = t.$implicit;
          nr(1), so("ngIf", e);
        }
      }
      function Hd(e, t) {
        if (1 & e) {
          const e = po();
          ao(0, "div", 23),
            go("click", function () {
              return Qt(e), vo(3).nextPage();
            }),
            Qo(1, "\u0415\u0449\u0451 \u043e\u0442\u0437\u044b\u0432\u044b"),
            lo();
        }
      }
      function Vd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div"),
            ao(1, "div"),
            no(2, jd, 2, 1, "ng-container", 8),
            el(3, "slice"),
            lo(),
            ao(4, "div", 19),
            no(5, Hd, 2, 0, "div", 20),
            lo(),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            ta(
              "widget__layout ",
              null == e.customSettings ? null : e.customSettings.reviewLayout,
              ""
            ),
            nr(1),
            so(
              "ngForOf",
              (function (e, t, n, i, r) {
                const s = Gt(),
                  o = jt(s, e);
                return il(
                  s,
                  nl(s, e)
                    ? (function (e, t, n, i, r, s, o, a) {
                        const l = t + n;
                        return Js(e, l, r, s, o)
                          ? Qs(e, l + 3, a ? i.call(a, r, s, o) : i(r, s, o))
                          : Ka(e, l + 3);
                      })(s, rn(), t, o.transform, n, i, r, o)
                    : o.transform(n, i, r)
                );
              })(3, 5, e.reviews, 0, e.showReviewsCount)
            ),
            nr(3),
            so("ngIf", e.hasNextPage());
        }
      }
      function zd(e, t) {
        if ((1 & e && uo(0, "widget-review", 35), 2 & e)) {
          const e = vo().$implicit,
            t = vo(3);
          so("review", e)("project", t.widget.title)(
            "source",
            t.widget[e.type]
          )("averageRatings", t.averageRatings)(
            "reviewsCount",
            t.getTotalReviewsCount()
          )("customSettings", t.customSettings);
        }
      }
      function $d(e, t) {
        if (
          (1 & e &&
            (ao(0, "ngu-tile"), no(1, zd, 1, 6, "widget-review", 34), lo()),
          2 & e)
        ) {
          const e = t.$implicit;
          nr(1), so("ngIf", e);
        }
      }
      function Bd(e, t) {
        if (1 & e) {
          const e = po();
          co(0),
            ao(1, "li", 36),
            go("click", function () {
              Qt(e);
              const n = t.index;
              return vo(), io(1).moveTo(n);
            }),
            lo(),
            ho();
        }
        if (2 & e) {
          const e = t.index;
          vo();
          const n = io(1);
          nr(1),
            Lo(
              "widget__point_none",
              e <= n.activePoint - 3 || e >= n.activePoint + 3
            )(
              "widget__point_tran",
              e === n.activePoint - 2 || e === n.activePoint + 2
            )(
              "widget__point_half",
              e === n.activePoint - 1 || e === n.activePoint + 1
            )("widget__point_active", e === n.activePoint);
        }
      }
      function Ud(e, t) {
        if (1 & e) {
          const e = po();
          ao(0, "ngu-carousel", 24, 25),
            go("onMove", function (t) {
              return Qt(e), vo(2).onCarouselMove(t);
            }),
            no(2, $d, 2, 1, "ngu-tile", 26),
            ao(3, "ul", 27),
            no(4, Bd, 2, 8, "ng-container", 8),
            lo(),
            ao(5, "div", 28),
            xn(),
            ao(6, "svg", 29),
            uo(7, "path", 30),
            uo(8, "path", 31),
            lo(),
            lo(),
            (qt.lFrame.currentNamespace = null),
            ao(9, "div", 32),
            xn(),
            ao(10, "svg", 29),
            uo(11, "path", 30),
            uo(12, "path", 33),
            lo(),
            lo(),
            lo();
        }
        if (2 & e) {
          const e = io(1),
            t = vo(2);
          so("inputs", t.widgetCarouselConfig)("dataSource", t.reviews),
            nr(4),
            so("ngForOf", e.pointNumbers);
        }
      }
      function Wd(e, t) {
        if (
          (1 & e &&
            (ao(0, "a", 12),
            Qo(
              1,
              " \u0421\u0434\u0435\u043b\u0430\u043d\u043e \u043d\u0430 ReviewLab "
            ),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          ta(
            "widget__src widget__src--mobile widget__src--mobile-",
            null == e.customSettings ? null : e.customSettings.reviewLayout,
            ""
          );
        }
      }
      function qd(e, t) {
        if ((1 & e && (co(0), ao(1, "span"), Qo(2), lo(), ho()), 2 & e)) {
          const e = vo(3);
          nr(2),
            ea(
              " \u0412\u0441\u0435\u0433\u043e ",
              e.reviews.length,
              " ",
              e.plural(e.reviews.length, Qa(4, Md)),
              " \u0438\u0437 ",
              e.types.length,
              " ",
              e.plural(e.types.length, Qa(5, Dd)),
              " "
            );
        }
      }
      function Zd(e, t) {
        if (
          (1 & e &&
            (ao(0, "span", 15),
            xn(),
            ao(1, "svg", 16),
            ao(2, "g"),
            uo(3, "rect", 17),
            uo(4, "polygon", 18),
            lo(),
            lo(),
            Qo(5),
            el(6, "number"),
            lo()),
          2 & e)
        ) {
          const e = vo(4);
          nr(5),
            Ko(
              " ",
              tl(6, 1, e.ratings[e.ReviewTypeE[e.tabActive]], "1.1-1"),
              " "
            );
        }
      }
      function Gd(e, t) {
        if (
          (1 & e &&
            (co(0),
            no(1, Zd, 7, 4, "span", 14),
            ao(2, "span"),
            Qo(3),
            lo(),
            ho()),
          2 & e)
        ) {
          const e = vo(3);
          nr(1),
            so(
              "ngIf",
              e.ratings[e.ReviewTypeE[e.tabActive]] &&
                (null == e.customSettings
                  ? null
                  : e.customSettings.isShowSectionsRating)
            ),
            nr(2),
            Jo(
              " ",
              e.counts[e.tabActive] || 0,
              " ",
              e.plural(e.counts[e.tabActive], Qa(4, Md)),
              " \u0438\u0437 ",
              e.ReviewTypeNamePluralE[e.tabActive],
              " "
            );
        }
      }
      function Yd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div", 13),
            no(1, qd, 3, 6, "ng-container", 3),
            no(2, Gd, 4, 5, "ng-container", 3),
            lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            so("ngIf", "all" === e.tabActive),
            nr(1),
            so("ngIf", "all" !== e.tabActive);
        }
      }
      function Qd(e, t) {
        if (
          (1 & e && (ao(0, "div", 37), ao(1, "a", 38), Qo(2), lo(), lo()),
          2 & e)
        ) {
          const e = vo(2);
          nr(1),
            xo("href", e.customSettings.leaveReviewLink, Fi),
            nr(1),
            Xo(e.customSettings.leaveReviewText);
        }
      }
      function Xd(e, t) {
        if (
          (1 & e &&
            (ao(0, "div"),
            no(1, Rd, 4, 5, "div", 1),
            no(2, Ld, 3, 2, "div", 2),
            no(3, Vd, 6, 9, "div", 3),
            no(4, Ud, 13, 3, "ngu-carousel", 4),
            no(5, Wd, 2, 3, "a", 5),
            ao(6, "div"),
            no(7, Yd, 3, 2, "div", 2),
            no(8, Qd, 3, 2, "div", 6),
            lo(),
            lo()),
          2 & e)
        ) {
          const e = vo();
          Fo(
            "max-width: " +
              (null == e.customSettings
                ? null
                : e.customSettings.containerWidth)
          ),
            (n = "widget "),
            (i = "widget-" + e.widgetID),
            (r = " "),
            (s =
              null == e.customSettings ? null : e.customSettings.reviewLayout),
            (o = ""),
            Vo(
              et,
              Ho,
              (function (e, t, n, i, r, s) {
                const o = Ks(e, sn(), n, r);
                return an(2), o ? t + Fn(n) + i + Fn(r) + s : Xi;
              })(Gt(), n, i, r, s, o),
              !0
            ),
            nr(1),
            so("ngIf", e.ratings),
            nr(1),
            so(
              "ngIf",
              e.reviews &&
                e.types &&
                (null == e.customSettings
                  ? null
                  : e.customSettings.isShowCommonReviewAmount)
            ),
            nr(1),
            so(
              "ngIf",
              (null == e.customSettings
                ? null
                : e.customSettings.reviewLayout) !== e.ReviewLayoutE.carousel
            ),
            nr(1),
            so(
              "ngIf",
              (null == e.customSettings
                ? null
                : e.customSettings.reviewLayout) === e.ReviewLayoutE.carousel
            ),
            nr(1),
            so(
              "ngIf",
              !1 === (null == e.widget ? null : e.widget.hideWatermark)
            ),
            nr(1),
            ta(
              "widget__footer ",
              null == e.customSettings ? null : e.customSettings.reviewLayout,
              ""
            ),
            nr(1),
            so(
              "ngIf",
              e.reviews &&
                e.types &&
                (null == e.customSettings
                  ? null
                  : e.customSettings.isShowCommonReviewAmount)
            ),
            nr(1),
            so(
              "ngIf",
              (null == e.customSettings
                ? null
                : e.customSettings.leaveReviewLink) &&
                (null == e.customSettings
                  ? null
                  : e.customSettings.leaveReviewText)
            );
        }
        var n, i, r, s, o;
      }
      let Kd = (() => {
        class e {
          constructor(e, t) {
            (this._widgets = e),
              (this._changeDetector = t),
              (this.ReviewTypeE = ed.ReviewTypeE),
              (this.ReviewLayoutE = ed.ReviewLayoutE),
              (this.ReviewTypeNamePluralE = ed.ReviewTypeNamePluralE),
              (this.showReviewsCount = 0),
              (this.reviewsPageSize = 5),
              (this.startReviewCount = 5),
              (this.reviews = []),
              (this.tabs = [
                {
                  title:
                    "\u0412\u0441\u0435 \u043e\u0442\u0437\u044b\u0432\u044b",
                  type: "all",
                },
              ]),
              (this.tabActive = "all");
          }
          set widgetCarousel(e) {
            !this._widgetCarousel &&
              e &&
              ((this.reviewsPageSize = e.load), this.loadReviews(0, e.load)),
              (this._widgetCarousel = e);
          }
          ngOnInit() {
            const e = document.querySelector("review-lab");
            (this.widgetID = e.getAttribute("data-widgetID")),
              (this.isApp = !1),
              this.initReviews();
          }
          ngOnDestroy() {
            this.destroyCustomStyles();
          }
          destroyCustomStyles() {
            const e = document.getElementById("custom_style_for_widget");
            e && e.remove();
          }
          setCustomStyles() {
            const e = (this.widget.customStyles || "")
              .split("}")
              .map((e) => e.split("{"))
              .map((e) => {
                const t = e.findIndex((e) => !e.includes("@media"));
                return (
                  t > -1 &&
                    !/^[\t\r\n]+$/.test(e[t]) &&
                    e[t] &&
                    (e[t] = `.widget-${this.widgetID} ` + e[t]),
                  e.join("{")
                );
              })
              .join("} ");
            this.parseStyles(e);
          }
          parseStyles(e) {
            this.destroyCustomStyles();
            const t = document.head || document.getElementsByTagName("head")[0],
              n = document.createElement("style");
            (n.id = "custom_style_for_widget"),
              n.appendChild(document.createTextNode(e)),
              t.appendChild(n);
          }
          initReviews() {
            this._widgets.getWidget(this.widgetID, !this.isApp).subscribe(
              (e) => {
                switch (
                  ((this.widget = e.widget),
                  this.setCustomStyles(),
                  (this.customSettings = new ed.CustomSettingsModel(
                    this.widget.customSettings || "{}"
                  )),
                  this.customSettings.reviewLayout ===
                    ed.ReviewLayoutE.carousel &&
                    ((this.widgetCarouselConfig = {
                      grid: { xs: 1, sm: 2, md: 2, lg: 4, all: 0 },
                      speed: 250,
                      point: { visible: !0, hideOnSingleSlide: !0 },
                      load: 1,
                      velocity: 0,
                      touch: !0,
                      easing: "cubic-bezier(0, 0, 0.2, 1)",
                    }),
                    this.customSettings.isCarouselLoop &&
                      (this.widgetCarouselConfig.loop =
                        this.customSettings.isCarouselLoop),
                    this.customSettings.isCarouselAutoplay &&
                      (this.widgetCarouselConfig.interval = {
                        timing:
                          +this.customSettings.carouselSlideIntervalAutoplay,
                        initialDelay: 1e3,
                      })),
                  this.customSettings.reviewLayout)
                ) {
                  case ed.ReviewLayoutE.grid:
                    this.startReviewCount = 10;
                    break;
                  case ed.ReviewLayoutE.column:
                    this.startReviewCount = 5;
                }
                (this.showReviewsCount = this.startReviewCount),
                  (this.ratings = e.ratings);
                const t = Object.keys(this.ratings).filter(
                  (e) => this.ratings[e]
                );
                (this.hasRatings = !!t.length),
                  (this.averageRatings =
                    t.reduce((e, t) => e + this.ratings[t], 0) /
                    (t.length || 1)),
                  (this.types = e.types.filter((e) => ed.ReviewTypeNameE[e])),
                  (this.counts = e.counts),
                  e.types.forEach((e) => {
                    ed.ReviewTypeE[e] &&
                      ed.ReviewTypeNameE[e] &&
                      this.tabs.push({ title: ed.ReviewTypeNameE[e], type: e });
                  }),
                  (this.reviews = new Array(this.getTotalReviewsCount())),
                  this.customSettings.reviewLayout !==
                    ed.ReviewLayoutE.carousel &&
                    this.loadReviews(0, this.showReviewsCount),
                  this._changeDetector.detectChanges();
              },
              (e) => {
                this.responseError = e;
              }
            );
          }
          loadReviews(e, t) {
            const n = e < 0 ? 0 : e;
            this.getReviews(this.tabActive, n, t).subscribe((e) => {
              this.insertReviews(e, n);
            });
          }
          getReviews(e, t, n) {
            const i = { skip: t, limit: n };
            return (
              "all" !== e && (i.type = e),
              this._widgets.getReviews(this.widgetID, i, !this.isApp)
            );
          }
          insertReviews(e, t) {
            for (let n = 0; n < e.length; n++) this.reviews[t + n] = e[n];
            this._changeDetector.detectChanges();
          }
          onCarouselMove(e) {
            const t = e.currentSlide;
            if (t)
              for (let n = 0; n < this._widgetCarousel.load; ++n)
                if (
                  !this.reviews[t + n] ||
                  ("all" !== this.tabActive &&
                    this.reviews[t + n].type !== this.tabActive)
                )
                  return void this.loadReviews(t, this._widgetCarousel.load);
          }
          changeTab(e) {
            this.getReviews(
              e,
              0,
              this.customSettings.reviewLayout === ed.ReviewLayoutE.carousel
                ? this._widgetCarousel.load
                : this.startReviewCount
            ).subscribe((t) => {
              (this.showReviewsCount = this.startReviewCount),
                (this.reviews.length =
                  "all" === e ? this.getTotalReviewsCount() : this.counts[e]),
                this.customSettings.reviewLayout ===
                  ed.ReviewLayoutE.carousel && this._widgetCarousel.moveTo(0),
                (this.tabActive = e),
                this.insertReviews(t, 0);
            });
          }
          getTotalReviewsCount() {
            return Object.values(this.counts).reduce((e, t) => e + t, 0);
          }
          nextPage() {
            this.loadReviews(this.showReviewsCount, this.reviewsPageSize),
              (this.showReviewsCount += this.reviewsPageSize),
              console.log(this.reviews);
          }
          hasNextPage() {
            return this.reviews.length - this.showReviewsCount > 0;
          }
          plural(e, t) {
            return e % 10 == 1 && e % 100 != 11
              ? t[0]
              : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
              ? t[1]
              : t[2];
          }
          getIcon(e) {
            return "all" === e
              ? null
              : `background-image: url(\https://app.reviewlab.ru/widget/assets/icons/${e}.${
                  "googleMap" === e ||
                  "yaMaps" === e ||
                  "yaSprav" === e ||
                  "doubleGis" === e
                    ? "svg"
                    : "png"
                })`;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(ro(Jh), ro(xs));
          }),
          (e.ɵcmp = lt({
            type: e,
            selectors: [["review-lab"]],
            viewQuery: function (e, t) {
              var n, i;
              1 & e && ((i = Ed), !0, wl(Yt(), Gt(), i, true, undefined, !1)),
                2 & e && gl((n = yl())) && (t.widgetCarousel = n.first);
            },
            decls: 1,
            vars: 1,
            consts: [
              [3, "style", "class", 4, "ngIf"],
              [3, "class", 4, "ngIf"],
              ["class", "widget__count", 4, "ngIf"],
              [4, "ngIf"],
              [3, "inputs", "dataSource", "onMove", 4, "ngIf"],
              [
                "href",
                "https://reviewlab.ru",
                "target",
                "_blank",
                3,
                "class",
                4,
                "ngIf",
              ],
              ["class", "widget__leave", 4, "ngIf"],
              [1, "widget__tabs"],
              [4, "ngFor", "ngForOf"],
              [1, "widget__tab", 3, "className", "ngClass", "click"],
              [1, "before"],
              [1, "widget__tab--rating"],
              ["href", "https://reviewlab.ru", "target", "_blank"],
              [1, "widget__count"],
              ["class", "widget__count--rating", 4, "ngIf"],
              [1, "widget__count--rating"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "enable-background",
                "new 0 0 24 24",
                "height",
                "24",
                "viewBox",
                "0 0 24 24",
                "width",
                "24",
                "fill",
                "#ffd426",
              ],
              ["fill", "none", "height", "24", "width", "24", "x", "0"],
              [
                "points",
                "14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10",
              ],
              [1, "widget__show-more-wr"],
              ["class", "widget__show-more", 3, "click", 4, "ngIf"],
              [
                "class",
                "widget__review",
                3,
                "review",
                "project",
                "averageRatings",
                "source",
                "reviewsCount",
                "customSettings",
                4,
                "ngIf",
              ],
              [
                1,
                "widget__review",
                3,
                "review",
                "project",
                "averageRatings",
                "source",
                "reviewsCount",
                "customSettings",
              ],
              [1, "widget__show-more", 3, "click"],
              [3, "inputs", "dataSource", "onMove"],
              ["widgetCarousel", ""],
              [4, "nguCarouselDef"],
              ["NguCarouselPoint", "", 1, "widget__points"],
              ["NguCarouselPrev", "", 1, "widget__pag", "widget__pag_prev"],
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "height",
                "24",
                "viewBox",
                "0 0 24 24",
                "width",
                "24",
                1,
                "icon",
              ],
              ["d", "M0 0h24v24H0z", "fill", "none"],
              ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],
              ["NguCarouselNext", "", 1, "widget__pag", "widget__pag_next"],
              ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],
              [
                "class",
                "widget__review",
                3,
                "review",
                "project",
                "source",
                "averageRatings",
                "reviewsCount",
                "customSettings",
                4,
                "ngIf",
              ],
              [
                1,
                "widget__review",
                3,
                "review",
                "project",
                "source",
                "averageRatings",
                "reviewsCount",
                "customSettings",
              ],
              [1, "widget__point", 3, "click"],
              [1, "widget__leave"],
              [
                "target",
                "_blank",
                1,
                "widget__src",
                "widget__leave-link",
                3,
                "href",
              ],
            ],
            template: function (e, t) {
              1 & e && no(0, Xd, 9, 16, "div", 0),
                2 & e && so("ngIf", t.reviews);
            },
            directives: [ec, Ku, Qu, Sd, Qh, Gh, Zh, qh, Wh, Xh],
            pipes: [sc, oc],
            styles: [
              'review-lab{width:100%;color:inherit;font-size:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}review-lab *{margin:0;padding:0;box-sizing:border-box}review-lab .ngucarousel{padding:0 calc(48px + 8px * 2);min-height:75px}@media (max-width:900px){review-lab .ngucarousel{padding:0}}review-lab .ngucarousel .ngu-touch-container{overflow:hidden}review-lab .ngucarousel .ngu-touch-container .ngucarousel-items{margin-top:24px;align-items:stretch}review-lab .ngucarousel .ngu-touch-container .ngucarousel-items .item{padding:8px}review-lab .ngucarousel .ngu-touch-container .ngucarousel-items .item .tile{height:100%;padding-bottom:20px;box-shadow:0 0 0 0 transparent}review-lab .widget{margin:0 auto}@media (max-width:900px){review-lab .widget{padding:8px}}review-lab .widget.column{max-width:550px}review-lab .widget__header{margin:0 calc(48px + 8px * 3);display:flex;justify-content:space-between;align-items:center}review-lab .widget__header.column{margin:0 auto}@media (max-width:900px){review-lab .widget__header{margin:0 4px}}review-lab .widget__tabs{display:flex;flex-wrap:wrap;border-radius:16px;background-color:rgba(43,43,43,.05);box-shadow:0 0 2px 4px rgba(43,43,43,.05)}@media (max-width:500px){review-lab .widget__tabs{flex-wrap:nowrap;overflow:auto}review-lab .widget__tabs::-webkit-scrollbar-track{border-radius:0}review-lab .widget__tabs::-webkit-scrollbar{width:0}review-lab .widget__tabs::-webkit-scrollbar-thumb{border-radius:0;background-color:transparent}review-lab .widget__tabs:hover::-webkit-scrollbar-thumb{background-color:transparent}}review-lab .widget__tab{padding:8px 16px;position:relative;cursor:pointer;border-radius:16px;transition:background-color .15s}@media (max-width:330px){review-lab .widget__tab{padding:8px 12px}}review-lab .widget__tab:hover{background-color:rgba(43,43,43,.05)}review-lab .widget__tab_active{cursor:default;background-color:#fff}review-lab .widget__tab_active:hover{background-color:#fff}review-lab .widget__tab_all{min-width:94px;display:flex;align-items:center}@media (max-width:900px){review-lab .widget__tab_all{padding:8px}}review-lab .widget__tab .before{content:"";position:absolute;top:50%;left:12px;transform:translateY(-50%);background-position:50%;background-size:cover}review-lab .widget__tab--rating{display:inline-block;font-weight:700;margin-left:3px}@media (max-width:900px){review-lab .widget__tab--rating{display:none}}@media (max-width:900px){review-lab .widget__tab_doubleGis,review-lab .widget__tab_googleMap,review-lab .widget__tab_instagram,review-lab .widget__tab_vkontakte,review-lab .widget__tab_yaMarket,review-lab .widget__tab_yaSprav{padding:8px 0;font-size:0}review-lab .widget__tab_doubleGis .before,review-lab .widget__tab_googleMap .before,review-lab .widget__tab_instagram .before,review-lab .widget__tab_vkontakte .before,review-lab .widget__tab_yaMarket .before,review-lab .widget__tab_yaSprav .before{left:50%;transform:translate(-50%,-50%)}}review-lab .widget__tab_doubleGis,review-lab .widget__tab_googleMap,review-lab .widget__tab_yaMarket,review-lab .widget__tab_yaSprav{padding:8px 16px 8px 40px}@media (max-width:900px){review-lab .widget__tab_doubleGis,review-lab .widget__tab_googleMap,review-lab .widget__tab_yaMarket,review-lab .widget__tab_yaSprav{padding:8px 0 8px 40px}}review-lab .widget__tab_yaMarket .before{height:20px;width:20px}review-lab .widget__tab_googleMap .before,review-lab .widget__tab_yaSprav .before{height:24px;width:24px}review-lab .widget__tab_doubleGis .before{height:32px;width:25px;left:10px}@media (max-width:900px){review-lab .widget__tab_doubleGis .before{left:50%}}review-lab .widget__tab_instagram,review-lab .widget__tab_vkontakte{padding:8px 8px 8px 42px}@media (max-width:900px){review-lab .widget__tab_instagram,review-lab .widget__tab_vkontakte{padding:8px 0 8px 40px}}review-lab .widget__tab_instagram .before,review-lab .widget__tab_vkontakte .before{height:24px;width:24px}review-lab .widget__count{display:none;color:#2b2b2b;line-height:24px}@media (max-width:900px){review-lab .widget__count{margin:12px 8px 0;display:flex;align-items:center}}review-lab .widget__count--rating{margin-right:12px;display:flex;flex-direction:row-reverse;align-items:center;font-weight:700}review-lab .widget__count--rating svg{margin-top:-4px}review-lab .widget__layout.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:15px;margin:20px calc(48px + 8px * 3) 0}@media (max-width:500px){review-lab .widget__layout.grid{grid-template-columns:1fr;margin:20px 0}}review-lab .widget__layout.grid .widget__review{max-width:none;margin:0 auto}review-lab .widget__layout.column{display:grid;grid-template-columns:1fr;gap:15px;margin:20px auto 0}review-lab .widget__layout.column .widget__review{max-width:none}review-lab .widget__show-more{cursor:pointer;margin-top:15px;position:relative;display:inline-block}review-lab .widget__show-more:after{content:"";height:1px;width:100%;position:absolute;bottom:-2px;left:0;border-bottom:1px dashed rgba(43,43,43,.65)!important}review-lab .widget__show-more-wr{text-align:center}review-lab .widget__review{height:100%;max-width:calc(25% - 16px);width:100%;transition:left .15s}review-lab .widget__pag{height:48px;width:48px;padding:8px;position:absolute;top:50%;z-index:150;transform:translateY(-50%);cursor:pointer;border-radius:50%;background-color:#fff;box-shadow:0 6px 10px rgba(0,0,0,.2);transition:box-shadow .15s}@media (max-width:900px){review-lab .widget__pag{display:none}}review-lab .widget__pag:active{background-color:rgba(43,43,43,.05)}review-lab .widget__pag:hover{box-shadow:0 0 0 2px rgba(43,43,43,.2)}review-lab .widget__pag:hover .icon{fill:rgba(43,43,43,.5)}review-lab .widget__pag .icon{height:100%;width:100%;fill:rgba(43,43,43,.3);transition:fill .15s}review-lab .widget__pag_prev{left:8px}review-lab .widget__pag_next{right:8px}review-lab .widget__points{margin:12px -2px 0;display:flex;align-items:center;justify-content:center;list-style:none}@media (max-width:900px){review-lab .widget__points{margin:0 -2px}}review-lab .widget__point{height:8px;width:8px;padding:0;margin:0 2px;border-radius:50%;background-color:rgba(43,43,43,.15);transition:opacity .25s linear,background-color .25s linear}review-lab .widget__point_active{background-color:rgba(43,43,43,.65)}review-lab .widget__point_none{display:none}review-lab .widget__point_tran{opacity:.3}review-lab .widget__point_half{opacity:.6}review-lab .widget__point:hover{opacity:.8}review-lab .widget__point:after,review-lab .widget__point:before{content:none!important}review-lab .widget__footer{margin:32px calc(48px + 8px * 3) 0;display:flex;align-items:center;justify-content:space-between}@media (max-width:900px){review-lab .widget__footer{margin:24px 4px 0;justify-content:center}}review-lab .widget__footer .widget__count{display:flex}@media (max-width:900px){review-lab .widget__footer .widget__count{display:none}}review-lab .widget__footer.column{margin:32px 0}review-lab .widget__src{width:-webkit-fit-content!important;width:-moz-fit-content!important;width:fit-content!important;display:block;position:relative;white-space:nowrap;margin-left:10px;color:rgba(43,43,43,.65)!important;text-decoration:none!important;transition:color .2s linear,border-color .2s linear}review-lab .widget__src:hover{color:#2b2b2b!important}review-lab .widget__src:hover:after{border-color:#2b2b2b!important}review-lab .widget__src:after{content:"";height:1px;width:100%;position:absolute;bottom:-2px;left:0;border-bottom:1px dashed rgba(43,43,43,.65)!important}@media (max-width:1024px){review-lab .widget__src--desktop{display:none}}review-lab .widget__src--desktop-column,review-lab .widget__src--mobile{display:none}@media (max-width:1024px){review-lab .widget__src--mobile{display:block;margin:15px auto 0}}review-lab .widget__src--mobile-column{display:block;margin:15px auto 0}review-lab .widget__leave-link{margin:auto}',
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          e
        );
      })();
      n("YguL");
      let Jd = (() => {
        class e {}
        return (
          (e.ɵmod = dt({ type: e, bootstrap: [Kd] })),
          (e.ɵinj = ue({
            factory: function (t) {
              return new (t || e)();
            },
            providers: [Jh],
            imports: [[Lc, wh, Kh]],
          })),
          e
        );
      })();
      (function () {
        if (hi)
          throw new Error("Cannot enable prod mode after platform setup.");
        ci = !1;
      })(),
        Oc()
          .bootstrapModule(Jd)
          .catch((e) => console.error(e));
    },
    eKXL: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    eLfi: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    ekE9: function (e, t, n) {
      "use strict";
      var i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, i) {
                void 0 === i && (i = n),
                  Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  });
              }
            : function (e, t, n, i) {
                void 0 === i && (i = n), (e[i] = t[n]);
              }),
        r =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var n in e)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(t, n) ||
                i(t, e, n);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        r(n("c9FL"), t),
        r(n("ZM9f"), t),
        r(n("gS51"), t),
        r(n("3Rp7"), t),
        r(n("en7R"), t),
        r(n("unj4"), t),
        r(n("AJ5D"), t),
        r(n("1D88"), t),
        r(n("tfzh"), t),
        r(n("MAYq"), t),
        r(n("zQ7z"), t),
        r(n("eLfi"), t),
        r(n("Oc93"), t),
        r(n("eKXL"), t),
        r(n("Bx8h"), t),
        r(n("K70k"), t),
        r(n("n2pZ"), t);
    },
    en7R: function (e, t, n) {
      "use strict";
      var i, r, s, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ReviewTypeNamePluralE =
          t.ReviewTypeNameE =
          t.ReviewLayoutE =
          t.ReviewTypeE =
          t.CustomSettingsModel =
            void 0),
        (t.CustomSettingsModel = class {
          constructor(e = "{}") {
            const t = JSON.parse(e);
            (this.isShowUserName =
              (!1 !== t.isShowUserName && !0 !== t.isShowUserName) ||
              t.isShowUserName),
              (this.isShowUserImage =
                (!1 !== t.isShowUserImage && !0 !== t.isShowUserImage) ||
                t.isShowUserImage),
              (this.isShowReviewRating =
                (!1 !== t.isShowReviewRating && !0 !== t.isShowReviewRating) ||
                t.isShowReviewRating),
              (this.isShowReviewSource =
                (!1 !== t.isShowReviewSource && !0 !== t.isShowReviewSource) ||
                t.isShowReviewSource),
              (this.isShowSectionsRating =
                (!1 !== t.isShowSectionsRating &&
                  !0 !== t.isShowSectionsRating) ||
                t.isShowSectionsRating),
              (this.isShowTextMessage =
                (!1 !== t.isShowTextMessage && !0 !== t.isShowTextMessage) ||
                t.isShowTextMessage),
              (this.isShowReviewDate =
                (!1 !== t.isShowReviewDate && !0 !== t.isShowReviewDate) ||
                t.isShowReviewDate),
              (this.reviewLayout = t.reviewLayout
                ? t.reviewLayout
                : i.carousel),
              (this.leaveReviewText = t.leaveReviewText
                ? t.leaveReviewText
                : "\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432"),
              (this.leaveReviewLink = t.leaveReviewLink
                ? t.leaveReviewLink
                : ""),
              (this.containerWidth = t.containerWidth
                ? t.containerWidth
                : "1200px"),
              (this.reviewShortLength = t.reviewShortLength
                ? t.reviewShortLength
                : "220"),
              (this.isShowCommonReviewAmount =
                (!1 !== t.isShowCommonReviewAmount &&
                  !0 !== t.isShowCommonReviewAmount) ||
                t.isShowCommonReviewAmount),
              (this.isCarouselLoop =
                (!1 === t.isCarouselLoop || !0 === t.isCarouselLoop) &&
                t.isCarouselLoop),
              (this.isCarouselAutoplay =
                (!1 === t.isCarouselAutoplay || !0 === t.isCarouselAutoplay) &&
                t.isCarouselAutoplay),
              (this.carouselNumberOfSlidesToMove =
                t.carouselNumberOfSlidesToMove || "4"),
              (this.carouselSlideIntervalAutoplay =
                t.carouselSlideIntervalAutoplay || "10000");
          }
        }),
        ((o = t.ReviewTypeE || (t.ReviewTypeE = {})).yaMarket = "yaMarket"),
        (o.yaSprav = "yaSprav"),
        (o.vkontakte = "vkontakte"),
        (o.instagram = "instagram"),
        (o.googleMap = "googleMap"),
        (o.doubleGis = "doubleGis"),
        (function (e) {
          (e.grid = "grid"), (e.carousel = "carousel"), (e.column = "column");
        })((i = t.ReviewLayoutE || (t.ReviewLayoutE = {}))),
        ((s = t.ReviewTypeNameE || (t.ReviewTypeNameE = {})).yaMarket =
          "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442"),
        (s.yaSprav =
          "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442\u044b"),
        (s.vkontakte =
          "\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),
        (s.instagram = "Instagram"),
        (s.googleMap = "Google Maps"),
        (s.doubleGis = "2\u0413\u0418\u0421"),
        ((r =
          t.ReviewTypeNamePluralE || (t.ReviewTypeNamePluralE = {})).yaMarket =
          "\u042f\u043d\u0434\u0435\u043a\u0441.\u041c\u0430\u0440\u043a\u0435\u0442\u0430"),
        (r.yaSprav =
          "\u042f\u043d\u0434\u0435\u043a\u0441.\u041a\u0430\u0440\u0442"),
        (r.vkontakte =
          "\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435"),
        (r.instagram = "Instagram"),
        (r.googleMap = "Google"),
        (r.doubleGis = "2\u0413\u0418\u0421");
    },
    gS51: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    kJkW: function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = "kJkW");
    },
    n2pZ: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    tfzh: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    unj4: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    zQ7z: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
  },
  [[0, 0]],
]);
