function UserAuthentication(req,res,next){
    // Logic for user authentication
    console.log('Checked, User Authenticated');
    next();
}

function IsAdmin(req,res,next){
    // Logic for user is admin
    console.log(' User is Admin');
    next();
}

module.exports={UserAuthentication, IsAdmin};