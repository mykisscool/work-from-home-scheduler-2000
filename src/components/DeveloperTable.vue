<template>
  <div class="data-section">
    <table class="table table-striped table-bordered table-sm"
           v-if="developers.length > 0">
      <tbody>
        <tr v-for="(developer, index) in developers"
            :key="developer.name">
          <td scope="row">{{ index +1 }}.</td>
          <td>
            <button class="btn btn-outline-danger btn-sm"
                    @click="remove(developer.id)">Delete</button> {{ developer.name }}
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-outline-primary"
            v-if="developers.length > 0"
            @click="scheduleDevelopers">Create Schedule</button>
    <p v-else><em>Please add Developers to create the schedule.</em></p>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import scheduler from '../helpers/scheduler';

export default {
  name: 'developer-table',
  props: ['developers'],
  methods: {
    remove(id) {
      this.$emit('remove', id);
    },
    scheduleDevelopers() {
      this.$emit('scheduled', scheduler(this.developers));
    }
  }
};
</script>

<style scoped>
  td {
    vertical-align: middle;
    text-align: center;
  }

  td + td {
    text-align: left;
  }

  td > button {
    margin: 0 10px;
  }

  .data-section {
    margin: 20px 0 30px;
    font-size: 14px;
  }
</style>
