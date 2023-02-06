export const actions = {
  default: async({request}) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // do think with data
    
    return {
      message: "Form is submitted",
    };
  }
}