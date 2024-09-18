CREATE TABLE `Articles` (
	`ID` serial AUTO_INCREMENT NOT NULL,
	`Title` varchar(255),
	`Slug` varchar(255),
	`Image URL` varchar(255),
	`Credits` varchar(255),
	`Category` varchar(255),
	`Location` varchar(255),
	`Published On` date,
	`Content` json,
	`Read Time (min)` tinyint,
	CONSTRAINT `Articles_ID` PRIMARY KEY(`ID`)
);
--> statement-breakpoint
CREATE TABLE `FAQs` (
	`ID` serial AUTO_INCREMENT NOT NULL,
	`Question` varchar(255),
	`Answer` text,
	`Keywords` json,
	CONSTRAINT `FAQs_ID` PRIMARY KEY(`ID`)
);
--> statement-breakpoint
CREATE TABLE `Openings` (
	`ID` serial AUTO_INCREMENT NOT NULL,
	`Title` varchar(255),
	`Location` varchar(255),
	`Type` enum('Full-time','Part-time','Remote','Contract','Internship'),
	`Timezone` enum('UTC'),
	`Published On` date DEFAULT '2024-09-18',
	`Description` text,
	`Clearance Required` boolean,
	`Is Urgent` boolean,
	CONSTRAINT `Openings_ID` PRIMARY KEY(`ID`)
);
