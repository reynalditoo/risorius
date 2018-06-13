module.exports = {
  database: 'mongodb://reynaldito:RST0Q.pp@ds239217.mlab.com:39217/risorius', // à modifier lors du déploiement, du type : 'mongodb://<db_username>:<db_mdp>@ds239127.mlab.com:39127/<db_name>' (ex: 'mongodb://reynaldito:RST0Q.pp@ds239127.mlab.com:39127/meanauthapp')
  secret: 'yoursecret' // on le retrouve l.40 dans routes/users.js
}