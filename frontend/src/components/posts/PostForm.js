import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addPost } from "../../actions/post";

import { Container, Row, Col } from "react-bootstrap";
import StepOne from "../forms/StepOne";
import StepTwo from "../forms/StepTwo";
import Final from "../forms/Final";

const PostForm = ({ addPost }) => {
  //   const [text, setText] = useState("");
  //   const [text1, setText1] = useState("");

  //   return (
  //     <div className="post-form">
  //       <div className="bg-primary p">
  //         <h3>Say Something to share with the community!</h3>
  //       </div>
  //       <form
  //         className="form my-1"
  //         onSubmit={(e) => {
  //           e.preventDefault();
  //           addPost({ text, text1 });
  //           setText("");
  //           setText1("");
  //         }}
  //       >
  //         <textarea
  //           name="text"
  //           cols="30"
  //           rows="5"
  //           placeholder="Create a post"
  //           value={text}
  //           onChange={(e) => setText(e.target.value)}
  //           required
  //         ></textarea>
  //         <textarea
  //           name="text"
  //           cols="30"
  //           rows="5"
  //           placeholder="Create a post"
  //           value={text1}
  //           onChange={(e) => setText1(e.target.value)}
  //           required
  //         ></textarea>
  //         <input type="submit" className="btn btn-dark my-1" value="Submit" />
  //       </form>
  //     </div>
  //   );
  // };

  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
};

// PostForm.propTypes = {
//   addPost: PropTypes.func.isRequired,
// };

// export default connect(null, { addPost })(PostForm);
export default PostForm;
