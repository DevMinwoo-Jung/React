import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preivew/preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css'

const Maker = ({FileInput, authService, cardRepository }) => {

  const history = useHistory();
  const historyState = history?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);


  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);
  
  useEffect(() => {
    if(!userId){
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })
    return () => stopSync();
    // return에서 메모리 정리
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [userId, history, authService]);


  
  const createOrUpdateCard = card => {

    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
    // 이전 상태에 있는 것을 참고로 하여 값이 변경된 것을 업데이트 할 때, 즉 컴포넌트 안에 있는 스테이트를 이용해서
    // 업데이트한다고 하면 스테이트가 오래된 것일 수도 있다. 즉 동기적으로 할 수 없을수도 있다.
    // 그렇기 때문에 setStateAction을 보면 (prevState: S) => S 즉 이전 것을 참고로 하여 새 것을 return하는 콜백함수로 쓸 수 있다.
    // 다시 말하자면 state를 업데이트할 때 최신의 state를 가져와서 업데이트 할 수 있다.
  };
  
  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
        <Preview key={Date.now()} cards={cards}/>
      </div>
      <Footer />
    </section>
  )
};

export default Maker;