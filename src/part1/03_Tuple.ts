// Tuple

let myTuple: [string, number, boolean] = ['Dave', 42, true];  // 튜플 타입 변수 선언과 초기화
let mixed = ['John', 1, false];  // 배열 타입 변수 선언과 초기화

mixed = myTuple;  // myTuple을 mixed에 할당 (튜플과 배열 간의 할당은 가능)

// myTuple = mixed;  // 오류 발생: 튜플은 고정된 구조와 요소의 위치에 의미를 부여하기 때문에 배열과 할당할 수 없음

// myTuple[2] = 42;  // 오류 발생: 튜플의 요소는 초기에 정의한 타입을 유지해야 하므로 불린 타입이어야 함


// - 튜플은 고정된 구조와 요소의 위치에 의미를 부여하는 배열의 한 유형입니다.
// - 튜플은 대괄호 [] 안에 요소의 타입과 위치에 따라 정의됩니다.
// - 튜플은 정확한 요소의 타입과 순서를 갖고, 요소의 타입과 개수를 변경할 수 없습니다.
// - 배열과 달리 튜플은 요소의 위치와 타입에 의미를 부여하여 구조화된 데이터를 표현할 수 있습니다.
// - 튜플과 배열은 서로 다른 타입이기 때문에 튜플을 배열에 할당하거나 배열을 튜플에 할당할 수는 없습니다.
// - 또한, 튜플의 요소는 초기에 정의한 타입을 유지해야 하므로 요소에 다른 타입을 할당할 수 없습니다.
