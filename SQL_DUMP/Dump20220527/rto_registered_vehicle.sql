-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: rto
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `registered_vehicle`
--

DROP TABLE IF EXISTS `registered_vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registered_vehicle` (
  `Regd_Owner` varchar(20) DEFAULT NULL,
  `Vehicle_Class` varchar(20) DEFAULT NULL,
  `Regd_Number` varchar(20) NOT NULL,
  `Fuel_used` varchar(15) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Maker_class` varchar(15) DEFAULT NULL,
  `Month_Year_MFG` varchar(20) DEFAULT NULL,
  `RTO_ID` varchar(15) DEFAULT NULL,
  `Type_of_body` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`Regd_Number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registered_vehicle`
--

LOCK TABLES `registered_vehicle` WRITE;
/*!40000 ALTER TABLE `registered_vehicle` DISABLE KEYS */;
INSERT INTO `registered_vehicle` VALUES ('Krishnamoorthy','MCWOG','TN01AB1256','Petrol','N0:60/1, Mathur, Ch-051','Two_seater','07-2011','R02','Metallic'),('Pragash','MCWG','TN02BT7865','Petrol','No:8,Selvam Nagar,Ch-099','Two_seater','09-2017','R03','Metallic'),('Mohan','LMV','TN05BF8992','Diesel','No:10/01,Jeevan Nagar,Ch=101','Four_seater','10-2019','R01','Sedan'),('Gokul','HMV','TN10JK3467','Diesel','No:4,Pillayar street, Vyasarpadi,Ch-039','Trunck','01-2022','R05','Truck'),('Saravanan','LMV','TN14GH7865','Petrol','No:12/90,Anna Salai,Ch-002','Five_seater','11-2021','R04','Hatchback');
/*!40000 ALTER TABLE `registered_vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27 23:24:24
