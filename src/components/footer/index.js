import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Footer_distributed>
      <Footer_left>
        <Footer_left_h4>
          Company<Footer_left_span> MCCN-RECIPES</Footer_left_span>
        </Footer_left_h4>
        <Footer_links>
          <Link_home> Home </Link_home>|<Link_left> Blog </Link_left>|
          <Link_left> Pricing </Link_left>|<Link_left> About </Link_left>|
          <Link_left> Faq </Link_left>|<Link_left> Contact </Link_left>
        </Footer_links>

        <Footer_company_name>Company MCCN © 2021</Footer_company_name>
      </Footer_left>
    </Footer_distributed>
  )
}

const Footer_distributed = styled.footer`
  background: #708090;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 25px 20px;
`

const Footer_left = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 40%;
  display: block;
  width: 100%;
  margin-bottom: 40px;
  text-align: center;
`

const Footer_links = styled.p`
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
`

const Link_home = styled.a`
  font-size: 10px;
`

const Link_left = styled.a`
  font-size: 10px;
`

const Footer_left_h4 = styled.h4`
  font-size: 10px;
`
const Footer_left_span = styled.span`
  font-size: 10px;
`

const Footer_company_name = styled.p`
  color: #222;
  font-size: 7px;
  font-weight: normal;
  margin: 0;
`

export default Footer
