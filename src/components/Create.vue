<template>
    <div class="wrapper">
      <div id="topicForm">
        <h1>Create post</h1>
        <form @submit.prevent="create">
          <div class="form-group">
            <label for="title">Title:</label>
            <input id="title" type="text" v-model="$v.title.$model"   @blur="$v.title.$touch" required/>
            <template v-if="$v.title.$error">
              <p class="alert" v-if="!$v.title.required">The title is required</p>
              <p class="alert" v-else-if="!$v.title.minLength">The title must be min 3 chars</p>
              <p class="alert" v-else-if="!$v.title.maxLength">The title must be min 64 chars</p>
            </template>
          </div>

           <div class="form-group">
            <p>Select category</p>
            <input type="radio" id="cats" name="category" value="cats" v-model="category"/>
            <label class="radio" for="cats">Cats</label>
            <input type="radio" id="dogs" name="category" value="dogs" v-model="category"/>
            <label class="radio" for="dogs">Dogs</label>
            <input type="radio" id="other" name="category" value="other" v-model="category"/>
            <label class="radio" for="other">Other</label>
            <template v-if="$v.category.$error">
              <p class="alert" v-if="!$v.category.required">You must select a category</p>
            </template>
          </div>
         
          <div class="form-group">
            <label for="imgUrl">Image Url</label>
            <input id="imgUrl" type="url" v-model="$v.imgUrl.$model" @blur="$v.imgUrl.$touch" required />
            <template v-if="$v.imgUrl.$error">
              <p class="alert" v-if="!$v.imgUrl.required">The image url is required</p>
              <p class="alert" v-else-if="!$v.imgUrl.url">Not valid url</p>
            </template>
          </div>
         
          <div class="form-group">
            <label for="content">Content </label>
            <textarea id="content" v-model="$v.content.$model"  @blur="$v.content.$touch" required></textarea>
            <template v-if="$v.content.$error">
              <p class="alert" v-if="!$v.content.required">The content is required</p>
              <p class="alert" v-else-if="!$v.content.minLength">The contet must be min 16 chars</p>
              <p class="alert" v-else-if="!$v.content.maxLength">The title must be min 2000 chars</p>
            </template>
          </div>

          <button :disabled="$v.$invalid">Create post</button>
        </form>
      </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, url } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  mixins: [validationMixin],
  data() {
    return {
      title: "",
      category: "",
      imgUrl: "",
      content: "",
    };
  },
    validations: {
    title: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(16)
    },
    content: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(2000)
    },
    imgUrl: {
      required,
      url
    },
    category: {
      required
    }
  },
    methods: {
    ...mapActions(["createPost"]),
    create() {
      this.createPost({
        title: this.title,
        category: this.category,
        imgUrl: this.imgUrl,
        content: this.content
      });
      // this.title = null;
      // this.category = null;
      // this.imgUrl = null;
      // this.content = null;
    },
  }
};

</script>

<style scoped>
#topicForm {
  width: 50%;
  margin: 30px auto;
  background-color: white;
  padding: 30px;
}
input {
  width: 100%;
  padding: 7px 0;
  margin: 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid cadetblue;
}
input[type="radio"] {
  width: auto;
  margin: 0 10px;
  display: inline-block;
}
textarea {
  width: 100%;
  height: 200px;
  padding: 7px 0;
  margin: 0;
  display: inline-block;
  border: none;
  border-bottom: 1px solid cadetblue;
}

label {
  display: inline-block;
  font-size: 18px;
  color:cadetblue;
  cursor: pointer;
}
button {
  width: 30%;
  margin: 10px 0;
  padding: 10px 40px;
  border: 2px solid dodgerblue;
  display: inline-block;
  background-color:darkcyan ;
  color:lavender;
  font-size: 20px;
  /* cursor: pointer; */
}
button:disabled {
  border: none;
  background-color:darkcyan ;
  color:lavender;

}
.alert {
  color: red;
  padding: 0;
  margin: 0 0 12px 0;
  font-size: 1em;
  margin-top: 0.6em;
}
.form-group {
  margin: 20px 0;
}
a {
  text-decoration: none;
  color: #42b983;
}
h1 {
  text-align: center;
}
#topicForm > form > div:nth-child(2) > p {
  margin-bottom: 1.1em;
  margin-top: 2em;
}
#topicForm > form > div:nth-child(3) {
  margin-top: 3em;
}
</style>