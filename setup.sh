#!/usr/bin/bash

composer require laravel/sail --dev
composer update --with-all-dependencies
# php artisan sail:install --with="mariadb"

# sail php --version