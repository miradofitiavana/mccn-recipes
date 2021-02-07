import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { minWidth } from '../../layouts/breakpoints'

const SearchForm = ({ onSubmit, query, onChange }) => {
  const { t, i18n } = useTranslation()

  return (
    <StyledSearchForm onSubmit={onSubmit}>
      <StyledSearchInput
        type='text'
        placeholder={t('searchForm.placeholder')}
        autocomplete='off'
        onChange={onChange}
        value={query}
      />
      <ButtonSearch>
        <StyledSearchButton type='submit' icon={['fas', 'search']} />
      </ButtonSearch>
    </StyledSearchForm>
  )
}

const ButtonSearch = styled.button`
  border: none;
  flex: 0 0;
  padding: 13px 16px;
  font-size: 16px;
  transition: all 0.3s;
  background-color: transparent;
`

const StyledSearchButton = styled(FontAwesomeIcon)`
  color: ${props => props.theme.buttonColor};
`

const StyledSearchInput = styled.input`
  border: 0;
  border-radius: 1px;
  box-shadow: none;
  font-size: 14px;
  padding: 20px 15px;
  background-color: transparent;
  color: ${props => props.theme.color};
  flex: 1;

  ${minWidth('md')`
    font-size: 16px;
    flex: 1;
  `}

  &:focus {
    border: 0;
    outline: none;
  }
`

const StyledSearchForm = styled.form`
  display: flex;
  margin: 40px auto 60px;
  max-width: 100%;
  box-shadow: 0px 2px 1px -1px ${props => props.theme.searchForm.first},
    0px 1px 1px 0px ${props => props.theme.searchForm.second},
    0px 1px 3px 0px ${props => props.theme.searchForm.third};
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  background-color: ${props => props.theme.backgroundColor};

  ${minWidth('md')`
      max-width: 514px;
  `};
`

export default SearchForm
