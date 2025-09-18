const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("mca","root","",{
    host:"localhost",
    dialect:"mysql"
});
sequelize
    .authenticate()
    .then(()=>{
        console.log("connection has been established successfully");
    })
    .catch((error)=>
    {
        console.error("Error-> "+error);
    })
const Song = sequelize.define("Song",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        title:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        category:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        url:{
            type:Sequelize.STRING,
            allowNull:false,
        }
});
sequelize.sync()
    .then(()=>{
        console.log("Model created");
    })
    .catch((error)=>{
        console.error("Error-> "+error);
    });
// Song.create({
//     title:"vandematram",
//     category:"patrotic",
//     url:"http://...",
// });
// Song.create({
//     title:"lakdi ki kathi",
//     category:"animated",
//     url:"http://...",
// });
// Song.findAll()
//     .then((allSongs)=>{
//         console.log("All songs retrived successfully allsongs");
//     })
//     .catch((error)=>{
//         console.error("Error:"+error);
//     });
// Song.update({title:"Ae mere vatan"},
//     {where:{id:21}})
//     .then(()=>{
//         console.log("update successfully")
//     })
//     .catch((err)=>{
//         console.error("Error:",err);
//     })
// Song.findByPk(3)
//     .then((song){if(song){
//         console.log("song retrieved successfully:",song);
//     }else{
//         console.log("Song Not Found");
//     }})
//     .catch((err)=>{
//         console.error("Error retrieving song:",err);
//     });
// Song.destroy({where:{id:5}})
//     .then(()=>{
//         console.log("Song deleted");
//     })
//     .catch((err)=>{
//         console.error("Error deleting song:",err);
//     });
