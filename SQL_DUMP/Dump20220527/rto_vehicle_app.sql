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
-- Table structure for table `vehicle_app`
--

DROP TABLE IF EXISTS `vehicle_app`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle_app` (
  `Proof` blob,
  `Vehicle_Class` varchar(20) DEFAULT NULL,
  `Month_Year_Mfg` varchar(20) DEFAULT NULL,
  `Owner_contact` varchar(20) DEFAULT NULL,
  `Type_of_body` varchar(20) DEFAULT NULL,
  `Fuel_Used` varchar(15) DEFAULT NULL,
  `Preffered_RTO` varchar(100) DEFAULT NULL,
  `Maker_name` varchar(20) DEFAULT NULL,
  `Owner_name` varchar(20) DEFAULT NULL,
  `Application_no` varchar(15) NOT NULL,
  PRIMARY KEY (`Application_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle_app`
--

LOCK TABLES `vehicle_app` WRITE;
/*!40000 ALTER TABLE `vehicle_app` DISABLE KEYS */;
INSERT INTO `vehicle_app` VALUES (NULL,'MCWOG','09-2012','9871233473','Metallic','Petrol','No:26, Paper mills road, Perambur, Ch-011','Hero','Rakesh','2001'),(NULL,'MCWG','10-2019','9745609734','Metallic','Petrol','No:22, Kodambaakm high road,Ch-001.','Honda','Raman','2002'),(NULL,'LMV','07-2021','8965341298','Sedan','Diesel','No:21, Annanagar roundtana,Ch-101.','Chevorlet','Jack','2003'),(NULL,'LMV','01-2022','7893651276','Hatchback','Petrol','N0:01, Guindy,Nehru road,Ch-002.','Ford','Kathir','2004'),(NULL,'HMV','09-2020','7123305789','Tanker','Diesel',' No:18/21, Kolathur, 100 feet road,Ch-21','Mahindra','Tharun','2005');
/*!40000 ALTER TABLE `vehicle_app` ENABLE KEYS */;
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
