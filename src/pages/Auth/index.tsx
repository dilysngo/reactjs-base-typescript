import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'translations'

const HomeContainer = styled.div`
  font-size: 30px;
  height: 100vh;
  margin: auto;
  background: rgb(51, 51, 51);

  display: flex;
  align-items: center;
  text-align: justify;
  justify-content: center;
`

const Home = () => {
  const { t } = useTranslation()
  return <HomeContainer>{t('Home')}</HomeContainer>
}

export default Home
