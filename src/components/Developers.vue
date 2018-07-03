<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>The Work from Home Scheduler 2000<sup>&trade;</sup></h1>
        </div>
      </div>
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
                              :scheduledDays="scheduledDays"
                              :numDevs="numDevs"
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
    <div>
      <SettingsModal :numDevs="numDevs"
                     :scheduledDays="scheduledDays"
                     @settingsUpdated="updateSettings" />
    </div>
  </div>
</template>

<script>
import DeveloperForm from './DeveloperForm'
import DeveloperTable from './DeveloperTable'
import DeveloperSchedule from './DeveloperSchedule'
import SettingsModal from './SettingsModal'
import Scheduler from '../classes/Scheduler'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'developers',
  data() {
    return {
      developers: [],
      scheduled: {},
      unscheduled: [],
      numDevs: 2,
      scheduledDays: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday']
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
      this.newSchedule();
    },
    newSchedule() {
      let scheduler = new Scheduler(this.developers, this.scheduledDays, this.numDevs);
      let schedule = scheduler.schedule();

      this.scheduled = schedule.scheduledDevelopers;
      this.unscheduled = schedule.unscheduledDevelopers;
    },

    updateSettings(numDevs, scheduledDays) {
      this.numDevs = numDevs;
      this.scheduledDays = scheduledDays;
      this.newSchedule();
    }
  },
  components: {
    DeveloperForm,
    DeveloperTable,
    DeveloperSchedule,
    SettingsModal
  }
};
</script>
