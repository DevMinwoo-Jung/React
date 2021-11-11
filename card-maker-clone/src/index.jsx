import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service'
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader}/>
));
// 컴포넌트 prop인 경우에는 대문자로 전달한다.
// 그리고 이렇게 외부에서 component를 injection 하는 것은
// 확장성을 위한 것이다.
// 장점으로는 쓸데없이 많은 서비스 
// (예를 들면 youtube, instagram, twiter등을 계속해서 props로 주입하지 않아도 된다)


ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} cardRepository={cardRepository} FileInput={FileInput}/>
  </React.StrictMode>,
  document.getElementById('root')
);
