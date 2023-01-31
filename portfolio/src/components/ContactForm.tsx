import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm('mlevbnbz');
  if (state.succeeded) {
    return <p className='text-white py-5'>Merci pour votre message</p>;
  }
  return (
    <div className='container p-9 lg:w-2/3 w-full mx-auto flex flex-col'>
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <label htmlFor='email' className='text-white text-xl py-2 alignText'>
            Votre adresse email
          </label>
          <input id='email' type='email' name='email' className='bg-white/10 text-white border-2 border-white/10 rounded-md p-2 w-full' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <label htmlFor='message' className='text-white text-xl mt-2 alignText'>
          Votre message
        </label>
        <textarea id='message' name='message' className='bg-white/10 text-white border-2 border-white/10 rounded-md p-2 w-full areaSize' />
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        <button type='submit' disabled={state.submitting} className=' text-xl bg-[#0e9f6e] hover:bg-[#1aa879] text-white font-semibold py-2 px-5 rounded-full hover:bg-green-700 duration-500 my-8 w-full'>
          Envoyer mon message
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
