import { Story, Meta } from "@storybook/react";
import Modal, { ModalProps } from './Modal';

const meta: Meta = {
    title: "Modal",
    component: Modal,
  }

  export default meta;
  
  const Template: Story<ModalProps> = (args) => (
    <Modal {...args} />
  );
  
  export const Main = Template.bind({});
  Main.args = {
    title: "Default Modal",
    children: <p>Content</p>,
  };