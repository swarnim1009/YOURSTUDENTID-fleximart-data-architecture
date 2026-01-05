\# NoSQL Analysis - FlexiMart



\## Section A: Limitations of RDBMS

The current relational database struggles with highly diverse products. For example:

\- Electronics have attributes like RAM, processor, screen size.

\- Fashion products have attributes like size, color, material.

Frequent schema changes for new product types make updates complex.  

Storing nested data like customer reviews is inefficient in relational tables.  



Hence, an RDBMS can be inflexible for dynamic, hierarchical product data.



---



\## Section B: Benefits of NoSQL (MongoDB)

MongoDB allows a flexible schema using JSON documents:

\- Each product can have different attributes (`specifications`, `tags`, `reviews`).

\- Embedded documents make storing nested data easier (like reviews and specifications).

\- Arrays allow multiple values (e.g., tags, available sizes, or multiple reviews).

\- Horizontal scaling handles large datasets across multiple servers.



This reduces schema migration effort and improves read/write performance for diverse product catalogs.



---



\## Section C: Trade-offs

1\. MongoDB does not enforce strong relationships like foreign keys, so data consistency must be managed at the application level.

2\. Complex transactions spanning multiple collections are harder to implement compared to relational databases.

3\. Querying deeply nested structures can be slower if indexes are not optimized.



---



\## Section D: Dataset Overview (`products\_catalog.json`)

The NoSQL dataset contains \*\*12 products\*\* across \*\*Electronics\*\* and \*\*Fashion\*\*:



\- \*\*Attributes:\*\* `product\_id`, `name`, `category`, `subcategory`, `price`, `stock`, `specifications`, `reviews`, `tags`, `warranty\_months`, `created\_at`, `updated\_at`.

\- \*\*Nested Objects:\*\* `specifications` for product features, `reviews` for customer feedback.

\- \*\*Arrays:\*\* `tags` (keywords), `reviews` (multiple reviews per product).

\- \*\*Benefits:\*\* Flexible structure allows storing different product types without altering schema.



