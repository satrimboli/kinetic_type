import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: kinetic-type', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<kinetic-type />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
