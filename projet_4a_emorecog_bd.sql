-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 15 avr. 2020 à 12:35
-- Version du serveur :  5.7.19
-- Version de PHP :  7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projet_4a_emorecog_bd`
--

-- --------------------------------------------------------

--
-- Structure de la table `annotation`
--

DROP TABLE IF EXISTS `annotation`;
CREATE TABLE IF NOT EXISTS `annotation` (
  `id_annotation` int(11) NOT NULL AUTO_INCREMENT,
  `contenu_annotation` varchar(255) NOT NULL,
  `validated` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_annotation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `emotion`
--

DROP TABLE IF EXISTS `emotion`;
CREATE TABLE IF NOT EXISTS `emotion` (
  `id_emotion` int(10) NOT NULL AUTO_INCREMENT,
  `nom_emotion` varchar(10) NOT NULL,
  `nbre_record_supposes` int(50) NOT NULL,
  `nbre_record_reconnus` int(50) NOT NULL,
  `pourcentage_reconnaissance` double NOT NULL,
  PRIMARY KEY (`id_emotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `moderateur`
--

DROP TABLE IF EXISTS `moderateur`;
CREATE TABLE IF NOT EXISTS `moderateur` (
  `id_moderateur` int(10) NOT NULL AUTO_INCREMENT,
  `nom_moderateur` varchar(50) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `sexe` varchar(10) NOT NULL,
  PRIMARY KEY (`id_moderateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `phrase`
--

DROP TABLE IF EXISTS `phrase`;
CREATE TABLE IF NOT EXISTS `phrase` (
  `id_phrase` int(11) NOT NULL AUTO_INCREMENT,
  `contenu_phrase` varchar(255) NOT NULL,
  PRIMARY KEY (`id_phrase`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `record`
--

DROP TABLE IF EXISTS `record`;
CREATE TABLE IF NOT EXISTS `record` (
  `id_record` int(10) NOT NULL AUTO_INCREMENT,
  `record` varbinary(2000) NOT NULL,
  `version_record` varchar(10) NOT NULL,
  `ref_micro_record` varchar(10) NOT NULL,
  `ref_device_record` varchar(10) NOT NULL,
  PRIMARY KEY (`id_record`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `setting`
--

DROP TABLE IF EXISTS `setting`;
CREATE TABLE IF NOT EXISTS `setting` (
  `id_setting` int(10) NOT NULL AUTO_INCREMENT,
  `type_appareil` varchar(20) NOT NULL,
  `frequence` int(10) NOT NULL,
  `description_carte_son` varchar(255) NOT NULL,
  `type_micro` varchar(20) NOT NULL,
  PRIMARY KEY (`id_setting`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `sexe` varchar(20) NOT NULL,
  `date_de_naissance` date NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
