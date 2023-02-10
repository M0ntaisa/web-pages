import { fail } from "@sveltejs/kit";
import { object, string, number, date, InferType } from 'yup';

export const actions = {
  default: async({request}) => {  
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const contactFormSchema = object({
      name: string().required(),
      email: string().required().email(),
      message: string().required()
    });

    // do think with data

    try {
      const result = await contactFormSchema.validate({ name, email, message }, { abortEarly: false });
      console.log(result);
      return {
        success: true,
        status: "Form is submitted"
      }
    } catch (error) {
      console.log(error);
      return error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});
    }


    
    
  }
}