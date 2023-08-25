const gituser = require('../model/usermodel');


//insert
exports.add_user = async (req,res) => {
    try {
        var data = await gituser.create(req.body);

        res.status(200).json({
            status:"insert succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

//show all
exports.show_user = async (req,res) => {

    try {
        var data = await gituser.find();

        res.status(200).json({
            status:"user show succesful",
            data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}