<template>
  <div>
      <h3>Add Developers</h3>
      <div class="input-group">
        <div class="input-group-prepend">
          <b-btn variant="outline-primary"
                 @click="addDeveloper">Add</b-btn>
        </div>
        <input type="text" class="form-control" placeholder="Developer name" autofocus="autofocus"
               v-model="developer"
               @keyup.enter="addDeveloper" />
        <div class="input-group-append">
          <b-btn v-b-modal.modal-center variant="outline-secondary" size="sm">
            <icon name="cog" scale="1.2" color="#bbb"></icon>
          </b-btn>
        </div>
      </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/cog'

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

<style scoped>
  button.btn-outline-secondary {
    padding-bottom: 0;
  }

  button.btn-outline-secondary svg {
    margin-bottom: -2px;
  }
</style>
