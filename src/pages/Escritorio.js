import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row, Typography } from 'antd';
import React from 'react';

const { Title, Text } = Typography;

const Escritorio = () => {

    const salir = () => {
        console.log("salir")
    }

    return (
        <>
        <Row>
            <Col span={ 20 }>
                <Title level={ 2 }> Asbel</Title>
                <Text> Usted esta trabajando en el escritorio </Text>
                <Text type="success"> 5 </Text>
            </Col>
            <Col span={ 4 } align= "right">
                <Button
                    shape="round"
                    type="danger"
                    onClick={ salir }
                > 
                    <CloseCircleOutlined />
                    Salir 
                </Button>
            </Col>
        </Row>

        <Divider />

        <Row>
            <Col>
                <Text> Esta atendiendo  el ticket numero: </Text>
                <Text style={{ fontSize: 30 }} type="danger" > 50 </Text>
            </Col>
        </Row>
        </>
    )
}

export default Escritorio
