# Car Comparison Application

This tool is for people that are in the market for a car. It allows the user to compare up to three different cars at the same time.

![Demo Screenshot](https://github.com/ChrisLubin/Car-Comparison-Application/blob/master/IMG/Demo/screenshot.PNG)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### PHP Config File

Replace the lines below in the [db_connect](https://github.com/ChrisLubin/Car-Comparison-Application/blob/master/PHP/db_connect.php) file with your credentials.

```php
$dbname = ''; // FAU username
$dbuser = ''; // FAU username
$dbpass = ''; // FAU LAMP password
```

### API Key

Insert your API key from [developer.cars.com](https://developer.cars.com/) into the url variable in the [getCarDetails](https://github.com/ChrisLubin/Car-Comparison-Application/blob/master/PHP/getCarDetails.php) and [getCarTrims](https://github.com/ChrisLubin/Car-Comparison-Application/blob/master/PHP/getCarTrims.php) files.

## Built With

* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction)
* [jQuery](https://jquery.com)