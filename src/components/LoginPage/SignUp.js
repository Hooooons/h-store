import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import md5 from "md5";
// import { useForm } from "react-hook-form";

import { Form, Input, Typography, Button } from "antd";

const { Title } = Typography;

const MainContainer = styled.div`
  width: 500px;
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
      span: 7,
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

function SignUp() {
  // const { register, watch, errors } = useForm();

  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

      await createdUser.user.updateProfile({
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
        // 휴대전화는 데이터베이스에서 다뤄야할듯. updateProfile에선 안됨
        // phoneNumber: data.phone_number,
      });

      //firebase 데이터베이스에 저장해주기
      await firebase.database().ref("users").child(createdUser.user.uid).set({
        email_Id: createdUser.user.email,
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
        phoneNumber: data.phone_number,
      });

      setLoading(false);

      // console.log(data);
      // console.log(createdUser);
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
        회원가입
      </Title>
      <Form
        //  onSubmit={handleSubmit} antd는 onFinish로 사용
        onFinish={handleSubmit}
        {...formItemLayout}
      >
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
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "이름을 입력해주세요",
            },
          ]}
        >
          <Input placeholder="Name" />
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
            {
              min: 6,
              message: "6자 이상의 비밀번호를 입력해주세요",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="password_confirm"
          label="Password Confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("비밀번호를 동일하게 입력해주세요");
              },
            }),
          ]}
        >
          <Input.Password placeholder="Password Confirm" />
        </Form.Item>

        <Form.Item
          name="phone_number"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "핸드폰 번호를 입력해주세요",
            },
          ]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>

        {errorFromSubmit && <p>{errorFromSubmit}</p>}

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          style={{
            width: "500px",
            background: "#a0d911",
            borderColor: "#7cb305",
            margin: "0.5rem 0",
          }}
          // 로딩중일때 버튼 못누르게
          disabled={loading}
        >
          회원가입 하기
        </Button>
        <br />
        <Link style={{ color: "gray", textDecoration: "none" }} to="login">
          이미 아이디가 있다면..
        </Link>
      </Form>
    </MainContainer>
  );
}

export default SignUp;
