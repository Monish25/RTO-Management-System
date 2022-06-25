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
-- Table structure for table `drivers_application`
--

DROP TABLE IF EXISTS `drivers_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drivers_application` (
  `DOB` date DEFAULT NULL,
  `Photo` blob,
  `Proof` blob,
  `Applicant_name` varchar(20) DEFAULT NULL,
  `Contact` varchar(10) DEFAULT NULL,
  `Preffered_RTO` varchar(20) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Application_no` varchar(15) NOT NULL,
  PRIMARY KEY (`Application_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drivers_application`
--

LOCK TABLES `drivers_application` WRITE;
/*!40000 ALTER TABLE `drivers_application` DISABLE KEYS */;
INSERT INTO `drivers_application` VALUES ('2002-07-02',NULL,NULL,'John','9881345789','North Chennai','No:18/21, Kolathur, 100 feet road,Ch-21','101'),('1999-05-22',NULL,NULL,'Kennedy','9176876459','South Chennai','N0:01, Guindy,Nehru road,Ch-002.','102'),('2000-03-10',NULL,NULL,'Ameer','9544274377','Annanagar Chennai','No:21, Annanagar roundtana,Ch-101.','103'),('1998-08-05',NULL,NULL,'Karan','9234189567','Kodambakkam Chennai','No:22, Kodambaakm high road,Ch-001.','104'),('1995-09-25',NULL,NULL,'Senthil','9712348945','Perambur Chennai','No:26, Paper mills road, Perambur, Ch-011','105');
/*!40000 ALTER TABLE `drivers_application` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27 23:24:23
