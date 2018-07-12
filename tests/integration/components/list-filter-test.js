import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ITEMS = [{city: 'San Francisco'}, {city: 'Portland'}, {city: 'Seattle'}];
const FILTERED_ITEMS = [{city: 'San Francsico'}];

module('Integration | Component | list-filter', function(hooks) {
  setupRenderingTest(hooks);

  test("should initially load all listings", function(assert) {

  });
});
