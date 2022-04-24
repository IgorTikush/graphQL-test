How to start the project: 
1. Set up couchDB following this instruction: https://docs.couchdb.org/en/stable/install/index.html
2. Update dataBase with db.json file that can be found in the root directory
3. Make indexes following this instruction: https://docs.couchdb.org/en/latest/api/database/find.html#post--db-_index
The indexes must be implemented on the following fields: _id, type, author, name
4. Create .env file and fill it according to the .env-example file
5. Run yarn start:dev
