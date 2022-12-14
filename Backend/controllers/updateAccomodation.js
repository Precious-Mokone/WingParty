const client = require("../configs/db");

//description=$2,location=$2,bedrooms=$2,bathrooms=$4,kitchens=$5,entrances=$6,guests=$7,category=$8,userid=$9,price_per_day=$10,age=$11,event_type=$12,outside=$13

//bathrooms,kitchens,entrances,guests,category,userid,price_per_day,age,event_type,outside

exports.updateAccomodation = async (req, res) => {
    const {description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,userid,price_per_day,age,event_type,outside,id} = req.body;
    try {
          //Inserting data into the database
          const data = await client.query(
            `UPDATE accomodation set description=$1,location=$2,bedrooms=$3,bathrooms=$4,kitchens=$5,entrances=$6,guests=$7,category=$8,userid=$9,price_per_day=$10,age=$11,event_type=$12,outside=$13 WHERE id=$14;`,
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
                  .send({ message: `accomodation for user ${id} have been edited to the database`});
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

//editPost Function

// exports.updateAccomodation = async (req, res) => {
//   const {description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,userid,price_per_day,age,event_type,outside,id} = req.body;
//   try {
//         //Inserting data into the database
//         const data = await client.query(
//           `UPDATE accomodation set description=$1,location=$2,bedrooms=$3,bathrooms=$4,kitchens=$5,entrances=$6,guests=$7,category=$8,price_per_day=$9,age=$10,event_type=$11,outside=$12 WHERE id=$13;`,
//           [description,location,bedrooms,bathrooms,kitchens,entrances,guests,category,id,price_per_day,age,event_type,outside],
//           (err) => {
//             if (err) {
//            //If post is not edited is not inserted to database
//               console.error(err);
//               return res.status(500).json({
//                 error: "Database error",
//               });
//             } else {
//               res
//                 .status(200)
//                 .send({ message: `accomodation for user ${id} have been edited to the database`});
//             }
//           }
//         );
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({
//       error: "Database error while creating post!", //Database connection error
//     });
//   }
// };