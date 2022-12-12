{
    type MyArray = (number |string)[]  // 自定义别名
    
    const list :(string | number)[] = [1, 'Aomsir']
    var lists :MyArray = ["Aomsir", 21]

    console.log(list);
    console.log(lists);    
}