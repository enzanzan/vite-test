// import { useContext } from 'react';
// import { Button } from 'antd';
// import Context from '../Context';
// import './index.less'

// type Props = {}

// export default function B({}: Props) {

//     const { itemA, message, setItemA } = useContext(Context);

//     const handleClick = () => {
//         setItemA(itemA + 1);
//     }

//   return (
//     <div className='container' style={{ marginTop: 16, border: '2px solid red'}}>
//         <p>我是 B 组件</p>
//         <Button type='primary' onClick={handleClick}>让A+1</Button>
//         <p>B的值: {message}</p>
//     </div>
//   )
// }

import { useContext } from 'react';
import { Button } from 'antd';
import { Context, type } from '../Context';


export default function B() {
    const { itemA, itemB, dispatch }: type = useContext(Context);

    const handleClick = () => {
        dispatch({type: 'SET_ITEM_A', itemA: itemA+1 });
    }

  return (
    <div className='container' style={{ marginTop: 16, border: '2px solid red'}}>
        <p>我是 B 组件</p>
        <Button type='primary' onClick={handleClick}>让A+1</Button>
        <p>B的值: {itemB}</p>
    </div>
  )
}