{
    // 类型-对象的创建
    const user :{
        name: string
        age :number
    } = {
        name: 'Aomsir',
        age: 21
    }
 
    // 对象类型别名
    type Student = {
        name ?:string,  // 类型可选
        age :number
        sayHi?() :void  // 方法可选
    }

    var student :Student = {
        name: 'Aomsir',
        age: 21
    }
}