const button = document.getElementById('btn');
const adviceId = document.getElementById('adviceId');
const adviceOutput = document.getElementById('textId');
const body = document.querySelector('body');

    const showAdvice = async () => {
try{
        const response = await fetch('https://api.adviceslip.com/advice')
        const data = await response.json();
        console.log(data?.slip?.advice);
        
        adviceOutput.innerHTML=`"${data?.slip?.advice}"`
        adviceId.innerHTML=data?.slip?.id
        // adviceId.innerHTML=data?.slip?.id
    } 
    catch (error) {
        const errorContainer = document.getElementsByClassName("errorMessage")[0];
        errorContainer.innerHTML ="error-messageFailed to fetch advice. Please try again later.";
        return errorContainer
      }
     showAdvice()
      
    }
button.addEventListener('click', showAdvice);
 
    