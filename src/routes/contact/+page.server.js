import { fail } from "@sveltejs/kit";

export const actions = {
  default: async({request}) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // do think with data

    const ERROR_MESSAGES = {
      NAME_MISSING: "Name is missing",
      EMAIL_MISSING: "Email is missing",
      MESSAGE_MISSING: "Message is missing",
    };

    const validateForm = (name, email, message) => {
      const missingField = [];

      if (!name) {
        missingField.push(ERROR_MESSAGES.NAME_MISSING);
      }
      if (!email) {
        missingField.push(ERROR_MESSAGES.EMAIL_MISSING);
      }
      if (!message) {
        missingField.push(ERROR_MESSAGES.MESSAGE_MISSING);
      }

      if (missingField.length) {
        return fail(400, {
          message: `${missingField.join(", ")}`,
        })
      } else {
        return {
          success: true,
          message: "Form is submitted",
        };
      }
    } 

    console.log(validateForm(name, email, message));

    return validateForm(name, email, message);

    
  }
}