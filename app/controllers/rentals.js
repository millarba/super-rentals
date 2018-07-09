import Controller from '@ember/controller';

export default Controller.extend({
  action: {
    filterByCity(param) {
      if (param != '') {
        return this.get('store').query('rental', {city: param});
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});
