import React from 'react'
import './Programs.css'
import program_1 from '../../assets/cambridge.png'
import program_2 from '../../assets/michigan.svg'
import program_3 from '../../assets/ielts.png'
import program_icon_1 from '../../assets/excellence.png'
import program_icon_2 from '../../assets/advancement.png'
import program_icon_3 from '../../assets/global.png'
import level from '../../assets/englishlvl.avif'
import { useTranslation } from 'react-i18next'



const Programs = () => {

  const {t,i18n} = useTranslation();

  return (
    <>
    <div className='programs' >
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>{t("Excellence")}</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>{t("Advancement")}</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>{t("Global Opportunity")}</p>
            </div>
        </div>
    </div>
    <p className='program-title'>{t("English Certification: Your Roadmap to Success!")}</p>
    <div className="levels">
        <div className="program-left">
            <img src={level} alt="" />
        </div>
        <div className="program-right">
            <p><b>{t("A1")}</b>{t("A1Text")}</p>
            <p><b>{t("A2")}</b>{t("A2Text")}</p>
            <p><b>{t("B1")}</b>{t("B1Text")}</p>
            <p><b>{t("B2")}</b>{t("B2Text")}</p>
            <p><b>{t("C1")}</b>{t("C1Text")}</p>
            <p><b>{t("C2")}</b>{t("C2Text")}</p>
        </div>
    </div>
    </>
  )
}

export default Programs