"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = (fn, delayTme) => {
    let lastRun = Date.now();
    return (...args) => {
        return new Promise((resolve, reject) => {
            const nextRun = Math.max(Date.now(), lastRun) + delayTme;
            const nextRunDelay = nextRun - Date.now();
            lastRun = nextRun;
            setTimeout(() => {
                const res = fn(...args);
                if (res instanceof Promise)
                    res.then(resolve, reject);
                else
                    resolve(res);
            }, nextRunDelay);
        });
    };
};
//# sourceMappingURL=delay.js.map