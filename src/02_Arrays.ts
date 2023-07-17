// Arrays
let stringArr: string[] = ['one', 'hey', 'Dave'];  // 문자열 배열 선언과 초기화
let guitars: string[] = ['Strat', 'Les Paul', '5160'];  // 문자열 배열 선언과 초기화
let mixedData: (string | number | boolean)[] = ['EVH', 2000, true];  // 다양한 타입의 요소를 가지는 배열 선언과 초기화

stringArr[0] = 'John';  // 배열 요소 수정
stringArr.push('hey');  // 배열에 요소 추가

guitars[0] = '2013';  // 배열 요소 수정
guitars.unshift('Jim');  // 배열의 맨 앞에 요소 추가

let test: any[] = [];  // 모든 타입을 저장할 수 있는 빈 배열 선언
let bands: string[] = [];  // 문자열만 저장할 수 있는 빈 배열 선언
bands.push('Van Halen');  // 문자열 배열에 요소 추가


// - 배열은 여러 개의 값을 순서대로 저장하는 자료구조입니다.
// - 배열은 타입 뒤에 []를 붙여 해당 타입의 요소를 저장하는 것을 선언합니다.
// - 배열 요소에는 인덱스를 사용하여 접근하고, 값을 수정하거나 추가할 수 있습니다.
// - 다양한 타입의 요소를 저장하려면 유니온 타입을 사용하여 배열을 선언할 수 있습니다.
// - 빈 배열은 해당 타입의 요소를 저장할 수 있는 빈 상태로 초기화됩니다.
// - 배열에 요소를 추가할 때는 push() 메서드를 사용하거나 인덱스를 지정하여 요소를 할당합니다.
