import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { removesearch } from "../actions/searchResultsAction";
import { useNavigate } from "react-router-dom";

export default function SearchResults() {
  const searchresults = useSelector((state) => state.searchresults);
  console.log(searchresults);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <>
      {searchresults.length > 0 ? (
        <>
        <div style={{width: "12rem"}}>
          <p>Search Results:</p>{" "}
          {searchresults.map((x, index) => (
            <>
            <div className="d-flex justify-content-between" style={{cursor:"pointer"}} onClick={()=> navigate(`/search/${x}`)}>
            <p style={{margin:"0px"}} key={index}>{x}</p>
            <p style={{cursor:"pointer", margin:"0px"}} onClick={() => dispatch(removesearch(x))}><ImCross/></p>
            
            </div>
            <hr style={{color:"white", margin:"5px 0px"}}/>
            </>
          ))}</div>
        </>
      ) : null}
    </>
  );
}
