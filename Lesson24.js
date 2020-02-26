var colectionAuto = [
    {
        brandName: 'Audi',
        model: 'R8 GT',
        productionYear: 2010
    },
    {
        brandName: 'Citroen',
        model: 'Berlingo',
        productionYear: 2020
    },
    {
        brandName: 'Ford',
        model: 'Focus Coupe',
        productionYear: 2002
    },
    {
        brandName: 'Ferrari',
        model: 'F458',
        productionYear: 2015
    },
    {
        brandName: 'Mercedes-Benz',
        model: 'G-Class',
        productionYear: 2005
    },
    {
        brandName: 'Suzuki',
        model: 'Grand Vitara',
        productionYear: 2017
    }
];
var textHTML = '';
_.each(colectionAuto, function (data) {
    data.productionYear = prompt('Вкажіть рік випуску авто ' + data.brandName + ' ' + data.model, data.productionYear);
    textHTML += ' виробник :  ' + data.brandName + '  модель :' + data.model + '  рік випуску : ' + data.productionYear + '<br>'

});
document.getElementById("colection").innerHTML = textHTML;

var groupAutoByName = _.groupBy(colectionAuto, function (value) {
    return value.brandName;
});
console.log(groupAutoByName);

var groupAutoByModel = _.groupBy(colectionAuto, function (value) {
    return value.model;
});
console.log(groupAutoByModel);

var groupAutoByYear = _.groupBy(colectionAuto, function (value) {
    return value.productionYear;
});
console.log(groupAutoByYear);

var filterAutoByYear = _.filter(colectionAuto, function (value) {
    return +value.productionYear > 2010;
});
var dateFilter = '2010';
//console.log(filterAutoByYear);
textHTML = '';
_.each(filterAutoByYear, function (data) {
    textHTML += ' виробник :  ' + data.brandName + '  модель :' + data.model + '  рік випуску : ' + data.productionYear + '<br>'

});
document.getElementById("dateFilter").innerHTML = dateFilter;
document.getElementById("filterAuto").innerHTML = textHTML;

var maxYear = _.max(colectionAuto, function (value) {
    return value.productionYear
});
document.getElementById("maxYear").innerHTML = ' виробник :  ' + maxYear.brandName + '  модель :' + maxYear.model + '  рік випуску : ' + maxYear.productionYear + '<br>';

var minYear = _.min(colectionAuto, function (value) {
    return value.productionYear
});
document.getElementById("minYear").innerHTML = ' виробник :  ' + minYear.brandName + '  модель :' + minYear.model + '  рік випуску : ' + minYear.productionYear + '<br>';
