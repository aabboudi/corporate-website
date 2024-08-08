ALTER TABLE `Articles` RENAME COLUMN `id` TO `ID`;--> statement-breakpoint
ALTER TABLE `Articles` RENAME COLUMN `title` TO `Title`;--> statement-breakpoint
ALTER TABLE `Articles` ADD `Category` text;