import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Form } from "react-bootstrap";
import { useStore } from "../hooks/useStore";
import Button from "react-bootstrap/Button";

const GithubUser = observer(() => {
  const {
    rootStore: { githubUserDetails },
  } = useStore();

  const [userNameText, setUsernameText] = useState("");

  const onClickButton = (e: any) => {
    e.preventDefault();
    console.log("called");
    githubUserDetails.fetchGithubUserDetails(userNameText);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>User Name:{githubUserDetails?.getUserDetails?.name}</p>
        <p>User Location:{githubUserDetails?.getUserDetails?.location}</p>
      </div>
      <Form onSubmit={(e: any) => onClickButton(e)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            onChange={(e: any) => setUsernameText(e.target.value)}
            value={userNameText}
            type="text"
            placeholder="github name.."
          />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
});

export default GithubUser;
