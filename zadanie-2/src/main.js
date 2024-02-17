Vue.component('board', {
    template:`
      <div class="product">

        <div class="add-card-form">
          <form @submit.prevent="onSubmit">
            <p v-if="errors.length">
              <b>Возникли следующие ошибки, пожалуйста, исправьте их!</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
            </p>

            <p>
              <label for="name">Название заметки</label>
              <input id="name" v-model="name">
            </p>

            <p>
              <label for="item_one">Задача №1</label>
              <input id="item_one" v-model="item_one">
            </p>

            <p>
              <label for="item_two">Задача №2</label>
              <input id="item_two" v-model="item_two">
            </p>

            <p>
              <label for="item_three">Задача №3</label>
              <input id="item_three" v-model="item_three">
            </p>

            <p>
              <label for="item_four">Задача №4</label>
              <input id="item_four" v-model="item_four">
            </p>

            <p>
              <label for="item_five">Задача №5</label>
              <input id="item_five" v-model="item_five">
            </p>

            <p>
              <input class="btn-create-card" type="submit" value="Создать заметку">
            </p>
          </form>
        </div>
        
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
        return{
            one_column: [],
            two_column: [],
            three_column: [],
            name: null,
            item_one: null,
            item_two: null,
            item_three: null,
            item_four: null,
            item_five: null,
            errors: []
        }
    },
    methods: {}
})



let app = new Vue({
    el: '#app'
})