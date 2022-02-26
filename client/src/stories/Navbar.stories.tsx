import { Meta, Story } from "@storybook/react";
import { Navbar } from "react-bootstrap";

const meta: Meta = {
    title: "Form",
    component: Navbar,
}

export default meta;

const Template: Story<{ bg: 'light' | 'dark' | 'primary', expand: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'}> = (args) => <Navbar {...args} />;

Template.bind({});  
