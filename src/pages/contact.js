import React from "react";
import Helmet from "react-helmet";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      showModal: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(this.handleSuccess)
      .catch((error) => alert(error));
    event.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    navigate('/contact-thanx')
  };

  render() {
    return (
      <Layout>
        <Helmet>
          <title>お問合せ</title>
          <meta name="description" content={"お問合せページ"} />
        </Helmet>
        <div className="two-grids -contact">
          <div
            className="post-thumbnail"
            style={{
              backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
              marginBottom: 0,
            }}
          >
            <h1 className="post-title">Get in Touch</h1>
            <p>Let me help you kick start your next project &rarr;</p>
          </div>
          <div>
            <form
              name="contact"
              className="form-container"
              data-netlify="true"
              data-netlify-honeypot="bot"
              onSubmit={this.handleSubmit}
            >
              <div>
                <label>
                  お名前
                  <input
                    type="text"
                    name="name"
                    aria-label="name"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.name}
                  />
                </label>
              </div>
              <div>
                <label>
                  メールアドレス
                  <input
                    type="email"
                    name="email"
                    aria-label="email"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.email}
                  />
                </label>
              </div>
              <div>
                <label>
                  タイトル
                  <input
                    type="text"
                    name="subject"
                    aria-label="subject"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.subject}
                  />
                </label>
              </div>
              <div>
                <label>
                  メッセージ
                  <textarea
                    name="message"
                    aria-label="message"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.message}
                  ></textarea>
                </label>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <input
                  type="submit"
                  aria-label="submit"
                  className="button -primary"
                  style={{ marginRight: 0 }}
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
export default ContactForm;
export const pageQuery = graphql`
  query ContactFormQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
