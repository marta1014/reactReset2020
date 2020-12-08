import React, { Component } from 'react'
import '../../index.css'

class DemoPublish extends Component {

    state = {
        userVal: '',
        contentVal: '',
        list: []
    }
    isShowMsg = () => {
        const { list } = this.state
        return list.length ? list.map(item => { return <div key={item.id}><p className="pline">{item.userVal}</p><p>{item.contentVal}</p></div> }) : <div>no more</div>
    }
    changeVal = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitMsg = e => {
        const { userVal, contentVal, list } = this.state
        if (!userVal || !contentVal) {return}
        const newList = [...list, {id: list.length++, userVal, contentVal }]
        this.setState({
            list: newList,
            userVal: '',
            contentVal: ''
        })
    }
    render() {
        return (
            <div className="box">
                <h1>comment</h1>
                <div className="pub">
                    <p><input id='userVal' type="text" value={this.state.userVal} onChange={this.changeVal} /></p>
                    <p><textarea id='contentVal' value={this.state.contentVal} onChange={this.changeVal} /></p>
                    <p><button className="btn" onClick={this.submitMsg}>SUBMIT</button></p>
                </div>
                <hr className="line" />
                <div className="list">
                    {this.isShowMsg()}
                </div>
            </div>
        );
    }
}

export default DemoPublish;

/**  案例步骤思路
 *   评论列表的显隐
 *1. 在state中初始化评论列表数据
 *2. 使用数组的map方法遍历state中的列表数据
 *3. 给每个被遍历的li元素添加key属性
 *4. 判断list的lenght显隐暂无数据
 *
 *    发表评论
 * 1. 给按钮绑定单击事件
 * 2. 在事件处理程序中，通过state获取评论信息
 * 3. 将评论信息添加到state中的list数组，并调用setState()方法刷新评论列表
 * 4. 边界情况:清空文本框
 * 5. 边界情况:非空判断
 */