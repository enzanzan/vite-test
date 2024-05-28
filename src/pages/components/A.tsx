// import { useContext } from 'react';
// import { Button } from 'antd';
// import Context from '../Context';

// type Props = {}

// export default function A({}: Props) {

//     const { message, setMessage, itemA } = useContext(Context);

//     const handleClick = () => {
//         setMessage(message + 1);
//     }

//   return (
//     <div className='container' style={{border: '2px solid blue'}}>
//         <p>我是 A 组件</p>
//         <Button type='primary' onClick={handleClick}>让B+1</Button>
//         <p>A的值: {itemA}</p>
//     </div>
//   )
// }

import { Button } from 'antd';
import './index.less';
import { useContext } from 'react';
import { Context, type } from '../Context';

const A = () => {

    const { itemA, itemB, dispatch }: type = useContext(Context);

    const handleClick = () => {
        dispatch({type: 'SET_ITEM_B', itemB: itemB+1 });
    }
  return (
    <div className="container" style={{ border: "2px solid blue" }}>
      <p>我是 A 组件</p>
      <Button type="primary" onClick={handleClick}>
        让B+1
      </Button>
      <p>A的值: {itemA}</p>
    </div>
  );
};

export default A;
