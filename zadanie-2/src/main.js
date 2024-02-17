Vue.component('board', {
    template:`
      <div class="product">

        <div class="add-card-form">
          <button class="btn-create-card" @click="showForm = true">Показать форму</button>
          <button class="btn-create-card" @click="showForm = false">Скрыть форму</button>
          
          <div v-if="showForm">
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
        </div>
        
        <div class="columns-on-page">
          
          <div class="column">
            <h2 class="title-column">0% выполнено</h2>
            <div class="card" v-for="(card, index) in one_column" :key="index">
              <h3>{{ card.name_card }}</h3>
              <div class="line"></div>
              <ul>
                <li v-for="item in card.item_list">
                  <input id="check" type="checkbox" v-model="item.checked">
                  <label for="check">{{item.item_text}}</label>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="column">
            <h2 class="title-column">50% выполнено</h2>
            <div class="card" v-for="(card, index) in two_column" :key="index">
              <h3>{{ card.name_card }}</h3>
              <div class="line"></div>
              <ul>
                <li v-for="item in card.item_list">
                  <input id="check" type="checkbox" v-model="item.checked">
                  <label for="check">{{item.item_text}}</label>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="column">
            <h2 class="title-column">100% выполнено</h2>
            <div class="card" v-for="(card, index) in three_column" :key="index">
              <h3>{{ card.name_card }}</h3>
              <div class="line"></div>
              <ul>
                <li v-for="item in card.item_list">
                  <input id="check" type="checkbox" v-model="item.checked">
                  <label for="check">{{item.item_text}}</label>
                </li>
              </ul>
            </div>
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
            errors: [],
            showForm: false
        }
    },
    methods: {
        onSubmit(){
            this.errors = [];
            if(this.one_column.length < 3){
                if(this.name && this.item_one && this.item_two && this.item_three && this.item_four && this.item_five){
                    this.one_column.push({
                        name_card: this.name,
                        item_list: [
                            {item_text: this.item_one, checked: false},
                            {item_text: this.item_two, checked: false},
                            {item_text: this.item_three, checked: false},
                            {item_text: this.item_four, checked: false},
                            {item_text: this.item_five, checked: false},
                        ]
                    });
                    this.name = null;
                    this.item_one = null;
                    this.item_two= null;
                    this.item_three = null;
                    this.item_four = null;
                    this.item_five = null;
                }
                else if(this.name && this.item_one && this.item_two && this.item_three && this.item_four){
                    this.one_column.push({
                        name_card: this.name,
                        item_list: [
                            {item_text: this.item_one, checked: false},
                            {item_text: this.item_two, checked: false},
                            {item_text: this.item_three, checked: false},
                            {item_text: this.item_four, checked: false},
                        ]
                    });
                    this.name = null;
                    this.item_one = null;
                    this.item_two = null;
                    this.item_three = null;
                    this.item_four = null;
                }
                else if(this.name && this.item_one && this.item_two && this.item_three){
                    this.one_column.push({
                        name_card: this.name,
                        item_list: [
                            {item_text: this.item_one, checked: false},
                            {item_text: this.item_two, checked: false},
                            {item_text: this.item_three, checked: false},
                        ]
                    });
                    this.name = null;
                    this.item_one = null;
                    this.item_two = null;
                    this.item_three = null;
                }
                else{
                    if(!this.name) this.errors.push("Название заметки не может быть пустым!");
                    if(!this.item_one) this.errors.push("Задача №1 не может быть пустой!");
                    if(!this.item_two) this.errors.push("Задача №2 не может быть пустой!");
                    if(!this.item_three) this.errors.push("Задача №3 не может быть пустой!");
                }
            }
        }
    }
})



let app = new Vue({
    el: '#app'
})