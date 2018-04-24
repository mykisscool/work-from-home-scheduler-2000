<template>
  <div>
    <h3 v-if="isAnyoneScheduled">Schedule</h3>
    <b-card class="text-center"
            v-for="(developers, day) in scheduled"
            v-if="scheduled[day].length > 0"
            :header="day"
            :key="day">
      <div v-for="developer in developers">
        <span>{{ developer.name }}</span>
      </div>
    </b-card>
    <b-card class="text-center" 
            header="Unscheduled"
            border-variant="danger"
            v-if="unscheduled.length > 0">
      <div v-for="(developer, index) in unscheduled">
        <span>{{ developer.name }}</span>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'developer-schedule',
  props: ['scheduled', 'unscheduled'],
  computed: {
    isAnyoneScheduled: function () {
      let counter = 0;
      for (let key in this.scheduled) {
        counter += this.scheduled[key].length;
      }
      return ((counter > 0 ) ? true : false);
    }
  }
}
</script>

<style scoped>
  .card-header {
    padding: 0.50rem 1.0rem;
    font-weight: 4000
  }

  .card-body {
    padding: 0.50rem;
    font-size: 14px;
  }

  .card-body div + div {
    margin-top: 7px;
  }

  .card + .card {
    margin-top:15px;
  }

  .card:last-of-type {
    margin-bottom: 30px;
  }
</style>
