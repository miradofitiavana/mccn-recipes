import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { goToPage } from '../../actions/pagination'

const Pagination = () => {
  const last_page = useSelector(state => state.pagination.last_page)
  const current_page = useSelector(state => state.pagination.current_page)

  const dispatch = useDispatch()

  const handleClick = e => {
    console.log(e)
    dispatch(goToPage(e))
  }

  let pagesElement = []
  for (let i = 1; i <= last_page; i++) {
    // if()
    pagesElement.push(<Paginate onClick={() => handleClick(i)}>{i}</Paginate>)
  }
  return (
    <div>
      <PaginateUl>
        {current_page === 1 ? (
          <PrevNextDisable>Précédent</PrevNextDisable>
        ) : (
          <PrevNext onClick={() => handleClick(current_page - 1)}>
            Précédent
          </PrevNext>
        )}
        {pagesElement}
        {current_page === last_page ? (
          <PrevNextDisable>Suivant</PrevNextDisable>
        ) : (
          <PrevNext onClick={() => handleClick(current_page + 1)}>
            Suivant
          </PrevNext>
        )}
      </PaginateUl>
    </div>
  )
}

const Paginate = styled.li`
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid;
  box-sizing: border-box;

  border-color: ${props => props.theme.borderColor};

  &:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

const PaginateUl = styled.ul`
  list-style: none;
  margin: 0;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${props => props.theme.color};
`

const PrevNextDisable = styled(Paginate)`
  color: #9c9c9c;
  border-color: #9c9c9c;
`

const PrevNext = styled(Paginate)``

export default Pagination
