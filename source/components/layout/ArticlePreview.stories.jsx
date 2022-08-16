import React from 'react';

import ArticlePreview from './ArticlePreview';

export default {
  title: 'Example/ArticlePreview',
  component: ArticlePreview,
};

const Template = (args) => <ArticlePreview {...args} />;

export const Default = Template.bind({});
Default.args = {};
