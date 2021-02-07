import React from 'react'
import { useTranslation } from 'react-i18next'
import MultiForm from '../components/multi-form'
// import MultiStepForm from '../components/multi-step-form'
import Title from '../components/title'
import { Container, Main } from '../layouts/container'

const AddRecipe = () => {
  const { t, i18n } = useTranslation()

  return (
    <Main>
      <Container>
        <Title
          as='h1'
          name={t('titres.addRecipeH1')}
          textTransform='uppercase'
          margin='0'
          textAlign='center'
        ></Title>
        {/* <MultiStepForm /> */}
        <MultiForm />
      </Container>
    </Main>
  )
}

export default AddRecipe
