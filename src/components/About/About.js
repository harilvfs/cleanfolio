import GitHubIcon from '@material-ui/icons/GitHub'
import RedditIcon from '@material-ui/icons/Reddit'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, works, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {works && (
          <a href={works}>
            <span type='button' className='btn btn--outline'>
              Works
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.reddit && (
              <a
                href={social.reddit}
                aria-label='reddit'
                className='link link--icon'
              >
                <RedditIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
