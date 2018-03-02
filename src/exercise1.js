const moment = require("moment");



const sortProduct = input => {
 var obj = {};
 var transformedObj = input.filter(value => moment().year(value.dateAdded) < 2000)
                            .map(item => {
                              let elem = {};
                              let date = new Date(item.dateAdded);
                              elem['name'] = item.name;
                              elem['year'] = moment().year(item.dateAdded);
                              elem['monthOfYear'] = date.getMonth();
                              elem['quantity'] = item.quantity;
                              
                            return elem;
      
      });
  console.log('name  '+ JSON.stringify(transformedObj));
  var objName = input[0].name;
  
  obj[objName] = transformedObj;
  return obj;
  
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
