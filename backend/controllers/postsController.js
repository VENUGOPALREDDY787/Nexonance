

export const activeCheck = async(req, res, next) => {
    return res.status(200).json({message: "Running"});
}

