const iugu = require('iugu')('D5DFAD691D5AAA0B667EE76ED60F21CF32D708F321A4D0773133F5EB1E741850');

console.log(iugu, "==>iii")
const data = {
  "email": "seller@gmail.com",
  "name": "a dress seller",
  "phone_prefix": 11,
  "phone": "988776655",
  "cpf_cnpj": "551.340.520-26",
  "cc_emails": "seller@gmail.com",
  "zip_code": "09550000",
  "number": "002",
  "street": "Rua Conselheiro Lafayette",
  "city": "São Caetano do Sul",
  "state": "SP",
  "district": "Santa Paula",
  "complement": "151 "
}

iugu.customers.create(data, function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});