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
        <h2>한국디지털미디어고등학교 대나무숲 개인정보처리방침</h2>
        <strong>제 1조 (개인정보의 처리목적)</strong>
        <ol>
          <li>
            한국디지털미디어고등학교 대나무숲(이하 디대숲)에서는 서비스 제공을
            위한 최소한의 개인정보만 처리하며, 서비스 제공 이외의 용도로는
            사용되지 않습니다.
          </li>
        </ol>
        <strong>제 2조 (처리하는 개인정보의 항목)</strong>
        <ol>
          <li>현재 디대숲에서는 어떠한 개인정보도 수집하지 않고 있습니다.</li>
        </ol>

        <strong>제 3조 (개인정보의 처리 및 보유기간)</strong>
        <ol>
          <li>
            이용자 개인정보는 개인정보의 처리목적이 달성되면 지체없이
            파기합니다.
          </li>
        </ol>

        <strong>제 4조 (개인정보의 제3자 제공)</strong>
        <ol>
          <li>
            디대숲에서는 제3자에게 개인정보를 제공하지 않고 있습니다. 단, 다음의
            경우에는 개인정보를 제공할 수 있습니다.
            <ol>
              <li>1. 이용자가 사전에 제3자 제공 및 공개에 동의한 경우</li>
              <li>2. 법령 등에 의해 제공이 요구되는 경우</li>
              <li>
                3. 개인을 식별하기에 특정할 수 없는 상태로 가공하여 이용하는
                경우
              </li>
            </ol>
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
