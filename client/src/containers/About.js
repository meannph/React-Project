import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
    return(
        <div className="background">
        <Header />
            <div className="about">
            <div className="font-about"><img src="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/251259652_1309401406178035_7210825878971266316_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=YUKgiCs2STgAX-oDsJW&_nc_ht=scontent.fkdt2-1.fna&oh=00_AT-P-V978ZfF960Pvkfio-aePtIE3L1Y_ltmHADNcydFBg&oe=62547A6D"
            className="image"></img>Phanit Subsaithong | Student ID : 6321602949</div></div>
            <Footer Company= "DATA " Email= "phanit.su@ku.th"/>
         </div>
    )
}

export default About;