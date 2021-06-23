import React from 'react';
import { PrimaryButton } from 'sdb-dd-webcomponents/dist'

const types = ['button', 'submit', 'reset', 'menu'];

export default {
  component: PrimaryButton,
  title: 'Components/PrimaryButton', 
};

const Template = (args) => <PrimaryButton {...args} />;

export const Example = Template.bind({});

Example.args = {
  color: '#fff',
  size: '14px',
  type:  {
    options: types,
    control: { type: 'select' }
  },
  disabled: false,
  loading: false,
  rounded: true,
};
