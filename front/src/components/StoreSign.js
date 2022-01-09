import React from 'react'

export default function StoreSign({ name, imgsrc }) {
    return (
        <div>
            <img src={imgsrc} alt="가게 이미지" width="375" height="200"/>
            <h1>{name}</h1>
            <hr/>
        </div>
    )
}
