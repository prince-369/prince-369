import { useState } from 'react';
import { FiEye, FiEyeOff, FiPhone, FiLock } from 'react-icons/fi';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Login successful!');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Left Section - Image with Text */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-900 to-indigo-900 p-8 flex-col">
        {/* Logo at top */}
        <div className="flex items-center mb-8">
          <div className="h-10 w-10 rounded-lg bg-opacity-20 flex items-center justify-center mr-3">
            <img src="/mm.png" alt="MarketMafia" />
          </div>
          <span className="text-xl font-bold text-white">MarketMafia</span>
        </div>

        {/* Welcome Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-white mb-4">Welcome Back!</h1>
          <p className="text-lg text-gray-300 mb-8">Login to access your account and continue your journey with us</p>
          
          {/* Image below text */}
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?ga=GA1.1.2022678480.1747276619&semt=ais_items_boosted&w=740"
            alt="Login illustration"
            className="h-84 w-84 mx-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Section - Compact Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">Login to Account</h2>
            <p className="text-gray-400 mt-1">Enter your credentials to continue</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
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

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 mt-2"
            >
              Login
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-5 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-400 hover:text-blue-300 hover:underline">
                Signup
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;