const db = require('../config/db');


class Post {
    constructor(id, crypto_id, exchange_id, country_id, operator, quantity, price, usdt, fiat, method, type, datetime, created_at, updated_at) {
        this.id = id;
        this.crypto_id = crypto_id;
        this.exchange_id = exchange_id;
        this.country_id = country_id;
        this.operator = operator;
        this.quantity = quantity;
        this.price = price;
        this.usdt = usdt;
        this.fiat = fiat;
        this.method = method;
        this.type = type;
        this.datetime = datetime;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    async save() {

        // put request with condition

        if (this.id) {
            // If ID exists, update the existing row
            let sql = `
                UPDATE post
                SET 
                    crypto_id = ${this.crypto_id},
                    exchange_id = ${this.exchange_id},
                    country_id = ${this.country_id},
                    operator = '${this.operator}',
                    quantity = ${this.quantity},
                    price = ${this.price},
                    usdt = ${this.usdt},
                    fiat = ${this.fiat},
                    method = '${this.method}',
                    type = '${this.type}',
                    datetime = '${this.datetime}',
                    created_at = '${this.created_at}',
                    updated_at = '${this.updated_at}'
                WHERE id = ${this.id};
            `;
            const [updatedPost, _] = await db.execute(sql);
            return updatedPost;
        }


    }

    static findAll() {
        let sql = "SELECT * FROM post;";
        return db.execute(sql);
    }


}

module.exports = Post;