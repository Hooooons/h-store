import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

import { Form, Input, Typography, Button } from "antd";

const { Title } = Typography;

const MainContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  margin: 0 auto;
  justify-content: center;

  /* 임시 */
  /* border: 3px solid black; */
`;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

function Login() {
  // const { register, watch, errors } = useForm();

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);

      // 에러 10초간 보여주고 사라지기
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 10000);
    }
  };

  return (
    <MainContainer>
      <Title style={{ textAlign: "center", marginBottom: "2rem" }}>
        로그인
      </Title>
      <Form onFinish={handleSubmit} {...formItemLayout}>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: "이메일을 입력해주세요",
            },
            {
              type: "email",
              message: "이메일 형식을 지켜주세요",
            },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        {errorFromSubmit && <p>{errorFromSubmit}</p>}

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{
            // width: "400px",
            width: "100%",
            background: "#a0d911",
            borderColor: "#7cb305",
            // margin: "0.5rem 0",
            margin: "0 auto -1rem auto",
            display: "flex",
            justifyContent: "center",
          }}
          // 로딩중일때 버튼 못누르게
          disabled={loading}
        >
          로그인
        </Button>
        <br />
        <Link style={{ color: "gray", textDecoration: "none" }} to="signup">
          아직 아이디가 없다면..
        </Link>
      </Form>
    </MainContainer>
  );
}

export default Login;
