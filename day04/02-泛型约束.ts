interface ILength {
    length :number
}

function fn<Type extends ILength>(value :Type) :Type {
    console.log(value.length)
    return value
}

fn(['a','b'])
fn([1,2,3,4])
fn(1)  // 会报错 