import "./Login.css"
import GuTechSocietyLoginLogo from "../assets/gu_tech_login.png"
import SASLogo from "../assets/SAS_logo.svg"
import React from "react";


class Login extends React.Component {

    constructor(){
      super();
      this.state = {
          message: "" ,
          authenticatedEmail: false,
          authenticatedPassword: false,
      };
      this.updateMessage = this.updateMessage.bind(this);
      this.updatePassword = this.updatePassword.bind(this);
      this.updateEmail = this.updateEmail.bind(this);
    }


    updateMessage() {
      this.setState({
          message: "Well Done!"
      }, () => {
        console.log(this.state)
      });

   }

   updatePassword() {
      this.setState({
          authenticatedPassword: true
      }, () => {
        console.log(this.state)
      });
    }

    updateEmail() {
      this.setState({
          authenticatedEmail: true
      } , () => {
        console.log(this.state)
      });

    }


    render() {
    return (
      <>
        {/*
          This example requires updating your template:

          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <h1>{this.state.message}</h1>
            <div id="top" className="flex flex-col gap-10 super-large-margin">
              <img
                className="mx-3 "
                src={GuTechSocietyLoginLogo}
                alt=""
              />
              x
              <img
                className="mx-3 small-img"
                src={SASLogo}
                alt=""
              >
              </img>
            </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>



          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="super-large-margin">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={() => {
                    if (!this.state.authenticatedEmail  || !this.state.authenticatedPassword ) {
                      scroll(0,0);
                    } else {
                     this.updateMessage();
                    }

                  }}
                >
                  Sign in
                </button>
              </div>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onBlur={() => {
                      scroll(0,0);
                      this.updateEmail();
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onBlur={() => {
                      scroll(0,0);
                      this.updatePassword();
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="super-large-margin">
          </div>
          <h1 className="" >Scroll Back <a href="#top">Up</a> :)</h1>
        </div>
      </>
    )
  }
}

export default Login;
