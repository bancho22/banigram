import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import Button from './button.presenter'

storiesOf('Button', module)
  .add('with text caption', () => (
    <Button
      caption='Hello world!'
      onClick={action('clicked')}
    />
  ))
