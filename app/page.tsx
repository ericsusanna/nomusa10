import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="http://nomuhansoo.com/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                조성기 노무사 | 노무법인 한수
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                인사말
              </a>
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                업무분야
              </a>
              <a href="#hrdb" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                인사노무DB
              </a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                연락처
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              조성기 공인노무사
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              20년 경력의 인사노무관리 전문가가 현장감있게 상담합니다.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-4xl mx-auto">
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-semibold mb-4">주요 경력</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>공인노무사 (10기)</li>
                  <li>중앙대학교 법학, 서강대학교 MBA(인사)</li>
                  <li>전) 한국 경총 노사대책팀 전문위원</li>
                  <li>전) LG/우리투자증권 인사팀</li>
                  <li>전) 메리츠증권 인사팀/법규준수팀장</li>
                  <li>현) 노무법인 한수 부대표</li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center items-start">
                <Image
                  src="/business-card.jpg"
                  alt="조성기 노무사 명함"
                  width={400}
                  height={225}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            주요 업무분야
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                인사노무자문
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>근로계약, 임금, 근로시간 등 자문</li>
                <li>노조 단체교섭 쟁의행위 대응 자문</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                노동사건
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>부당해고, 근로자성, 임금체불</li>
                <li>부당전보, 특수형태근로자</li>
                <li>근로감독 대응 등</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                인사컨설팅
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>HR전략 수립, 임금체도 개편</li>
                <li>근로시간 개편, 평가제도 개편</li>
                <li>조직문화진단, 보상제도 설계</li>
                <li>공정채용 진단</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                단체교섭 노조 대응 컨설팅
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                단체교섭 전략 수립 및 노조 대응 방안 컨설팅
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                급여아웃소싱
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                급여관리 및 4대보험, 인사관리 아웃소싱 서비스
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                고용장려금지원사업
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>청년일자리도약장려금</li>
                <li>고령자 계속고용장려금</li>
                <li>육아휴직 대체인력 지원금 등 신청 대행</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                일터혁신 컨설팅 지원사업
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                근로시간, 임금, 직무, 평가, 승진 재설계·조직문화 개선 등 무료 컨설팅
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                직장내 괴롭힘 조사 및 갈등조정
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                직장내 괴롭힘 사건 발생시 조사, 남용등 갈등시 갈등조정 활동
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ADR (대안적 분쟁해결제도)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                노사관계, 개별적근로관계 갈등에 대한 조정활동
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HR DB Section */}
      <section id="hrdb" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            인사노무DB
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a 
              href="https://blog.naver.com/cplavictory"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                인사노무이슈
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                조성기 노무사 블로그
              </p>
            </a>
            <a 
              href="https://hrdb.kr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                인사노무 DB
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                노무법인 한수 HR DB
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            상담 문의
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  이름
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  연락처
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  문의내용
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 노무법인 한수. All rights reserved.</p>
            <p className="mt-2">서울시 강남구 테헤란로 309, 1118호 (삼성제일빌딩)</p>
            <p>서울시 영등포구 여의대로 24</p>
            <p>전화: 02-3487-3029 | 070-4118-3448</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
