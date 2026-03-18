CREATE TABLE `contact_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(100) NOT NULL,
	`phone` varchar(20),
	`subject` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `prices` (
	`id` int AUTO_INCREMENT NOT NULL,
	`product_id` int,
	`price` decimal(10,2) NOT NULL,
	`amount` varchar(100) NOT NULL,
	`quantity` int,
	`reorder_level` int,
	CONSTRAINT `prices_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `prices` ADD CONSTRAINT `prices_product_id_products_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE cascade ON UPDATE no action;