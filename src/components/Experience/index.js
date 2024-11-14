import * as React from 'react';
import { useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import './index.css';
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'


// Import custom icons
import RadianIcon from '../../assets/images/radian-logo.svg';
import UtahIcon from '../../assets/images/utah.png';
import PsiogIcon from '../../assets/images/psiog.png';

const aboutArray = 'Experience'.split('')


const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Homegenius, a Radian company',
    date: 'May 2024 - Present',
    details: [
      'Developed .NET RESTful APIs and React/Next.js UI components.',
      'Optimized data processing by migrating 40+ LINQ queries to stored procedures handling 10M+ housing listings.',
      'Migrated homegenius Real Estate software from .NET MVC to .NET Core and React, boosting application performance by 35%.'
    ],
    icon: RadianIcon,
    iconStyle: { width: '43px' },
  },
  {
    title: 'Software Engineer Intern',
    company: 'University of Utah Information Technology',
    date: 'Jan 2024 - May 2024',
    details: [
      'Architected RESTful APIs with Spring Boot 3 for a student payment reminder system, implementing Spring Security for robust authorization and enhanced security.',
      'Built the frontend of the Repay application using Angular 17, integrating Single Sign-On login authentication with role-based route authorization and asynchronous data handling with RxJS.'
    ],
    icon: UtahIcon,
    iconStyle: { width: '38px', height: '30px' },
  },
  {
    title: 'Software Engineer',
    company: 'Psoig Digital Pvt.Ltd',
    date: 'Nov 2020 - May 2023',
    details: [
      'Designed and Developed a Field Data Capturing App using .NET framework and Angular.',
      'Developed a Field Data Capturing App with .NET and Angular, streamlining job data collection for 10,000+ users.',
      'Enhanced payroll processing capacity by building a .NET Windows Service and automating deployments with Azure CI/CD.',
      'Optimized document generation for high-volume payslips with Open XML, reducing processing time significantly.',
      'Implemented an ML.NET recommendation engine to suggest equipment based on past usage patterns.',
      'Achieved 60% faster response times by designing RESTful APIs in .NET Core, optimizing SQL queries, and creating responsive UIs in React.'
    ],
    icon: PsiogIcon,
    iconStyle: { width: '45px', height: '34px' },
  },
];
export default function Experience() {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
    <div className="container experience-page">
      <div className="text-zone">
        <h1>
        <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>




        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <div className='root'>
                  {exp.date}
                </div>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <img src={exp.icon} alt={`${exp.company} icon`} style={exp.iconStyle} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography align='left' variant="h4" component="div">
                    <div className='title'>
                    {exp.title}
                    </div>
                  </Typography>
                  {/* <Typography className="company-name">{exp.company}</Typography> */}
                  <div className="details">
                    <ul>
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}