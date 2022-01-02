import React from "react";
import './cvMain.css';
import SimpleImageSlider from 'react-simple-image-slider';

class CvMain extends React.Component{
    render() {

        const images = [
            { url: "https://previews.123rf.com/images/peshkov/peshkov1512/peshkov151200532/50382450-business-chart-on-laptop-screen-on-wooden-bench-at-ocean-beach-background.jpg" },
            { url: "https://thumbs.dreamstime.com/b/vector-illustration-full-stack-developer-working-computer-professional-programmer-coding-website-creation-proccess-172914142.jpg"},
            { url: "https://bustickets.com/wp-content/uploads/2019/09/solo-travel-backpack-tips.jpg" },
          ];

        return(
            <div className="main-container">
                <h1 style={{padding:'50px'}}>Gulzhan Begeyeva</h1> 
                <hr/>
                <h4>Education</h4>
                <ul>
                    <li>Codify Academy, Kyrgyzstan (JS Frontend)</li>
                    <li>OSCE Academy, Kyrgyzstan (MA in Politics)</li>
                    <li>University of Tsukuba, Japan (MA in International Studies)</li>
                </ul>
                <h4>Hard Skills</h4>
                <ul>
                    <li>HTML/CSS/Javascript/React/Git - junior level</li>
                    <li>English - near fluent (TOEFL iBT score: 118 out of 120)</li>
                    <li>Trained in Agile/Scrum (certificate)</li>
                </ul>
                <h2 style={{marginTop:'40px'}}>How Do I See Myself 10 Years from Now:</h2>
                <div style={{display: 'flex', justifyContent:'center', padding:'50px'}}>
                <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    slideDuration={1.5}
                />
                </div>
            </div>
            
        )
    }
}

export default CvMain