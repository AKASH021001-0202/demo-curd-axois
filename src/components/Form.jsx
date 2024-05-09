import React from "react";

const Form = () => {
  return (
    <>
    <div className="container p-4">
        <form>
        <div className="row">
        <div class="col-lg-6 form-group">
          <label for="id">ID:</label>
          <input type="text" class="form-control" id="id" name="id" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" name="name" />
        </div>
     
        <div class="col-lg-6 form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
          />
        </div>
        <div class="col-lg-6 form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" name="email" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="street">Street:</label>
          <input type="text" class="form-control" id="street" name="street" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="suite">Suite:</label>
          <input type="text" class="form-control" id="suite" name="suite" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="city">City:</label>
          <input type="text" class="form-control" id="city" name="city" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="zipcode">Zipcode:</label>
          <input type="text" class="form-control" id="zipcode" name="zipcode" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="lat">Latitude:</label>
          <input type="text" class="form-control" id="lat" name="lat" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="lng">Longitude:</label>
          <input type="text" class="form-control" id="lng" name="lng" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="phone">Phone:</label>
          <input type="text" class="form-control" id="phone" name="phone" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="website">Website:</label>
          <input type="text" class="form-control" id="website" name="website" />
        </div>
        <div class="col-lg-6 form-group">
          <label for="companyName">Company Name:</label>
          <input
            type="text"
            class="form-control"
            id="companyName"
            name="companyName"
          />
        </div>
        <div class="col-lg-6 form-group">
          <label for="catchPhrase">Catch Phrase:</label>
          <input
            type="text"
            class="form-control"
            id="catchPhrase"
            name="catchPhrase"
          />
        </div>
        <div class="col-lg-12  form-group">
          <label for="bs">BS:</label>
          <input type="text" class="form-control" id="bs" name="bs" />
        </div>
        <button type="submit" class="btn btn-primary btn-lg  mt-5">
          Submit
        </button>
        </div>
      </form>
    </div>
     
    </>
  );
};

export default Form;
