import React from 'react';
import { useNavigate } from 'react-router-dom';
 
const NavigationButton = ( props ) => {


  const navigate = useNavigate();  //useNavigate方法必须在函数式组件或者自定义方法里使用
 
  const handleNavigation = () => {
    // 导航到指定路径
    navigate('/login');
  };
  
  return (
    <button onClick={handleNavigation}>编程式导航{props.msg}</button>
  );
};
 
export default NavigationButton;