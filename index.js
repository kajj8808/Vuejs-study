const data = {counter : 20};

const getData = () =>{
  return 12345
}

const ContentView = {
  template: '<span>{{counter ? counter : "loading..."}}</span>',
  data: function async(){
    return {
      counter: getData()
    }
  }
}

const app = new Vue({
  el: '#app',
  components: {
    'content-view' : ContentView
  }
});
