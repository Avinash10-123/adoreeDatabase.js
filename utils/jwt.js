import jwt from 'jsonwebtoken'

const generateAccessToken = (userId) => {
    return jwt.sign({_id:userId},"enthelum ")
}

export {generateAccessToken}
