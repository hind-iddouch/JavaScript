"use strict";
function kgTolbs(weight) {
    if (typeof weight == 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgTolbs(10);
kgTolbs('10kg');
//# sourceMappingURL=index.js.map