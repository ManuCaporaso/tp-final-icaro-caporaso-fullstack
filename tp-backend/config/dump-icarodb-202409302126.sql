-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: icarodb
-- ------------------------------------------------------
-- Server version	11.4.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Todas','Categoría que incluye todos los productos.','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'Remeras','Remeras masculinas.','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,'Musculosas','Musculosas.','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,'Shorts','Short.','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,'Pantalones','Pantalones Masculinos.','0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'Buzos','Buzos.','0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,'Camperas','Camperas.','0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,'Camisetas','Camisetas masculinas.','0000-00-00 00:00:00','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `highlight`
--

DROP TABLE IF EXISTS `highlight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `highlight` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `highlight_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `highlight`
--

LOCK TABLES `highlight` WRITE;
/*!40000 ALTER TABLE `highlight` DISABLE KEYS */;
/*!40000 ALTER TABLE `highlight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `categoryId` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `highlighted` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (72,'Remera Puma Hombre',27999,2,'Remera Running Ruma','1727733285968.png',1,'2024-09-30 21:03:51','2024-09-30 21:54:45'),(73,'Remera River Plate adidas',49999,2,'Remera River Plate adidas Hombre Temporada 2024/25','1727733256073.png',1,'2024-09-30 21:54:16','2024-09-30 21:54:16'),(74,'Musculosa Entrenamiento adidas',55999,3,'Musculosa Entrenamiento adidas D4t HR TK Hombre','1727733430203.png',0,'2024-09-30 21:57:10','2024-09-30 21:57:10'),(75,'Musculosa Boca Juniors',39199,3,'Musculosa Boca Juniors adidas Tiro 23/24 Hombre','1727733737020.png',0,'2024-09-30 22:02:17','2024-09-30 22:39:31'),(76,'Musculosa Fútbol Argentina',29399,3,'Musculosa Fútbol adidas Argentina Tiro 23 Hombre','1727733829370.png',0,'2024-09-30 22:03:49','2024-09-30 22:03:49'),(77,'Short Básquet Nike',99999,4,'Short Básquet Nike Dna 8in College Hombre','1727733945305.png',0,'2024-09-30 22:05:45','2024-09-30 22:05:45'),(78,'Short River Plate',79999,4,'Short River Plate adidas 2024 SZN Hombre','1727734017787.png',0,'2024-09-30 22:06:57','2024-09-30 22:06:57'),(79,'Short adidas Selección Argentina',59999,4,'Short adidas Selección Argentina Alternativa 2024 Hombre','1727734108161.png',0,'2024-09-30 22:08:28','2024-09-30 22:08:28'),(80,'Pantalón adidas',83999,5,'Pantalón adidas River Plate 2024/25','1727734501491.png',0,'2024-09-30 22:15:01','2024-09-30 22:15:01'),(81,'Pantalón Fútbol Boca',83999,5,'Pantalón Fútbol Boca Juniors 23/24 Hombre','1727734604227.png',0,'2024-09-30 22:16:44','2024-09-30 22:16:44'),(82,'Pantalón Fútbol Nike',107999,5,'Pantalón Fútbol Nike Dri-FIT Strike Hombre','1727734621944.png',0,'2024-09-30 22:17:01','2024-09-30 22:17:01'),(83,'Buzo Nike Sportswear',86499,6,'Buzo Nike Sportswear Club Fleece Hombre','1727734878589.png',0,'2024-09-30 22:21:18','2024-09-30 22:21:18'),(84,'Buzo Fútbol adidas River',119999,6,'Buzo Fútbol adidas River Plate Entrenamiento 2024 Hombre','1727734931124.png',0,'2024-09-30 22:22:11','2024-09-30 22:22:11'),(85,'Buzo Independiente',67999,6,'Buzo Independiente Puma Hombre','1727734975743.png',0,'2024-09-30 22:22:55','2024-09-30 22:22:55'),(86,'Campera Argentina adidas',169999,7,'Campera Argentina adidas Anthem Hombre','1727735458110.png',0,'2024-09-30 22:30:58','2024-09-30 22:30:58'),(87,'Campera Boca Juniors',64999,7,'Campera Fútbol adidas Anthem Boca Juniors Hombre','1727735521043.png',0,'2024-09-30 22:32:01','2024-09-30 22:32:01'),(88,'Campera adidas Future',109999,7,'Campera adidas Future Icons 3 Tiras Hombre','1727735574908.png',0,'2024-09-30 22:32:54','2024-09-30 22:32:54'),(89,'Camiseta River Plate',99999,8,'Camiseta River Plate adidas Titular 24/25 Hombre','1727735680688.png',1,'2024-09-30 22:34:40','2024-09-30 22:39:39'),(90,'Camiseta Boca Juniors',59999,8,'Camiseta Boca Juniors adidas Titular 23/24 Hombre','1727735721625.png',0,'2024-09-30 22:35:21','2024-09-30 22:35:21'),(91,'Camiseta Nike San Lorenzo Suplente',89999,8,'Camiseta Nike San Lorenzo Suplente 2024 Hombre','1727735766580.png',0,'2024-09-30 22:36:06','2024-09-30 22:36:06');
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase_history`
--

DROP TABLE IF EXISTS `purchase_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `itemId` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  `purchaseDate` datetime NOT NULL,
  `sendPurchase` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `itemId` (`itemId`),
  CONSTRAINT `purchase_history_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `purchase_history_ibfk_2` FOREIGN KEY (`itemId`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_history`
--

LOCK TABLES `purchase_history` WRITE;
/*!40000 ALTER TABLE `purchase_history` DISABLE KEYS */;
INSERT INTO `purchase_history` VALUES (2,15,73,1,49999.00,'2024-09-30 22:18:35',0,'2024-09-30 22:18:35','2024-09-30 22:18:35'),(3,15,80,1,83999.00,'2024-09-30 22:18:35',0,'2024-09-30 22:18:35','2024-09-30 22:18:35');
/*!40000 ALTER TABLE `purchase_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (13,'admin@admin.com','$2b$10$7wr.u7b1VxOPlntiTmOOROu2NX0K12KWmcCGrNXhbARU9ok6g3Gwa','admin','admin','0','0','0','0','0','admin','2024-09-29 18:24:57','2024-09-29 18:24:57'),(14,'ejemplo@ejemplo.com','$2b$10$szAquCdYZ/Aly4HY/Arm4er6x4WBRLtjGd0YpFL2HWcHrU687vaOS','ejemplo','ejemplo','555222111','Calle','Ciudad','Provincia','Cdgo.Postal','user','2024-09-29 23:29:15','2024-09-29 23:29:15'),(15,'manucapo@gmail.com','$2b$10$z9jI88bDO/sYHETc8gFkhet3yhaksYu6kcZRoqzN3eHR2YvcRfPaG','Manuel','Caporaso','23313123123','Calle Falsa 123','Cipolletti','Rio Negro','8324','user','2024-09-30 20:40:08','2024-09-30 20:40:08');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'icarodb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-30 21:26:58
