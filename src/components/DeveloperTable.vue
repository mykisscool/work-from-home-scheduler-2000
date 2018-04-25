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
              @click="scheduleDevelopers">Refresh Schedule</b-button>
    <p v-else><em>Please add Developers to create the schedule.</em></p>
  </div>
</template>

<script>
export default {
  name: 'developer-table',
  props: ['developers', 'scheduledDays', 'numDevs' ],
  methods: {
    remove(id) {
      this.$emit('remove', id);
    },
    scheduleDevelopers() {
      this.$emit('scheduled');
    }
  }
};
</script>

<style scoped>
  table td {
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
