import { fail } from "@sveltejs/kit";
import { object, string, number, date, InferType } from 'yup';

export const actions = {
  default: async({request}) => {  
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // do think with data

    const contactFormSchema = object({
      name: string().min(2, "Name is at least 2 chars").required("Annonymous user didn't acceptable"),
      email: string().required().email(),
      message: string().required()
    });

    try {
      const result = await contactFormSchema.validate({ name, email, message }, { abortEarly: false });
      console.log(result);
      return {
        success: true,
        status: "Form is submitted"
      }
    } catch (error) {
      console.log(error);
      const errors = error.inner.reduce((acc, err) => {
        return { ...acc, [err.path]: err.message };
      }, {});

      return {
        errors,
        name,
        email,
        message
      }
    }


    
    
  }
}