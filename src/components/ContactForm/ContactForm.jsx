import Button from '../../atoms/buttons/Button';
import ContactInput from '../../atoms/ContactFormInputs/ContactInput';
import ContactTextArea from '../../atoms/ContactFormInputs/ContactTextArea';
import ErrorField from '../../atoms/SearchFormInputs/ErrorField';

const ContactForm = ({
  form,
  sendEmail,
  emailSended,
  handleSubmit,
  register,
  errors,
  patternEmail
}) => {
  return (
    <form
      className="flex flex-col md:items-start items-center xs:w-[80%] w-full"
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
    >
      <div className="flex flex-col items-start w-[80%]">
        <ContactInput
          label="Name"
          type="text"
          name="user_name"
          register={register}
          field="name"
        />
        <ErrorField
          errorsCode={errors?.name}
          validation="required"
          fieldText="Fields is required"
        />
      </div>
      <div className="mt-4 flex flex-col items-start w-[80%]">
        <ContactInput
          label="Email"
          name="user_email"
          register={register}
          field="email"
          emailPattern={patternEmail}
        />
        <ErrorField
          errorsCode={errors?.email}
          validation="required"
          fieldText="Fields is required"
        />
        <ErrorField
          errorsCode={errors?.email}
          validation="pattern"
          fieldText="Invalid email format"
        />
      </div>
      <div className="mt-4 flex flex-col items-start w-[80%]">
        <ContactTextArea
          label="Message"
          type="text"
          name="user_message"
          register={register}
          field="message"
        />
        <ErrorField
          errorsCode={errors?.message}
          validation="required"
          fieldText="Fields is required"
        />
      </div>

      <div className="flex mt-6 ">
        <Button text={emailSended ? 'Sended!!!' : 'Send email'} type="submit" />
      </div>
    </form>
  );
};

export default ContactForm;
