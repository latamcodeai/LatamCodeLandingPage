import React from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMemberType } from '../types/TeamMember';

interface TeamMemberProps {
  member: TeamMemberType;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const { t } = useTranslation();
  const { name, experience, role, image, skills, linkedin, github } = member;

  return (
    <div className="team-member">
      <div className="member-image">
        <div className="experience-badge">{t('team.experience', { years: experience })}</div>
        {image && <img src={image} alt={name} />}
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="member-skills">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
      <div className="member-social">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
        )}
      </div>
    </div>
  );
};
