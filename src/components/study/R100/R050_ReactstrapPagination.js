import React,{Component} from "react";
import { Pagination,PaginationItem,PaginationLink } from "reactstrap";

class R050_ReactstrapPagination extends Component{

Pagination = (type)=>{ alert('go '+type)}

render(){
return(
    <>
    <Pagination size="lg" aria-label="Page navigation examps">

        <PaginationItem >
            <PaginationLink onClick={(e)=>{this.Pagination('previtons')}}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink onClick={(e)=>{this.Pagination('previtons')}}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink onClick={(e)=>{this.Pagination('previtons')}}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink onClick={(e)=>{this.Pagination('previtons')}}>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink onClick={(e)=>{this.Pagination('previtons')}}>5</PaginationLink>
        </PaginationItem>


    </Pagination>
    
    </>
)

}

}

export default R050_ReactstrapPagination;