import {useState} from "react";

const OAuth2RedirectHandlerKakao = () => {
  const [token, setToken] = useState(new URL(window.location.href).searchParams.get('token'));
  return (
    <div>
      <h1>JWT Token : {token}</h1>
    </div>
  );
}

export default OAuth2RedirectHandlerKakao;