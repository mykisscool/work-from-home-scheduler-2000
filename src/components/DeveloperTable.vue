<template>
  <div class="data-section">
    <table class="table table-striped table-bordered table-sm"
           v-if="developers.length > 0">
      <tbody>
        <tr v-for="(developer, index) in developers"
            :key="developer.name">
          <td scope="row">{{ index +1 }}.</td>
          <td>
            <b-btn variant="outline-danger"
                   size="sm"
                   @click="remove(developer.id)">Delete</b-btn> {{ developer.name }}
          </td>
        </tr>
      </tbody>
    </table>
    <b-button variant="outline-primary"
              v-if="developers.length > 0"
              @click="scheduleDevelopers">Create Schedule</b-button>
    <p v-else><em>Please add Developers to create the schedule.</em></p>
  </div>
</template>

<script>
import Scheduler from '../classes/Scheduler'

export default {
  name: 'developer-table',
  props: ['developers'],
  methods: {
    remove(id) {
      this.$emit('remove', id);
    },
    scheduleDevelopers() {
      let availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
      let maxDevsPerDay = 2;
      let scheduler = new Scheduler(this.developers, availableDays, maxDevsPerDay);

      this.$emit('scheduled', scheduler.schedule());
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
