import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean} from '@storybook/addon-knobs';
import App from '../../App'

import ListCard from './ListCard';

const stories = storiesOf("ListCard", module);

stories.addDecorator(withKnobs);

storiesOf("ListCard", module)
  .add("default", () => <ListCard header="Header" items={['-Item 1', '-Item 2', '-Item 3']} newItems='storybook' />)
  .add("with title", () => <ListCard header="New Header" items={['-Item 1', '-Item 2', '-Item 3']} />)
  .add('with new items', () => <ListCard header="Header" items={['-New Item1', '-New Item 2', '-New Item 3']} />)
  .add('with some emoji', () => <ListCard header=<span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
      items={['-New Item1', '-New Item 2', '-New Item 3']}
    /> )

  // .add('withText', () => <Button>Holaaa Button</Button>)




// stories
// .add('with custom themes', () => {
//   const theme = select('custom theme', ['go', 'stop', 'yield'], 'go');
//   return <ListCard theme={theme}> Themed </ListCard>
//  });

  // .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  // .add('with text', () => <Button onClick={action('clicked')}>Test Button</Button>)
  // .add('with some emoji', () => (
  //   <Button>
  //     <span role="img" aria-label="so cool">
  //       😀 😎 👍 💯
  //     </span>
  //   </Button>
  // ))
  // .add('with disabled prop activated', () => {
  //   const disabled = boolean('Disabled', true);
  //   return <Button disabled={disabled} > Disabled </Button>
  // })
  // .add('with custom themes', () => {
  //   const theme = select('custom theme', ['go', 'stop', 'yield'], 'go');
  //   return <Button theme={theme}> Themed </Button>
  //  });
