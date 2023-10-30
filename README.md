# ExpressORMSqlite

## Program Protocol: ExpressORMSqlite

description: ExpressORMSqlite is a book register program that allows you to create a database and tables in it, as well as add, delete, and edit data in the tables.

## Installation

to install the program run one of the following commands:

```bash
npm install express-orm-sqlite
```

```bash
yarn add express-orm-sqlite
```

## Usage

to use express-orm-sqlite follow these steps:

1. Import library and create a new instance of the database class:

```javascript
const { Database } = require('express-orm-sqlite');

const db = new Database({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});
```
This code imports the Database class from express-orm-sqlite and creates a new instance of the class with the SQLite dialect and a path to the database file.

2. Define a model for your database table:
```javascript	
const { DataTypes } = require('sequelize');

const Book = db.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
```
This code defines a Book model with three columns: id, title, and author.

3. Perform CRUD operations on your database table using the model:

```javascript
// Create a new book record
const newBook = await Book.create({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald'
});

// Find all books in the library
const books = await Book.findAll();

// Update a book record
const bookToUpdate = await Book.findByPk(1);
bookToUpdate.title = 'The Catcher in the Rye';
await bookToUpdate.save();

// Delete a book record
const bookToDelete = await Book.findByPk(2);
await bookToDelete.destroy();
```
This code creates a new Book record, retrieves all records from the Books table, updates a record, and deletes a record.

## License
express-orm-sqlite is licensed under the MIT License. See the LICENSE file for details.
