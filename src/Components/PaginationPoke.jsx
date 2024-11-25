import { Container, Pagination } from 'react-bootstrap';

const PaginationPoke = ({ currentPage, setCurrentPage, maxPage }) => {

<Container className='d-flex justify-content-center mb-3'>
<Pagination className="mt-5">
    {currentPage > 1 && <>
        <Pagination.First onClick={() => { setCurrentPage(1) }} />
        <Pagination.Prev onClick={() => { setCurrentPage(currentPage - 1) }} />
        <Pagination.Item onClick={() => { setCurrentPage(1) }}>{1}</Pagination.Item>
    </>}

    {currentPage - 5 > 1 && <>
        <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage - 5) }} />
    </>}


    {(currentPage != 2 && currentPage > 1) && <>
        <Pagination.Item onClick={() => { setCurrentPage(currentPage - 1) }}>{currentPage - 1}</Pagination.Item>
    </>}

    <Pagination.Item active>{currentPage}</Pagination.Item>

    {currentPage + 1 < maxPage && <>
        <Pagination.Item onClick={() => { setCurrentPage(currentPage + 1) }}>{currentPage + 1}</Pagination.Item>
    </>}

    {currentPage + 5 <= maxPage && <>
        <Pagination.Ellipsis onClick={() => { setCurrentPage(currentPage + 5) }} />
    </>}

    {currentPage < maxPage && <>
        <Pagination.Item onClick={() => { setCurrentPage(maxPage) }}>{maxPage}</Pagination.Item>
        <Pagination.Next onClick={() => { setCurrentPage(currentPage + 1) }} />
        <Pagination.Last onClick={() => { setCurrentPage(maxPage) }} />
    </>}

</Pagination>
</Container>
}

export default PaginationPoke;