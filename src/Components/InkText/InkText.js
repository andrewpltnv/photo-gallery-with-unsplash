import React, {useState} from 'react';

export default function MyComponent(props) {
    const [ink, paint] = useState("black");
    const {colors} = props;
    const style = {
        color: ink,
        cursor: "cell"
    };

    return (
      <span style={style} onClick={()=>Painting()}>
          {props.children}
      </span>
    );

    function Painting() {
        const current = colors.findIndex(count);
        const next = (current >= colors.length - 1)?colors[0]:colors[current+1];
        paint(next);
    }
    function count(item) {
        return item.valueOf() === ink.valueOf();
    }
}
