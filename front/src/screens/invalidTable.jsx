import React from 'react'

import UI from '../styles/icon.module.css';

export default function invalidTable() {
    return (
    <div className={UI.board}>
        <img className={UI.qrCheck} alt="qrScan" src="/icon/qr.png" />
        <div className={UI.title}>테이블이 선택되지 않았습니다.</div>
        <div className={UI.subtitle}>테이블의 QR 코드를 다시 스캔해주세요.</div>
    </div>
    );
}
