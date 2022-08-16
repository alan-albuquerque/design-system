import React from 'react';
import Button from "../source/components/UI/Button/Button";

const MyComponent = () => {
    const [count, setCount] = React.useState(1);
    const handleClick = ()=> setCount((prevState)=> prevState + 1)
    return (
        <div>
            <h1>Hello world {count}x!</h1>
            <Button onClick={handleClick}>Click me!</Button>
        </div>
    );
}
export default MyComponent;