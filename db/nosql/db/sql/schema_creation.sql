-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.11

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `name` varchar(30) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `id` int(3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `favoriteProductId` INT(3) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_favProductId` (`favoriteProductId`),
  CONSTRAINT `fk_favProductId` FOREIGN KEY (`favoriteProductId`) REFERENCES `favoriteProduct` (`id`) 
  ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


--
-- Table structure for table `favoriteProduct`
--

DROP TABLE IF EXISTS `favoriteProduct`;
CREATE TABLE `favoriteProduct` (
  `id` INT(3) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(25) UNIQUE DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `favoriteProduct`
--

LOCK TABLES `favoriteProduct` WRITE;
/*!40000 ALTER TABLE `favorite_product` DISABLE KEYS */;
INSERT INTO  `favoriteProduct` VALUES (1,'Apple');
/*!40000 ALTER TABLE `favorite_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
INSERT INTO `customers` VALUES ('Company Inc','Highway 37',1)
	,('Gaby','Av. Enriquillo',NULL)
    ,('El Colmado','Av. Enriquillo',NULL)
    ,('John','Highway 71',NULL)
    ,('Peter','Lowstreet 4',NULL)
    ,('Amy','Apple st 652',NULL)
    ,('Hannah','Mountain 21',NULL)
	,('Michael','Valley 345',NULL)
    ,('Sandy','Ocean blvd 2',NULL)
    ,('Betty','Green Grass 1',NULL)
    ,('Richard','Sky st 331',NULL)
    ,('Susan','One way 98',NULL)
    ,('Vicky','Yellow Garden 2',NULL)
    ,('Ben','Park Lane 38',NULL)
    ,('William','Central st 954',NULL)
    ,('Chuck','Main Road 989',NULL)
    ,('Viola','Sideway 1633',NULL)
    ,('Joseito Mateo','Av. Merengue',NULL)
    ,('John Galt','Galts Gulch',NULL)
    ,('Howard Roark','The Quarry',NULL);
UNLOCK TABLES;



/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-05 21:53:54
