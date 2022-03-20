import React from 'react'
import UI from '../styles/icon.module.css'

export default function loading() {
    return (
        <div className={UI.board}>
            <img className={UI.spinner} alt="spinner" src="/icon/spinner.gif" />
        </div>
    );
}
