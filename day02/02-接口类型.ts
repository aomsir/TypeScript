interface User {
    name :string,
    age :number
}

interface IUser extends User {
    gender :string  // 会继承User的所有属性
}