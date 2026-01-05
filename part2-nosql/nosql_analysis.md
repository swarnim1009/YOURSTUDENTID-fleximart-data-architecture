\# Part 2: NoSQL Analysis - FlexiMart



\*\*Student Name:\*\* Swarnim Bhawsar  

\*\*Student ID:\*\* 25071263  

\*\*Course:\*\* Data for Artificial Intelligence  



---



\## Section A: Limitations of RDBMS (4 marks)



The current relational database at FlexiMart has some limitations for managing the product catalog:



1\. \*\*Diverse Product Attributes:\*\* Different product types (like laptops with RAM and processor vs shoes with size and color) require many nullable columns or separate tables, leading to schema complexity.  

2\. \*\*Frequent Schema Changes:\*\* Adding new product types often requires altering tables and adding columns, which is cumbersome and error-prone.  

3\. \*\*Nested Data Storage:\*\* Customer reviews, which include ratings, comments, and timestamps, are difficult to represent efficiently in relational tables without creating multiple join tables.  



These limitations make the RDBMS less flexible for dynamic and heterogeneous product catalogs.



---



\## Section B: NoSQL Benefits (4 marks)



Using MongoDB provides several advantages over relational databases:



1\. \*\*Flexible Schema:\*\* Documents can store different fields for each product type, allowing flexibility without changing the database structure.  

2\. \*\*Embedded Documents:\*\* Reviews and other nested data can be embedded directly inside product documents, simplifying queries and improving performance.  

3\. \*\*Horizontal Scalability:\*\* MongoDB supports sharding, enabling the system to scale easily as the product catalog grows in size and complexity.  



This flexibility allows FlexiMart to quickly adapt to new product types and complex data structures.



---



\## Section C: Trade-offs of Using MongoDB (2 marks)



While MongoDB is suitable for flexible data, there are trade-offs compared to MySQL:



1\. \*\*Data Consistency:\*\* MongoDB sacrifices strict ACID compliance in favor of eventual consistency, which may be problematic for financial transactions.  

2\. \*\*Complex Joins:\*\* Aggregating data across multiple collections can be more complex than SQL joins, potentially increasing query complexity and maintenance effort.  



---



\*\*Conclusion:\*\* MongoDB is ideal for FlexiMart’s dynamic product catalog, supporting flexible schemas, embedded documents, and easy scalability, but careful handling of consistency and complex queries is required.



