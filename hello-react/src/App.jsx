import { useNavigate, Navigate } from 'react-router-dom'

import './App.css'
// 1. 이미지 불러오기 (파일 이름과 경로를 본인 파일에 맞게 수정)
import profileImg from './assets/photo.png'
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const name = '전은석'
  const studentId = 'A00464' // 학번 입력
  const department = '멀티미디어학과'
  const goal = '사용하기 편하고 보기 좋은 웹 화면 만들기'
  const qrData =
    '이름: ' + name +
    '\n학번: ' + studentId +
    '\n학과: ' + department

  const navigate = useNavigate()
  console.log(qrData)

  // ----------------------------------------
  // 로그인 여부 가져오기
  // ----------------------------------------

  const isLogin = localStorage.getItem('isLogin')

  // ----------------------------------------
  // 로그인 여부 확인 - 기존에는 정지 화면에서 다시 돌아가는 방법으로 했다면
  // 이번에는 Navigate로 바로 변환도 가능함.
  // ----------------------------------------
  if (isLogin !== 'true') {
    return <Navigate to="/" replace />
  }

  // 로그아웃 함수
  // return보다 위쪽에 작성
  const handleLogout = () => {
    // 로그인 정보 삭제
    localStorage.removeItem('isLogin')
    // 로그인 화면으로 이동
    navigate('/')
  }

  return (
    <main className="page">
      <section className="profile-card">
        <span className="status">● LIVE</span>
        {/* 2. 이니셜 div 대신 img 태그로 교체 */}
        <img src={profileImg} alt="프로필 사진" className="avatar-img" />

        <p className="eyebrow">HELLO REACT</p>
        <h1>{name}</h1>
        <p className="student-id">학번 : {studentId}</p>
        <p className="department">{department}</p>

        <div className="divider"></div>

        <p className="goal">목표: {goal}</p>

        <div className="tags">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>

        {/* 학생증 QR 코드 */}
        <div className="qr-area">
          <QRCodeSVG
            value={qrData}
            size={150}
          />
          <p>학생 QR</p>
        </div>


        <button onClick={() => navigate('/grade')}>
          성적 보기
        </button>

        <div style={{ height: '15px' }}></div>

        {/* 로그아웃 */}
        <button onClick={handleLogout}>
          로그아웃
        </button>

      </section>
    </main>
  )
}

export default App