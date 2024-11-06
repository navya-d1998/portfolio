import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import './index.css';

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Homegenius, a Radian company',
    date: 'May 2024 - Present',
    details: 'Developed .NET RESTful APIs and React/Next.js UI components.',
  },
  {
    title: 'Software Engineer Intern',
    company: 'University of Utah Information Technology',
    date: 'Jan 2024 - May 2024',
    details: 'Architected RESTful APIs using Spring Boot 3 for a student payment reminder system.',
  },
  {
    title: 'Software Engineer',
    company: 'Psoig Digital Pvt.Ltd',
    date: 'Nov 2020 - May 2023',
    details: 'Designed and Developed a Field Data Capturing App using .NET framework and Angular.',
  },
];

export default function Experience() {
  return (
    <div className="container experience-page">
      <div className="text-zone">
        <h1>Experience</h1>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {exp.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  {index % 2 === 0 ? <WorkIcon /> : <SchoolIcon />}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  {exp.title}
                </Typography>
                <Typography>{exp.company}</Typography>
                <Typography>{exp.details}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}