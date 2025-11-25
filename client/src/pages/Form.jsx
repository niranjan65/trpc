// import React, { useState, useRef } from 'react';
// import {useForm} from 'react-hook-form'

// export default function Form() {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     dob: '',
// //     gender: [],
// //     maritalStatus: '',
// //     nationality: '',
// //     addressLine1: '',
// //     addressLine2: '',
// //     city: '',
// //     region: '',
// //     zipCode: '',
// //     country: '',
// //     email: '',
// //     phone: '',
// //     medicalInfo: '',
// //     emergencyContactName: '',
// //     emergencyContactNumber: '',
// //     education: '',
// //     schoolName: '',
// //     graduationYear: '',
// //     currentEmployer: '',
// //     jobTitle: '',
// //     yearsExperience: '',
// //     signatureDate: ''
// //   });

// const [currentStep, setCurrenStep] = useState(1);

// const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);

//   const totalSteps = 5;

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       gender: checked 
//         ? [...prev.gender, value]
//         : prev.gender.filter(g => g !== value)
//     }));
//   };

//   const startDrawing = (e) => {
//     setIsDrawing(true);
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//   };

//   const draw = (e) => {
//     if (!isDrawing) return;
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     ctx.lineTo(x, y);
//     ctx.stroke();
//   };

//   const stopDrawing = () => {
//     setIsDrawing(false);
//   };

//   const clearSignature = () => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   };

//   const handleNext = () => {
//     if(currentStep < totalSteps) {
//         setCurrenStep(currentStep + 1)
//     }
//   }

//   const handleBack = () => {
//     if(currentStep > 1) {
//         setCurrenStep(currentStep - 1)
//     }
//   }

//   const onSubmit = (data) => {
//     const canvas = canvasRef.current;
//     const signatureData = canvas.toDataURL();
//     console.log('Form Data:', { data, signature: signatureData });
//     alert('Form submitted! Check console for data.');
//   };

//   return (
//     <div className="min-h-screen bg-[#edeff4] py-8 px-5">
//       <div className="max-w-4xl mx-auto">
//         <div className="bg-white rounded-[50px]-lg shadow-lg">
//           {/* Header */}
//           <div className="border-b border-gray-300 px-10 py-7 rounded-[50px]-t-lg">
//             <h1 className="text-3xl font-medium text-[#252c3e] text-center">
//               Personal Information Form
//             </h1>
//           </div>

//           <div className="p-10 space-y-8">
//             {
//                 currentStep == 1 && (
                    
//             <div>
//               <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
//                 General Info
//               </h2>

//               {/* Name */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Name
//                 </label>
//                 <div className="flex gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     {...register("firstName")}
//                     // value={formData.firstName}
//                     // onChange={handleInputChange}
//                     placeholder="First Name"
//                     className="flex-1 px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     {...register("lastName")}
//                     // value={formData.lastName}
//                     // onChange={handleInputChange}
//                     placeholder="Last Name"
//                     className="flex-1 px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                   />
//                 </div>
//               </div>

//               {/* Date of Birth */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   id="default-datepicker"
//                   name="dob"
//                   {...register("dob")}

