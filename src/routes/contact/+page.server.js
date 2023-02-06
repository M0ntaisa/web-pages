import { fail } from "@sveltejs/kit";

export const actions = {
  default: async({request}) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // do think with data
    if (!name) {
      return fail(400, { status: "name is missing", email, message });
    }
    if (!email) {
      return fail(400, { status: "email is missing", name, message });
    }
    if (!message) {
      return fail(400, { status: "message is missing", email, name });
    }
    return {
      status: "Form is submitted",
    };
  }
}