# iFuse - Persona 3 Fusion Calculator

iFuse is a Fusion Calculator designed for use with the original version of Persona 3 and any upcoming remakes. This tool helps players calculate and discover various persona fusion combinations.

## Getting Started

To get started with iFuse, follow these steps:

1. Clone this repository to your local machine.
   
   ```
   git clone https://github.com/benjaminlynch010/fusion.git
   ```

2. Install the project dependencies using npm.

   ```
   npm install
   ```

3. Set up the database by using the `database.sql` file provided. If you're not using Postgres, ensure you check the command syntax for your database system.

4. To populate the database with persona data, you can use the scripts provided to import data from the included JSON object. Detailed instructions for this step can be found in a separate repository included in this project.

5. Additionally, there's a batch of images with Persona names as file names. You can insert these images into the database by matching the names already in the database. This will help you have working images for around 125 personas out of the 150 in the game. You can optimize this process by adding conditional logic to handle two-word persona names with spaces.

## Testing

If you wish to implement automated testing for this project, you can import your preferred testing software and set it up according to your requirements.

## Deployment

For deploying your iFuse application, consider using a platform like Heroku for easy deployment and hosting.

## Built With

iFuse was built with a lot of dedication and effort,
React, Express, PostgreSQL, JavaScript, node, Mantine UI

## Versioning

This is the initial release of iFuse.

## Author

* **Ben Lynch**

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

Special thanks to:

* Prime
* Iolite
* aqiu384.github.io for providing Persona data