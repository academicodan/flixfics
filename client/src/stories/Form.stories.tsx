import { Meta, Story } from "@storybook/react";
import { Form } from "react-bootstrap";
import { ClienteProps } from "../components/CadastroClientes";

const meta: Meta = {
    title: "Form",
    component: Form,
}

export default meta;

const Template: Story<ClienteProps> = (args) => <Form {...args} />;

Template.bind({});  
