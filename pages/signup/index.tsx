import React, { useState } from "react";
import { CustomInput } from "ui/custom-input";
import { withLabel } from "ui/custom-input/with-label";
export default function Signup() {
  const handleChange = (e: React.ChangeEvent) => {
    console.log("clicked");
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("submitted");
  };

  const TextFieldWithLabel = withLabel(CustomInput);

  return (
    <>
      <form action="POST" onSubmit={handleSubmit}>
        <TextFieldWithLabel
          type="text"
          value={""}
          onChange={() => {}}
          id="name"
        >
          Name:
        </TextFieldWithLabel>

        <button>Submit</button>
      </form>
    </>
  );
}
