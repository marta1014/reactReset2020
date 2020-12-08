const Hello = props => {
    return (
        <div>
            <h1>hello  函数组件test阿维  {props.share}</h1>
            <button onClick={props.send}>点击阿维</button>
        </div>
    )
}
// const shange = props => {
//     console.log(props)
// }
export default Hello