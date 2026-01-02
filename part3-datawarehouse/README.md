# Part 3 – Data Warehouse and Analytics

## 1. Data Warehouse Design
A star schema is used for analytics to improve query performance.

### Fact Table
- Fact_Sales
  - order_id
  - product_id
  - customer_id
  - date_id
  - quantity
  - total_amount

### Dimension Tables
- Dim_Customer
- Dim_Product
- Dim_Date

## 2. ETL Process for Data Warehouse
- Extract data from the transactional database
- Transform data by aggregating sales metrics
- Load data into the warehouse tables

## 3. Analytics Use Cases
- Monthly sales analysis
- Top-selling products
- Customer purchase behavior

## 4. BI Tools
- Power BI
- Tableau

