import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const SearchPage = () => {
  return (
    <MDBCol md="6">
      <form className="form-inline mt-6 mb-6">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-6 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
  );
}

export default SearchPage;