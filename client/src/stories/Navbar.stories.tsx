import { Story, Meta } from "@storybook/react";
import Navbar, { NavProps } from "./Navbar";

const meta: Meta = {
  title: "Navbar",
  component: Navbar,
}

export default meta;

const Template: Story<NavProps> = (args) => (
  <Navbar {...args} />
);

export const Main = Template.bind({});
Main.args = {
  bg: "light",
  label: "Default Navbar",
  backgroundColor: "#14213D",
  color: "#FCA311"
};


