import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'main_admin_hun_yar@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
]
export default users
