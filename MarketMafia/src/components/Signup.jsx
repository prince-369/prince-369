import { useState } from 'react';
import { FiEye, FiEyeOff, FiUser, FiMail, FiPhone, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Required';
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = '10 digits only';
    }
    if (!formData.password) {
      newErrors.password = 'Required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Min 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Signup successful!');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Left Section - Image with Text */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-900 to-indigo-900 p-8 flex-col">
        {/* Logo at top */}
        <div className="flex items-center mb-8">
          <div className="h-10 w-10 rounded-lg  bg-opacity-20 flex items-center justify-center mr-3">
            <img src="/mm.png" alt="MarketMafia" />
              
            
          </div>
          <span className="text-xl font-bold text-white">MarketMafia</span>
        </div>

        {/* Welcome Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">Welcome to MarketMafia</h1>
          <p className="text-lg text-gray-300 mb-8">Join our growing community of professionals</p>
          
          {/* Image below text - Replace with your image */}
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?ga=GA1.1.2022678480.1747276619&semt=ais_items_boosted&w=740"
            alt="Sign up illustration"
            className="h-84 w-84 mx-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Section - Compact Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">Create Account</h2>
            <p className="text-gray-400 mt-1">Get started with your free account</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 bg-gray-800 border ${errors.fullName ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500`}
                  placeholder="Full Name"
                />
              </div>
              {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500`}
                  placeholder="Email"
                />
              </div>
              {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2 bg-gray-800 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500`}
                  placeholder="Phone Number"
                />
              </div>
              {errors.phoneNumber && <p className="mt-1 text-xs text-red-400">{errors.phoneNumber}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-2 bg-gray-800 border ${errors.password ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500`}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-xs text-red-400">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-10 py-2 bg-gray-800 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-700'} rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500`}
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-xs text-red-400">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 mt-2"
            >
              Sign Up
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-5 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;