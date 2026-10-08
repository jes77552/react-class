import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'

function Login() {
  const navigate = useNavigate()
  // DB에서 가져온 사용자 정보라고 가정
  const dbEmail = 'hukim@chungwoon.ac.kr'
  const dbPassword = '1234'

  // 사용자가 입력한 값을 저장
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // 오류 메시지 저장
  const [message, setMessage] = useState('')

  // 로그인 버튼을 눌렀을 때 실행
  const handleLogin = () => {
    // 개발 시 입력 내용 확인 방법 개발 완료 될 경우 삭제
    console.log('입력 이메일:', email)
    console.log('DB 이메일:', dbEmail)

    // 이메일을 입력하지 않은 경우
    if (email === '') {
      setMessage('이메일을 입력하세요.')
      return
    }

    // 비밀번호를 입력하지 않은 경우
    if (password === '') {
      setMessage('비밀번호를 입력하세요.')
      return
    }

    // 사용자가 입력한 값과 DB 값을 비교
    if (email === dbEmail && password === dbPassword) {
      // 로그인 성공
      // ----------------------------------------------------
      // localStorage에 로그인 정보 저장, 이름, 학번, 학과 등도 저장해서 값을 전달 할 수 있음.
      // ----------------------------------------------------
      localStorage.setItem(
        'isLogin',
        'true'
      )
      // 프로필 화면으로 이동
      navigate('/profile')
    } else {
      // 로그인 실패
      setMessage(
        '이메일 또는 비밀번호가 일치하지 않습니다.'
      )
    }
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <p className="login-label">
          STUDENT LOGIN
        </p>
        <h1>로그인</h1>
        <p className="login-guide">
          학교 이메일과 비밀번호를 입력하세요.
        </p>
        {/* form 시작 */}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>이메일</label>
            <input type="email" placeholder="이메일 입력" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호 입력" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {/* 로그인 실패 메시지 */}
          {message && (
            <p className="login-message">
              {message}
            </p>
          )}
          <button onClick={handleLogin}>
            로그인
          </button>
        </form>
        {/* form 끝 */}
        <p className="test-account">
          개인정보 담당자
          <br />
          이메일 : admin@chungwoon.ac.kr
          <br />
          담당자 : 홍길동
          <br />
          연락처 : 032-770-8206
        </p>
      </section>
    </main>
  )
}

export default Login
