import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Grade.css'

function Grade() {

  const navigate = useNavigate()
  const name = '김형욱'
  const studentId = '20261234'
  const department = '멀티미디어학과'
  // ----------------------------------------
  // 로그인 여부 확인
  // ----------------------------------------
  const isLogin =
    localStorage.getItem('isLogin')
  // ----------------------------------------
  // 로그인하지 않은 경우 로그인 화면으로 이동
  // ----------------------------------------
  useEffect(() => {
    if (isLogin !== 'true') {
      navigate('/')
    }
  }, [isLogin, navigate])
  // ----------------------------------------
  // 로그아웃
  // ----------------------------------------
  const handleLogout = () => {  // 로그인 여부 삭제
    localStorage.removeItem('isLogin')
    // 로그인 화면으로 이동
    navigate('/')
  }
  // 로그인하지 않았다면 화면을 표시하지 않음
  if (isLogin !== 'true') {
    return null
  }

  return (
    <main className="grade-page">
      <section className="grade-card">
        <p className="grade-label">MY GRADE</p>
        <h1>개인 성적 조회</h1>
        <div className="student-info">
          <p>
            <span>이름</span>
            <strong>{name}</strong>
          </p>

          <p>
            <span>학번</span>
            <strong>{studentId}</strong>
          </p>

          <p>
            <span>학과</span>
            <strong>{department}</strong>
          </p>
        </div>

        <div className="grade-divider"></div>
        <h2>수강 과목 성적</h2>
        <div className="subject-list">
          <div className="subject">
            <span>프론트앤드프로그래밍</span>
            <strong>A+</strong>
          </div>
          <div className="subject">
            <span>멀티미디어프로그래밍</span>
            <strong>A</strong>
          </div>
          <div className="subject">
            <span>데이터베이스</span>
            <strong>B+</strong>
          </div>
        </div>

        <div className="gpa-box">
          <span>평균 평점</span>
          <strong>4.1 / 4.5</strong>
        </div>

        <button onClick={() => navigate('/')}>
          홈으로
        </button>
      </section>
    </main>
  )
}

export default Grade