const client = require("../configs/db");


//editPost Function

exports.updateAccomodation = async (req, res) => {
  const {description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,userid,price_per_day,age,event_type,outside,id} = req.body;
  try {
        //Inserting data into the database
        const data = await client.query(
          `UPDATE accomodation set description=$3,location=$4,bedrooms=$5,bathrooms=$6,kitchens=$7,entrances=$8,guests=$9,category=$10,price_per_day=$12,age=$13,event_type=$14,outside=$15 WHERE id=$1 AND userid=$2;`,
          [description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,userid,price_per_day,age,event_type,outside,id],
          (err) => {
            if (err) {
           //If post is not edited is not inserted to database
              console.error(err);
              return res.status(500).json({
                error: "Database error",
              });
            } else {
              res
                .status(200)
                .send({ message: `Post for user ${user_id} have been edited to the database`});
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