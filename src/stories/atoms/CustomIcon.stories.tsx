import React from "react";
import { Meta, Story } from "@storybook/react";
import CustomIcon, { CustomIconProps } from "src/components/atoms/CustomIcon";

export default {
  title: "atoms/CustomIcon",
  component: CustomIcon,
  parameters: {
    docs: {
      description: {
        component: "아이콘을을 표시하는 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    url: {
      description: "아이콘의 퍼블릭한 경로",
      type: { required: true },
      control: "text",
    },
    color: {
      description: "텍스트의 색상을 결정합니다.",
      control: "color",
    },
  },
};

const Template: Story<CustomIconProps> = (args) => (
  <div
    style={{
      width: 500,
      height: 150,
    }}
  >
    <CustomIcon {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  url: "/icon-arrow_top-24",
  color: "#FFFFFF",
};
