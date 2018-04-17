<template>
  <div>
      <h3>Add Developers</h3>
      <div class="input-group">
        <div class="input-group-prepend">
          <button class="btn btn-outline-primary" type="button"
                  @click="addDeveloper">Add</button>
        </div>
          <input type="text" class="form-control" placeholder="Developer name" autofocus="autofocus"
                 v-model="developer"
                 @keyup.enter="addDeveloper" />
      </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'developer-form',
  data () {
    return {
      developer: ''
    }
  },
  created() {
    this.resetForm();
  },
  methods: {
    resetForm() {
      this.developer = '';
    },
    addDeveloper() {
      if (this.developer.length) {
        this.$emit('created', {
          id: this.developer,
          name: this.developer
        });

        this.resetForm();
      }
    }
  }
}
</script>
