import React from "react";

function About() {
  return (
    <div className="container">
      <h1 className="mt-4">About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing high-quality
        content and services.
      </p>
      <h2 className="mb-4">Meet the Creator</h2>
      <img
        className="creator-image mb-4"
        src="https://images.pexels.com/photos/3777570/pexels-photo-3777570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Website Creator"
      />
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        nec nisl vel placerat. Mauris vel nibh non lacus gravida tempus. Nulla
        eu dui sed magna tincidunt fermentum.
      </h5>
      <h6>
        Nulla consectetur mauris ac fringilla. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Integer tristique nisi eget eros luctus tincidunt.
      </h6>
    </div>
  );
}

export default About;
