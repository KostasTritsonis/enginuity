import React from 'react'
import './Programs.css'
import program_1 from '../../assets/cambridge.png'
import program_2 from '../../assets/michigan.svg'
import program_3 from '../../assets/ielts.png'
import program_icon_1 from '../../assets/excellence.png'
import program_icon_2 from '../../assets/advancement.png'
import program_icon_3 from '../../assets/global.png'
import level from '../../assets/englishlvl.avif'



const Programs = () => {
  return (
    <>
    <div className='programs' >
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Excellence</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Advancement</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Global Opportunity</p>
            </div>
        </div>
    </div>
    <p className='program-title'>English Certification: Your Roadmap to Success!</p>
    <div className="levels">
        <div className="program-left">
            <img src={level} alt="" />
        </div>
        <div className="program-right">
            <p><b>A1 English (Beginner/Elementary)</b>
            Level A1 corresponds to basic users of English who can understand and
            use familiar everyday expressions and very basic phrases.</p>
            <p><b>A2 English (Pre Intermediate)</b>
            Level A2 corresponds to those users who can understand basic expressions
            and communicate in a simple manner.</p>
            <p><b>B1 English (Intermediate)</b>
            Level B1 corresponds to users who can understand and produce text on familiar
            topics and give opinions and descriptions.</p>
            <p><b>B2 English (Upper Intermediate)</b>
            Level B2 corresponds to users who can produce clear, detailed text and
            interact with a degree of fluency and spontaneity.</p>
            <p><b>C1 English (Advanced)</b>
            Level C1 corresponds to users who can express themselves fluently and spontaneously.
            They can use language flexibly and effectively for all purposes.</p>
            <p><b>C2 English (Proficient)</b>
            Level C2 corresponds to proficient users of English, who can understand and express
            virtually everything with ease and differentiate finer shades of meaning.</p>
        </div>
    </div>
    </>
  )
}

export default Programs