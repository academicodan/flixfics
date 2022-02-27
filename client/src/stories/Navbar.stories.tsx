import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";

export const meta = {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Navbar {...args} />
);

export const Main = Template.bind({});
Main.args = {
  bg: "light",
  label: "Default Navbar",
  backgroundColor: "#14213D",
  color: "#FCA311"
};

export const Dark = Template.bind({});
Dark.args = {
  backgroundColor: "dark",
  color: "#fdfbfb",
  label: "Dark Navbar",
};
