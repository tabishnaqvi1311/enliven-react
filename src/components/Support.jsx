import { useForm } from "@formspree/react";
import TransitionEffect from "./TransitionEffect";
const Support = () => {
  const [state, handleSubmit] = useForm("xpzvadel");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="w-full lg:h-[90vh] p-3">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col items-center justify-center gap-10 w-full h-full">
          <div className="flex flex-col items-center gap-3">
            <h3 className="text-primary">Contact Us</h3>
            <p>Any question or remarks? Just write us a message!</p>
          </div>

          <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-5">
              <input
                type="text"
                placeholder="First Name"
                required
                name="first name"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                name="last name"
              />
            </div>

            <div className="flex flex-col items-center gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
              />
              <input
                type="text"
                placeholder="Enter your mobile number"
                required
                name="mobile number"
              />
              <textarea
                placeholder="Your message"
                name="message"
                rows={10}
                cols={10}
                className="p-3 rounded-lg bg-transparent border lg:min-w-[30rem]"
              />

              <button
                className="p-3 rounded-tr-xl rounded-bl-xl bg-primary text-background  border border-primary font-semibold hover:bg-background hover:text-secondary duration-150"
                disabled={state.submitting}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
