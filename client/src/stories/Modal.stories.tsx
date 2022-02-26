import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from './Modal';

export const meta = {
    title: "Modal",
    component: Modal,
  } as ComponentMeta<typeof Modal>;
  
  const Template: ComponentStory<typeof Modal> = (args) => (
    <Modal {...args} />
  );
  
  export const Main = Template.bind({});
  Main.args = {
    title: "Default Modal",
    children: <p>"Content"</p>,
  };