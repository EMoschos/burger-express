USE burgers_db;

INSERT INTO burger (burger_name)
VALUES ("Big Western Burger"),("Double Chicken and Cheese"), ("Smoky Ranch with Chipotle");

INSERT INTO burger (burger_name, devoured)
VALUES ("Mile High Burger", true);

SELECT * FROM burger;