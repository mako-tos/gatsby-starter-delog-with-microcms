import React from 'react'
import { Link } from "gatsby";
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'

const Thanx = () => (
  <Layout>
    <Helmet>
      <title>お問合せ</title>
      <meta name="description" content={"お問合せページ"} />
    </Helmet>
    <p>
      お問い合わせありがとうございます。<br />
      返信をお待ちくださいますようお願い申し上げます。
    </p>
    <Link to={'/'}>Top</Link>に戻る
  </Layout>
)

export default Thanx