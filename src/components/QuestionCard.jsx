import { useState } from 'react';

function QuestionCard({ resData, saveData, setsaveData }) {
    const [inputVal, setinputVal] = useState({
        QuestionId: "",
        Question: "",
        Answer: "",
    });
    // console.log(resData);
    function handleChange(e, index) {
        const temp={
            QuestionId: resData.questionId,
            Question: resData.Question,
            Answer: resData.options[index],
        }
        setinputVal(temp)
        //  console.log(temp);
    }
    function handleSave(){
      const tempData=[...saveData];
      tempData.push(inputVal);
      setsaveData(tempData);
    //   console.log(tempData);/
    }
    return (

        <div className="whole-card">


            <div>{resData.questionId}. {resData.Question}</div>
            <ul>
                {resData.options.map((item, index) => {
                    return (<li key={index}><input onChange={(e) => handleChange(e, index)} name="options" type="radio" />{item}</li>);
                })}


            </ul>
            <div className="btn">
                <button onClick={()=> handleSave()}>SAVE</button>
            </div>
        </div>

    )
}
export default QuestionCard;