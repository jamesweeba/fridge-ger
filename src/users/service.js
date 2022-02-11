const { publishToRmq } = require("../utils/utils")
const config = require("../conf/conf");


function createUser(req, res) {
    let payload = req.body;

    console.log(payload)
   
    let bindKey =  `${config.apiReleaseStage}.users.datasets` ;
  
    // publishToRmq(bindKey, payload);
    return res.status(201).json({"message":"user created succesfully","statusCode":"201"});
}



module.exports = {
    createUser
}

