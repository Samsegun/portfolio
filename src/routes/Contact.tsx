import { FormEvent, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useFadeAnimation } from "../hooks/FadeAnimation";
import loadIcon from "/assets/loading.svg";
import { ScrollToTop } from "../components/ScrollToTop";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);
    const scope = useFadeAnimation();

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        setIsSending(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current!,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                response => {
                    toast.success("Mail sent successfully");
                    setIsSending(false);
                    console.log(response);

                    setFormValues({ name: "", email: "", message: "" });
                },
                err => {
                    toast.error("Sending Failed!");
                    setIsSending(false);
                    console.log("error " + err);
                }
            );
    };

    return (
        <>
            <ToastContainer />
            <section
                ref={scope}
                className='text-white my-[3.75rem] xl:my-24 mx-[5%]'>
                <div className='opacity-0 fade'>
                    <h1 className='heading'>Say Hello.</h1>

                    <p
                        className='md:text-2xl leading-6 md:leading-[30px]
             text-[#ffffffcc] font-lexend font-extralight'>
                        Want to work together? Awesome! Send me a quick message.
                    </p>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className='flex flex-col gap-4 mt-14 xl:gap-6'>
                        <div className='mb-5 lg:mb-0 flex flex-col gap-4 xl:flex-row xl:gap-6 '>
                            <input
                                name='name'
                                type='text'
                                placeholder='Full Name'
                                required
                                value={formValues.name}
                                onChange={e =>
                                    setFormValues({
                                        ...formValues,
                                        name: e.target.value,
                                    })
                                }
                                className='mb-6 lg:mb-0'
                            />
                            <input
                                name='email'
                                type='email'
                                placeholder='Email Address'
                                required
                                value={formValues.email}
                                onChange={e =>
                                    setFormValues({
                                        ...formValues,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <textarea
                            name='message'
                            placeholder='Please enter your message'
                            className='h-36'
                            required
                            value={formValues.message}
                            onChange={e =>
                                setFormValues({
                                    ...formValues,
                                    message: e.target.value,
                                })
                            }
                        />

                        <button
                            type='submit'
                            disabled={isSending}
                            className='p-5 bg-[#6863FD] mt-8 
                    rounded-md flex justify-center items-center gap-4'>
                            <span>Get in Touch</span>

                            {isSending && <img src={loadIcon} alt='loading' />}
                        </button>
                    </form>
                </div>
            </section>
            <ScrollToTop />
        </>
    );
};

export default Contact;
