import React, { useState } from 'react'

function FormSection() {

  const [formData, setFormData] = useState({name: '', email: '', phone:''});
  const [errors, setErrors] = useState({name:'', email:'', phone:''});
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]:value}));
    setErrors((prevErrors) => ({...prevErrors, [name]: ''}));

  };

  const validate = () =>{
    let newErrors ={};
    if(!formData.name) newErrors.name = 'Name is required';
    if(!formData.phone) newErrors.phone ='phone is required';
    if(!formData.email) newErrors.email ='Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()) return ;

    setIsSubmitting(true);
    setSuccessMsg('');
    try{
      const response = await fetch('http://localhost/rest-api/customer/create.php', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      else{
        const result = await response.json();
        console.log('Success:', result.message);
        setSuccessMsg(result.message);
        setFormData({name:'',email:'',phone:''});
        
      }  

    }
    catch (error){
       console.error('Error:', error);
       
    }
    finally{
      setIsSubmitting(false);
    }
  };



  return (
    <div className='bg-gray-100 py-14'>
        <div className="container mx-auto">
           <div className="max-w-3xl mx-auto">
             <h3 className='lg:text-4xl text-center text-2xl mb-10 uppercase font-bold'>Book Appointment</h3>

             <form action="" className='bg-white p-6 lg:p-10 rounded-lg' onSubmit={handleSubmit}>
                <label htmlFor="">Name </label> {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                <input type="text" name='name' className=' input mb-3 lg:mb-5' placeholder='Name '
                onChange={handleChange} value={formData.name}
                />

                <label htmlFor="">Email </label> {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <input type="text" name='email' className=' input mb-3 lg:mb-5' placeholder='Email '
                onChange={handleChange} value={formData.email}
                />

                <label htmlFor="">Phone </label> {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                <input type="text" name='phone' className=' input mb-3 lg:mb-5' placeholder='Phone '
                onChange={handleChange} value={formData.phone}
                />

                <div className='text-center'>
                    <button type='submit' className='book-btn'>  {isSubmitting ? 'Submitting...' : 'Submit'} </button>
                </div>
                <p className='text-green-600 text-lg' >{successMsg}</p>
    
             </form>
            

           </div>
        </div>
        
    </div>
  )
}

export default FormSection