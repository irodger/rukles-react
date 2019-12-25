import React, { useState, Fragment } from 'react';
import { getRandomItem } from 'helper';
import {useSpring, animated } from "react-spring";

import Filter from 'components/Filter';
import GeneratorResultItem from "./GeneratorResultItem";
import Logotype from "components/Logo/Logotype";
import Bottle from "components/Bottle";

import firstCollection from 'data/first';
import secondCollection from 'data/second';
import thirdCollection from 'data/third';


import './Generator.scss';

const RefreshIcon = ({ onClick }) => {
  return (
    <svg onClick={onClick} width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.6 52.6">
      <path
        fill="#a4ac81"
        d="M42.4 14.5c-.7.5-.8 1.4-.2 2a20.4 20.4 0 11-25-5.4c2.5-1.2 4.2.6 3.5 3.2l-1.2 5.2a1.5 1.5 0
          102.9.7l3.3-13.5c.2-.8-.3-1.5-1-1.8L10.7.1c-.4-.2-.8-.1-1.1 0-.6.3-1 1.5-.7 2 .1.4.4.7.8.8L16 5.1c2.6.9 2.5 2
          0 3.3a23.4 23.4 0 1028.5 6.3c-.4-.7-1.4-.8-2-.2z"
      />
    </svg>
  );
};

const Generator = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [third, setThird] = useState('');
  const [currentFilter, setFilter] = useState('start');
  const [removed, onRemove] = useState(false);

  const generate = () => {
    setFirst(getRandomItem(firstCollection, currentFilter));
    setSecond(getRandomItem(secondCollection, currentFilter));
    setThird(getRandomItem(thirdCollection, currentFilter));
  };

  const generateByWord = (wordType) => {
    const functions = {
      first: () => setFirst(getRandomItem(firstCollection, currentFilter)),
      second: () => setSecond(getRandomItem(secondCollection, currentFilter)),
      third: () => setThird(getRandomItem(thirdCollection, currentFilter)),
    };

    return functions[wordType];
  };

  const showFromRight = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(25%)',
    },
    opacity: 1,
    transform: 'translateX(0%)',
    config: {
      duration: 150
    },
  });

  const isGenerated = !!second.name;

  return (
    <div className="generator">
      <div className="generator__row">
        <div className="generator__left">
          <h2 className="generator__title generator__title_left">Выбранная тема</h2>

          <Filter
            currentFilter={currentFilter}
            onSelect={setFilter}
          />

          {
            second.description ? (
              <Fragment>
                <h3 className="generator__subtitle">А вы знали, что ... ?</h3>
                <p>{second.description}</p>
              </Fragment>
            ) : null
          }
        </div>

        <div className="generator__right">
          <h2 className="generator__title">Слабо {isGenerated ? 'нарисовать' : 'сгенерировать'}?</h2>

          {
            isGenerated ? (
              <div className="generator__result">
                <animated style={showFromRight}>
                  <GeneratorResultItem
                    className="generator__result-item"
                    text={first.name}
                    onChange={generateByWord('first')}
                  />
                </animated>

                <GeneratorResultItem
                  className="generator__result-item"
                  text={second.name}
                  onChange={generateByWord('second')}
                />

                <GeneratorResultItem
                  className="generator__result-item"
                  text={third.name}
                  onChange={generateByWord('third')}
                />
              </div>
            ) : (
              <div>
                <Bottle />
              </div>
            )
          }

          {/*<div className="generator__result">*/}
          {/*  {!removed ? (*/}
          {/*      <animated style={showFromRight}>*/}
          {/*        <GeneratorResultItem*/}
          {/*          className="generator__result-item"*/}
          {/*          text={first.name}*/}
          {/*          onRemove={() => onRemove(!removed)}*/}
          {/*        />*/}
          {/*      </animated>*/}
          {/*    ) : <RefreshIcon onClick={() => onRemove(false)} />}*/}
          {/*  <GeneratorResultItem className="generator__result-item" text={second.name} />*/}
          {/*  <GeneratorResultItem className="generator__result-item" text={third.name} theme="light" />*/}
          {/*</div>*/}

          <button className="generator__fire" type="button" onClick={() => generate()}>{isGenerated ? 'Еще!' : 'Генерировать'}</button>
        </div>
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
