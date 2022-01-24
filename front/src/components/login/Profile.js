import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user_id, setUserId] = useState("");
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    const [exist, setExist] = useState(false);

    const history = useNavigate();

    const chekcId = async () => {
        try {

            const userId = user_id;
            const Isexist = await axios.post(
                '/check',
                user_id,
                {headers: {"Content-Type": "text/plain"}}
            );
            setExist(Isexist);
        } catch (err) {
            console.log(err);
        }
    };

    const getProfile = async () => {
        const payload = {
            userId: user_id,
            nickName: nickName,
            profileImage: profileImage,
        };

        try {
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await Kakao.API.request({
                url: "/v2/user/me",
            });
            // 사용자 정보 변수에 저장
            setUserId(data.id);
            setNickName(data.properties.nickname);
            setProfileImage(data.properties.profile_image);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProfile();
        chekcId();
    }, []);

    return (
        <div>
            <h2>{user_id}</h2>
            <h2>{nickName}</h2>
            <img src={profileImage}></img>
        </div>
    );

};
export default Profile;