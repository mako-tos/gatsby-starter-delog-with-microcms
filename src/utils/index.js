/**
 * htmlからtagを除去してplain textを返す
 * @param {string} html 
 * @returns {string} plain text
 */
export const html2plain = html => {
  const regex = /(<([^>]+)>)/ig
  return html.replace(regex, '')  
}

/**
 * htmlからdescriptionを返す
 * @param {string} html 
 * @returns {string} description
 */
export const html2description = html => {
  return html2plain(html).substr(0, 120)
}
