import React from "react";

import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Title, Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const Ingresar = () => {

  const history = useHistory();

  const onFinish = ( values ) => {
    console.log('Success:', values);

    history.push('/escritorio'); 
  };

  const onFinishFailed = ( errorInfo ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Title label={ 2 } > Ingresar </Title>
      <Text> Ingrese su nombre y numero de escritorio </Text>
      <Divider />

      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agente"
          name="username"
          rules={[{ required: true, message: 'porfavor ingrese su nombre' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[{ required: true, message: ' Ingrese el numero de escritorio' }]}
        >
          <InputNumber min={ 1 } max={ 99 } />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button 
            type="primary" 
            tmlType="submit"
            shape="round"
          >
          <FormOutlined /> 
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
    
};

export default Ingresar;
