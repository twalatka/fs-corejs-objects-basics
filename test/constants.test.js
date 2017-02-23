import Test from 'ava';

import * as Assignment from '../src';

Test(`Engine_Types is accessible`, t => {
  t.truthy(Assignment.ENGINE_TYPES);
});
