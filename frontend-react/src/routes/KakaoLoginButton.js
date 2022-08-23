const KakaoLoginButton = () => {
  return (
    <div>
      <a href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/oauth2/redirect">
        카카오 로그인
      </a>
    </div>
  )
}

export default KakaoLoginButton;