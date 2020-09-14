//display color
import styled from 'styled-components';

export const DisplayColor = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #ffffff;

  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  button {
    background: transparent;
    border-radius: 10px;
    border: 2px solid;
    color: #ebbebe;
    margin: 13em 1em;
    padding: 1em 5em;
    position: flex;
    width: 212px;
    height: 54px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
  }
`;

// div light={this.isLight()}

//  export function Counter() {
//    // 1. Declare the State Variable
//    const [count, setCount] = useState(5);

//    // const stateVar = useState(0);
//    // count = stateVar[0];
//    // setCount = stateVar[1];

//    return (
//      <div>
//        {/* 2. Use the state variable */}
//        {count}

//        <button
//          onClick={() =>
//            // 3. Reset the state variable
//            setCount(count + 1)
//          }
//        >
//          +
//        </button>

//        <button
//          onClick={() =>
//            // 3. Reset the state variable
//            setCount(count - 1)
//          }
//        >
//          -
//        </button>
//      </div>
//    );
//  }
