-- CreateTable
CREATE TABLE `templates` (
    `id` VARCHAR(191) NOT NULL,
    `header_id` INTEGER NOT NULL,
    `header_text_color` VARCHAR(191) NOT NULL,
    `header_bg_color` VARCHAR(191) NOT NULL,
    `header_links` TEXT NOT NULL,
    `main_id` INTEGER NOT NULL,
    `main_text_color` VARCHAR(191) NOT NULL,
    `main_bg_color` VARCHAR(191) NOT NULL,
    `main_text` TEXT NOT NULL,
    `footer_id` INTEGER NOT NULL,
    `footer_text_color` VARCHAR(191) NOT NULL,
    `footer_bg_color` VARCHAR(191) NOT NULL,
    `footer_text` TEXT NOT NULL,

    INDEX `templates_id_idx`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
