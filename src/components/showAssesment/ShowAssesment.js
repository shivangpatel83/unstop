import './showAssesment.css'
import {BiBriefcase} from 'react-icons/bi'
import {FiMoreVertical} from 'react-icons/fi'
import {SlCalender} from 'react-icons/sl'
import {AiOutlineLink} from 'react-icons/ai'

export const ShowAssesment=(props)=>{
    // let user = 3
    let users = new Array(+props.users).fill("LP")

    return(
        <div className="showAssesment">
            <div className="task">
                <div className="topSection">
                    <div className="icons">
                        <BiBriefcase size={20}/>
                    </div>
                    <FiMoreVertical/>
                </div>
                <div className="midSection">
                    <div className="title">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="calender">
                        <h4>Job</h4>
                        <div className="time">
                            <SlCalender/>
                            <p>20 Apr 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="durationGrid">
                <div className="leftGrid">
                    <div className="duration">
                        <h5>00</h5>
                        <h5>Duration</h5>
                    </div>
                    <div className="questions">
                        <h5>00</h5>
                        <h5>Questions</h5>
                    </div>
                </div>
                <div className="rightGrid">
                    <button className='share'>
                        <AiOutlineLink/>
                        Share
                    </button>
                    {/* <div className="name">
                        LP
                    </div> */}
                    <div className="parent">
                    {
                        users.map((ele, index)=>{
                            return(
                                <div className={`name${index+1} name`} key={index+1}>
                                    {ele}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}