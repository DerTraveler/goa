import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CenteredContent from './CenteredContent';

storiesOf('CenteredContent', module).add('default', () => (
  <div style={{ height: 600, background: 'grey' }}>
    <CenteredContent
      content={
        <Card>
          <CardContent>Content</CardContent>
        </Card>
      }
      width={number('width', 4, { range: true, min: 1, max: 12, step: 1 })}
    />
  </div>
));
