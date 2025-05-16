-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Vært: localhost
-- Genereringstid: 16. 05 2025 kl. 09:17:06
-- Serverversion: 5.7.24
-- PHP-version: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bornelejren`
--
CREATE DATABASE IF NOT EXISTS `bornelejren` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bornelejren`;

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `støttemedlemmer`
--

CREATE TABLE `støttemedlemmer` (
  `id` int(11) NOT NULL,
  `firmanavn` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefon` int(8) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `postnummer` int(4) NOT NULL,
  `sted` varchar(50) NOT NULL,
  `belob` int(100) NOT NULL,
  `stottetype` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `støttemedlemmer`
--

INSERT INTO `støttemedlemmer` (`id`, `firmanavn`, `email`, `telefon`, `adresse`, `postnummer`, `sted`, `belob`, `stottetype`) VALUES
(1, 'Aage og Johanne Louis-Hansens Fond', 'Louis-Hansens@fond.dk', 12345678, 'Hammerensgade 1', 1267, 'København K', 20000, 'Lejrsponsorat'),
(13, 'Civilingeniør H.C. Bechgaard og hustru Ella Mary Bechgaards Fond', 'support@legatbogen.dk', 12345678, 'Lemnosvej 28', 2300, 'København S', 100000, 'børnesponsorat'),
(14, 'Medarbejdernes Honorarfond i Novo Gruppen', 'honorarfonden@novonordisk.com', 12345678, 'Novo Allé 1', 2880, 'Bagsværd', 25000, 'forening'),
(15, 'Otto Bruuns Fond', 'Sdsi@rsyd.dk', 12345678, 'Forskerparken 10 G', 5230, 'Odense M', 60000, 'børnesponsorat'),
(16, 'Ingemann Graphics', 'ingemann@graphics.dk', 12345678, 'Elleparken 1', 2950, 'Vedbæk', 10000, 'lejrsponsorat');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `støttemedlemmer`
--
ALTER TABLE `støttemedlemmer`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `støttemedlemmer`
--
ALTER TABLE `støttemedlemmer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
