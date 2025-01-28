import uniqid from 'uniqid'
import Hyphenated from 'react-hyphen'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../data/portfolio'

const About = () => {
  const { names, role, company, description, resume, social, greetingEmoji } =
    about
  const firstName = names[0]
  const fadeInAnimationClassName =
    'animate__animated animate__fadeIn animate__delay-5s'

  return (
    <div className='about'>
      <div className='about__pseudo-padding about__pseudo-padding-top' />

      {(firstName || role) && (
        <div>
          {firstName && (
            <h1 className='about__greeting animate__animated animate__fadeInUp animate__delay-1s'>
              Hi, I&apos;m <span className='text--strong'>{firstName}</span>.
              {greetingEmoji && <span> {greetingEmoji}</span>}
            </h1>
          )}

          {role && (
            <h1 className='about__role animate__animated animate__fadeInUp animate__delay-3s'>
              I&apos;m a {role}.
            </h1>
          )}
        </div>
      )}

      {description && (
        <div className={fadeInAnimationClassName}>
          {description && (
            <div className='about__desc paragraph__list'>
              <Hyphenated>
                {description.map((item) => (
                  <p key={uniqid()}>{item}</p>
                ))}
                {/* fragments added to prevent react-hyphen error when description length < 2 */}
                <></>
                <></>
              </Hyphenated>
            </div>
          )}
        </div>
      )}

      {(resume || social) && (
        <div className={`about__contact center ${fadeInAnimationClassName}`}>
          {resume && (
            <a href={resume} target='_blank' rel='noreferrer'>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}
        </div>
      )}

      <div className='about__pseudo-padding' />
    </div>
  )
}

export default About
