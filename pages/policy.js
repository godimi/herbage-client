import Head from 'next/head'
import Navigator from '../src/components/Navigator'

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
      <Navigator />
      <div className="policy card">
        <h2>한국디지털미디어고등학교 대나무숲 시행 규칙</h2>
        <strong>제 1조 (목적)</strong>
        <ol>
          <li>
            본 규칙은 한국디지털미디어고등학교 대나무숲 시행 규칙으로,
            대나무숲의 투명한 운영과 종속을 목적으로 한다.
          </li>
        </ol>
        <strong>제 2조 (제보에 관한 규칙)</strong>
        <ol>
          <li>
            ① 대나무숲에 작성된 제보가 다음에 해당하는 경우 해당 제보는 반려
            처리될 수 있다.
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
              <li>12. 타 고등학교 또는 학교를 비방, 비난하는 경우</li>
              <li>13. 지나치게 길거나 지나치게 짧은 경우</li>
              <li>14. 제보 반려 사유를 묻는 경우</li>
              <li>
                15. 기타 제보 중 관리자의 판단 아래 문제가 있다고 판단하는 경우
              </li>
            </ol>
          </li>
          <li>
            ② 제 2조 1항 2호에 해당하는 제보가 공익을 목적으로 하는 고발성
            제보인 경우 관리자의 재량으로 게시될 수 있다. 단, 다음 기준들이
            엄격히 적용된다.
            <ol>
              <li>
                1. 실명 거론의 경우 초성처리나 블라인드 처리 등으로 대체된다.
              </li>
              <li>2. 육하원칙에 의거하여 작성되어야 한다.</li>
              <li>3. 근거 혹은 증거가 포함되어 있으면 안된다.</li>
              <li>4. 추측성 내용이 포함되어 있으면 안된다.</li>
              <li>
                5. 본교의 교사 혹은 교직원이 대상인 불만성 제보는 반려한다
              </li>
            </ol>
          </li>
          <li>
            ③ 그 외에 제 2조 1항의 기준에 해당되는 제보이더라도 논란의 소지가
            없다고 판단되는 범위 내에서 대나무숲 활성화를 위해 관리자의 재량으로
            제보가 게시될 수 있다. 단, 다음 기준들이 적용된다.
            <ol>
              <li>
                1. 홍보를 목적으로 하는 제보는 페이스북 페이지를 통해 관리자에게
                사전 허가를 받아야한다.
              </li>
              <li>
                2. 설문조사를 목적으로 하는 제보는 페이스북 페이지를 통해
                관리자에게 사전 허가를 받아야한다.
              </li>
            </ol>
          </li>
        </ol>

        <strong>제 3조 (쿨타임 제도에 관한 규칙)</strong>
        <p>
          ① 특정 이슈로 대나무숲이 과열되는 조짐을 보이는 경우 관리자들이
          자체적인 판단에 따라 해당 주제에 대한 제보 업로드를 일시적으로
          보류하는 시스템으로, 관리자의 판단 하에 공지 없이 발동할 수 있다. 특정
          이슈에 관한 글은 일정 시간이 지난 후 하나의 게시글로 묶여 업로드된다.
        </p>
        <strong>제 4조 (댓글 삭제에 관한 규칙)</strong>
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
            본 규칙은 2020년 8월 26일부터 적용하고, 2019년 8월 12일부터 적용되던
            시행 규칙은 본 규칙으로 대체된다.
          </li>
        </ol>
      </div>
      <style jsx>
        {`
          * {
            font-family: 'Spoqa Han Sans', sans-serif;
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

          .policy {
            padding: 2rem;
            border-radius: 7.5px;
          }

          .intro {
            color: #8e8e8e;
          }
        `}
      </style>
    </>
  )
}

export default Policy
