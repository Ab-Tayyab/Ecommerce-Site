// import jwt from 'jsonwebtoken'

// const generateToken = (id)=>{
//     return jwt.sign({id},process.env.JWT_SECRET,{
//         expiresIn:'30d'
//     })
// }

// export default generateToken

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

module.exports = generateToken;
