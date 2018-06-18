exports.connectionConfig = {
    user: 'root'
    ,password: ''
    ,host: 'localhost'
    ,connectionLimit: 50
    ,database:'mydb'
};

exports.DDL = {
    create_customers: "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))"
    , alter_customers: "ALTER TABLE customers ADD id INT AUTO_INCREMENT PRIMARY KEY"
};

exports.DML = {
    INSERT: {
        customers : {
            single: "INSERT INTO customers (name, address) VALUES (?, ?)"
            ,multi : {
                preparedQuery : "INSERT INTO customers (name, address) VALUES ?"
                ,values : [
                    ['John', 'Highway 71'],
                    ['Peter', 'Lowstreet 4'],
                    ['Amy', 'Apple st 652'],
                    ['Hannah', 'Mountain 21'],
                    ['Michael', 'Valley 345'],
                    ['Sandy', 'Ocean blvd 2'],
                    ['Betty', 'Green Grass 1'],
                    ['Richard', 'Sky st 331'],
                    ['Susan', 'One way 98'],
                    ['Vicky', 'Yellow Garden 2'],
                    ['Ben', 'Park Lane 38'],
                    ['William', 'Central st 954'],
                    ['Chuck', 'Main Road 989'],
                    ['Viola', 'Sideway 1633']
                ]
            }
        }    
    }
    ,SELECT : {
        customers: {
           all: "SELECT * FROM customers"
           ,withFavProduct: "SELECT c.id, c.name, c.address, p.name as 'favorite product' FROM customers c INNER JOIN favorite_product p ON p.id = c.favProductID;"
        }
        ,favorite_product: 'SELECT * FROM favorite_product;'
        
    }
    ,SHOW_REPEATED_ENTRIES : {
        customers: 'SELECT name,address,COUNT(*) AS times FROM customers GROUP BY NAME,ADDRESS HAVING times >=2'
        ,customers_with_id : `SELECT c1.id, c1.name, c1.address FROM customers c1
        INNER JOIN ( SELECT name,address,COUNT(*) AS times FROM customers GROUP BY NAME,ADDRESS HAVING times >=2 ) c2 
        ON c1.name = c2.name AND c1.address = c2.address`
    }
};