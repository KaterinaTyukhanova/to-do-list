Vue.component('board', {
    template:`
      <div class="product">
        
        <div class="columns-on-page">
          
          <div class="column">
            <h2 class="title-column">0% выполнено</h2>
          </div>
          
          <div class="column">
            <h2 class="title-column">50% выполнено</h2>
          </div>
          
          <div class="column">
            <h2 class="title-column">100% выполнено</h2>
          </div>
          
        </div>
        
      </div>
    `,
    data(){
        return{}
    },
    methods: {}
})



let app = new Vue({
    el: '#app'
})