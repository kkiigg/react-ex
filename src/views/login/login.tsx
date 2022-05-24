import React, { FormEvent, useEffect, useState } from "react";
import { Button, Input, Tooltip, Radio, RadioChangeEvent, Form } from "antd";
import type { SizeType } from "antd/lib/config-provider/SizeContext";
import { fetchData } from "../../util/fetch";

export const LoginPage = () => {
  const login = (username: string, password: string) => {
    fetchData("http://localhost:3004/login", {
      method: "POST",
      body: {
        username,
        password,
      },
    });
  };
  const submitHandle = (event: FormEvent<HTMLFormElement>) => {
    console.log("event", event);
    // let username = (event.currentTarget.elements[0] as HTMLInputElement).value
    // let pasd = (event.currentTarget.elements[1] as HTMLInputElement).value
    // login(username,pasd)
    // event.preventDefault()
  };
  const handleSizeChange = (e: RadioChangeEvent) => {
    setSizeType(e.target.value);
  };
  let [sizeType, setSizeType] = useState<SizeType>("large");
  //闭包bug
  const [test, setTest] = useState("hhh");
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("interval test is ", test);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [test]);
  //使用setTest()赋值时，setInterval不改变console.log

  return (
    <div>
      <Button onClick={() => setTest("xxxxxxxx" + test)}>xxx </Button>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={submitHandle}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your nickname",
            },
            { type: "url", warningOnly: true },
          ]}
        >
          <Input type="text" id="username" name="username" />
        </Form.Item>
        <Form.Item
          label="passowrd"
          name="passowrd"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
          ]}
        >
          {/* <label htmlFor="password">password</label> */}
          <Input type="password" id="password" />
        </Form.Item>
        <Form.Item>
          <Tooltip title="submit">
            <Button type={"primary"} htmlType={"submit"} size={sizeType}>
              login
            </Button>
          </Tooltip>
        </Form.Item>
        <Radio.Group value={sizeType} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="middle">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </Form>
    </div>
  );
};
