import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'main_admin_hun_yar@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Jhon Joe',
        email: 'mujhye_b_bana_do_admin@gmail.com',
        password: bcrypt.hashSync('654321', 10),
    },
]
export default users