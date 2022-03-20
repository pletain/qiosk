import React from 'react';
import { useNavigate } from 'react-router-dom';
import UI from '../styles/icon.module.css';

export default function page404() {
  let navigate = useNavigate();

  const handleGoBack = () => {
      navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/menu', { replace: true });
};

  return (
    <div className={UI.board}>
      <img className={UI.spinner} alt="spinner" src="/icon/sad.png" />
      <h3>요청하신 페이지는 찾을 수 없습니다❗</h3>
      <div>
        <a className={UI.navBack} onClick={() => handleGoHome()}>🏠주문하기</a>
        <a className={UI.navHome} onClick={() => handleGoBack()}>👈뒤로가기</a>
      </div>
    </div>
  )
}
