import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function SearchInput(props) {
  const { handleSearch = Function.prototype } = props;
  const [search, setSearch] = useState("a");
  const handle = (e) => {
    handleSearch(search);
    setSearch("");
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch(search);
      setSearch("");
    }
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        value={search}
        placeholder="Type a first letter meal"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      <Button variant="warning" id="button-addon2" onClick={handle}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </InputGroup>
  );
}

export default SearchInput;
