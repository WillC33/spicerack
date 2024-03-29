import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyledInput } from "../@core/components";
import { useJarData } from "../@core/hooks/useJarData.jsx";

const DisplayForm = (props) => {
  const { jarData, setJarData, fetchJarData } = useJarData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJarData({ ...jarData, [name]: value });
  };

  const dispatchUpdate = (e) => {
    e.preventDefault();
    console.log("updating");
  };

  const fetch = () => {
    const tempInput = document.getElementById("temp");
    fetchJarData(tempInput.value);
  };

  useEffect(() => {
    console.log(jarData);
  }, [jarData]);

  return (
    <>
      <StyledInput label="artificial fetch" name="temp" />
      <button onClick={fetch}>Find</button>
      <h2>What's in the Jar?</h2>
      <form onSubmit={dispatchUpdate}>
        <StyledInput
          label="Jar"
          name="friendlyName"
          value={jarData?.friendlyName}
          onChange={handleChange}
        />
        <StyledInput
          label="Content"
          name="content"
          value={jarData?.content}
          onChange={handleChange}
        />
        <StyledInput
          label="Last Filled"
          name="lastFilled"
          value={jarData?.lastFilled}
          onChange={handleChange}
        />
        <button type="submit">Update Me!</button>
        <button type="button">To Shopping</button>
      </form>
    </>
  );
};

DisplayForm.propTypes = {};

export default DisplayForm;
