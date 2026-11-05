import { useState, useMemo, useCallback, useContext } from 'react'
import './App.css'
import Header from './Header.jsx'
import StudentList from './StudentList.jsx'
import { ThemeContext } from './ThemeContext.jsx'
import studentsData from './students.json' // 👈 JSON 파일 임포트

function App() {
  const [searchName, setSearchName] = useState('')
  const [searchMajor, setSearchMajor] = useState('')

  const { theme } = useContext(ThemeContext)

  // 👈 studentsData.students 배열을 사용하도록 수정
  const filteredStudents = useMemo(() => {
    return studentsData.students.filter((student) => {
      const matchesName = student.name.includes(searchName)
      const matchesMajor = student.major.includes(searchMajor)
      return matchesName && matchesMajor
    })
  }, [searchName, searchMajor])

  const averageScore = useMemo(() => {
    if (filteredStudents.length === 0) {
      return 0
    }
    const total = filteredStudents.reduce((sum, student) => sum + student.score, 0)
    return Math.round(total / filteredStudents.length)
  }, [filteredStudents])

  const clearSearch = useCallback(() => {
    setSearchName('')
    setSearchMajor('')
  }, [])

  return (
    <main className={theme === 'light' ? 'page light' : 'page dark'}>
      <Header />
      <section className="search-box">
        <label>학생 이름 검색</label>
        <div className="search-row">
          <input 
            type="text" 
            placeholder="학생 이름 입력" 
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <button onClick={clearSearch}>검색 초기화</button>
        </div>
        <p className="search-result">
          검색 결과 {filteredStudents.length}명 / 평균점수 {averageScore}점
        </p>
      </section>
      
      <section className="search-box">
        <label>전공 검색</label>
        <div className="search-row">
          <input
            type="text"
            placeholder="전공 입력"
            value={searchMajor}
            onChange={(e) => setSearchMajor(e.target.value)}
          />
          <button onClick={clearSearch}>검색 초기화</button>
        </div>
        <p className="search-result">
          검색 결과 {filteredStudents.length}명 / 평균점수 {averageScore}점
        </p>
      </section>
      
      <StudentList students={filteredStudents} />
    </main>
  )
}

export default App