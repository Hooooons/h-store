import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp() {
  const { register, watch, errors } = useForm();

  return (
    <div>
      <form>
        <label>Example</label>
        <input name="example" defaultValue="test" />
        <label>ExampleRequired</label>
        <input
          name="exampleRequired"
          // ref={register({ required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <input type="submit" />
        <Link style={{ color: "gray", textDecoration: "none" }} to="login">
          이미 아이디가 있다면..
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
