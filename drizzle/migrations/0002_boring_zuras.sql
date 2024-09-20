ALTER TABLE `Openings` RENAME COLUMN `Type` TO `Option`;--> statement-breakpoint
ALTER TABLE `Articles` MODIFY COLUMN `Title` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `Articles` MODIFY COLUMN `Slug` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `Articles` MODIFY COLUMN `Published On` date NOT NULL DEFAULT '2024-09-19';--> statement-breakpoint
ALTER TABLE `FAQs` MODIFY COLUMN `Question` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `FAQs` MODIFY COLUMN `Answer` text NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Title` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Option` enum('Full-time','Part-time','Remote','Contract','Internship') NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Timezone` enum('UTC','EST','PST') NOT NULL DEFAULT 'EST';--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Published On` date NOT NULL DEFAULT '2024-09-19';--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Clearance Required` boolean NOT NULL DEFAULT false;--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Clearance Required` boolean NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Is Urgent` boolean NOT NULL DEFAULT false;--> statement-breakpoint
ALTER TABLE `Openings` MODIFY COLUMN `Is Urgent` boolean NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` ADD `Department` enum('Engineering','Sales','Marketing','Human Resources','Support Services','Other') DEFAULT 'Other' NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` ADD `Min Salary` decimal(10,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` ADD `Max Salary` decimal(10,2) NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` ADD `Salary Currency` enum('USD','EUR','CAD','GBP') NOT NULL;--> statement-breakpoint
ALTER TABLE `Openings` ADD `Salary Type` enum('day','week','month','year','project','other') NOT NULL;