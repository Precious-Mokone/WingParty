
const client = require("../configs/db");


//createPost Function
//description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,userid,price_per_day,age,event_type,outside

// {
//   "description":"Mansion in midrand next to a handful of malls",
//   "location":"Johannesburg",
//   "bedrooms":"4",
//   "bathrooms":"2",
//   "kitchens":"2",
//   "entrances":"2",
//   "guests":"10",
//   "category":"Mansion",
//   "userid":"20",
//   "price_per_day":"1200",
//   "age":"21",
//   "event_type":"Any",
//   "outside":"Smoking area"
// }

// description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,price_per_day,age,event_type,outside,
// userid



exports.createAccomodation = async (req, res) => {
    const {description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,outside, userid,price_per_day,age,event_type
     }= req.body;
  try {
        //Inserting data into the database
        const data = await client.query(
          `INSERT INTO accomodation (description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,outside,userid,price_per_day,age,event_type
            ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13);`,
          [description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,outside,userid,price_per_day,age,event_type
            ],
          (err) => {
            if (err) {
           //If post is not inserted is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send({ message: `accomodation for user ${userid} have been added to the database`});
            }
          }
        );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Database error while creating post!", //Database connection error
    });
  }
};

