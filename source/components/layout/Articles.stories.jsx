import React from 'react';

import Articles from './Articles';

export default {
  title: 'Example/Articles',
  component: Articles,
};

const Template = (args) => <Articles {...args} />;

export const Default = Template.bind({});
Default.args = {};
