import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const NavigationButton = () => {
  const navigate = useNavigate();
 
  const handleNavigation = () => {
    // 导航到指定路径
    navigate('/login');
  };
 
  return (
    <button onClick={handleNavigation}>编程式导航</button>
  );
};
 
export default NavigationButton;