//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               {/* Gender */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Gender
//                 </label>
//                 <div className="flex gap-6">
//                   {['Male', 'Female', 'Other'].map((option) => (
//                     <label key={option} className="flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         {...register("checkbox")}
//                         // value={option}
//                         // checked={formData.gender.includes(option)}
//                         // onChange={handleCheckboxChange}
//                         className="w-5 h-5 border-2 border-[#47476b] rounded-[50px] appearance-none checked:border-[#2eb79f] checked:shadow-[0_0_2px_0_#2eb79f] cursor-pointer relative
//                         checked:after:content-[''] checked:after:block checked:after:w-1 checked:after:h-2.5 checked:after:border-r-2 checked:after:border-b-2 checked:after:border-[#2eb79f] checked:after:rotate-45 checked:after:absolute checked:after:-top-0.5 checked:after:left-1.5"
//                       />
//                       <span className="text-[#47476b] text-base">{option}</span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* Marital Status */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Marital Status
//                 </label>
//                 <input
//                   type="text"
//                   name="maritalStatus"
//                   {...register("maritalStatus")}
//                 //   value={formData.maritalStatus}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               {/* Nationality */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Nationality
//                 </label>
//                 <input
//                   type="text"
//                   name="nationality"
//                   {...register("nationality")}
//                 //   value={formData.nationality}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               {/* Address */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Address
//                 </label>
//                 <div className="space-y-4">
//                   <input
//                     type="text"
//                     name="addressLine1"
//                     {...register("addressLine1")}
//                     // value={formData.addressLine1}
//                     // onChange={handleInputChange}
//                     placeholder="Street Address"
//                     className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                   />
//                   <input
//                     type="text"
//                     name="addressLine2"
//                     {...register("addressLine2")}
//                     // value={formData.addressLine2}
//                     // onChange={handleInputChange}
//                     placeholder="Address Line 2"
//                     className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                   />
//                   <div className="flex gap-4">
//                     <input
//                       type="text"
//                       name="city"
//                       {...register("city")}
//                     //   value={formData.city}
//                     //   onChange={handleInputChange}
//                       placeholder="City"
//                       className="flex-1 px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                     />
//                     <input
//                       type="text"
//                       name="region"
//                       {...register("city")}
//                     //   value={formData.region}
//                     //   onChange={handleInputChange}
//                       placeholder="State/Region/Province"
//                       className="flex-1 px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                     />
//                   </div>
//                   <div className="flex gap-4">
//                     <input
//                       type="text"
//                       name="zipCode"
//                       {...register("zipCode")}
//                     //   value={formData.zipCode}
//                     //   onChange={handleInputChange}
//                       placeholder="Postal / Zip Code"
//                       className="flex-1 px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                     />
//                     <input
//                       type="text"
//                       name="country"
//                       {...register("country")}
//                     //   value={formData.country}
//                     //   onChange={handleInputChange}
//                       placeholder="Country"
//                       className="flex-1 px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   {...register("email")}
//                 //   value={formData.email}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               {/* Phone */}
//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   {...register("phone")}
//                 //   value={formData.phone}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>
//             </div>
//                 )
//             }

