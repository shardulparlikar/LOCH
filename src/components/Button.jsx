import React, {useState} from 'react'

    const CustomButton = ({ input }) => {
    const [isValid, setIsValid] = useState(false)
    const [buttonClicked, setIsButtonClicked] = useState(false)
    
    function handleClick(){
        setIsButtonClicked(true)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(emailRegex.test(input)){
            setIsValid(true)
            window.location.href = 'https://app.loch.one/welcome'
        }
        else{
            setIsValid(false)
        }
    }

  return (
    <div>
        <button
          className={`bg-black text-white px-4 py-2 rounded`}
          onClick={handleClick}
          target="_blank"
        >
          Get Started
        </button>

        {(!isValid && buttonClicked) && (
            <p className="text-red-500 mt-2 cur">Please enter a valid email.</p>
        )}
    </div>
  )
}

export default CustomButton;
