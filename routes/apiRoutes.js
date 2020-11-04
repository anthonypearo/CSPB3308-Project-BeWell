
const { sequelize } = require("../models");
var db = require("../models");
//console.log("inside apiRoutes, db: ", db);

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    console.log("inside apiRoutes, res");
    db.User.findAll({}).then(function(dbUser) {
//      console.log("inside apiRoutes, dbUser: ", dbUser);
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    console.log("inside apiRoutes, /api/user, req.body: ", req.body)
    //breakdown incoming requests into database models
    //check if user already exists by email, grab id, else create new user, grab id
    //find Flight, get flightID
    //insert into submission, get submissionID
    //insert into submissionSymptom
    try {
      const result = sequelize.transaction(async (t) => {
        const user = await db.User.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email
        }, {transaction: t}).then(function(dbUser) {
          console.log(dbUser);
          // res.json(dbUser);
        }).catch(function(error) {
          console.log(error);
        });
        const flight = await db.Flight.create({
          flightDate: req.body.date,
          airline: req.body.airline,
          flightNumber: req.body.flightnumber
        }, {transaction: t}).then(function(dbFlight) {
          console.log(dbFlight);
          // res.json(dbFlight);
        }).catch(function(error) {
          console.log(error);
        });
        const illness = await db.Illness.create({
          illnessName: req.body.illness
        }, {transaction: t}).then(function(dbIll) {
          console.log(dbIll);
          //res.json(dbIll);
        });
        const symptom = await db.Symptom.create({
          symptom_name: req.body.sym,
        }, {transaction: t}).then(function(dbSym) {
          console.log(dbSym);
          //res.json(dbSym);
        });
        res.send({'user': user,
                  'flight': flight,
                  'illness': illness,
                  'symptom': symptom
              });
        return {'user': user,
                'flight': flight,
                'illness': illness,
                'symptom': symptom
              }
      })
    } catch (error) {
      console.log("ERROR apiRoutes post: ", error);
      console.log("\n");
      console.log("ERROR sql-property: ", error.sql);
    }
  });

};
//Route that pulls back illnesses, symptoms, flights, list of aggregated submissions
//each table gets it's own route/uri - one get from db and one post to write to db
