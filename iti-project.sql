-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2024 at 07:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iti-project`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `body` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `post_id`, `user_id`, `body`, `created_at`, `updated_at`) VALUES
(1, 2, 2, 'Great post! I’ve been trying to increase my water intake, and adding fruit to my water really makes a difference. My skin has been clearer too!', '2024-09-28 18:23:19', '2024-09-28 18:23:19'),
(2, 3, 3, 'I decluttered my desk last week, and I’ve already noticed a huge improvement in my productivity! I feel so much more focused without all the distractions around me.', '2024-09-28 18:27:41', '2024-09-28 18:27:41'),
(3, 2, 3, 'I had no idea dehydration could affect brain function! No wonder I get headaches during long workdays when I forget to drink water. Time to get a water bottle!', '2024-09-28 18:28:13', '2024-09-28 18:28:13'),
(4, 4, 2, 'Great advice! I’ve been working from home and find it hard to step away from my computer. I’m going to try scheduling regular breaks to avoid burnout.', '2024-09-28 18:45:07', '2024-09-28 18:45:07'),
(5, 4, 1, 'Great advice! I’ve been working from home and find it hard to step away from my computer. I’m going to try scheduling regular breaks to avoid burnout.', '2024-09-28 18:45:34', '2024-09-28 18:45:34'),
(6, 4, 3, 'Use breaks for mindfulness practices such as meditation or deep breathing exercises. Even a few minutes of mindfulness can help center your thoughts and improve focus when you return to your tasks.', '2024-09-28 18:52:28', '2024-09-28 18:52:28'),
(7, 4, 4, 'These can be taken every 50-60 minutes. Use them to stretch, grab a drink, or take a quick walk.', '2024-09-29 14:39:13', '2024-09-29 14:39:13'),
(8, 6, 2, 'I used to struggle with getting things done in the morning, but after adding meditation and goal-setting to my routine, I’ve been much more productive!', '2024-09-29 14:42:21', '2024-09-29 14:42:21'),
(9, 6, 1, 'I always felt rushed in the mornings. Now, I make time for breakfast and a quick walk, and it has made a world of difference. Great tips!', '2024-09-29 14:43:08', '2024-09-29 14:43:08'),
(10, 6, 3, 'I’ve been wanting to establish a morning routine for ages but never knew where to start. This breakdown really helps! Thanks!', '2024-09-29 14:43:55', '2024-09-29 14:43:55');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2024_09_23_121746_users', 1),
(2, '2024_09_24_184821_posts', 1),
(3, '2024_09_24_190418_comments', 1);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `title`, `body`, `created_at`, `updated_at`) VALUES
(2, 1, 'The Importance of Staying Hydrated', 'Water is the foundation of life, and staying hydrated is crucial for maintaining good health. While we often hear the advice to \"drink more water,\" many people still underestimate just how important hydration is for the body. In this post, we\'ll explore the benefits of staying hydrated, the signs of dehydration, and tips to make sure you\'re getting enough water every day.', '2024-09-28 17:21:50', '2024-09-28 17:21:50'),
(3, 2, 'The Benefits of Decluttering: How a Clean Space Can Boost Your Mental Health', 'In our busy lives, it\'s easy for clutter to accumulate in our homes and workspaces. But did you know that a cluttered environment can negatively affect your mental health? Studies have shown that physical clutter can lead to feelings of stress, anxiety, and even depression. In this post, we\'ll explore the benefits of decluttering and offer some simple tips to help you get started,\nA clean and organized space reduces distractions, allowing you to focus on tasks more effectively. When your environment is clutter-free, it’s easier to direct your attention to what truly matters,Decluttering your space can lead to clearer thinking. A tidy environment can help reduce cognitive overload, making it simpler to process information and come up with creative solutions,Clutter can create feelings of chaos and overwhelm. A clean space fosters a sense of calm, helping to reduce stress and anxiety levels. This can lead to improved mental health and overall well-being.', '2024-09-28 18:25:45', '2024-09-28 19:00:43'),
(4, 3, 'The Importance of Taking Breaks: How Small Pauses Can Boost Productivity', 'In today’s fast-paced world, it’s easy to get caught up in the hustle and grind. We often believe that working non-stop is the key to success, but the reality is that taking regular breaks is essential for maintaining productivity and overall well-being. Whether you\'re at work or studying, short pauses throughout the day can significantly improve focus, creativity, and even mental health.\nThese are short breaks lasting just a minute or two. Use this time to stand up, stretch, or take a few deep breaths. Microbreaks can help to refresh your mind without losing focus on your task.', '2024-09-28 18:30:16', '2024-09-28 18:53:21'),
(6, 4, 'The Power of Morning Routines: Setting Yourself Up for Success', 'Starting your day with a well-crafted morning routine can be the difference between a productive day and a chaotic one. Successful people often attribute much of their accomplishments to having consistent habits in the early hours of the day. Here\'s why building a morning routine can help you set the tone for a more focused, productive, and positive day.', '2024-09-29 14:41:27', '2024-09-29 14:41:27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `gender` enum('Male','Female') NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `address`, `gender`, `created_at`, `updated_at`) VALUES
(1, 'Omar Ahmed', 'omar@test.com', '$2y$12$sDxvtOb1RXRqMs2rG.zmcO0HyDw4Ec2CMekowZY4IUrcBk4WkWGq6', 'Place', 'Male', '2024-09-28 17:12:44', '2024-09-28 17:12:44'),
(2, 'Hossam Ahmed', 'hossam@test.com', '$2y$12$83lYWTqaCSBVLTgYgsdg8OGIjQw4mGbh4NJnQosjNmcogWIrWWwAG', 'Place', 'Male', '2024-09-28 18:22:11', '2024-09-28 18:22:11'),
(3, 'Ali Seif', 'ali@test.com', '$2y$12$0F6Bam63a4yanAyRzRxWYuNUZWiuwvlypY.xF/c/ehMOeAu8R8aZC', 'Place', 'Male', '2024-09-28 18:27:01', '2024-09-28 18:27:01'),
(4, 'Sara Ahmed', 'sara@test.com', '$2y$12$2ICoXXx2z6aPxuHk2baVRuPh7K2PoTu0ONdBLosSd4NiaxhNwIZRW', 'place', 'Male', '2024-09-29 14:36:28', '2024-09-29 14:36:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `comments_post_id_foreign` (`post_id`),
  ADD KEY `comments_user_id_foreign` (`user_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `users_user_id_index` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
