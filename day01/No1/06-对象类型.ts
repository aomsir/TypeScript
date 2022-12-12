{
    interface User {
        name :string
        age :number
        gender :boolean
        sayHi() :void
    }

    const user :User = {
        name: "Aomsir",
        age: 21,
        gender: false,
        sayHi() {
            console.log('Hello World');
        }
    }
}