//             {/* Medical Info Section */}
//             {
//                 currentStep == 2 && (
//                     <div>
//               <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
//                 Medical Info
//               </h2>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Medical Information if any (Existing conditions/ Allergies)
//                 </label>
//                 <textarea
//                   name="medicalInfo"
//                   {...register("medicalInfo")}
//                 //   value={formData.medicalInfo}
//                 //   onChange={handleInputChange}
//                   rows="4"
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[15px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition resize-none"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Emergency Contact Name
//                 </label>
//                 <input
//                   type="text"
//                   name="emergencyContactName"
//                   {...register("emergencyContactName")}
//                 //   value={formData.emergencyContactName}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Emergency Contact Number
//                 </label>
//                 <input
//                   type="tel"
//                   name="emergencyContactNumber"
//                   {...register("emergencyContactNumber")}
//                 //   value={formData.emergencyContactNumber}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>
//             </div>
//                 )
//             }

//             {/* Education Info Section */}
//             {
//                 currentStep == 3 && (
//                     <div>
//               <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
//                 Education Info
//               </h2>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Highest Level of Education
//                 </label>
//                 <input
//                   type="text"
//                   name="education"
//                   {...register("education")}
//                 //   value={formData.education}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   School/ University Name
//                 </label>
//                 <input
//                   type="text"
//                   name="schoolName"
//                   {...register("schoolName")}
//                 //   value={formData.schoolName}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Graduation Year
//                 </label>
//                 <input
//                   type="date"
//                   name="graduationYear"
//                   {...register("graduationYear")}
//                 //   value={formData.graduationYear}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>
//             </div>
//                 )
//             }

//             {/* Employment Info Section */}
//             {
//                 currentStep == 4 && (
//                     <div>
//               <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
//                 Employment Info
//               </h2>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Current Employer
//                 </label>
//                 <input
//                   type="text"
//                   name="currentEmployer"
//                   {...register("currentEmployer")}
//                 //   value={formData.currentEmployer}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Job Title
//                 </label>
//                 <input
//                   type="text"
//                   name="jobTitle"
//                   {...register("jobTitle")}
//                 //   value={formData.jobTitle}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Years of Experience
//                 </label>
//                 <input
//                   type="number"
//                   name="yearsExperience"
//                   {...register("yearsExperience")}
//                 //   value={formData.yearsExperience}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>
//             </div>
//                 )
//             }

//             {/* Acknowledgement Section */}
//             {
//                 currentStep == 5 && (
//                     <div>
//               <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
//                 Acknowledgement
//               </h2>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Signature
//                 </label>
//                 <canvas
//                   ref={canvasRef}
//                   width={720}
//                   height={130}
//                   onMouseDown={startDrawing}
//                   onMouseMove={draw}
//                   onMouseUp={stopDrawing}
//                   onMouseLeave={stopDrawing}
//                   className="w-full h-32 border border-[#b8bbd3] rounded-[15px] bg-white cursor-crosshair"
//                 />
//                 <button
//                   type="button"
//                   onClick={clearSignature}
//                   className="mt-2 text-sm text-[#465475] underline"
//                 >
//                   Clear
//                 </button>
//               </div>

//               <div className="mb-6">
//                 <label className="block text-[#252c3e] font-medium text-base mb-2">
//                   Date
//                 </label>
//                 <input
//                   type="date"
//                   name="signatureDate"
//                   {...register("signatureDate")}
//                 //   value={formData.signatureDate}
//                 //   onChange={handleInputChange}
//                   className="w-full px-3 py-2.5 border border-[#b8bbd3] rounded-[50px] focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
//                 />
//               </div>
//             </div>
//                 )
//             }
//           </div>

//           {/* Submit Button */}
//           {/* <div className="text-center px-6 py-10">
//             <button
//               onClick={handleSubmit(onSubmit)}
//               className="bg-[#2eb79f] text-white px-10 py-3 rounded-[50px]-full text-base font-medium min-w-[100px] border border-transparent transition-transform hover:scale-105 cursor-pointer"
//             >
//               Submit
//             </button>
//           </div> */}

//                     {/* Navigation Buttons */}
//           <div className="px-8 py-6 flex justify-center gap-4 border-t border-gray-200 relative">
//             <div className="absolute right-8 top-1/2 -translate-y-1/2 text-sm text-[#5a7a6d] font-medium">
//               {currentStep}/{totalSteps}
//             </div>
            
//             {currentStep > 1 && (
//               <button
//                 onClick={handleBack}
//                 className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
//               >
//                 Back
//               </button>
//             )}
            
//             {currentStep < totalSteps ? (
//               <button
//                 onClick={handleNext}
//                 className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
//               >
//                 Next
//               </button>
//             ) : (
//               <button
//                 onClick={handleSubmit(onSubmit)}
//                 className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
//               >
//                 Submit
//               </button>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar } from 'lucide-react';
import bg_image from '../assets/red_background.png'
import logo from '../assets/mycard_new_logo.png'


// Custom DatePicker Component
function CustomDatePicker({ value, onChange, name, placeholder = "Select date" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef(null);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDateSelect = (day) => {
    if (day) {
      const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(newDate);
      const formattedDate = newDate.toISOString().split('T')[0];
      onChange(formattedDate);
      setIsOpen(false);
    }
  };

  const handleMonthChange = (increment) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + increment, 1));
  };

  const formatDisplayDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const days = getDaysInMonth(currentMonth);
  const isToday = (day) => {
    const today = new Date();
    return day === today.getDate() && 
           currentMonth.getMonth() === today.getMonth() && 
           currentMonth.getFullYear() === today.getFullYear();
  };

  const isSelected = (day) => {
    if (!selectedDate || !day) return false;
    return day === selectedDate.getDate() && 
           currentMonth.getMonth() === selectedDate.getMonth() && 
           currentMonth.getFullYear() === selectedDate.getFullYear();
  };

  return (
    <div className="relative" ref={datePickerRef}>
      <div className="relative">
        <input
          type="text"
          value={formatDisplayDate(selectedDate)}
          placeholder={placeholder}
          readOnly
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2.5 pl-10  bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition cursor-pointer"
        />
        <Calendar 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a7a6d] w-5 h-5 pointer-events-none" 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border border-[#b8bbd3] rounded-lg shadow-xl p-4 w-80">
          {/* Month/Year Selector */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => handleMonthChange(-1)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3">
              <select
                value={currentMonth.getMonth()}
                onChange={(e) => setCurrentMonth(new Date(currentMonth.getFullYear(), parseInt(e.target.value), 1))}
                className="px-3 py-1 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-[#2eb79f]"
              >
                {months.map((month, idx) => (
                  <option key={month} value={idx}>{month}</option>
                ))}
              </select>

              <select
                value={currentMonth.getFullYear()}
                onChange={(e) => setCurrentMonth(new Date(parseInt(e.target.value), currentMonth.getMonth(), 1))}
                className="px-3 py-1 border border-gray-300 rounded bg-white text-sm focus:outline-none focus:border-[#2eb79f]"
              >
                {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => handleMonthChange(1)}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                {day}
              </div>
            ))}
            {days.map((day, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleDateSelect(day)}
                disabled={!day}
                className={`
                  p-2 text-sm rounded-full transition
                  ${!day ? 'invisible' : ''}
                  ${isSelected(day) ? 'bg-[#2eb79f] text-white font-medium' : ''}
                  ${isToday(day) && !isSelected(day) ? 'border border-[#2eb79f] text-[#2eb79f]' : ''}
                  ${day && !isSelected(day) && !isToday(day) ? 'hover:bg-gray-100' : ''}
                `}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Form() {
  const [currentStep, setCurrentStep] = useState(1);
  const [dateValues, setDateValues] = useState({
    dob: '',
    graduationYear: '',
    signatureDate: ''
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const totalSteps = 5;

  const handleDateChange = (name, value) => {
    setDateValues(prev => ({ ...prev, [name]: value }));
    setValue(name, value);
  };

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data) => {
    const canvas = canvasRef.current;
    const signatureData = canvas.toDataURL();
    console.log('Form Data:', { ...data, ...dateValues, signature: signatureData });
    alert('Form has been successfully submitted! Please check your email ');
  };

  return (
    <div
    
     className="min-h-screen bg-[url(./red_background.png)] py-8 px-5 ">
      <div className="max-w-4xl mx-auto">
        <div
        // style={{ backgroundImage: `url(${bg_image})` }}
         className="bg-[#F0DAC5] rounded-lg shadow-lg">
            <div className='flex w-full  justify-center'>
                <img height={100} width={100} src={logo} alt="" />
            </div>
          {/* Header */}
          <div className="border-b border-gray-300 px-10 py-7 rounded-t-lg">
            
            <h1 className="text-3xl font-medium text-[#252c3e] text-center">
              Personal Information Form
            </h1>
          </div>

          <div className="p-10 space-y-8">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  General Info
                </h2>

                {/* Name */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Name
                  </label>
                  <div className="flex gap-4 flex-wrap">
                    <input
                      type="text"
                      {...register("firstName")}
                      placeholder="First Name"
                      className="flex-1 px-3 bg-white py-2.5 border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                    <input
                      type="text"
                      {...register("lastName")}
                      placeholder="Last Name"
                      className="flex-1 px-3 bg-white py-2.5 border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                  </div>
                </div>

                {/* Date of Birth - Custom Date Picker */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Date of Birth
                  </label>
                  <CustomDatePicker
                    value={dateValues.dob}
                    onChange={(value) => handleDateChange('dob', value)}
                    placeholder="Select date of birth"
                  />
                </div>

                {/* Gender */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Gender
                  </label>
                  <div className="flex gap-6">
                    {['Male', 'Female', 'Other'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          value={option}
                          {...register("gender")}
                          className="w-5 h-5 border-2 bg-white border-[#47476b] rounded appearance-none checked:border-[#2eb79f] checked:shadow-[0_0_2px_0_#2eb79f] cursor-pointer relative
                          checked:after:content-[''] checked:after:block checked:after:w-1 checked:after:h-2.5 checked:after:border-r-2 checked:after:border-b-2 checked:after:border-[#2eb79f] checked:after:rotate-45 checked:after:absolute checked:after:-top-0.5 checked:after:left-1.5"
                        />
                        <span className="text-[#47476b] text-base">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Marital Status */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Marital Status
                  </label>
                  <input
                    type="text"
                    {...register("maritalStatus")}
                    className="w-full px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                {/* Nationality */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    {...register("nationality")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                {/* Address */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Address
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      {...register("addressLine1")}
                      placeholder="Street Address"
                      className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                    <input
                      type="text"
                      {...register("addressLine2")}
                      placeholder="Address Line 2"
                      className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                    />
                    <div className="flex gap-4 flex-wrap">
                      <input
                        type="text"
                        {...register("city")}
                        placeholder="City"
                        className="flex-1 px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                      <input
                        type="text"
                        {...register("region")}
                        placeholder="State/Region/Province"
                        className="flex-1 px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <input
                        type="text"
                        {...register("zipCode")}
                        placeholder="Postal / Zip Code"
                        className="flex-1 px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                      <input
                        type="text"
                        {...register("country")}
                        placeholder="Country"
                        className="flex-1 px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-3 py-2.5 border bg-white border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>
              </div>
            )}

            {/* Medical Info Section */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Medical Info
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Medical Information if any (Existing conditions/ Allergies)
                  </label>
                  <textarea
                    {...register("medicalInfo")}
                    rows="4"
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-lg focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition resize-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    {...register("emergencyContactName")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Emergency Contact Number
                  </label>
                  <input
                    type="tel"
                    {...register("emergencyContactNumber")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>
              </div>
            )}

            {/* Education Info Section */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Education Info
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Highest Level of Education
                  </label>
                  <input
                    type="text"
                    {...register("education")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    School/ University Name
                  </label>
                  <input
                    type="text"
                    {...register("schoolName")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Graduation Year
                  </label>
                  <CustomDatePicker
                    value={dateValues.graduationYear}
                    onChange={(value) => handleDateChange('graduationYear', value)}
                    placeholder="Select graduation date"
                  />
                </div>
              </div>
            )}

            {/* Employment Info Section */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Employment Info
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Current Employer
                  </label>
                  <input
                    type="text"
                    {...register("currentEmployer")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    {...register("jobTitle")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    {...register("yearsExperience")}
                    className="w-full px-3 py-2.5 bg-white border border-[#b8bbd3] rounded-full focus:border-[#2eb79f] focus:shadow-[0_0_2px_0_#2eb79f] focus:outline-none text-[#252c3e] text-base transition"
                  />
                </div>
              </div>
            )}

            {/* Acknowledgement Section */}
            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-medium text-black border-b border-gray-400 pb-2 mb-6">
                  Acknowledgement
                </h2>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Signature
                  </label>
                  <canvas
                    ref={canvasRef}
                    width={720}
                    height={130}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    className="w-full h-32  border border-[#b8bbd3] rounded-lg bg-white cursor-crosshair"
                  />
                  <button
                    type="button"
                    onClick={clearSignature}
                    className="mt-2 text-sm text-[#465475] underline"
                  >
                    Clear
                  </button>
                </div>

                <div className="mb-6">
                  <label className="block text-[#252c3e] font-medium text-base mb-2">
                    Date
                  </label>
                  <CustomDatePicker
                    value={dateValues.signatureDate}
                    onChange={(value) => handleDateChange('signatureDate', value)}
                    placeholder="Select signature date"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="px-8 py-6 flex justify-center gap-4 border-t border-gray-200 relative">
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-sm text-[#5a7a6d] font-medium">
              {currentStep}/{totalSteps}
            </div>
            
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
              >
                Back
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="bg-[#2d5f4f] text-white px-8 py-3 rounded-full text-base font-medium transition-all hover:bg-[#1f4438] hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}