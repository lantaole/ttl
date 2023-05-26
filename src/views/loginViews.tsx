import { Button, Checkbox, Form, Input } from 'antd';
import {useState} from 'react';
//导入dispatch
import {useDispatch} from "react-redux"
import type {Dispatch} from "redux"

//导入action
import {login} from "../store/auth/action";

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
function LoginViews(){
    const dispatch:Dispatch<any> = useDispatch()
    const onFinish = (values: any) => {
        //执行dispatch
        dispatch(login({name, password}))
    };
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="loginBox">
            <h2><span className="primary">滔滔乐</span>登录</h2>
            <Form
                name="basic"
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder="用户名"  value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginViews