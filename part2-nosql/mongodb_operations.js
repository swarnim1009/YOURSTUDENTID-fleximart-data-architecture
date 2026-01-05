// Connect to MongoDB (run this in mongosh or Node.js with MongoDB driver)
// Database: fleximart_nosql
use fleximart_nosql;

// 1. Load Data
db.products.drop(); // Remove old collection if exists
db.products.insertMany([
    {
        "product_id": "ELEC001",
        "name": "Samsung Galaxy S21",
        "category": "Electronics",
        "price": 799.99,
        "stock": 150,
        "specs": {"ram": "8GB", "storage": "128GB"},
        "reviews": [{"user": "U001", "rating": 5, "comment": "Great!", "date": "2024-01-15"}]
    },
    {
        "product_id": "SHO001",
        "name": "Nike Running Shoes",
        "category": "Footwear",
        "price": 120,
        "stock": 200,
        "specs": {"size": 10, "color": "Red"},
        "reviews": [{"user": "U002", "rating": 4, "comment": "Comfortable", "date": "2024-01-10"}]
    }
    // Add more products if you want (minimum 10 as per assignment)
]);

// 2. Basic Query - Electronics under price 50000
db.products.find(
    {category: "Electronics", price: {$lt: 50000}},
    {name: 1, price: 1, stock: 1, _id: 0}
);

// 3. Review Analysis - average rating >= 4
db.products.aggregate([
    {$addFields: {avgRating: {$avg: "$reviews.rating"}}},
    {$match: {avgRating: {$gte: 4}}},
    {$project: {product_id: 1, name: 1, avgRating: 1, _id: 0}}
]);

// 4. Update Operation - Add new review
db.products.updateOne(
    {product_id: "ELEC001"},
    {$push: {reviews: {user: "U999", rating: 4, comment: "Good value", date: new Date()}}}
);

// 5. Complex Aggregation - average price by category
db.products.aggregate([
    {$group: { _id: "$category", avg_price: {$avg: "$price"}, product_count: {$sum: 1} }},
    {$sort: {avg_price: -1}}
]);
