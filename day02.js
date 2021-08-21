const data = { a: 1 };

/* 인스턴스 속성값 
// 인스턴스에 있는 속성은
// 원본 데이터에 있는 값을 반환합니다.
//console.log(vm.a === data.a)

// 인스턴스에 있는 속성값을 변경하면
// 원본 데이터에도 영향을 미칩니다. 주소값 인듯..
vm.a = 2;
data.a; // => 2 반대로해도 마찬가지.
//console.log(data.a)
*/

/*freeze()
//여기에서 유일한 예외는 Object.freeze ()를 사용하는 경우입니다. 이는 기존 속성이 변경되는 것을 막아 반응성 시스템이 추적할 수 없다는 것을 의미합니다.
 const obj = { foo: 'bar'};
Object.freeze(obj);
new Vue({
  el: '#app',
  data: obj
}) */

/* created method
const vm = new Vue({
  data : {
    a: 1
  },
  created: function () {
    console.log('a is: ' + this.a)
  }
}); */

new Vue({
  el: '#app2',
  data: {
    text: 'kang',
    ok: true,
    number: 0,
    id: new Date().getTime(),
    url: 'https://kr.vuejs.org/',
    key: 'href',
    evnet: 'click',
  },
  methods: {
    doSomething: function () {
      console.log('on Click');
    },
  },
});

const vm = new Vue({
  el: '#app3',
  data: {
    message: 'message',
    fristName: 'kang',
    lastNmae: 'chang',
  },
  computed: {
    // 계산된 getter
    //getter 함수 => console.log(vm.reversedMessage) // => '요세하녕안'
    reversedMsg: function () {
      return this.message.split('').reverse().join('');
    },
    fullName: {
      //getter
      get: function () {
        return `${this.fristName} ${this.lastNmae}`;
      },
      //setter
      set: function (newValue) {
        const names = newValue.split(' ');
        this.fristName = names[0];
        this.lastNmae = names[names.length - 1];
      },
      /* 이제 vm.fullName = 'John Doe'를 실행하면 설정자가 호출되고 vm.firstName과 vm.lastName이 그에 따라 업데이트 됩니다 */
    },
  },
  //{{reversedMessage() }} 이렇게 사용가능..
  methods: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('');
    },
  },
});


const Child = {
  template: '<div>사용자 정의 컴포넌트.{{test}}</div>',
  
}

const app4 = new Vue({
  el: '#app4',
  data: {
    test : "test"
  },
  components: {
    'my-componet' : Child
  },
});
