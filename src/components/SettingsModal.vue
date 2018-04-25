<template>
  <b-modal id="modal-center" title="Schedule Settings" ref="modal" centered>
    <div class="form-group">
      <label>Max Developers per day:</label>
      <b-form-select v-model="numDevsModel"
                     :options="numDevsOptions" />
    </div>
    <hr />
    <b-form-group label="Allowed Days:">
      <b-form-checkbox-group v-model="scheduledDaysModel"
                             :options="scheduledDaysOptions" />
    </b-form-group>
    <div slot="modal-footer">
      <b-btn class="float-right"
             variant="outline-primary"
             @click="updateSettings">
        Update Settings
      </b-btn>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'settings-modal',
  props: ['numDevs', 'scheduledDays'],
  data () {
    return {
      numDevsModel: this.numDevs,
      scheduledDaysModel: this.scheduledDays,
      numDevsOptions: [
        { value: 1, text: '1' },
        { value: 2, text: '2', },
        { value: 3, text: '3' },
        { value: 4, text: '4' },
        { value: 5, text: '5' },
        { value: 6, text: '6' },
        { value: 7, text: '7' },
        { value: 8, text: '8' },
        { value: 9, text: '9' },
        { value: 10, text: '10' }
      ],
      scheduledDaysOptions: [
        { value: 'Monday', text: 'Mon' },
        { value: 'Tuesday', text: 'Tue' },
        { value: 'Wednesday', text: 'Wed' },
        { value: 'Thursday', text: 'Thu' },
        { value: 'Friday', text: 'Fri' },
        { value: 'Saturday', text: 'Sat' },
        { value: 'Sunday', text: 'Sun' }
      ]
    }
  },
  methods: {
    updateSettings (e) {
      this.$emit('settingsUpdated', this.numDevsModel, this.scheduledDaysModel);
      this.$refs.modal.hide();
    }
  }
};
</script>
