# iFuse

Fusion Calculator to be used with the original version ( and hopefully upcoming remake ) of Persona 3.

## Getting Started

Clone down the repo
npm install 

### Setup

What things you need to install the software and how to install them

There's a bunch of dependencies to install
```
npm install
```
Use the `database.sql` file to create a SQL database
If you're not using Postgres, check the command syntax

I wrote scripts to import data from a JSON object
I ran it separately so I included the folder for the entire separate repo with it's own instructions
I found a big batch of images later with Persona names as the file name, so I just wrote an insert for the default path using the name already in the database.  That gets around 125 working images ( out of 150 ).  If you add conditional logic to catch the spaces on two-word names you can save some time there.

## Testing

If you want automated testing, just import your preferred software and set it up however you want

## Deployment
Prolly Heroku

## Built With
blood, sweat, & tears ( mostly tears )

## Versioning

This is it lol

## Authors

* **Ben Lynch**

See also the list of [contributors](https://github.com/benjaminlynch010/fusion/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Prime 
* Iolite
* aqiu384.github.io for all the persona data
