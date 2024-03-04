import { Outlet } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { Container, Header, Title } from './components/Layout'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const GlobalStyle = createGlobalStyle` 
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing:border-box;
}

//Font 변경
body{
  font-family:"Noto Sans KR", sans-serif;
  background-color:${props => props.theme.bgColor};
  color:${props => props.theme.textColor};
}

//밑줄 안넣기
a {
  text-decoration:none;
  color:inherit;
}
`
function Root() {
  return (
    <div>
      <GlobalStyle />
      <Header>
        <Title>코인</Title>
      </Header>
      <Container>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={true} />
      </Container>
    </div>
  )
}

export default Root
