import { Form, Input } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  ScanOutlined,
} from "@ant-design/icons";

const Register = () => {
  return (
    <div className="w-[80%] m-auto">
      <h3 class="text-sm  mt-8 font-normal">
        Enter your email and password to register.
      </h3>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 32,
        }}
        style={{
          maxWidth: "100%",
          marginTop: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input placeholder="name..." />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your surname",
            },
          ]}
        >
          <Input placeholder="surname..." />
        </Form.Item>

        <Form.Item
          name="mail"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input placeholder="Enter your email address!" />
        </Form.Item>

        <Form.Item
          name="enter_password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password!" />
        </Form.Item>

        <Form.Item
          name="confirm_password"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
        >
          <Input.Password placeholder="Confirm your password!" />
        </Form.Item>

        <h3 class="font-normal mt-[14px] cursor-pointer w-full m-auto">
          Or register with
        </h3>
        <button class="bg-[#46A358] mt-4 flex rounded-md w-full items-center justify-center gap-1 h-9 text-base text-white cursor-pointer">
          Login
        </button>
      </Form>

      <button class="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4">
        <FacebookOutlined className="ml-[15px]" />
        Login with Facebook
      </button>
      <button class="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4">
        <GoogleOutlined className="ml-[15px]" />
        Login with Google
      </button>
    </div>
  );
};

export default Register;
