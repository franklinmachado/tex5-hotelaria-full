CREATE DATABASE  IF NOT EXISTS `hotel` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hotel`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `acomodacoes`
--

DROP TABLE IF EXISTS `acomodacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acomodacoes` (
  `id_acomodacao` int NOT NULL AUTO_INCREMENT,
  `status` enum('PENDENTE','OCUPADO','DISPONÍVEL') NOT NULL DEFAULT 'DISPONÍVEL',
  `titulo` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `preco` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_acomodacao`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acomodacoes`
--

LOCK TABLES `acomodacoes` WRITE;
/*!40000 ALTER TABLE `acomodacoes` DISABLE KEYS */;
INSERT INTO `acomodacoes` VALUES (19,'DISPONÍVEL','Quarto 1','O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar.','quarto_1.jpg',300.00),(20,'DISPONÍVEL','Quarto 2','O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar.','quarto_2.jpg',400.00),(21,'PENDENTE','Quarto 3','O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar.','quarto_3.jpg',200.00),(22,'DISPONÍVEL','Quarto 4','O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar.','quarto_4.jpg',100.00);
/*!40000 ALTER TABLE `acomodacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avaliacoes`
--

DROP TABLE IF EXISTS `avaliacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacoes` (
  `id_avaliacao` int NOT NULL AUTO_INCREMENT,
  `data_avaliacao` datetime NOT NULL,
  `pontuacao` int NOT NULL,
  `descricao` text NOT NULL,
  `status` varchar(45) NOT NULL,
  `id_acomodacao` int NOT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_avaliacao`,`id_acomodacao`,`id_usuario`),
  KEY `fk_avaliacoes_acomodacoes1_idx` (`id_acomodacao`),
  KEY `fk_avaliacoes_usuarios1_idx` (`id_usuario`),
  CONSTRAINT `fk_avaliacoes_acomodacoes1` FOREIGN KEY (`id_acomodacao`) REFERENCES `acomodacoes` (`id_acomodacao`),
  CONSTRAINT `fk_avaliacoes_usuarios1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacoes`
--

LOCK TABLES `avaliacoes` WRITE;
/*!40000 ALTER TABLE `avaliacoes` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumo`
--

DROP TABLE IF EXISTS `consumo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumo` (
  `id_consumo` int NOT NULL AUTO_INCREMENT,
  `item` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `local` varchar(45) NOT NULL,
  `qtd_item` int NOT NULL,
  `data_hora` datetime NOT NULL,
  `id_reserva` int NOT NULL,
  PRIMARY KEY (`id_consumo`,`id_reserva`),
  KEY `fk_consumo_reservas1_idx` (`id_reserva`),
  CONSTRAINT `fk_consumo_reservas1` FOREIGN KEY (`id_reserva`) REFERENCES `reservas` (`id_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumo`
--

LOCK TABLES `consumo` WRITE;
/*!40000 ALTER TABLE `consumo` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupons`
--

DROP TABLE IF EXISTS `cupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupons` (
  `id_cupom` int NOT NULL AUTO_INCREMENT,
  `codigo` varchar(255) NOT NULL,
  `data_criacao` datetime NOT NULL,
  `data_vencimento` datetime NOT NULL,
  `desconto` int NOT NULL,
  PRIMARY KEY (`id_cupom`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupons`
--

LOCK TABLES `cupons` WRITE;
/*!40000 ALTER TABLE `cupons` DISABLE KEYS */;
/*!40000 ALTER TABLE `cupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id_endereco` int NOT NULL AUTO_INCREMENT,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `numero` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `id_usuario` int NOT NULL,
  PRIMARY KEY (`id_endereco`,`id_usuario`),
  KEY `id_usuario_idx` (`id_usuario`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,'Rio de Janeiro','RJ','10','Rua Senador Vergueiro','Flamengo','Ap 101',1);
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `check_in` datetime NOT NULL,
  `check_out` datetime NOT NULL,
  `quantidade_pessoas` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `total_desconto` decimal(10,2) NOT NULL,
  `confirmacao` tinyint NOT NULL DEFAULT '0',
  `data_confirmacao` datetime NOT NULL,
  `cupom_id` int NOT NULL,
  `acomodacao_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `servicos_adicionais_id` int NOT NULL,
  PRIMARY KEY (`id_reserva`,`cupom_id`,`acomodacao_id`,`usuario_id`,`servicos_adicionais_id`),
  KEY `fk_reservas_cupons1_idx` (`cupom_id`),
  KEY `fk_reservas_acomodacoes1_idx` (`acomodacao_id`),
  KEY `fk_reservas_usuarios1_idx` (`usuario_id`),
  KEY `fk_servicos_adicionais_idx` (`servicos_adicionais_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `fk_reservas_acomodacoes1` FOREIGN KEY (`acomodacao_id`) REFERENCES `acomodacoes` (`id_acomodacao`),
  CONSTRAINT `fk_reservas_cupons1` FOREIGN KEY (`cupom_id`) REFERENCES `cupons` (`id_cupom`),
  CONSTRAINT `fk_reservas_usuarios1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `fk_servicos_adicionais1` FOREIGN KEY (`servicos_adicionais_id`) REFERENCES `servicos_adicionais` (`id_servico_adicional`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos_adicionais`
--

DROP TABLE IF EXISTS `servicos_adicionais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos_adicionais` (
  `id_servico_adicional` int NOT NULL AUTO_INCREMENT,
  `item` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_servico_adicional`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos_adicionais`
--

LOCK TABLES `servicos_adicionais` WRITE;
/*!40000 ALTER TABLE `servicos_adicionais` DISABLE KEYS */;
INSERT INTO `servicos_adicionais` VALUES (1,'Café da manhã','Café da manhã',35.00),(2,'Cofre','Cofre com senha personalizada',30.00),(3,'Massagem','Massagem',100.00),(4,'SPA','SPA',280.00),(5,'Translado','Translado',100.00);
/*!40000 ALTER TABLE `servicos_adicionais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Usuário Teste','11223344','10020030040','teste@gmail.com','1234');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-29 14:35:51
