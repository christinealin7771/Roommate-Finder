const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require('./models');

//Routers
const usersRouter = require("./routes/Users")
app.use("/users", usersRouter)
const preferencesRouter = require("./routes/Preferences")
app.use("/preferences", preferencesRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('running on port 3001');
    });
});

