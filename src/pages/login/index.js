import React, { Component } from 'react';
import './index.css'
import { Card, Form, Input, Button, Checkbox } from 'antd'
class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    state = {
        userName: '',
        password: ''
    }
    userNameChange = e => {
        this.setState({
            userName: e.target.value
        })
    }
    pwdChange = e => {
        const res = new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,})$/).test(e.target.value)
        !!res && this.setState({
            password: e.target.value
        })
        console.log(res, 'about pwd')
    }
    loginSubmit = val => {
        const { userName, password } = this.state
        userName && password && this.props.history.push({ pathname: '/home', params: this.state })
    }
    render() {
        return (
            <div className="loginPage">

                <h1>login</h1>
                <Card className="loginCard">
                    <Form
                        name="basic"
                        initialValues={{
                            // remember: true,
                        }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                    // pattern:[/^(?=.*[0-9])(?=.*[a-zA-Z])(.{8,})$/],
                                },
                            ]}
                        >
                            <Input allowClear onChange={this.userNameChange} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password allowClear visibilityToggle={false} onChange={this.pwdChange} />
                        </Form.Item>

                        {/* <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={this.loginSubmit}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Login;