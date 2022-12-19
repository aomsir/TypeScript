function fn<Type>(value :Type) :Type {
    console.log(value)
    return value
}

// 调用方式1
fn("Aomsir")
fn(20)

// 调用方式2
fn<string>('Jewix')