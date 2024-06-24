import { Form, Input } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  ScanOutlined,
} from "@ant-design/icons";

const Login = () => {
  return (
    <div className="w-[80%] m-auto">
      <h3 class="text-sm  mt-8 font-normal">
        Enter your username and password to login.
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
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Your email..." />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Your password..." />
        </Form.Item>
        <h3 class="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
          Forgot Password?
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
      <button class="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4">
        <ScanOutlined className="ml-[15px]" />
        Login with Qr Code
      </button>
    </div>
  );
};

export default Login;
