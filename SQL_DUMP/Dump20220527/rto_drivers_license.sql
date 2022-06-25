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
-- Table structure for table `drivers_license`
--

DROP TABLE IF EXISTS `drivers_license`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drivers_license` (
  `Photo` blob,
  `Holder_name` varchar(25) DEFAULT NULL,
  `Vehicle_Class` varchar(20) DEFAULT NULL,
  `DL_number` varchar(25) NOT NULL,
  `Date_of_issue` date DEFAULT NULL,
  `Validity` date DEFAULT NULL,
  `RTO_ID` varchar(20) NOT NULL,
  PRIMARY KEY (`DL_number`),
  KEY `RTO_ID` (`RTO_ID`),
  CONSTRAINT `drivers_license_ibfk_1` FOREIGN KEY (`RTO_ID`) REFERENCES `rto_office` (`Office_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers_license`
--

LOCK TABLES `drivers_license` WRITE;
/*!40000 ALTER TABLE `drivers_license` DISABLE KEYS */;
INSERT INTO `drivers_license` VALUES (NULL,'Nair','MCWOG','TN02202212','2021-09-21','2042-10-22','R03'),(NULL,'Cheran','MCWG','TN05202234','2019-05-12','2030-06-14','R01'),(NULL,'Roshan','LMV','TN10202245','2020-07-01','2040-08-04','R02'),(NULL,'Samuel','HMV','TN15202276','2018-02-01','2038-03-05','R04'),(NULL,'Jayan','LMV','TN20202298','2011-04-16','2031-05-15','R05');
/*!40000 ALTER TABLE `drivers_license` ENABLE KEYS */;
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
