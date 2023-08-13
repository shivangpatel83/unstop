import './assesment.css'
import {useEffect} from 'react'
import { MdOutlineDashboard , MdLaptopMac, MdInsertLink, MdBarChart} from 'react-icons/md'
import {BsViewStacked, BsGlobe, BsFunnelFill} from 'react-icons/bs'
import {BiCalendarEdit, BiMobile, BiSearch} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {HiMenuAlt2} from 'react-icons/hi'
import {FaTimes} from 'react-icons/fa'
import {PiLinkFill} from 'react-icons/pi'
import {RiQuestionnaireLine} from 'react-icons/ri'
import { useState } from 'react'
import { DataStats } from '../DataStats'
import { ShowAssesment } from '../showAssesment/ShowAssesment'
import { ShowModel } from '../model/ShowModel'


function getWindowDimensions() {
    const { innerWidth: width} = window;
    return {
      width
    };
  }

export const Assesment=()=>{

    const [data, setData] = useState([])
    const [desktop, setDesktop] = useState(true)
    const [isChart, setIsChart] = useState(false)
    const [active, setActive] = useState(false)
    const [showDashboard, setShowDashboard] = useState(false)
    const [model, setModel] = useState(false)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      windowDimensions.width<=450 ? setDesktop(false) : setDesktop(true)
      
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [windowDimensions]);

    const toggleModel=()=>setModel(false)

    const gatData=(updateData)=>{
        return setData(updateData)
    }

    const handleBackground=()=>{
        setActive(true)
    }

    const toggleChart=()=>{
        setIsChart(!isChart)
    }

    return (
        <>
        <div className={`assesment ${!desktop ? 'toggleAssesment' : ''}`}>
            <div className={`aside ${desktop? '' : !showDashboard? 'hide' : ''} ${!desktop ? 'toggleaside' : ''}`}>
                <div className={`menuBar ${desktop ?'hide' : ''}`}>
                    <h4>Menu</h4>
                    <FaTimes size={20} style={{cursor: 'pointer'}} onClick={()=>setShowDashboard(false)}/>
                </div>
                <div className={`dashboard ${!desktop ? 'toggleDashboard' : ''}`} onClick={()=>setActive(false)}>
                    <MdOutlineDashboard  size={25}/>
                    <h4>Dashboard</h4>
                </div>
                <div className={`dashboard ${active? 'clicked' : ''} ${!desktop ? 'toggleDashboard' : ''}`} onClick={handleBackground}>
                    <BiCalendarEdit size={25}/>
                    <h4>Assesment</h4>
                </div>
                <div className={`dashboard ${!desktop ? 'toggleDashboard' : ''}`}onClick={()=>setActive(false)}>
                    <RiQuestionnaireLine size={25}/>
                    <h4>My Library</h4>
                </div>
                <div className="line"></div>
                <div className={`${!desktop ? 'aline' : ''} `}onClick={()=>setActive(false)}>
                <div className="admin">
                    <button className='adminBtn'>Admin</button>
                </div>
                <div className={`dashboard none ${!desktop ? 'toggleDashboard' : ''}`}>
                    <PiLinkFill size={25}/>
                    <div className={`${!desktop ? 'round' : ''}`}>
                    <h4>Round</h4>
                    <h4>Status</h4>
                    </div>
                </div>
                </div>
            </div>
            <div className="container">
            {
                desktop?
                <div className="desktopMenu">
                    <div className="desktopNav">
                        <div className="heading">
                            <h3>Assesment</h3>
                        </div>
                        <div className="subHeading">
                            <h4>My Assesment</h4>
                        </div>
                    </div>
                    <div className="mobileIcon" onClick={()=>setDesktop(!desktop)}>
                        <BiMobile size={25} style={{cursor: 'pointer'}} />
                    </div>
                </div>
                :
                <div className="mobileMenu">
                    <div className="topNav">
                        <div className="leftSide">
                            <div className="icons circle">
                                <HiMenuAlt2 size={25} style={{cursor: 'pointer'}} onClick={()=>setShowDashboard(true)}/>
                            </div>
                        <h3>Assesment</h3>
                        </div>
                        <div className="desktopIcon" onClick={()=>setDesktop(!desktop)}>
                            <MdLaptopMac size={25} style={{cursor: 'pointer'}} />
                        </div>
                    </div>
                    <div className="bottomNav">
                        <div className="sheet1">
                            <h5>My Assesments</h5>
                        </div>
                        <div className="sheet2">
                            <h5>Unstop Assesments</h5>
                        </div>
                    </div>
                </div>
            }
                <div className= 'menuDetail'>
                    <div className={`overview ${(!isChart && !desktop) ? 'hideChart': ''}`}>
                        <div className="heading">
                            <h3>Assesments Overview</h3>
                        </div>                
                        <div className="report">
                            <div className="card leftCurve">
                                <h4>Total Assesment</h4>
                                <div className="totalNo">
                                    <div className="icons"><BsViewStacked size={20}/></div>
                                    <div className="data">
                                        <h4>34</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="card tabRight">
                                <h4>Candidates</h4>
                                <div className="totalNo">
                                    <div className="icons"><FiUsers size={20}/></div>
                                    <DataStats h4='11,145' span='+89' h5='Total Candidates'/>
                                    <DataStats class='mark' h4='1,14' span='+89' h5='Who Attempted'/>
                                </div>
                            </div>
                            <div className="card borderNone">
                                <h4>Candidates Source</h4>
                                <div className="totalNo">
                                    <div className="icons globe"><BsGlobe size={20}/></div>
                                    <DataStats h4='11000' span='+89' h5='E-mail'/>
                                    <DataStats class='mark' h4='145' span='+89' h5='Social Share'/>
                                    <DataStats class='mark' h4='145' span='+89' h5='Unique Link'/>
                                </div>
                            </div>
                            <div className="card rightCurve">
                            <h4>Total Purpose</h4>
                                <div className="totalNo">
                                    <div className="icons link"><MdInsertLink size={20}/></div>
                                    <div className="data">
                                        <h4>11</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="myAssesment">
                        <div className="toggleAssesment">
                        <div className="headingName">
                            <h3>My Assesment</h3>
                        </div> 
                        {
                            !desktop?
                        <div className="toggleBars">
                            <BiSearch size={25} style={{cursor: 'pointer'}} />
                            <BsFunnelFill size={25} style={{cursor: 'pointer'}} />
                            <MdBarChart size={25} style={{cursor: 'pointer'}} onClick={toggleChart}/>
                        </div>
                        :
                        ''
                        }
                        </div>               
                        <div className="assesmentDetail">
                            <div className="newAssesment" onClick={()=>setModel(true)}> 
                                <div className="cross">
                                    <h1>+</h1>
                                </div>
                                <div className="assesmentName">
                                    <h3>New Assesment</h3>
                                </div>
                                <div className="desc">
                                    <p>From here you can add questions of mutiple types like MCQ's subjective (text or paragraph)!</p>
                                </div>
                            </div>
                            <ShowAssesment name="Math Assesment" users='1' data = {data}/>
                            <ShowAssesment name="Math Assesment" users='3' data = {data}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            model ? <ShowModel close = {toggleModel} callFunction={gatData}/> : ''

        }
        
        </>
    )
}