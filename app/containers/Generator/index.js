import React, { useState } from 'react';
import { getRandomItem } from 'helper';
import { useSpring, animated } from "react-spring";
import MediaQuery from "react-responsive";

import Filter from 'components/Filter';
import GeneratorResultItem from "./GeneratorResultItem";
import Bottle from "components/Bottle";

import firstCollection from 'data/first';
import secondCollection from 'data/second';
import thirdCollection from 'data/third';


import './Generator.scss';

// const RefreshIcon = ({ onClick }) => {
//   return (
//     <svg onClick={onClick} width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.6 52.6">
//       <path
//         fill="#a4ac81"
//         d="M42.4 14.5c-.7.5-.8 1.4-.2 2a20.4 20.4 0 11-25-5.4c2.5-1.2 4.2.6 3.5 3.2l-1.2 5.2a1.5 1.5 0
//           102.9.7l3.3-13.5c.2-.8-.3-1.5-1-1.8L10.7.1c-.4-.2-.8-.1-1.1 0-.6.3-1 1.5-.7 2 .1.4.4.7.8.8L16 5.1c2.6.9 2.5 2
//           0 3.3a23.4 23.4 0 1028.5 6.3c-.4-.7-1.4-.8-2-.2z"
//       />
//     </svg>
//   );
// };

const Generator = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [description, setDescription] = useState('');
  const [currentFilter, setFilter] = useState('start');

  let chars = localStorage.getItem('chars') ? JSON.parse(localStorage.getItem('chars')) : [];

  const generate = (wordType) => {
    const firstRandomItem = getRandomItem(firstCollection, currentFilter);
    const secondRandomItem = getRandomItem(secondCollection, currentFilter);
    const thirdRandomItem = getRandomItem(thirdCollection, currentFilter);

    if (wordType) {
      const functions = {
        first: () => setFirst(firstRandomItem.name),
        second: () => {
          setDescription(secondRandomItem.description);
          setSecond(secondRandomItem.name);
        },
        third: () => setThird(thirdRandomItem.name),
      };

      return functions[wordType];
    }

    setFirst(firstRandomItem.name);
    setSecond(secondRandomItem.name);
    setDescription(secondRandomItem.description);
    setThird(thirdRandomItem.name);

  };

  const pushToStorage = (word) => {
    if (window && !window.localStorage) {
      return null;
    }

    chars.push(word);

    if (chars.length > 5) {
      chars.shift()
    }

    localStorage.setItem('chars', JSON.stringify(chars));
  };

  const isGenerated = !!second;
  isGenerated && pushToStorage(`${first} ${second} ${third}`);

  const showFromRight = useSpring({
    from: {
      opacity: isGenerated ? 0 : 1,
      transform: isGenerated ? 'translateX(25%)' : 'translateX(0%)',
    },
    opacity: isGenerated ? 1 : 0,
    transform: isGenerated ? 'translateX(0%)' : 'translateX(25%)',
    config: {
      duration: 150
    },
  });

  return (
    <div className="generator">
      <div className="generator__row">
        <MediaQuery minWidth={741}>
          <div className="generator__left">
            <h2 className="generator__title generator__title_left">Выбранная тема</h2>

            <Filter
              currentFilter={currentFilter}
              onSelect={setFilter}
            />

            {
              description ? (
                <div className="generator__tips">
                  <h3 className="generator__subtitle">А вы знали, что ... ?</h3>
                  <p>{description}</p>
                </div>
              ) : null
            }
          </div>
        </MediaQuery>

        <div className="generator__right">
          <h2 className="generator__title">Слабо {isGenerated ? 'нарисовать' : 'сгенерировать'}?</h2>

          {!isGenerated ? (
            <div>
              <Bottle />
            </div>
            ) : null
          }

          <animated.div style={showFromRight}>
            <GeneratorResultItem
              className="generator__result-item"
              text={first}
              onChange={generate('first')}
            />

            <GeneratorResultItem
              className="generator__result-item"
              text={second}
              onChange={generate('second')}
            />

            <GeneratorResultItem
              className="generator__result-item"
              text={third}
              onChange={generate('third')}
            />
          </animated.div>

          <button
            className="generator__fire"
            type="button"
            onClick={() => generate()}
          >
            {isGenerated ? 'Еще!' : 'Генерировать'}
          </button>
        </div>
      </div>
      <div className="generator__row">
        {chars.length ?
          (<div className="generator__pasts">
            <h3 className="generator__pasts-title">Прошлые руклесы</h3>
            <ul className="generator__pasts-list">
              {chars.reverse().map((item, index) => (
                <li className="generator__pasts-list-item" key={index}>{item}</li>
              ))}
            </ul>
          </div>) : null}
      </div>
    </div>
  );
};


// class Generator extends Component {
//   whatsNext() {
//     this.setState({
//       isWhatsNext: true,
//     });
//   render() {
//     const { char, description, isSecondStep, isWhatsNext } = this.state;
//
//     return (
//       <div className="generator">
//         <div className="generator__row">
//           {
//             !isSecondStep
//               ? (<Button
//                 onClick={this.generate}
//                 style="cta"
//               >
//                 RKLS
//               </Button>)
//               : (<Fragment>
//                 <p>Enough?</p>
//                 <Button
//                   onClick={this.generate}
//                   style="cta"
//                 >Nope</Button>
//                 <Button
//                   onClick={this.whatsNext}
//                 >Sure</Button>
//               </Fragment>
//             )
//           }
//         </div>
//
//         {
//           isWhatsNext &&
//             <div className="generator__row">
//               <h3>What's next?</h3>
//               <div className="tutorial-card">
//                 <h4>Grab the tools</h4>
//                 <p>pic</p>
//               </div>
//
//               <div className="tutorial-card">
//                 <h4>Draw your hero</h4>
//                 <p>pic</p>
//               </div>
//
//               <div className="tutorial-card">
//                 <h4>Ready?</h4>
//                 <p>pic</p>
//               </div>
//
//               <div className="tutorial-card">
//                 <h4>Done!</h4>
//                 <p>pic</p>
//               </div>
//             </div>
//         }
//       </div>
//     );
//   }
// }

export default Generator;
