import React, { useState } from 'react';

interface FormData {
  name: string;
  contact: string;
  email: string;
  query: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    email: '',
    query: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    // Create a hidden iframe for form submission
    const iframeId = 'hidden-form-iframe';
    let iframe = document.getElementById(iframeId) as HTMLIFrameElement;
    
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = iframeId;
      iframe.name = iframeId;
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    // Create form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://script.google.com/macros/s/AKfycbz6K1XoONkeCa7eMFUIb42hQ8xwx9zzbMORm1lVWCC78oMR0f-RggG3A0ERclzGCOL5/exec';
    form.target = iframeId; // Submit to the hidden iframe

    // Add form fields
    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    // Append form to document, submit it, then remove it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Show success message after a delay
    setTimeout(() => {
      setSubmitStatus({
        success: true,
        message: "Form submitted successfully!"
      });
      
      // Reset form
      setFormData({
        name: '',
        contact: '',
        email: '',
        query: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 font-[Akshar]">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Form Section */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#0C33F2] mb-6 md:mb-10">Get In Touch</h2>
          
          {submitStatus.message && (
            <div className={`mb-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 md:p-4 bg-gray-200 rounded-lg text-base md:text-lg"
                required
              />
            </div>
            
            <div>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact"
                className="w-full p-3 md:p-4 bg-gray-200 rounded-lg text-base md:text-lg"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 md:p-4 bg-gray-200 rounded-lg text-base md:text-lg"
                required
              />
            </div>
            
            <div>
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Query"
                className="w-full p-3 md:p-4 bg-gray-200 rounded-lg text-base md:text-lg h-32 md:h-36 resize-none"
                required
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 md:py-3 px-6 md:px-8 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition duration-300 uppercase"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Contact Info Section */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6 md:space-y-12 mt-8 lg:mt-0 lg:ml-8 xl:ml-20">
          <div className="flex items-start md:items-center gap-4 md:gap-6">
            <div className="text-blue-600 mt-1 md:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
              </svg>
            </div>
            <span className="text-gray-800 text-base md:text-lg font-gilroy">info@voltra.in</span>
          </div>
          
          <div className="flex items-start md:items-center gap-4 md:gap-6">
            <div className="text-blue-600 mt-1 md:mt-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.1 14.8 15.7 14.9 15.5 15.1L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.9 8.5C9.1 8.3 9.2 7.9 9.1 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5Z"/>
              </svg>
            </div>
            <span className="text-gray-800 text-base md:text-lg font-gilroy">+91 99929 29203</span>
          </div>
          
          <div className="flex items-start gap-4 md:gap-6">
            <div className="text-blue-600 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
              </svg>
            </div>
            <div className="text-gray-800 text-base md:text-lg font-gilroy">
              <p>3rd Floor, Orchid Center</p>
              <p>Golf Course Road, Sector-53</p>
              <p>Gurugram, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;