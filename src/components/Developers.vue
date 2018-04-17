<template>
  <div id="app">
    <div class="container">
      <h1>The Work from Home Scheduler 2000&trade;</h1>
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-12">
              <DeveloperForm @created="addDeveloper" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <DeveloperTable :developers="developers"
                              @remove="removeDeveloper"
                              @scheduled="newSchedule" />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <DeveloperSchedule :scheduled="scheduled"
                             :unscheduled="unscheduled"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeveloperForm from './DeveloperForm';
import DeveloperTable from './DeveloperTable';
import DeveloperSchedule from './DeveloperSchedule';

export default {
  name: 'developers',
  data() {
    return {
      developers: [],
      scheduled: {},
      unscheduled: []
    };
  },
  methods: {
    removeDeveloper(id) {
      this.developers = this.developers.filter(developer => (developer.id !== id));
      this.unscheduled = this.unscheduled.filter(developer => (developer.id !== id));

      for (let key in this.scheduled) {
        this.scheduled[key] = this.scheduled[key].filter(developer => (developer.id !== id));
      }
    },
    addDeveloper(developer) {

      // Check for duplicates
      for (let i = 0; i < this.developers.length; i++) {
        if (developer.id === this.developers[i].id) {
          DeveloperForm.methods.resetForm();
          return false; // Do not add
        }
      }

      this.developers.push(developer);
    },
    newSchedule(schedule) {
      this.scheduled = schedule.scheduledDevelopers;
      this.unscheduled = schedule.unscheduledDevelopers;
    }
  },
  components: {
    DeveloperForm,
    DeveloperTable,
    DeveloperSchedule
  }
};
</script>
