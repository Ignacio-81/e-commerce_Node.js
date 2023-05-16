import { OrderMongoDao } from "./orderMongo.Dao.js";
import { CartSqlDao } from "./cartsSql.dao.js";

export default class OrderDaoFactory {
  static getDao(db) {
    switch (db) {
      case "MONGO":
        return OrderMongoDao.getInstance();
      /*       case "MEM":
        return CartMemDao.getInstance(); */
      case "MySQL":
        return CartSqlDao.getInstance();
    }
  }
}
