import React from 'react'
import { Link } from "gatsby";
import { Helmet } from 'react-helmet';

const Thanx = () => (
  <>
    <Helmet>
      <title>お問合せ</title>
      <meta name="description" content={"お問合せページ"} />
    </Helmet>
    <p>
      お問い合わせありがとうございます。<br />
      返信をお待ちくださいますようお願い申し上げます。
    </p>
    <Link to={'/'}>Top</Link>に戻る
  </>
)

export default Thanx