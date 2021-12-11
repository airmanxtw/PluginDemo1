const numberFormat = function (val, c, d, t) {
    var n = val,
        c1 = isNaN(c = Math.abs(c)) ? 2 : c,
        d1 = d == undefined ? "." : d,
        t1 = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t1) + (c1 ? d1 + Math.abs(n - i).toFixed(c1).slice(2) : "");
};
Number.prototype.numberFormat = function (c, d, t) {
    return numberFormat(this, c, d, t);
};