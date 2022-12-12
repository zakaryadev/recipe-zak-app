import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function SearchInput() {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="warning" id="button-addon2">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </InputGroup>
  );
}

export default SearchInput;
