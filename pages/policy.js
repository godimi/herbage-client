import Router from 'next/router'
import Head from 'next/head'

function Policy() {
  return (
    <>
      <Head>
        <meta property="og:title" content="디대숲" />
        <meta
          property="og:description"
          content="디미고 익명 게시판, 한국디지털미디어고등학교 대나무숲"
        />
      </Head>
      <div className="nav">
        <h1 onClick={() => Router.push('/')}>
          디<span style={{ fontSize: 14 }}>미고</span>대
          <span style={{ fontSize: 14 }}>나무</span>숲
        </h1>
      </div>
      <div className="policy card">
        <h2>한국디지털미디어고등학교 대나무숲 시행 규칙</h2>
        <strong>제 1조 (목적)</strong>
        <ol>
          <li>
            본 규칙은 한국디지털미디어고등학교 대나무숲 시행 규칙으로,
            대나무숲의 투명한 운영과 종속을 목적으로 한다.
          </li>
        </ol>
        <strong>제 2조 (일반 제보에 관한 규칙)</strong>
        <ol>
          <li>
            ① 대나무숲에 작성된 일반 제보가 다음에 해당하는 경우 해당 제보는
            반려 처리될 수 있다.
            <ol>
              <li>1. 특정 인물이나 단체의 실명을 거론하는 경우</li>
              <li>
                2. 실명이 거론되지 않더라도 특정 인물, 단체를 지칭하는 경우
              </li>
              <li>3. 특정 인물, 단체와의 친목을 다지기 위해 작성한 경우</li>
              <li>4. 욕설 및 비속어를 포함하는 경우</li>
              <li>5. 공격적인 어조로 작성한 경우</li>
              <li>6. 홍보를 목적으로 하는 경우</li>
              <li>7. 거래를 목적으로 하는 경우</li>
              <li>8. 설문조사를 포함하는 경우</li>
              <li>9. 분실물 회수를 목적으로 하는 경우</li>
              <li>10. 구인/구직을 목적으로 하는 경우</li>
              <li>11. 정치/종교 등 논란을 불러일으킬 여지가 있는 경우</li>
              <li>12. 타 고등학교 또는 학교를 비방, 비판하는 경우</li>
              <li>13. 지나치게 길거나 지나치게 짧은 경우</li>
              <li>14. 제보 반려 사유를 묻는 경우</li>
              <li>
                15. 기타 제보 중 관리자의 판단 아래 문제가 있다고 판단하는 경우
              </li>
            </ol>
          </li>
          <li>
            ② 제 2조 1항의 기준에 해당되는 제보이더라도 논란의 소지가 없다고
            판단되는 범위 내에서 대나무숲 활성화를 위해 관리자의 재량으로 제보가
            게시될 수 있다. 단, 다음 기준들이 적용된다.
            <ol>
              <li>
                1. 실명 거론의 경우 초성처리나 블라인드 처리 등으로 대체된다.
              </li>
              <li>
                2. 홍보를 목적으로 하는 제보는 관리자에게 사전 허가를
                받아야한다.
              </li>
              <li>
                3. 설문조사를 목적으로 하는 제보는 관리자에게 사전 허가를
                받아야한다.
              </li>
              <li>
                4. 분실물 회수를 목적으로 하는 제보는 관리자에게 사전 허가를
                받아야한다.
              </li>
            </ol>
          </li>
        </ol>

        <strong>제 3조 (고발 제보에 관한 규칙)</strong>
        <ol>
          <li>
            ① 대나무숲에 작성된 고발 제보는 다음의 모든 사항을 충족해야 게시될
            수 있다. 단, 관련 제보가 다수일 경우 한 개의 게시글로 합쳐 업로드될
            수 있다. 이후 추가로 작성된 관련 제보들은 기존 업로드된 게시글에
            추가한다.
            <ol>
              <li>
                1. 육하원칙에 의거하여 작성할 것 (누가, 언제, 어디서, 어떻게,
                무엇을, 왜) 단, 누가는 작성되지 않아도 허용
              </li>
              <li>2. 근거 혹은 증거가 포함되어 있을 것</li>
              <li>3. 추측성 내용이 포함되지 않을 것</li>
              <li>4. 소문을 바탕으로 작성하지 말 것</li>
              <li>5. 비난 혹은 비방이 포함되지 않을 것</li>
            </ol>
          </li>
        </ol>
        <strong>제 4조 (쿨타임 제도에 관한 규칙)</strong>
        <p>
          ① 특정 이슈로 대나무숲이 과열되는 조짐을 보이는 경우 관리자들이
          자체적인 판단에 따라 해당 주제에 대한 제보 업로드를 일시적으로
          보류하는 시스템으로, 관리자의 판단 하에 공지 없이 발동할 수 있다. 특정
          이슈에 관한 글은 일정 시간이 지난 후 하나의 게시글로 묶여 업로드된다.
        </p>
        <strong>제 5조 (댓글 삭제에 관한 규칙)</strong>
        <ol>
          <li>
            ① 대나무숲 게시글에 달린 댓글이 다음 사항에 해당하는 경우 대나무숲
            관리자는 관리자 과반수 표결을 통해 해당 댓글을 공지 없이 삭제할 수
            있다.
            <ol>
              <li>1. 욕설 혹은 비속어를 포함하는 경우</li>
              <li>2. 비난 혹은 비방을 목적으로 하는 경우</li>
              <li>3. 사회 통념상 문제의 소지가 있다고 판단하는 경우</li>
              <li>4. 타 대나무숲 이용자들로부터 신고가 접수된 경우</li>
              <li>5. 관리자의 판단 아래 문제가 있다고 판단하는 경우</li>
            </ol>
          </li>
        </ol>
        <strong>부칙</strong>
        <ol>
          <li>
            본 규칙은 2019년 8월 12일부터 적용하고, 2017년 4월 7일부터 적용되던
            시행 규칙은 본 규칙으로 대체된다.
          </li>
        </ol>
      </div>
      <style jsx>{`
        * {
          font-family: 'Spoqa Han Sans', sans-serif;
        }

        h1 {
          display: inline;
          margin: 0;
          cursor: pointer;
        }

        h2 {
          margin: 0 0 1rem 0;
        }

        ol {
          list-style: none;
          padding-inline-start: 0;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        li ol {
          padding-inline-start: 1rem;
        }

        .nav {
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
        }

        .policy {
          padding: 2rem;
          border-radius: 7.5px;
        }

        .intro {
          color: #8e8e8e;
        }
      `}</style>
    </>
  )
}

export default Policy
