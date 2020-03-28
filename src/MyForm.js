import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <div class="form-style-6">
<h1>Contact Us</h1>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xvoqjzap"
        method="POST"
      >
       <input type="text" name="field1" placeholder="Your Name" />
<input type="email" name="field2" placeholder="Email Address" />

<textarea name="field3" placeholder="Type your Message"></textarea>

        {status === "SUCCESS" ? <p>Thanks!</p> :<input type="submit" value="Send" />}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
       
    </form> </div> 
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}