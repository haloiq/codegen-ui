import React from 'react'

import { IconGithub, IconTwitter } from '../icons'

const Social = () => (
  <div className='social'>
    <a
      rel='noreferrer noopener'
      target='_blank'
      href='http://github.com/softwareking'
    >
      <IconGithub />
    </a>
    <a
      rel='noreferrer noopener'
      target='_blank'
      href='https://twitter.com/springboot'
    >
      <IconTwitter />
    </a>
  </div>
)

export default Social
