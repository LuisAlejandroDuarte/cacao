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
-- Table structure for table `ESC_ESCA_EVAL`
--

DROP TABLE IF EXISTS `ESC_ESCA_EVAL`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ESC_ESCA_EVAL` (
  `EEV_CONS` int(11) NOT NULL AUTO_INCREMENT COMMENT 'CONSECUTIVO ESCALA DE\n\nEVALUACION',
  `EEV_CALI` int(11) NOT NULL COMMENT 'VALOR ESCALA DE EVALUACIÓN',
  `EEV_PAEV_CONS` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`EEV_CONS`),
  KEY `Ref_20` (`EEV_PAEV_CONS`),
  CONSTRAINT `Ref_20` FOREIGN KEY (`EEV_PAEV_CONS`) REFERENCES `ESC_PARA_EVAL` (`PEV_CONS`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Escala de Evaluación (siempre será de 0 a 10)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ESC_ESCA_EVAL`
--

LOCK TABLES `ESC_ESCA_EVAL` WRITE;
/*!40000 ALTER TABLE `ESC_ESCA_EVAL` DISABLE KEYS */;
/*!40000 ALTER TABLE `ESC_ESCA_EVAL` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-13 23:28:07
