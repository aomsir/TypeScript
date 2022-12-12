{
    // function函数类型
    function add(numA :number, numB :number) :number {
        return numA + numB
    }

    // 箭头函数类型
    const add1 = (numA :number, numB :number) :number => {
        return numA + numB
    }

    // 自定义函数类型
    type Fn = (n1 :number, n2 :number) => number

    const add2 :Fn = (n1, n2) => {
        return n1 + n2
    }

    // 函数可选参数
    const able = (numA :number, numB ?:number) :void => {
        console.log(numA);
    }

    console.log(add(1,3));
    console.log(add1(1,2));
    console.log(add2(1,4));
    able(1,2)
}