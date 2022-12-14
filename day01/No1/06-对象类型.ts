{
    interface User {
        name :string
        age :number
        gender :boolean
        sayHi() :void
        add(n1 :number, n2 :number) :number
    }

    const user :User = {
        name: "Aomsir",
        age: 21,
        gender: false,
        sayHi() {
            console.log('Hello World');
        },
        add(n1, n2) {
            return n1 + n2
        }
    }
}