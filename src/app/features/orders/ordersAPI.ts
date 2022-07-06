import { faker } from '@faker-js/faker';
import { Ordertype } from "data/data";

// A mock function to mimic making an async request for data
export function fetchOrders() {
  return new Promise<{ data: Ordertype[] }>((resolve) => {
    let data:Ordertype[] = [];
    for(let i=0;i<20;i++) {
      let date = faker.date.between('2010-01-01T00:00:00.000Z', '2020-01-01T00:00:00.000Z');
      let filledDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
      data.push({
        orderID: faker.random.numeric(4),
        orderStatus: faker.helpers.arrayElement(["UNVERIFIED", "REFUNDED", "CANCELLED", "VERIFIED", "FULFILLED"]),
        companyName: faker.company.companyName(),
        customerName: faker.name.findName(),
        purDate: filledDate,
        fulfillDate: filledDate,
        invoiceStatus: faker.helpers.arrayElement(["Paid", "Unpaid"]),
        amount: parseInt(faker.finance.amount(100, 250, 0)),
        currency: "NOK",
      });
    }
    setTimeout(() => resolve({ data: data }), 3000)
  });
}
