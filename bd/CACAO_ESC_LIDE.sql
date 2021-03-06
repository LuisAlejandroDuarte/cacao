CREATE DATABASE  IF NOT EXISTS `CACAO` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `CACAO`;
-- MySQL dump 10.13  Distrib 5.7.9, for linux-glibc2.5 (x86_64)
--
-- Host: 127.0.0.1    Database: CACAO
-- ------------------------------------------------------
-- Server version	5.6.28-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ESC_LIDE`
--

DROP TABLE IF EXISTS `ESC_LIDE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ESC_LIDE` (
  `LID_CODI` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código consecutivo del líder de Prueba',
  `LID_CEDU` varchar(50) NOT NULL COMMENT 'Número de cédula del Líder de prueba',
  `LID_NOMB` varchar(50) NOT NULL COMMENT 'Nombre del Líder de Prueba',
  `LID_TELE` varchar(50) DEFAULT NULL COMMENT 'Número de contacto del Líder de Prueba',
  PRIMARY KEY (`LID_CODI`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Líderes o Coordinadores de Cada Prueba.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ESC_LIDE`
--

LOCK TABLES `ESC_LIDE` WRITE;
/*!40000 ALTER TABLE `ESC_LIDE` DISABLE KEYS */;
/*!40000 ALTER TABLE `ESC_LIDE` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-13 23:28:05
