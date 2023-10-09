const Post = require('../models/Post');

// datetime format code

const changeDateFormat = (inputDate) => {

    const originalDate = inputDate; // Your original date '2023-10-09T15:43:26.268Z'

    // Parse the original date
    const parsedDate = new Date(originalDate);

    // Format the date as 'YYYY-MM-DD HH:MM:SS'
    const formattedDate = `${parsedDate.getFullYear()}-${('0' + (parsedDate.getMonth() + 1)).slice(-2)}-${('0' + parsedDate.getDate()).slice(-2)} ${('0' + parsedDate.getHours()).slice(-2)}:${('0' + parsedDate.getMinutes()).slice(-2)}:${('0' + parsedDate.getSeconds()).slice(-2)}`;

    return formattedDate;

}

exports.getAllPosts = async (req, res, next) => {

    try {
        const [posts, _] = await Post.findAll();

        res.status(200).json({ count: posts.length, posts });
    } catch (error) {
        console.log(error);
        next(error);
    }

}

exports.createNewPost = async (req, res, next) => {

    try {

        let { id, crypto_id, exchange_id, country_id, operator, quantity, price, usdt, fiat, method, type, datetime, created_at, updated_at } = req.body;

        const updateDatetime = changeDateFormat(datetime);
        const updateCreated_at = changeDateFormat(created_at);
        const updateUpdated_at = changeDateFormat(updated_at);


        let post = new Post(id, crypto_id, exchange_id, country_id, operator, quantity, price, usdt, fiat, method, type, updateDatetime, updateCreated_at, updateUpdated_at);

        post = await post.save();

        res.status(201).json({ message: "Data updated successfully" })

    } catch (error) {

        console.log(error);
        next(error);
    }


}
