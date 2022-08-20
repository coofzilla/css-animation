import { ComponentStory, ComponentMeta } from '@storybook/react';
import Ball from 'components/Ball/Ball';

export default {
  title: 'Ball',
  component: Ball,
} as ComponentMeta<typeof Ball>;

const Template: ComponentStory<typeof Ball> = (args) => <Ball {...args} />;
export const Primary = Template.bind({});
