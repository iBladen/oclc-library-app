import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

export default {
  title: "Reusable/Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => (
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Add Book",
      path: "/manage-book",
    },
    {
      label: "About",
      path: "/about",
    },
  ],
};
